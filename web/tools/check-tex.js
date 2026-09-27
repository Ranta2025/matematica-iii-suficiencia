// Fails if any content string contains a doubled backslash before a letter/paren (renders \int as plain "int").
global.window = {};
for (const f of process.argv.slice(2)) require(require('path').resolve(f));
let bad = 0;
const walk = (o, where) => {
  if (typeof o === 'string') { const m = o.match(/\\\\[A-Za-z()[\]]/); if (m) { bad++; console.log(where, '…' + o.slice(Math.max(0, m.index - 30), m.index + 30) + '…'); } }
  else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) walk(v, where + '.' + k);
};
for (const s of window.SESSIONS) walk(s, s.id);
console.log(bad ? bad + ' string(s) with doubled backslashes' : 'tex escaping ok');
process.exit(bad ? 1 : 0);
