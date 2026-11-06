import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';

const root = new URL('../dist/', import.meta.url);
const base = (process.env.SITE_BASE?.trim() || '/').replace(/\/+$/, '') + '/';
const origin = process.env.SITE_URL?.trim() || 'https://local.invalid';
const files = readdirSync(root, { recursive: true }).filter(name => name.endsWith('.html'));
assert.ok(files.includes('index.html'), 'Homepage is missing');
for (const route of ['administrace', 'keystatic', 'api/keystatic', 'navrhy', 'nahled-clanku']) {
  assert.ok(!existsSync(new URL(route, root)), `Local-only route in public output: ${route}`);
}
for (const name of readdirSync(new URL('../src/content/articles/', import.meta.url))) {
  if (!name.endsWith('.json')) continue;
  const article = JSON.parse(readFileSync(new URL(`../src/content/articles/${name}`, import.meta.url), 'utf8'));
  if (article.status !== 'published') {
    assert.ok(!existsSync(new URL(`kreativec/zapisnik/${name.replace(/\.json$/, '')}/index.html`, root)), `Unpublished article in output: ${name}`);
  }
}
let checked = 0;
function check(value, current, source) {
  if (!value || /^(?:#|mailto:|tel:|data:|javascript:)/i.test(value)) return;
  const url = new URL(value.replaceAll('&amp;', '&'), current);
  if (url.origin !== new URL(origin).origin) return;
  assert.ok(url.pathname.startsWith(base), `${source}: URL escapes site base: ${value}`);
  let target = new URL(decodeURIComponent(url.pathname.slice(base.length)), root);
  if (existsSync(target) && statSync(target).isDirectory()) target = new URL('index.html', target.href.replace(/\/?$/, '/'));
  assert.ok(existsSync(target), `${source}: missing file for ${value}`);
  checked++;
}
for (const file of files) {
  const html = readFileSync(new URL(file, root), 'utf8');
  const current = new URL(base + file.replace(/index\.html$/, ''), origin);
  for (const match of html.matchAll(/\b(?:href|src|component-url|renderer-url|data-(?:ash|paint|paper)-href)="([^"]*)"/g)) check(match[1], current, file);
  for (const match of html.matchAll(/\bsrcset="([^"]*)"/g)) {
    for (const candidate of match[1].split(',')) check(candidate.trim().split(/\s+/)[0], current, file);
  }
}
console.log(`Static export verified: ${files.length} HTML pages, ${checked} local URLs, base ${base}.`);
