(function () {
  const H = String.raw; // keeps LaTeX backslashes intact. NEVER write the two chars "$" + "{" together.
  window.SESSIONS = window.SESSIONS || [];
  window.SESSIONS.push({
    id: 's5',
    order: 5,
    code: 'CE5',
    topic: 'Tema I · Cálculo integral',
    title: 'La integral doble: integrales iteradas sobre regiones generales',
    short: 'Integral doble',
    goals: [
      'Explicar el problema del volumen de un cuerpo cilíndrico como generalización del problema del área.',
      'Interpretar la integral doble como límite de una suma doble de Riemann y reconocer cuándo representa un volumen o un área.',
      'Calcular integrales dobles sobre rectángulos y sobre regiones generales (tipo I y tipo II) mediante integrales iteradas.',
      'Clasificar una región como tipo I o tipo II usando el criterio de "la recta que entra y sale", describirla con inecuaciones y cambiar el orden de integración cuando convenga.',
      'Aplicar las propiedades de la integral doble: linealidad, comparación, aditividad respecto a la región y simetría.'
    ],
    theory: [
      {
        h: '5.1 El problema del volumen de un cuerpo cilíndrico',
        html: H`<p>En la primera conferencia se planteó el problema del área bajo una curva $y=f(x)$ en $[a,b]$ y se llegó a la integral definida como límite de una suma de Riemann:</p>
<div class="key">$$\int_a^b f(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^n f(x_i^*)\,\Delta x$$</div>
<p>Ahora generalizamos ese problema a dos variables. Consideremos una función continua $z=f(x,y)$ definida sobre una región acotada $D\subset\mathbb{R}^2$, con $f(x,y)\ge 0$. El <strong>cuerpo cilíndrico</strong> asociado es el sólido limitado arriba por la superficie $z=f(x,y)$, abajo por el plano $z=0$ y lateralmente por encima del borde de $D$. Queremos calcular su volumen.</p>
<p>La estrategia es idéntica en espíritu a la del área: aproximar el sólido por piezas simples cuyo volumen sí sabemos calcular (prismas rectos), sumar todas las piezas y tomar el límite cuando la aproximación se hace infinitamente fina.</p>
<p>Para empezar, supondremos que $D$ es un <strong>rectángulo</strong>:</p>
<div class="key">$$R=\{(x,y)\in\mathbb{R}^2:\ a\le x\le b,\ c\le y\le d\}$$</div>
<p>Más adelante, cuando $D$ no sea rectangular, usaremos el mismo truco que en la integral simple cuando el intervalo no alcanza: extendemos $f$ con valor $0$ fuera de $D$ pero dentro de un rectángulo $R$ que contenga a $D$, y trabajamos con esa función extendida sobre $R$. Esto es solo una herramienta teórica para justificar la definición; en la práctica nunca calcularemos con la función extendida.</p>`
      },
      {
        h: '5.2 La suma doble de Riemann',
        html: H`<p>Partimos el rectángulo $R=[a,b]\times[c,d]$ con una malla: dividimos $[a,b]$ en $m$ subintervalos de ancho $\Delta x=\dfrac{b-a}{m}$ y $[c,d]$ en $n$ subintervalos de alto $\Delta y=\dfrac{d-c}{n}$. Esto genera $m\times n$ subrectángulos, cada uno de área</p>
<div class="key">$$\Delta A=\Delta x\cdot\Delta y$$</div>
<p>En cada subrectángulo elegimos un punto muestra $(x_i^*,y_j^*)$ y levantamos un <strong>prisma recto</strong> de base $\Delta A$ y altura $f(x_i^*,y_j^*)$ (la altura de la superficie sobre ese punto). El volumen de ese prisma es:</p>
<div class="key">$$V_{ij}=f(x_i^*,y_j^*)\,\Delta A$$</div>
<figure style="margin:1rem 0">
<svg viewBox="0 0 320 220" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="20" width="240" height="160" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <g stroke="var(--grid)" stroke-width="1">
    <line x1="88" y1="20" x2="88" y2="180"/><line x1="136" y1="20" x2="136" y2="180"/>
    <line x1="184" y1="20" x2="184" y2="180"/><line x1="232" y1="20" x2="232" y2="180"/>
    <line x1="40" y1="60" x2="280" y2="60"/><line x1="40" y1="100" x2="280" y2="100"/>
    <line x1="40" y1="140" x2="280" y2="140"/>
  </g>
  <rect x="136" y="100" width="48" height="40" fill="var(--hl)" opacity="0.55"/>
  <rect x="136" y="100" width="48" height="40" fill="none" stroke="var(--accent)" stroke-width="2"/>
  <text x="160" y="123" font-size="11" text-anchor="middle" fill="var(--ink)">&#916;A</text>
  <text x="30" y="24" font-size="12" fill="var(--muted)">c</text>
  <text x="30" y="184" font-size="12" fill="var(--muted)">d</text>
  <text x="38" y="196" font-size="12" fill="var(--muted)">a</text>
  <text x="276" y="196" font-size="12" fill="var(--muted)">b</text>
  <text x="150" y="14" font-size="12" fill="var(--muted)">R (partición m&#215;n)</text>
</svg>
<figcaption style="font-size:.85rem;color:var(--muted)">Partición del rectángulo $R$ en $m\times n$ subrectángulos de área $\Delta A=\Delta x\,\Delta y$. Sobre cada uno se levanta un prisma de altura $f(x_i^*,y_j^*)$.</figcaption>
</figure>
<p>Sumando el volumen de todos los prismas obtenemos una aproximación al volumen del cuerpo cilíndrico:</p>
<div class="key">$$V\approx\sum_{i=1}^{m}\sum_{j=1}^{n} f(x_i^*,y_j^*)\,\Delta A$$</div>
<p>Esta es una <strong>suma doble de Riemann</strong>: a diferencia de la suma simple, el "recorrido" no es lineal (a lo largo de un intervalo) sino bidimensional (a lo largo de una malla en el plano). Cuantos más subrectángulos usemos ($m,n\to\infty$), mejor será la aproximación, porque los prismas se ajustan cada vez mejor a la forma real de la superficie.</p>`
      },
      {
        h: '5.3 Definición de la integral doble e interpretación',
        html: H`<p>Bajo las condiciones dadas ($f$ continua, o al menos acotada con discontinuidades "razonables", sobre una región acotada), existe el límite de la suma doble cuando $m,n\to\infty$, y ese límite se llama <strong>integral doble</strong> de $f$ sobre $R$:</p>
<div class="key">$$\iint_R f(x,y)\,dA=\lim_{m,n\to\infty}\sum_{i=1}^{m}\sum_{j=1}^{n} f(x_i^*,y_j^*)\,\Delta A$$</div>
<p>Observen la analogía completa con la integral simple: donde antes había una suma con un factor infinitesimal $dx$, ahora hay una suma doble con un factor infinitesimal de área $dA$. La integral doble es, igual que la simple, "una suma continua y compacta" de productos, solo que ahora barriendo una región plana en vez de un intervalo.</p>
<p><strong>Interpretación geométrica.</strong> Si $f(x,y)\ge 0$ en $D$, la integral doble es exactamente el volumen del cuerpo cilíndrico bajo la superficie $z=f(x,y)$ y sobre $D$:</p>
<div class="key">$$V=\iint_D f(x,y)\,dA$$</div>
<p>Si $f$ cambia de signo, la integral doble da el volumen "con signo": las partes donde $f<0$ restan (quedan por debajo del plano $z=0$).</p>
<p>Un caso particular muy útil: si $f(x,y)=1$ para todo $(x,y)\in D$, el "cuerpo cilíndrico" es un prisma de altura $1$ y base $D$, cuyo volumen numéricamente coincide con el área de la base. Por eso:</p>
<div class="key">$$A_D=\iint_D 1\cdot dA=\iint_D dA$$</div>
<p>Esta doble lectura (volumen si $f\ge 0$; área si $f\equiv 1$) es la que usaremos constantemente en la próxima conferencia sobre aplicaciones.</p>`
      },
      {
        h: '5.4 Integrales iteradas sobre un rectángulo. Teorema de Fubini',
        html: H`<p>La definición anterior es correcta pero inútil para calcular a mano: nadie evalúa un límite doble de sumas. Necesitamos, como con la integral simple, un método práctico. La idea clave es reducir la integral doble a <strong>dos integrales simples anidadas</strong>, llamadas <strong>integrales iteradas</strong>.</p>
<p>Si $R=\{(x,y):a\le x\le b,\ c\le y\le d\}$, se define:</p>
<div class="key">$$\int_c^d\!\!\int_a^b f(x,y)\,dx\,dy=\int_c^d\left[\int_a^b f(x,y)\,dx\right]dy$$</div>
<p>Esto significa: primero se evalúa la integral "interior" $\displaystyle\int_a^b f(x,y)\,dx$, tratando a $y$ como una <strong>constante</strong> (exactamente igual a como se calculan las derivadas parciales: se aplican las reglas de integración de siempre, pero congelando la otra variable). El resultado de esa integral interior es una función de $y$, digamos $F(y)$. Después se integra $F(y)$ respecto a $y$ entre $c$ y $d$.</p>
<p>De manera análoga, integrando primero respecto a $y$:</p>
<div class="key">$$\int_a^b\!\!\int_c^d f(x,y)\,dy\,dx=\int_a^b\left[\int_c^d f(x,y)\,dy\right]dx$$</div>
<div class="note"><strong>Teorema de Fubini (sobre un rectángulo).</strong> Si $f$ es continua en $R=[a,b]\times[c,d]$, entonces</p>
<p>$$\iint_R f(x,y)\,dA=\int_a^b\!\!\int_c^d f(x,y)\,dy\,dx=\int_c^d\!\!\int_a^b f(x,y)\,dx\,dy$$</p>
<p>Es decir, sobre un rectángulo <strong>el orden de integración no altera el resultado</strong>. Podemos elegir el orden que resulte más simple algebraicamente.</div>
<p><strong>Ejemplo rápido.</strong> Para $f(x,y)=3x^2y+2$ en $R=[0,1]\times[0,2]$: integrando primero en $x$, $\displaystyle\int_0^1(3x^2y+2)\,dx=\left[x^3y+2x\right]_0^1=y+2$; luego $\displaystyle\int_0^2(y+2)\,dy=\left[\frac{y^2}{2}+2y\right]_0^2=6$. El ejemplo 1 de esta conferencia desarrolla este cálculo completo en ambos órdenes.</p>
<div class="warn"><strong>Error común:</strong> olvidar que al integrar respecto a $x$ tratando $y$ como constante, cualquier término que solo dependa de $y$ se integra como si fuera "una constante por $x$" en la variable $x$ (es decir, se multiplica por la longitud del intervalo), y viceversa. Por ejemplo $\displaystyle\int_a^b y\,dx=y(b-a)$, no $\dfrac{y^2}{2}$.</div>`
      },
      {
        h: '5.5 Caso separable: f(x,y) = g(x)h(y) en un rectángulo',
        html: H`<p>Cuando el integrando se puede escribir como producto de una función de $x$ por una función de $y$, y la región es un rectángulo, la integral doble se factoriza en el producto de dos integrales simples independientes:</p>
<div class="key">$$\iint_R g(x)h(y)\,dA=\left(\int_a^b g(x)\,dx\right)\left(\int_c^d h(y)\,dy\right)$$</div>
<p>La razón es puramente algebraica: al integrar primero en $x$ (con $y$ constante), $h(y)$ sale de la integral interior como constante, dejando $h(y)\displaystyle\int_a^b g(x)\,dx$; esa integral interior es un número, que después se multiplica por $\displaystyle\int_c^d h(y)\,dy$. Por ejemplo, para $\displaystyle\iint_R x^2\cos y\,dA$ con $R=[0,1]\times[0,\pi/2]$: $\left(\int_0^1 x^2dx\right)\left(\int_0^{\pi/2}\cos y\,dy\right)=\dfrac13\cdot 1=\dfrac13$.</p>
<div class="warn">Este atajo <strong>solo</strong> es válido si la región es un rectángulo con lados paralelos a los ejes. Si la región es tipo I o tipo II (límites variables), no se puede separar así aunque el integrando sea un producto $g(x)h(y)$.</div>`
      },
      {
        h: '5.6 Regiones generales: tipo I y tipo II',
        html: H`<p>La mayoría de las regiones de interés no son rectángulos, sino que están limitadas por curvas. Para poder calcular $\iint_D f\,dA$ mediante integrales iteradas necesitamos describir a $D$ de una manera que nos diga, para cada valor fijo de una variable, entre qué límites varía la otra. Hay dos formas estándar de hacerlo.</p>
<p><strong>Región tipo I.</strong> $D$ está entre las gráficas de dos funciones continuas de $x$:</p>
<div class="key">$$D=\{(x,y)\in\mathbb{R}^2:\ a\le x\le b,\ g_1(x)\le y\le g_2(x)\}$$</div>
<figure style="margin:1rem 0">
<svg viewBox="0 0 300 210" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="180" x2="280" y2="180" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="190" stroke="var(--ink)" stroke-width="1.5"/>
  <path d="M 70 150 C 120 60, 190 60, 240 130" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M 70 150 C 120 175, 190 175, 240 150" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M 70 150 C 120 60, 190 60, 240 130 L 240 150 C 190 175, 120 175, 70 150 Z" fill="var(--hl)" opacity="0.35"/>
  <line x1="150" y1="176" x2="150" y2="66" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/>
  <path d="M 150 176 L 146 166 M 150 176 L 154 166" stroke="var(--ink)" stroke-width="1.6" fill="none"/>
  <path d="M 150 66 L 146 76 M 150 66 L 154 76" stroke="var(--ink)" stroke-width="1.6" fill="none"/>
  <text x="152" y="60" font-size="11" fill="var(--ink)">sale: y=g&#8322;(x)</text>
  <text x="152" y="200" font-size="11" fill="var(--ink)">entra: y=g&#8321;(x)</text>
  <text x="66" y="200" font-size="11" fill="var(--muted)">a</text>
  <text x="236" y="200" font-size="11" fill="var(--muted)">b</text>
  <text x="150" y="130" font-size="13" fill="var(--ink)" text-anchor="middle">D</text>
</svg>
<figcaption style="font-size:.85rem;color:var(--muted)">Región tipo I: una recta vertical $x=$ cte "entra" por $y=g_1(x)$ y "sale" por $y=g_2(x)$.</figcaption>
</figure>
<p>Sobre una región tipo I, la integral se calcula integrando <strong>primero en $y$</strong> (la variable con límites variables) y después en $x$:</p>
<div class="key">$$\iint_D f(x,y)\,dA=\int_a^b\left[\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\right]dx$$</div>
<p><strong>Región tipo II.</strong> $D$ está entre las gráficas de dos funciones continuas de $y$:</p>
<div class="key">$$D=\{(x,y)\in\mathbb{R}^2:\ c\le y\le d,\ h_1(y)\le x\le h_2(y)\}$$</div>
<figure style="margin:1rem 0">
<svg viewBox="0 0 300 210" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="180" x2="280" y2="180" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="190" stroke="var(--ink)" stroke-width="1.5"/>
  <path d="M 90 165 C 60 130, 60 80, 100 45" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M 150 165 C 210 130, 210 80, 160 45" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M 90 165 C 60 130, 60 80, 100 45 L 160 45 C 210 80, 210 130, 150 165 Z" fill="var(--hl)" opacity="0.35"/>
  <line x1="70" y1="105" x2="190" y2="105" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/>
  <path d="M 70 105 L 80 101 M 70 105 L 80 109" stroke="var(--ink)" stroke-width="1.6" fill="none"/>
  <path d="M 190 105 L 180 101 M 190 105 L 180 109" stroke="var(--ink)" stroke-width="1.6" fill="none"/>
  <text x="20" y="100" font-size="11" fill="var(--ink)">entra</text>
  <text x="196" y="100" font-size="11" fill="var(--ink)">sale</text>
  <text x="45" y="120" font-size="11" fill="var(--ink)">x=h&#8321;(y)</text>
  <text x="150" y="120" font-size="11" fill="var(--ink)">x=h&#8322;(y)</text>
  <text x="26" y="168" font-size="11" fill="var(--muted)">c</text>
  <text x="26" y="48" font-size="11" fill="var(--muted)">d</text>
  <text x="120" y="110" font-size="13" fill="var(--ink)" text-anchor="middle">D</text>
</svg>
<figcaption style="font-size:.85rem;color:var(--muted)">Región tipo II: una recta horizontal $y=$ cte "entra" por $x=h_1(y)$ y "sale" por $x=h_2(y)$.</figcaption>
</figure>
<div class="key">$$\iint_D f(x,y)\,dA=\int_c^d\left[\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\right]dy$$</div>
<p><strong>Regla práctica para clasificar una región ("la recta que entra y sale").</strong> Dibuje la región. Trace una recta vertical de prueba $x=a$ que la atraviese: si esa recta siempre entra por una misma curva $y=g_1(x)$ y sale siempre por una misma curva $y=g_2(x)$ (sin importar en qué $x$ se trace, mientras $a\le x\le b$), la región es tipo I. Si en cambio conviene trazar una recta horizontal $y=b$ y esta entra por $x=h_1(y)$ y sale por $x=h_2(y)$ de forma consistente, la región es tipo II. Muchas regiones (por ejemplo cualquier rectángulo, o un semicírculo) admiten <strong>ambas</strong> descripciones; otras (triángulos con un vértice "apuntando" hacia un eje, regiones con esquinas entrantes) solo admiten una, o deben partirse en varias piezas para lograr la otra.</p>
<p><strong>Cómo describir la región con inecuaciones.</strong> 1) Grafique las curvas que la limitan. 2) Halle sus puntos de intersección resolviendo el sistema de ecuaciones (esto da los límites numéricos $a,b$ o $c,d$). 3) Identifique cuál curva queda "arriba"/"abajo" (tipo I) o "izquierda"/"derecha" (tipo II) en todo el intervalo. 4) Despeje la variable interior en función de la exterior si la ecuación no está ya en esa forma (por ejemplo, de $y=\ln x$ se despeja $x=e^y$).</p>`
      },
      {
        h: '5.7 Cambio del orden de integración',
        html: H`<p>A veces la integral iterada tal como está planteada es muy difícil o imposible de resolver con funciones elementales, pero se vuelve fácil si se integra primero respecto a la otra variable. Otras veces simplemente conviene comparar ambos órdenes para verificar el resultado (como en el ejemplo 1). El procedimiento para cambiar el orden es siempre el mismo:</p>
<ol>
<li><strong>Identifique la región $D$</strong> a partir de los límites de la integral dada (los límites exteriores e interiores describen $D$, aunque no se vea ningún dibujo).</li>
<li><strong>Dibuje $D$.</strong> Este paso es el que evita errores: casi ningún cambio de orden se hace bien "de memoria".</li>
<li><strong>Reclasifique $D$</strong> con el otro tipo (si estaba en tipo I, exprésela en tipo II, y viceversa), despejando la variable que corresponda en las ecuaciones de las curvas frontera.</li>
<li><strong>Escriba la nueva integral iterada</strong> con los nuevos límites, y resuélvala.</li>
</ol>
<p><strong>Ejemplo guía.</strong> $\displaystyle\int_1^2\!\!\int_0^{\ln x} f(x,y)\,dy\,dx$. Los límites dicen: $1\le x\le 2$, $0\le y\le \ln x$; es una región tipo I. Para pasarla a tipo II despejamos $x$ de $y=\ln x$: $x=e^y$. Cuando $x$ recorre $[1,2]$, $y=\ln x$ recorre $[0,\ln 2]$. La franja horizontal a altura $y$ entra por la curva $x=e^y$ y sale por la recta $x=2$ (el borde derecho del rectángulo original de $x$). Entonces:</p>
<div class="key">$$\int_1^2\!\!\int_0^{\ln x} f(x,y)\,dy\,dx=\int_0^{\ln 2}\!\!\int_{e^y}^{2} f(x,y)\,dx\,dy$$</div>
<div class="warn"><strong>Error común:</strong> cambiar solo los símbolos $dy\,dx\to dx\,dy$ sin recalcular los límites, o despejar mal una curva (confundir $x=e^y$ con $y=e^x$). Los límites numéricos exteriores del nuevo orden casi nunca son los mismos números que antes.</div>`
      },
      {
        h: '5.8 Propiedades de la integral doble',
        html: H`<p>Estas propiedades se demuestran a partir de la definición como límite de sumas y son análogas a las de la integral simple.</p>
<p><strong>1) Linealidad.</strong></p>
<div class="key">$$\iint_D [f(x,y)+g(x,y)]\,dA=\iint_D f\,dA+\iint_D g\,dA \qquad \iint_D c\,f(x,y)\,dA=c\iint_D f\,dA$$</div>
<p><strong>2) Comparación.</strong> Si $f(x,y)\ge g(x,y)$ para todo $(x,y)\in D$, entonces</p>
<div class="key">$$\iint_D f\,dA\ge\iint_D g\,dA$$</div>
<p>En particular, si $f\ge 0$ en $D$ entonces $\iint_D f\,dA\ge 0$; esto es consistente con la interpretación de volumen.</p>
<p><strong>3) Aditividad respecto a la región.</strong> Si $D=D_1\cup D_2$ con $D_1$ y $D_2$ sin solapamiento (salvo quizá el borde común), entonces</p>
<div class="key">$$\iint_D f\,dA=\iint_{D_1} f\,dA+\iint_{D_2} f\,dA$$</div>
<p>Esta propiedad es la que permite calcular integrales sobre regiones que no son tipo I ni tipo II "de una sola pieza": se parte $D$ en subregiones que sí lo sean, se integra en cada una por separado y se suman los resultados. La usaremos mucho en la próxima conferencia al calcular áreas de regiones que deben dividirse.</p>
<p><strong>4) Área como integral doble.</strong> Ya vista: $A_D=\iint_D dA$ (caso $f\equiv 1$).</p>
<p><strong>5) Simetría.</strong> Si $D$ es simétrica respecto al eje $y$ (es decir, $(x,y)\in D \iff (-x,y)\in D$) y $f(x,y)$ es <strong>impar en $x$</strong> (esto es, $f(-x,y)=-f(x,y)$), entonces $\iint_D f\,dA=0$: las contribuciones de $x>0$ y $x<0$ se cancelan exactamente. De forma análoga, si $D$ es simétrica respecto al eje $x$ y $f$ es impar en $y$, la integral también es $0$. Y si $f$ es par en la variable de simetría, la integral sobre toda $D$ es el doble de la integral sobre la mitad de $D$ donde esa variable es positiva. Esta idea se usó para simplificar el ejemplo del semicírculo (ejemplo 7).</p>
<div class="note">Reconocer una simetría antes de integrar puede ahorrar mucho trabajo algebraico, o incluso decir de inmediato que el resultado es $0$ sin calcular nada.</div>`
      }
    ],
    examples: [
      {
        title: 'Ejemplo 1: integral doble sobre un rectángulo en los dos órdenes (Fubini)',
        statement: H`Evaluar $\displaystyle\iint_R (3x^2y+2)\,dA$ con $R=\{(x,y)\in\mathbb{R}^2:\ 0\le x\le 1,\ 0\le y\le 2\}$, integrando en ambos órdenes.`,
        steps: [
          H`<strong>Paso 1 (orden $dx\,dy$).</strong> La región es el rectángulo $R=[0,1]\times[0,2]$, así que aplicamos directamente Fubini. Integramos primero en $x$ tratando $y$ como constante: $$\int_0^1 (3x^2y+2)\,dx=\left[x^3y+2x\right]_0^1=y+2$$`,
          H`<strong>Paso 2.</strong> Integramos ahora ese resultado en $y$ entre $0$ y $2$: $$\int_0^2 (y+2)\,dy=\left[\frac{y^2}{2}+2y\right]_0^2=2+4=6$$`,
          H`<strong>Paso 3 (orden $dy\,dx$, para verificar Fubini).</strong> Ahora integramos primero en $y$ tratando $x$ como constante: $$\int_0^2 (3x^2y+2)\,dy=\left[\frac{3x^2y^2}{2}+2y\right]_0^2=6x^2+4$$`,
          H`<strong>Paso 4.</strong> Integramos en $x$ entre $0$ y $1$: $$\int_0^1 (6x^2+4)\,dx=\left[2x^3+4x\right]_0^1=2+4=6$$ Ambos órdenes dan el mismo valor, tal como garantiza el teorema de Fubini sobre un rectángulo.`
        ],
        answer: H`$\displaystyle\iint_R (3x^2y+2)\,dA=6$. Como el integrando es positivo en $R$, este número es el volumen del cuerpo cilíndrico bajo $z=3x^2y+2$ sobre $R$.`
      },
      {
        title: 'Ejemplo 2: región tipo I limitada por una recta y una cúbica',
        statement: H`Evaluar $\displaystyle\iint_D (x^2+2y)\,dA$ con $D=\{(x,y)\in\mathbb{R}^2:\ x^3\le y\le x,\ x\ge 0\}$.`,
        steps: [
          H`<strong>Paso 1: identificar la región.</strong> Las curvas $y=x$ y $y=x^3$ se cortan donde $x=x^3$, es decir $x^3-x=0\Rightarrow x(x-1)(x+1)=0$. Con $x\ge 0$, los cortes relevantes son $x=0$ y $x=1$. Para $0<x<1$ se cumple $x^3\le x$ (por ejemplo en $x=0.5$: $0.125\le 0.5$), así que la recta queda arriba y la cúbica abajo.`,
          H`<strong>Paso 2: describir D y clasificarla.</strong> Una recta vertical $x=a$ con $0\le a\le 1$ entra por $y=x^3$ y sale por $y=x$: la región es tipo I. $$D=\{(x,y):\ 0\le x\le 1,\ x^3\le y\le x\}$$`,
          H`<strong>Paso 3: integral interior (en y).</strong> $$\int_{x^3}^{x} (x^2+2y)\,dy=\Big[x^2y+y^2\Big]_{x^3}^{x}=(x^3+x^2)-(x^5+x^6)$$`,
          H`<strong>Paso 4: integral exterior (en x).</strong> $$\int_0^1 (x^3+x^2-x^5-x^6)\,dx=\left[\frac{x^4}{4}+\frac{x^3}{3}-\frac{x^6}{6}-\frac{x^7}{7}\right]_0^1=\frac14+\frac13-\frac16-\frac17$$`,
          H`<strong>Paso 5: aritmética final.</strong> Con denominador común $84$: $\dfrac{21}{84}+\dfrac{28}{84}-\dfrac{14}{84}-\dfrac{12}{84}=\dfrac{23}{84}$.`
        ],
        answer: H`$\displaystyle\iint_D (x^2+2y)\,dA=\dfrac{23}{84}\approx 0.27$. Como el integrando es positivo en $D$, este es el volumen del cuerpo cilíndrico bajo $z=x^2+2y$ sobre $D$.`
      },
      {
        title: 'Ejemplo 3: la misma región como tipo I y como tipo II',
        statement: H`Expresar como tipo I y como tipo II la región $D$ limitada por la parábola $y=x^2$ y la recta $y=3x$, y evaluar en ambos casos $\displaystyle\iint_D xy\,dA$.`,
        steps: [
          H`<strong>Paso 1: intersecciones.</strong> $x^2=3x\Rightarrow x^2-3x=0\Rightarrow x(x-3)=0\Rightarrow x=0,\ x=3$. Los puntos son $(0,0)$ y $(3,9)$.`,
          H`<strong>Paso 2: como tipo I.</strong> Para $0\le x\le 3$ la recta $y=3x$ está arriba de la parábola $y=x^2$ (en $x=1$: $3>1$). Entonces $D=\{0\le x\le 3,\ x^2\le y\le 3x\}$. Integral interior: $$\int_{x^2}^{3x} xy\,dy=x\left[\frac{y^2}{2}\right]_{x^2}^{3x}=\frac{x}{2}\left(9x^2-x^4\right)=\frac{9x^3}{2}-\frac{x^5}{2}$$`,
          H`<strong>Paso 3: integral exterior (tipo I).</strong> $$\int_0^3\left(\frac{9x^3}{2}-\frac{x^5}{2}\right)dx=\left[\frac{9x^4}{8}-\frac{x^6}{12}\right]_0^3=\frac{9\cdot 81}{8}-\frac{729}{12}=\frac{729}{8}-\frac{729}{12}=\frac{2187-1458}{24}=\frac{729}{24}=\frac{243}{8}$$`,
          H`<strong>Paso 4: como tipo II.</strong> Despejando $x$ en ambas curvas: de $y=x^2$ (con $x\ge0$) se obtiene $x=\sqrt y$; de $y=3x$ se obtiene $x=y/3$. Para $0\le y\le 9$, la parábola queda a la derecha y la recta a la izquierda (en $y=1$: $\sqrt1=1 > 1/3$). Entonces $D=\{0\le y\le 9,\ y/3\le x\le \sqrt y\}$.`,
          H`<strong>Paso 5: integral interior y exterior (tipo II).</strong> $$\int_{y/3}^{\sqrt y} xy\,dx=y\left[\frac{x^2}{2}\right]_{y/3}^{\sqrt y}=\frac{y}{2}\left(y-\frac{y^2}{9}\right)=\frac{y^2}{2}-\frac{y^3}{18}$$ $$\int_0^9\left(\frac{y^2}{2}-\frac{y^3}{18}\right)dy=\left[\frac{y^3}{6}-\frac{y^4}{72}\right]_0^9=\frac{729}{6}-\frac{6561}{72}=121.5-91.125=30.375=\frac{243}{8}$$`
        ],
        answer: H`Ambos órdenes dan $\displaystyle\iint_D xy\,dA=\dfrac{243}{8}=30.375$, confirmando Fubini para regiones generales: el resultado no depende de si $D$ se trató como tipo I o tipo II.`
      },
      {
        title: 'Ejemplo 4: volumen bajo un paraboloide sobre una región tipo I',
        statement: H`Determinar el volumen del sólido que está debajo del paraboloide $z=x^2+y^2$ y arriba de la región $D$ del plano $xy$ acotada por la recta $y=2x$ y la parábola $y=x^2$.`,
        steps: [
          H`<strong>Paso 1: intersecciones y tipo de región.</strong> $x^2=2x\Rightarrow x(x-2)=0\Rightarrow x=0,2$. Para $0<x<2$, la recta está arriba de la parábola (en $x=1$: $2>1$). Al trazar $x=a$, la recta vertical entra por $y=x^2$ y sale por $y=2x$: región tipo I. $$D=\{0\le x\le 2,\ x^2\le y\le 2x\}$$`,
          H`<strong>Paso 2: modelo del volumen.</strong> $$V=\iint_D (x^2+y^2)\,dA=\int_0^2\int_{x^2}^{2x} (x^2+y^2)\,dy\,dx$$`,
          H`<strong>Paso 3: integral interior.</strong> $$\int_{x^2}^{2x}(x^2+y^2)\,dy=\left[x^2y+\frac{y^3}{3}\right]_{x^2}^{2x}=\left(2x^3+\frac{8x^3}{3}\right)-\left(x^4+\frac{x^6}{3}\right)=\frac{14x^3}{3}-x^4-\frac{x^6}{3}$$`,
          H`<strong>Paso 4: integral exterior.</strong> $$V=\int_0^2\left(\frac{14x^3}{3}-x^4-\frac{x^6}{3}\right)dx=\left[\frac{7x^4}{6}-\frac{x^5}{5}-\frac{x^7}{21}\right]_0^2$$`,
          H`<strong>Paso 5: evaluación numérica.</strong> $\dfrac{7\cdot 16}{6}-\dfrac{32}{5}-\dfrac{128}{21}=\dfrac{56}{3}-\dfrac{32}{5}-\dfrac{128}{21}$. Con denominador común $105$: $\dfrac{1960}{105}-\dfrac{672}{105}-\dfrac{640}{105}=\dfrac{648}{105}=\dfrac{216}{35}$.`
        ],
        answer: H`$V=\dfrac{216}{35}\approx 6.17\ \text{u}^3$.`
      },
      {
        title: 'Ejemplo 5: área de una región entre dos parábolas mediante integral doble',
        statement: H`Usar una integral doble para hallar el área de la región $D$ entre las parábolas $y=4x-x^2$ y $y=x^2-2x$.`,
        steps: [
          H`<strong>Paso 1: intersecciones.</strong> $4x-x^2=x^2-2x\Rightarrow 6x-2x^2=0\Rightarrow 2x(3-x)=0\Rightarrow x=0,\ x=3$.`,
          H`<strong>Paso 2: tipo de región.</strong> En $x=1$: $4x-x^2=3$ y $x^2-2x=-1$, así que $y=4x-x^2$ queda arriba. Región tipo I: $D=\{0\le x\le 3,\ x^2-2x\le y\le 4x-x^2\}$.`,
          H`<strong>Paso 3: modelo y integral interior.</strong> $$A_D=\iint_D dA=\int_0^3\int_{x^2-2x}^{4x-x^2} dy\,dx=\int_0^3\Big[(4x-x^2)-(x^2-2x)\Big]\,dx=\int_0^3 (6x-2x^2)\,dx$$`,
          H`<strong>Paso 4: integral exterior.</strong> $$\int_0^3(6x-2x^2)\,dx=\left[3x^2-\frac{2x^3}{3}\right]_0^3=27-18=9$$`
        ],
        answer: H`$A_D=9\ \text{u}^2$. Nótese que la integral interior (respecto a $y$) reproduce exactamente la fórmula del área entre curvas ya conocida de integrales simples: la integral doble es una generalización natural, no un método distinto.`
      },
      {
        title: 'Ejemplo 6: cambio del orden de integración (sin evaluar)',
        statement: H`Representar la región de integración y cambiar el orden en $\displaystyle\int_1^2\int_0^{\ln x} f(x,y)\,dy\,dx$.`,
        steps: [
          H`<strong>Paso 1: leer la región en los límites dados.</strong> La integral, tal como está, describe $D=\{1\le x\le 2,\ 0\le y\le \ln x\}$: una región tipo I.`,
          H`<strong>Paso 2: dibujar y acotar en y.</strong> Cuando $x$ va de $1$ a $2$, $y=\ln x$ va de $\ln 1=0$ a $\ln 2\approx0.693$. Así que en el nuevo orden, $y$ variará entre $0$ y $\ln 2$.`,
          H`<strong>Paso 3: despejar la curva frontera para tipo II.</strong> De $y=\ln x$ se obtiene $x=e^y$. Para una altura fija $y\in[0,\ln 2]$, la franja horizontal entra por la curva $x=e^y$ (border izquierdo) y sale por la recta $x=2$ (borde derecho, herencia del límite superior original de $x$).`,
          H`<strong>Paso 4: escribir la integral con el orden invertido.</strong> $$\int_1^2\int_0^{\ln x} f(x,y)\,dy\,dx=\int_0^{\ln 2}\int_{e^y}^{2} f(x,y)\,dx\,dy$$`
        ],
        answer: H`$\displaystyle\int_0^{\ln 2}\int_{e^y}^{2} f(x,y)\,dx\,dy$. Ambas integrales iteradas representan la misma integral doble sobre la misma región $D$; cuál conviene usar depende de cuál integral interior resulte más simple para la $f$ concreta que se esté integrando.`
      },
      {
        title: 'Ejemplo 7: simetría en un semicírculo',
        statement: H`Evaluar $\displaystyle\iint_D xy^2\,dA$ donde $D$ es el semicírculo limitado por el eje $y=0$ y la semicircunferencia $x=\sqrt{1-y^2}$ (es decir, $x\ge 0$, $x^2+y^2\le 1$).`,
        steps: [
          H`<strong>Paso 1: describir D como tipo II y aprovechar la simetría.</strong> $D=\{-1\le y\le 1,\ 0\le x\le \sqrt{1-y^2}\}$. Esta región es simétrica respecto al eje $x$ (si $(x,y)\in D$ entonces $(x,-y)\in D$), y el integrando $f(x,y)=xy^2$ es <strong>par</strong> en $y$ (porque $y^2$ no cambia si $y\to -y$). Por simetría, $\displaystyle\iint_D xy^2\,dA=2\int_0^1\left[\int_0^{\sqrt{1-y^2}} xy^2\,dx\right]dy$, integrando solo sobre la mitad superior.`,
          H`<strong>Paso 2: integral interior (en x).</strong> $$\int_0^{\sqrt{1-y^2}} xy^2\,dx=y^2\left[\frac{x^2}{2}\right]_0^{\sqrt{1-y^2}}=\frac{y^2(1-y^2)}{2}$$`,
          H`<strong>Paso 3: integral exterior (en y, con el factor 2 de la simetría).</strong> $$2\int_0^1 \frac{y^2(1-y^2)}{2}\,dy=\int_0^1 (y^2-y^4)\,dy=\left[\frac{y^3}{3}-\frac{y^5}{5}\right]_0^1=\frac13-\frac15$$`,
          H`<strong>Paso 4: aritmética final.</strong> $\dfrac13-\dfrac15=\dfrac{5-3}{15}=\dfrac{2}{15}$.`
        ],
        answer: H`$\displaystyle\iint_D xy^2\,dA=\dfrac{2}{15}\approx 0.13$. Detectar la simetría (par en $y$, dominio simétrico en $y$) evitó trabajar con toda la región y redujo el cálculo a la mitad superior multiplicada por $2$.`
      }
    ],
    exercises: [
      {
        id: 's5e01', level: 1, type: 'num', label: 'Resultado =',
        q: H`Evaluar $\displaystyle\iint_R 7\,dA$ con $R=\{(x,y):\ 1\le x\le 4,\ -1\le y\le 3\}$.`,
        hint: H`Como el integrando es constante, la integral doble es esa constante multiplicada por el área del rectángulo.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Describir la región.</strong> $R=\{(x,y):\ 1\le x\le 4,\ -1\le y\le 3\}$ es un rectángulo con lados paralelos a los ejes, así que es tipo I y tipo II a la vez (límites constantes en ambas variables).</p></div>
<div class="step"><p><strong>Integral interior (en y, con x constante).</strong> Como $f=7$ es constante: $$\int_{-1}^{3} 7\,dy=\Big[7y\Big]_{-1}^{3}=7(3)-7(-1)=21+7=28$$</p></div>
<div class="step"><p><strong>Integral exterior (en x).</strong> $$\int_1^4 28\,dx=\Big[28x\Big]_1^4=28(4)-28(1)=112-28=84$$</p></div>
<div class="step"><p><strong>Verificación por área.</strong> $R$ tiene lados de longitud $4-1=3$ y $3-(-1)=4$, así que su área es $A_R=3\cdot4=12$; como $f=7$ es constante, $\iint_R 7\,dA=7\cdot A_R=7\cdot12=84$, coincidiendo con el cálculo anterior.</p></div>
</div>
<div class="final">$\displaystyle\iint_R 7\,dA=84$.</div>`,
        answer: '84', verify: { kind: 'int2', f: '7', outer: 'x', a: '1', b: '4', lo: '-1', hi: '3' }
      },
      {
        id: 's5e02', level: 1, type: 'num', label: 'Resultado =',
        q: H`Evaluar $\displaystyle\iint_R (x+y)\,dA$ con $R=[0,1]\times[0,2]$.`,
        hint: H`Integre primero en $y$ tratando $x$ como constante, o primero en $x$; sobre un rectángulo el resultado es el mismo.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Describir la región.</strong> $R=[0,1]\times[0,2]=\{0\le x\le1,\ 0\le y\le2\}$ es un rectángulo, tipo I y tipo II a la vez. Elegimos integrar primero en $y$.</p></div>
<div class="step"><p><strong>Integral interior (en y, x constante).</strong> $$\int_0^2 (x+y)\,dy=\left[xy+\frac{y^2}{2}\right]_0^2=2x+2$$</p></div>
<div class="step"><p><strong>Integral exterior (en x).</strong> $$\int_0^1(2x+2)\,dx=\left[x^2+2x\right]_0^1=1+2=3$$</p></div>
<div class="step"><p><strong>Comprobación (otro orden).</strong> Integrando primero en $x$: $\int_0^1(x+y)\,dx=\left[\frac{x^2}{2}+xy\right]_0^1=\frac12+y$; luego $\int_0^2\left(\frac12+y\right)dy=\left[\frac{y}{2}+\frac{y^2}{2}\right]_0^2=1+2=3$, el mismo resultado, como garantiza Fubini sobre un rectángulo.</p></div>
</div>
<div class="final">$\displaystyle\iint_R (x+y)\,dA=3$.</div>`,
        answer: '3', verify: { kind: 'int2', f: 'x+y', outer: 'x', a: '0', b: '1', lo: '0', hi: '2' }
      },
      {
        id: 's5e03', level: 1, type: 'num', label: 'Resultado =',
        q: H`Evaluar $\displaystyle\iint_R x\,y^2\,dA$ con $R=[0,2]\times[0,1]$.`,
        hint: H`El integrando es separable: $f(x,y)=x\cdot y^2$. Sobre un rectángulo, factorice en el producto de dos integrales simples.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Reconocer la estructura separable.</strong> $R=[0,2]\times[0,1]$ es un rectángulo y el integrando $f(x,y)=x\,y^2=g(x)h(y)$ con $g(x)=x$, $h(y)=y^2$. Al ser $R$ un rectángulo, la integral doble se factoriza en el producto de dos integrales simples.</p></div>
<div class="step"><p><strong>Factor en x.</strong> $$\int_0^2 x\,dx=\left[\frac{x^2}{2}\right]_0^2=2$$</p></div>
<div class="step"><p><strong>Factor en y.</strong> $$\int_0^1 y^2\,dy=\left[\frac{y^3}{3}\right]_0^1=\frac13$$</p></div>
<div class="step"><p><strong>Producto de los factores.</strong> $$\iint_R xy^2\,dA=\left(\int_0^2 x\,dx\right)\left(\int_0^1 y^2\,dy\right)=2\cdot\frac13=\frac23$$</p></div>
</div>
<div class="final">$\displaystyle\iint_R x\,y^2\,dA=\dfrac23$.</div>`,
        answer: '2/3', verify: { kind: 'int2', f: 'x*y^2', outer: 'x', a: '0', b: '2', lo: '0', hi: '1' }
      },
      {
        id: 's5e04', level: 1, type: 'num', label: 'Resultado =',
        q: H`Evaluar $\displaystyle\iint_R (2x-3y)\,dA$ con $R=[-1,1]\times[0,2]$.`,
        hint: H`Integre primero en $y$ (con $x$ constante) y después en $x$ entre $-1$ y $1$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Describir la región.</strong> $R=[-1,1]\times[0,2]$ es un rectángulo. Integramos primero en $y$ (con $x$ constante) y después en $x$.</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_0^2(2x-3y)\,dy=\left[2xy-\frac{3y^2}{2}\right]_0^2=4x-6$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_{-1}^1(4x-6)\,dx=\left[2x^2-6x\right]_{-1}^1=(2-6)-(2+6)=-4-8=-12$$</p></div>
<div class="step"><p><strong>Sentido del signo.</strong> El resultado es negativo porque $2x-3y$ toma valores negativos en buena parte de $R$ (por ejemplo en $x=-1,\,y=2$: $-2-6=-8$); no representa un volumen físico sino una integral con signo, coherente con que el integrando cambia de signo en $R$.</p></div>
</div>
<div class="final">$\displaystyle\iint_R (2x-3y)\,dA=-12$.</div>`,
        answer: '-12', verify: { kind: 'int2', f: '2*x-3*y', outer: 'x', a: '-1', b: '1', lo: '0', hi: '2' }
      },
      {
        id: 's5e05', level: 1, type: 'num', label: 'Resultado =',
        q: H`Evaluar $\displaystyle\iint_D y\,dA$ con $D=\{(x,y):\ 0\le x\le 2,\ 0\le y\le x^2\}$.`,
        hint: H`Región tipo I: integre primero en $y$ desde $0$ hasta $x^2$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Clasificar la región.</strong> Una recta vertical $x=a$ con $0\le a\le2$ entra por $y=0$ y sale por $y=x^2$: $D=\{0\le x\le2,\ 0\le y\le x^2\}$ es tipo I.</p></div>
<div class="step"><p><strong>Integral interior (en y).</strong> $$\int_0^{x^2} y\,dy=\left[\frac{y^2}{2}\right]_0^{x^2}=\frac{x^4}{2}$$</p></div>
<div class="step"><p><strong>Integral exterior (en x).</strong> $$\int_0^2 \frac{x^4}{2}\,dx=\left[\frac{x^5}{10}\right]_0^2=\frac{32}{10}=\frac{16}{5}$$</p></div>
<div class="step"><p><strong>Sentido del resultado.</strong> Como $y\ge0$ en toda $D$, el integrando es no negativo y el resultado positivo $\dfrac{16}{5}$ es coherente con la interpretación de volumen bajo $z=y$.</p></div>
</div>
<div class="final">$\displaystyle\iint_D y\,dA=\dfrac{16}{5}$.</div>`,
        answer: '16/5', verify: { kind: 'int2', f: 'y', outer: 'x', a: '0', b: '2', lo: '0', hi: 'x^2' }
      },
      {
        id: 's5e06', level: 1, type: 'num', label: 'Área =',
        q: H`Usar una integral doble para hallar el área de $D=\{(x,y):\ 0\le x\le 1,\ x^2\le y\le \sqrt{x}\}$.`,
        hint: H`El área es $\displaystyle\iint_D dA$; primero verifique que $\sqrt{x}\ge x^2$ en $[0,1]$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Comparar las curvas.</strong> En $(0,1)$, $\sqrt x\ge x^2$ (por ejemplo en $x=0.5$: $0.707>0.25$), así que $y=\sqrt x$ queda arriba y $y=x^2$ abajo. Trazando $x=a$ con $0\le a\le1$, la recta vertical entra por $y=x^2$ y sale por $y=\sqrt x$: región tipo I, $D=\{0\le x\le1,\ x^2\le y\le\sqrt x\}$.</p></div>
<div class="step"><p><strong>Modelar el área como integral doble.</strong> $$A_D=\iint_D dA=\int_0^1\int_{x^2}^{\sqrt x} dy\,dx$$</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_{x^2}^{\sqrt x} dy=\sqrt x-x^2$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^1\left(\sqrt x-x^2\right)dx=\left[\frac{2}{3}x^{3/2}-\frac{x^3}{3}\right]_0^1=\frac23-\frac13=\frac13$$</p></div>
</div>
<div class="final">$A_D=\dfrac13\ \text{u}^2$.</div>`,
        answer: '1/3', verify: { kind: 'int2', f: '1', outer: 'x', a: '0', b: '1', lo: 'x^2', hi: 'sqrt(x)' }
      },
      {
        id: 's5e07', level: 1, type: 'choice',
        q: H`La región $R=\{(x,y):\ -2\le x\le 2,\ 0\le y\le 3\}$ es un rectángulo. ¿Cómo debe clasificarse para plantear una integral doble?`,
        hint: H`Piense en la regla de "la recta que entra y sale" trazada tanto vertical como horizontalmente.`,
        options: [
          H`Solo como tipo I, porque sus límites en $x$ son constantes.`,
          H`Solo como tipo II, porque sus límites en $y$ son constantes.`,
          H`Como tipo I y tipo II a la vez: cualquier rectángulo con lados paralelos a los ejes admite ambas descripciones.`,
          H`No puede describirse como tipo I ni tipo II porque no está limitada por curvas.`
        ],
        correct: 2,
        solution: H`<div class="steps">
<div class="step"><p><strong>Aplicar la regla de "la recta que entra y sale" (vertical).</strong> $R=\{-2\le x\le2,\ 0\le y\le3\}$ es un rectángulo con lados paralelos a los ejes. Cualquier recta vertical $x=a$ con $-2\le a\le2$ entra por $y=0$ y sale por $y=3$ (siempre las mismas curvas): $R$ es tipo I con $g_1(x)=0,\ g_2(x)=3$.</p></div>
<div class="step"><p><strong>Probar también con una recta horizontal.</strong> Cualquier recta horizontal $y=b$ con $0\le b\le3$ entra por $x=-2$ y sale por $x=2$: $R$ es también tipo II con $h_1(y)=-2,\ h_2(y)=2$.</p></div>
<div class="step"><p><strong>Descartar las opciones incorrectas.</strong> Las opciones 1 y 2 son incorrectas porque afirman que solo admite una clasificación, cuando en realidad admite ambas simultáneamente (justo por tener límites constantes en ambas variables). La opción 4 es incorrecta porque un rectángulo sí se describe con inecuaciones $a\le x\le b,\ c\le y\le d$, un caso particular (trivial) de las desigualdades tipo I o tipo II.</p></div>
</div>
<div class="final">La opción correcta es la 3: $R$ es tipo I y tipo II a la vez.</div>`
      },
      {
        id: 's5e08', level: 2, type: 'num', label: 'Resultado =',
        q: H`Evaluar $\displaystyle\iint_D (x^2+y)\,dA$ con $D$ el triángulo $\{0\le x\le 1,\ 0\le y\le x\}$.`,
        hint: H`Región tipo I con límite superior variable $y=x$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Clasificar la región.</strong> Una recta vertical $x=a$ con $0\le a\le1$ entra por $y=0$ y sale por $y=a$: $D=\{0\le x\le1,\ 0\le y\le x\}$ es tipo I (un triángulo).</p></div>
<div class="step"><p><strong>Integral interior (en y).</strong> $$\int_0^{x}(x^2+y)\,dy=\left[x^2y+\frac{y^2}{2}\right]_0^{x}=x^3+\frac{x^2}{2}$$</p></div>
<div class="step"><p><strong>Integral exterior (en x).</strong> $$\int_0^1\left(x^3+\frac{x^2}{2}\right)dx=\left[\frac{x^4}{4}+\frac{x^3}{6}\right]_0^1=\frac14+\frac16$$</p></div>
<div class="step"><p><strong>Aritmética final.</strong> Con denominador común $12$: $\dfrac{3}{12}+\dfrac{2}{12}=\dfrac{5}{12}$.</p></div>
</div>
<div class="final">$\displaystyle\iint_D (x^2+y)\,dA=\dfrac{5}{12}$.</div>`,
        answer: '5/12', verify: { kind: 'int2', f: 'x^2+y', outer: 'x', a: '0', b: '1', lo: '0', hi: 'x' }
      },
      {
        id: 's5e09', level: 2, type: 'choice',
        q: H`La integral iterada $\displaystyle\int_0^2\int_{y/2}^{1} f(x,y)\,dx\,dy$ describe una región tipo II. ¿Cuál es la integral iterada equivalente tratando la región como tipo I?`,
        hint: H`Los límites dados dicen $0\le y\le 2$, $\dfrac{y}{2}\le x\le 1$, es decir $y\le 2x$. Despeje y encuentre el rango de $x$.`,
        options: [
          H`$\displaystyle\int_0^1\int_0^{2x} f(x,y)\,dy\,dx$`,
          H`$\displaystyle\int_0^1\int_{2x}^{2} f(x,y)\,dy\,dx$`,
          H`$\displaystyle\int_0^2\int_0^{x/2} f(x,y)\,dy\,dx$`,
          H`$\displaystyle\int_0^1\int_0^{x} f(x,y)\,dy\,dx$`
        ],
        correct: 0,
        solution: H`<div class="steps">
<div class="step"><p><strong>Leer la región dada (tipo II).</strong> La integral $\int_0^2\int_{y/2}^{1} f\,dx\,dy$ describe $D=\{0\le y\le2,\ \tfrac{y}{2}\le x\le1\}$.</p></div>
<div class="step"><p><strong>Despejar y reclasificar como tipo I.</strong> De $\dfrac{y}{2}\le x$ se obtiene $y\le 2x$ (multiplicando por $2$); junto con $y\ge0$, para cada $x$ fijo $y$ varía entre $0$ y $2x$. Como además $x\le1$, el rango exterior es $0\le x\le1$: $D=\{0\le x\le1,\ 0\le y\le2x\}$, tipo I.</p></div>
<div class="step"><p><strong>Escribir la integral iterada equivalente.</strong> $$\int_0^2\int_{y/2}^{1} f(x,y)\,dx\,dy=\int_0^1\int_0^{2x} f(x,y)\,dy\,dx$$ que corresponde a la opción 1.</p></div>
<div class="step"><p><strong>Descartar las opciones incorrectas.</strong> La opción 2 invierte los límites de $y$ (describiría la región complementaria dentro del rectángulo $[0,1]\times[0,2]$). La opción 3 despeja mal ($x/2$ en vez de $2x$) y deja $x$ hasta $2$, contradiciendo que $x\le1$. La opción 4 usa el límite $y=x$, que no corresponde a despejar $y/2\le x$.</p></div>
</div>
<div class="final">La opción correcta es la 1: $\displaystyle\int_0^1\int_0^{2x} f(x,y)\,dy\,dx$.</div>`
      },
      {
        id: 's5e10', level: 2, type: 'num', label: 'Volumen =',
        q: H`Determinar el volumen del sólido bajo el plano $z=6-x-y$ sobre la región triangular $D=\{0\le x\le 2,\ 0\le y\le x\}$.`,
        hint: H`$V=\displaystyle\iint_D (6-x-y)\,dA$, tipo I con límite superior $y=x$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región y modelo del volumen.</strong> $D=\{0\le x\le2,\ 0\le y\le x\}$ es tipo I (recta vertical entra por $y=0$, sale por $y=x$). $$V=\iint_D(6-x-y)\,dA=\int_0^2\int_0^{x}(6-x-y)\,dy\,dx$$</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_0^{x}(6-x-y)\,dy=\left[6y-xy-\frac{y^2}{2}\right]_0^{x}=6x-x^2-\frac{x^2}{2}=6x-\frac{3x^2}{2}$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^2\left(6x-\frac{3x^2}{2}\right)dx=\left[3x^2-\frac{x^3}{2}\right]_0^2=12-4=8$$</p></div>
<div class="step"><p><strong>Comprobar positividad.</strong> En $D$, $x\le2$ y $y\le x\le2$, así que $x+y\le4<6$ y $z=6-x-y>0$: el resultado $8$ es un volumen físico genuino.</p></div>
</div>
<div class="final">$V=8\ \text{u}^3$.</div>`,
        answer: '8', verify: { kind: 'int2', f: '6-x-y', outer: 'x', a: '0', b: '2', lo: '0', hi: 'x' }
      },
      {
        id: 's5e11', level: 2, type: 'num', label: 'Área =',
        q: H`Hallar, mediante una integral doble, el área de la región entre $y=x^2$ y $y=2-x^2$.`,
        hint: H`Iguale las curvas para hallar $a$ y $b$; note que la región es simétrica respecto al eje $y$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Intersecciones y curva superior.</strong> $x^2=2-x^2\Rightarrow2x^2=2\Rightarrow x=\pm1$. En $x=0$: $2-x^2=2>x^2=0$, así que $y=2-x^2$ queda arriba.</p></div>
<div class="step"><p><strong>Región tipo I.</strong> $D=\{-1\le x\le1,\ x^2\le y\le2-x^2\}$; nótese que la región es simétrica respecto al eje $y$.</p></div>
<div class="step"><p><strong>Modelo e integral interior.</strong> $$A_D=\int_{-1}^1\int_{x^2}^{2-x^2}dy\,dx=\int_{-1}^1\Big[(2-x^2)-x^2\Big]dx=\int_{-1}^1(2-2x^2)\,dx$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_{-1}^1(2-2x^2)\,dx=\left[2x-\frac{2x^3}{3}\right]_{-1}^1=\left(2-\frac23\right)-\left(-2+\frac23\right)=4-\frac43=\frac{8}{3}$$</p></div>
</div>
<div class="final">$A_D=\dfrac{8}{3}\ \text{u}^2$.</div>`,
        answer: '8/3', verify: { kind: 'int2', f: '1', outer: 'x', a: '-1', b: '1', lo: 'x^2', hi: '2-x^2' }
      },
      {
        id: 's5e12', level: 2, type: 'num', label: 'Resultado =',
        q: H`Evaluar $\displaystyle\iint_D x\,dA$ con $D=\{(x,y):\ -2\le y\le 2,\ y^2\le x\le 4\}$.`,
        hint: H`Esta región está descrita como tipo II: integre primero en $x$ (de $y^2$ a $4$) y después en $y$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región (dada como tipo II).</strong> $D=\{-2\le y\le2,\ y^2\le x\le4\}$: para cada $y$ fijo, la recta horizontal entra por la parábola $x=y^2$ y sale por la recta $x=4$.</p></div>
<div class="step"><p><strong>Integral interior (en x).</strong> $$\int_{y^2}^{4} x\,dx=\left[\frac{x^2}{2}\right]_{y^2}^{4}=8-\frac{y^4}{2}$$</p></div>
<div class="step"><p><strong>Integral exterior (en y).</strong> $$\int_{-2}^2\left(8-\frac{y^4}{2}\right)dy=\left[8y-\frac{y^5}{10}\right]_{-2}^2=\left(16-\frac{32}{10}\right)-\left(-16+\frac{32}{10}\right)$$</p></div>
<div class="step"><p><strong>Aritmética final.</strong> $=32-\dfrac{64}{10}=32-6.4=25.6=\dfrac{128}{5}$.</p></div>
</div>
<div class="final">$\displaystyle\iint_D x\,dA=\dfrac{128}{5}$.</div>`,
        answer: '128/5', verify: { kind: 'int2', f: 'x', outer: 'y', a: '-2', b: '2', lo: 'y^2', hi: '4' }
      },
      {
        id: 's5e13', level: 2, type: 'set', label: 'x = (separados por comas)',
        q: H`Hallar las abscisas de los puntos de intersección de $y=x^3$ y $y=x$ (necesarias para acotar una región entre ambas curvas).`,
        hint: H`Resuelva $x^3=x$ factorizando.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Plantear la ecuación de intersección.</strong> Los puntos comunes a $y=x^3$ y $y=x$ cumplen $x^3=x$.</p></div>
<div class="step"><p><strong>Factorizar y resolver.</strong> $$x^3=x\ \Rightarrow\ x^3-x=0\ \Rightarrow\ x(x^2-1)=0\ \Rightarrow\ x(x-1)(x+1)=0$$ Las raíces son $x=-1,\ 0,\ 1$.</p></div>
<div class="step"><p><strong>Verificación.</strong> En $x=-1$: $(-1)^3=-1$, coincide. En $x=0$: ambas dan $0$. En $x=1$: $1^3=1$. Las tres soluciones son correctas.</p></div>
</div>
<div class="final">$x=-1,\ 0,\ 1$.</div>`,
        answer: ['-1', '0', '1']
      },
      {
        id: 's5e14', level: 2, type: 'num', label: 'Resultado =',
        q: H`Evaluar $\displaystyle\iint_R x^2\cos y\,dA$ con $R=[0,1]\times[0,\pi/2]$.`,
        hint: H`El integrando es separable y $R$ es un rectángulo: factorice en el producto de dos integrales simples.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Reconocer separabilidad.</strong> $R=[0,1]\times[0,\pi/2]$ es un rectángulo y $f(x,y)=x^2\cos y=g(x)h(y)$ con $g(x)=x^2$, $h(y)=\cos y$.</p></div>
<div class="step"><p><strong>Factor en x.</strong> $$\int_0^1 x^2\,dx=\left[\frac{x^3}{3}\right]_0^1=\frac13$$</p></div>
<div class="step"><p><strong>Factor en y.</strong> $$\int_0^{\pi/2}\cos y\,dy=\Big[\sin y\Big]_0^{\pi/2}=1-0=1$$</p></div>
<div class="step"><p><strong>Producto.</strong> $$\iint_R x^2\cos y\,dA=\frac13\cdot1=\frac13$$</p></div>
</div>
<div class="final">$\displaystyle\iint_R x^2\cos y\,dA=\dfrac13$.</div>`,
        answer: '1/3', verify: { kind: 'int2', f: 'x^2*cos(y)', outer: 'x', a: '0', b: '1', lo: '0', hi: 'pi/2' }
      },
      {
        id: 's5e15', level: 2, type: 'num', label: 'Resultado =', tol: 0.01,
        q: H`Evaluar $\displaystyle\iint_D x\,dA$ donde $D$ es la región limitada por $y=\sin x$ y el eje $x$ en $0\le x\le \pi$.`,
        hint: H`Región tipo I: $0\le x\le\pi$, $0\le y\le\sin x$. La integral interior en $y$ es trivial; resuelva $\displaystyle\int_0^\pi x\sin x\,dx$ por partes.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región y tipo.</strong> $D=\{0\le x\le\pi,\ 0\le y\le\sin x\}$ es tipo I (y $\sin x\ge0$ en todo $[0,\pi]$).</p></div>
<div class="step"><p><strong>Integral interior (en y).</strong> Como el integrando $x$ no depende de $y$: $$\int_0^{\sin x} x\,dy=x\sin x$$</p></div>
<div class="step"><p><strong>Integral exterior por partes.</strong> Para $\displaystyle\int_0^\pi x\sin x\,dx$: $u=x$, $dv=\sin x\,dx\Rightarrow du=dx$, $v=-\cos x$. $$\int x\sin x\,dx=-x\cos x+\int \cos x\,dx=-x\cos x+\sin x$$</p></div>
<div class="step"><p><strong>Evaluar en los límites.</strong> $$\big[\sin x-x\cos x\big]_0^\pi=(\sin\pi-\pi\cos\pi)-(\sin 0-0)=0-\pi(-1)=\pi$$</p></div>
</div>
<div class="final">$\displaystyle\iint_D x\,dA=\pi\approx3.14$.</div>`,
        answer: 'pi', verify: { kind: 'int2', f: 'x', outer: 'x', a: '0', b: 'pi', lo: '0', hi: 'sin(x)' }
      },
      {
        id: 's5e16', level: 2, type: 'num', label: 'Resultado =',
        q: H`Si $\displaystyle\iint_D f\,dA=5$ y $\displaystyle\iint_D g\,dA=3$, use la propiedad de linealidad para hallar $\displaystyle\iint_D (2f-g)\,dA$.`,
        hint: H`Aplique linealidad: $\displaystyle\iint_D(2f-g)\,dA=2\iint_D f\,dA-\iint_D g\,dA$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Identificar la propiedad aplicable.</strong> Se pide $\iint_D(2f-g)\,dA$ conociendo solo $\iint_D f\,dA=5$ y $\iint_D g\,dA=3$, sin conocer $f$, $g$ ni $D$ explícitamente: hay que usar la propiedad de <strong>linealidad</strong> de la integral doble.</p></div>
<div class="step"><p><strong>Aplicar linealidad.</strong> $$\iint_D(2f-g)\,dA=2\iint_D f\,dA-\iint_D g\,dA$$</p></div>
<div class="step"><p><strong>Sustituir los valores dados.</strong> $$=2(5)-3=10-3=7$$</p></div>
</div>
<div class="final">$\displaystyle\iint_D (2f-g)\,dA=7$.</div>`,
        answer: '7'
      },
      {
        id: 's5e17', level: 3, type: 'num', label: 'Volumen =',
        q: H`Hallar el volumen bajo el paraboloide $z=x^2+y^2$ sobre $D=\{0\le x\le 1,\ x\le y\le 2x\}$.`,
        hint: H`Región tipo I entre las rectas $y=x$ y $y=2x$; integre primero en $y$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región y tipo.</strong> $D=\{0\le x\le1,\ x\le y\le2x\}$: una recta vertical entra por $y=x$ y sale por $y=2x$, tipo I.</p></div>
<div class="step"><p><strong>Integral interior (en y, x constante).</strong> $$\int_{x}^{2x}(x^2+y^2)\,dy=\left[x^2y+\frac{y^3}{3}\right]_{y=x}^{y=2x}=\left(2x^3+\frac{8x^3}{3}\right)-\left(x^3+\frac{x^3}{3}\right)=x^3+\frac{7x^3}{3}=\frac{10x^3}{3}$$</p></div>
<div class="step"><p><strong>Integral exterior (en x).</strong> $$\int_0^1 \frac{10x^3}{3}\,dx=\frac{10}{3}\left[\frac{x^4}{4}\right]_0^1=\frac{10}{12}=\frac56$$</p></div>
</div>
<div class="final">$V=\dfrac56\ \text{u}^3$.</div>`,
        answer: '5/6', verify: { kind: 'int2', f: 'x^2+y^2', outer: 'x', a: '0', b: '1', lo: 'x', hi: '2*x' }
      },
      {
        id: 's5e18', level: 3, type: 'num', label: 'Resultado =',
        q: H`Cambiar el orden de integración y evaluar $\displaystyle\int_0^1\int_x^1 e^{y^2}\,dy\,dx$.`,
        hint: H`$e^{y^2}$ no tiene primitiva elemental en $y$; dibuje la región (triángulo $0\le x\le y\le 1$) e integre primero en $x$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Leer la región y notar el obstáculo.</strong> Los límites dados describen $D=\{0\le x\le1,\ x\le y\le1\}$, un triángulo. $e^{y^2}$ no tiene primitiva elemental en $y$, así que no se puede integrar en el orden dado.</p></div>
<div class="step"><p><strong>Reclasificar como tipo II.</strong> Para $0\le y\le1$, la condición $x\le y$ junto con $x\ge0$ da $0\le x\le y$. Entonces $D=\{0\le y\le1,\ 0\le x\le y\}$.</p></div>
<div class="step"><p><strong>Cambiar el orden e integrar primero en x.</strong> $$\int_0^1\int_x^1 e^{y^2}\,dy\,dx=\int_0^1\int_0^{y} e^{y^2}\,dx\,dy=\int_0^1 y\,e^{y^2}\,dy$$ (la integral interior en $x$ es trivial porque $e^{y^2}$ no depende de $x$).</p></div>
<div class="step"><p><strong>Sustitución en la integral exterior.</strong> Con $u=y^2,\ du=2y\,dy$: $$\int_0^1 y\,e^{y^2}\,dy=\frac12\int_0^1 e^u\,du=\frac12\Big[e^{y^2}\Big]_0^1=\frac{e-1}{2}$$</p></div>
</div>
<div class="final">$\displaystyle\int_0^1\int_x^1 e^{y^2}\,dy\,dx=\dfrac{e-1}{2}\approx0.859$.</div>`,
        answer: '(e-1)/2', verify: { kind: 'int2', f: 'exp(y^2)', outer: 'y', a: '0', b: '1', lo: '0', hi: 'y' }
      },
      {
        id: 's5e19', level: 3, type: 'num', label: 'Resultado =', tol: 0.001,
        q: H`Cambiar el orden de integración y evaluar $\displaystyle\int_0^2\int_{x/2}^{1} \cos(y^2)\,dy\,dx$.`,
        hint: H`$\cos(y^2)$ no tiene primitiva elemental en $y$. La región es $0\le x\le 2$, $\dfrac{x}{2}\le y\le 1$, equivalente a $0\le y\le 1$, $0\le x\le 2y$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Leer la región y notar el obstáculo.</strong> Los límites $0\le x\le2,\ \dfrac{x}{2}\le y\le1$ describen una región tipo I, pero $\cos(y^2)$ no tiene primitiva elemental en $y$.</p></div>
<div class="step"><p><strong>Reclasificar como tipo II.</strong> De $\dfrac{x}{2}\le y$ se obtiene $x\le2y$; junto con $x\ge0$, para cada $y\in[0,1]$ fijo, $x$ varía entre $0$ y $2y$: $D=\{0\le y\le1,\ 0\le x\le2y\}$.</p></div>
<div class="step"><p><strong>Cambiar el orden e integrar primero en x.</strong> $$\int_0^2\int_{x/2}^1 \cos(y^2)\,dy\,dx=\int_0^1\int_0^{2y}\cos(y^2)\,dx\,dy=\int_0^1 2y\cos(y^2)\,dy$$</p></div>
<div class="step"><p><strong>Sustitución.</strong> Con $u=y^2,\ du=2y\,dy$: $$\int_0^1 2y\cos(y^2)\,dy=\int_0^1\cos u\,du=\Big[\sin(y^2)\Big]_0^1=\sin(1)-\sin(0)=\sin(1)$$</p></div>
</div>
<div class="final">$\displaystyle\int_0^2\int_{x/2}^1 \cos(y^2)\,dy\,dx=\sin(1)\approx0.841$.</div>`,
        answer: 'sin(1)', verify: { kind: 'int2', f: 'cos(y^2)', outer: 'y', a: '0', b: '1', lo: '0', hi: '2*y' }
      },
      {
        id: 's5e20', level: 3, type: 'num', label: 'Resultado =',
        q: H`Evaluar $\displaystyle\iint_D (x+y)\,dA$ con $D=\{0\le x\le 1,\ x^2\le y\le \sqrt{x}\}$ (la región "lente" entre una parábola y una raíz cuadrada).`,
        hint: H`Región tipo I; recuerde que $\sqrt x\ge x^2$ en $[0,1]$. Integre primero en $y$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región y tipo.</strong> En $[0,1]$, $\sqrt x\ge x^2$, así que $D=\{0\le x\le1,\ x^2\le y\le\sqrt x\}$ es tipo I.</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_{x^2}^{\sqrt x}(x+y)\,dy=\left[xy+\frac{y^2}{2}\right]_{x^2}^{\sqrt x}=\left(x^{3/2}+\frac{x}{2}\right)-\left(x^3+\frac{x^4}{2}\right)$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^1\left(x^{3/2}+\frac{x}{2}-x^3-\frac{x^4}{2}\right)dx=\left[\frac{2}{5}x^{5/2}+\frac{x^2}{4}-\frac{x^4}{4}-\frac{x^5}{10}\right]_0^1$$</p></div>
<div class="step"><p><strong>Aritmética final.</strong> $=\dfrac25+\dfrac14-\dfrac14-\dfrac1{10}=\dfrac25-\dfrac1{10}=\dfrac{4}{10}-\dfrac1{10}=\dfrac{3}{10}$.</p></div>
</div>
<div class="final">$\displaystyle\iint_D (x+y)\,dA=\dfrac{3}{10}$.</div>`,
        answer: '3/10', verify: { kind: 'int2', f: 'x+y', outer: 'x', a: '0', b: '1', lo: 'x^2', hi: 'sqrt(x)' }
      },
      {
        id: 's5e21', level: 3, type: 'choice',
        q: H`$D$ es simétrica respecto al eje $y$ (si $(x,y)\in D$ entonces $(-x,y)\in D$) y $f(x,y)=x^3\sin(y)$. ¿Cuánto vale $\displaystyle\iint_D f\,dA$?`,
        hint: H`Compruebe que $f(-x,y)=-f(x,y)$: la función es impar en $x$. Combine esto con la simetría del dominio.`,
        options: [
          H`$0$, porque $f$ es impar en $x$ y $D$ es simétrica respecto al eje $y$: las contribuciones de $x>0$ y $x<0$ se cancelan.`,
          H`Es siempre positiva, porque $x^3$ y $\sin y$ pueden ser ambas positivas.`,
          H`No se puede determinar sin conocer $D$ explícitamente y calcular la integral.`,
          H`Es igual al doble de la integral sobre la mitad con $x\ge 0$.`
        ],
        correct: 0,
        solution: H`<div class="steps">
<div class="step"><p><strong>Comprobar la paridad de f en x.</strong> $f(-x,y)=(-x)^3\sin y=-x^3\sin y=-f(x,y)$: $f$ es <strong>impar</strong> en $x$.</p></div>
<div class="step"><p><strong>Combinar con la simetría del dominio.</strong> Como $D$ es simétrica respecto al eje $y$, a cada punto $(x,y)$ con $x>0$ le corresponde $(-x,y)\in D$ con $f(-x,y)=-f(x,y)$; al sumar (integrar) esas contribuciones opuestas se cancelan exactamente.</p></div>
<div class="step"><p><strong>Descartar las opciones incorrectas.</strong> La opción 2 es incorrecta porque el signo de $f$ no es constante en $D$: no puede afirmarse que la integral sea siempre positiva. La opción 3 es incorrecta porque la simetría impar sí permite concluir el valor sin calcular la integral explícitamente. La opción 4 confunde el caso impar con el caso par: el factor $2$ se usaría si $f$ fuera par en $x$, no impar.</p></div>
</div>
<div class="final">La opción correcta es la 1: $\displaystyle\iint_D f\,dA=0$.</div>`
      }
    ]
  });
})();
