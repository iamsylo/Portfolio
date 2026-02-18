import { existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const distBackupPath = resolve(process.cwd(), 'dist', 'graphics_backup');

if (existsSync(distBackupPath)) {
  rmSync(distBackupPath, { recursive: true, force: true });
  console.log(`Removed backup assets from build output: ${distBackupPath}`);
}