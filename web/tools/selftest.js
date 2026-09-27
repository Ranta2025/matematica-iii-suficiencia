// Feeds each exercise's reference answer through the page's own checker (extracted from index.html).
const fs = require('fs');
const path = require('path');
global.math = require(process.env.MATHJS || 'mathjs');
const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const src = html.split('// ---------- math ----------')[1].split('// ---------- typesetting ----------')[0];
const check = new Function('math', `${src}\nreturn check;`)(global.math);
global.window = {};
for (const f of fs.readdirSync(path.join(__dirname, '../content')).filter((x) => x.endsWith('.js'))) require(path.join(__dirname, '../content', f));
let bad = 0, n = 0;
for (const s of window.SESSIONS) for (const e of s.exercises) {
  if (e.type === 'choice') continue;
  n++;
  const raw = e.type === 'set' ? e.answer.join('; ') : e.type === 'num' ? e.answer : e.ref;
  const r = check(e, raw);
  if (!r.ok) { bad++; console.log(`✗ ${e.id} (${e.type}) input=${raw} -> ${r.msg}`); }
}
console.log(`${n - bad}/${n} reference answers accepted by the page checker`);
