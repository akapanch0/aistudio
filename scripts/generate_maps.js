import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

function createPNG(width, height, drawFn) {
  // RGBA buffer: (width * 4 + 1 filter byte) per row
  const rowSize = 1 + width * 4;
  const rawBuffer = Buffer.alloc(rowSize * height);

  // Drawing context helper
  const pixels = new Uint8ClampedArray(width * height * 4);

  function setPixel(x, y, r, g, b, a = 255) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = (y * width + x) * 4;
    if (a < 255) {
      const bgA = pixels[idx + 3] / 255;
      const fgA = a / 255;
      const outA = fgA + bgA * (1 - fgA);
      if (outA > 0) {
        pixels[idx] = Math.round((r * fgA + pixels[idx] * bgA * (1 - fgA)) / outA);
        pixels[idx + 1] = Math.round((g * fgA + pixels[idx + 1] * bgA * (1 - fgA)) / outA);
        pixels[idx + 2] = Math.round((b * fgA + pixels[idx + 2] * bgA * (1 - fgA)) / outA);
        pixels[idx + 3] = Math.round(outA * 255);
      }
    } else {
      pixels[idx] = r;
      pixels[idx + 1] = g;
      pixels[idx + 2] = b;
      pixels[idx + 3] = a;
    }
  }

  function fillRect(x, y, w, h, r, g, b, a = 255) {
    const startX = Math.max(0, Math.floor(x));
    const startY = Math.max(0, Math.floor(y));
    const endX = Math.min(width, Math.ceil(x + w));
    const endY = Math.min(height, Math.ceil(y + h));
    for (let py = startY; py < endY; py++) {
      for (let px = startX; px < endX; px++) {
        setPixel(px, py, r, g, b, a);
      }
    }
  }

  function drawLine(x0, y0, x1, y1, r, g, b, a = 255, thickness = 1) {
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    const half = Math.floor(thickness / 2);

    let cx = Math.floor(x0);
    let cy = Math.floor(y0);
    const tx = Math.floor(x1);
    const ty = Math.floor(y1);

    while (true) {
      for (let ox = -half; ox <= half; ox++) {
        for (let oy = -half; oy <= half; oy++) {
          setPixel(cx + ox, cy + oy, r, g, b, a);
        }
      }
      if (cx === tx && cy === ty) break;
      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        cx += sx;
      }
      if (e2 < dx) {
        err += dx;
        cy += sy;
      }
    }
  }

  function drawCircle(cx, cy, radius, r, g, b, a = 255, fill = true) {
    const r2 = radius * radius;
    const minX = Math.max(0, Math.floor(cx - radius));
    const maxX = Math.min(width - 1, Math.ceil(cx + radius));
    const minY = Math.max(0, Math.floor(cy - radius));
    const maxY = Math.min(height - 1, Math.ceil(cy + radius));

    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const d2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
        if (fill) {
          if (d2 <= r2) setPixel(x, y, r, g, b, a);
        } else {
          if (Math.abs(d2 - r2) <= radius * 1.5) setPixel(x, y, r, g, b, a);
        }
      }
    }
  }

  // Simple 5x7 bitmap font for rendering text labels clearly on the technical map
  const FONT_5X7 = {
    'A': [0x70,0x88,0x88,0xF8,0x88,0x88,0x88],
    'B': [0xF0,0x88,0x88,0xF0,0x88,0x88,0xF0],
    'C': [0x78,0x88,0x80,0x80,0x80,0x88,0x78],
    'D': [0xF0,0x88,0x88,0x88,0x88,0x88,0xF0],
    'E': [0xF8,0x80,0x80,0xF0,0x80,0x80,0xF8],
    'F': [0xF8,0x80,0x80,0xF0,0x80,0x80,0x80],
    'G': [0x78,0x88,0x80,0xB8,0x88,0x88,0x78],
    'H': [0x88,0x88,0x88,0xF8,0x88,0x88,0x88],
    'I': [0x70,0x20,0x20,0x20,0x20,0x20,0x70],
    'J': [0x38,0x10,0x10,0x10,0x10,0x90,0x60],
    'K': [0x88,0x90,0xA0,0xC0,0xA0,0x90,0x88],
    'L': [0x80,0x80,0x80,0x80,0x80,0x80,0xF8],
    'M': [0x88,0xD8,0xA8,0x88,0x88,0x88,0x88],
    'N': [0x88,0xC8,0xA8,0x98,0x88,0x88,0x88],
    'O': [0x70,0x88,0x88,0x88,0x88,0x88,0x70],
    'P': [0xF0,0x88,0x88,0xF0,0x80,0x80,0x80],
    'Q': [0x70,0x88,0x88,0x88,0xA8,0x90,0x68],
    'R': [0xF0,0x88,0x88,0xF0,0xA0,0x90,0x88],
    'S': [0x78,0x88,0x80,0x70,0x08,0x88,0x78],
    'T': [0xF8,0x20,0x20,0x20,0x20,0x20,0x20],
    'U': [0x88,0x88,0x88,0x88,0x88,0x88,0x70],
    'V': [0x88,0x88,0x88,0x88,0x50,0x50,0x20],
    'W': [0x88,0x88,0x88,0xA8,0xA8,0xD8,0x88],
    'X': [0x88,0x88,0x50,0x20,0x50,0x88,0x88],
    'Y': [0x88,0x88,0x50,0x20,0x20,0x20,0x20],
    'Z': [0xF8,0x08,0x10,0x20,0x40,0x80,0xF8],
    '0': [0x70,0x88,0x98,0xA8,0xC8,0x88,0x70],
    '1': [0x20,0x60,0x20,0x20,0x20,0x20,0x70],
    '2': [0x70,0x88,0x08,0x30,0x40,0x80,0xF8],
    '3': [0xF8,0x08,0x10,0x30,0x08,0x88,0x70],
    '4': [0x10,0x30,0x50,0x90,0xF8,0x10,0x10],
    '5': [0xF8,0x80,0xF0,0x08,0x08,0x88,0x70],
    '6': [0x38,0x40,0x80,0xF0,0x88,0x88,0x70],
    '7': [0xF8,0x08,0x10,0x20,0x40,0x40,0x40],
    '8': [0x70,0x88,0x88,0x70,0x88,0x88,0x70],
    '9': [0x70,0x88,0x88,0x78,0x08,0x10,0x60],
    '-': [0x00,0x00,0x00,0xF8,0x00,0x00,0x00],
    '.': [0x00,0x00,0x00,0x00,0x00,0x60,0x60],
    ':': [0x00,0x60,0x60,0x00,0x60,0x60,0x00],
    '/': [0x08,0x10,0x20,0x40,0x80,0x00,0x00],
    ' ': [0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    'Á': [0x20,0x70,0x88,0xF8,0x88,0x88,0x88],
    'É': [0x20,0xF8,0x80,0xF0,0x80,0x80,0xF8],
    'Í': [0x20,0x70,0x20,0x20,0x20,0x20,0x70],
    'Ó': [0x20,0x70,0x88,0x88,0x88,0x88,0x70],
    'Ú': [0x20,0x88,0x88,0x88,0x88,0x88,0x70],
    'Ñ': [0x70,0x88,0xC8,0xA8,0x98,0x88,0x88],
  };

  function drawText(str, px, py, scale = 2, r = 255, g = 255, b = 255, a = 255) {
    const upper = str.toUpperCase();
    let curX = Math.floor(px);
    const startY = Math.floor(py);

    for (let i = 0; i < upper.length; i++) {
      const ch = upper[i];
      const glyph = FONT_5X7[ch] || FONT_5X7[' '];
      for (let row = 0; row < 7; row++) {
        const rowBits = glyph[row] || 0;
        for (let col = 0; col < 5; col++) {
          if ((rowBits & (0x80 >> col)) !== 0) {
            fillRect(curX + col * scale, startY + row * scale, scale, scale, r, g, b, a);
          }
        }
      }
      curX += (5 + 1) * scale;
    }
  }

  // Run caller draw function
  drawFn({
    width,
    height,
    setPixel,
    fillRect,
    drawLine,
    drawCircle,
    drawText
  });

  // Pack into rawBuffer with filter byte 0
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawBuffer[rowOffset] = 0; // Filter None
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 4;
      const dstIdx = rowOffset + 1 + x * 4;
      rawBuffer[dstIdx] = pixels[srcIdx];
      rawBuffer[dstIdx + 1] = pixels[srcIdx + 1];
      rawBuffer[dstIdx + 2] = pixels[srcIdx + 2];
      rawBuffer[dstIdx + 3] = pixels[srcIdx + 3];
    }
  }

  // Compress IDAT
  const compressed = zlib.deflateSync(rawBuffer, { level: 9 });

  // CRC32 table
  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c >>> 0;
  }

  function crc32(buf) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) {
      c = (crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8)) >>> 0;
    }
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  function makeChunk(typeStr, dataBuf) {
    const typeBuf = Buffer.from(typeStr, 'ascii');
    const length = dataBuf.length;
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(length, 0);

    const toCrc = Buffer.concat([typeBuf, dataBuf]);
    const crcVal = crc32(toCrc);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal, 0);

    return Buffer.concat([lenBuf, typeBuf, dataBuf, crcBuf]);
  }

  // PNG Header
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bit depth
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // no interlace
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // IDAT
  const idatChunk = makeChunk('IDAT', compressed);

  // IEND
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Generate base background with grid and technical header
function drawBaseMap(ctx, title, subtitle, sectorCode, primaryColor, accentColor) {
  const { width, height, fillRect, drawLine, drawCircle, drawText } = ctx;

  // Dark slate technical cartography background
  fillRect(0, 0, width, height, 15, 23, 42); // slate-900

  // Subtle coordinate grid
  const gridSize = 40;
  for (let x = 0; x < width; x += gridSize) {
    drawLine(x, 0, x, height, 30, 41, 59, 255, 1);
  }
  for (let y = 0; y < height; y += gridSize) {
    drawLine(0, y, width, y, 30, 41, 59, 255, 1);
  }

  // Outer border
  drawLine(1, 1, width - 2, 1, primaryColor[0], primaryColor[1], primaryColor[2], 255, 2);
  drawLine(1, height - 2, width - 2, height - 2, primaryColor[0], primaryColor[1], primaryColor[2], 255, 2);
  drawLine(1, 1, 1, height - 2, primaryColor[0], primaryColor[1], primaryColor[2], 255, 2);
  drawLine(width - 2, 1, width - 2, height - 2, primaryColor[0], primaryColor[1], primaryColor[2], 255, 2);

  // Header Banner
  fillRect(12, 12, width - 24, 48, 11, 30, 65, 230);
  drawLine(12, 60, width - 12, 60, accentColor[0], accentColor[1], accentColor[2], 255, 2);

  drawText("BAREMOS // PLANO CARTOGRAFICO DE JURISDICCION", 24, 20, 1.5, 148, 163, 184);
  drawText(`ZONA: ${title.toUpperCase()}`, 24, 36, 2.5, 255, 255, 255);
  drawText(`SEC: ${sectorCode}`, width - 130, 36, 2, accentColor[0], accentColor[1], accentColor[2]);

  // Bottom Status Bar
  fillRect(12, height - 42, width - 24, 30, 15, 23, 42, 240);
  drawLine(12, height - 42, width - 12, height - 42, 51, 65, 85, 255, 1);
  drawCircle(28, height - 27, 4, 34, 197, 94); // Green dot
  drawText(`OPERATIVO ACTIVO - ${subtitle.toUpperCase()}`, 42, height - 32, 1.5, 226, 232, 240);
  drawText("REF: COBERTURA TECNICA", width - 210, height - 32, 1.5, 148, 163, 184);

  // Compass Rose in top-right corner
  const compassX = width - 45;
  const compassY = 95;
  drawCircle(compassX, compassY, 18, 30, 41, 59, 200, false);
  drawLine(compassX, compassY - 18, compassX, compassY + 18, 148, 163, 184, 255, 1);
  drawLine(compassX - 18, compassY, compassX + 18, compassY, 148, 163, 184, 255, 1);
  drawLine(compassX, compassY, compassX, compassY - 16, 239, 68, 68, 255, 3); // Red North
  drawText("N", compassX - 4, compassY - 30, 1.5, 239, 68, 68);
}

// 1. TIGRE MAP
function generateTigre() {
  return createPNG(768, 512, (ctx) => {
    const { width, height, fillRect, drawLine, drawCircle, drawText } = ctx;
    drawBaseMap(ctx, "Tigre", "Delta, Troncos, Benavidez, Pacheco, Don Torcuato", "TG-05", [14, 165, 233], [56, 189, 248]);

    // Water bodies (Delta rivers & canals)
    // Rio Lujan & Rio Reconquista
    fillRect(40, 75, 420, 110, 12, 74, 110, 180); // Delta islands zone
    drawLine(40, 185, 460, 185, 2, 132, 199, 255, 7); // Rio Lujan
    drawLine(460, 185, 720, 260, 2, 132, 199, 255, 8); // Rio Lujan to Rio de la Plata
    drawLine(320, 185, 420, 430, 3, 105, 161, 255, 6); // Rio Reconquista
    drawLine(150, 75, 240, 185, 2, 132, 199, 255, 4); // Canal Arias
    drawLine(280, 75, 330, 185, 2, 132, 199, 255, 4); // Canal San Fernando

    // District Boundary (Polygon simulation)
    const poly = [
      [80, 190], [420, 190], [680, 260], [640, 450], [420, 460], [220, 440], [120, 340], [80, 190]
    ];
    for (let i = 0; i < poly.length - 1; i++) {
      drawLine(poly[i][0], poly[i][1], poly[i+1][0], poly[i+1][1], 56, 189, 248, 220, 3);
    }
    // Shaded territory
    fillRect(140, 220, 460, 190, 14, 116, 144, 40);

    // Highways and main arteries
    // Acceso Norte Ramal Tigre
    drawLine(480, 460, 450, 210, 251, 191, 36, 255, 4);
    // Panamericana Ramal Campana / R9
    drawLine(220, 460, 120, 200, 251, 191, 36, 255, 4);
    // Ruta 27 (Benavidez - Tigre)
    drawLine(140, 230, 450, 210, 245, 158, 11, 255, 3);
    // Ruta 197 (Carupa - Pacheco)
    drawLine(560, 260, 280, 410, 245, 158, 11, 255, 3);
    // Ruta 202 (Don Torcuato)
    drawLine(510, 370, 320, 460, 245, 158, 11, 255, 3);

    // Urban sectors & pins
    const sectors = [
      { name: "TIGRE CENTRO", x: 460, y: 215, code: "TG-C" },
      { name: "DELTA / ISLAS", x: 180, y: 130, code: "TG-D" },
      { name: "NORDELTA", x: 300, y: 240, code: "TG-ND" },
      { name: "BENAVIDEZ", x: 180, y: 270, code: "TG-BV" },
      { name: "GRAL. PACHECO", x: 340, y: 350, code: "TG-GP" },
      { name: "TRONCOS TALAR", x: 470, y: 290, code: "TG-TT" },
      { name: "DON TORCUATO", x: 360, y: 430, code: "TG-DT" },
      { name: "RINCON MILBERG", x: 410, y: 170, code: "TG-RM" },
    ];

    sectors.forEach(s => {
      drawCircle(s.x, s.y, 8, 239, 68, 68); // Red target pin
      drawCircle(s.x, s.y, 4, 255, 255, 255);
      drawCircle(s.x, s.y, 14, 239, 68, 68, 80, false);
      fillRect(s.x + 12, s.y - 12, s.name.length * 10 + 16, 20, 15, 23, 42, 220);
      drawLine(s.x + 12, s.y + 8, s.x + 28 + s.name.length * 10, s.y + 8, 56, 189, 248, 255, 1);
      drawText(s.name, s.x + 16, s.y - 8, 1.5, 255, 255, 255);
    });

    // Highway labels
    drawText("ACC. NORTE RAMAL TIGRE", 460, 390, 1.2, 251, 191, 36);
    drawText("PANAMERICANA R9", 90, 320, 1.2, 251, 191, 36);
    drawText("RIO LUJAN", 510, 170, 1.2, 56, 189, 248);
  });
}

// 2. SAN MARTIN MAP
function generateSanMartin() {
  return createPNG(768, 512, (ctx) => {
    const { width, height, fillRect, drawLine, drawCircle, drawText } = ctx;
    drawBaseMap(ctx, "San Martín", "Villa Ballester, San Andrés, Suárez, Billinghurst, San Martín Centro", "SM-06", [99, 102, 241], [129, 140, 248]);

    // General Paz Highway border (Boundary with CABA)
    drawLine(560, 80, 680, 460, 239, 68, 68, 255, 6);
    drawText("AV. GENERAL PAZ (LIMITE CABA)", 540, 110, 1.3, 239, 68, 68);

    // Camino del Buen Ayre / Rio Reconquista (Western limit)
    drawLine(120, 90, 80, 450, 14, 165, 233, 255, 5);
    drawText("CAMINO DEL BUEN AYRE / RECONQUISTA", 70, 460, 1.2, 56, 189, 248);

    // District Boundary
    const poly = [
      [140, 90], [560, 80], [680, 460], [280, 460], [80, 440], [120, 90], [140, 90]
    ];
    for (let i = 0; i < poly.length - 1; i++) {
      drawLine(poly[i][0], poly[i][1], poly[i+1][0], poly[i+1][1], 129, 140, 248, 220, 3);
    }
    fillRect(160, 120, 460, 300, 79, 70, 229, 35);

    // Main arteries & avenues
    // Ruta 8 / Av. 101 (Balbín)
    drawLine(100, 240, 620, 240, 251, 191, 36, 255, 4);
    drawText("RUTA PROV. 8 / AV. BALBIN", 180, 225, 1.2, 251, 191, 36);

    // Av. Márquez / Ruta 4
    drawLine(120, 360, 650, 140, 251, 191, 36, 255, 4);
    drawText("AV. MARQUEZ (RUTA 4)", 300, 195, 1.2, 251, 191, 36);

    // Av. San Martín
    drawLine(240, 460, 600, 180, 245, 158, 11, 255, 3);

    // Av. Eva Perón / Ayacucho
    drawLine(160, 160, 580, 380, 245, 158, 11, 255, 3);

    // Railway lines (FC Mitre)
    drawLine(150, 400, 640, 320, 148, 163, 184, 255, 2);

    // Key sectors
    const sectors = [
      { name: "SAN MARTIN CENTRO", x: 500, y: 260 },
      { name: "VILLA BALLESTER", x: 380, y: 170 },
      { name: "SAN ANDRES", x: 470, y: 330 },
      { name: "JOSE LEON SUAREZ", x: 220, y: 150 },
      { name: "BILLINGHURST", x: 260, y: 310 },
      { name: "VILLA LYNCH", x: 590, y: 360 },
      { name: "VILLA LIBERTAD", x: 360, y: 280 },
      { name: "BARRIO PARQUE", x: 190, y: 400 }
    ];

    sectors.forEach(s => {
      drawCircle(s.x, s.y, 8, 239, 68, 68);
      drawCircle(s.x, s.y, 4, 255, 255, 255);
      drawCircle(s.x, s.y, 14, 129, 140, 248, 80, false);
      fillRect(s.x + 12, s.y - 12, s.name.length * 10 + 16, 20, 15, 23, 42, 220);
      drawLine(s.x + 12, s.y + 8, s.x + 28 + s.name.length * 10, s.y + 8, 129, 140, 248, 255, 1);
      drawText(s.name, s.x + 16, s.y - 8, 1.5, 255, 255, 255);
    });
  });
}

// 3. OLIVOS MAP
function generateOlivos() {
  return createPNG(768, 512, (ctx) => {
    const { width, height, fillRect, drawLine, drawCircle, drawText } = ctx;
    drawBaseMap(ctx, "Olivos", "Vicente López, La Lucila, Florida, Carapachay, Munro, Villa Martelli", "OL-07", [16, 185, 129], [52, 211, 153]);

    // Rio de la Plata coastline on East side
    fillRect(560, 75, 200, 395, 12, 74, 110, 200);
    drawLine(560, 75, 560, 470, 56, 189, 248, 255, 6);
    drawText("RIO DE LA PLATA / COSTANERA", 580, 250, 1.5, 56, 189, 248);

    // General Paz boundary (South limit with CABA)
    drawLine(60, 450, 680, 450, 239, 68, 68, 255, 5);
    drawText("AV. GRAL. PAZ // LIMITE CAPITAL FEDERAL", 180, 465, 1.3, 239, 68, 68);

    // Panamericana (Western spine)
    drawLine(240, 75, 240, 450, 251, 191, 36, 255, 5);
    drawText("ACCESO NORTE / AUTOPISTA PANAMERICANA", 70, 140, 1.2, 251, 191, 36);

    // Av. Maipu / Santa Fe
    drawLine(410, 75, 410, 450, 245, 158, 11, 255, 4);
    drawText("AV. MAIPU", 418, 160, 1.2, 245, 158, 11);

    // Av. del Libertador (Coastal avenue)
    drawLine(510, 75, 510, 450, 245, 158, 11, 255, 4);
    drawText("AV. DEL LIBERTADOR", 470, 110, 1.2, 245, 158, 11);

    // Transversal Avenues
    // Av. Ugarte / Av. Malaver
    drawLine(60, 200, 560, 200, 148, 163, 184, 255, 2);
    drawText("AV. UGARTE", 80, 190, 1.2, 148, 163, 184);

    // Av. San Martín
    drawLine(60, 310, 560, 310, 148, 163, 184, 255, 2);
    drawText("AV. SAN MARTIN (VL)", 80, 300, 1.2, 148, 163, 184);

    // Av. Melo
    drawLine(60, 390, 560, 390, 148, 163, 184, 255, 2);

    // Shaded district area
    fillRect(80, 90, 470, 350, 16, 185, 129, 30);

    // Urban nodes
    const sectors = [
      { name: "OLIVOS CENTRO", x: 470, y: 190 },
      { name: "PUERTO DE OLIVOS", x: 545, y: 150 },
      { name: "LA LUCILA", x: 480, y: 100 },
      { name: "FLORIDA ESTE", x: 430, y: 340 },
      { name: "FLORIDA OESTE", x: 290, y: 340 },
      { name: "MUNRO COMERCIAL", x: 170, y: 260 },
      { name: "CARAPACHAY", x: 140, y: 150 },
      { name: "VILLA MARTELLI", x: 190, y: 410 },
      { name: "VICENTE LOPEZ ESTE", x: 470, y: 410 }
    ];

    sectors.forEach(s => {
      drawCircle(s.x, s.y, 8, 239, 68, 68);
      drawCircle(s.x, s.y, 4, 255, 255, 255);
      drawCircle(s.x, s.y, 14, 52, 211, 153, 80, false);
      fillRect(s.x + 12, s.y - 12, s.name.length * 10 + 16, 20, 15, 23, 42, 220);
      drawLine(s.x + 12, s.y + 8, s.x + 28 + s.name.length * 10, s.y + 8, 52, 211, 153, 255, 1);
      drawText(s.name, s.x + 16, s.y - 8, 1.5, 255, 255, 255);
    });
  });
}

// 4. PILAR - ESCOBAR MAP
function generatePilarEscobar() {
  return createPNG(768, 512, (ctx) => {
    const { width, height, fillRect, drawLine, drawCircle, drawText } = ctx;
    drawBaseMap(ctx, "Pilar-Escobar", "Parque Industrial, Belén de Escobar, Garín, Del Viso, Maschwitz, Derqui", "PE-08", [245, 158, 11], [251, 191, 36]);

    // Highway Corridor split (Acceso Norte bifurcacion)
    // Ramal Pilar (Ruta 8)
    drawLine(650, 450, 120, 140, 251, 191, 36, 255, 5);
    drawText("PANAMERICANA RAMAL PILAR (RUTA 8)", 140, 125, 1.3, 251, 191, 36);

    // Ramal Escobar (Ruta 9)
    drawLine(650, 450, 220, 80, 251, 191, 36, 255, 5);
    drawText("PANAMERICANA RAMAL ESCOBAR (RUTA 9)", 350, 155, 1.3, 251, 191, 36);

    // Ruta Prov. 25 (Pilar - Escobar connection)
    drawLine(240, 200, 480, 120, 245, 158, 11, 255, 4);
    drawText("RUTA PROV. 25 (CONEXION DIRECTA)", 260, 180, 1.2, 245, 158, 11);

    // Ruta Prov. 26 (Del Viso - Maschwitz)
    drawLine(360, 280, 520, 220, 245, 158, 11, 255, 3);
    drawText("RUTA 26", 410, 265, 1.2, 245, 158, 11);

    // Ruta 28 (Pilar - Gral. Rodríguez)
    drawLine(220, 220, 120, 420, 245, 158, 11, 255, 3);

    // Rio Lujan winding
    drawLine(80, 280, 320, 220, 14, 165, 233, 255, 5);
    drawLine(320, 220, 580, 130, 14, 165, 233, 255, 5);
    drawLine(580, 130, 720, 80, 14, 165, 233, 255, 6);
    drawText("CUENCA RIO LUJAN", 490, 95, 1.2, 56, 189, 248);

    // Territory shading
    fillRect(100, 100, 580, 340, 245, 158, 11, 30);

    // Key sectors
    const sectors = [
      { name: "PILAR CENTRO", x: 220, y: 200 },
      { name: "PARQUE INDUSTRIAL", x: 130, y: 150 },
      { name: "BELEN DE ESCOBAR", x: 440, y: 100 },
      { name: "GARIN", x: 530, y: 220 },
      { name: "ING. MASCHWITZ", x: 500, y: 160 },
      { name: "DEL VISO", x: 360, y: 280 },
      { name: "PRES. DERQUI", x: 200, y: 340 },
      { name: "MANZANARES", x: 100, y: 240 },
      { name: "MATHEU", x: 360, y: 90 },
      { name: "MANUEL ALBERTI", x: 460, y: 330 },
      { name: "TORTUGUITAS LIMITE", x: 540, y: 390 }
    ];

    sectors.forEach(s => {
      drawCircle(s.x, s.y, 8, 239, 68, 68);
      drawCircle(s.x, s.y, 4, 255, 255, 255);
      drawCircle(s.x, s.y, 14, 251, 191, 36, 80, false);
      fillRect(s.x + 12, s.y - 12, s.name.length * 10 + 16, 20, 15, 23, 42, 220);
      drawLine(s.x + 12, s.y + 8, s.x + 28 + s.name.length * 10, s.y + 8, 251, 191, 36, 255, 1);
      drawText(s.name, s.x + 16, s.y - 8, 1.5, 255, 255, 255);
    });
  });
}

// Write to files
const mapsDir = path.resolve('maps');
if (!fs.existsSync(mapsDir)) fs.mkdirSync(mapsDir, { recursive: true });

fs.writeFileSync(path.join(mapsDir, 'tigre.png'), generateTigre());
fs.writeFileSync(path.join(mapsDir, 'sanmartin.png'), generateSanMartin());
fs.writeFileSync(path.join(mapsDir, 'olivos.png'), generateOlivos());
fs.writeFileSync(path.join(mapsDir, 'pilarescobar.png'), generatePilarEscobar());

console.log("Successfully generated maps for Tigre, San Martín, Olivos, and Pilar-Escobar!");
