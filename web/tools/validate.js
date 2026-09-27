// Validates content files: node web/tools/validate.js [web/content/s1.js ...]
// Needs mathjs resolvable (NODE_PATH or local node_modules).
const fs = require('fs');
const path = require('path');
const mathjs = require('mathjs');
const math = mathjs.create(mathjs.all);

math.import({
  ln: (x) => Math.log(x), sen: (x) => Math.sin(x), arctan: (x) => Math.atan(x),
  arcsin: (x) => Math.asin(x), arccos: (x) => Math.acos(x), tg: (x) => Math.tan(x),
}, { override: true });

const ev = (expr, scope) => {
  const r = math.evaluate(String(expr), { ...scope });
  return typeof r === 'number' ? r : NaN;
};
const fn = (expr, v = 'x') => { const c = math.compile(String(expr)); return (t, extra = {}) => { const r = c.evaluate({ [v]: t, ...extra }); return typeof r === 'number' ? r : NaN; }; };

function simpson(f, a, b, n = 2000) {
  const h = (b - a) / n; let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h);
  return (s * h) / 3;
}
const close = (a, b, tol) => Math.abs(a - b) <= Math.max(tol ?? 0, 1e-3 * Math.max(1, Math.abs(b)));
const DEF_PTS = [0.35, 0.8, 1.3, 1.9, 2.6];
const deriv = (g, t) => { const h = 1e-5; return (g(t + h) - g(t - h)) / (2 * h); };
const deriv2 = (g, t) => { const h = 1e-4; return (g(t + h) - 2 * g(t) + g(t - h)) / (h * h); };

function checkExercise(s, e) {
  const errs = [];
  const need = ['id', 'level', 'q', 'type', 'hint', 'solution'];
  for (const k of need) if (e[k] === undefined || e[k] === '') errs.push(`missing ${k}`);
  try {
    switch (e.type) {
      case 'num': {
        const val = ev(e.answer);
        if (!isFinite(val)) errs.push(`answer not numeric: ${e.answer}`);
        const vf = e.verify;
        if (vf && vf.kind === 'int') {
          const f = fn(vf.f, vf.v || 'x');
          const I = simpson(f, ev(vf.a), ev(vf.b));
          if (!close(I, val, e.tol)) errs.push(`verify int: numeric ${I.toFixed(6)} vs answer ${val.toFixed(6)}`);
        } else if (vf && vf.kind === 'int2') {
          const outer = vf.outer || 'x'; const inner = outer === 'x' ? 'y' : 'x';
          const lo = fn(vf.lo, outer), hi = fn(vf.hi, outer); const F = math.compile(vf.f);
          const g = (o) => simpson((i) => { const r = F.evaluate({ [outer]: o, [inner]: i }); return typeof r === 'number' ? r : NaN; }, lo(o), hi(o), 400);
          const I = simpson(g, ev(vf.a), ev(vf.b), 400);
          if (!close(I, val, e.tol)) errs.push(`verify int2: numeric ${I.toFixed(6)} vs answer ${val.toFixed(6)}`);
        }
        break;
      }
      case 'anti': {
        const v = e.v || 'x'; const F = fn(e.ref, v); const f = fn(e.f, v);
        for (const p of e.pts || DEF_PTS) {
          const d = deriv(F, p), fv = f(p);
          if (!isFinite(d) || !isFinite(fv) || !close(d, fv, 1e-4)) { errs.push(`anti: F'(${p})=${d} but f=${fv}`); break; }
        }
        break;
      }
      case 'func': { const F = fn(e.ref, e.v || 'x'); for (const p of e.pts || DEF_PTS) if (!isFinite(F(p))) errs.push(`func not finite at ${p}`); break; }
      case 'ode': {
        const v = e.v || 'x'; const R = math.compile(e.res); const C = math.compile(e.ref);
        const combos = [[1.3, -0.7], [-2.1, 0.9], [0.6, 2.2]];
        for (const cv of combos) {
          const scope = {}; (e.consts || []).forEach((c, i) => { scope[c] = cv[i]; });
          const y = (t) => { const r = C.evaluate({ ...scope, [v]: t }); return typeof r === 'number' ? r : NaN; };
          for (const p of e.pts || DEF_PTS) {
            const r = R.evaluate({ x: p, y: y(p), yp: deriv(y, p), ypp: e.order === 2 ? deriv2(y, p) : 0 });
            if (!isFinite(r) || Math.abs(r) > 1e-3 * Math.max(1, Math.abs(y(p)))) { errs.push(`ode residual ${r} at ${p}`); break; }
          }
        }
        break;
      }
      case 'pot': {
        const F = math.compile(e.ref), M = math.compile(e.M), N = math.compile(e.N); const h = 1e-5;
        for (const [x, y] of [[0.4, 0.7], [1.1, 0.3], [1.7, 1.4]]) {
          const Fx = (F.evaluate({ x: x + h, y }) - F.evaluate({ x: x - h, y })) / (2 * h);
          const Fy = (F.evaluate({ x, y: y + h }) - F.evaluate({ x, y: y - h })) / (2 * h);
          if (!close(Fx, M.evaluate({ x, y }), 1e-4) || !close(Fy, N.evaluate({ x, y }), 1e-4)) { errs.push(`pot gradient mismatch at ${x},${y}`); break; }
        }
        break;
      }
      case 'set': for (const a of e.answer) if (!isFinite(ev(a))) errs.push(`set item ${a}`); break;
      case 'choice': if (!Array.isArray(e.options) || !(e.correct >= 0 && e.correct < e.options.length)) errs.push('bad choice'); break;
      default: errs.push(`unknown type ${e.type}`);
    }
  } catch (err) { errs.push(`exception: ${err.message}`); }
  return errs;
}

const files = process.argv.slice(2).length ? process.argv.slice(2)
  : fs.readdirSync(path.join(__dirname, '../content')).filter((f) => f.endsWith('.js')).map((f) => path.join(__dirname, '../content', f));
global.window = {};
let bad = 0; const ids = new Set();
for (const f of files) {
  const before = (window.SESSIONS || []).length;
  try { require(path.resolve(f)); } catch (err) { console.log(`✗ ${f}: load error ${err.message}`); bad++; continue; }
  for (const s of window.SESSIONS.slice(before)) {
    const txt = JSON.stringify(s);
    if (txt.includes('undefined')) console.log(`  ! ${s.id}: contains 'undefined' text`);
    console.log(`${s.id} ${s.title}: theory ${s.theory.length}, examples ${s.examples.length}, exercises ${s.exercises.length}`);
    for (const e of s.exercises) {
      if (ids.has(e.id)) { console.log(`  ✗ duplicate id ${e.id}`); bad++; }
      ids.add(e.id);
      const errs = checkExercise(s, e);
      if (errs.length) { bad++; console.log(`  ✗ ${e.id} (${e.type}): ${errs.join('; ')}`); }
    }
  }
}
console.log(bad ? `\n${bad} problem(s)` : '\nAll exercises OK');
process.exit(bad ? 1 : 0);
