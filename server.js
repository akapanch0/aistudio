import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Health check endpoints for Cloud Run startup and liveness probes
app.get(['/health', '/healthz', '/_ah/health', '/_healthz'], (_req, res) => {
  res.status(200).send('OK');
});

// Serve static assets from dist if available, or fallback to root
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
}
app.use(express.static(__dirname));

app.get('*', (_req, res) => {
  const indexDist = path.join(distDir, 'index.html');
  if (fs.existsSync(indexDist)) {
    res.sendFile(indexDist);
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`BAREMOS server running on http://0.0.0.0:${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});
