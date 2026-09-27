# Content file spec (Matemática III study site)

Each session lives in its own file `web/content/sN.js`. The page loads them with plain
`<script src>` tags, then MathJax typesets the HTML. Everything the student reads is in
**neutral, professional Spanish** (no voseo, no slang). Identifiers stay as defined here.

## File shape

```js
(function () {
  const H = String.raw; // keeps LaTeX backslashes intact. NEVER write the two chars "$" + "{" together.
  window.SESSIONS = window.SESSIONS || [];
  window.SESSIONS.push({
    id: 's1',                 // s1..s9
    order: 1,
    code: 'CE1',              // class code from the syllabus
    topic: 'Tema I · Cálculo integral',
    title: 'La integral definida y el Teorema Fundamental del Cálculo',
    short: 'Integral definida', // sidebar label, max ~24 chars
    goals: ['...', '...'],    // what the student must be able to do (plain text or H``)
    theory: [ { h: 'Section title', html: H`<p>...</p>` }, ... ],
    examples: [ { title: '...', statement: H`...`, steps: [H`...`, H`...`], answer: H`...` }, ... ],
    exercises: [ ... ]        // see below
  });
})();
```

### Math markup
- Inline math: `$...$` or `\(...\)`. Display math: `$$...$$`. MathJax 3 (TeX) renders it.
- Inside `H\`...\`` backslashes are literal, so write LaTeX normally: `$\int_0^1 x^2\,dx$`.
- Never write `${` (template interpolation). For a set brace write `\{`, e.g. `$D=\{(x,y): 0\le x\le 1\}$`.
- Never use a backtick inside the template.
- Allowed HTML inside `html`/`statement`/`steps`/`solution`/`hint`: `p, ul, ol, li, strong, em, table, thead, tbody, tr, th, td, div`, plus these helper classes:
  - `<div class="note">` tip / warning box
  - `<div class="key">` a key formula or rule to memorize (boxed)
  - `<div class="warn">` common mistake
  - `<table class="tbl">` for data tables (numeric methods, Euler)
- Inline SVG figures are welcome where a picture really helps (regions, rectangles of a Riemann sum, solids). Use `viewBox`, `width="100%"`, `style="max-width:420px"`, and colors via `currentColor` or the CSS vars `var(--ink)`, `var(--accent)`, `var(--hl)`, `var(--muted)`, `var(--grid)` so they work in dark mode. Give every shape an explicit `fill` (use `fill="none"` for strokes). Keep them simple and correct.

### Theory expectations
Very detailed, "paso a paso". Explain *why* each rule works, what to look at first, how to decide which method to use, and common mistakes. Include small inline examples inside the theory. Cover everything in the source PDFs for the session and complete gaps with standard textbook content (Stewart, Cálculo con trascendentes tempranas).

### Worked examples
4–7 per session. `steps` is an array; the page reveals them one at a time ("Siguiente paso"). Each step = one idea, with the calculation AND a short sentence explaining what was done and why. `answer` is the final boxed result.

## Exercises

At least 15 per session, graded `level: 1` (direct), `2` (standard exam), `3` (challenging). Every exercise has:

```js
{ id: 's1e01', level: 1, q: H`statement`, type: '...', hint: H`one useful hint`, solution: H`full step-by-step solution`, label: 'Resultado =' /* optional text before the input */ , ...type fields }
```

`id` must be unique and stable (`sNeNN`). `solution` must be complete and step-by-step like the examples.

### Answer syntax the student types (math.js)
`x^2`, `sqrt(x)`, `e^x` or `exp(x)`, `ln(x)`, `sin/sen`, `cos`, `tan`, `sec`, `csc`, `cot`, `arctan`, `arcsin`, `pi`, fractions with `/`, implicit multiplication `3x`, `2pi`. In reference answers ALWAYS use explicit `*` and parentheses, and only these function names: `sqrt exp ln sin cos tan sec csc cot atan asin acos abs`, constants `pi` and `e`.

### Types

1. `num` — a number.
   - `answer: '9*pi/4'` (math.js expression string, exact value preferred).
   - `tol` optional absolute tolerance (default: accepts within 1e-3 relative). Use `tol: 0.01` for things like "round to 2 decimals", `tol: 0.0005` for 4-decimal numeric methods.
   - `verify` (STRONGLY recommended whenever the answer is an integral) so the build validator can check your answer numerically:
     - single integral: `verify: { kind: 'int', f: 'x^3-4*x', v: 'x', a: '-1', b: '0' }` → the validator checks ∫ f = answer. For areas with sign changes, pass `f: 'abs(x^3-4*x)'`. For volumes pass the full integrand including `pi`, e.g. `f: 'pi*(1-x^2)^2'`.
     - double integral: `verify: { kind: 'int2', f: 'x*y', outer: 'x', a: '0', b: '3', lo: 'x^2', hi: '3*x' }` (inner variable is the other one: here y from lo(x) to hi(x)).
     - numeric-method answers (trapezoid/Simpson/Euler) don't need `verify` but the answer must be computed exactly with the stated rule (compute it carefully; the validator re-runs `answer`).
2. `anti` — an antiderivative (indefinite integral). The checker accepts any expression that differs from `ref` by a constant, so "+C" is optional for the student.
   - `ref: 'x^6/6 + x^4 + 2*x^2'`, `f: 'x*(x^2+2)^2'` (the integrand; validator checks ref' = f), `v: 'x'` (variable, default x), optional `pts: [0.5, 1.2, 2.1, 3]` safe sample points in the domain (default `[0.35, 0.8, 1.3, 1.9, 2.6]`; override for ln/sqrt/arcsin domains).
3. `func` — a specific function (e.g. a particular solution y(x)). `ref: '10*exp(3*x)'`, `v: 'x'`, optional `pts`.
4. `ode` — a GENERAL solution containing arbitrary constants. The checker substitutes the student's expression into the equation.
   - `order: 1` or `2`, `res: 'yp - 3*y'` (residual as math.js expression in `x, y, yp, ypp`; it must be 0 for every solution; if the independent variable is t still write `x` in `res`), `consts: ['C']` or `['C1','C2']`, `ref: 'C*exp(3*x)'` (a correct general solution, validator checks it), `v: 'x'`, optional `pts`.
   - Tell the student in `q` or `label` which constant names to use (C, or C1 and C2).
   - For implicit solutions (exact equations) do NOT use `ode`; use `func` with an explicit solved form or `num`/`choice` instead, or ask for the potential function F(x,y) with type `pot` below.
5. `pot` — potential function F(x,y) of an exact equation, accepted up to an additive constant. `ref: 'x^2*y + y^3/3'`, the checker compares gradients numerically. Also give `M: '2*x*y'`, `N: 'x^2+y^2'` (validator checks F_x=M, F_y=N).
6. `set` — several numbers in any order (roots, intersection abscissas, eigen-roots r). `answer: ['-1', '1/2']`. Label should say "separados por comas".
7. `choice` — multiple choice. `options: [H`...`, H`...`, ...]`, `correct: 1` (0-based index). Use for classification (order, linear?, type of region), conceptual questions, choosing the method.

Mix types: most exercises should be `num`, `anti`, `ode`, `func`, `set`; at most ~25% `choice`.

Double-check every answer by hand. Wrong answers in a study tool are worse than no exercise.
