# Task: rewrite exercise solutions as full step-by-step explanations

The student asked that EVERY exercise solution be explained "paso a paso, bien explicadito". Many `solution` fields are currently one or two lines. Rewrite them.

## Rules
- Edit ONLY the `solution` field of exercises (you may also improve `hint` if it is weak). Never change `id, level, type, answer, ref, f, v, pts, verify, tol, res, consts, order, M, N, options, correct`. Never change theory or examples unless your prompt says so.
- Neutral professional Spanish. Keep all math correct and consistent with the existing `answer`/`ref`.
- Format every solution as:
  ```html
  <div class="steps">
    <div class="step"><p><strong>Short step title.</strong> What we do and WHY, then the calculation.</p>$$...$$</div>
    <div class="step">...</div>
  </div>
  <div class="final">Final result with units / +C when relevant.</div>
  ```
  The page prints "PASO 1, PASO 2…" automatically, so never write "Paso 1" yourself. The `final` box prints "RESPUESTA" automatically.
- Typical 3–6 steps: identify what is asked / choose the method and why → set up (formula, limits, substitution, region, characteristic equation…) → intermediate algebra shown explicitly (don't skip simplifications) → evaluate → check or interpret when useful (e.g. derive to verify an antiderivative, substitute into the ODE, sign/area sense).
- For `choice` exercises explain why the correct option is right AND why the tempting wrong ones are wrong.
- Keep solutions that are already long and well structured; just wrap them into the step format.

## TeX escaping (critical)
Content lives in `H\`...\`` templates where `H = String.raw`: write ONE backslash for TeX commands (`\int`, `\frac`, `\,`, `\dfrac`). Never `\\int`. A double backslash is a TeX line break and renders the command as plain letters. Never write `${`. Never use backticks inside a template. Math delimiters: `$...$` inline, `$$...$$` display.

## Checks you must run until clean (from /home/ranta/programacion/Math/web)
```
NODE_PATH=/home/ranta/programacion/Math-tools/pw/node_modules node tools/validate.js content/sN.js ...
node tools/check-answers.js content/sN.js ...
node tools/check-tex.js content/sN.js ...
```
