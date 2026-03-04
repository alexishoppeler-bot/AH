#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[1/3] Vérification syntaxe JS"
while IFS= read -r -d '' file; do
  node --check "$file"
done < <(find js -type f -name '*.js' -print0 | sort -z)

echo "[2/3] Vérification des variables CSS non définies"
node <<'NODE'
const fs = require('fs');
const path = require('path');

const roots = ['css', 'games'];
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(css|html)$/i.test(entry.name)) files.push(full);
  }
}

roots.forEach(walk);

const used = new Set();
const defined = new Set();

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/var\(--([a-zA-Z0-9-_]+)\)/g)) used.add(m[1]);
  for (const m of text.matchAll(/--([a-zA-Z0-9-_]+)\s*:/g)) defined.add(m[1]);
}

const missing = [...used].filter((v) => !defined.has(v)).sort();

if (missing.length) {
  console.error('Variables CSS non définies:', missing.join(', '));
  process.exit(1);
}

console.log('Variables CSS OK');
NODE

echo "[3/3] Contrôle présence des fichiers CSS/JS référencés dans games/*.html"
node <<'NODE'
const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('games').filter((f) => f.endsWith('.html')).sort();
const missing = [];

for (const file of htmlFiles) {
  const full = path.join('games', file);
  let html = fs.readFileSync(full, 'utf8');

  // Ignorer les scripts inline pour éviter les faux positifs sur les template strings.
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const ref = m[1];
    if (!ref.startsWith('../css/') && !ref.startsWith('../js/')) continue;

    const target = path.normalize(path.join(path.dirname(full), ref.split('?')[0]));
    if (!fs.existsSync(target)) {
      missing.push(`${full} -> ${ref}`);
    }
  }
}

if (missing.length) {
  console.error('Références manquantes:');
  for (const row of missing) console.error(`- ${row}`);
  process.exit(1);
}

console.log('Références HTML CSS/JS OK');
NODE

echo "Audit terminé: OK"
