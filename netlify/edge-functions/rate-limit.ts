const DEFAULT_LIMIT = 60;
const DEFAULT_WINDOW_SECONDS = 60;

function getEnvNumber(name: string, fallback: number): number {
  const raw = Deno.env.get(name);
  if (!raw) return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getClientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) {
    const first = xff.split(',')[0]?.trim();
    if (first) return first;
  }

  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp;

  return 'unknown';
}

function ipv4ToNumber(ip: string): number | null {
  const parts = ip.split('.');
  if (parts.length !== 4) return null;

  const nums = parts.map((part) => Number(part));
  if (nums.some((value) => !Number.isInteger(value) || value < 0 || value > 255)) {
    return null;
  }

  return (
    nums[0] * 256 ** 3 +
    nums[1] * 256 ** 2 +
    nums[2] * 256 +
    nums[3]
  );
}

function isIpAllowedByCidr(clientIp: string, cidr: string): boolean {
  const [baseIp, prefixString] = cidr.split('/');
  const prefix = Number(prefixString);

  if (!baseIp || !Number.isInteger(prefix) || prefix < 0 || prefix > 32) {
    return false;
  }

  const clientNum = ipv4ToNumber(clientIp);
  const baseNum = ipv4ToNumber(baseIp);
  if (clientNum === null || baseNum === null) {
    return false;
  }

  if (prefix === 0) {
    return true;
  }

  const hostBits = 32 - prefix;
  const mask = (0xffffffff << hostBits) >>> 0;
  return (clientNum & mask) === (baseNum & mask);
}

function isAllowlisted(clientIp: string): boolean {
  const rawAllowlist = Deno.env.get('RATE_LIMIT_ALLOWLIST');
  if (!rawAllowlist || clientIp === 'unknown') {
    return false;
  }

  const entries = rawAllowlist
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);

  return entries.some((entry) => {
    if (entry.includes('/')) {
      return isIpAllowedByCidr(clientIp, entry);
    }

    return entry === clientIp;
  });
}

function shouldSkipRateLimit(pathname: string): boolean {
  return pathname.startsWith('/assets/') || pathname === '/favicon.ico';
}

async function incrementWindowCounter(redisUrl: string, redisToken: string, key: string, ttlSeconds: number): Promise<number | null> {
  const pipelineResponse = await fetch(`${redisUrl}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${redisToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      ['INCR', key],
      ['EXPIRE', key, ttlSeconds],
    ]),
  });

  if (!pipelineResponse.ok) {
    return null;
  }

  const pipelineData = await pipelineResponse.json();
  const count = pipelineData?.[0]?.result;
  return typeof count === 'number' ? count : null;
}

export default async (request: Request): Promise<Response> => {
  const url = new URL(request.url);

  if (shouldSkipRateLimit(url.pathname)) {
    return fetch(request);
  }

  const redisUrl = Deno.env.get('UPSTASH_REDIS_REST_URL');
  const redisToken = Deno.env.get('UPSTASH_REDIS_REST_TOKEN');

  if (!redisUrl || !redisToken) {
    return fetch(request);
  }

  const limit = getEnvNumber('RATE_LIMIT_REQUESTS', DEFAULT_LIMIT);
  const windowSeconds = getEnvNumber('RATE_LIMIT_WINDOW_SECONDS', DEFAULT_WINDOW_SECONDS);
  const clientIp = getClientIp(request);

  if (isAllowlisted(clientIp)) {
    return fetch(request);
  }

  const windowBucket = Math.floor(Date.now() / (windowSeconds * 1000));
  const redisKey = `rate_limit:${clientIp}:${windowBucket}`;

  const currentCount = await incrementWindowCounter(redisUrl, redisToken, redisKey, windowSeconds + 5);

  if (currentCount === null) {
    return fetch(request);
  }

  if (currentCount > limit) {
    return new Response('Too Many Requests', {
      status: 429,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Retry-After': String(windowSeconds),
        'Cache-Control': 'no-store',
      },
    });
  }

  const response = await fetch(request);
  const headers = new Headers(response.headers);
  headers.set('X-RateLimit-Limit', String(limit));
  headers.set('X-RateLimit-Remaining', String(Math.max(0, limit - currentCount)));
  headers.set('X-RateLimit-Window', String(windowSeconds));

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};
