// Pre-renders every TeX formula in content/*.js to inline SVG so the page needs no runtime math renderer.
// Usage: NODE_PATH=<dir with mathjax-full> node web/tools/build.js  -> writes web/dist/content.js
const fs = require('fs');
const path = require('path');
const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const doc = mathjax.document('', {
  InputJax: new TeX({ packages: AllPackages.filter((p) => p !== 'bussproofs') }),
  OutputJax: new SVG({ fontCache: 'global' }),
});


// The page already labels steps "PASO n"; drop a leading "Paso n:" / "Paso n (title)." the authors wrote.
function cleanStep(st) {
  return String(st).replace(/^(\s*<strong>)\s*Paso\s*\d+\s*(?:\(([^)]*)\)\s*[:.]?|[:.\u2013-])?\s*/i, (m, open, inner) => open + (inner ? inner + '. ' : ''))
    .replace(/^(\s*<strong>)([a-záéíóúñ])/, (m, open, c) => open + c.toUpperCase());
}

const errors = [];
let count = 0;
const exWidth = (html) => { const m = html.match(/width="([\d.]+)ex"/); return m ? parseFloat(m[1]) : 0; };

// Split a long display equation at top-level "=" signs into an aligned multi-line block.
function splitAtEquals(src) {
  if (/\\begin\{|\\\\|\\q?quad|\\text\{\s*(y|o|si|con|donde)\b/.test(src)) return null; // already structured or several equations
  const parts = []; let depth = 0, lr = 0, last = 0;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (src[i - 1] === '\\' && (c === '{' || c === '}')) continue;
    if (c === '{') depth++; else if (c === '}') depth--;
    else if (src.startsWith('\\left', i)) lr++; else if (src.startsWith('\\right', i)) lr--;
    else if (c === '=' && depth === 0 && lr === 0 && !/[<>!\\]/.test(src[i - 1] || '')) { parts.push(src.slice(last, i)); last = i + 1; }
  }
  parts.push(src.slice(last));
  if (parts.length < 3) return null;
  return '\\begin{aligned}' + parts[0] + ' &= ' + parts.slice(1).map((p) => p.trim()).join(' \\\\ &= ') + '\\end{aligned}';
}

const WIDE_EX = 58;
let splitCount = 0;
function tex(src, display, where) {
  count++;
  let node = doc.convert(src, { display });
  let out = adaptor.outerHTML(node);
  if (display && exWidth(out) > WIDE_EX) {
    const alt = splitAtEquals(src);
    if (alt) { node = doc.convert(alt, { display }); out = adaptor.outerHTML(node); splitCount++; }
  }
  if (out.includes('data-mjx-error') || out.includes('merror')) errors.push(`${where}: ${src.slice(0, 80)}`);
  return out;
}

// Replace $$..$$, \[..\], \(..\), $..$ (in that order) outside of HTML tags.
function render(str, where) {
  if (typeof str !== 'string') return str;
  let s = str;
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => tex(t, true, where));
  s = s.replace(/\\\[([\s\S]+?)\\\]/g, (_, t) => tex(t, true, where));
  s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_, t) => tex(t, false, where));
  s = s.replace(/(^|[^\\])\$([^$]+?)\$/g, (_, pre, t) => pre + tex(t, false, where));
  return s;
}

const dir = path.join(__dirname, '../content');
global.window = {};
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js')).sort()) require(path.join(dir, f));
const sessions = window.SESSIONS.slice().sort((a, b) => a.order - b.order);

for (const s of sessions) {
  const w = s.id;
  s.goals = (s.goals || []).map((g, i) => render(g, `${w} goal ${i}`));
  s.theory = s.theory.map((t, i) => ({ h: render(t.h, `${w} th ${i}`), html: render(t.html, `${w} th ${i}`) }));
  s.examples = s.examples.map((ex, i) => ({
    title: render(String(ex.title).replace(/^\s*Ejemplo\s*\d+\s*[:.\u00b7\u2013-]\s*/i, ''), `${w} ex ${i}`), statement: render(ex.statement, `${w} ex ${i}`),
    steps: ex.steps.map((st, j) => render(cleanStep(st), `${w} ex ${i} step ${j}`)), answer: render(ex.answer, `${w} ex ${i}`),
  }));
  s.exercises = s.exercises.map((e) => ({
    ...e, q: render(e.q, e.id), hint: render(e.hint, e.id), solution: render(e.solution, e.id), label: render(e.label, e.id),
    options: e.options ? e.options.map((o) => render(o, e.id)) : undefined,
  }));
}

// Any delimiter left means a formula was not converted.
const leftovers = [];
for (const s of sessions) {
  const txt = JSON.stringify(s).replace(/<svg[\s\S]*?<\/svg>/g, '');
  for (const m of txt.matchAll(/\\\\\(|\\\\\[|\$/g)) leftovers.push(`${s.id}: …${txt.slice(Math.max(0, m.index - 40), m.index + 40)}…`);
}

const outDir = path.join(__dirname, '../dist');
fs.mkdirSync(outDir, { recursive: true });
const defs = adaptor.outerHTML(doc.outputJax.fontCache.getCache());
const out = 'window.SESSIONS = ' + JSON.stringify(sessions) + ';\nwindow.MJX_DEFS = ' + JSON.stringify(defs) + ';\n';
fs.writeFileSync(path.join(outDir, 'content.js'), out);
console.log(`formulas: ${count}, size: ${(out.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`long equations split into lines: ${splitCount}`);
console.log(`TeX errors: ${errors.length}`); errors.slice(0, 30).forEach((e) => console.log('  ' + e));
console.log(`leftover delimiters: ${leftovers.length}`); leftovers.slice(0, 30).forEach((e) => console.log('  ' + e));
