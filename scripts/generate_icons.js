import fs from 'fs';
import sharp from 'sharp';

const iconDir = './icons';
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir, { recursive: true });
}

function generateSvg(size) {
  const radius = Math.round(size * 0.18);
  const boltScale = size / 24;
  const padding = size * 0.15;
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e4baf" />
      <stop offset="100%" stop-color="#072b6b" />
    </linearGradient>
    <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffd000" />
      <stop offset="100%" stop-color="#ff9100" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="${size * 0.03}" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <!-- Background with slight rounded or full canvas -->
  <rect width="${size}" height="${size}" rx="${radius}" fill="url(#bgGrad)" />
  
  <!-- Subtle inner border -->
  <rect x="${size * 0.02}" y="${size * 0.02}" width="${size * 0.96}" height="${size * 0.96}" rx="${radius * 0.9}" fill="none" stroke="#4d8cfa" stroke-width="${Math.max(1, size * 0.015)}" stroke-opacity="0.35" />

  <!-- Electric Bolt Icon -->
  <g transform="translate(${size * 0.18}, ${size * 0.14}) scale(${size * 0.027})" filter="url(#glow)">
    <path d="M13 2L3 14h8l-2 8 12-12h-8l2-8z" fill="url(#boltGrad)" />
  </g>
</svg>`;
}

const sizes = [
  { name: 'icon-48.png', size: 48 },
  { name: 'icon-72.png', size: 72 },
  { name: 'icon-96.png', size: 96 },
  { name: 'icon-128.png', size: 128 },
  { name: 'icon-144.png', size: 144 },
  { name: 'icon-152.png', size: 152 },
  { name: 'icon-180.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-384.png', size: 384 },
  { name: 'icon-512.png', size: 512 },
  { name: 'favicon.png', size: 32 }
];

async function generateAll() {
  for (const item of sizes) {
    const svgBuffer = Buffer.from(generateSvg(item.size));
    const outputPath = `${iconDir}/${item.name}`;
    await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png()
      .toFile(outputPath);
    console.log(`Generated ${outputPath} (${item.size}x${item.size})`);
  }
}

generateAll().then(() => console.log('All PWA icons generated successfully!')).catch(console.error);
