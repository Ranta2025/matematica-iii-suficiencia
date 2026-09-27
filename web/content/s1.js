(function () {
  const H = String.raw;
  window.SESSIONS = window.SESSIONS || [];
  window.SESSIONS.push({
    id: 's1',
    order: 1,
    code: 'CE1',
    topic: 'Tema I · Cálculo integral',
    title: 'La integral definida y el Teorema Fundamental del Cálculo',
    short: 'Integral definida',
    goals: [
      'Interpretar el área bajo una curva mediante sumas de Riemann (extremo izquierdo, extremo derecho y punto medio) y calcular \\(\\Delta x\\).',
      'Enunciar la definición de la integral definida como límite de sumas de Riemann y explicar su interpretación geométrica como área con signo.',
      'Aplicar las propiedades de la integral definida (límites iguales, inversión de límites, linealidad, aditividad del intervalo, comparación) para evaluar o acotar integrales sin calcular antiderivadas.',
      'Reconocer funciones pares e impares para simplificar integrales sobre intervalos simétricos.',
      'Evaluar integrales definidas mediante geometría elemental (triángulos, semicírculos, rectángulos) cuando la región lo permite.',
      'Aplicar las dos partes del Teorema Fundamental del Cálculo: derivar funciones definidas por una integral (incluyendo límites variables con regla de la cadena) y evaluar integrales definidas mediante la fórmula de Newton-Leibniz.'
    ],
    theory: [
      {
        h: 'El problema del cálculo de área',
        html: H`<p>El Cálculo diferencial resuelve el problema de la recta tangente; el Cálculo integral resuelve, en su origen, el <strong>problema del área</strong>: hallar el área de una región plana <span>\(R\)</span> limitada por la gráfica de una función <span>\(y=f(x)\)</span>, el eje de las abscisas y dos rectas verticales <span>\(x=a\)</span>, <span>\(x=b\)</span>.</p>
        <p>Cuando la región tiene forma conocida, el área se calcula con fórmulas elementales de la geometría:</p>
        <ul>
          <li><strong>Rectángulo:</strong> \(A = a\cdot b\) (base por altura).</li>
          <li><strong>Triángulo:</strong> \(A = \dfrac{1}{2}\, b\cdot h\), donde \(h\) es la altura medida perpendicular a la base \(b\).</li>
          <li><strong>Semicírculo de radio \(r\):</strong> \(A = \dfrac{1}{2}\pi r^2\).</li>
        </ul>
        <p>El problema aparece cuando la curva <span>\(y=f(x)\)</span> no delimita ninguna de estas figuras conocidas. ¿Qué hacer entonces? La idea central del Cálculo integral es <strong>aproximar la región por muchos rectángulos delgados</strong> cuya área sí sabemos calcular, sumar esas áreas, y después dejar que el número de rectángulos crezca sin límite (que su ancho tienda a cero). Ese proceso de límite es exactamente lo que estudiamos en esta conferencia.</p>
        <div class="note"><strong>Para repasar antes de seguir:</strong> debes poder graficar mentalmente las funciones elementales (rectas, parábolas, funciones trigonométricas, exponenciales) y reconocer ecuaciones de circunferencias y semicircunferencias, porque la interpretación geométrica se usará constantemente.</div>`
      },
      {
        h: 'Sumas de Riemann: aproximando el área con rectángulos',
        html: H`<p>Sea \(f\) continua en \([a,b]\). Dividimos el intervalo en \(n\) subintervalos de igual longitud:</p>
        <div class="key">\[\Delta x = \frac{b-a}{n}\]</div>
        <p>Los puntos de la partición son \(x_0=a,\; x_1=a+\Delta x,\; x_2=a+2\Delta x,\;\dots,\; x_n=b\). En cada subintervalo \([x_{i-1},x_i]\) elegimos un punto de muestra \(x_i^{*}\) y construimos un rectángulo de base \(\Delta x\) y altura \(f(x_i^{*})\). El área de ese i-ésimo rectángulo (con signo, si \(f(x_i^{*})<0\) el "área" es negativa) es:</p>
        <div class="key">\[A_i = f(x_i^{*})\cdot \Delta x\]</div>
        <p>Sumando las áreas de los \(n\) rectángulos obtenemos la <strong>suma de Riemann</strong>:</p>
        <div class="key">\[S_n = \sum_{i=1}^{n} f(x_i^{*})\cdot \Delta x\]</div>
        <p>El punto de muestra \(x_i^{*}\) se elige por convención de tres maneras, y cada una da una suma distinta (aunque todas convergen al mismo valor cuando \(n\to\infty\)):</p>
        <ul>
          <li><strong>Extremo izquierdo:</strong> \(x_i^{*}=x_{i-1}\). Suma \(L_n\).</li>
          <li><strong>Extremo derecho:</strong> \(x_i^{*}=x_i\). Suma \(R_n\).</li>
          <li><strong>Punto medio:</strong> \(x_i^{*}=\dfrac{x_{i-1}+x_i}{2}\). Suma \(M_n\).</li>
        </ul>
        <p>Para una función <em>creciente</em> en \([a,b]\), la suma por extremo izquierdo subestima el área exacta y la suma por extremo derecho la sobreestima (al revés si \(f\) es decreciente); el punto medio suele dar la mejor aproximación de las tres para el mismo \(n\).</p>
        <svg viewBox="0 0 420 260" width="100%" style="max-width:420px">
          <line x1="30" y1="230" x2="400" y2="230" stroke="var(--grid)" stroke-width="1.5" />
          <line x1="40" y1="20" x2="40" y2="245" stroke="var(--grid)" stroke-width="1.5" />
          <rect x="40" y="198" width="84" height="32" fill="var(--hl)" fill-opacity="0.35" stroke="var(--accent)" />
          <rect x="124" y="166" width="84" height="64" fill="var(--hl)" fill-opacity="0.35" stroke="var(--accent)" />
          <rect x="208" y="134" width="84" height="96" fill="var(--hl)" fill-opacity="0.35" stroke="var(--accent)" />
          <rect x="292" y="102" width="84" height="128" fill="var(--hl)" fill-opacity="0.35" stroke="var(--accent)" />
          <path d="M40,198 L376,70" stroke="var(--ink)" stroke-width="2.5" fill="none" />
          <text x="36" y="248" font-size="12" fill="var(--muted)">0</text>
          <text x="118" y="248" font-size="12" fill="var(--muted)">2</text>
          <text x="202" y="248" font-size="12" fill="var(--muted)">4</text>
          <text x="286" y="248" font-size="12" fill="var(--muted)">6</text>
          <text x="368" y="248" font-size="12" fill="var(--muted)">8</text>
          <text x="395" y="245" font-size="13" fill="var(--muted)">x</text>
          <text x="22" y="26" font-size="13" fill="var(--muted)">y</text>
        </svg>
        <p style="font-size:0.9em;color:var(--muted)">Suma de Riemann por extremo izquierdo con \(n=4\) rectángulos aproximando el área bajo una curva creciente.</p>
        <div class="note"><strong>Ejemplo mental rápido:</strong> para \(f(x)=x^2\) en \([0,4]\) con \(n=4\) (\(\Delta x=1\)), la suma por extremo izquierdo usa las alturas \(f(0),f(1),f(2),f(3)=0,1,4,9\), de donde \(L_4=(0+1+4+9)\cdot 1=14\); la suma por extremo derecho usa \(f(1),f(2),f(3),f(4)=1,4,9,16\), de donde \(R_4=30\). El valor exacto (que obtendremos con el TFC) es \(64/3\approx 21.33\), entre ambas aproximaciones.</div>`
      },
      {
        h: 'Definición de la integral definida (integral de Riemann)',
        html: H`<p>Cuando \(n\to\infty\) los rectángulos se vuelven infinitamente delgados y, si \(f\) es continua en el intervalo finito y cerrado \([a,b]\), la suma de Riemann converge a un único número, independiente de cómo se eligieron los puntos \(x_i^{*}\). Ese número se llama <strong>integral definida de \(f\) desde \(a\) hasta \(b\)</strong>:</p>
        <div class="key">\[\int_{a}^{b} f(x)\,dx = \lim_{n\to\infty} \sum_{i=1}^{n} f(x_i^{*})\cdot \Delta x, \qquad \Delta x=\frac{b-a}{n}\]</div>
        <p>Elementos de la notación: \(\int\) es el signo de integral (una "S" alargada, que recuerda "suma"); \(a\) y \(b\) son los <strong>límites de integración</strong> (inferior y superior); \(f(x)\) es el <strong>integrando</strong>; \(dx\) indica la variable de integración y recuerda el factor \(\Delta x\) del límite.</p>
        <p>La existencia de este límite está garantizada cuando \(f\) es continua en \([a,b]\) (también existe, con más generalidad, si \(f\) es acotada y continua salvo en un número finito de puntos). Si el límite existe decimos que \(f\) es <strong>integrable</strong> en \([a,b]\).</p>
        <div class="note">La integral definida es un <strong>número</strong> (no una función ni una familia de funciones); depende de \(f\), \(a\) y \(b\), pero no de la letra usada para la variable: \(\int_a^b f(x)\,dx=\int_a^b f(t)\,dt\).</div>`
      },
      {
        h: 'Interpretación geométrica: área con signo',
        html: H`<p>Si \(f(x)\ge 0\) en \([a,b]\), todos los rectángulos de la suma de Riemann tienen altura no negativa y \(\displaystyle\int_a^b f(x)\,dx\) es exactamente el área de la región bajo la curva y sobre el eje \(x\).</p>
        <p>Si \(f(x)\) toma valores negativos en parte del intervalo, esos rectángulos tienen altura negativa y aportan un término negativo a la suma. Por eso la integral definida representa, en general, un <strong>área con signo</strong>: suma las áreas de las regiones por encima del eje \(x\) y resta las áreas de las regiones por debajo.</p>
        <svg viewBox="0 0 400 260" width="100%" style="max-width:400px">
          <line x1="30" y1="140" x2="370" y2="140" stroke="var(--grid)" stroke-width="1.5" />
          <polygon points="40,140 120,60 200,140" fill="var(--accent)" fill-opacity="0.35" stroke="none" />
          <polygon points="200,140 280,220 360,140" fill="var(--muted)" fill-opacity="0.4" stroke="none" />
          <path d="M40,140 L120,60 L200,140 L280,220 L360,140" stroke="var(--ink)" stroke-width="2.5" fill="none" />
          <text x="72" y="105" font-size="16" fill="var(--accent)">+</text>
          <text x="272" y="180" font-size="16" fill="var(--muted)">−</text>
          <text x="365" y="155" font-size="13" fill="var(--muted)">x</text>
        </svg>
        <p style="font-size:0.9em;color:var(--muted)">Región donde \(f\) cambia de signo: la integral suma el área de la parte positiva y resta el área de la parte negativa.</p>
        <div class="warn"><strong>Error común:</strong> confundir "integral" con "área geométrica". Si se pide el <em>área</em> de una región donde \(f\) cambia de signo, no se puede integrar de una sola vez sobre todo el intervalo: hay que separar los subintervalos donde \(f\ge 0\) de aquellos donde \(f\le 0\), tomar valor absoluto en cada tramo y sumar, o bien integrar directamente \(|f(x)|\):
        \[\text{Área} = \int_a^b |f(x)|\,dx\]
        mientras que la integral \(\int_a^b f(x)\,dx\) (sin valor absoluto) da la diferencia de áreas, no la suma.</div>`
      },
      {
        h: 'Propiedades de la integral definida',
        html: H`<p>Estas propiedades permiten evaluar, comparar o acotar integrales sin necesidad de antiderivadas. Consérvalas siempre a la vista, son la base de gran parte de los ejercicios de razonamiento de esta conferencia.</p>
        <p><strong>1. Límites de integración iguales.</strong> Geométricamente la región es un segmento (sin ancho), no tiene área:</p>
        <div class="key">\[\int_a^a f(x)\,dx = 0\]</div>
        <p><strong>2. Inversión de los límites de integración.</strong> Cambia el signo de la integral:</p>
        <div class="key">\[\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx\]</div>
        <p><strong>3. Linealidad.</strong> La integral definida es un operador lineal:</p>
        <div class="key">\[\int_a^b \big[f(x)+g(x)\big]\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx\]
        \[\int_a^b c\cdot f(x)\,dx = c\int_a^b f(x)\,dx \qquad (c \text{ constante})\]</div>
        <p><strong>4. Aditividad respecto al intervalo.</strong> Si \(a<c<b\), dividir la región en dos partes y sumar sus áreas da el área total:</p>
        <div class="key">\[\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx\]</div>
        <p>Esta propiedad, combinada con la 2, sigue siendo válida aunque \(c\) no esté entre \(a\) y \(b\), siempre que \(f\) sea integrable en el intervalo que contiene a los tres puntos.</p>
        <p><strong>5. Propiedades de comparación.</strong></p>
        <table class="tbl">
          <thead><tr><th>Hipótesis en \([a,b]\)</th><th>Conclusión</th></tr></thead>
          <tbody>
            <tr><td>\(f(x)\ge 0\)</td><td>\(\displaystyle\int_a^b f(x)\,dx \ge 0\)</td></tr>
            <tr><td>\(f(x)\le 0\)</td><td>\(\displaystyle\int_a^b f(x)\,dx \le 0\)</td></tr>
            <tr><td>\(f(x)\le g(x)\)</td><td>\(\displaystyle\int_a^b f(x)\,dx \le \int_a^b g(x)\,dx\)</td></tr>
            <tr><td>\(m\le f(x)\le M\)</td><td>\(\displaystyle m(b-a)\le \int_a^b f(x)\,dx \le M(b-a)\)</td></tr>
          </tbody>
        </table>
        <p>La última fila (llamada <strong>teorema de acotación</strong>) dice que la integral está comprendida entre el área del rectángulo de altura igual al mínimo \(m\) de \(f\) en \([a,b]\) y el área del rectángulo de altura igual al máximo \(M\). Es muy útil para estimar rápidamente el orden de magnitud de una integral, o para demostrar desigualdades sin calcular la integral.</p>
        <div class="note"><strong>Cómo leer estas propiedades en palabras:</strong> la 3 dice que "integrar respeta sumas y múltiplos constantes"; la 4 dice que "el área total es la suma de las áreas de las partes"; la 5 dice que "si comparamos las funciones, se comparan sus áreas en la misma dirección".</div>`
      },
      {
        h: 'Funciones pares e impares en intervalos simétricos',
        html: H`<p>Cuando el intervalo de integración es simétrico respecto al origen, \([-a,a]\), conviene identificar la paridad del integrando: puede ahorrar todo el cálculo.</p>
        <div class="key">
        Si \(f\) es <strong>impar</strong> (\(f(-x)=-f(x)\)) entonces \[\int_{-a}^{a} f(x)\,dx = 0.\]
        Si \(f\) es <strong>par</strong> (\(f(-x)=f(x)\)) entonces \[\int_{-a}^{a} f(x)\,dx = 2\int_{0}^{a} f(x)\,dx.\]
        </div>
        <p>La justificación usa exactamente las propiedades 2 y 4: si \(f\) es impar, la gráfica en \([-a,0]\) es la reflexión puntual de la gráfica en \([0,a]\), de modo que las áreas en ambos subintervalos son iguales en magnitud pero de signos opuestos: \(\int_{-a}^{0}f = -\int_0^a f\), y al sumar (propiedad 4) se cancelan.</p>
        <p><strong>Regla práctica para reconocer paridad de un producto:</strong> par·par = par, impar·impar = par, par·impar = impar. Por ejemplo \(f(x)=x^3\cos x\) es impar (impar·par) y \(g(x)=x^2\cos x\) es par (par·par).</p>
        <div class="warn"><strong>Cuidado:</strong> que la integral sobre \([-a,a]\) valga cero <strong>no</strong> significa que el área de la región valga cero. Si se pide el área (no la integral) de una región donde la función impar cambia de signo, hay que integrar \(|f(x)|\) o sumar los valores absolutos de las integrales en cada tramo de signo constante.</div>`
      },
      {
        h: 'Evaluación de integrales mediante geometría elemental',
        html: H`<p>Antes de contar con técnicas de integración (conferencia 2), muchas integrales definidas pueden evaluarse identificando la figura geométrica que delimita la región y aplicando su fórmula de área, con el signo correcto según la propiedad 5.</p>
        <p><strong>Estrategia:</strong></p>
        <ol>
          <li>Graficar (mentalmente o con un asistente como GeoGebra) la función del integrando en el intervalo dado.</li>
          <li>Identificar la figura (o figuras) que se forma: rectángulo, triángulo, trapecio, sector circular, semicírculo…</li>
          <li>Si la región cambia de signo, separar el intervalo en los tramos donde \(f\ge 0\) y donde \(f\le 0\) (propiedad 4), calcular cada área por separado y asignar el signo correspondiente.</li>
          <li>Sumar con signo para obtener el valor de la integral.</li>
        </ol>
        <p><strong>Casos frecuentes:</strong></p>
        <ul>
          <li>Si \(f(x)=mx+n\) es una recta, la región es un triángulo o un trapecio: \(A=\dfrac12 b\cdot h\) o \(A=\dfrac12(b_1+b_2)h\).</li>
          <li>Si \(y=f(x)=\sqrt{r^2-(x-x_0)^2}\), despejando se obtiene \((x-x_0)^2+y^2=r^2\) con \(y\ge 0\): es la mitad superior de una circunferencia de radio \(r\) centrada en \((x_0,0)\); según los límites de integración, la región puede ser un semicírculo completo, un cuarto de círculo, etc.</li>
          <li>Si \(f(x)=k\) es constante, la región es un rectángulo: \(\displaystyle\int_a^b k\,dx = k(b-a)\).</li>
        </ul>
        <div class="note">Este método solo funciona mientras la región tenga una forma geométrica reconocible. Para integrandos generales se necesitan las técnicas de integración de la conferencia 2 y el Teorema Fundamental del Cálculo.</div>`
      },
      {
        h: 'Teorema Fundamental del Cálculo — Parte 1',
        html: H`<p>La primera parte del TFC conecta la derivación con la integración: dice que integrar y luego derivar (respecto al límite superior) "deshace" la integración.</p>
        <div class="key">
        Si \(f\) es continua en un intervalo que contiene a \(a\), y se define
        \[g(x)=\int_a^{x} f(t)\,dt,\]
        entonces \(g\) es derivable y \[g'(x)=f(x).\]
        </div>
        <p>En otras palabras, <strong>la derivada de una integral respecto a su límite superior es el propio integrando, evaluado en ese límite</strong>. Intuitivamente, \(g(x)\) es el área acumulada bajo la curva desde \(a\) hasta \(x\); al aumentar \(x\) en una cantidad muy pequeña \(dx\), el área crece aproximadamente en un rectángulo de altura \(f(x)\) y base \(dx\), de ahí que la razón de cambio del área sea \(f(x)\).</p>
        <svg viewBox="0 0 420 260" width="100%" style="max-width:420px">
          <line x1="30" y1="230" x2="400" y2="230" stroke="var(--grid)" stroke-width="1.5" />
          <line x1="40" y1="20" x2="40" y2="245" stroke="var(--grid)" stroke-width="1.5" />
          <path d="M40,198 L376,70" stroke="var(--ink)" stroke-width="2.5" fill="none" />
          <polygon points="82,230 82,182 250,118 250,230" fill="var(--hl)" fill-opacity="0.4" stroke="none" />
          <line x1="82" y1="182" x2="82" y2="244" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="250" y1="118" x2="250" y2="244" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4,3" />
          <text x="76" y="255" font-size="13" fill="var(--muted)">a</text>
          <text x="246" y="255" font-size="13" fill="var(--accent)">x</text>
          <text x="120" y="205" font-size="13" fill="var(--ink)">g(x)</text>
        </svg>
        <p style="font-size:0.9em;color:var(--muted)">\(g(x)=\int_a^x f(t)\,dt\) es el área acumulada hasta el punto móvil \(x\); su derivada respecto a \(x\) es \(f(x)\).</p>
        <p><strong>Variante con límite superior compuesto (regla de la cadena).</strong> Si en vez de \(x\) el límite superior es una función \(u(x)\), es decir \(g(x)=\int_a^{u(x)} f(t)\,dt\), entonces \(g\) es la composición de \(F(u)=\int_a^u f(t)dt\) con \(u=u(x)\), y por la regla de la cadena:</p>
        <div class="key">\[\frac{d}{dx}\int_a^{u(x)} f(t)\,dt = f\big(u(x)\big)\cdot u'(x)\]</div>
        <p>Ejemplo directo: si \(g(x)=\displaystyle\int_0^{x^3}\sqrt{1+t^2}\,dt\), entonces \(g'(x)=\sqrt{1+x^6}\cdot 3x^2\) (se sustituye \(t=x^3\) en el integrando y se multiplica por la derivada de \(x^3\)).</p>
        <div class="warn"><strong>Error común:</strong> olvidar el factor \(u'(x)\) cuando el límite superior no es simplemente \(x\). Si además el límite <em>inferior</em> es una función de \(x\), se usa la propiedad 2 para invertir los límites y aplicar la misma regla con signo negativo, o se usa la propiedad 4 para separar en dos integrales con límite fijo intermedio.</div>`
      },
      {
        h: 'Teorema Fundamental del Cálculo — Parte 2 (fórmula de Newton-Leibniz)',
        html: H`<p>La segunda parte es la herramienta de cálculo que usamos en la práctica: convierte el problema de evaluar un límite de sumas de Riemann en el problema (mucho más manejable) de encontrar <strong>una</strong> antiderivada.</p>
        <div class="key">
        Si \(f\) es continua en \([a,b]\) y \(F\) es cualquier antiderivada de \(f\) (es decir, \(F'(x)=f(x)\) para todo \(x\) en \([a,b]\)), entonces
        \[\int_a^b f(x)\,dx = F(b)-F(a).\]
        </div>
        <p>La notación habitual para esta diferencia es \(\big[F(x)\big]_a^b\) o \(F(x)\Big|_a^b\).</p>
        <p><strong>Procedimiento práctico:</strong></p>
        <ol>
          <li>Encontrar (por ensayo y error, tablas, o técnicas de integración) una función \(F\) tal que \(F'(x)=f(x)\).</li>
          <li>Evaluar \(F\) en el límite superior \(b\) y en el límite inferior \(a\).</li>
          <li>Restar: \(F(b)-F(a)\).</li>
        </ol>
        <p>Es indiferente <em>cuál</em> antiderivada se use (todas difieren en una constante \(c\), y esa constante se cancela al restar): \(\big(F(b)+c\big)-\big(F(a)+c\big)=F(b)-F(a)\). Por eso, para la integral definida, la constante de integración nunca se escribe.</p>
        <div class="note"><strong>Ejemplo mínimo:</strong> \(F(x)=-\dfrac1x\) es una antiderivada de \(f(x)=\dfrac{1}{x^2}\) porque \(\left(-\dfrac1x\right)'=\dfrac1{x^2}\). Entonces \(\displaystyle\int_1^4\frac{1}{x^2}\,dx=\left[-\frac1x\right]_1^4=-\frac14-(-1)=\frac34\).</div>`
      },
      {
        h: 'Derivación e integración: procesos inversos',
        html: H`<p>Las dos partes del TFC muestran, desde ángulos distintos, que derivar e integrar son <strong>procesos inversos</strong>:</p>
        <ul>
          <li><strong>Parte 1:</strong> si primero integras (para formar \(g(x)=\int_a^x f\)) y después derivas, recuperas la función original: \(g'(x)=f(x)\).</li>
          <li><strong>Parte 2:</strong> si conoces una función cuya derivada es \(f\) (es decir, primero "piensas" en derivar hacia atrás), esa función te permite evaluar cualquier integral definida de \(f\).</li>
        </ul>
        <p>Esta dualidad es la razón por la que, en la práctica, "integrar una función" casi siempre significa "encontrar una función cuya derivada sea la función dada": el cálculo de integrales se reduce, en gran medida, a invertir reglas de derivación que ya conoces del Cálculo diferencial. Ese es precisamente el punto de partida de la conferencia 2 (integral indefinida).</p>`
      },
      {
        h: 'Área de una región vs. integral: el papel del valor absoluto',
        html: H`<p>Para cerrar esta conferencia, distingamos con precisión dos preguntas que se confunden con frecuencia:</p>
        <table class="tbl">
          <thead><tr><th>Pregunta</th><th>Qué se calcula</th></tr></thead>
          <tbody>
            <tr><td>"Evalúa \(\int_a^b f(x)\,dx\)"</td><td>El área con signo: se resta el área bajo el eje del área sobre el eje.</td></tr>
            <tr><td>"Halla el área de la región entre la curva \(y=f(x)\) y el eje \(x\) en \([a,b]\)"</td><td>El área geométrica total: \(\displaystyle\int_a^b |f(x)|\,dx\), o equivalentemente, la suma de los valores absolutos de las integrales en cada tramo de signo constante.</td></tr>
          </tbody>
        </table>
        <p>Cuando \(f\) no cambia de signo en \([a,b]\) ambas preguntas tienen la misma respuesta numérica; cuando \(f\) cambia de signo, son distintas y hay que leer con cuidado qué pide el enunciado.</p>
        <div class="warn">En un examen, si el enunciado dice "área" y la gráfica muestra que la función cruza el eje \(x\) dentro del intervalo, casi siempre se espera que localices los ceros de \(f\), dividas el intervalo en esos puntos, integres por tramos y sumes los valores absolutos — no que integres de una sola vez sobre todo el intervalo.</div>`
      }
    ],
    examples: [
      {
        title: 'Sumas de Riemann por extremo izquierdo y derecho (datos tabulados)',
        statement: H`Se muestra la función \(y=f(x)\) mediante la tabla siguiente. Estimar el área bajo la curva en \([0,8]\) usando 8 subintervalos (\(\Delta x=1\)): (a) suma por extremo izquierdo, (b) suma por extremo derecho.
        <table class="tbl">
          <thead><tr><th>\(x\)</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead>
          <tbody><tr><th>\(y\)</th><td>3</td><td>5</td><td>7</td><td>6</td><td>8</td><td>6</td><td>5</td><td>4</td><td>6</td></tr></tbody>
        </table>`,
        steps: [
          H`Identificamos que la partición ya viene dada por la tabla: 9 valores de \(x\) igualmente espaciados (0 a 8), por lo que \(n=8\) subintervalos y \(\Delta x=\dfrac{8-0}{8}=1\).`,
          H`<strong>(a) Extremo izquierdo:</strong> en cada subintervalo \([x_{i-1},x_i]\) la altura del rectángulo es \(f(x_{i-1})\), es decir, usamos los valores de \(y\) en \(x=0,1,2,3,4,5,6,7\) (se descarta el último dato, \(x=8\), porque no es extremo izquierdo de ningún subintervalo).`,
          H`Alturas por extremo izquierdo: \(3,\,5,\,7,\,6,\,8,\,6,\,5,\,4\). Como \(\Delta x=1\), la suma de Riemann es simplemente la suma de estas alturas:
          \[L_8=\sum_{i=0}^{7} f(x_i)\cdot 1 = 3+5+7+6+8+6+5+4\]`,
          H`Sumando: \(3+5+7+6+8+6+5+4=44\). Por lo tanto \(L_8=44\;u^2\) (área aproximada por extremo izquierdo).`,
          H`<strong>(b) Extremo derecho:</strong> ahora la altura de cada rectángulo es \(f(x_i)\), es decir, usamos los valores en \(x=1,2,3,4,5,6,7,8\) (se descarta el primer dato, \(x=0\)).`,
          H`Alturas por extremo derecho: \(5,\,7,\,6,\,8,\,6,\,5,\,4,\,6\). Suma:
          \[R_8=5+7+6+8+6+5+4+6\]`,
          H`Sumando: \(5+7+6+8+6+5+4+6=47\). Por lo tanto \(R_8=47\;u^2\).`,
          H`El valor exacto de \(\int_0^8 f(x)\,dx\) (que no conocemos, pues solo tenemos datos tabulados) debe estar razonablemente cerca de estas dos aproximaciones; de hecho, para funciones que no son monótonas en todo el intervalo, ni \(L_n\) ni \(R_n\) acotan necesariamente el valor exacto por un solo lado, pero ambas siguen siendo estimaciones razonables cuando \(\Delta x\) es pequeño.`
        ],
        answer: H`\(L_8=44\), \(R_8=47\) (unidades de área)`
      },
      {
        title: 'Evaluación directa con Newton-Leibniz: potencia negativa',
        statement: H`Evaluar \(\displaystyle\int_1^4 \frac{1}{x^2}\,dx\) e interpretar el resultado como área.`,
        steps: [
          H`El integrando es \(f(x)=\dfrac{1}{x^2}=x^{-2}\), continuo en \([1,4]\) (no se anula el denominador en ese intervalo), así que la integral existe y podemos usar la parte 2 del TFC: \(\int_a^b f(x)\,dx=F(b)-F(a)\) con \(F'(x)=f(x)\).`,
          H`Buscamos una antiderivada de \(x^{-2}\). Recordando la regla de derivación de un cociente simple: \(\left(-\dfrac1x\right)'=\dfrac{1}{x^2}\). Entonces \(F(x)=-\dfrac1x\) es una antiderivada válida.`,
          H`Aplicamos Newton-Leibniz: \[\int_1^4 \frac{1}{x^2}\,dx=\left[-\frac1x\right]_1^4=F(4)-F(1)\]`,
          H`Evaluamos en el límite superior: \(F(4)=-\dfrac14\).`,
          H`Evaluamos en el límite inferior: \(F(1)=-\dfrac11=-1\).`,
          H`Restamos: \(F(4)-F(1)=-\dfrac14-(-1)=-\dfrac14+1=\dfrac34\).`,
          H`Como \(f(x)=\dfrac1{x^2}>0\) en todo \([1,4]\), el resultado se interpreta directamente como el área de la región bajo la curva \(y=1/x^2\), sobre el eje \(x\), entre \(x=1\) y \(x=4\): esa área es \(\dfrac34\,u^2\).`
        ],
        answer: H`\(\displaystyle\int_1^4 \frac{1}{x^2}\,dx=\frac34\)`
      },
      {
        title: 'Una integral trigonométrica que se anula',
        statement: H`Evaluar \(\displaystyle\int_0^{\pi} \cos x\,dx\) e interpretar geométricamente por qué el resultado no es el área de la región sombreada.`,
        steps: [
          H`El integrando \(f(x)=\cos x\) es continuo en \([0,\pi]\), así que aplicamos Newton-Leibniz.`,
          H`Necesitamos \(F\) tal que \(F'(x)=\cos x\). Recordando derivadas trigonométricas: \(\dfrac{d}{dx}(\operatorname{sen} x)=\cos x\), luego \(F(x)=\operatorname{sen} x\).`,
          H`Aplicamos la fórmula: \[\int_0^{\pi}\cos x\,dx=\big[\operatorname{sen} x\big]_0^{\pi}=\operatorname{sen}(\pi)-\operatorname{sen}(0)\]`,
          H`Evaluamos: \(\operatorname{sen}(\pi)=0\) y \(\operatorname{sen}(0)=0\).`,
          H`Restamos: \(0-0=0\). Entonces \(\int_0^{\pi}\cos x\,dx=0\).`,
          H`Geométricamente, \(\cos x\ge 0\) en \([0,\pi/2]\) y \(\cos x\le 0\) en \([\pi/2,\pi]\); por simetría de la curva coseno alrededor de \(x=\pi/2\), ambas regiones tienen exactamente la misma área, pero con signos opuestos en la integral, de modo que se cancelan. El área geométrica total (usando \(|\cos x|\)) no sería cero, pero la integral con signo sí lo es.`
        ],
        answer: H`\(\displaystyle\int_0^{\pi}\cos x\,dx = 0\)`
      },
      {
        title: 'Expandir, aplicar linealidad y Newton-Leibniz',
        statement: H`Evaluar \(\displaystyle\int_0^1 x(x^2+2)^2\,dx\).`,
        steps: [
          H`El integrando no tiene una antiderivada evidente "a simple vista" porque es un producto; conviene primero expandir la potencia \((x^2+2)^2=x^4+4x^2+4\), y luego multiplicar por \(x\): \(x(x^4+4x^2+4)=x^5+4x^3+4x\).`,
          H`Reescribimos la integral como suma, lista para aplicar linealidad: \[\int_0^1 x(x^2+2)^2\,dx=\int_0^1\left(x^5+4x^3+4x\right)dx\]`,
          H`Aplicamos la propiedad de linealidad (integral de una suma, constante que sale de la integral) y la regla de la potencia para antiderivadas (\(\int x^n dx=\frac{x^{n+1}}{n+1}\)): \[\int x^5dx+4\int x^3dx+4\int x\,dx=\frac{x^6}{6}+4\cdot\frac{x^4}{4}+4\cdot\frac{x^2}{2}+c=\frac{x^6}{6}+x^4+2x^2+c\]`,
          H`Verificamos derivando: \(\left(\dfrac{x^6}{6}+x^4+2x^2\right)'=x^5+4x^3+4x=x(x^4+4x^2+4)=x(x^2+2)^2\). Coincide con el integrando original, así que la antiderivada \(F(x)=\dfrac{x^6}{6}+x^4+2x^2\) es correcta.`,
          H`Aplicamos Newton-Leibniz con esta antiderivada (la constante \(c\) no hace falta para la integral definida): \[\int_0^1 x(x^2+2)^2\,dx=\left[\frac{x^6}{6}+x^4+2x^2\right]_0^1=F(1)-F(0)\]`,
          H`Evaluamos: \(F(1)=\dfrac16+1+2=\dfrac16+3=\dfrac{19}{6}\); \(F(0)=0\).`,
          H`Restamos: \(\dfrac{19}{6}-0=\dfrac{19}{6}\). Este valor es también el área bajo la curva, pues \(x(x^2+2)^2\ge 0\) para \(x\in[0,1]\).`
        ],
        answer: H`\(\displaystyle\int_0^1 x(x^2+2)^2\,dx=\frac{19}{6}\)`
      },
      {
        title: 'Región con cambio de signo: dos triángulos',
        statement: H`Evaluar \(\displaystyle\int_0^3 (2-x)\,dx\) usando geometría e interpretar el resultado.`,
        steps: [
          H`El integrando \(f(x)=2-x\) es una recta. Su gráfica corta al eje \(x\) donde \(2-x=0\), es decir en \(x=2\). Como \(2\) está dentro del intervalo \([0,3]\), la función cambia de signo: es positiva en \([0,2]\) y negativa en \([2,3]\).`,
          H`Usamos la propiedad de aditividad del intervalo (propiedad 4) para separar la integral en los dos tramos de signo constante: \[\int_0^3(2-x)\,dx=\int_0^2(2-x)\,dx+\int_2^3(2-x)\,dx\]`,
          H`En \([0,2]\) la región es un triángulo de base \(b=2\) (de \(x=0\) a \(x=2\)) y altura \(h=f(0)=2\). Su área es \(A_{T_1}=\dfrac12\cdot 2\cdot 2=2\). Como \(f\ge0\) allí, \(\int_0^2(2-x)\,dx=+2\).`,
          H`En \([2,3]\) la región es un triángulo de base \(b=1\) (de \(x=2\) a \(x=3\)) y altura \(h=|f(3)|=1\). Su área es \(A_{T_2}=\dfrac12\cdot1\cdot1=\dfrac12\). Como \(f\le 0\) allí, \(\int_2^3(2-x)\,dx=-\dfrac12\).`,
          H`Sumamos con signo: \[\int_0^3(2-x)\,dx=2+\left(-\frac12\right)=\frac32\]`,
          H`Interpretación: la integral no es el área geométrica total de la región (que sería \(2+\tfrac12=\tfrac52\)); es la <em>diferencia</em> entre el área sobre el eje y el área bajo el eje.`
        ],
        answer: H`\(\displaystyle\int_0^3(2-x)\,dx=\frac32\)`
      },
      {
        title: 'Área de un cuarto de círculo mediante reconocimiento geométrico',
        statement: H`Evaluar \(\displaystyle\int_0^3 \sqrt{9-(x-3)^2}\,dx\).`,
        steps: [
          H`El integrando es \(y=\sqrt{9-(x-3)^2}\) con \(y\ge0\). Elevando ambos miembros al cuadrado: \(y^2=9-(x-3)^2\), es decir \((x-3)^2+y^2=9=3^2\): es la ecuación de una circunferencia de centro \((3,0)\) y radio \(3\). Como se exige \(y\ge0\), la curva es solo la <strong>semicircunferencia superior</strong>.`,
          H`Analizamos los límites de integración: \(x\) va de \(0\) a \(3\), que es exactamente la mitad izquierda del diámetro de la circunferencia (el diámetro completo va de \(x=0\) a \(x=6\), pues el centro está en \(x=3\) y el radio es \(3\)).`,
          H`Por lo tanto la región es exactamente un <strong>cuarto de círculo</strong> de radio \(3\) (mitad de la semicircunferencia superior).`,
          H`El área de un círculo completo de radio \(r\) es \(A_C=\pi r^2\); un cuarto de círculo tiene área \(\dfrac14\pi r^2\).`,
          H`Sustituyendo \(r=3\): \[\int_0^3\sqrt{9-(x-3)^2}\,dx=\frac14\pi(3)^2=\frac{9}{4}\pi\]`,
          H`Como el integrando es no negativo en todo el intervalo, este valor es simultáneamente la integral y el área geométrica de la región.`
        ],
        answer: H`\(\displaystyle\int_0^3\sqrt{9-(x-3)^2}\,dx=\frac{9\pi}{4}\)`
      },
      {
        title: 'TFC parte 1 con límite superior compuesto (regla de la cadena)',
        statement: H`Sea \(g(x)=\displaystyle\int_1^{x^2}\sqrt{1+t^3}\,dt\). Hallar \(g'(x)\).`,
        steps: [
          H`El límite superior de la integral no es simplemente \(x\), sino la función compuesta \(u(x)=x^2\). Escribimos \(g(x)=F\big(u(x)\big)\), donde \(F(u)=\displaystyle\int_1^{u}\sqrt{1+t^3}\,dt\).`,
          H`Por la parte 1 del TFC aplicada a \(F\): \(F'(u)=\sqrt{1+u^3}\) (se sustituye la variable de integración \(t\) por el límite superior \(u\)).`,
          H`Como \(g(x)=F(u(x))\) es una composición, aplicamos la regla de la cadena: \(g'(x)=F'(u(x))\cdot u'(x)\).`,
          H`Calculamos \(u'(x)\): si \(u(x)=x^2\), entonces \(u'(x)=2x\).`,
          H`Sustituimos \(u(x)=x^2\) en \(F'(u)=\sqrt{1+u^3}\): obtenemos \(F'(u(x))=\sqrt{1+(x^2)^3}=\sqrt{1+x^6}\).`,
          H`Multiplicamos por \(u'(x)\): \[g'(x)=\sqrt{1+x^6}\cdot 2x\]`
        ],
        answer: H`\(g'(x)=2x\sqrt{1+x^6}\)`
      }
    ],
    exercises: [
      {
        id: 's1e01', level: 1, type: 'num',
        q: H`Evaluar \(\displaystyle\int_2^2 (x^3-3x+1)\,dx\) sin efectuar ningún cálculo de antiderivadas.`,
        hint: H`¿Qué dice la propiedad 1 (límites de integración iguales) sobre el área de la región?`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la situación.</strong> Los límites de integración son iguales: \(a=b=2\). Antes de pensar en calcular una antiderivada, conviene revisar si alguna propiedad de la integral definida resuelve el problema directamente.</p></div>
        <div class="step"><p><strong>Aplicar la propiedad de límites iguales.</strong> La propiedad 1 establece que, para cualquier función continua \(f\), integrar entre un punto y sí mismo da cero, sin importar la expresión de \(f\):</p>$$\int_a^a f(x)\,dx = 0$$</div>
        <div class="step"><p><strong>Interpretación geométrica.</strong> La región bajo la curva entre \(x=2\) y \(x=2\) tiene ancho cero (es un segmento vertical, no una franja), así que no puede tener área; esto confirma el resultado algebraico anterior.</p></div>
        <div class="step"><p><strong>Concluir.</strong> Como \(a=b=2\), sustituyendo directamente en la propiedad 1:</p>$$\int_2^2\left(x^3-3x+1\right)dx = 0$$</div>
        </div>
        <div class="final">\(\displaystyle\int_2^2(x^3-3x+1)\,dx=0\)</div>`,
        answer: '0', verify: { kind: 'int', f: 'x^3-3*x+1', v: 'x', a: '2', b: '2' }
      },
      {
        id: 's1e02', level: 1, type: 'num',
        q: H`Evaluar \(\displaystyle\int_0^5 4\,dx\) interpretando la integral como el área de un rectángulo.`,
        hint: H`Una función constante \(f(x)=k\) determina un rectángulo de base \((b-a)\) y altura \(k\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer la región.</strong> El integrando es la función constante \(f(x)=4\); su gráfica es una recta horizontal, así que la región bajo ella en \([0,5]\) es un rectángulo.</p></div>
        <div class="step"><p><strong>Identificar base y altura.</strong> La base del rectángulo es la longitud del intervalo, \(b-a=5-0=5\); la altura es el valor constante de la función, \(4\).</p></div>
        <div class="step"><p><strong>Calcular el área.</strong> El área de un rectángulo es base por altura:</p>$$A = 4\cdot 5 = 20$$</div>
        <div class="step"><p><strong>Concluir.</strong> Como \(f(x)=4\ge0\) en todo el intervalo, la integral coincide exactamente con esta área.</p></div>
        </div>
        <div class="final">\(\displaystyle\int_0^5 4\,dx=20\)</div>`,
        answer: '20', verify: { kind: 'int', f: '4', v: 'x', a: '0', b: '5' }
      },
      {
        id: 's1e03', level: 1, type: 'num',
        q: H`Si se sabe que \(\displaystyle\int_1^5 f(x)\,dx=7\), hallar \(\displaystyle\int_5^1 f(x)\,dx\).`,
        hint: H`Propiedad 2: invertir los límites de integración cambia el signo de la integral.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la propiedad aplicable.</strong> Se pide la integral con los límites invertidos respecto al dato conocido, así que corresponde usar la propiedad 2 (inversión de límites de integración).</p></div>
        <div class="step"><p><strong>Enunciar la propiedad.</strong> Invertir los límites de integración cambia el signo de la integral, sin alterar su valor absoluto:</p>$$\int_5^1 f(x)\,dx = -\int_1^5 f(x)\,dx$$</div>
        <div class="step"><p><strong>Sustituir el dato conocido.</strong> Como se sabe que \(\int_1^5 f(x)\,dx=7\):</p>$$\int_5^1 f(x)\,dx = -7$$</div>
        </div>
        <div class="final">\(\displaystyle\int_5^1 f(x)\,dx=-7\)</div>`,
        answer: '-7'
      },
      {
        id: 's1e04', level: 1, type: 'num',
        q: H`Evaluar \(\displaystyle\int_0^4 \frac{x}{2}\,dx\) reconociendo la región como un triángulo.`,
        hint: H`\(f(x)=x/2\) es una recta que pasa por el origen; en \([0,4]\) la región es un triángulo rectángulo.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer la región.</strong> \(f(x)=x/2\) es una recta que pasa por el origen (\(f(0)=0\)), así que la región bajo ella en \([0,4]\) es un triángulo rectángulo.</p></div>
        <div class="step"><p><strong>Identificar base y altura.</strong> La base es \(b=4-0=4\); la altura es el valor de la función en el extremo derecho, \(h=f(4)=4/2=2\).</p></div>
        <div class="step"><p><strong>Calcular el área.</strong> El área de un triángulo es la mitad del producto base por altura:</p>$$A=\frac12\cdot 4\cdot 2 = 4$$</div>
        <div class="step"><p><strong>Concluir.</strong> Como \(f(x)=x/2\ge0\) en \([0,4]\), la integral coincide con esta área.</p></div>
        </div>
        <div class="final">\(\displaystyle\int_0^4\frac{x}{2}\,dx=4\)</div>`,
        answer: '4', verify: { kind: 'int', f: 'x/2', v: 'x', a: '0', b: '4' }
      },
      {
        id: 's1e05', level: 1, type: 'num',
        q: H`Evaluar \(\displaystyle\int_0^{\pi/2} \operatorname{sen} x\,dx\) mediante el TFC.`,
        hint: H`Busca \(F\) tal que \(F'(x)=\operatorname{sen} x\). Recuerda que \(\dfrac{d}{dx}(-\cos x)=\operatorname{sen} x\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando \(\operatorname{sen} x\) es continuo en \([0,\pi/2]\), y conocemos de memoria una función cuya derivada es \(\operatorname{sen} x\); aplicamos directamente la parte 2 del TFC (Newton-Leibniz).</p></div>
        <div class="step"><p><strong>Encontrar una antiderivada.</strong> Recordando derivadas trigonométricas, \(\dfrac{d}{dx}(-\cos x)=\operatorname{sen} x\), así que \(F(x)=-\cos x\) es una antiderivada válida.</p></div>
        <div class="step"><p><strong>Aplicar Newton-Leibniz.</strong></p>$$\int_0^{\pi/2}\operatorname{sen} x\,dx=\big[-\cos x\big]_0^{\pi/2}=-\cos\frac{\pi}{2}-(-\cos 0)$$</div>
        <div class="step"><p><strong>Evaluar y restar.</strong> \(\cos(\pi/2)=0\) y \(\cos 0=1\), luego:</p>$$-0-(-1)=1$$</div>
        </div>
        <div class="final">\(\displaystyle\int_0^{\pi/2}\operatorname{sen} x\,dx=1\)</div>`,
        answer: '1', verify: { kind: 'int', f: 'sin(x)', v: 'x', a: '0', b: 'pi/2' }
      },
      {
        id: 's1e06', level: 2, type: 'num',
        q: H`Para \(f(x)=x^2\) en \([0,4]\) con \(n=4\) subintervalos, calcular la suma de Riemann por extremo izquierdo \(L_4\).`,
        hint: H`\(\Delta x=(4-0)/4=1\). Usa como alturas \(f(0),f(1),f(2),f(3)\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Calcular el ancho de los subintervalos.</strong></p>$$\Delta x=\frac{4-0}{4}=1$$</div>
        <div class="step"><p><strong>Identificar los extremos izquierdos.</strong> Los 4 subintervalos son \([0,1],[1,2],[2,3],[3,4]\); sus extremos izquierdos son \(x=0,1,2,3\).</p></div>
        <div class="step"><p><strong>Calcular las alturas.</strong> Evaluamos \(f(x)=x^2\) en cada extremo izquierdo:</p>$$f(0)=0,\quad f(1)=1,\quad f(2)=4,\quad f(3)=9$$</div>
        <div class="step"><p><strong>Sumar la suma de Riemann.</strong> Como \(\Delta x=1\), la suma es simplemente la suma de las alturas:</p>$$L_4=(0+1+4+9)\cdot1=14$$</div>
        <div class="step"><p><strong>Interpretar.</strong> El valor exacto de la integral es \(\int_0^4x^2dx=64/3\approx21.33\); como \(f\) es creciente, la suma por extremo izquierdo subestima ese valor, de acuerdo con \(L_4=14<21.33\).</p></div>
        </div>
        <div class="final">\(L_4=14\)</div>`,
        answer: '14'
      },
      {
        id: 's1e07', level: 2, type: 'num',
        q: H`Para la misma función \(f(x)=x^2\) en \([0,4]\) con \(n=4\), calcular la suma de Riemann por extremo derecho \(R_4\).`,
        hint: H`Usa como alturas \(f(1),f(2),f(3),f(4)\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reutilizar el ancho ya calculado.</strong> Con \(n=4\) en \([0,4]\), \(\Delta x=1\) (mismo cálculo que en el extremo izquierdo).</p></div>
        <div class="step"><p><strong>Identificar los extremos derechos.</strong> En los subintervalos \([0,1],[1,2],[2,3],[3,4]\), los extremos derechos son \(x=1,2,3,4\).</p></div>
        <div class="step"><p><strong>Calcular las alturas.</strong></p>$$f(1)=1,\quad f(2)=4,\quad f(3)=9,\quad f(4)=16$$</div>
        <div class="step"><p><strong>Sumar la suma de Riemann.</strong></p>$$R_4=(1+4+9+16)\cdot1=30$$</div>
        <div class="step"><p><strong>Interpretar y comparar.</strong> Como \(f\) es creciente, la suma por extremo derecho sobreestima el valor exacto \(64/3\approx21.33\); en efecto \(L_4=14<64/3<R_4=30\), lo que también sirve como comprobación cruzada de ambos cálculos.</p></div>
        </div>
        <div class="final">\(R_4=30\)</div>`,
        answer: '30'
      },
      {
        id: 's1e08', level: 2, type: 'num',
        q: H`Evaluar \(\displaystyle\int_{-3}^{3} x^5\,dx\) usando la paridad del integrando (sin calcular antiderivadas).`,
        hint: H`Comprueba que \(f(x)=x^5\) es una función impar: \(f(-x)=-f(x)\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El intervalo \([-3,3]\) es simétrico respecto al origen, así que antes de pensar en antiderivadas conviene comprobar la paridad del integrando.</p></div>
        <div class="step"><p><strong>Comprobar la paridad.</strong> Evaluamos \(f(-x)\) para \(f(x)=x^5\):</p>$$f(-x)=(-x)^5=-x^5=-f(x)$$<p>Como \(f(-x)=-f(x)\), la función es impar.</p></div>
        <div class="step"><p><strong>Aplicar la propiedad de simetría.</strong> Para toda función impar en un intervalo simétrico \([-a,a]\):</p>$$\int_{-a}^{a} f(x)\,dx = 0$$</div>
        <div class="step"><p><strong>Concluir.</strong> Con \(a=3\):</p>$$\int_{-3}^{3} x^5\,dx = 0$$</div>
        </div>
        <div class="final">\(\displaystyle\int_{-3}^{3} x^5\,dx=0\)</div>`,
        answer: '0', verify: { kind: 'int', f: 'x^5', v: 'x', a: '-3', b: '3' }
      },
      {
        id: 's1e09', level: 2, type: 'num',
        q: H`Evaluar \(\displaystyle\int_{-2}^{2}\sqrt{4-x^2}\,dx\) reconociendo la región.`,
        hint: H`\(y=\sqrt{4-x^2}\) es la mitad superior de una circunferencia. ¿De qué radio? ¿Qué fracción de círculo cubre todo el intervalo \([-2,2]\)?`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer la curva.</strong> Elevando al cuadrado \(y=\sqrt{4-x^2}\) (con \(y\ge0\)) se obtiene \(x^2+y^2=4=2^2\): una circunferencia de centro el origen y radio \(2\). La condición \(y\ge0\) deja solo la semicircunferencia superior.</p></div>
        <div class="step"><p><strong>Analizar los límites de integración.</strong> El intervalo \([-2,2]\) es exactamente el diámetro completo de la circunferencia (de \(-2\) a \(2\)), así que la región es un <strong>semicírculo completo</strong> de radio \(2\).</p></div>
        <div class="step"><p><strong>Aplicar la fórmula del área.</strong> El área de un semicírculo de radio \(r\) es \(\tfrac12\pi r^2\); con \(r=2\):</p>$$A=\frac12\pi(2)^2=2\pi$$</div>
        <div class="step"><p><strong>Concluir.</strong> Como el integrando es no negativo en todo el intervalo, la integral coincide con esta área.</p></div>
        </div>
        <div class="final">\(\displaystyle\int_{-2}^{2}\sqrt{4-x^2}\,dx=2\pi\)</div>`,
        answer: '2*pi', verify: { kind: 'int', f: 'sqrt(4-x^2)', v: 'x', a: '-2', b: '2' }
      },
      {
        id: 's1e10', level: 2, type: 'num',
        q: H`Evaluar \(\displaystyle\int_0^4 (3-x)\,dx\) separando la región en los tramos donde \(f\ge0\) y \(f\le0\).`,
        hint: H`\(f(x)=3-x\) se anula en \(x=3\), que está dentro de \([0,4]\). Divide el intervalo en \([0,3]\) y \([3,4]\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Localizar el cambio de signo.</strong> \(f(x)=3-x\) se anula en \(x=3\), que está dentro de \([0,4]\); \(f\ge0\) en \([0,3]\) y \(f\le0\) en \([3,4]\).</p></div>
        <div class="step"><p><strong>Separar el intervalo (propiedad 4).</strong></p>$$\int_0^4(3-x)\,dx=\int_0^3(3-x)\,dx+\int_3^4(3-x)\,dx$$</div>
        <div class="step"><p><strong>Calcular el primer triángulo.</strong> En \([0,3]\) la región es un triángulo de base \(3\) y altura \(f(0)=3\): área \(=\tfrac12\cdot3\cdot3=4.5\). Como \(f\ge0\) allí, \(\int_0^3(3-x)\,dx=+4.5\).</p></div>
        <div class="step"><p><strong>Calcular el segundo triángulo.</strong> En \([3,4]\) la región es un triángulo de base \(1\) y altura \(|f(4)|=1\): área \(=\tfrac12\cdot1\cdot1=0.5\). Como \(f\le0\) allí, \(\int_3^4(3-x)\,dx=-0.5\).</p></div>
        <div class="step"><p><strong>Sumar con signo.</strong></p>$$\int_0^4(3-x)\,dx=4.5+(-0.5)=4$$</div>
        </div>
        <div class="final">\(\displaystyle\int_0^4(3-x)\,dx=4\)</div>`,
        answer: '4', verify: { kind: 'int', f: '3-x', v: 'x', a: '0', b: '4' }
      },
      {
        id: 's1e11', level: 2, type: 'set',
        q: H`Usando la propiedad de comparación (teorema de acotación), hallar las cotas inferior y superior de \(\displaystyle\int_1^3 x^2\,dx\) sin calcular la integral. Escribe primero la cota inferior \(m(b-a)\) y luego la superior \(M(b-a)\).`,
        hint: H`Halla el mínimo \(m\) y el máximo \(M\) de \(f(x)=x^2\) en \([1,3]\) (\(f\) es creciente allí) y aplica \(m(b-a)\le\int_a^bf\le M(b-a)\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la herramienta.</strong> Se pide una cota sin calcular la integral: corresponde al teorema de acotación (propiedad de comparación 5), que requiere el mínimo y el máximo de \(f\) en el intervalo.</p></div>
        <div class="step"><p><strong>Hallar el mínimo y el máximo.</strong> \(f(x)=x^2\) es creciente en \([1,3]\) (su derivada \(2x>0\) allí), así que su mínimo es \(m=f(1)=1\) y su máximo es \(M=f(3)=9\).</p></div>
        <div class="step"><p><strong>Aplicar el teorema de acotación.</strong></p>$$m(b-a)\le\int_a^b f(x)\,dx\le M(b-a)$$<p>con \(b-a=3-1=2\).</p></div>
        <div class="step"><p><strong>Calcular ambas cotas.</strong></p>$$\text{cota inferior}=m(b-a)=1\cdot2=2, \qquad \text{cota superior}=M(b-a)=9\cdot2=18$$</div>
        <div class="step"><p><strong>Verificar razonabilidad.</strong> El valor exacto es \(\int_1^3x^2\,dx=26/3\approx8.67\), que efectivamente está entre \(2\) y \(18\), confirmando que las cotas son coherentes (aunque no ajustadas).</p></div>
        </div>
        <div class="final">Cota inferior \(=2\); cota superior \(=18\)</div>`,
        answer: ['2', '18'], label: 'Cotas inferior y superior (separadas por coma):'
      },
      {
        id: 's1e12', level: 2, type: 'func',
        q: H`Sea \(g(x)=\displaystyle\int_2^{x}\sqrt{t^2+5}\,dt\). Hallar \(g'(x)\).`,
        hint: H`Aplica directamente la parte 1 del TFC: el límite superior es \(x\) sin composición adicional.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer la forma.</strong> \(g(x)=\int_2^{x}\sqrt{t^2+5}\,dt\) tiene límite superior igual a \(x\) directamente, sin composición adicional, y el integrando \(f(t)=\sqrt{t^2+5}\) es continuo en todo \(\mathbb{R}\).</p></div>
        <div class="step"><p><strong>Aplicar la parte 1 del TFC.</strong> Cuando el límite superior es simplemente \(x\), la derivada de la integral es el propio integrando evaluado en \(x\):</p>$$g'(x)=f(x)$$</div>
        <div class="step"><p><strong>Sustituir el integrando.</strong></p>$$g'(x)=\sqrt{x^2+5}$$</div>
        </div>
        <div class="final">\(g'(x)=\sqrt{x^2+5}\)</div>`,
        ref: 'sqrt(x^2+5)', v: 'x'
      },
      {
        id: 's1e13', level: 2, type: 'num',
        q: H`Evaluar \(\displaystyle\int_0^2 (3x^2-4x+5)\,dx\) mediante Newton-Leibniz.`,
        hint: H`Integra término a término aplicando linealidad y la regla de la potencia.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando \(3x^2-4x+5\) es un polinomio continuo en \([0,2]\); aplicamos linealidad para hallar una antiderivada término a término y luego Newton-Leibniz.</p></div>
        <div class="step"><p><strong>Hallar una antiderivada.</strong></p>$$\int(3x^2-4x+5)\,dx=3\cdot\frac{x^3}{3}-4\cdot\frac{x^2}{2}+5x=x^3-2x^2+5x$$</div>
        <div class="step"><p><strong>Evaluar en el límite superior.</strong> Con \(F(x)=x^3-2x^2+5x\):</p>$$F(2)=8-8+10=10$$</div>
        <div class="step"><p><strong>Evaluar en el límite inferior.</strong></p>$$F(0)=0-0+0=0$$</div>
        <div class="step"><p><strong>Restar (Newton-Leibniz).</strong></p>$$\int_0^2(3x^2-4x+5)\,dx=F(2)-F(0)=10-0=10$$</div>
        </div>
        <div class="final">\(\displaystyle\int_0^2(3x^2-4x+5)\,dx=10\)</div>`,
        answer: '10', verify: { kind: 'int', f: '3*x^2-4*x+5', v: 'x', a: '0', b: '2' }
      },
      {
        id: 's1e14', level: 2, type: 'num',
        q: H`Evaluar \(\displaystyle\int_1^{e} \frac{1}{x}\,dx\).`,
        hint: H`La antiderivada de \(1/x\) es \(\ln|x|\). Recuerda que \(\ln e=1\) y \(\ln 1=0\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando \(1/x\) es continuo en \([1,e]\) (no se anula el denominador), así que aplicamos Newton-Leibniz.</p></div>
        <div class="step"><p><strong>Encontrar una antiderivada.</strong> Recordando la tabla, \(F(x)=\ln x\) es una antiderivada de \(1/x\) en \((0,\infty)\), pues \(F'(x)=1/x\).</p></div>
        <div class="step"><p><strong>Aplicar Newton-Leibniz.</strong></p>$$\int_1^e\frac1x\,dx=\big[\ln x\big]_1^e=\ln e-\ln 1$$</div>
        <div class="step"><p><strong>Evaluar y restar.</strong> \(\ln e=1\) y \(\ln 1=0\):</p>$$1-0=1$$</div>
        </div>
        <div class="final">\(\displaystyle\int_1^{e}\frac{1}{x}\,dx=1\)</div>`,
        answer: '1', verify: { kind: 'int', f: '1/x', v: 'x', a: '1', b: 'e' }
      },
      {
        id: 's1e15', level: 2, type: 'choice',
        q: H`¿Cuál de las siguientes integrales vale cero <strong>solo por razones de simetría</strong>, sin necesidad de calcular ninguna antiderivada?`,
        hint: H`Analiza la paridad de cada integrando: par·par=par, impar·impar=par, par·impar=impar. Solo un integrando impar sobre un intervalo simétrico garantiza integral cero.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar el criterio.</strong> En un intervalo simétrico \([-3,3]\), la integral vale cero <em>garantizadamente</em> solo cuando el integrando es una función <strong>impar</strong>; para reconocer la paridad de un producto usamos la regla par·par = par, impar·impar = par, par·impar = impar.</p></div>
        <div class="step"><p><strong>Analizar la opción \(x^2\cos x\).</strong> Es producto de par (\(x^2\)) por par (\(\cos x\)): el resultado es par. Una función par no da integral cero en general (por ejemplo \(\int_{-3}^3x^2\,dx\ne0\)).</p></div>
        <div class="step"><p><strong>Analizar la opción \(x\operatorname{sen} x\).</strong> Es producto de impar (\(x\)) por impar (\(\operatorname{sen} x\)): el resultado es par. Tampoco garantiza integral cero.</p></div>
        <div class="step"><p><strong>Analizar la opción \(x^3\cos x\).</strong> Es producto de impar (\(x^3\)) por par (\(\cos x\)): el resultado es <strong>impar</strong>. Toda función impar integrada en un intervalo simétrico da cero: esta es la opción correcta.</p></div>
        <div class="step"><p><strong>Analizar la opción \(\cos x\).</strong> Es una función par por sí sola; no garantiza integral cero (de hecho \(\int_{-3}^3\cos x\,dx=2\operatorname{sen} 3\ne0\)).</p></div>
        </div>
        <div class="final">\(\displaystyle\int_{-3}^{3} x^3\cos x\,dx=0\) (opción correcta: \(x^3\cos x\), producto impar·par = impar)</div>`,
        options: [
          H`\(\displaystyle\int_{-3}^{3} x^2\cos x\,dx\)`,
          H`\(\displaystyle\int_{-3}^{3} x\operatorname{sen} x\,dx\)`,
          H`\(\displaystyle\int_{-3}^{3} x^3\cos x\,dx\)`,
          H`\(\displaystyle\int_{-3}^{3} \cos x\,dx\)`
        ],
        correct: 2
      },
      {
        id: 's1e16', level: 2, type: 'choice',
        q: H`Si \(f(x)\le g(x)\) para todo \(x\in[a,b]\), ¿qué relación cumplen necesariamente las integrales definidas de ambas funciones en \([a,b]\)?`,
        hint: H`Es la propiedad de comparación 5-iii de la conferencia.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la propiedad.</strong> La hipótesis "\(f(x)\le g(x)\) para todo \(x\in[a,b]\)" corresponde exactamente a la propiedad de comparación de la integral definida.</p></div>
        <div class="step"><p><strong>Enunciar la propiedad.</strong> Si \(f(x)\le g(x)\) en todo el intervalo, la desigualdad se traslada a las integrales en el mismo sentido:</p>$$\int_a^b f(x)\,dx\le\int_a^b g(x)\,dx$$</div>
        <div class="step"><p><strong>Descartar las demás opciones.</strong> La desigualdad no puede invertirse (\(\ge\)) porque contradiría la propiedad; tampoco hay razón para que sean siempre iguales, ni la relación queda indeterminada, pues la propiedad garantiza precisamente esta comparación.</p></div>
        </div>
        <div class="final">\(\displaystyle\int_a^b f(x)\,dx\le\int_a^b g(x)\,dx\)</div>`,
        options: [
          H`\(\displaystyle\int_a^b f(x)\,dx \ge \int_a^b g(x)\,dx\)`,
          H`\(\displaystyle\int_a^b f(x)\,dx = \int_a^b g(x)\,dx\)`,
          H`\(\displaystyle\int_a^b f(x)\,dx \le \int_a^b g(x)\,dx\)`,
          H`No puede determinarse ninguna relación entre ambas integrales.`
        ],
        correct: 2
      },
      {
        id: 's1e17', level: 3, type: 'num',
        q: H`Evaluar \(\displaystyle\int_0^6 |x-3|\,dx\) mediante geometría (dos triángulos).`,
        hint: H`\(|x-3|\) se anula en \(x=3\); en \([0,3]\) coincide con \(3-x\) y en \([3,6]\) con \(x-3\). Ambas son rectas.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Localizar el punto de cambio.</strong> El valor absoluto \(|x-3|\) cambia de expresión en \(x=3\): en \([0,3]\), \(|x-3|=3-x\); en \([3,6]\), \(|x-3|=x-3\).</p></div>
        <div class="step"><p><strong>Separar el intervalo (propiedad 4).</strong></p>$$\int_0^6|x-3|\,dx=\int_0^3(3-x)\,dx+\int_3^6(x-3)\,dx$$</div>
        <div class="step"><p><strong>Calcular el primer triángulo.</strong> En \([0,3]\): base \(3\), altura \(f(0)=3\), área \(=\tfrac12\cdot3\cdot3=4.5\).</p></div>
        <div class="step"><p><strong>Calcular el segundo triángulo.</strong> En \([3,6]\): base \(3\), altura \(f(6)=3\), área \(=\tfrac12\cdot3\cdot3=4.5\).</p></div>
        <div class="step"><p><strong>Sumar.</strong> Como \(|x-3|\ge0\) en todo el intervalo, ambas áreas se suman (no se restan, a diferencia de una integral sin valor absoluto):</p>$$\int_0^6|x-3|\,dx=4.5+4.5=9$$</div>
        </div>
        <div class="final">\(\displaystyle\int_0^6|x-3|\,dx=9\)</div>`,
        answer: '9', verify: { kind: 'int', f: 'abs(x-3)', v: 'x', a: '0', b: '6' }
      },
      {
        id: 's1e18', level: 3, type: 'num',
        q: H`Si \(\displaystyle\int_0^5 f(x)\,dx=10\) y \(\displaystyle\int_3^5 f(x)\,dx=4\), hallar \(\displaystyle\int_0^3 f(x)\,dx\).`,
        hint: H`Usa la propiedad de aditividad: \(\int_0^5f=\int_0^3f+\int_3^5f\), y despeja.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la propiedad.</strong> Con \(0<3<5\), la propiedad de aditividad del intervalo permite descomponer la integral en \([0,5]\) como la suma de las integrales en \([0,3]\) y \([3,5]\).</p></div>
        <div class="step"><p><strong>Escribir la relación.</strong></p>$$\int_0^5f(x)\,dx=\int_0^3f(x)\,dx+\int_3^5f(x)\,dx$$</div>
        <div class="step"><p><strong>Sustituir los datos conocidos.</strong> \(\int_0^5f=10\) y \(\int_3^5f=4\):</p>$$10=\int_0^3f(x)\,dx+4$$</div>
        <div class="step"><p><strong>Despejar.</strong></p>$$\int_0^3f(x)\,dx=10-4=6$$</div>
        </div>
        <div class="final">\(\displaystyle\int_0^3 f(x)\,dx=6\)</div>`,
        answer: '6'
      },
      {
        id: 's1e19', level: 3, type: 'num',
        q: H`Calcular la suma de Riemann por punto medio \(M_4\) para \(f(x)=\dfrac1x\) en \([1,3]\) con \(n=4\) subintervalos. Redondea a 4 decimales.`,
        hint: H`\(\Delta x=0.5\); los puntos medios de los subintervalos \([1,1.5],[1.5,2],[2,2.5],[2.5,3]\) son \(1.25,\,1.75,\,2.25,\,2.75\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Calcular el ancho de los subintervalos.</strong></p>$$\Delta x=\frac{3-1}{4}=0.5$$</div>
        <div class="step"><p><strong>Identificar los puntos medios.</strong> Los subintervalos son \([1,1.5],[1.5,2],[2,2.5],[2.5,3]\); sus puntos medios son \(1.25,\;1.75,\;2.25,\;2.75\).</p></div>
        <div class="step"><p><strong>Calcular las alturas.</strong> Evaluamos \(f(x)=1/x\) en cada punto medio:</p>$$f(1.25)=0.8,\quad f(1.75)\approx0.5714,\quad f(2.25)\approx0.4444,\quad f(2.75)\approx0.3636$$</div>
        <div class="step"><p><strong>Sumar la suma de Riemann.</strong></p>$$M_4=(0.8+0.5714+0.4444+0.3636)\cdot0.5\approx2.1795\cdot0.5\approx1.0898$$</div>
        <div class="step"><p><strong>Interpretar.</strong> El valor exacto es \(\int_1^3\frac1x\,dx=\ln3\approx1.0986\); la suma por punto medio, incluso con solo \(n=4\) rectángulos, ya está muy cerca de ese valor, como es habitual en esta regla.</p></div>
        </div>
        <div class="final">\(M_4\approx1.0898\)</div>`,
        answer: '1.0898', tol: 0.001
      },
      {
        id: 's1e20', level: 3, type: 'num',
        q: H`Sea \(F(x)=\displaystyle\int_0^{x} t\sqrt{1+t^2}\,dt\). Hallar \(F'(2)\).`,
        hint: H`Por la parte 1 del TFC, \(F'(x)\) es simplemente el integrando evaluado en \(x\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer la forma.</strong> \(F(x)=\int_0^{x}t\sqrt{1+t^2}\,dt\) tiene límite superior igual a \(x\) sin composición adicional, así que aplicamos directamente la parte 1 del TFC.</p></div>
        <div class="step"><p><strong>Derivar.</strong></p>$$F'(x)=x\sqrt{1+x^2}$$</div>
        <div class="step"><p><strong>Evaluar en \(x=2\).</strong></p>$$F'(2)=2\sqrt{1+4}=2\sqrt5$$</div>
        </div>
        <div class="final">\(F'(2)=2\sqrt{5}\)</div>`,
        answer: '2*sqrt(5)'
      }
    ]
  });
})();
