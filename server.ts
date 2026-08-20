import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Serve static assets from root or dist
app.use(express.static(__dirname));
if (path.resolve(__dirname, 'dist') !== __dirname) {
  app.use(express.static(path.join(__dirname, 'dist')));
}

app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`BAREMOS server running on http://0.0.0.0:${PORT}`);
});
