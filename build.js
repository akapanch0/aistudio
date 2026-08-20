import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy files and directories to dist
const itemsToCopy = [
  'index.html',
  'styles.css',
  'app.js',
  'db.js',
  'firebase.js',
  'firebase-applet-config.json',
  'firebase-blueprint.json',
  'firestore.rules',
  'baremo.json',
  'manifest.json',
  'sw.js',
  'version.json',
  'VERSION',
  'icons',
  'maps',
  'metadata.json'
];

for (const item of itemsToCopy) {
  const src = path.join(__dirname, item);
  const dest = path.join(distDir, item);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
  }
}

console.log('Build completed successfully. Files copied to dist/.');
