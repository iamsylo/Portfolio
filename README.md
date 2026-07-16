# Sylo's Creative Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio serves as both a resume and creative showcase for a computer science graduate with skills in development, photography, videography, and graphic design.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth animations and transitions using Framer Motion
- **Type-Safe**: Built with TypeScript for better development experience
- **Fast**: Optimized with Vite for fast development and build times

## 🛡️ Netlify Usage & Abuse Hardening

This project includes deployment safeguards to reduce bandwidth waste and abusive probing:

- Backup assets are automatically removed from production output (`dist/graphics_backup`)
- Security headers are configured via `netlify.toml` (CSP, HSTS, frame blocking, etc.)
- Long-term caching is enabled for hashed build assets (`/assets/*`)
- Common bot probe paths (`/wp-admin/*`, `/.git/*`, etc.) are force-404 redirected

### Edge Rate Limiting (recommended)

The project includes an Edge Function at `netlify/edge-functions/rate-limit.ts` that rate-limits by client IP and returns `429` when traffic exceeds your threshold.

Set these environment variables in Netlify site settings:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `RATE_LIMIT_REQUESTS` (optional, default: `60`)
- `RATE_LIMIT_WINDOW_SECONDS` (optional, default: `60`)
- `RATE_LIMIT_ALLOWLIST` (optional, comma-separated exact IPs and/or IPv4 CIDR ranges)

Suggested starting values:

- `RATE_LIMIT_REQUESTS=60`
- `RATE_LIMIT_WINDOW_SECONDS=60`

Allowlist example:

- `RATE_LIMIT_ALLOWLIST=203.0.113.4,198.51.100.0/24`

After setting env vars, trigger a fresh deploy so the Edge Function picks up the values.

Important: no static-site config can fully stop large DDoS traffic by itself. For stronger protection, put the site behind Cloudflare (or equivalent WAF/rate limiting) in front of Netlify.

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth animations
- **Build Tool**: Vite
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

### Building for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## ✨ Customization

### Personal Information
Edit the data in `src/data/portfolio.ts` to customize:
- Personal details and bio
- Work experience
- Projects
- Skills and certificates
- Media gallery items
- Contact information

### Images
Replace placeholder images in the `public` directory with your actual photos and project images.

---

**Note**: Remember to replace all placeholder content with your actual information, projects, and media before deploying to production.
