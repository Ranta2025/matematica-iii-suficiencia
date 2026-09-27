// Fails if any exercise answer field changed versus tools/answers-snapshot.json (only q/hint/solution/label may change).
const snap = require('./answers-snapshot.json');
global.window = {};
for (const f of process.argv.slice(2)) require(require('path').resolve(f));
let bad = 0;
for (const s of window.SESSIONS) for (const e of s.exercises) {
  const { q, hint, solution, label, ...rest } = e;
  if (JSON.stringify(rest) !== JSON.stringify(snap[e.id])) { bad++; console.log('changed answer fields:', e.id); }
}
console.log(bad ? bad + ' exercise(s) changed' : 'answers unchanged');
process.exit(bad ? 1 : 0);
