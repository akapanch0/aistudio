import fs from 'fs';

const baremos = JSON.parse(fs.readFileSync('baremo.json', 'utf8'));

function normStr(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function searchBaremos(query, list = baremos) {
  if (!query) return [];
  const qNorm = normStr(query);
  const tokens = qNorm.split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];

  // Filter matching items
  const matches = list.filter(b => {
    const codeNorm = normStr(b.baremo);
    const descNorm = normStr(b.descripcion);
    const codeDigits = codeNorm.replace(/^[a-z]+/i, '');
    const descWords = descNorm.split(/\s+/);

    return tokens.every(token => {
      // Check code
      if (codeNorm.startsWith(token) || codeNorm.includes(token) || codeDigits.startsWith(token)) {
        return true;
      }
      // Check description full or words
      if (descNorm.includes(token)) {
        return true;
      }
      return false;
    });
  });

  // Score and sort results
  return matches.sort((a, b) => {
    const codeA = normStr(a.baremo);
    const codeB = normStr(b.baremo);
    const descA = normStr(a.descripcion);
    const descB = normStr(b.descripcion);
    const codeDigitsA = codeA.replace(/^[a-z]+/i, '');
    const codeDigitsB = codeB.replace(/^[a-z]+/i, '');

    function getScore(code, desc, digits) {
      if (code === qNorm) return 1000;
      if (code.startsWith(qNorm)) return 800 + (100 - code.length);
      if (digits.startsWith(qNorm)) return 700 + (100 - digits.length);
      if (desc.startsWith(qNorm)) return 600;
      
      const words = desc.split(/\s+/);
      if (words.some(w => w.startsWith(qNorm))) return 500;
      if (tokens.every(t => words.some(w => w.startsWith(t)))) return 400;
      if (code.includes(qNorm)) return 300;
      if (desc.includes(qNorm)) return 200;
      return 100;
    }

    const scoreA = getScore(codeA, descA, codeDigitsA);
    const scoreB = getScore(codeB, descB, codeDigitsB);

    if (scoreA !== scoreB) return scoreB - scoreA;
    return codeA.localeCompare(codeB);
  });
}

// Test cases
console.log('--- Search "O1113" ---');
console.log(searchBaremos('O1113').slice(0, 3).map(x => x.baremo + ': ' + x.descripcion));

console.log('--- Search "1113" (incomplete number) ---');
console.log(searchBaremos('1113').slice(0, 3).map(x => x.baremo + ': ' + x.descripcion));

console.log('--- Search "poste madera" ---');
console.log(searchBaremos('poste madera').slice(0, 3).map(x => x.baremo + ': ' + x.descripcion));

console.log('--- Search "medidor mono" ---');
console.log(searchBaremos('medidor mono').slice(0, 3).map(x => x.baremo + ': ' + x.descripcion));
