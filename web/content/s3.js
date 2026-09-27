(function () {
  const H = String.raw;
  window.SESSIONS = window.SESSIONS || [];
  window.SESSIONS.push({
    id: 's3',
    order: 3,
    code: 'CE3',
    topic: 'Tema I · Cálculo integral',
    title: 'Resolución numérica de integrales',
    short: 'Integración numérica',
    goals: [
      'Explicar por qué en muchos problemas reales es necesario aproximar una integral definida en lugar de calcularla con el Teorema Fundamental del Cálculo.',
      'Construir la partición uniforme de un intervalo y organizar los cálculos en una tabla (columnas $i$, $x_i$, $f(x_i)$, peso).',
      'Aplicar la regla del punto medio, la regla de los trapecios y la regla de Simpson para aproximar $\\int_a^b f(x)\\,dx$.',
      'Estimar y acotar el error de cada regla, y determinar cuántos subintervalos $n$ se necesitan para una exactitud dada.',
      'Estimar el error por el método de doble cálculo (Richardson) cuando no se conoce una cota $K$ de la derivada.',
      'Aplicar estas reglas cuando la información disponible es solo una tabla de valores, sin fórmula explícita para $f$.'
    ],
    theory: [
      {
        h: '1. ¿Por qué aproximar integrales numéricamente?',
        html: H`<p>El Teorema Fundamental del Cálculo permite evaluar $\int_a^b f(x)\,dx$ de forma exacta cuando se conoce una primitiva $F(x)$ de $f$. Sin embargo, esto falla en dos situaciones muy frecuentes en la práctica de la ingeniería:</p>
        <ul>
          <li><strong>La función no tiene primitiva elemental.</strong> Integrandos como $e^{-x^2}$, $\dfrac{\sin x}{x}$, $\sqrt{1+x^3}$ o $\dfrac{1}{\ln x}$ no pueden expresarse mediante combinaciones finitas de funciones elementales (polinomios, exponenciales, logaritmos, trigonométricas). Esto no significa que la integral no exista (de hecho $f$ es continua y el área bajo su gráfico está perfectamente definida); significa que no hay una fórmula cerrada para $F(x)$.</li>
          <li><strong>No se dispone de una fórmula, sino de datos medidos.</strong> En un experimento o en un sistema real (velocidad de un vehículo cada cierto tiempo, caudal de un fluido, temperatura registrada por un sensor) solo se tienen pares $(x_i, f(x_i))$ obtenidos por medición, sin que exista una expresión algebraica para $f$.</li>
        </ul>
        <p>En ambos casos la salida es la misma: aproximar la integral usando únicamente los valores de $f$ en un número finito de puntos. Las tres reglas de esta lección (punto medio, trapecios y Simpson) hacen exactamente eso, con distinto grado de precisión.</p>
        <div class="note">Idea clave: toda regla numérica sustituye la curva $y=f(x)$ por una curva más simple (un valor constante, un segmento de recta, un arco de parábola) sobre cada subintervalo, y suma las áreas de las figuras sencillas resultantes.</div>`
      },
      {
        h: '2. Partición del intervalo y notación',
        html: H`<p>Para aproximar $\int_a^b f(x)\,dx$ se divide $[a,b]$ en $n$ subintervalos de igual longitud:</p>
        <div class="key">$$\Delta x = \dfrac{b-a}{n}, \qquad x_i = a + i\,\Delta x \quad (i = 0, 1, \dots, n)$$</div>
        <p>Así $x_0 = a$, $x_n = b$, y los puntos intermedios $x_1, x_2, \dots, x_{n-1}$ quedan igualmente espaciados. Cada subintervalo es $[x_{i-1}, x_i]$ y tiene longitud $\Delta x$.</p>
        <p>Para la regla del punto medio se usa además el punto medio de cada subintervalo:</p>
        <div class="key">$$\overline{x}_i = \dfrac{x_{i-1}+x_i}{2} = a + \left(i-\tfrac12\right)\Delta x \quad (i=1,\dots,n)$$</div>
        <p><strong>Primer paso siempre:</strong> calcular $\Delta x$, escribir la lista de $x_i$ (y de $\overline{x}_i$ si se va a usar el punto medio), y evaluar $f$ en cada uno de esos puntos. Todo lo demás es aplicar una fórmula de suma pesada.</p>`
      },
      {
        h: '3. Regla del punto medio',
        html: H`<p>Sobre cada subintervalo $[x_{i-1},x_i]$ se aproxima el área bajo la curva por el área de un rectángulo cuya altura es el valor de $f$ en el punto medio $\overline{x}_i$ del subintervalo (no en un extremo). Geométricamente, esta es la elección de altura que en promedio compensa mejor la curvatura de $f$.</p>
        <div class="key">$$\int_a^b f(x)\,dx \approx M_n = \Delta x\left[f(\overline{x}_1) + f(\overline{x}_2) + \cdots + f(\overline{x}_n)\right]$$</div>
        <svg viewBox="0 0 340 190" width="100%" style="max-width:420px">
          <line x1="20" y1="165" x2="320" y2="165" stroke="var(--grid)" stroke-width="1"/>
          <rect x="35" y="118" width="60" height="47" fill="var(--accent)" opacity="0.28" stroke="var(--accent)" stroke-width="1"/>
          <rect x="95" y="92" width="60" height="73" fill="var(--accent)" opacity="0.28" stroke="var(--accent)" stroke-width="1"/>
          <rect x="155" y="62" width="60" height="103" fill="var(--accent)" opacity="0.28" stroke="var(--accent)" stroke-width="1"/>
          <rect x="215" y="30" width="60" height="135" fill="var(--accent)" opacity="0.28" stroke="var(--accent)" stroke-width="1"/>
          <path d="M35,150 C80,130 100,95 155,70 C200,50 240,35 275,20" stroke="var(--ink)" stroke-width="2" fill="none"/>
          <line x1="65" y1="165" x2="65" y2="118" stroke="var(--hl)" stroke-width="1.5" stroke-dasharray="3,3"/>
          <line x1="125" y1="165" x2="125" y2="92" stroke="var(--hl)" stroke-width="1.5" stroke-dasharray="3,3"/>
          <line x1="185" y1="165" x2="185" y2="62" stroke="var(--hl)" stroke-width="1.5" stroke-dasharray="3,3"/>
          <line x1="245" y1="165" x2="245" y2="30" stroke="var(--hl)" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="63" y="178" font-size="11" fill="var(--muted)">x̄₁</text>
          <text x="123" y="178" font-size="11" fill="var(--muted)">x̄₂</text>
          <text x="183" y="178" font-size="11" fill="var(--muted)">x̄₃</text>
          <text x="243" y="178" font-size="11" fill="var(--muted)">x̄₄</text>
        </svg>
        <p>La altura de cada rectángulo (líneas discontinuas) se lee sobre la curva justo en el punto medio del subintervalo correspondiente; el área sombreada es la aproximación $M_n$.</p>`
      },
      {
        h: '4. Regla de los trapecios',
        html: H`<p>En lugar de un rectángulo, sobre cada subintervalo $[x_{i-1},x_i]$ se aproxima la región bajo la curva por un <strong>trapecio</strong> cuyos lados verticales tienen longitud $f(x_{i-1})$ y $f(x_i)$, y cuya base tiene longitud $\Delta x$. El área de ese trapecio es:</p>
        <div class="key">$$\text{área del trapecio } i = \dfrac{\Delta x}{2}\big(f(x_{i-1}) + f(x_i)\big)$$</div>
        <p>Sumando las áreas de los $n$ trapecios:</p>
        <p>$$T_n = \sum_{i=1}^{n} \dfrac{\Delta x}{2}\big(f(x_{i-1})+f(x_i)\big) = \dfrac{\Delta x}{2}\Big[\big(f(x_0)+f(x_1)\big) + \big(f(x_1)+f(x_2)\big) + \cdots + \big(f(x_{n-1})+f(x_n)\big)\Big]$$</p>
        <p>Cada valor interior $f(x_1), f(x_2), \dots, f(x_{n-1})$ aparece exactamente en dos trapecios consecutivos (el que termina en $x_i$ y el que empieza en $x_i$), por lo que la suma se "telescopea" y cada valor interior queda multiplicado por 2, mientras que los extremos $f(x_0)$ y $f(x_n)$ aparecen una sola vez:</p>
        <div class="key">$$\int_a^b f(x)\,dx \approx T_n = \dfrac{\Delta x}{2}\Big[f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)\Big]$$</div>
        <svg viewBox="0 0 340 190" width="100%" style="max-width:420px">
          <line x1="20" y1="165" x2="320" y2="165" stroke="var(--grid)" stroke-width="1"/>
          <path d="M35,150 C80,130 100,95 155,70 C200,50 240,35 275,20" stroke="var(--ink)" stroke-width="2" fill="none"/>
          <polygon points="35,165 35,150 95,118 95,165" fill="var(--accent)" opacity="0.28" stroke="var(--accent)" stroke-width="1"/>
          <polygon points="95,165 95,118 155,70 155,165" fill="var(--accent)" opacity="0.20" stroke="var(--accent)" stroke-width="1"/>
          <polygon points="155,165 155,70 215,42 215,165" fill="var(--accent)" opacity="0.28" stroke="var(--accent)" stroke-width="1"/>
          <polygon points="215,165 215,42 275,20 275,165" fill="var(--accent)" opacity="0.20" stroke="var(--accent)" stroke-width="1"/>
          <text x="30" y="178" font-size="11" fill="var(--muted)">x₀</text>
          <text x="90" y="178" font-size="11" fill="var(--muted)">x₁</text>
          <text x="150" y="178" font-size="11" fill="var(--muted)">x₂</text>
          <text x="210" y="178" font-size="11" fill="var(--muted)">x₃</text>
          <text x="270" y="178" font-size="11" fill="var(--muted)">x₄</text>
        </svg>
        <p>Cada franja está cubierta por un trapecio cuyo lado superior es el segmento que une $(x_{i-1},f(x_{i-1}))$ con $(x_i, f(x_i))$; el área total sombreada es $T_n$.</p>`
      },
      {
        h: '5. Regla de Simpson',
        html: H`<p>La regla de Simpson mejora la aproximación reemplazando la curva, en cada <em>pareja</em> de subintervalos consecutivos $[x_{i-1},x_i]\cup[x_i,x_{i+1}]$, por un arco de parábola que pasa exactamente por los tres puntos $(x_{i-1},f(x_{i-1}))$, $(x_i,f(x_i))$, $(x_{i+1},f(x_{i+1}))$. Como cada arco cubre dos subintervalos, <strong>$n$ debe ser par</strong>.</p>
        <p>Integrando la parábola interpoladora en cada pareja de subintervalos y sumando sobre las $n/2$ parejas se obtiene, tras simplificar, la fórmula:</p>
        <div class="key">$$\int_a^b f(x)\,dx \approx S_n = \dfrac{\Delta x}{3}\Big[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + 2f(x_4) + \cdots + 4f(x_{n-1}) + f(x_n)\Big]$$</div>
        <p>El patrón de coeficientes es: $1, 4, 2, 4, 2, \dots, 4, 2, 4, 1$. Los índices <strong>impares</strong> ($x_1, x_3, x_5,\dots$, que son los puntos "de en medio" de cada arco) llevan peso $4$; los índices <strong>pares interiores</strong> ($x_2, x_4,\dots$, donde termina un arco y empieza el siguiente) llevan peso $2$; los extremos $x_0$ y $x_n$ llevan peso $1$.</p>
        <svg viewBox="0 0 340 190" width="100%" style="max-width:420px">
          <line x1="20" y1="165" x2="320" y2="165" stroke="var(--grid)" stroke-width="1"/>
          <path d="M35,150 C80,130 100,95 155,70 C200,50 240,35 275,20" stroke="var(--ink)" stroke-width="2" fill="none" opacity="0.5"/>
          <path d="M35,150 Q95,150 155,70" fill="none" stroke="var(--hl)" stroke-width="2.5"/>
          <path d="M155,70 Q215,20 275,20" fill="none" stroke="var(--hl)" stroke-width="2.5"/>
          <polygon points="35,165 35,150 95,150 155,70 155,165" fill="var(--accent)" opacity="0.22"/>
          <polygon points="155,165 155,70 215,20 275,20 275,165" fill="var(--accent)" opacity="0.22"/>
          <text x="30" y="178" font-size="11" fill="var(--muted)">x₀</text>
          <text x="90" y="178" font-size="11" fill="var(--muted)">x₁</text>
          <text x="150" y="178" font-size="11" fill="var(--muted)">x₂</text>
          <text x="210" y="178" font-size="11" fill="var(--muted)">x₃</text>
          <text x="270" y="178" font-size="11" fill="var(--muted)">x₄</text>
        </svg>
        <p>Cada figura sombreada tiene como lado superior un arco de parábola (destacado), no un segmento recto; por eso Simpson suele ser mucho más precisa que trapecios para el mismo $n$: reproduce exactamente polinomios de grado $\le 3$.</p>
        <div class="warn">Error común: aplicar Simpson con $n$ impar. Si $n$ es impar no se puede formar un número entero de parejas de subintervalos; hay que aumentar (o disminuir) $n$ en una unidad para que sea par, o dividir el intervalo de forma distinta.</div>`
      },
      {
        h: '6. Organización de los cálculos en una tabla',
        html: H`<p>Para no perder el control de los cálculos (y para poder revisarlos) conviene organizar siempre una tabla con estas columnas:</p>
        <table class="tbl">
          <thead><tr><th>$i$</th><th>$x_i$</th><th>$f(x_i)$</th><th>peso</th></tr></thead>
          <tbody>
            <tr><td>0</td><td>$a$</td><td>$f(x_0)$</td><td>1</td></tr>
            <tr><td>1</td><td>$x_1$</td><td>$f(x_1)$</td><td>2 (trapecios) / 4 (Simpson)</td></tr>
            <tr><td>$\vdots$</td><td>$\vdots$</td><td>$\vdots$</td><td>$\vdots$</td></tr>
            <tr><td>$n$</td><td>$b$</td><td>$f(x_n)$</td><td>1</td></tr>
          </tbody>
        </table>
        <p>Procedimiento recomendado:</p>
        <ol>
          <li>Calcular $\Delta x$ y listar todos los $x_i$ (y $\overline{x}_i$ si se usará el punto medio).</li>
          <li>Evaluar $f$ en cada punto y llenar la columna $f(x_i)$, con al menos 4 cifras decimales para no acumular error de redondeo.</li>
          <li>Sumar por separado los valores con peso 1 (extremos), los de peso 2 y los de peso 4, según la regla que se use.</li>
          <li>Combinar las sumas con la fórmula correspondiente y multiplicar por $\Delta x/2$ o $\Delta x/3$ (o por $\Delta x$ en el punto medio).</li>
        </ol>
        <div class="note">Trabajar con una tabla no es solo una cuestión de orden: es la única forma práctica de aplicar estos métodos cuando $f$ viene dada por una tabla de datos experimentales y no existe una fórmula para evaluarla en puntos arbitrarios (ver el apartado 10).</div>`
      },
      {
        h: '7. Cotas de error de las tres reglas',
        html: H`<p>Cada regla tiene una cota teórica del error máximo que se puede cometer, en función de una cota $K$ sobre una derivada de $f$ en $[a,b]$:</p>
        <div class="key">
          $$|E_M| \le \dfrac{K(b-a)^3}{24\,n^2}, \quad \text{con } |f''(x)| \le K \text{ en } [a,b] \qquad \text{(punto medio)}$$
          $$|E_T| \le \dfrac{K(b-a)^3}{12\,n^2}, \quad \text{con } |f''(x)| \le K \text{ en } [a,b] \qquad \text{(trapecios)}$$
          $$|E_S| \le \dfrac{K(b-a)^5}{180\,n^4}, \quad \text{con } |f^{(4)}(x)| \le K \text{ en } [a,b] \qquad \text{(Simpson)}$$
        </div>
        <p>Obsérvese que, para el mismo $K$ y el mismo $n$, la cota del punto medio es la mitad de la de trapecios (por eso el punto medio suele ser más preciso), y que Simpson decae como $1/n^4$ en vez de $1/n^2$: al duplicar $n$, el error de trapecios y punto medio se divide aproximadamente entre 4, mientras que el de Simpson se divide entre 16.</p>
        <p><strong>¿Cómo se obtiene $K$?</strong> Se deriva $f$ dos veces (para punto medio y trapecios) o cuatro veces (para Simpson), y se buscan los extremos absolutos de esa derivada en $[a,b]$ (analizando su derivada, o evaluándola en varios puntos, o graficándola con un asistente). $K$ es el mayor valor absoluto que se observe (o una cota razonable por encima de él); una cota más grande que la real sigue siendo válida, solo hace la estimación de error más conservadora.</p>
        <div class="warn">Error común: usar $|f''(a)|$ o $|f''(b)|$ como si fuera el máximo. El máximo de $|f''|$ puede alcanzarse en un punto interior del intervalo; hay que revisar todo $[a,b]$, no solo los extremos.</div>`
      },
      {
        h: '8. Determinar n para una exactitud requerida',
        html: H`<p>Con frecuencia el problema es inverso: se conoce (o se acota) $K$ y se pide el menor $n$ que garantice un error menor que una tolerancia $\varepsilon$ dada. Se despeja $n$ de la cota de error correspondiente:</p>
        <div class="key">
          $$\text{Trapecios/punto medio: } n \ge \sqrt{\dfrac{K(b-a)^3}{c\,\varepsilon}} \quad (c=12 \text{ trapecios}, \ c=24 \text{ punto medio})$$
          $$\text{Simpson: } n \ge \sqrt[4]{\dfrac{K(b-a)^5}{180\,\varepsilon}}$$
        </div>
        <p>Como $n$ debe ser un número entero (y en Simpson además par), el resultado de la raíz se <strong>redondea siempre hacia arriba</strong> (nunca hacia abajo, porque un $n$ menor que el necesario no garantiza la exactitud pedida), y en Simpson se sube además al siguiente entero par si el redondeo dio un número impar.</p>
        <div class="note">Redondear hacia arriba es obligatorio aquí: la desigualdad debe cumplirse con $n$ entero, así que cualquier $n$ mayor o igual al valor calculado sirve, pero uno menor podría no garantizar la cota.</div>`
      },
      {
        h: '9. Estimación del error por doble cálculo (Richardson/Runge)',
        html: H`<p>Cuando no se conoce una cota $K$ de la derivada (o resulta muy laboriosa de obtener), se puede estimar el error calculando la integral aproximada dos veces: una con un cierto $\Delta x$ y otra con el doble de paso $2\Delta x$ (es decir, con $n$ y con $n/2$ subintervalos), y comparando los dos resultados. Se denota $I_{\Delta x}$ al valor obtenido con el paso más fino y $I_{2\Delta x}$ al obtenido con el paso más grueso.</p>
        <div class="key">
          $$\text{Trapecios: } \; |E_T| \approx \dfrac{I_{\Delta x} - I_{2\Delta x}}{3}$$
          $$\text{Simpson: } \; |E_S| \approx \dfrac{I_{\Delta x} - I_{2\Delta x}}{15}$$
        </div>
        <p>Estas fórmulas se derivan del comportamiento del término de error dominante de cada regla (proporcional a $\Delta x^2$ en trapecios y a $\Delta x^4$ en Simpson): al pasar de $2\Delta x$ a $\Delta x$ el error se reduce en un factor conocido (4 para trapecios, 16 para Simpson), lo que permite despejar el error de $I_{\Delta x}$ a partir de la diferencia entre ambos cálculos, sin necesidad de conocer $K$.</p>
        <p>El procedimiento práctico es:</p>
        <ol>
          <li>Calcular $I_{\Delta x}$ con $n$ subintervalos (regla completa, con su tabla).</li>
          <li>Calcular $I_{2\Delta x}$ usando solo la mitad de los nodos (los de índice par de la tabla anterior), es decir, con $n/2$ subintervalos.</li>
          <li>Aplicar la fórmula correspondiente para obtener una estimación del error de $I_{\Delta x}$.</li>
        </ol>
        <div class="note">Cuanto mayor sea $n$, más confiable es esta estimación (el término de error dominante aproxima mejor al error real). Con pocos subintervalos el resultado es solo orientativo.</div>`
      },
      {
        h: '10. Datos dados en tablas (sin fórmula explícita)',
        html: H`<p>Si en vez de una función $f(x)$ solo se dispone de una tabla de mediciones $(x_0,f_0), (x_1,f_1), \dots, (x_n,f_n)$ igualmente espaciadas (por ejemplo, lecturas de un sensor cada cierto intervalo de tiempo), las mismas tres reglas se aplican exactamente igual: no hace falta evaluar ninguna fórmula, porque los valores de $f(x_i)$ ya están dados. Solo hay que:</p>
        <ol>
          <li>Confirmar que el espaciamiento $\Delta x$ (o $\Delta t$) entre los datos es constante.</li>
          <li>Elegir la regla según la paridad de $n$ y la precisión deseada (Simpson exige $n$ par).</li>
          <li>Aplicar directamente la fórmula de pesos $(1,2,2,\dots,2,1)$ o $(1,4,2,4,\dots,4,1)$ sobre los valores tabulados.</li>
        </ol>
        <p>Este caso es, de hecho, el más frecuente en la práctica de la ingeniería: la integral aproxima una cantidad acumulada (distancia recorrida a partir de velocidades medidas, volumen acumulado a partir de un caudal medido, trabajo a partir de una fuerza medida) cuando la única información disponible son las lecturas del instrumento.</p>`
      }
    ],
    examples: [
      {
        title: 'Ejemplo 1 · Regla del punto medio',
        statement: H`Aproximar $\displaystyle\int_0^2 \sqrt{x^3+1}\,dx$ usando la regla del punto medio con $n=8$ y estimar el error con la cota teórica.`,
        steps: [
          H`<strong>Paso 1 (partición).</strong> $a=0$, $b=2$, $n=8 \Rightarrow \Delta x = \dfrac{2-0}{8}=0.25$. Los puntos medios son $\overline{x}_i = 0 + (i-\tfrac12)(0.25)$ para $i=1,\dots,8$: $0.1250,\ 0.3750,\ 0.6250,\ 0.8750,\ 1.1250,\ 1.3750,\ 1.6250,\ 1.8750$.`,
          H`<strong>Paso 2 (evaluar $f$ en cada punto medio).</strong> Con $f(x)=\sqrt{x^3+1}$: por ejemplo $f(0.1250)=\sqrt{0.1250^3+1}=\sqrt{1.001953}=1.0010$, y $f(1.8750)=\sqrt{1.8750^3+1}=\sqrt{7.591797}=2.7553$. La tabla completa:
          <table class="tbl"><thead><tr><th>$i$</th><th>$\overline{x}_i$</th><th>$f(\overline{x}_i)$</th></tr></thead><tbody>
          <tr><td>1</td><td>0.1250</td><td>1.0010</td></tr>
          <tr><td>2</td><td>0.3750</td><td>1.0260</td></tr>
          <tr><td>3</td><td>0.6250</td><td>1.1154</td></tr>
          <tr><td>4</td><td>0.8750</td><td>1.2923</td></tr>
          <tr><td>5</td><td>1.1250</td><td>1.5569</td></tr>
          <tr><td>6</td><td>1.3750</td><td>1.8973</td></tr>
          <tr><td>7</td><td>1.6250</td><td>2.3002</td></tr>
          <tr><td>8</td><td>1.8750</td><td>2.7553</td></tr>
          <tr><td colspan="2"><strong>Suma</strong></td><td><strong>12.9443</strong></td></tr>
          </tbody></table>`,
          H`<strong>Paso 3 (aplicar la fórmula).</strong> $$M_8 = \Delta x \sum_{i=1}^{8} f(\overline{x}_i) = 0.25 \times 12.9443 = 3.2361$$`,
          H`<strong>Paso 4 (cota de error).</strong> Se necesita $K$ con $|f''(x)|\le K$ en $[0,2]$. Derivando: $f''(x) = 3x(x^3+1)^{-1/2} - \tfrac94 x^4(x^3+1)^{-3/2}$. Evaluando en varios puntos (o graficando $f''$) se observa que el máximo de $|f''|$ en $[0,2]$ ocurre cerca de $x\approx 0.73$ y vale aproximadamente $1.47$. Se toma $K=1.47$.`,
          H`<strong>Paso 5 (calcular la cota).</strong> $$|E_M| \le \dfrac{K(b-a)^3}{24n^2} = \dfrac{1.47(2)^3}{24(8)^2} = \dfrac{11.76}{1536} = 0.0077$$ Se garantiza entonces que $\left|\displaystyle\int_0^2\sqrt{x^3+1}\,dx - 3.2361\right| \le 0.0077$.`
        ],
        answer: H`$M_8 \approx 3.2361$, con $|E_M|\le 0.0077$.`
      },
      {
        title: 'Ejemplo 2 · Regla de los trapecios y doble cálculo',
        statement: H`Aproximar la misma integral $\displaystyle\int_0^2 \sqrt{x^3+1}\,dx$ con la regla de los trapecios usando $n=8$, acotar el error con la cota teórica, y estimarlo de nuevo por doble cálculo usando $n=4$.`,
        steps: [
          H`<strong>Paso 1 (tabla con $n=8$, $\Delta x=0.25$).</strong> Ahora se evalúa $f$ en los extremos $x_i=0,0.25,0.5,\dots,2$ (no en los puntos medios):
          <table class="tbl"><thead><tr><th>$i$</th><th>$x_i$</th><th>$f(x_i)$</th></tr></thead><tbody>
          <tr><td>0</td><td>0.0000</td><td>1.0000</td></tr>
          <tr><td>1</td><td>0.2500</td><td>1.0078</td></tr>
          <tr><td>2</td><td>0.5000</td><td>1.0607</td></tr>
          <tr><td>3</td><td>0.7500</td><td>1.1924</td></tr>
          <tr><td>4</td><td>1.0000</td><td>1.4142</td></tr>
          <tr><td>5</td><td>1.2500</td><td>1.7185</td></tr>
          <tr><td>6</td><td>1.5000</td><td>2.0917</td></tr>
          <tr><td>7</td><td>1.7500</td><td>2.5218</td></tr>
          <tr><td>8</td><td>2.0000</td><td>3.0000</td></tr>
          </tbody></table>`,
          H`<strong>Paso 2 (sumas por peso).</strong> Extremos: $f(x_0)+f(x_8) = 1.0000+3.0000=4.0000$. Interiores: $f(x_1)+\cdots+f(x_7) = 1.0078+1.0607+1.1924+1.4142+1.7185+2.0917+2.5218 = 11.0070$.`,
          H`<strong>Paso 3 (aplicar la fórmula).</strong> $$T_8 = \dfrac{\Delta x}{2}\big[f(x_0)+2(11.0070)+f(x_8)\big] = \dfrac{0.25}{2}\big[4.0000+22.0140\big] = 0.125 \times 26.0140 = 3.2517$$`,
          H`<strong>Paso 4 (cota teórica de error).</strong> Con el mismo $K=1.47$ del ejemplo anterior: $$|E_T| \le \dfrac{K(b-a)^3}{12n^2} = \dfrac{1.47(2)^3}{12(8)^2} = \dfrac{11.76}{768} = 0.0153$$`,
          H`<strong>Paso 5 (doble cálculo con $n=4$, $\Delta x = 0.5$).</strong> Se reutilizan solo los nodos de índice par de la tabla anterior: $f(0)=1.0000$, $f(0.5)=1.0607$, $f(1)=1.4142$, $f(1.5)=2.0917$, $f(2)=3.0000$. Interiores: $1.0607+1.4142+2.0917=4.5665$. $$T_4 = \dfrac{0.5}{2}\big[4.0000+2(4.5665)\big] = 0.25(13.1330) = 3.2833$$`,
          H`<strong>Paso 6 (error por doble cálculo).</strong> $$|E_T| \approx \dfrac{|I_{\Delta x}-I_{2\Delta x}|}{3} = \dfrac{|3.2517-3.2833|}{3} = \dfrac{0.0316}{3} = 0.0105$$ Este valor es coherente con la cota teórica ($0.0105 \le 0.0153$) y, de hecho, se acerca bastante al error real (la integral vale $3.2413$ con más cifras, así que el error real de $T_8$ es $0.0104$).`
        ],
        answer: H`$T_8 \approx 3.2517$, $|E_T|\le 0.0153$ (cota) y $|E_T|\approx 0.0105$ (doble cálculo).`
      },
      {
        title: 'Ejemplo 3 · Regla de Simpson y doble cálculo',
        statement: H`Aproximar $\displaystyle\int_0^2 \sqrt{x^3+1}\,dx$ con la regla de Simpson usando $n=8$, acotar el error, y estimarlo por doble cálculo usando $n=4$.`,
        steps: [
          H`<strong>Paso 1 (reutilizar la tabla del Ejemplo 2, misma $\Delta x=0.25$).</strong> Simpson necesita clasificar los nodos interiores en impares (peso 4) y pares (peso 2): impares $x_1,x_3,x_5,x_7$; pares $x_2,x_4,x_6$.`,
          H`<strong>Paso 2 (sumas por peso).</strong> Suma en índices impares: $f(x_1)+f(x_3)+f(x_5)+f(x_7) = 1.0078+1.1924+1.7185+2.5218 = 6.4405$. Suma en índices pares interiores: $f(x_2)+f(x_4)+f(x_6) = 1.0607+1.4142+2.0917 = 4.5665$.`,
          H`<strong>Paso 3 (aplicar la fórmula).</strong> $$S_8 = \dfrac{\Delta x}{3}\big[f(x_0)+4(6.4405)+2(4.5665)+f(x_8)\big] = \dfrac{0.25}{3}\big[1.0000+25.7620+9.1330+3.0000\big] = \dfrac{0.25}{3}(38.8950) = 3.2412$$`,
          H`<strong>Paso 4 (cota teórica de error).</strong> Ahora se necesita $K$ con $|f^{(4)}(x)|\le K$ en $[0,2]$. Derivando dos veces más (o graficando la cuarta derivada), el máximo de $|f^{(4)}|$ en $[0,2]$ es aproximadamente $7.01$; se toma $K=7$. $$|E_S| \le \dfrac{K(b-a)^5}{180n^4} = \dfrac{7(2)^5}{180(8)^4} = \dfrac{224}{737280} = 0.0003$$`,
          H`<strong>Paso 5 (doble cálculo con $n=4$, $\Delta x=0.5$).</strong> Nodos: $f(0)=1.0000$, $f(0.5)=1.0607$, $f(1)=1.4142$, $f(1.5)=2.0917$, $f(2)=3.0000$. Impares (peso 4): $f(0.5)+f(1.5)=1.0607+2.0917=3.1524$. Pares (peso 2): $f(1)=1.4142$. $$S_4 = \dfrac{0.5}{3}\big[1.0000+4(3.1524)+2(1.4142)+3.0000\big] = \dfrac{0.5}{3}(19.4380) = 3.2396$$`,
          H`<strong>Paso 6 (error por doble cálculo).</strong> $$|E_S| \approx \dfrac{|I_{\Delta x}-I_{2\Delta x}|}{15} = \dfrac{|3.2412-3.2396|}{15} = \dfrac{0.0016}{15} = 0.0001$$ Coincide con la cota teórica (ambas dan $0.0001$–$0.0003$) y confirma que Simpson, con el mismo $n=8$, es muchísimo más preciso que trapecios ($0.0001$ frente a $0.0105$).`
        ],
        answer: H`$S_8 \approx 3.2412$, $|E_S|\le 0.0003$ (cota) y $|E_S|\approx 0.0001$ (doble cálculo).`
      },
      {
        title: 'Ejemplo 4 · Datos dados en una tabla (sin fórmula)',
        statement: H`Un sensor mide el caudal de entrada $r(t)$ (litros por minuto) a un tanque cada 3 minutos, durante 18 minutos:<br>
        $t$ (min): $0,3,6,9,12,15,18$<br>
        $r(t)$ (L/min): $8,\ 10.5,\ 13,\ 15.5,\ 17,\ 16,\ 14$<br>
        Estimar el volumen total que entró al tanque usando (a) la regla de los trapecios y (b) la regla de Simpson.`,
        steps: [
          H`<strong>Paso 1 (identificar $n$ y $\Delta t$).</strong> Hay 7 datos, es decir $n=6$ subintervalos, con $\Delta t = 3$ min (constante, se puede verificar restando tiempos consecutivos). Como $n=6$ es par, se puede aplicar tanto trapecios como Simpson sin ajustar nada.`,
          H`<strong>Paso 2 (trapecios).</strong> Extremos: $r_0+r_6 = 8+14=22$. Interiores: $r_1+r_2+r_3+r_4+r_5 = 10.5+13+15.5+17+16=72$. $$V_T = \dfrac{\Delta t}{2}\big[22 + 2(72)\big] = \dfrac{3}{2}(166) = 249 \text{ litros}$$`,
          H`<strong>Paso 3 (Simpson).</strong> Impares: $r_1+r_3+r_5 = 10.5+15.5+16=42$. Pares interiores: $r_2+r_4=13+17=30$. $$V_S = \dfrac{\Delta t}{3}\big[22 + 4(42) + 2(30)\big] = 1\big[22+168+60\big] = 250 \text{ litros}$$`,
          H`<strong>Paso 4 (interpretación).</strong> No hay fórmula para $r(t)$, así que no se puede calcular un error teórico (no hay $f''$ ni $f^{(4)}$ para acotar); solo se puede comparar ambas estimaciones. Como difieren poco (249 frente a 250 litros) y Simpson usa más información de la forma de la curva entre los datos, se prefiere el resultado de Simpson: aproximadamente 250 litros.`
        ],
        answer: H`$V_T = 249$ L, $V_S = 250$ L; se reporta $\approx 250$ L.`
      },
      {
        title: 'Ejemplo 5 · Determinar n para una exactitud dada (trapecios)',
        statement: H`¿Cuántos subintervalos $n$ se necesitan para aproximar $\displaystyle\int_1^2 \dfrac{1}{x}\,dx$ con la regla de los trapecios, garantizando un error menor que $0.0005$?`,
        steps: [
          H`<strong>Paso 1 (derivar y acotar $f''$).</strong> $f(x)=\dfrac1x \Rightarrow f'(x)=-\dfrac{1}{x^2} \Rightarrow f''(x)=\dfrac{2}{x^3}$. En $[1,2]$, $f''$ es decreciente (el denominador $x^3$ crece), así que el máximo de $|f''(x)|=\dfrac{2}{x^3}$ se alcanza en $x=1$: $K = f''(1) = 2$.`,
          H`<strong>Paso 2 (plantear la desigualdad).</strong> $$|E_T| \le \dfrac{K(b-a)^3}{12n^2} = \dfrac{2(1)^3}{12n^2} = \dfrac{1}{6n^2} \le 0.0005$$`,
          H`<strong>Paso 3 (despejar $n$).</strong> $$n^2 \ge \dfrac{1}{6(0.0005)} = 333.33 \quad\Rightarrow\quad n \ge \sqrt{333.33} = 18.26$$`,
          H`<strong>Paso 4 (redondear hacia arriba).</strong> Como $n$ debe ser entero y la desigualdad es "$\ge$", se toma el primer entero que no sea menor que $18.26$: $n=19$. (Trapecios no exige que $n$ sea par.) Con $n=18$ el error real observado es $0.000193$ y con $n=19$ es $0.000173$; ambos están de hecho por debajo de $0.0005$, pero solo $n=19$ está garantizado por la cota teórica sin más análisis.`
        ],
        answer: H`$n = 19$ subintervalos.`
      },
      {
        title: 'Ejemplo 6 · Determinar n para una exactitud dada (Simpson)',
        statement: H`¿Cuántos subintervalos $n$ (par) se necesitan para aproximar $\displaystyle\int_1^2 \dfrac{1}{x}\,dx$ con la regla de Simpson, garantizando un error menor que $0.0001$?`,
        steps: [
          H`<strong>Paso 1 (cuarta derivada).</strong> Derivando $f(x)=1/x$ cuatro veces: $f'=-x^{-2}$, $f''=2x^{-3}$, $f'''=-6x^{-4}$, $f^{(4)}(x) = 24x^{-5} = \dfrac{24}{x^5}$. En $[1,2]$ el máximo de $\left|\dfrac{24}{x^5}\right|$ está en $x=1$: $K=24$.`,
          H`<strong>Paso 2 (plantear la desigualdad).</strong> $$|E_S| \le \dfrac{K(b-a)^5}{180n^4} = \dfrac{24(1)^5}{180n^4} = \dfrac{24}{180n^4} \le 0.0001$$`,
          H`<strong>Paso 3 (despejar $n$).</strong> $$n^4 \ge \dfrac{24}{180(0.0001)} = 1333.33 \quad\Rightarrow\quad n \ge \sqrt[4]{1333.33} = 6.04$$`,
          H`<strong>Paso 4 (redondear hacia arriba y a par).</strong> El primer entero no menor que $6.04$ es $7$, pero Simpson exige $n$ par, así que se sube al siguiente par: $n=8$. En efecto, con $n=8$ el error real resulta $0.000007$, ampliamente dentro de la tolerancia pedida.`,
          H`<strong>Comparación con el Ejemplo 5:</strong> para la misma función y el mismo intervalo, trapecios necesitó $n=19$ para un error de $0.0005$, mientras que Simpson necesita solo $n=8$ para un error diez veces menor ($0.0001$). Esto ilustra por qué Simpson es, en general, muy superior en eficiencia.`
        ],
        answer: H`$n = 8$ subintervalos.`
      },
      {
        title: 'Ejemplo 7 · Un integrando sin primitiva elemental',
        statement: H`Aproximar $\displaystyle\int_0^1 e^{-x^2}\,dx$ (relacionada con la función de error, sin primitiva elemental) usando la regla de Simpson con $n=4$.`,
        steps: [
          H`<strong>Paso 1 (por qué numérico).</strong> $g(x)=e^{-x^2}$ es continua en $[0,1]$, así que la integral existe y representa un área bien definida, pero no existe ninguna combinación finita de funciones elementales cuya derivada sea $e^{-x^2}$. La única vía práctica es aproximar.`,
          H`<strong>Paso 2 (partición, $n=4$, $\Delta x=0.25$).</strong> $$x_i: 0,\ 0.25,\ 0.5,\ 0.75,\ 1$$`,
          H`<strong>Paso 3 (tabla de valores).</strong>
          <table class="tbl"><thead><tr><th>$i$</th><th>$x_i$</th><th>$g(x_i)=e^{-x_i^2}$</th></tr></thead><tbody>
          <tr><td>0</td><td>0.0000</td><td>1.0000</td></tr>
          <tr><td>1</td><td>0.2500</td><td>0.9394</td></tr>
          <tr><td>2</td><td>0.5000</td><td>0.7788</td></tr>
          <tr><td>3</td><td>0.7500</td><td>0.5698</td></tr>
          <tr><td>4</td><td>1.0000</td><td>0.3679</td></tr>
          </tbody></table>`,
          H`<strong>Paso 4 (Simpson).</strong> Impares: $g(x_1)+g(x_3) = 0.9394+0.5698 = 1.5092$. Pares interiores: $g(x_2) = 0.7788$. $$S_4 = \dfrac{0.25}{3}\big[1.0000 + 4(1.5092) + 2(0.7788) + 0.3679\big] = \dfrac{0.25}{3}(8.9623) = 0.7469$$`,
          H`<strong>Paso 5 (verificación de razonabilidad).</strong> Con un cálculo numérico de referencia mucho más fino (miles de subintervalos) se obtiene $0.74682\ldots$, así que el error real de esta aproximación con solo $n=4$ es de apenas $0.0001$: excelente para tan pocos puntos, gracias a la suavidad de $e^{-x^2}$.`
        ],
        answer: H`$\displaystyle\int_0^1 e^{-x^2}\,dx \approx 0.7469$.`
      }
    ],
    exercises: [
      {
        id: 's3e01', level: 1, type: 'num',
        q: H`Aproximar $\displaystyle\int_0^4 x^2\,dx$ con la regla del punto medio y $n=4$. Dar el resultado con 4 cifras decimales.`,
        hint: H`$\Delta x = 1$; los puntos medios son $0.5,1.5,2.5,3.5$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Partición y puntos medios.</strong> Se pide la regla del punto medio: en vez de evaluar $f$ en los extremos de cada subintervalo, se evalúa en su punto medio. Con $a=0$, $b=4$, $n=4$: $\Delta x = \dfrac{4-0}{4}=1$. Los puntos medios son $\overline{x}_i = a+(i-\tfrac12)\Delta x$, es decir $0.5,\ 1.5,\ 2.5,\ 3.5$.</p></div>
        <div class="step"><p><strong>Tabla de valores.</strong> Se evalúa $f(x)=x^2$ en cada punto medio; en el punto medio no hay pesos distintos, cada valor entra una sola vez en la suma.</p>
        <table class="tbl"><thead><tr><th>$i$</th><th>$\overline{x}_i$</th><th>$f(\overline{x}_i)$</th><th>peso</th></tr></thead><tbody>
        <tr><td>1</td><td>0.5</td><td>0.25</td><td>1</td></tr>
        <tr><td>2</td><td>1.5</td><td>2.25</td><td>1</td></tr>
        <tr><td>3</td><td>2.5</td><td>6.25</td><td>1</td></tr>
        <tr><td>4</td><td>3.5</td><td>12.25</td><td>1</td></tr>
        <tr><td colspan="2"><strong>Suma</strong></td><td><strong>21.00</strong></td><td></td></tr>
        </tbody></table></div>
        <div class="step"><p><strong>Aplicar la fórmula del punto medio.</strong> Se multiplica la suma de los valores por $\Delta x$:</p>$$M_4 = \Delta x\sum_{i=1}^{4} f(\overline{x}_i) = 1\times 21.00 = 21.0000$$</div>
        </div>
        <div class="final">$M_4 = 21.0000$.</div>`,
        answer: '21', tol: 0.001
      },
      {
        id: 's3e02', level: 1, type: 'num',
        q: H`Aproximar $\displaystyle\int_0^4 x^2\,dx$ con la regla de los trapecios y $n=4$.`,
        hint: H`Tabla con $x_i=0,1,2,3,4$; pesos $1,2,2,2,1$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Partición.</strong> Con $a=0$, $b=4$, $n=4$: $\Delta x=\dfrac{4-0}{4}=1$, y los nodos son $x_i=0,1,2,3,4$ (a diferencia del punto medio, ahora se evalúa $f$ en los extremos de cada subintervalo).</p></div>
        <div class="step"><p><strong>Tabla y pesos.</strong> Trapecios pesa 1 los extremos y 2 los nodos interiores:</p>
        <table class="tbl"><thead><tr><th>$i$</th><th>$x_i$</th><th>$f(x_i)=x_i^2$</th><th>peso</th></tr></thead><tbody>
        <tr><td>0</td><td>0</td><td>0</td><td>1</td></tr>
        <tr><td>1</td><td>1</td><td>1</td><td>2</td></tr>
        <tr><td>2</td><td>2</td><td>4</td><td>2</td></tr>
        <tr><td>3</td><td>3</td><td>9</td><td>2</td></tr>
        <tr><td>4</td><td>4</td><td>16</td><td>1</td></tr>
        </tbody></table></div>
        <div class="step"><p><strong>Sumar por peso.</strong> Extremos: $f(0)+f(4)=0+16=16$. Interiores (peso 2): $f(1)+f(2)+f(3)=1+4+9=14$.</p></div>
        <div class="step"><p><strong>Aplicar la fórmula de trapecios.</strong></p>$$T_4=\dfrac{\Delta x}{2}\big[f(x_0)+2(14)+f(x_4)\big]=\dfrac12\big[16+28\big]=\dfrac12(44)=22$$</div>
        </div>
        <div class="final">$T_4 = 22$.</div>`,
        answer: '22', tol: 0.001
      },
      {
        id: 's3e03', level: 1, type: 'num',
        q: H`Aproximar $\displaystyle\int_0^4 x^2\,dx$ con la regla de Simpson y $n=4$, y comparar con el valor exacto $64/3$.`,
        hint: H`Pesos $1,4,2,4,1$ sobre $f(0),f(1),f(2),f(3),f(4)$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reutilizar la partición y clasificar los nodos.</strong> Con $n=4$, $\Delta x=1$ y nodos $x_i=0,1,2,3,4$: los índices impares ($x_1,x_3$) llevan peso 4 y el índice par interior ($x_2$) lleva peso 2.</p>
        <table class="tbl"><thead><tr><th>$i$</th><th>$x_i$</th><th>$f(x_i)=x_i^2$</th><th>peso</th></tr></thead><tbody>
        <tr><td>0</td><td>0</td><td>0</td><td>1</td></tr>
        <tr><td>1</td><td>1</td><td>1</td><td>4</td></tr>
        <tr><td>2</td><td>2</td><td>4</td><td>2</td></tr>
        <tr><td>3</td><td>3</td><td>9</td><td>4</td></tr>
        <tr><td>4</td><td>4</td><td>16</td><td>1</td></tr>
        </tbody></table></div>
        <div class="step"><p><strong>Sumar por peso.</strong> Impares: $f(1)+f(3)=1+9=10$. Par interior: $f(2)=4$.</p></div>
        <div class="step"><p><strong>Aplicar la fórmula de Simpson.</strong></p>$$S_4=\dfrac{\Delta x}{3}\big[f(0)+4(10)+2(4)+f(4)\big]=\dfrac13\big[0+40+8+16\big]=\dfrac13(64)=21.3333$$</div>
        <div class="step"><p><strong>Comparar con el valor exacto.</strong> El valor exacto es $\displaystyle\int_0^4 x^2\,dx=\left[\dfrac{x^3}{3}\right]_0^4=\dfrac{64}{3}=21.3333$. Coincide exactamente: Simpson integra sin error los polinomios de grado $\le 3$ (aquí $f$ es de grado 2), porque en cada pareja de subintervalos reemplaza a $f$ por una parábola que la reproduce con exactitud.</p></div>
        </div>
        <div class="final">$S_4 = 64/3 \approx 21.3333$, idéntico al valor exacto.</div>`,
        answer: '64/3', tol: 0.001
      },
      {
        id: 's3e04', level: 1, type: 'num',
        q: H`Calcular $\Delta x$ y el número de evaluaciones de $f$ necesarias para aplicar la regla de los trapecios en $[1,5]$ con $n=8$. Dar el valor de $\Delta x$.`,
        hint: H`$\Delta x=(b-a)/n$; el número de evaluaciones es $n+1$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Calcular $\Delta x$.</strong> El paso siempre se obtiene dividiendo la longitud del intervalo entre el número de subintervalos:</p>$$\Delta x = \dfrac{b-a}{n} = \dfrac{5-1}{8} = 0.5$$</div>
        <div class="step"><p><strong>Contar las evaluaciones necesarias.</strong> Los trapecios (igual que el punto medio y Simpson en su versión con extremos) requieren el valor de $f$ en cada nodo $x_0,x_1,\dots,x_n$, es decir en los $n+1$ extremos de los subintervalos: $x_0=1,\ x_1=1.5,\ x_2=2,\dots,x_8=5$. Con $n=8$ eso da $n+1=9$ evaluaciones.</p></div>
        </div>
        <div class="final">$\Delta x = 0.5$; se necesitan $9$ evaluaciones de $f$.</div>`,
        answer: '0.5', tol: 0.0005
      },
      {
        id: 's3e05', level: 1, type: 'num',
        q: H`Dada la tabla ($n=4$, $\Delta x=1$): $f(0)=2$, $f(1)=5$, $f(2)=7$, $f(3)=6$, $f(4)=3$. Aproximar $\int_0^4 f(x)\,dx$ con la regla de los trapecios.`,
        hint: H`Suma los interiores $f(1)+f(2)+f(3)$ y multiplícalos por 2.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Los datos ya están en forma de tabla.</strong> No hace falta evaluar ninguna fórmula: los valores $f(x_i)$ ya se dan. Solo hay que aplicar los pesos de trapecios ($1,2,2,2,1$) sobre ellos.</p>
        <table class="tbl"><thead><tr><th>$i$</th><th>$x_i$</th><th>$f(x_i)$</th><th>peso</th></tr></thead><tbody>
        <tr><td>0</td><td>0</td><td>2</td><td>1</td></tr>
        <tr><td>1</td><td>1</td><td>5</td><td>2</td></tr>
        <tr><td>2</td><td>2</td><td>7</td><td>2</td></tr>
        <tr><td>3</td><td>3</td><td>6</td><td>2</td></tr>
        <tr><td>4</td><td>4</td><td>3</td><td>1</td></tr>
        </tbody></table></div>
        <div class="step"><p><strong>Sumar por peso.</strong> Extremos: $f(0)+f(4)=2+3=5$. Interiores: $f(1)+f(2)+f(3)=5+7+6=18$.</p></div>
        <div class="step"><p><strong>Aplicar la fórmula de trapecios</strong> con $\Delta x=1$:</p>$$T_4 = \dfrac{1}{2}\big[5+2(18)\big] = \dfrac12(5+36)=\dfrac{41}{2}=20.5$$</div>
        </div>
        <div class="final">$T_4 = 20.5$.</div>`,
        answer: '20.5', tol: 0.001
      },
      {
        id: 's3e06', level: 1, type: 'choice',
        q: H`¿Cuál de las siguientes reglas de integración numérica exige que $n$ sea un número par?`,
        hint: H`Piensa en cómo se agrupan los subintervalos en cada regla.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Analizar cómo construye cada regla su aproximación.</strong> El punto medio y los trapecios trabajan subintervalo por subintervalo: cada uno aporta un rectángulo o un trapecio independiente, así que cualquier $n\ge 1$ es válido.</p></div>
        <div class="step"><p><strong>Por qué Simpson sí exige $n$ par.</strong> Simpson agrupa los subintervalos en <em>parejas</em> $[x_{i-1},x_i]\cup[x_i,x_{i+1}]$ y sobre cada pareja ajusta una parábola que pasa por los tres puntos. Para que todos los subintervalos queden agrupados en parejas completas, su número total $n$ debe ser par; si $n$ fuera impar quedaría un subintervalo suelto sin pareja.</p></div>
        <div class="step"><p><strong>Descartar las demás opciones.</strong> "Punto medio" y "Trapecios" son incorrectas porque, como se vio, no agrupan subintervalos. "Las tres exigen $n$ par" también es incorrecta: solo Simpson tiene esa restricción.</p></div>
        </div>
        <div class="final">La regla de Simpson.</div>`,
        options: [H`Regla del punto medio`, H`Regla de los trapecios`, H`Regla de Simpson`, H`Las tres exigen $n$ par`],
        correct: 2
      },
      {
        id: 's3e07', level: 2, type: 'num',
        q: H`Aproximar $\displaystyle\int_0^2 \sqrt{x^3+1}\,dx$ con la regla del punto medio y $n=4$ (a diferencia del Ejemplo 1, que usa $n=8$).`,
        hint: H`$\Delta x=0.5$; puntos medios $0.25, 0.75, 1.25, 1.75$ (coinciden con nodos de la tabla de trapecios del Ejemplo 2).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Partición.</strong> Con $a=0$, $b=2$, $n=4$: $\Delta x=\dfrac{2-0}{4}=0.5$. Los puntos medios son $\overline{x}_i=0.25,\ 0.75,\ 1.25,\ 1.75$ (nótese que menos subintervalos que el Ejemplo 1, así que se espera una aproximación algo menos precisa).</p></div>
        <div class="step"><p><strong>Tabla de valores.</strong> Se evalúa $f(x)=\sqrt{x^3+1}$ en cada punto medio:</p>
        <table class="tbl"><thead><tr><th>$i$</th><th>$\overline{x}_i$</th><th>$f(\overline{x}_i)$</th><th>peso</th></tr></thead><tbody>
        <tr><td>1</td><td>0.25</td><td>1.0078</td><td>1</td></tr>
        <tr><td>2</td><td>0.75</td><td>1.1924</td><td>1</td></tr>
        <tr><td>3</td><td>1.25</td><td>1.7185</td><td>1</td></tr>
        <tr><td>4</td><td>1.75</td><td>2.5218</td><td>1</td></tr>
        <tr><td colspan="2"><strong>Suma</strong></td><td><strong>6.4405</strong></td><td></td></tr>
        </tbody></table></div>
        <div class="step"><p><strong>Aplicar la fórmula.</strong></p>$$M_4 = \Delta x\sum_{i=1}^{4} f(\overline{x}_i) = 0.5\times 6.4405 = 3.2203$$</div>
        </div>
        <div class="final">$M_4 \approx 3.2203$.</div>`,
        answer: '3.2203', tol: 0.002
      },
      {
        id: 's3e08', level: 2, type: 'num',
        q: H`Aproximar $\displaystyle\int_0^2 \sqrt{x^3+1}\,dx$ con la regla de los trapecios y $n=4$, con 4 cifras decimales.`,
        hint: H`Usa los nodos $x_i=0,0.5,1,1.5,2$; ya aparecen en el Ejemplo 2 (paso 5).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Partición.</strong> Con $n=4$, $\Delta x=\dfrac{2-0}{4}=0.5$; ahora se evalúa $f(x)=\sqrt{x^3+1}$ en los extremos $x_i=0,0.5,1,1.5,2$, no en los puntos medios del ejercicio anterior.</p></div>
        <div class="step"><p><strong>Tabla y pesos.</strong></p>
        <table class="tbl"><thead><tr><th>$i$</th><th>$x_i$</th><th>$f(x_i)$</th><th>peso</th></tr></thead><tbody>
        <tr><td>0</td><td>0</td><td>1.0000</td><td>1</td></tr>
        <tr><td>1</td><td>0.5</td><td>1.0607</td><td>2</td></tr>
        <tr><td>2</td><td>1</td><td>1.4142</td><td>2</td></tr>
        <tr><td>3</td><td>1.5</td><td>2.0917</td><td>2</td></tr>
        <tr><td>4</td><td>2</td><td>3.0000</td><td>1</td></tr>
        </tbody></table></div>
        <div class="step"><p><strong>Sumar por peso.</strong> Extremos: $f(0)+f(2)=1.0000+3.0000=4.0000$. Interiores: $f(0.5)+f(1)+f(1.5)=1.0607+1.4142+2.0917=4.5665$.</p></div>
        <div class="step"><p><strong>Aplicar la fórmula de trapecios.</strong></p>$$T_4 = \dfrac{\Delta x}{2}\big[4.0000+2(4.5665)\big] = 0.25(13.1330)=3.2833$$</div>
        </div>
        <div class="final">$T_4 \approx 3.2833$.</div>`,
        answer: '3.2833', tol: 0.002
      },
      {
        id: 's3e09', level: 2, type: 'num',
        q: H`Aproximar $\displaystyle\int_0^2 \sqrt{x^3+1}\,dx$ con la regla de Simpson y $n=4$.`,
        hint: H`Reutiliza los mismos nodos del ejercicio anterior; pesos $1,4,2,4,1$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reutilizar la tabla del ejercicio anterior.</strong> Los nodos y valores de $f(x)=\sqrt{x^3+1}$ son los mismos ($x_i=0,0.5,1,1.5,2$), pero Simpson reclasifica los pesos: impares $\to 4$, par interior $\to 2$.</p>
        <table class="tbl"><thead><tr><th>$i$</th><th>$x_i$</th><th>$f(x_i)$</th><th>peso</th></tr></thead><tbody>
        <tr><td>0</td><td>0</td><td>1.0000</td><td>1</td></tr>
        <tr><td>1</td><td>0.5</td><td>1.0607</td><td>4</td></tr>
        <tr><td>2</td><td>1</td><td>1.4142</td><td>2</td></tr>
        <tr><td>3</td><td>1.5</td><td>2.0917</td><td>4</td></tr>
        <tr><td>4</td><td>2</td><td>3.0000</td><td>1</td></tr>
        </tbody></table></div>
        <div class="step"><p><strong>Sumar por peso.</strong> Impares: $f(0.5)+f(1.5)=1.0607+2.0917=3.1524$. Par interior: $f(1)=1.4142$.</p></div>
        <div class="step"><p><strong>Aplicar la fórmula de Simpson.</strong></p>$$S_4 = \dfrac{\Delta x}{3}\big[1.0000+4(3.1524)+2(1.4142)+3.0000\big] = \dfrac{0.5}{3}(19.4380)=3.2396$$</div>
        </div>
        <div class="final">$S_4 \approx 3.2396$.</div>`,
        answer: '3.2396', tol: 0.002
      },
      {
        id: 's3e10', level: 2, type: 'num',
        q: H`Si $|f''(x)|\le 0.9$ en $[1,4]$, acotar el error de la regla del punto medio con $n=6$.`,
        hint: H`$|E_M|\le \dfrac{K(b-a)^3}{24n^2}$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar los datos.</strong> Es un problema de cota de error del punto medio, no de calcular la integral: se conoce $K=0.9$ (cota de $|f''|$), $b-a=4-1=3$ y $n=6$.</p></div>
        <div class="step"><p><strong>Sustituir en la cota teórica del punto medio.</strong></p>$$|E_M| \le \dfrac{K(b-a)^3}{24n^2} = \dfrac{0.9(3)^3}{24(6)^2}$$</div>
        <div class="step"><p><strong>Aritmética.</strong> $(3)^3=27$ y $(6)^2=36$, así que:</p>$$|E_M| \le \dfrac{0.9(27)}{24(36)} = \dfrac{24.3}{864} = 0.0281$$</div>
        </div>
        <div class="final">$|E_M| \le 0.0281$.</div>`,
        answer: '0.0281', tol: 0.0005
      },
      {
        id: 's3e11', level: 2, type: 'num',
        q: H`Si $|f''(x)|\le 1.2$ en $[2,5]$, acotar el error de la regla de los trapecios con $n=10$.`,
        hint: H`$|E_T|\le \dfrac{K(b-a)^3}{12n^2}$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar los datos.</strong> Cota de error de trapecios: $K=1.2$, $b-a=5-2=3$, $n=10$.</p></div>
        <div class="step"><p><strong>Sustituir en la cota teórica de trapecios.</strong></p>$$|E_T| \le \dfrac{K(b-a)^3}{12n^2} = \dfrac{1.2(3)^3}{12(10)^2}$$</div>
        <div class="step"><p><strong>Aritmética.</strong> $(3)^3=27$, $(10)^2=100$:</p>$$|E_T| \le \dfrac{1.2(27)}{12(100)} = \dfrac{32.4}{1200} = 0.0270$$</div>
        </div>
        <div class="final">$|E_T| \le 0.0270$.</div>`,
        answer: '0.027', tol: 0.0005
      },
      {
        id: 's3e12', level: 2, type: 'num',
        q: H`Si $|f^{(4)}(x)|\le 5$ en $[0,4]$, acotar el error de la regla de Simpson con $n=8$.`,
        hint: H`$|E_S|\le \dfrac{K(b-a)^5}{180n^4}$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar los datos.</strong> Cota de error de Simpson (usa la cuarta derivada, no la segunda): $K=5$, $b-a=4-0=4$, $n=8$.</p></div>
        <div class="step"><p><strong>Sustituir en la cota teórica de Simpson.</strong></p>$$|E_S| \le \dfrac{K(b-a)^5}{180n^4} = \dfrac{5(4)^5}{180(8)^4}$$</div>
        <div class="step"><p><strong>Aritmética.</strong> $(4)^5=1024$ y $(8)^4=4096$:</p>$$|E_S| \le \dfrac{5(1024)}{180(4096)} = \dfrac{5120}{737280} = 0.0069$$</div>
        </div>
        <div class="final">$|E_S| \le 0.0069$.</div>`,
        answer: '0.0069', tol: 0.0005
      },
      {
        id: 's3e13', level: 2, type: 'num',
        q: H`Si $|f''(x)|\le 2.4$ en $[0,3]$, ¿cuántos subintervalos $n$ se necesitan para que el error de la regla de los trapecios sea menor que $0.002$?`,
        hint: H`Despeja $n$ de $\dfrac{K(b-a)^3}{12n^2}\le \varepsilon$ y redondea hacia arriba.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear la desigualdad.</strong> Ahora el problema es inverso: se conoce la cota $K=2.4$ y se pide el $n$ mínimo que garantice $|E_T|<\varepsilon=0.002$ en $[0,3]$ ($b-a=3$). Se parte de la cota de error de trapecios y se despeja $n$:</p>$$\dfrac{K(b-a)^3}{12n^2}\le \varepsilon \quad\Rightarrow\quad n^2 \ge \dfrac{K(b-a)^3}{12\varepsilon}$$</div>
        <div class="step"><p><strong>Sustituir y calcular.</strong></p>$$n^2 \ge \dfrac{2.4(27)}{12(0.002)} = \dfrac{64.8}{0.024} = 2700 \;\Rightarrow\; n\ge \sqrt{2700}=51.96$$</div>
        <div class="step"><p><strong>Redondear hacia arriba.</strong> Como $n$ debe ser entero y la desigualdad exige "$\ge$", cualquier $n$ menor que $51.96$ no garantiza la cota; se toma el primer entero no menor: $n=52$.</p></div>
        </div>
        <div class="final">$n = 52$ subintervalos.</div>`,
        answer: '52', tol: 0.5
      },
      {
        id: 's3e14', level: 2, type: 'num',
        q: H`Si $|f^{(4)}(x)|\le 16$ en $[1,3]$, ¿cuántos subintervalos $n$ (par) se necesitan para que el error de la regla de Simpson sea menor que $0.0003$?`,
        hint: H`Despeja $n$ de $\dfrac{K(b-a)^5}{180n^4}\le\varepsilon$; recuerda redondear a par.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear la desigualdad.</strong> Con $K=16$, $b-a=3-1=2$ y $\varepsilon=0.0003$, se despeja $n$ de la cota de error de Simpson:</p>$$\dfrac{K(b-a)^5}{180n^4}\le\varepsilon \quad\Rightarrow\quad n^4 \ge \dfrac{K(b-a)^5}{180\varepsilon}$$</div>
        <div class="step"><p><strong>Sustituir y calcular.</strong> $(b-a)^5=2^5=32$:</p>$$n^4 \ge \dfrac{16(32)}{180(0.0003)} = \dfrac{512}{0.054} = 9481.5 \;\Rightarrow\; n \ge \sqrt[4]{9481.5}=9.87$$</div>
        <div class="step"><p><strong>Redondear hacia arriba y a par.</strong> El primer entero no menor que $9.87$ es $10$; como además Simpson exige $n$ par y $10$ ya lo es, no hace falta subir más.</p></div>
        </div>
        <div class="final">$n = 10$ subintervalos.</div>`,
        answer: '10', tol: 0.5
      },
      {
        id: 's3e15', level: 2, type: 'num',
        q: H`Al aplicar trapecios con $\Delta x$ y con $2\Delta x$ se obtuvo $I_{\Delta x}=5.1234$ e $I_{2\Delta x}=5.1500$. Estimar $|E_T|$ por doble cálculo.`,
        hint: H`$|E_T|\approx \dfrac{|I_{\Delta x}-I_{2\Delta x}|}{3}$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar por qué se usa doble cálculo.</strong> No se da ninguna cota $K$ de $f''$, así que la única forma de estimar el error es comparar el resultado con paso $\Delta x$ y con el doble de paso $2\Delta x$: $I_{\Delta x}=5.1234$ (más fino) e $I_{2\Delta x}=5.1500$ (más grueso).</p></div>
        <div class="step"><p><strong>Aplicar la fórmula de Richardson para trapecios.</strong></p>$$|E_T| \approx \dfrac{|I_{\Delta x}-I_{2\Delta x}|}{3} = \dfrac{|5.1234-5.1500|}{3} = \dfrac{0.0266}{3} = 0.0089$$</div>
        </div>
        <div class="final">$|E_T| \approx 0.0089$.</div>`,
        answer: '0.0089', tol: 0.0005
      },
      {
        id: 's3e16', level: 2, type: 'choice',
        q: H`Una función tiene un integrando suave y acotado, sin cambios abruptos de curvatura. Para el mismo $n$, ¿qué regla suele dar el menor error?`,
        hint: H`Compara el orden de decaimiento del error: $1/n^2$ frente a $1/n^4$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Comparar el orden de las cotas de error.</strong> Punto medio y trapecios tienen cotas proporcionales a $1/n^2$; Simpson tiene una cota proporcional a $1/n^4$. Para $n$ grande, $1/n^4$ es muchísimo menor que $1/n^2$.</p></div>
        <div class="step"><p><strong>Por qué Simpson decae más rápido.</strong> Simpson aproxima $f$ en cada pareja de subintervalos por una parábola, que reproduce exactamente cualquier polinomio de grado $\le 3$; el error que queda depende de la cuarta derivada. Trapecios y punto medio solo aproximan por rectas o rectángulos, cuyo error depende de la segunda derivada y decae más lento.</p></div>
        <div class="step"><p><strong>Descartar las demás opciones.</strong> "Punto medio" y "Trapecios" comparten el mismo orden de error $1/n^2$ entre sí (no son mejores que Simpson); "las tres dan siempre el mismo error" es falso, como muestra precisamente la comparación anterior.</p></div>
        </div>
        <div class="final">La regla de Simpson.</div>`,
        options: [H`Punto medio`, H`Trapecios`, H`Simpson`, H`Las tres dan siempre el mismo error`],
        correct: 2
      },
      {
        id: 's3e17', level: 3, type: 'num',
        q: H`Aproximar $\displaystyle\int_0^3 \sqrt{1+x^3}\,dx$ (sin primitiva elemental) con la regla de Simpson y $n=6$. Da el resultado con 4 decimales.`,
        hint: H`$\Delta x=0.5$; construye la tabla completa con 7 nodos y clasifica pesos $1,4,2,4,2,4,1$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Por qué numérico.</strong> $f(x)=\sqrt{1+x^3}$ es continua en $[0,3]$, pero no tiene primitiva elemental; la única vía práctica es aproximar la integral.</p></div>
        <div class="step"><p><strong>Partición.</strong> Con $a=0$, $b=3$, $n=6$: $\Delta x=\dfrac{3-0}{6}=0.5$, con 7 nodos $x_i=0,0.5,1,1.5,2,2.5,3$; $n=6$ es par, como exige Simpson.</p></div>
        <div class="step"><p><strong>Tabla y pesos.</strong> Patrón $1,4,2,4,2,4,1$:</p>
        <table class="tbl"><thead><tr><th>$i$</th><th>$x_i$</th><th>$f(x_i)$</th><th>peso</th></tr></thead><tbody>
        <tr><td>0</td><td>0</td><td>1.0000</td><td>1</td></tr>
        <tr><td>1</td><td>0.5</td><td>1.0607</td><td>4</td></tr>
        <tr><td>2</td><td>1</td><td>1.4142</td><td>2</td></tr>
        <tr><td>3</td><td>1.5</td><td>2.0917</td><td>4</td></tr>
        <tr><td>4</td><td>2</td><td>3.0000</td><td>2</td></tr>
        <tr><td>5</td><td>2.5</td><td>4.0774</td><td>4</td></tr>
        <tr><td>6</td><td>3</td><td>5.2915</td><td>1</td></tr>
        </tbody></table></div>
        <div class="step"><p><strong>Sumar por peso.</strong> Impares: $f(0.5)+f(1.5)+f(2.5)=1.0607+2.0917+4.0774=7.2298$. Pares interiores: $f(1)+f(2)=1.4142+3.0000=4.4142$.</p></div>
        <div class="step"><p><strong>Aplicar la fórmula de Simpson.</strong></p>$$S_6 = \dfrac{\Delta x}{3}\big[1.0000+4(7.2298)+2(4.4142)+5.2915\big] = \dfrac{0.5}{3}(44.0387)=7.3398$$</div>
        </div>
        <div class="final">$S_6 \approx 7.3398$.</div>`,
        answer: '7.3398', tol: 0.005
      },
      {
        id: 's3e18', level: 3, type: 'num',
        q: H`La corriente de un río se midió cada 2 minutos ($n=6$) obteniendo el caudal $r(t)$ en m³/min: $t=0,2,4,6,8,10,12$ con $r=5,\ 9,\ 12,\ 14,\ 13,\ 10,\ 6$. Estimar el volumen total (en m³) que pasó en esos 12 minutos usando la regla de Simpson.`,
        hint: H`$n=6$ es par; pesos $1,4,2,4,2,4,1$ sobre los valores dados.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Los datos ya vienen tabulados.</strong> No hay fórmula para $r(t)$: solo se tienen mediciones cada $\Delta t=2$ minutos, $n=6$ subintervalos (7 datos), y $n=6$ es par, así que se puede aplicar Simpson directamente sobre los valores dados.</p>
        <table class="tbl"><thead><tr><th>$i$</th><th>$t_i$</th><th>$r_i$</th><th>peso</th></tr></thead><tbody>
        <tr><td>0</td><td>0</td><td>5</td><td>1</td></tr>
        <tr><td>1</td><td>2</td><td>9</td><td>4</td></tr>
        <tr><td>2</td><td>4</td><td>12</td><td>2</td></tr>
        <tr><td>3</td><td>6</td><td>14</td><td>4</td></tr>
        <tr><td>4</td><td>8</td><td>13</td><td>2</td></tr>
        <tr><td>5</td><td>10</td><td>10</td><td>4</td></tr>
        <tr><td>6</td><td>12</td><td>6</td><td>1</td></tr>
        </tbody></table></div>
        <div class="step"><p><strong>Sumar por peso.</strong> Impares: $r_1+r_3+r_5=9+14+10=33$. Pares interiores: $r_2+r_4=12+13=25$.</p></div>
        <div class="step"><p><strong>Aplicar la fórmula de Simpson.</strong></p>$$V_S = \dfrac{\Delta t}{3}\big[5+4(33)+2(25)+6\big] = \dfrac23(5+132+50+6) = \dfrac23(193) = 128.6667$$</div>
        </div>
        <div class="final">$V_S \approx 128.6667\ \text{m}^3$.</div>`,
        answer: '128.6667', tol: 0.01
      },
      {
        id: 's3e19', level: 3, type: 'num',
        q: H`Para $\displaystyle\int_0^4 \dfrac{1}{1+x^2}\,dx$ se calculó con trapecios $T_8=1.325253$ y $T_{16}=1.325674$. Estimar $|E_T|$ de $T_{16}$ por doble cálculo, y compara con el error real sabiendo que la integral exacta es $\arctan(4)=1.325818$.`,
        hint: H`Usa $I_{\Delta x}=T_{16}$ (paso más fino) e $I_{2\Delta x}=T_8$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar cuál es el paso fino y cuál el grueso.</strong> $T_{16}$ usa el doble de subintervalos que $T_8$, así que $T_{16}$ es $I_{\Delta x}$ (paso más fino) y $T_8$ es $I_{2\Delta x}$ (paso más grueso).</p></div>
        <div class="step"><p><strong>Aplicar la fórmula de Richardson para trapecios.</strong></p>$$|E_T| \approx \dfrac{|I_{\Delta x}-I_{2\Delta x}|}{3} = \dfrac{|T_{16}-T_8|}{3} = \dfrac{|1.325674-1.325253|}{3} = \dfrac{0.000421}{3} = 0.000140$$</div>
        <div class="step"><p><strong>Comparar con el error real.</strong> Como se conoce el valor exacto $\arctan(4)=1.325818$, el error real de $T_{16}$ es $|1.325674-1.325818|=0.000144$, prácticamente idéntico a la estimación por doble cálculo ($0.000140$): confirma que el método de Richardson es fiable cuando $n$ ya es razonablemente grande, sin necesidad de conocer una cota $K$ de $f''$.</p></div>
        </div>
        <div class="final">$|E_T| \approx 0.000140$ (doble cálculo), frente a un error real de $0.000144$.</div>`,
        answer: '0.00014', tol: 0.00003
      },
      {
        id: 's3e20', level: 3, type: 'num',
        q: H`Para $f(x)=\ln x$ en $[1,2]$ se sabe que $|f''(x)|\le 1$ y $|f^{(4)}(x)|\le 6$ en ese intervalo. Se quiere un error menor que $0.0001$. ¿Cuál es el menor $n$ (par) necesario con la regla de Simpson?`,
        hint: H`Aplica la fórmula de Simpson para $n$ con $K=6$, $(b-a)=1$, $\varepsilon=0.0001$, y redondea a par.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir la cota adecuada.</strong> Se pide Simpson, así que se usa la cota de la cuarta derivada $K=6$ (la cota de la segunda derivada, $|f''|\le 1$, es la que se usaría para trapecios, y solo sirve para la comparación final).</p></div>
        <div class="step"><p><strong>Plantear la desigualdad y despejar $n$.</strong> Con $b-a=2-1=1$ y $\varepsilon=0.0001$:</p>$$n^4 \ge \dfrac{K(b-a)^5}{180\varepsilon} = \dfrac{6(1)^5}{180(0.0001)} = \dfrac{6}{0.018}=333.33 \;\Rightarrow\; n\ge \sqrt[4]{333.33}=4.27$$</div>
        <div class="step"><p><strong>Redondear hacia arriba y a par.</strong> El primer entero no menor que $4.27$ es $5$; como Simpson exige $n$ par, se sube al siguiente par: $n=6$.</p></div>
        <div class="step"><p><strong>Comparar con trapecios.</strong> Con la cota de trapecios ($K=1$) para el mismo $\varepsilon$ haría falta $n\ge\sqrt{1/(12\times 0.0001)}=28.87\to 29$. Simpson necesita solo $6$ subintervalos frente a los $29$ de trapecios: confirma su mayor eficiencia.</p></div>
        </div>
        <div class="final">$n = 6$ subintervalos.</div>`,
        answer: '6', tol: 0.5
      }
    ]
  });
})();
