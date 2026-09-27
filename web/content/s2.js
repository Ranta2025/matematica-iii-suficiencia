(function () {
  const H = String.raw;
  window.SESSIONS = window.SESSIONS || [];
  window.SESSIONS.push({
    id: 's2',
    order: 2,
    code: 'CE2',
    topic: 'Tema I · Cálculo integral',
    title: 'Integral indefinida: tablas, sustitución e integración por partes',
    short: 'Integral indefinida',
    goals: [
      'Reconocer el operador \\(\\int\\cdot\\,dx\\) como el cálculo de la familia de primitivas (antiderivadas) de una función, y explicar por qué aparece la constante "+C".',
      'Aplicar la linealidad de la integral indefinida y una tabla de integrales básicas para evaluar integrales directas.',
      'Decidir, ante una integral dada, qué estrategia usar primero: ensayo y error, transformación algebraica/trigonométrica, tabla directa, sustitución o integración por partes.',
      'Aplicar el método de sustitución (cambio de variable), incluyendo el cambio de límites cuando la integral es definida.',
      'Aplicar la integración por partes, incluyendo casos con partes repetidas y el caso cíclico (\\(e^x\\cos x\\)).',
      'Verificar el resultado de cualquier integral derivando la primitiva obtenida.'
    ],
    theory: [
      {
        h: 'La integral indefinida: familia de primitivas',
        html: H`<p>En la conferencia 1 usamos la fórmula de Newton-Leibniz, \(\int_a^b f(x)\,dx=F(b)-F(a)\), donde \(F\) es <strong>cualquier</strong> función tal que \(F'(x)=f(x)\). Esa función \(F\) se llama <strong>primitiva</strong> o <strong>antiderivada</strong> de \(f\).</p>
        <p>Si \(F\) es una primitiva de \(f\), entonces \(F(x)+c\) también lo es, para <em>cualquier</em> constante real \(c\), porque \(\big(F(x)+c\big)'=F'(x)+0=f(x)\). De hecho, se puede demostrar (usando el teorema del valor medio) que estas son <strong>todas</strong> las primitivas posibles: dos primitivas cualesquiera de la misma función difieren exactamente en una constante.</p>
        <p>Se usa el mismo símbolo \(\int\) de la integral definida, pero sin límites de integración, para representar esta <strong>familia completa</strong> de primitivas. Esa es la <strong>integral indefinida</strong>:</p>
        <div class="key">\[\int f(x)\,dx = F(x)+c \qquad \text{donde } F'(x)=f(x),\; c\in\mathbb{R}\]</div>
        <p><strong>¿Por qué "+c"?</strong> Porque \(\big(F(x)+c\big)'=F'(x)=f(x)\) para cualquier valor de \(c\): la derivada de una constante es cero, así que sumar cualquier constante a una primitiva produce otra primitiva válida. Omitir la constante sería describir solo <em>una</em> de las infinitas funciones cuya derivada es \(f\), no toda la familia.</p>
        <p><strong>Ejemplo:</strong> \(\displaystyle\int x^2\,dx=\dfrac{x^3}{3}+c\), porque \(F(x)=\dfrac{x^3}{3}\) cumple \(F'(x)=\dfrac{1}{3}\cdot 3x^2=x^2\).</p>
        <svg viewBox="0 0 400 240" width="100%" style="max-width:400px">
          <path d="M60,190 C120,80 200,60 320,70" stroke="var(--ink)" stroke-width="2.5" fill="none" />
          <path d="M60,190 C120,80 200,60 320,70" stroke="var(--muted)" stroke-width="2" fill="none" transform="translate(0,-40)" opacity="0.85" />
          <path d="M60,190 C120,80 200,60 320,70" stroke="var(--muted)" stroke-width="2" fill="none" transform="translate(0,40)" opacity="0.85" />
          <line x1="110" y1="150" x2="190" y2="90" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5,3" />
          <line x1="110" y1="110" x2="190" y2="50" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5,3" />
          <line x1="110" y1="190" x2="190" y2="130" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5,3" />
          <text x="325" y="78" font-size="12" fill="var(--ink)">F(x)</text>
          <text x="325" y="38" font-size="12" fill="var(--muted)">F(x)+c₁</text>
          <text x="325" y="118" font-size="12" fill="var(--muted)">F(x)−c₂</text>
        </svg>
        <p style="font-size:0.9em;color:var(--muted)">Tres primitivas de la misma función, desplazadas verticalmente. En cualquier abscisa fija, las rectas tangentes son paralelas: la pendiente (derivada) es la misma para toda la familia.</p>`
      },
      {
        h: 'Linealidad de la integral indefinida',
        html: H`<p>Igual que la integral definida, la integral indefinida es un operador lineal:</p>
        <div class="key">\[\int\big[f(x)+g(x)\big]\,dx=\int f(x)\,dx+\int g(x)\,dx\]
        \[\int c\cdot f(x)\,dx=c\int f(x)\,dx \qquad (c\text{ constante})\]</div>
        <p>Esto permite descomponer integrales de sumas o restas en integrales más simples, siempre que cada término, por separado, tenga una fórmula conocida. Es, junto con las transformaciones algebraicas previas, la primera herramienta que se intenta al enfrentar una integral nueva.</p>
        <div class="warn"><strong>Advertencia:</strong> la linealidad <em>no</em> se aplica al producto ni al cociente: en general \(\int f(x)g(x)\,dx\ne\left(\int f(x)\,dx\right)\left(\int g(x)\,dx\right)\). Para productos se necesitan transformaciones (expandir, identidades) o integración por partes; para cocientes, transformación algebraica o sustitución.</div>`
      },
      {
        h: 'Tabla de integrales básicas',
        html: H`<p>Estas fórmulas se obtienen "leyendo al revés" las reglas de derivación del Cálculo diferencial. Debes reconocerlas de memoria: son la base de todo lo demás.</p>
        <table class="tbl">
          <thead><tr><th>Integral</th><th>Resultado</th></tr></thead>
          <tbody>
            <tr><td>\(\displaystyle\int u^n\,du\) \((n\ne-1)\)</td><td>\(\dfrac{u^{n+1}}{n+1}+c\)</td></tr>
            <tr><td>\(\displaystyle\int \frac{1}{u}\,du\)</td><td>\(\ln|u|+c\)</td></tr>
            <tr><td>\(\displaystyle\int e^{u}\,du\)</td><td>\(e^{u}+c\)</td></tr>
            <tr><td>\(\displaystyle\int a^{u}\,du\) \((a>0,\,a\ne1)\)</td><td>\(\dfrac{a^{u}}{\ln a}+c\)</td></tr>
            <tr><td>\(\displaystyle\int \operatorname{sen} u\,du\)</td><td>\(-\cos u+c\)</td></tr>
            <tr><td>\(\displaystyle\int \cos u\,du\)</td><td>\(\operatorname{sen} u+c\)</td></tr>
            <tr><td>\(\displaystyle\int \sec^2 u\,du\)</td><td>\(\tan u+c\)</td></tr>
            <tr><td>\(\displaystyle\int \csc^2 u\,du\)</td><td>\(-\cot u+c\)</td></tr>
            <tr><td>\(\displaystyle\int \sec u\tan u\,du\)</td><td>\(\sec u+c\)</td></tr>
            <tr><td>\(\displaystyle\int \csc u\cot u\,du\)</td><td>\(-\csc u+c\)</td></tr>
            <tr><td>\(\displaystyle\int \frac{du}{1+u^2}\)</td><td>\(\arctan u+c\)</td></tr>
            <tr><td>\(\displaystyle\int \frac{du}{\sqrt{1-u^2}}\)</td><td>\(\arcsen u+c\)</td></tr>
            <tr><td>\(\displaystyle\int \frac{du}{\sqrt{a^2-u^2}}\)</td><td>\(\arcsen\dfrac{u}{a}+c\)</td></tr>
          </tbody>
        </table>
        <p>En estas fórmulas, \(u\) puede ser la variable original \(x\) o (como veremos con la sustitución) una función de \(x\); en ese caso, \(du\) debe aparecer efectivamente en el integrando, no solo \(u\).</p>
        <div class="note">El formulario completo del texto básico incluye muchas más reglas (potencias de funciones trigonométricas, combinaciones con exponenciales, etc.). Las de esta tabla son las que debes reconocer sin consultar nada, porque son la base para construir todo el resto mediante sustitución y por partes.</div>`
      },
      {
        h: 'Estrategia para decidir qué método usar',
        html: H`<p>Ante una integral nueva, sigue este orden de decisión (resumen de la estrategia del curso):</p>
        <ol>
          <li><strong>Ensayo y error.</strong> ¿Reconoces de memoria, del Cálculo diferencial, una función cuya derivada sea exactamente el integrando? Si es así, ya tienes la primitiva.</li>
          <li><strong>Transformar en suma.</strong> ¿El integrando es un producto o cociente que se puede <em>expandir</em> o <em>dividir término a término</em> en una suma de términos más simples? Si es así, aplica linealidad y resuelve cada término con la tabla.</li>
          <li><strong>Tabla de fórmulas.</strong> Después de simplificar, ¿el integrando (o cada término) coincide con una fila de la tabla básica, quizás con \(u\) igual a la variable misma?</li>
          <li><strong>Método de sustitución.</strong> ¿Hay una función compuesta \(f(g(x))\) en el integrando, y el resto del integrando es (salvo una constante) el diferencial de \(g(x)\)? Entonces sustituye \(u=g(x)\).</li>
          <li><strong>Integración por partes.</strong> ¿El integrando es un producto de dos funciones de tipos distintos (polinomio por exponencial, polinomio por trigonométrica, logaritmo, arco…) donde la sustitución no funciona? Entonces intenta partes.</li>
          <li><strong>Asistentes matemáticos.</strong> Para integrales que no ceden a ninguna técnica elemental (o para verificar), usa un asistente como GeoGebra.</li>
        </ol>
        <div class="note"><strong>Señal para reconocer sustitución:</strong> localiza la función "más interna" o de aspecto más complicado (dentro de una raíz, un exponente, un ángulo, un logaritmo…) y calcula su diferencial. Si ese diferencial aparece como factor en el resto del integrando (multiplicado por una constante), la sustitución funcionará directamente.</div>
        <div class="note"><strong>Señal para reconocer partes:</strong> el integrando es un producto de dos factores de naturaleza distinta y ninguno es "casi" el diferencial del argumento de una función compuesta del otro factor. Ejemplos típicos: \(x\,e^{x}\), \(x\cos x\), \(x\ln x\), \(e^x\cos x\).</div>`
      },
      {
        h: 'Método de sustitución (cambio de variable)',
        html: H`<p>El método de sustitución es la versión, para integrales, de la regla de la cadena de la derivación. Se aplica cuando el integrando tiene la forma de una función compuesta multiplicada por el diferencial (salvo constante) de su función interior:</p>
        <div class="key">
        Si \(u=g(x)\), con \(du=g'(x)\,dx\), entonces
        \[\int f\big(g(x)\big)g'(x)\,dx=\int f(u)\,du\]
        </div>
        <p><strong>Procedimiento paso a paso:</strong></p>
        <ol>
          <li><strong>Elegir \(u\).</strong> Identifica la función "interior" de la composición: lo que está dentro de una raíz, elevado a una potencia, como argumento de \(\operatorname{sen},\cos,e^{(\cdot)},\ln(\cdot)\), etc. Llama a esa función \(u=g(x)\).</li>
          <li><strong>Calcular \(du\).</strong> Deriva: \(du=g'(x)\,dx\).</li>
          <li><strong>Despejar el factor que falta.</strong> Si el integrando contiene \(g'(x)\) multiplicado por una constante \(k\), despeja \(dx=\dfrac{1}{k\,g'(x)}du\) (o, más simple, despeja directamente la expresión que aparece en el integrando en términos de \(du\)).</li>
          <li><strong>Sustituir</strong> en la integral, de modo que <strong>toda</strong> la expresión quede en términos de \(u\) (ninguna \(x\) debe permanecer).</li>
          <li><strong>Integrar</strong> respecto a \(u\) usando la tabla básica.</li>
          <li><strong>Volver a la variable original</strong>, sustituyendo \(u=g(x)\) de nuevo.</li>
        </ol>
        <div class="warn"><strong>Error común:</strong> sustituir solo una parte y dejar una \(x\) suelta en el integrando. Si al terminar el paso 4 todavía aparece \(x\) (fuera de \(u\)), la sustitución elegida no es la correcta para ese problema, o falta despejar \(x\) en términos de \(u\) también en ese factor.</div>
        <p><strong>Cambio de límites en integrales definidas.</strong> Si la integral es definida, \(\displaystyle\int_a^b f(g(x))g'(x)\,dx\), al sustituir \(u=g(x)\) los límites de integración también deben cambiarse a los valores correspondientes de \(u\):</p>
        <div class="key">\[\int_{x=a}^{x=b} f\big(g(x)\big)g'(x)\,dx=\int_{u=g(a)}^{u=g(b)} f(u)\,du\]</div>
        <p>Con este cambio, ya no es necesario "volver a la variable original": se evalúa directamente en los nuevos límites (en \(u\)). Alternativamente, se puede hallar primero la integral indefinida completa, regresar a \(x\), y evaluar con los límites originales; ambos caminos deben dar el mismo resultado.</p>`
      },
      {
        h: 'Integración por partes',
        html: H`<p>Se usa cuando el integrando es un producto de dos factores y ninguno es sustituible directamente. Se basa en la regla del producto de la derivación, "leída al revés":</p>
        <div class="key">\[\int u\,dv=u\,v-\int v\,du\]</div>
        <p><strong>Procedimiento:</strong></p>
        <ol>
          <li>Separar el integrando en dos factores: uno se llama \(u\) (se deriva) y el otro, junto con \(dx\), se llama \(dv\) (se integra).</li>
          <li>Calcular \(du\) (derivando \(u\)) y \(v\) (integrando \(dv\)).</li>
          <li>Sustituir en la fórmula \(\int u\,dv=uv-\int v\,du\).</li>
          <li>Resolver la nueva integral \(\int v\,du\) (que debe ser más simple que la original; si no lo es, reconsidera la elección de \(u\) y \(dv\), o repite el método sobre la nueva integral).</li>
        </ol>
        <p><strong>¿Cómo elegir \(u\)?</strong> La regla mnemotécnica <strong>ILATE</strong> (o LIATE) sugiere el orden de preferencia para elegir \(u\) (lo que se deriva), de mayor a menor prioridad:</p>
        <div class="key">
        <strong>I</strong>nversas trigonométricas &nbsp;→&nbsp; <strong>L</strong>ogarítmicas &nbsp;→&nbsp; <strong>A</strong>lgebraicas (polinomios) &nbsp;→&nbsp; <strong>T</strong>rigonométricas &nbsp;→&nbsp; <strong>E</strong>xponenciales
        </div>
        <p>La idea es elegir como \(u\) la función que, al derivarla, se "simplifica" (por ejemplo \(\ln x\to 1/x\), o un polinomio de grado \(n\) reduce su grado en cada derivación), y como \(dv\) la función que es fácil de integrar y no se complica al hacerlo (exponenciales, senos, cosenos).</p>
        <p><strong>Partes repetidas.</strong> Cuando \(u\) es un polinomio de grado \(n\ge2\), suele ser necesario aplicar integración por partes varias veces seguidas (una por cada reducción de grado), hasta que el polinomio se agote (quede una constante) o la integral resultante ya sea directa.</p>
        <p><strong>Caso cíclico (\(e^x\operatorname{sen} x\), \(e^x\cos x\)).</strong> Al integrar por partes dos veces una integral como \(\int e^x\cos x\,dx\), la integral original "reaparece" en el lado derecho, en vez de simplificarse. En ese caso no se sigue derivando: se trata la integral desconocida como una <em>incógnita algebraica</em> \(I\), se agrupan los términos semejantes en una ecuación y se despeja \(I\).</p>
        <div class="note"><strong>Verificación.</strong> El resultado de <em>cualquier</em> integral (por partes, sustitución, o tabla) se puede y se debe comprobar derivando la primitiva obtenida: si la derivada coincide exactamente con el integrando original, el resultado es correcto.</div>`
      },
      {
        h: 'Transformaciones algebraicas y trigonométricas previas',
        html: H`<p>Antes de intentar sustitución o partes, conviene revisar si una simplificación algebraica o trigonométrica reduce el integrando a algo directo de la tabla. Las más frecuentes son:</p>
        <ul>
          <li><strong>Dividir término a término</strong> un cociente en el que el denominador es un monomio: \(\dfrac{x^3-2\sqrt x}{x}=x^2-2x^{-1/2}\).</li>
          <li><strong>Expandir</strong> productos o potencias de binomios: \((x^2+2)^2=x^4+4x^2+4\).</li>
          <li><strong>Escribir raíces como potencias fraccionarias</strong>: \(\sqrt[3]{x^2}=x^{2/3}\), para poder aplicar la regla de la potencia.</li>
          <li><strong>Identidades trigonométricas</strong>, en particular:</li>
        </ul>
        <div class="key">
        \[\operatorname{sen} 2x = 2\operatorname{sen} x\cos x\]
        \[\cos^2 x=\frac{1+\cos 2x}{2}\]
        \[\operatorname{sen}^2 x=\frac{1-\cos 2x}{2}\]
        </div>
        <p>Estas dos últimas identidades ("de rebaje de potencia") son esenciales para integrar \(\operatorname{sen}^2 x\) o \(\cos^2 x\): al sustituirlas, el integrando se convierte en una suma de un término constante y un término en \(\cos 2x\) (o \(\operatorname{sen} 2x\)), directamente integrable.</p>
        <p><strong>Ejemplo:</strong> \(\displaystyle\int \operatorname{sen}^2 x\,dx=\int\frac{1-\cos2x}{2}\,dx=\frac{x}{2}-\frac{\operatorname{sen} 2x}{4}+c\).</p>
        <div class="note">Otra identidad útil de simplificación (no de rebaje, sino de cancelación): si aparece \(\dfrac{\operatorname{sen} 2x}{\operatorname{sen} x}\), sustituir \(\operatorname{sen} 2x=2\operatorname{sen} x\cos x\) permite cancelar el factor \(\operatorname{sen} x\) del denominador y deja una integral trivial: \(\displaystyle\int\frac{\operatorname{sen} 2x}{\operatorname{sen} x}\,dx=\int 2\cos x\,dx=2\operatorname{sen} x+c\).</div>`
      },
      {
        h: 'Funciones sin primitiva elemental y asistentes matemáticos',
        html: H`<p>No toda función continua tiene una primitiva expresable con las funciones elementales que conoces (polinomios, exponenciales, logaritmos, trigonométricas, sus combinaciones y composiciones finitas). El ejemplo más citado es:</p>
        <div class="key">\[f(x)=e^{x^2}\]</div>
        <p>Esta función es continua en todo \(\mathbb{R}\) (por lo tanto es integrable, y \(\int_a^b e^{x^2}dx\) existe como número para cualesquiera \(a,b\)), pero se puede demostrar que <strong>ninguna combinación finita</strong> de funciones elementales es una primitiva de \(e^{x^2}\). Esto no es una limitación de tu habilidad algebraica: es un hecho matemático (relacionado con la teoría de Liouville).</p>
        <p>En estos casos, y en general para verificar resultados o resolver integrales complejas con rapidez, se recurre a <strong>asistentes matemáticos digitales</strong>, como las calculadoras de GeoGebra (por ejemplo, la "Calculadora GeoGebra para integrales" o el applet "IntegralIndefinida.ggb"). Estas herramientas son valiosas para:</p>
        <ul>
          <li>Visualizar la función y una familia de sus primitivas (confirmando que las tangentes en abscisas iguales son paralelas).</li>
          <li>Verificar el resultado de un cálculo manual.</li>
          <li>Explorar integrales sin primitiva elemental mediante integración numérica.</li>
        </ul>
        <div class="warn"><strong>Aparentes discrepancias con GeoGebra:</strong> a veces un asistente devuelve una primitiva con una apariencia distinta a la que obtuviste a mano (por ejemplo, con otra combinación de funciones, o con la constante absorbida de forma distinta). Esto casi nunca es un error: recuerda que <em>todas</em> las primitivas de una misma función difieren solo en una constante (o, en algunos casos con dominios distintos, en constantes diferentes por tramos); dos expresiones aparentemente distintas pueden ser la misma función más una constante distinta. Para comprobarlo, deriva ambas expresiones: si ambas derivadas coinciden con el integrando original, ambas son correctas.</div>`
      }
    ],
    examples: [
      {
        title: 'Expandir un producto para aplicar linealidad',
        statement: H`Evaluar \(\displaystyle\int x(x^2+2)^2\,dx\) y verificar el resultado derivando.`,
        steps: [
          H`El integrando es un producto; no hay una fórmula directa en la tabla para "variable por potencia de binomio". Conviene expandir la potencia primero: \((x^2+2)^2=x^4+4x^2+4\).`,
          H`Multiplicamos por \(x\): \(x(x^4+4x^2+4)=x^5+4x^3+4x\). La integral queda lista para aplicar linealidad: \[\int x(x^2+2)^2\,dx=\int(x^5+4x^3+4x)\,dx\]`,
          H`Aplicamos linealidad y la regla de la potencia \(\int x^n dx=\dfrac{x^{n+1}}{n+1}\) término a término: \[\int x^5dx+4\int x^3dx+4\int x\,dx=\frac{x^6}{6}+4\cdot\frac{x^4}{4}+4\cdot\frac{x^2}{2}+c\]`,
          H`Simplificamos: \[\int x(x^2+2)^2\,dx=\frac{x^6}{6}+x^4+2x^2+c\]`,
          H`<strong>Verificación:</strong> derivamos \(F(x)=\dfrac{x^6}{6}+x^4+2x^2+c\): \[F'(x)=\frac{6x^5}{6}+4x^3+4x=x^5+4x^3+4x\]`,
          H`Factorizamos el resultado de la derivada para compararlo con el integrando original: \(x^5+4x^3+4x=x(x^4+4x^2+4)=x(x^2+2)^2\). Coincide exactamente con el integrando, así que el resultado queda verificado.`
        ],
        answer: H`\(\displaystyle\int x(x^2+2)^2\,dx=\frac{x^6}{6}+x^4+2x^2+c\)`
      },
      {
        title: 'Linealidad con tres términos de tipos distintos',
        statement: H`Evaluar \(\displaystyle\int\left(x^2+\frac{1}{x^2+1}+1\right)dx\).`,
        steps: [
          H`El integrando ya es una suma de tres términos; aplicamos linealidad directamente sin necesidad de transformar nada: \[\int\left(x^2+\frac{1}{x^2+1}+1\right)dx=\int x^2\,dx+\int\frac{1}{x^2+1}\,dx+\int 1\,dx\]`,
          H`El primer término es directo de la tabla (regla de la potencia con \(n=2\)): \(\displaystyle\int x^2\,dx=\dfrac{x^3}{3}\).`,
          H`El segundo término coincide exactamente con la fórmula \(\displaystyle\int\dfrac{du}{1+u^2}=\arctan u+c\), con \(u=x\): \(\displaystyle\int\dfrac{1}{x^2+1}\,dx=\arctan x\).`,
          H`El tercer término es la integral de la función constante \(1\): \(\displaystyle\int 1\,dx=x\).`,
          H`Sumando los tres resultados (y añadiendo una sola constante \(c\) al final, pues la suma de constantes sigue siendo una constante arbitraria): \[\int\left(x^2+\frac{1}{x^2+1}+1\right)dx=\frac{x^3}{3}+\arctan x+x+c\]`,
          H`<strong>Verificación:</strong> \(\left(\dfrac{x^3}{3}+\arctan x+x+c\right)'=x^2+\dfrac{1}{1+x^2}+1\), que coincide con el integrando original.`
        ],
        answer: H`\(\displaystyle\int\left(x^2+\frac{1}{x^2+1}+1\right)dx=\frac{x^3}{3}+\arctan x+x+c\)`
      },
      {
        title: 'Simplificación trigonométrica antes de integrar',
        statement: H`Evaluar \(\displaystyle\int\frac{\operatorname{sen} 2x}{\operatorname{sen} x}\,dx\).`,
        steps: [
          H`No hay una fórmula directa para este cociente; sin embargo, el numerador contiene el ángulo doble \(2x\), lo cual sugiere aplicar la identidad \(\operatorname{sen} 2x=2\operatorname{sen} x\cos x\).`,
          H`Sustituimos la identidad en el numerador: \[\int\frac{\operatorname{sen} 2x}{\operatorname{sen} x}\,dx=\int\frac{2\operatorname{sen} x\cos x}{\operatorname{sen} x}\,dx\]`,
          H`Cancelamos el factor \(\operatorname{sen} x\) (válido donde \(\operatorname{sen} x\ne0\), que son precisamente los puntos donde la función original está definida): \[\int\frac{2\operatorname{sen} x\cos x}{\operatorname{sen} x}\,dx=\int 2\cos x\,dx\]`,
          H`Aplicamos linealidad y la fórmula \(\int\cos u\,du=\operatorname{sen} u+c\): \[2\int\cos x\,dx=2\operatorname{sen} x+c\]`,
          H`<strong>Verificación:</strong> \(\big(2\operatorname{sen} x+c\big)'=2\cos x\). Para comparar con el integrando original hay que multiplicar y dividir de nuevo: \(2\cos x=\dfrac{2\operatorname{sen} x\cos x}{\operatorname{sen} x}=\dfrac{\operatorname{sen} 2x}{\operatorname{sen} x}\) (donde \(\operatorname{sen} x\ne0\)). Coincide.`
        ],
        answer: H`\(\displaystyle\int\frac{\operatorname{sen} 2x}{\operatorname{sen} x}\,dx=2\operatorname{sen} x+c\)`
      },
      {
        title: 'Sustitución con una potencia compuesta',
        statement: H`Evaluar \(\displaystyle\int (1+3x)^6\,dx\).`,
        steps: [
          H`El integrando es una potencia compuesta: la base \(1+3x\) es una función lineal de \(x\) elevada a la sexta potencia. Expandir \((1+3x)^6\) sería muy laborioso, así que buscamos sustitución.`,
          H`Elegimos como nueva variable el argumento de la potencia: \(u=1+3x\).`,
          H`Derivamos: \(du=3\,dx\), de donde \(dx=\dfrac13\,du\).`,
          H`Sustituimos en la integral, reemplazando tanto \((1+3x)^6\) como \(dx\): \[\int(1+3x)^6\,dx=\int u^6\cdot\frac13\,du=\frac13\int u^6\,du\]`,
          H`Aplicamos la regla de la potencia: \(\displaystyle\frac13\int u^6\,du=\frac13\cdot\frac{u^7}{7}+c=\frac{u^7}{21}+c\).`,
          H`Volvemos a la variable original sustituyendo \(u=1+3x\): \[\int(1+3x)^6\,dx=\frac{(1+3x)^7}{21}+c\]`,
          H`<strong>Verificación</strong> (usando la regla de la cadena): \(\left(\dfrac{(1+3x)^7}{21}\right)'=\dfrac{7(1+3x)^6\cdot3}{21}=(1+3x)^6\). Coincide con el integrando.`
        ],
        answer: H`\(\displaystyle\int(1+3x)^6\,dx=\frac{(1+3x)^7}{21}+c\)`
      },
      {
        title: 'Sustitución con exponencial de argumento cuadrático',
        statement: H`Evaluar \(\displaystyle\int x\,e^{x^2}\,dx\).`,
        steps: [
          H`La función compuesta es \(e^{x^2}\), con función interior \(g(x)=x^2\). Calculamos su diferencial: \(d(x^2)=2x\,dx\).`,
          H`El otro factor presente en el integrando es \(x\,dx\), que es proporcional a \(2x\,dx\) (falta solo un factor \(2\)): buena señal de que la sustitución funcionará.`,
          H`Elegimos \(u=x^2\), de donde \(du=2x\,dx\), es decir \(x\,dx=\dfrac12\,du\).`,
          H`Sustituimos: \[\int x\,e^{x^2}\,dx=\int e^{u}\cdot\frac12\,du=\frac12\int e^{u}\,du\]`,
          H`Observa que, tras la sustitución correcta, no queda ninguna \(x\) suelta en el integrando: todo está en términos de \(u\).`,
          H`Integramos: \(\displaystyle\frac12\int e^u\,du=\frac12 e^u+c\).`,
          H`Volvemos a la variable original: \[\int x\,e^{x^2}\,dx=\frac12 e^{x^2}+c\]`
        ],
        answer: H`\(\displaystyle\int x\,e^{x^2}\,dx=\frac12 e^{x^2}+c\)`
      },
      {
        title: 'Integración por partes: producto polinomio-logaritmo',
        statement: H`Evaluar \(\displaystyle\int x\ln x\,dx\) utilizando integración por partes.`,
        steps: [
          H`El integrando \(x\ln x\) es un producto de una función algebraica (\(x\)) y una logarítmica (\(\ln x\)); no hay sustitución evidente (el diferencial de \(\ln x\), que es \(dx/x\), no aparece como factor). Usamos integración por partes.`,
          H`Según ILATE, la logarítmica tiene prioridad sobre la algebraica para el papel de \(u\) (se deriva y se simplifica a \(1/x\)): elegimos \(u=\ln x\) y \(dv=x\,dx\).`,
          H`Derivamos \(u\): \(du=\dfrac1x\,dx\). Integramos \(dv\): \(v=\displaystyle\int x\,dx=\dfrac{x^2}{2}\).`,
          H`Sustituimos en la fórmula \(\int u\,dv=uv-\int v\,du\): \[\int x\ln x\,dx=\frac{x^2}{2}\ln x-\int\frac{x^2}{2}\cdot\frac1x\,dx\]`,
          H`Simplificamos el integrando de la nueva integral: \(\dfrac{x^2}{2}\cdot\dfrac1x=\dfrac{x}{2}\), que es directa: \[\int x\ln x\,dx=\frac{x^2}{2}\ln x-\frac12\int x\,dx=\frac{x^2}{2}\ln x-\frac12\cdot\frac{x^2}{2}+c\]`,
          H`Simplificamos: \[\int x\ln x\,dx=\frac{x^2}{2}\ln x-\frac{x^2}{4}+c\]`,
          H`<strong>Verificación:</strong> \(\left(\dfrac{x^2}{2}\ln x-\dfrac{x^2}{4}\right)'=x\ln x+\dfrac{x^2}{2}\cdot\dfrac1x-\dfrac{2x}{4}=x\ln x+\dfrac{x}{2}-\dfrac{x}{2}=x\ln x\). Coincide con el integrando.`
        ],
        answer: H`\(\displaystyle\int x\ln x\,dx=\frac{x^2}{2}\ln x-\frac{x^2}{4}+c\)`
      },
      {
        title: 'Caso cíclico: integración por partes dos veces y despeje algebraico',
        statement: H`Evaluar \(\displaystyle\int e^{x}\cos x\,dx\).`,
        steps: [
          H`El integrando \(e^x\cos x\) es un producto exponencial-trigonométrico. Ninguno de los dos factores "se agota" al derivarlo (la derivada de \(e^x\) sigue siendo \(e^x\); la de \(\cos x\) es \(-\operatorname{sen} x\), otra trigonométrica). Aun así, aplicamos integración por partes.`,
          H`Elegimos \(u=e^x\), \(dv=\cos x\,dx\), de donde \(du=e^x\,dx\), \(v=\operatorname{sen} x\).`,
          H`Aplicamos la fórmula: \[\int e^x\cos x\,dx=e^x\operatorname{sen} x-\int e^x\operatorname{sen} x\,dx \qquad (1)\]`,
          H`La nueva integral, \(\int e^x\operatorname{sen} x\,dx\), es del mismo tipo. Aplicamos partes otra vez, con \(u=e^x\), \(dv=\operatorname{sen} x\,dx\), de donde \(du=e^x\,dx\), \(v=-\cos x\): \[\int e^x\operatorname{sen} x\,dx=-e^x\cos x+\int e^x\cos x\,dx \qquad (2)\]`,
          H`Sustituimos (2) en (1): \[\int e^x\cos x\,dx=e^x\operatorname{sen} x-\left(-e^x\cos x+\int e^x\cos x\,dx\right)=e^x\operatorname{sen} x+e^x\cos x-\int e^x\cos x\,dx\]`,
          H`La integral original reapareció en el lado derecho: seguir aplicando partes repetiría el ciclo indefinidamente. La solución es tratar \(I=\int e^x\cos x\,dx\) como una incógnita algebraica y pasar el término repetido al lado izquierdo: \[I+I=e^x\operatorname{sen} x+e^x\cos x \;\Longrightarrow\; 2I=e^x(\operatorname{sen} x+\cos x)\]`,
          H`Despejamos \(I\) y añadimos la constante de integración (que no aparecía mientras trabajamos con la ecuación algebraica): \[I=\int e^x\cos x\,dx=\frac12 e^x(\operatorname{sen} x+\cos x)+c\]`
        ],
        answer: H`\(\displaystyle\int e^{x}\cos x\,dx=\frac12 e^{x}(\operatorname{sen} x+\cos x)+c\)`
      }
    ],
    exercises: [
      {
        id: 's2e01', level: 1, type: 'anti',
        q: H`Evaluar \(\displaystyle\int\left(3x^4-\frac12 x^3+\frac14 x-2\right)dx\).`,
        hint: H`Aplica linealidad término a término y la regla de la potencia en cada uno.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando ya es una suma de potencias de \(x\); aplicamos linealidad para integrar cada término por separado con la regla de la potencia.</p></div>
        <div class="step"><p><strong>Integrar término a término.</strong></p>$$3\int x^4dx-\frac12\int x^3dx+\frac14\int x\,dx-2\int dx$$</div>
        <div class="step"><p><strong>Aplicar la regla de la potencia \(\int x^n dx=\dfrac{x^{n+1}}{n+1}\) en cada término.</strong></p>$$=3\cdot\frac{x^5}{5}-\frac12\cdot\frac{x^4}{4}+\frac14\cdot\frac{x^2}{2}-2x+c$$</div>
        <div class="step"><p><strong>Simplificar.</strong></p>$$=\frac{3x^5}{5}-\frac{x^4}{8}+\frac{x^2}{8}-2x+c$$</div>
        <div class="step"><p><strong>Verificar derivando.</strong> \(\left(\dfrac{3x^5}{5}-\dfrac{x^4}{8}+\dfrac{x^2}{8}-2x\right)'=3x^4-\dfrac12x^3+\dfrac14x-2\), que coincide exactamente con el integrando original.</p></div>
        </div>
        <div class="final">\(\displaystyle\int\left(3x^4-\frac12x^3+\frac14x-2\right)dx=\frac{3x^5}{5}-\frac{x^4}{8}+\frac{x^2}{8}-2x+c\)</div>`,
        ref: '3*x^5/5 - x^4/8 + x^2/8 - 2*x', f: '3*x^4-1/2*x^3+1/4*x-2', v: 'x'
      },
      {
        id: 's2e02', level: 1, type: 'anti',
        q: H`Evaluar \(\displaystyle\int\frac{x^3-2\sqrt x}{x}\,dx\).`,
        hint: H`Divide cada término del numerador por \(x\) antes de integrar; escribe \(\sqrt x=x^{1/2}\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando es un cociente cuyo denominador es un monomio; conviene dividir término a término antes de integrar en vez de buscar sustitución.</p></div>
        <div class="step"><p><strong>Dividir término a término.</strong> Escribiendo \(\sqrt x=x^{1/2}\):</p>$$\frac{x^3-2\sqrt x}{x}=\frac{x^3}{x}-\frac{2x^{1/2}}{x}=x^2-2x^{-1/2}$$</div>
        <div class="step"><p><strong>Integrar cada término con la regla de la potencia.</strong></p>$$\int\left(x^2-2x^{-1/2}\right)dx=\frac{x^3}{3}-2\cdot\frac{x^{1/2}}{1/2}+c$$</div>
        <div class="step"><p><strong>Simplificar.</strong></p>$$=\frac{x^3}{3}-4\sqrt x+c$$</div>
        <div class="step"><p><strong>Verificar derivando.</strong> \(\left(\dfrac{x^3}{3}-4\sqrt x\right)'=x^2-4\cdot\dfrac{1}{2\sqrt x}=x^2-\dfrac{2}{\sqrt x}=x^2-2x^{-1/2}\), que coincide con el integrando ya simplificado.</p></div>
        </div>
        <div class="final">\(\displaystyle\int\frac{x^3-2\sqrt x}{x}\,dx=\frac{x^3}{3}-4\sqrt x+c\)</div>`,
        ref: 'x^3/3 - 4*sqrt(x)', f: '(x^3-2*sqrt(x))/x', v: 'x'
      },
      {
        id: 's2e03', level: 1, type: 'anti',
        q: H`Evaluar \(\displaystyle\int\left(\csc^2 t-2e^{t}\right)dt\).`,
        hint: H`Usa las fórmulas directas \(\int\csc^2u\,du=-\cot u+c\) y \(\int e^u du=e^u+c\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando ya es una suma de dos términos que aparecen directamente en la tabla básica; aplicamos linealidad y las fórmulas correspondientes.</p></div>
        <div class="step"><p><strong>Separar por linealidad.</strong></p>$$\int\csc^2t\,dt-2\int e^t\,dt$$</div>
        <div class="step"><p><strong>Aplicar las fórmulas directas de la tabla.</strong> \(\int\csc^2u\,du=-\cot u+c\) y \(\int e^u\,du=e^u+c\):</p>$$=-\cot t-2e^t+c$$</div>
        <div class="step"><p><strong>Verificar derivando.</strong> \(\left(-\cot t-2e^t\right)'=\csc^2t-2e^t\), que coincide con el integrando original.</p></div>
        </div>
        <div class="final">\(\displaystyle\int(\csc^2t-2e^t)\,dt=-\cot t-2e^t+c\)</div>`,
        ref: '-cot(t)-2*exp(t)', f: 'csc(t)^2-2*exp(t)', v: 't'
      },
      {
        id: 's2e04', level: 1, type: 'anti',
        q: H`Evaluar \(\displaystyle\int \sec t(\sec t+\tan t)\,dt\).`,
        hint: H`Efectúa primero el producto para obtener una suma de dos términos, cada uno directo de la tabla.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando es un producto, pero se puede efectuar directamente para convertirlo en una suma de dos términos de la tabla básica.</p></div>
        <div class="step"><p><strong>Efectuar el producto.</strong></p>$$\sec t(\sec t+\tan t)=\sec^2t+\sec t\tan t$$</div>
        <div class="step"><p><strong>Integrar cada término con la tabla.</strong> \(\int\sec^2u\,du=\tan u+c\) y \(\int\sec u\tan u\,du=\sec u+c\):</p>$$\int\sec^2t\,dt+\int\sec t\tan t\,dt=\tan t+\sec t+c$$</div>
        <div class="step"><p><strong>Verificar derivando.</strong> \((\tan t+\sec t)'=\sec^2t+\sec t\tan t=\sec t(\sec t+\tan t)\), que coincide con el integrando original.</p></div>
        </div>
        <div class="final">\(\displaystyle\int\sec t(\sec t+\tan t)\,dt=\tan t+\sec t+c\)</div>`,
        ref: 'tan(t)+sec(t)', f: 'sec(t)*(sec(t)+tan(t))', v: 't'
      },
      {
        id: 's2e05', level: 2, type: 'num',
        q: H`Evaluar \(\displaystyle\int_1^4\left(\frac{3}{t^2}-2e^{t}\right)dt\).`,
        hint: H`Halla primero la integral indefinida: \(\int(3t^{-2}-2e^t)dt=-\dfrac3t-2e^t+c\); luego aplica Newton-Leibniz.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> Primero hallamos una antiderivada indefinida del integrando y luego aplicamos Newton-Leibniz con los límites dados.</p></div>
        <div class="step"><p><strong>Hallar una antiderivada.</strong> Escribiendo \(3/t^2=3t^{-2}\):</p>$$\int\left(3t^{-2}-2e^t\right)dt=3\cdot\frac{t^{-1}}{-1}-2e^t=-\frac3t-2e^t$$</div>
        <div class="step"><p><strong>Evaluar en el límite superior.</strong> Con \(F(t)=-\dfrac3t-2e^t\):</p>$$F(4)=-\frac34-2e^4$$</div>
        <div class="step"><p><strong>Evaluar en el límite inferior.</strong></p>$$F(1)=-3-2e$$</div>
        <div class="step"><p><strong>Restar (Newton-Leibniz).</strong></p>$$F(4)-F(1)=\left(-\frac34-2e^4\right)-(-3-2e)=-\frac34-2e^4+3+2e=\frac94+2e-2e^4$$</div>
        </div>
        <div class="final">\(\displaystyle\int_1^4\left(\frac{3}{t^2}-2e^{t}\right)dt=\frac94+2e-2e^4\)</div>`,
        answer: '9/4 + 2*e - 2*e^4', verify: { kind: 'int', f: '3/t^2-2*exp(t)', v: 't', a: '1', b: '4' }
      },
      {
        id: 's2e06', level: 1, type: 'choice',
        q: H`¿Qué método conviene aplicar primero a \(\displaystyle\int x\cos(5x)\,dx\)?`,
        hint: H`Compara el diferencial del argumento \(5x\) con el otro factor \(x\,dx\): ¿son proporcionales?`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Revisar si la sustitución funciona.</strong> El integrando es \(x\cos(5x)\), con función compuesta interior \(5x\). Su diferencial es \(d(5x)=5\,dx\), que <strong>no</strong> es proporcional al otro factor presente, \(x\,dx\) (falta la variable \(x\), no solo una constante): la sustitución no reduce esta integral.</p></div>
        <div class="step"><p><strong>Revisar si hay tabla directa.</strong> El integrando no coincide con ninguna fórmula básica, pues es un producto de dos funciones de tipo distinto (algebraica y trigonométrica), no un término aislado.</p></div>
        <div class="step"><p><strong>Reconocer el método correcto.</strong> Al ser un producto polinomio-trigonométrica donde la sustitución falla, corresponde integración por partes, con \(u=x\) (se simplifica al derivar) y \(dv=\cos(5x)\,dx\) (fácil de integrar).</p></div>
        </div>
        <div class="final">Integración por partes, con \(u=x\) y \(dv=\cos(5x)\,dx\)</div>`,
        options: [
          H`Sustitución con \(u=5x\)`,
          H`Integración por partes`,
          H`Tabla directa, sin transformación previa`,
          H`No existe una primitiva elemental`
        ],
        correct: 1
      },
      {
        id: 's2e07', level: 1, type: 'anti',
        q: H`Evaluar \(\displaystyle\int\left(\sqrt{x^3}+\sqrt[3]{x^2}\right)dx\).`,
        hint: H`Escribe ambas raíces como potencias fraccionarias: \(\sqrt{x^3}=x^{3/2}\), \(\sqrt[3]{x^2}=x^{2/3}\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando es una suma de raíces; conviene escribirlas como potencias fraccionarias para aplicar la regla de la potencia.</p></div>
        <div class="step"><p><strong>Reescribir las raíces.</strong></p>$$\sqrt{x^3}=x^{3/2}, \qquad \sqrt[3]{x^2}=x^{2/3}$$</div>
        <div class="step"><p><strong>Integrar cada potencia por linealidad.</strong></p>$$\int x^{3/2}dx+\int x^{2/3}dx=\frac{x^{5/2}}{5/2}+\frac{x^{5/3}}{5/3}+c$$</div>
        <div class="step"><p><strong>Simplificar los coeficientes.</strong></p>$$=\frac25 x^{5/2}+\frac35 x^{5/3}+c$$</div>
        <div class="step"><p><strong>Verificar derivando.</strong> \(\left(\dfrac25x^{5/2}+\dfrac35x^{5/3}\right)'=x^{3/2}+x^{2/3}=\sqrt{x^3}+\sqrt[3]{x^2}\), que coincide con el integrando original.</p></div>
        </div>
        <div class="final">\(\displaystyle\int\left(\sqrt{x^3}+\sqrt[3]{x^2}\right)dx=\frac25x^{5/2}+\frac35x^{5/3}+c\)</div>`,
        ref: '2*x^(5/2)/5 + 3*x^(5/3)/5', f: 'x^(3/2)+x^(2/3)', v: 'x'
      },
      {
        id: 's2e08', level: 2, type: 'anti',
        q: H`Evaluar \(\displaystyle\int x\,\operatorname{sen}(x^2)\,dx\) mediante sustitución.`,
        hint: H`La función interior es \(x^2\); su diferencial es \(2x\,dx\), proporcional al factor \(x\,dx\) presente.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la sustitución.</strong> La función interior es \(x^2\), con diferencial \(d(x^2)=2x\,dx\), proporcional al factor \(x\,dx\) presente en el integrando: buena señal para sustituir.</p></div>
        <div class="step"><p><strong>Elegir \(u\) y calcular \(du\).</strong></p>$$u=x^2, \qquad du=2x\,dx \;\Rightarrow\; x\,dx=\frac12du$$</div>
        <div class="step"><p><strong>Sustituir.</strong></p>$$\int x\operatorname{sen}(x^2)\,dx=\int\operatorname{sen} u\cdot\frac12\,du=\frac12\int\operatorname{sen} u\,du$$</div>
        <div class="step"><p><strong>Integrar y volver a la variable original.</strong></p>$$\frac12\int\operatorname{sen} u\,du=-\frac12\cos u+c=-\frac12\cos(x^2)+c$$</div>
        <div class="step"><p><strong>Verificar derivando.</strong> \(\left(-\dfrac12\cos(x^2)\right)'=-\dfrac12\cdot(-\operatorname{sen}(x^2))\cdot2x=x\operatorname{sen}(x^2)\), que coincide con el integrando original.</p></div>
        </div>
        <div class="final">\(\displaystyle\int x\operatorname{sen}(x^2)\,dx=-\frac12\cos(x^2)+c\)</div>`,
        ref: '-cos(x^2)/2', f: 'x*sin(x^2)', v: 'x'
      },
      {
        id: 's2e09', level: 2, type: 'anti',
        q: H`Evaluar \(\displaystyle\int(1-2x)^9\,dx\).`,
        hint: H`Sustituye \(u=1-2x\); calcula \(du\) y despeja \(dx\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la sustitución.</strong> El integrando es una potencia compuesta de una función lineal; expandir sería muy laborioso, así que sustituimos el argumento completo.</p></div>
        <div class="step"><p><strong>Elegir \(u\) y calcular \(du\).</strong></p>$$u=1-2x, \qquad du=-2\,dx \;\Rightarrow\; dx=-\frac12du$$</div>
        <div class="step"><p><strong>Sustituir.</strong></p>$$\int(1-2x)^9\,dx=\int u^9\left(-\frac12\right)du=-\frac12\int u^9\,du$$</div>
        <div class="step"><p><strong>Integrar con la regla de la potencia.</strong></p>$$-\frac12\int u^9\,du=-\frac12\cdot\frac{u^{10}}{10}+c=-\frac{u^{10}}{20}+c$$</div>
        <div class="step"><p><strong>Volver a la variable original.</strong></p>$$\int(1-2x)^9\,dx=-\frac{(1-2x)^{10}}{20}+c$$</div>
        </div>
        <div class="final">\(\displaystyle\int(1-2x)^9\,dx=-\frac{(1-2x)^{10}}{20}+c\)</div>`,
        ref: '-(1-2*x)^10/20', f: '(1-2*x)^9', v: 'x'
      },
      {
        id: 's2e10', level: 2, type: 'anti',
        q: H`Evaluar \(\displaystyle\int\frac{(\ln x)^2}{x}\,dx\).`,
        hint: H`Sustituye \(u=\ln x\); su diferencial \(du=dx/x\) es exactamente el factor que falta.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la sustitución.</strong> El integrando contiene \((\ln x)^2\), y el otro factor, \(1/x\,dx\), es exactamente el diferencial de \(\ln x\): sustitución directa.</p></div>
        <div class="step"><p><strong>Elegir \(u\) y calcular \(du\).</strong></p>$$u=\ln x, \qquad du=\frac1x\,dx$$</div>
        <div class="step"><p><strong>Sustituir.</strong> Toda la expresión queda en términos de \(u\), sin ninguna \(x\) suelta:</p>$$\int\frac{(\ln x)^2}{x}\,dx=\int u^2\,du$$</div>
        <div class="step"><p><strong>Integrar y volver a la variable original.</strong></p>$$\int u^2\,du=\frac{u^3}{3}+c=\frac{(\ln x)^3}{3}+c$$</div>
        </div>
        <div class="final">\(\displaystyle\int\frac{(\ln x)^2}{x}\,dx=\frac{(\ln x)^3}{3}+c\)</div>`,
        ref: '(ln(x))^3/3', f: '(ln(x))^2/x', v: 'x'
      },
      {
        id: 's2e11', level: 2, type: 'anti',
        q: H`Evaluar \(\displaystyle\int e^{x}\cos(e^{x})\,dx\).`,
        hint: H`Sustituye \(u=e^x\); su diferencial \(du=e^x dx\) coincide con el otro factor.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la sustitución.</strong> El integrando es \(\cos(e^x)\) multiplicado por \(e^x\); como \(d(e^x)=e^x\,dx\), el factor que falta coincide exactamente con \(du\).</p></div>
        <div class="step"><p><strong>Elegir \(u\) y calcular \(du\).</strong></p>$$u=e^x, \qquad du=e^x\,dx$$</div>
        <div class="step"><p><strong>Sustituir.</strong></p>$$\int e^x\cos(e^x)\,dx=\int\cos u\,du$$</div>
        <div class="step"><p><strong>Integrar y volver a la variable original.</strong></p>$$\int\cos u\,du=\operatorname{sen} u+c=\operatorname{sen}(e^x)+c$$</div>
        </div>
        <div class="final">\(\displaystyle\int e^{x}\cos(e^{x})\,dx=\operatorname{sen}(e^x)+c\)</div>`,
        ref: 'sin(exp(x))', f: 'exp(x)*cos(exp(x))', v: 'x'
      },
      {
        id: 's2e12', level: 2, type: 'anti',
        q: H`Evaluar \(\displaystyle\int x^3(2+x^4)^5\,dx\).`,
        hint: H`La función interior es \(2+x^4\); su diferencial es \(4x^3dx\), proporcional al factor \(x^3dx\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la sustitución.</strong> La función interior es \(2+x^4\); su diferencial, \(d(2+x^4)=4x^3\,dx\), es proporcional al factor \(x^3\,dx\) presente en el integrando.</p></div>
        <div class="step"><p><strong>Elegir \(u\) y calcular \(du\).</strong></p>$$u=2+x^4, \qquad du=4x^3\,dx \;\Rightarrow\; x^3\,dx=\frac14du$$</div>
        <div class="step"><p><strong>Sustituir.</strong></p>$$\int x^3(2+x^4)^5\,dx=\int u^5\cdot\frac14\,du=\frac14\int u^5\,du$$</div>
        <div class="step"><p><strong>Integrar con la regla de la potencia.</strong></p>$$\frac14\int u^5\,du=\frac14\cdot\frac{u^6}{6}+c=\frac{u^6}{24}+c$$</div>
        <div class="step"><p><strong>Volver a la variable original.</strong></p>$$\int x^3(2+x^4)^5\,dx=\frac{(2+x^4)^6}{24}+c$$</div>
        </div>
        <div class="final">\(\displaystyle\int x^3(2+x^4)^5\,dx=\frac{(2+x^4)^6}{24}+c\)</div>`,
        ref: '(2+x^4)^6/24', f: 'x^3*(2+x^4)^5', v: 'x'
      },
      {
        id: 's2e13', level: 2, type: 'num',
        q: H`Evaluar \(\displaystyle\int_e^{e^4}\frac{1}{x\sqrt{\ln x}}\,dx\) mediante sustitución con cambio de límites.`,
        hint: H`Sustituye \(u=\ln x\); en \(x=e\), \(u=1\); en \(x=e^4\), \(u=4\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando contiene \(\ln x\) dentro de una raíz, y el factor \(1/x\,dx\) es exactamente su diferencial: sustitución con cambio de límites, ya que la integral es definida.</p></div>
        <div class="step"><p><strong>Elegir \(u\) y calcular \(du\).</strong></p>$$u=\ln x, \qquad du=\frac1x\,dx$$</div>
        <div class="step"><p><strong>Cambiar los límites de integración.</strong></p>$$x=e \Rightarrow u=\ln e=1, \qquad x=e^4 \Rightarrow u=\ln e^4=4$$</div>
        <div class="step"><p><strong>Sustituir e integrar en la nueva variable.</strong></p>$$\int_e^{e^4}\frac{1}{x\sqrt{\ln x}}\,dx=\int_1^4 u^{-1/2}\,du=\big[2\sqrt u\big]_1^4$$</div>
        <div class="step"><p><strong>Evaluar en los nuevos límites.</strong></p>$$2\sqrt4-2\sqrt1=4-2=2$$</div>
        </div>
        <div class="final">\(\displaystyle\int_e^{e^4}\frac{1}{x\sqrt{\ln x}}\,dx=2\)</div>`,
        answer: '2', verify: { kind: 'int', f: '1/(x*sqrt(ln(x)))', v: 'x', a: 'e', b: 'e^4' }
      },
      {
        id: 's2e14', level: 2, type: 'anti',
        q: H`Evaluar \(\displaystyle\int t\,e^{t}\,dt\) mediante integración por partes.`,
        hint: H`Elige \(u=t\) (se simplifica al derivar) y \(dv=e^t dt\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando \(t\,e^t\) es un producto algebraica-exponencial donde la sustitución no funciona (el diferencial de \(e^t\) no es el otro factor); aplicamos integración por partes.</p></div>
        <div class="step"><p><strong>Elegir \(u\) y \(dv\) (según ILATE, la algebraica se deriva antes que la exponencial).</strong></p>$$u=t \;\Rightarrow\; du=dt, \qquad dv=e^t\,dt \;\Rightarrow\; v=e^t$$</div>
        <div class="step"><p><strong>Aplicar la fórmula \(\int u\,dv=uv-\int v\,du\).</strong></p>$$\int te^t\,dt=te^t-\int e^t\,dt$$</div>
        <div class="step"><p><strong>Resolver la integral resultante y simplificar.</strong></p>$$te^t-\int e^t\,dt=te^t-e^t+c=e^t(t-1)+c$$</div>
        <div class="step"><p><strong>Verificar derivando.</strong> \(\big(e^t(t-1)\big)'=e^t(t-1)+e^t=e^t\cdot t=te^t\), que coincide con el integrando original.</p></div>
        </div>
        <div class="final">\(\displaystyle\int t\,e^{t}\,dt=e^t(t-1)+c\)</div>`,
        ref: 'exp(t)*(t-1)', f: 't*exp(t)', v: 't'
      },
      {
        id: 's2e15', level: 2, type: 'anti',
        q: H`Evaluar \(\displaystyle\int x\cos(5x)\,dx\).`,
        hint: H`Integración por partes con \(u=x\), \(dv=\cos(5x)dx\) (recuerda \(\int\cos(5x)dx=\tfrac15\operatorname{sen}(5x)\)).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando \(x\cos(5x)\) es un producto algebraica-trigonométrica; como se vio en el ejercicio de opción múltiple anterior, la sustitución no reduce esta integral, así que aplicamos partes.</p></div>
        <div class="step"><p><strong>Elegir \(u\) y \(dv\).</strong></p>$$u=x \;\Rightarrow\; du=dx, \qquad dv=\cos(5x)\,dx \;\Rightarrow\; v=\frac15\operatorname{sen}(5x)$$</div>
        <div class="step"><p><strong>Aplicar la fórmula \(\int u\,dv=uv-\int v\,du\).</strong></p>$$\int x\cos(5x)\,dx=\frac{x}{5}\operatorname{sen}(5x)-\int\frac15\operatorname{sen}(5x)\,dx$$</div>
        <div class="step"><p><strong>Resolver la nueva integral (directa, con \(u=5x\) mental).</strong></p>$$\int\frac15\operatorname{sen}(5x)\,dx=-\frac{1}{25}\cos(5x)$$</div>
        <div class="step"><p><strong>Sustituir y simplificar.</strong></p>$$\int x\cos(5x)\,dx=\frac{x}{5}\operatorname{sen}(5x)+\frac{1}{25}\cos(5x)+c$$</div>
        </div>
        <div class="final">\(\displaystyle\int x\cos(5x)\,dx=\frac{x}{5}\operatorname{sen}(5x)+\frac{1}{25}\cos(5x)+c\)</div>`,
        ref: 'x*sin(5*x)/5 + cos(5*x)/25', f: 'x*cos(5*x)', v: 'x'
      },
      {
        id: 's2e16', level: 3, type: 'anti',
        q: H`Evaluar \(\displaystyle\int (x^2+2x)\cos x\,dx\) (requiere partes repetidas).`,
        hint: H`Primera pasada con \(u=x^2+2x\), \(dv=\cos x\,dx\); la integral resultante necesita partes de nuevo.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando es un producto polinomio de grado 2 por función trigonométrica; al ser el polinomio de grado \(\ge2\), se necesitará integración por partes más de una vez.</p></div>
        <div class="step"><p><strong>Primera aplicación de partes.</strong> Elegimos \(u=x^2+2x\) (se deriva, reduce grado) y \(dv=\cos x\,dx\):</p>$$u=x^2+2x \;\Rightarrow\; du=(2x+2)\,dx, \qquad dv=\cos x\,dx \;\Rightarrow\; v=\operatorname{sen} x$$</div>
        <div class="step"><p><strong>Sustituir en la fórmula.</strong></p>$$\int(x^2+2x)\cos x\,dx=(x^2+2x)\operatorname{sen} x-\int(2x+2)\operatorname{sen} x\,dx \qquad(1)$$</div>
        <div class="step"><p><strong>Segunda aplicación de partes</strong> (el polinomio bajó a grado 1, aún no es directa). Sobre \(\int(2x+2)\operatorname{sen} x\,dx\), elegimos \(u=2x+2\), \(dv=\operatorname{sen} x\,dx\):</p>$$du=2\,dx, \qquad v=-\cos x$$$$\int(2x+2)\operatorname{sen} x\,dx=-(2x+2)\cos x+2\int\cos x\,dx=-(2x+2)\cos x+2\operatorname{sen} x \qquad(2)$$</div>
        <div class="step"><p><strong>Sustituir (2) en (1) y simplificar.</strong></p>$$\int(x^2+2x)\cos x\,dx=(x^2+2x)\operatorname{sen} x-\big(-(2x+2)\cos x+2\operatorname{sen} x\big)$$$$=(x^2+2x)\operatorname{sen} x+(2x+2)\cos x-2\operatorname{sen} x+c$$</div>
        </div>
        <div class="final">\(\displaystyle\int(x^2+2x)\cos x\,dx=(x^2+2x)\operatorname{sen} x+(2x+2)\cos x-2\operatorname{sen} x+c\)</div>`,
        ref: '(x^2+2*x)*sin(x) + (2*x+2)*cos(x) - 2*sin(x)', f: '(x^2+2*x)*cos(x)', v: 'x'
      },
      {
        id: 's2e17', level: 3, type: 'anti',
        q: H`Evaluar \(\displaystyle\int e^{x}\cos x\,dx\) (caso cíclico).`,
        hint: H`Aplica partes dos veces; la integral original reaparecerá. Agrupa y despeja como en el ejemplo resuelto.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando \(e^x\cos x\) es un producto exponencial-trigonométrico donde ningún factor se simplifica al derivar (ambos "regeneran" su tipo); es el caso cíclico de integración por partes.</p></div>
        <div class="step"><p><strong>Primera aplicación de partes.</strong> Con \(u=e^x\), \(dv=\cos x\,dx\) (\(du=e^x dx\), \(v=\operatorname{sen} x\)):</p>$$\int e^x\cos x\,dx=e^x\operatorname{sen} x-\int e^x\operatorname{sen} x\,dx \qquad(1)$$</div>
        <div class="step"><p><strong>Segunda aplicación de partes.</strong> Sobre \(\int e^x\operatorname{sen} x\,dx\), con \(u=e^x\), \(dv=\operatorname{sen} x\,dx\) (\(du=e^x dx\), \(v=-\cos x\)):</p>$$\int e^x\operatorname{sen} x\,dx=-e^x\cos x+\int e^x\cos x\,dx \qquad(2)$$</div>
        <div class="step"><p><strong>Sustituir (2) en (1): la integral original reaparece.</strong></p>$$\int e^x\cos x\,dx=e^x\operatorname{sen} x+e^x\cos x-\int e^x\cos x\,dx$$</div>
        <div class="step"><p><strong>Tratar la integral como incógnita algebraica y despejar.</strong> Llamando \(I=\int e^x\cos x\,dx\):</p>$$2I=e^x(\operatorname{sen} x+\cos x) \;\Rightarrow\; I=\frac12e^x(\operatorname{sen} x+\cos x)+c$$</div>
        </div>
        <div class="final">\(\displaystyle\int e^{x}\cos x\,dx=\frac12 e^{x}(\operatorname{sen} x+\cos x)+c\)</div>`,
        ref: '(exp(x)*sin(x)+exp(x)*cos(x))/2', f: 'exp(x)*cos(x)', v: 'x'
      },
      {
        id: 's2e18', level: 3, type: 'anti',
        q: H`Evaluar \(\displaystyle\int\frac{(\ln x)^2}{x^3}\,dx\) mediante partes repetidas.`,
        hint: H`Primera pasada con \(u=(\ln x)^2\), \(dv=x^{-3}dx\); la integral resultante, \(\int(\ln x)x^{-3}dx\), necesita partes de nuevo.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> El integrando es un producto logarítmica-algebraica; según ILATE, la logarítmica se deriva primero, pero como aparece al cuadrado, se necesitará partes dos veces.</p></div>
        <div class="step"><p><strong>Primera aplicación de partes.</strong> Con \(u=(\ln x)^2\), \(dv=x^{-3}dx\):</p>$$du=\frac{2\ln x}{x}\,dx, \qquad v=-\frac{1}{2x^2}$$$$\int\frac{(\ln x)^2}{x^3}\,dx=-\frac{(\ln x)^2}{2x^2}+\int\frac{\ln x}{x^3}\,dx \qquad(1)$$</div>
        <div class="step"><p><strong>Segunda aplicación de partes</strong> (sobre \(\int(\ln x)x^{-3}dx\), aún no directa). Con \(u=\ln x\), \(dv=x^{-3}dx\):</p>$$du=\frac{dx}{x}, \qquad v=-\frac{1}{2x^2}$$$$\int\frac{\ln x}{x^3}\,dx=-\frac{\ln x}{2x^2}+\frac12\int x^{-3}\,dx=-\frac{\ln x}{2x^2}-\frac{1}{4x^2} \qquad(2)$$</div>
        <div class="step"><p><strong>Sustituir (2) en (1) y agrupar sobre un denominador común.</strong></p>$$\int\frac{(\ln x)^2}{x^3}\,dx=-\frac{(\ln x)^2}{2x^2}-\frac{\ln x}{2x^2}-\frac{1}{4x^2}+c=-\frac{(\ln x)^2+\ln x+\tfrac12}{2x^2}+c$$</div>
        </div>
        <div class="final">\(\displaystyle\int\frac{(\ln x)^2}{x^3}\,dx=-\frac{(\ln x)^2+\ln x+\tfrac12}{2x^2}+c\)</div>`,
        ref: '-((ln(x))^2 + ln(x) + 1/2)/(2*x^2)', f: '(ln(x))^2/x^3', v: 'x'
      },
      {
        id: 's2e19', level: 3, type: 'num',
        q: H`Evaluar \(\displaystyle\int_0^1 x\sqrt{(x^2+1)^3}\,dx\).`,
        hint: H`Sustituye \(u=x^2+1\); cambia los límites y usa la regla de la potencia con exponente \(3/2\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> Escribiendo \(\sqrt{(x^2+1)^3}=(x^2+1)^{3/2}\), la función interior es \(x^2+1\), y su diferencial \(2x\,dx\) es proporcional al factor \(x\,dx\) presente: sustitución con cambio de límites.</p></div>
        <div class="step"><p><strong>Elegir \(u\) y calcular \(du\).</strong></p>$$u=x^2+1, \qquad du=2x\,dx \;\Rightarrow\; x\,dx=\frac12du$$</div>
        <div class="step"><p><strong>Cambiar los límites.</strong></p>$$x=0 \Rightarrow u=1, \qquad x=1 \Rightarrow u=2$$</div>
        <div class="step"><p><strong>Sustituir e integrar en la nueva variable.</strong></p>$$\int_0^1 x(x^2+1)^{3/2}\,dx=\frac12\int_1^2 u^{3/2}\,du=\frac12\left[\frac{u^{5/2}}{5/2}\right]_1^2$$</div>
        <div class="step"><p><strong>Evaluar en los nuevos límites y simplificar.</strong></p>$$\frac15\left(2^{5/2}-1^{5/2}\right)=\frac15\left(4\sqrt2-1\right)=\frac{4\sqrt2-1}{5}$$</div>
        </div>
        <div class="final">\(\displaystyle\int_0^1 x\sqrt{(x^2+1)^3}\,dx=\frac{4\sqrt2-1}{5}\)</div>`,
        answer: '(4*sqrt(2)-1)/5', verify: { kind: 'int', f: 'x*(x^2+1)^(3/2)', v: 'x', a: '0', b: '1' }
      },
      {
        id: 's2e20', level: 2, type: 'choice',
        q: H`¿Qué transformación conviene aplicar antes de integrar \(\displaystyle\int \operatorname{sen}^2 x\,dx\)?`,
        hint: H`No hay sustitución directa útil (el diferencial de \(\operatorname{sen} x\) no aparece como factor). Piensa en identidades de rebaje de potencia.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Revisar si la sustitución funciona.</strong> Si se intentara \(u=\operatorname{sen} x\), sería \(du=\cos x\,dx\), pero ese factor no está presente en el integrando \(\operatorname{sen}^2x\): la sustitución no reduce nada.</p></div>
        <div class="step"><p><strong>Revisar si conviene partes.</strong> El integrando no es un producto de dos funciones de tipo distinto (es \(\operatorname{sen} x\cdot\operatorname{sen} x\)), así que integrar por partes no simplifica la expresión.</p></div>
        <div class="step"><p><strong>Reconocer la transformación correcta.</strong> La identidad de rebaje de potencia \(\operatorname{sen}^2x=\dfrac{1-\cos2x}{2}\) convierte el integrando en una suma directa de la tabla básica (una constante más un coseno de argumento \(2x\)).</p></div>
        </div>
        <div class="final">Identidad \(\operatorname{sen}^2 x=\dfrac{1-\cos 2x}{2}\)</div>`,
        options: [
          H`Identidad \(\operatorname{sen} 2x=2\operatorname{sen} x\cos x\)`,
          H`Identidad \(\operatorname{sen}^2 x=\dfrac{1-\cos2x}{2}\)`,
          H`Sustitución \(u=\operatorname{sen} x\)`,
          H`Integración por partes`
        ],
        correct: 1
      },
      {
        id: 's2e21', level: 2, type: 'anti',
        q: H`Evaluar \(\displaystyle\int \operatorname{sen}^2 x\,dx\) usando la identidad de rebaje de potencia.`,
        hint: H`\(\operatorname{sen}^2 x=\dfrac{1-\cos2x}{2}\); integra cada término de la suma resultante.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> Como se estableció en el ejercicio anterior, ni la sustitución ni las partes simplifican \(\operatorname{sen}^2x\); usamos la identidad de rebaje de potencia.</p></div>
        <div class="step"><p><strong>Aplicar la identidad.</strong></p>$$\operatorname{sen}^2x=\frac{1-\cos2x}{2} \;\Rightarrow\; \int\operatorname{sen}^2x\,dx=\frac12\int dx-\frac12\int\cos2x\,dx$$</div>
        <div class="step"><p><strong>Resolver el segundo término</strong> (sustitución mental \(u=2x\), \(du=2\,dx\)):</p>$$\int\cos2x\,dx=\frac12\operatorname{sen} 2x$$</div>
        <div class="step"><p><strong>Sustituir y simplificar.</strong></p>$$\int\operatorname{sen}^2x\,dx=\frac{x}{2}-\frac12\cdot\frac{\operatorname{sen} 2x}{2}+c=\frac{x}{2}-\frac{\operatorname{sen} 2x}{4}+c$$</div>
        </div>
        <div class="final">\(\displaystyle\int \operatorname{sen}^2 x\,dx=\frac{x}{2}-\frac{\operatorname{sen} 2x}{4}+c\)</div>`,
        ref: 'x/2 - sin(2*x)/4', f: 'sin(x)^2', v: 'x'
      },
      {
        id: 's2e22', level: 2, type: 'anti',
        q: H`Evaluar \(\displaystyle\int \cos^2 x\,dx\) usando la identidad de rebaje de potencia.`,
        hint: H`\(\cos^2 x=\dfrac{1+\cos2x}{2}\).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Elegir el método.</strong> Igual que con \(\operatorname{sen}^2x\), ni la sustitución ni las partes simplifican \(\cos^2x\); usamos la identidad de rebaje de potencia correspondiente.</p></div>
        <div class="step"><p><strong>Aplicar la identidad.</strong></p>$$\cos^2x=\frac{1+\cos2x}{2} \;\Rightarrow\; \int\cos^2x\,dx=\frac12\int dx+\frac12\int\cos2x\,dx$$</div>
        <div class="step"><p><strong>Resolver el segundo término</strong> (mismo cálculo que en el ejercicio anterior):</p>$$\int\cos2x\,dx=\frac12\operatorname{sen} 2x$$</div>
        <div class="step"><p><strong>Sustituir y simplificar.</strong> El resultado es análogo al de \(\operatorname{sen}^2x\), pero con signo opuesto en el término oscilante:</p>$$\int\cos^2x\,dx=\frac{x}{2}+\frac{\operatorname{sen} 2x}{4}+c$$</div>
        </div>
        <div class="final">\(\displaystyle\int \cos^2 x\,dx=\frac{x}{2}+\frac{\operatorname{sen} 2x}{4}+c\)</div>`,
        ref: 'x/2 + sin(2*x)/4', f: 'cos(x)^2', v: 'x'
      }
    ]
  });
})();
