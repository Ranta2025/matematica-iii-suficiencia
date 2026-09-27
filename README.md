# Matemática III · Preparación para suficiencia

Página web interactiva para estudiar Matemática III (Ingeniería en Ciencias Informáticas, P1 2026–2027):
teoría paso a paso, ejemplos que se revelan un paso a la vez y 185 ejercicios con verificación automática.

## Contenido

| Clase | Tema |
|-------|------|
| CE1 | Integral definida y Teorema Fundamental del Cálculo |
| CE2 | Integral indefinida: tablas, sustitución, por partes |
| CE3 | Integración numérica: punto medio, trapecios, Simpson |
| CE4 | Aplicaciones: áreas y volúmenes de revolución |
| CE5 | Integral doble e integrales iteradas |
| CE6 | Aplicaciones de la integral doble |
| CE6 (Tema II) | Introducción a las ecuaciones diferenciales |
| CE7 | EDO de variables separables y exactas |
| CE8 | EDO lineales de segundo orden |

## Uso

Abrir `web/index.html` en el navegador (necesita internet para cargar math.js, que corrige las respuestas).

## Estructura

- `web/content/sN.js`: fuente de cada sesión (teoría, ejemplos, ejercicios con TeX).
- `web/dist/content.js`: contenido con las fórmulas ya renderizadas a SVG (generado).
- `web/tools/build.js`: renderiza las fórmulas con MathJax y genera `dist/content.js`.
- `web/tools/validate.js`: comprueba numéricamente cada respuesta (integrales, EDO, primitivas).
- `web/tools/selftest.js`: pasa las respuestas de referencia por el verificador de la página.

```bash
npm i mathjax-full@3.2.2 mathjs@13.2.0   # en una carpeta de herramientas
NODE_PATH=<node_modules> node web/tools/validate.js
NODE_PATH=<node_modules> node web/tools/build.js
```
