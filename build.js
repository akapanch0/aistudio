import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

// Clean up any stray bun lockfiles
for (const lockfile of ['bun.lock', 'bun.lockb']) {
  const p = path.join(__dirname, lockfile);
  if (fs.existsSync(p)) {
    try { fs.unlinkSync(p); } catch {}
  }
}

// Reset dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy static web assets to dist
const itemsToCopy = [
  'index.html',
  'styles.css',
  'app.js',
  'db.js',
  'firebase.js',
  'firebase-applet-config.json',
  'baremo.json',
  'manifest.json',
  'sw.js',
  'version.json',
  'VERSION',
  'icons',
  'maps'
];

for (const item of itemsToCopy) {
  const src = path.join(__dirname, item);
  const dest = path.join(distDir, item);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
  }
}

console.log('Build completed successfully. Files copied to dist/.');

