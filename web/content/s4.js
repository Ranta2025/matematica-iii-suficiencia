(function () {
  const H = String.raw;
  window.SESSIONS = window.SESSIONS || [];
  window.SESSIONS.push({
    id: 's4',
    order: 4,
    code: 'CE4',
    topic: 'Tema I · Cálculo integral',
    title: 'Aplicaciones de la integral definida: áreas y volúmenes',
    short: 'Áreas y volúmenes',
    goals: [
      'Calcular el área de una región limitada por una curva y el eje $x$ cuando la curva cambia de signo, dividiendo en los ceros de la función.',
      'Calcular el área entre dos curvas, hallando sus puntos de intersección y decidiendo si hace falta dividir el intervalo.',
      'Reconocer cuándo conviene integrar respecto a $y$ en vez de respecto a $x$, y plantear el área con $x=f(y)$.',
      'Calcular volúmenes de sólidos mediante secciones transversales $V=\\int A(x)\\,dx$.',
      'Calcular volúmenes de sólidos de revolución con el método de discos y con el método de arandelas, incluyendo rotaciones alrededor de rectas $y=k$ o $x=k$.',
      'Reconocer el método de casquetes cilíndricos como alternativa para volúmenes de revolución.'
    ],
    theory: [
      {
        h: '1. El área bajo una curva y el caso con cambios de signo',
        html: H`<p>El problema que originó la definición de integral de Riemann da directamente una primera aplicación: si $f(x)\ge 0$ en $[a,b]$, el área de la región limitada por $y=f(x)$, el eje $x$, y las rectas $x=a$, $x=b$ es:</p>
        <div class="key">$$A_R = \int_a^b f(x)\,dx$$</div>
        <p>Pero si $f$ cambia de signo dentro de $[a,b]$, la integral ordinaria ya no da el área: en los tramos donde $f(x)<0$ la integral es negativa, y al sumarla con los tramos positivos se cancela parte del área real. La solución es dividir $[a,b]$ en los <strong>ceros de $f$</strong> y tomar el valor absoluto de la integral en cada tramo:</p>
        <div class="key">$$A_R = \int_a^{c} f(x)\,dx \;+\; \left|\int_{c}^{d} f(x)\,dx\right| \;+\; \int_{d}^{b} f(x)\,dx \qquad \text{(si $f\ge 0$ en $[a,c]$ y $[d,b]$, $f\le 0$ en $[c,d]$)}$$</div>
        <p>De forma compacta, el área total siempre puede escribirse como $A_R=\displaystyle\int_a^b |f(x)|\,dx$, entendiendo que en la práctica ese valor absoluto se calcula dividiendo en los ceros y sumando magnitudes, no integrando literalmente $|f(x)|$ a mano.</p>
        <p><strong>Procedimiento:</strong></p>
        <ol>
          <li>Hallar los ceros de $f$ en $[a,b]$ (resolver $f(x)=0$).</li>
          <li>Determinar el signo de $f$ en cada subintervalo que definen esos ceros (probando un punto interior de cada uno).</li>
          <li>Integrar por separado en cada subintervalo y sumar los valores absolutos de los resultados.</li>
        </ol>
        <div class="warn">Error común: integrar directamente de $a$ a $b$ sin revisar el signo de $f$. Si la curva cambia de signo, ese resultado no es el área: es la diferencia entre el área por encima y por debajo del eje $x$ (puede incluso salir un número mucho menor que el área real, o negativo).</div>`
      },
      {
        h: '2. Área entre dos curvas',
        html: H`<p>Si una región está limitada, en el intervalo $[a,b]$, por dos curvas $y=f(x)$ (arriba) y $y=g(x)$ (abajo), con $f(x)\ge g(x)$ en todo el intervalo, su área es la diferencia entre el área bajo $f$ y el área bajo $g$:</p>
        <div class="key">$$A_S = \int_a^b f(x)\,dx - \int_a^b g(x)\,dx = \int_a^b \big[f(x)-g(x)\big]\,dx$$</div>
        <p>La resta $f(x)-g(x)$ sigue siendo válida aunque ambas curvas tomen valores negativos, porque geométricamente equivale a trasladar verticalmente la región hasta que $g$ coincida con el eje $x$; una traslación no cambia el área.</p>
        <p><strong>Procedimiento:</strong></p>
        <ol>
          <li>Graficar (al menos mentalmente, o con un boceto) ambas curvas para identificar cuál está arriba.</li>
          <li>Hallar los puntos de intersección resolviendo $f(x)=g(x)$: esos son los límites de integración $a,b$ (o los puntos donde hay que dividir, si el intervalo viene dado de otra forma).</li>
          <li>Verificar el orden ($f\ge g$ o $g\ge f$) evaluando ambas funciones en un punto interior del intervalo.</li>
          <li>Integrar $f(x)-g(x)$ (o $g(x)-f(x)$, según cuál esté arriba) entre los límites correspondientes.</li>
        </ol>
        <div class="note">Si el intervalo dado en el problema es más amplio que el que va de una intersección a otra, y las curvas se cruzan dentro de él, hay que dividir el intervalo en los puntos de cruce, igual que con los ceros de una sola función (apartado 1): en cada tramo cambia cuál curva está arriba.</div>`
      },
      {
        h: '3. Curvas que se cruzan: dividir el intervalo',
        html: H`<p>Cuando dos curvas se cortan más de una vez dentro del intervalo de interés, el orden entre $f$ y $g$ se invierte en cada cruce. Hay que:</p>
        <ol>
          <li>Hallar <strong>todos</strong> los puntos de intersección dentro del intervalo (no solo los que definen el intervalo completo).</li>
          <li>Dividir el intervalo en esos puntos.</li>
          <li>En cada subintervalo, integrar la diferencia con el orden correcto (la curva que esté arriba en ese tramo menos la que esté abajo).</li>
          <li>Sumar los valores absolutos de las integrales de cada tramo.</li>
        </ol>
        <div class="key">$$A = \int_a^{c} \big[f(x)-g(x)\big]\,dx + \int_{c}^{b} \big[g(x)-f(x)\big]\,dx \qquad \text{(si las curvas se cruzan en } x=c\text{)}$$</div>
        <p>Esto es exactamente el mismo principio del área bajo una sola curva con cambio de signo (apartado 1), aplicado ahora a la función $f(x)-g(x)$: sus ceros son los puntos de intersección de las curvas.</p>`
      },
      {
        h: '4. Integrar respecto a la variable y',
        html: H`<p>En ocasiones las curvas que limitan la región están dadas de forma natural como funciones de $y$ (es decir, $x=f(y)$), o la región se puede describir con muchas menos divisiones si se recorre en la dirección de $y$. En ese caso, si $x=f(y)$ está a la derecha y $x=g(y)$ a la izquierda, con $f(y)\ge g(y)$ en $[c,d]$:</p>
        <div class="key">$$A_S = \int_c^d \big[f(y)-g(y)\big]\,dy$$</div>
        <p><strong>¿Cuándo conviene integrar respecto a $y$?</strong> Dos señales:</p>
        <ul>
          <li>Las ecuaciones de las curvas ya están dadas explícitamente en función de $y$ (despejar $x$ sería innecesario o complicado).</li>
          <li>Integrar respecto a $x$ obligaría a dividir la región en varias partes, mientras que respecto a $y$ la región se describe con una sola integral.</li>
        </ul>
        <p>El procedimiento es idéntico al del área entre curvas (apartado 2), intercambiando los papeles de $x$ y $y$: se buscan las ordenadas de intersección (resolviendo $f(y)=g(y)$), se verifica el orden, y se integra la diferencia entre $c$ y $d$.</p>`
      },
      {
        h: '5. Volúmenes por secciones transversales',
        html: H`<p>Para un sólido general, se corta perpendicularmente a un eje (por ejemplo el eje $x$) obteniendo, en cada posición $x\in[a,b]$, una sección plana de área $A(x)$. El volumen de una rebanada delgada de espesor $\Delta x$ en la posición $x_i^*$ es aproximadamente el de un cilindro recto: $V_{S_i} \approx A(x_i^*)\,\Delta x$. Sumando todas las rebanadas y tomando el límite cuando $n\to\infty$ (una suma de Riemann):</p>
        <div class="key">$$V = \int_a^b A(x)\,dx$$</div>
        <p>La dificultad de este método está casi siempre en encontrar la expresión de $A(x)$: depende de la forma del sólido y hay que analizarla geométricamente en cada problema (por ejemplo, secciones cuadradas, triangulares, semicirculares, etc., cuyo lado o radio depende de $x$).</p>`
      },
      {
        h: '6. Sólidos de revolución: método de discos',
        html: H`<p>El caso particular más frecuente es cuando el sólido se genera al girar una región plana alrededor de un eje: las secciones transversales son entonces círculos, y $A(x)=\pi r(x)^2$, donde $r(x)$ es el radio del disco en la posición $x$.</p>
        <p><strong>Rotación alrededor del eje $x$</strong> de la región bajo $y=f(x)$ (con $f(x)\ge 0$) entre $x=a$ y $x=b$: el radio de cada disco es $r(x)=f(x)$, la altura (espesor) es $\Delta x$, y:</p>
        <div class="key">$$V = \pi\int_a^b \big[f(x)\big]^2\,dx$$</div>
        <svg viewBox="0 0 340 190" width="100%" style="max-width:420px">
          <line x1="20" y1="100" x2="320" y2="100" stroke="var(--grid)" stroke-width="1"/>
          <path d="M40,100 C70,70 110,58 150,55 C190,58 230,70 260,90" fill="none" stroke="var(--ink)" stroke-width="2"/>
          <path d="M40,100 C70,130 110,142 150,145 C190,142 230,130 260,110" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.5" stroke-dasharray="4,3"/>
          <ellipse cx="150" cy="100" rx="10" ry="45" fill="var(--accent)" opacity="0.28" stroke="var(--accent)" stroke-width="1.5"/>
          <line x1="150" y1="100" x2="150" y2="56" stroke="var(--hl)" stroke-width="1.5"/>
          <text x="154" y="80" font-size="11" fill="var(--muted)">r(x)</text>
          <text x="145" y="115" font-size="11" fill="var(--muted)">x</text>
        </svg>
        <p>El disco sombreado (una rebanada del sólido de revolución) tiene radio $r(x)=f(x)$ y espesor $\Delta x$; su volumen es $\pi [f(x)]^2 \Delta x$, y la integral suma todas las rebanadas.</p>
        <p><strong>Rotación alrededor del eje $y$</strong> de la región a la izquierda de $x=g(y)$ (con $g(y)\ge 0$) entre $y=c$ y $y=d$: el radio es $r(y)=g(y)$, y por simetría:</p>
        <div class="key">$$V = \pi\int_c^d \big[g(y)\big]^2\,dy$$</div>`
      },
      {
        h: '7. Sólidos de revolución: método de arandelas',
        html: H`<p>Si la región que gira está limitada por <strong>dos</strong> curvas (una región entre $f$ y $g$, no bajo una sola curva), cada sección transversal ya no es un disco lleno sino una <strong>arandela</strong> (un anillo): un círculo con un agujero circular en el centro. Si $R(x)$ es el radio exterior y $\rho(x)$ el radio interior:</p>
        <div class="key">$$V = \pi\int_a^b \Big[R(x)^2 - \rho(x)^2\Big]\,dx$$</div>
        <svg viewBox="0 0 200 200" width="100%" style="max-width:260px">
          <circle cx="100" cy="100" r="80" fill="var(--accent)" opacity="0.28" stroke="var(--accent)" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="40" fill="var(--bg, #fff)" stroke="var(--accent)" stroke-width="1.5"/>
          <line x1="100" y1="100" x2="180" y2="100" stroke="var(--hl)" stroke-width="1.5"/>
          <line x1="100" y1="100" x2="140" y2="100" stroke="var(--ink)" stroke-width="1.5"/>
          <text x="130" y="94" font-size="11" fill="var(--muted)">R</text>
          <text x="112" y="94" font-size="11" fill="var(--muted)">ρ</text>
        </svg>
        <p>El radio exterior es siempre la distancia entre el eje de rotación y la curva más alejada de él; el radio interior, la distancia al eje desde la curva más cercana. <strong>Ambos se miden siempre como distancias (positivas)</strong>, no como los valores de $y$ directamente, lo cual es crucial cuando el eje de giro no es uno de los ejes coordenados (ver apartado 8).</p>
        <div class="warn">Error común: usar $f(x)^2-g(x)^2$ sin comprobar que $f$ y $g$ sean realmente el radio exterior e interior desde el eje de giro. Si el eje de rotación no es el eje $x$, hay que restar primero la posición del eje antes de elevar al cuadrado (ver el apartado siguiente).</div>`
      },
      {
        h: '8. Rotación alrededor de una recta y = k o x = k',
        html: H`<p>Cuando el eje de giro es una recta horizontal $y=k$ (distinta del eje $x$) o vertical $x=k$ (distinta del eje $y$), los radios se calculan como la <strong>distancia desde el eje hasta la curva</strong>, no como el valor de la curva:</p>
        <div class="key">
          $$\text{Giro alrededor de } y=k: \quad r(x) = |f(x) - k|$$
          $$\text{Giro alrededor de } x=k: \quad r(y) = |g(y) - k|$$
        </div>
        <p>Si la región está entre dos curvas $f$ (más lejos del eje) y $g$ (más cerca), y se gira alrededor de $y=k$ con toda la región del mismo lado del eje (por ejemplo $f(x)\ge g(x)\ge k$):</p>
        <div class="key">$$V = \pi\int_a^b \Big[(f(x)-k)^2 - (g(x)-k)^2\Big]\,dx$$</div>
        <p>Es un error común olvidar el desplazamiento $-k$ y usar directamente $f(x)^2-g(x)^2$; eso solo es correcto cuando $k=0$ (rotación alrededor del propio eje $x$). De forma análoga, al girar alrededor de una recta vertical $x=k$, los radios se miden en la dirección horizontal como $|x-k|$, y conviene expresar las curvas como funciones de $y$ para plantear la integral en esa variable.</p>
        <div class="note">Procedimiento general para cualquier volumen de revolución (discos, arandelas, cualquier eje): (1) graficar la región y el eje de giro; (2) identificar si el corte perpendicular al eje produce un disco o una arandela; (3) escribir el radio (o los dos radios) como distancia al eje; (4) plantear $\pi\int [\text{radio}]^2\,dx$ (o $dy$) y (5) integrar.</p>`
      },
      {
        h: '9. Método de los casquetes cilíndricos (mención)',
        html: H`<p>Cuando integrar por discos o arandelas obliga a despejar $x$ en función de $y$ (o viceversa) de forma incómoda, existe una alternativa: el <strong>método de los casquetes cilíndricos</strong>. En vez de rebanar el sólido perpendicularmente al eje de giro, se lo descompone en cilindros huecos delgados (cáscaras) concéntricos con el eje.</p>
        <p>Para la región bajo $y=f(x)\ge 0$ en $[a,b]$ (con $0\le a$), girada alrededor del eje $y$, cada cáscara a distancia $x$ del eje tiene radio $x$, altura $f(x)$ y espesor $dx$; su volumen es aproximadamente $2\pi x f(x)\,dx$ (la circunferencia $2\pi x$ por la altura por el espesor). Sumando:</p>
        <div class="key">$$V = 2\pi\int_a^b x\,f(x)\,dx$$</div>
        <p>Este método es especialmente útil cuando el eje de giro es vertical pero las curvas están dadas cómodamente en función de $x$ (evitando así despejar la inversa). Se profundizará en él con ejercicios adicionales; aquí basta reconocer la fórmula y saber cuándo puede convenir más que discos o arandelas.</p>`
      }
    ],
    examples: [
      {
        title: 'Ejemplo 1 · Área con cambio de signo',
        statement: H`Determinar el área de la región limitada por el gráfico de $f(x)=x^3-4x$ y el eje de las abscisas en el intervalo $[-1,3]$.`,
        steps: [
          H`<strong>Paso 1 (graficar y hallar los ceros).</strong> $f(x)=x^3-4x=x(x^2-4)=x(x-2)(x+2)$, con ceros en $x=-2,0,2$. Dentro de $[-1,3]$ los ceros relevantes son $x=0$ y $x=2$, que dividen el intervalo en tres tramos: $[-1,0]$, $[0,2]$, $[2,3]$.`,
          H`<strong>Paso 2 (signo en cada tramo).</strong> Probando un punto interior de cada tramo: $f(-0.5)=-0.125+2=1.875>0$ en $[-1,0]$; $f(1)=1-4=-3<0$ en $[0,2]$; $f(2.5)=15.625-10=5.625>0$ en $[2,3]$.`,
          H`<strong>Paso 3 (antiderivada).</strong> $$\int (x^3-4x)\,dx = \dfrac{x^4}{4}-2x^2+C$$`,
          H`<strong>Paso 4 (integrar en cada tramo).</strong> $$\int_{-1}^{0}(x^3-4x)\,dx = \left[\dfrac{x^4}{4}-2x^2\right]_{-1}^{0} = 0 - \left(\dfrac14-2\right) = \dfrac74$$ $$\int_{0}^{2}(x^3-4x)\,dx = \left[\dfrac{x^4}{4}-2x^2\right]_{0}^{2} = (4-8)-0 = -4$$ $$\int_{2}^{3}(x^3-4x)\,dx = \left[\dfrac{x^4}{4}-2x^2\right]_{2}^{3} = \left(\dfrac{81}{4}-18\right)-(4-8) = \dfrac{25}{4}$$`,
          H`<strong>Paso 5 (sumar valores absolutos).</strong> $$A_R = \dfrac74 + |-4| + \dfrac{25}{4} = \dfrac74+4+\dfrac{25}{4} = \dfrac{7+16+25}{4} = \dfrac{48}{4} = 12$$`
        ],
        answer: H`$A_R = 12\ u^2$.`
      },
      {
        title: 'Ejemplo 2 · Área entre dos curvas (un solo tramo)',
        statement: H`Determinar el área de la región limitada por la recta $y=x+3$ y la parábola $y=x^2+1$.`,
        steps: [
          H`<strong>Paso 1 (intersecciones).</strong> $x^2+1=x+3 \Rightarrow x^2-x-2=0 \Rightarrow (x+1)(x-2)=0 \Rightarrow x=-1,\ x=2$. Como no se especifica un intervalo adicional, la región natural es la acotada por ambas curvas entre sus dos puntos de corte: $[-1,2]$.`,
          H`<strong>Paso 2 (orden de las curvas).</strong> En $x=0$ (punto interior): recta $=3$, parábola $=1$; la recta está arriba: $x+3 \ge x^2+1$ en $[-1,2]$.`,
          H`<strong>Paso 3 (plantear la integral).</strong> $$A = \int_{-1}^{2}\big[(x+3)-(x^2+1)\big]\,dx = \int_{-1}^{2}\big(-x^2+x+2\big)\,dx$$`,
          H`<strong>Paso 4 (antiderivada y evaluación).</strong> $$\left[-\dfrac{x^3}{3}+\dfrac{x^2}{2}+2x\right]_{-1}^{2} = \left(-\dfrac83+2+4\right) - \left(\dfrac13+\dfrac12-2\right) = \dfrac{10}{3} - \left(-\dfrac76\right)$$`,
          H`<strong>Paso 5 (simplificar).</strong> $$A = \dfrac{10}{3}+\dfrac{7}{6} = \dfrac{20}{6}+\dfrac{7}{6} = \dfrac{27}{6}=\dfrac{9}{2}$$ <div class="warn">Atención: al evaluar en $x=-1$ hay que tener cuidado con los signos: $-\dfrac{(-1)^3}{3}=+\dfrac13$.</div>`
        ],
        answer: H`$A = \dfrac{9}{2} = 4.5\ u^2$.`
      },
      {
        title: 'Ejemplo 3 · Área entre curvas que se cruzan (dos tramos)',
        statement: H`Determinar el área de la región limitada por la recta $y=x+3$, la recta vertical $x=3$, y la parábola $y=x^2+1$.`,
        steps: [
          H`<strong>Paso 1 (graficar e identificar el problema).</strong> Las mismas curvas del Ejemplo 2 se cortan en $x=-1$ y $x=2$ (ya calculado). Ahora el intervalo llega hasta $x=3$, así que dentro de $[-1,3]$ las curvas cambian de orden en $x=2$: la región tiene dos partes.`,
          H`<strong>Paso 2 (verificar el orden en cada tramo).</strong> En $[-1,2]$: recta arriba (como en el Ejemplo 2). En $[2,3]$, probando $x=2.5$: parábola $=7.25$, recta $=5.5$; ahora la parábola está arriba.`,
          H`<strong>Paso 3 (plantear las dos integrales).</strong> $$A = \int_{-1}^{2}\big[(x+3)-(x^2+1)\big]\,dx + \int_{2}^{3}\big[(x^2+1)-(x+3)\big]\,dx$$`,
          H`<strong>Paso 4 (primera integral, ya calculada en el Ejemplo 2 con otros límites).</strong> $$\int_{-1}^{2}\big(-x^2+x+2\big)\,dx = \dfrac{10}{3} \quad\text{(evaluando solo hasta $x=2$, no hasta $x=1$)}$$ Nota: aquí el límite superior es $2$ (no $1$ como en un cálculo parcial del Ejemplo 2); al evaluar $\left[-\tfrac{x^3}{3}+\tfrac{x^2}{2}+2x\right]$ en $2$ se obtiene $-\tfrac83+2+4=\tfrac{10}{3}$, y en $-1$ se obtiene $-\tfrac76$; la diferencia es $\tfrac{10}{3}+\tfrac76 = \tfrac{27}{6}=4.5$.`,
          H`<strong>Paso 5 (segunda integral).</strong> $$\int_{2}^{3}\big(x^2-x-2\big)\,dx = \left[\dfrac{x^3}{3}-\dfrac{x^2}{2}-2x\right]_{2}^{3} = \left(9-4.5-6\right)-\left(\dfrac83-2-4\right) = -1.5-\left(-\dfrac{10}{3}\right) = \dfrac{11}{6}$$`,
          H`<strong>Paso 6 (sumar).</strong> $$A = 4.5 + \dfrac{11}{6} = \dfrac{27}{6}+\dfrac{11}{6} = \dfrac{38}{6} = \dfrac{19}{3} \approx 6.3333$$`
        ],
        answer: H`$A = \dfrac{19}{3} \approx 6.3333\ u^2$.`
      },
      {
        title: 'Ejemplo 4 · Área integrando respecto a y',
        statement: H`Determinar el área de la región limitada por $x=2y-y^2$ y $x=y^2-4y$, con $y\in[0,3]$.`,
        steps: [
          H`<strong>Paso 1 (por qué integrar respecto a y).</strong> Ambas curvas están dadas de forma natural como $x=f(y)$; despejarlas como funciones de $x$ obligaría a trabajar con dos ramas de cada parábola (al abrirse hacia la izquierda). Es mucho más simple integrar respecto a $y$.`,
          H`<strong>Paso 2 (orden entre las curvas).</strong> En $y=1$ (punto interior de $[0,3]$): $f(1)=2(1)-1=1$; $g(1)=1-4=-3$. Se cumple $f(y)\ge g(y)$ en todo $[0,3]$ (puede verificarse que $f(y)-g(y)=6y-2y^2=2y(3-y)\ge 0$ exactamente en $[0,3]$).`,
          H`<strong>Paso 3 (plantear la integral).</strong> $$A = \int_0^3 \big[(2y-y^2)-(y^2-4y)\big]\,dy = \int_0^3 \big(6y-2y^2\big)\,dy$$`,
          H`<strong>Paso 4 (antiderivada y evaluación).</strong> $$\left[3y^2 - \dfrac{2y^3}{3}\right]_0^3 = \left(3(9)-\dfrac{2(27)}{3}\right)-0 = 27-18 = 9$$`
        ],
        answer: H`$A = 9\ u^2$.`
      },
      {
        title: 'Ejemplo 5 · Volumen por discos (rotación alrededor del eje x)',
        statement: H`Determinar el volumen del sólido de revolución generado al girar la región $R$ limitada por la parábola $y=1-x^2$ y el eje $x$, en $[0,1]$, alrededor del eje $x$.`,
        steps: [
          H`<strong>Paso 1 (identificar el radio).</strong> La región está bajo una sola curva $f(x)=1-x^2\ge 0$ en $[0,1]$ y se gira alrededor del propio eje $x$: cada sección transversal es un disco de radio $r(x)=f(x)=1-x^2$.`,
          H`<strong>Paso 2 (plantear la integral).</strong> $$V = \pi\int_0^1 \big[f(x)\big]^2\,dx = \pi\int_0^1 (1-x^2)^2\,dx$$`,
          H`<strong>Paso 3 (expandir el integrando).</strong> $$(1-x^2)^2 = 1-2x^2+x^4$$`,
          H`<strong>Paso 4 (antiderivada y evaluación).</strong> $$V = \pi\left[x-\dfrac{2x^3}{3}+\dfrac{x^5}{5}\right]_0^1 = \pi\left(1-\dfrac23+\dfrac15\right) = \pi\left(\dfrac{15-10+3}{15}\right) = \dfrac{8\pi}{15}$$`
        ],
        answer: H`$V = \dfrac{8\pi}{15} \approx 1.6755\ u^3$.`
      },
      {
        title: 'Ejemplo 6 · Volumen por arandelas (dos curvas)',
        statement: H`Determinar el volumen del sólido generado al girar, alrededor del eje $x$, la región limitada por las parábolas $y=\dfrac14 x^2$ y $y=5-x^2$.`,
        steps: [
          H`<strong>Paso 1 (intersecciones).</strong> $\dfrac14 x^2 = 5-x^2 \Rightarrow \dfrac54 x^2 = 5 \Rightarrow x^2=4 \Rightarrow x=\pm 2$.`,
          H`<strong>Paso 2 (identificar radio exterior e interior).</strong> Para $x\in[-2,2]$, en $x=0$: $5-x^2=5$ y $\tfrac14 x^2=0$; la parábola $y=5-x^2$ está por encima. Al girar alrededor del eje $x$, cada sección es una arandela con radio exterior $R(x)=5-x^2$ y radio interior $\rho(x)=\tfrac14 x^2$ (ambas son ya distancias al eje $x$, porque el eje de giro es el propio eje $x$).`,
          H`<strong>Paso 3 (plantear la integral, usando la simetría).</strong> El integrando depende solo de $x^2$, así que es una función par; se puede integrar en $[0,2]$ y duplicar: $$V = 2\pi\int_0^2 \left[(5-x^2)^2-\left(\dfrac{x^2}{4}\right)^2\right]dx$$`,
          H`<strong>Paso 4 (expandir el integrando).</strong> $$(5-x^2)^2-\dfrac{x^4}{16} = 25-10x^2+x^4-\dfrac{x^4}{16} = 25-10x^2+\dfrac{15}{16}x^4$$`,
          H`<strong>Paso 5 (antiderivada y evaluación en $[0,2]$).</strong> $$\int_0^2\left(25-10x^2+\dfrac{15}{16}x^4\right)dx = \left[25x-\dfrac{10x^3}{3}+\dfrac{3x^5}{16}\right]_0^2 = 50-\dfrac{80}{3}+6 = \dfrac{88}{3}$$`,
          H`<strong>Paso 6 (multiplicar por $2\pi$).</strong> $$V = 2\pi\left(\dfrac{88}{3}\right) = \dfrac{176\pi}{3} \approx 184.31$$`
        ],
        answer: H`$V = \dfrac{176\pi}{3} \approx 184.31\ u^3$.`
      },
      {
        title: 'Ejemplo 7 · Volumen rotando alrededor de una recta y = k',
        statement: H`Determinar el volumen del sólido generado al girar, alrededor de la recta $y=1$, la región limitada por $y=x^2+2$ y las rectas $x=0$, $x=1$ (con $y\ge 1$).`,
        steps: [
          H`<strong>Paso 1 (identificar el eje de giro y el radio).</strong> El eje de giro es $y=1$, no el eje $x$. La curva superior es $f(x)=x^2+2$; como toda la región cumple $f(x)\ge 1$, el radio del disco (aquí hay un solo disco, no arandela, porque el borde inferior de la región coincide con el eje de giro) es la distancia de la curva al eje: $$r(x) = f(x)-1 = x^2+2-1 = x^2+1$$`,
          H`<strong>Paso 2 (plantear la integral).</strong> $$V = \pi\int_0^1 \big[r(x)\big]^2\,dx = \pi\int_0^1 (x^2+1)^2\,dx$$`,
          H`<strong>Paso 3 (expandir el integrando).</strong> $$(x^2+1)^2 = x^4+2x^2+1$$`,
          H`<strong>Paso 4 (antiderivada y evaluación).</strong> $$V = \pi\left[\dfrac{x^5}{5}+\dfrac{2x^3}{3}+x\right]_0^1 = \pi\left(\dfrac15+\dfrac23+1\right) = \pi\left(\dfrac{3+10+15}{15}\right) = \dfrac{28\pi}{15}$$`,
          H`<strong>Comparación:</strong> si el eje de giro hubiera sido el eje $x$ ($k=0$) en vez de $y=1$, el radio habría sido simplemente $f(x)=x^2+2$, dando un volumen mucho mayor; el desplazamiento $-k$ es lo que hace que este ejercicio sea distinto (y más pequeño en volumen) que uno equivalente sobre el eje $x$.`
        ],
        answer: H`$V = \dfrac{28\pi}{15} \approx 5.8643\ u^3$.`
      }
    ],
    exercises: [
      {
        id: 's4e01', level: 1, type: 'num',
        q: H`Determinar el área de la región limitada por $y=4-x^2$ y el eje $x$ en $[-2,2]$.`,
        hint: H`En todo $[-2,2]$ se cumple $4-x^2\ge 0$: no hace falta dividir.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Bosquejo y signo.</strong> $y=4-x^2$ es una parábola que abre hacia abajo con ceros en $x=\pm2$; en todo $[-2,2]$ se cumple $4-x^2\ge 0$ (el vértice está en $(0,4)$), así que la curva no cruza el eje $x$ dentro del intervalo y no hace falta dividirlo.</p></div>
        <div class="step"><p><strong>Plantear la integral.</strong> Como $f(x)\ge 0$ en todo el intervalo, el área es directamente:</p>$$A=\int_{-2}^{2}(4-x^2)\,dx$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\left[4x-\dfrac{x^3}{3}\right]_{-2}^{2} = \left(8-\dfrac83\right)-\left(-8+\dfrac83\right) = 16-\dfrac{16}{3} = \dfrac{32}{3}$$</div>
        </div>
        <div class="final">$A = \dfrac{32}{3} \approx 10.67\ u^2$.</div>`,
        answer: '32/3', verify: { kind: 'int', f: '4-x^2', v: 'x', a: '-2', b: '2' }
      },
      {
        id: 's4e02', level: 1, type: 'num',
        q: H`Determinar el área de la región limitada por $y=x$ y el eje $x$ en $[-2,3]$ (la recta cambia de signo).`,
        hint: H`Divide en $x=0$: en $[-2,0]$ la recta es negativa, en $[0,3]$ es positiva.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Bosquejo y cero de $f$.</strong> $y=x$ es una recta que pasa por el origen: es negativa en $[-2,0]$ y positiva en $[0,3]$. Su único cero en $[-2,3]$ es $x=0$, así que hay que dividir el intervalo ahí.</p></div>
        <div class="step"><p><strong>Integrar en cada tramo.</strong></p>$$\int_{-2}^{0} x\,dx = \left[\dfrac{x^2}{2}\right]_{-2}^0 = 0-2=-2$$$$\int_{0}^{3} x\,dx = \left[\dfrac{x^2}{2}\right]_0^3 = 4.5$$</div>
        <div class="step"><p><strong>Tomar valores absolutos y sumar.</strong> El primer tramo dio negativo porque ahí $f<0$; se toma su valor absoluto antes de sumar:</p>$$A = |-2|+4.5 = 2+4.5 = 6.5$$</div>
        </div>
        <div class="final">$A = 6.5\ u^2$.</div>`,
        answer: '6.5', verify: { kind: 'int', f: 'abs(x)', v: 'x', a: '-2', b: '3' }
      },
      {
        id: 's4e03', level: 1, type: 'num',
        q: H`Determinar el área de la región entre $y=x$ y $y=x^2$ en $[0,1]$.`,
        hint: H`Compara ambas en un punto interior, por ejemplo $x=0.5$, para saber cuál está arriba.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Bosquejo y orden de las curvas.</strong> En $[0,1]$, la recta $y=x$ y la parábola $y=x^2$ solo se tocan en los extremos $x=0$ y $x=1$. Se prueba un punto interior, $x=0.5$: $f(0.5)=0.5$ y $g(0.5)=0.25$, así que la recta está arriba en todo el intervalo.</p></div>
        <div class="step"><p><strong>Plantear la integral.</strong></p>$$A=\int_0^1 (x-x^2)\,dx$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\left[\dfrac{x^2}{2}-\dfrac{x^3}{3}\right]_0^1 = \left(\dfrac12-\dfrac13\right)-0=\dfrac16$$</div>
        </div>
        <div class="final">$A = \dfrac16 \approx 0.1667\ u^2$.</div>`,
        answer: '1/6', verify: { kind: 'int', f: 'x-x^2', v: 'x', a: '0', b: '1' }
      },
      {
        id: 's4e04', level: 1, type: 'choice',
        q: H`Si $f(x)\ge g(x)$ para todo $x\in[a,b]$, ¿qué representa geométricamente $\displaystyle\int_a^b [f(x)-g(x)]\,dx$?`,
        hint: H`Piensa en la resta como una traslación vertical de la región.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Interpretar la resta $f-g$.</strong> Como $f(x)\ge g(x)$ en todo $[a,b]$, restar las dos curvas equivale a trasladar verticalmente toda la región hasta que la curva inferior $g$ coincida con el eje $x$. Una traslación no cambia el área de una región, solo su posición.</p></div>
        <div class="step"><p><strong>Concluir qué representa la integral.</strong> Tras la traslación, la región queda bajo la curva $f-g$ y sobre el eje $x$, así que $\int_a^b[f(x)-g(x)]\,dx$ es exactamente el área comprendida entre las curvas originales $f$ y $g$.</p></div>
        <div class="step"><p><strong>Por qué las demás opciones son incorrectas.</strong> "El área bajo $f$ únicamente" o "bajo $g$ únicamente" ignoran que se resta, no que se integra una sola curva. "El volumen del sólido entre las curvas" confundiría esta integral con $\pi\int_a^b[f(x)^2-g(x)^2]\,dx$, que corresponde a girar la región, no a su área plana.</p></div>
        </div>
        <div class="final">El área de la región comprendida entre las dos curvas.</div>`,
        options: [H`El área bajo $f(x)$ únicamente`, H`El área bajo $g(x)$ únicamente`, H`El área de la región comprendida entre las dos curvas`, H`El volumen del sólido entre las curvas`],
        correct: 2
      },
      {
        id: 's4e05', level: 1, type: 'num',
        q: H`Determinar el volumen del sólido generado al girar, alrededor del eje $x$, la región bajo $y=x$ en $[0,2]$ (un cono).`,
        hint: H`Radio $r(x)=x$; $V=\pi\int_0^2 x^2\,dx$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar el sólido.</strong> La región bajo $y=x$ entre $x=0$ y $x=2$ gira alrededor del propio eje $x$; como está bajo una sola curva, cada sección transversal es un disco (sin agujero), de radio $r(x)=f(x)=x$.</p></div>
        <div class="step"><p><strong>Plantear la integral de discos.</strong></p>$$V=\pi\int_0^2 \big[r(x)\big]^2\,dx = \pi\int_0^2 x^2\,dx$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\pi\left[\dfrac{x^3}{3}\right]_0^2 = \pi\left(\dfrac83-0\right) = \dfrac{8\pi}{3}$$</div>
        </div>
        <div class="final">$V = \dfrac{8\pi}{3} \approx 8.3776\ u^3$.</div>`,
        answer: '8*pi/3', verify: { kind: 'int', f: 'pi*x^2', v: 'x', a: '0', b: '2' }
      },
      {
        id: 's4e06', level: 1, type: 'num',
        q: H`Determinar el volumen del sólido generado al girar, alrededor del eje $y$, la región limitada por $x=y^2$, $x=0$, con $y\in[0,1]$.`,
        hint: H`El radio es $r(y)=y^2$; integra respecto a $y$: $V=\pi\int_0^1 (y^2)^2\,dy$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar el sólido y el eje.</strong> La región está a la izquierda de $x=y^2$, entre $x=0$ y esa parábola, y gira alrededor del eje $y$: conviene expresar el radio como función de $y$, $r(y)=y^2$, e integrar respecto a $y$.</p></div>
        <div class="step"><p><strong>Plantear la integral de discos.</strong></p>$$V=\pi\int_0^1 \big[r(y)\big]^2\,dy = \pi\int_0^1 (y^2)^2\,dy = \pi\int_0^1 y^4\,dy$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\pi\left[\dfrac{y^5}{5}\right]_0^1 = \dfrac{\pi}{5}$$</div>
        </div>
        <div class="final">$V = \dfrac{\pi}{5} \approx 0.6283\ u^3$.</div>`,
        answer: 'pi/5', verify: { kind: 'int', f: 'pi*y^4', v: 'y', a: '0', b: '1' }
      },
      {
        id: 's4e07', level: 2, type: 'num',
        q: H`Determinar el área de la región limitada por el semicírculo $y=\sqrt{25-x^2}$ y las rectas $x=2$, $x=4$, $y=0$. Dar el resultado con 2 decimales.`,
        hint: H`Plantea $A=\int_2^4 \sqrt{25-x^2}\,dx$ y evalúa numéricamente (la primitiva involucra $\arcsin$).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Bosquejo.</strong> $y=\sqrt{25-x^2}$ es la mitad superior de una circunferencia de radio 5 centrada en el origen; en $[2,4]$ (dentro de $[-5,5]$) la curva es siempre positiva, así que el área es directamente la integral de $f$ entre esos límites, sin dividir el intervalo.</p></div>
        <div class="step"><p><strong>Plantear la integral.</strong></p>$$A=\int_2^4 \sqrt{25-x^2}\,dx$$</div>
        <div class="step"><p><strong>Antiderivada.</strong> Esta integral requiere una sustitución trigonométrica; su primitiva es exacta pero laboriosa de evaluar a mano:</p>$$\left[\dfrac{x}{2}\sqrt{25-x^2}+\dfrac{25}{2}\arcsin\left(\dfrac{x}{5}\right)\right]_2^4$$</div>
        <div class="step"><p><strong>Evaluación numérica.</strong> Sustituyendo $x=4$ y $x=2$ (con calculadora o asistente, dado que involucra $\arcsin$):</p>$$A \approx 7.86$$</div>
        </div>
        <div class="final">$A \approx 7.86\ u^2$.</div>`,
        answer: '7.8647', tol: 0.01, verify: { kind: 'int', f: 'sqrt(25-x^2)', v: 'x', a: '2', b: '4' }
      },
      {
        id: 's4e08', level: 2, type: 'num',
        q: H`Para la misma región del ejercicio anterior (semicírculo entre $x=2$ y $x=4$), determinar el volumen del sólido que se genera al girarla alrededor del eje $x$.`,
        hint: H`Radio $r(x)=\sqrt{25-x^2}$, así que $r(x)^2=25-x^2$: la raíz desaparece al elevar al cuadrado.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar el sólido.</strong> La misma región del ejercicio anterior gira alrededor del eje $x$: como está bajo una sola curva $f(x)=\sqrt{25-x^2}\ge0$, cada sección es un disco de radio $r(x)=f(x)$.</p></div>
        <div class="step"><p><strong>Plantear la integral de discos.</strong> Al elevar el radio al cuadrado, la raíz desaparece:</p>$$V=\pi\int_2^4 \big[r(x)\big]^2\,dx = \pi\int_2^4 (25-x^2)\,dx$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\pi\left[25x-\dfrac{x^3}{3}\right]_2^4 = \pi\left[\left(100-\dfrac{64}{3}\right)-\left(50-\dfrac83\right)\right] = \pi\left(\dfrac{94}{3}\right) = \dfrac{94\pi}{3}$$</div>
        </div>
        <div class="final">$V = \dfrac{94\pi}{3} \approx 98.44\ u^3$.</div>`,
        answer: '94*pi/3', verify: { kind: 'int', f: 'pi*(25-x^2)', v: 'x', a: '2', b: '4' }
      },
      {
        id: 's4e09', level: 2, type: 'num',
        q: H`Para la misma región (semicírculo entre $x=2$ y $x=4$), determinar el volumen del sólido que se genera al girarla alrededor de la recta $y=-1$. Da el resultado con 2 decimales.`,
        hint: H`El radio exterior es $R(x)=\sqrt{25-x^2}-(-1)=\sqrt{25-x^2}+1$; el interior (hasta $y=0$) es $\rho(x)=0-(-1)=1$. Expande $R(x)^2-\rho(x)^2$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar los radios respecto al nuevo eje.</strong> El eje de giro es $y=-1$, no el eje $x$, así que los radios se miden como distancia a esa recta, no como el valor de la curva. El borde superior de la región es $f(x)=\sqrt{25-x^2}$ (radio exterior) y el inferior es $y=0$ (radio interior): $$R(x) = \sqrt{25-x^2}-(-1) = \sqrt{25-x^2}+1, \qquad \rho(x) = 0-(-1) = 1$$</p></div>
        <div class="step"><p><strong>Plantear la arandela.</strong></p>$$V=\pi\int_2^4 \Big[R(x)^2-\rho(x)^2\Big]\,dx$$</div>
        <div class="step"><p><strong>Expandir el integrando.</strong></p>$$R(x)^2-\rho(x)^2 = \big(\sqrt{25-x^2}+1\big)^2 - 1^2 = (25-x^2) + 2\sqrt{25-x^2}+1-1 = 25-x^2+2\sqrt{25-x^2}$$</div>
        <div class="step"><p><strong>Integrar y evaluar numéricamente.</strong> La parte polinómica $25-x^2$ se integra de forma exacta; la parte con la raíz requiere la primitiva del semicírculo (como en el Ejercicio 7) o una evaluación numérica:</p>$$V=\pi\int_2^4 \Big[25-x^2+2\sqrt{25-x^2}\Big]\,dx \approx 147.85$$</div>
        </div>
        <div class="final">$V \approx 147.85\ u^3$.</div>`,
        answer: '147.8516', tol: 0.02, verify: { kind: 'int', f: 'pi*(25-x^2+2*sqrt(25-x^2))', v: 'x', a: '2', b: '4' }
      },
      {
        id: 's4e10', level: 2, type: 'num',
        q: H`Determinar el área de la región entre $y=e^x$ y $y=x^2-1$ en $[-1,1]$.`,
        hint: H`Comprueba que $e^x\ge x^2-1$ en todo el intervalo (por ejemplo en $x=0$: $1$ frente a $-1$).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Bosquejo y orden de las curvas.</strong> En $x=0$: $e^0=1$ y $0^2-1=-1$, así que $e^x$ está arriba. Como $e^x>0$ siempre y $x^2-1\le 0$ en $[-1,1]$, la exponencial se mantiene por encima de la parábola en todo el intervalo, sin cruces.</p></div>
        <div class="step"><p><strong>Plantear la integral.</strong></p>$$A = \int_{-1}^{1}\big[e^x-(x^2-1)\big]\,dx$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\left[e^x-\dfrac{x^3}{3}+x\right]_{-1}^{1} = \left(e-\dfrac13+1\right)-\left(e^{-1}+\dfrac13-1\right)$$</div>
        <div class="step"><p><strong>Simplificar.</strong></p>$$A = e-e^{-1}-\dfrac23+2 = e-\dfrac1e+\dfrac43 \approx 3.6837$$</div>
        </div>
        <div class="final">$A = e-\dfrac1e+\dfrac43 \approx 3.6837\ u^2$.</div>`,
        answer: 'e - 1/e + 4/3', tol: 0.001, verify: { kind: 'int', f: 'exp(x)-(x^2-1)', v: 'x', a: '-1', b: '1' }
      },
      {
        id: 's4e11', level: 2, type: 'num',
        q: H`Determinar el área de la región entre $y=\dfrac{x}{2}$, $y=\sqrt{x}$ y la recta $x=9$ (las curvas se cruzan dentro del intervalo).`,
        hint: H`Halla dónde $\sqrt{x}=\dfrac{x}{2}$ (además de $x=0$) para saber dónde dividir.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Bosquejo y todas las intersecciones.</strong> Además de $x=0$, se resuelve $\sqrt x=\tfrac x2$: $$x=\dfrac{x^2}{4} \;\Rightarrow\; x^2-4x=0 \;\Rightarrow\; x=0,\ x=4$$ Como el intervalo dado llega hasta $x=9$, las curvas se cruzan dentro de él ($x=4$), así que hay que dividir en $[0,4]$ y $[4,9]$.</p></div>
        <div class="step"><p><strong>Orden en cada tramo.</strong> En $x=1$ (dentro de $[0,4]$): $\sqrt1=1$ frente a $\tfrac12=0.5$, la raíz está arriba. En $x=6$ (dentro de $[4,9]$): $\tfrac62=3$ frente a $\sqrt6\approx2.45$, ahora la recta está arriba.</p></div>
        <div class="step"><p><strong>Integrar cada tramo con el orden correcto.</strong></p>$$\int_0^4\Big(\sqrt x - \dfrac x2\Big)dx = \left[\dfrac{2x^{3/2}}{3}-\dfrac{x^2}{4}\right]_0^4 = \dfrac{16}{3}-4=\dfrac43$$$$\int_4^9\Big(\dfrac x2-\sqrt x\Big)dx = \left[\dfrac{x^2}{4}-\dfrac{2x^{3/2}}{3}\right]_4^9 = \left(\dfrac{81}{4}-18\right)-\left(4-\dfrac{16}{3}\right) = \dfrac{43}{12}$$</div>
        <div class="step"><p><strong>Sumar los dos tramos.</strong></p>$$A = \dfrac43+\dfrac{43}{12} = \dfrac{16}{12}+\dfrac{43}{12} = \dfrac{59}{12} \approx 4.9167$$</div>
        </div>
        <div class="final">$A = \dfrac{59}{12} \approx 4.9167\ u^2$.</div>`,
        answer: '59/12', tol: 0.001, verify: { kind: 'int', f: 'abs(x/2-sqrt(x))', v: 'x', a: '0', b: '9' }
      },
      {
        id: 's4e12', level: 2, type: 'num',
        q: H`Determinar el volumen del sólido generado al girar, alrededor del eje $y$, la región limitada por $y=\ln x$, $y=1$, $y=2$, $x=0$.`,
        hint: H`Expresa la curva como $x=e^y$ e integra respecto a $y$: $V=\pi\int_1^2 (e^y)^2\,dy$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reescribir la curva en función de $y$.</strong> El eje de giro es el eje $y$, y la región está entre $x=0$ y $y=\ln x$ para $y\in[1,2]$; conviene despejar $x$: $y=\ln x \Rightarrow x=e^y$. El radio de cada disco es entonces $r(y)=e^y$.</p></div>
        <div class="step"><p><strong>Plantear la integral de discos respecto a $y$.</strong></p>$$V=\pi\int_1^2 \big[r(y)\big]^2\,dy = \pi\int_1^2 (e^y)^2\,dy = \pi\int_1^2 e^{2y}\,dy$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\pi\left[\dfrac{e^{2y}}{2}\right]_1^2 = \dfrac{\pi}{2}\big(e^4-e^2\big) \approx 74.16$$</div>
        </div>
        <div class="final">$V = \dfrac{\pi}{2}\big(e^4-e^2\big) \approx 74.16\ u^3$.</div>`,
        answer: 'pi/2*(e^4-e^2)', tol: 0.05, verify: { kind: 'int', f: 'pi*exp(2*y)', v: 'y', a: '1', b: '2' }
      },
      {
        id: 's4e13', level: 2, type: 'num',
        q: H`Determinar el volumen del sólido generado al girar, alrededor del eje $x$, la región limitada por $y=x$ y $y=x^3$, con $x\ge 0$ (en $[0,1]$).`,
        hint: H`En $[0,1]$, $x\ge x^3$; radio exterior $R=x$, radio interior $\rho=x^3$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar radio exterior e interior.</strong> En $[0,1]$, $x\ge x^3$ (por ejemplo en $x=0.5$: $0.5\ge0.125$), así que al girar alrededor del eje $x$ la región entre ambas curvas produce una arandela con radio exterior $R(x)=x$ y radio interior $\rho(x)=x^3$.</p></div>
        <div class="step"><p><strong>Plantear la integral de arandelas.</strong></p>$$V=\pi\int_0^1 \Big[R(x)^2-\rho(x)^2\Big]\,dx = \pi\int_0^1 \big(x^2-x^6\big)\,dx$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\pi\left[\dfrac{x^3}{3}-\dfrac{x^7}{7}\right]_0^1 = \pi\left(\dfrac13-\dfrac17\right) = \dfrac{4\pi}{21}$$</div>
        </div>
        <div class="final">$V = \dfrac{4\pi}{21} \approx 0.5984\ u^3$.</div>`,
        answer: '4*pi/21', verify: { kind: 'int', f: 'pi*(x^2-x^6)', v: 'x', a: '0', b: '1' }
      },
      {
        id: 's4e14', level: 2, type: 'num',
        q: H`Para la misma región ($y=x$, $y=x^3$, $x\in[0,1]$), determinar el volumen al girar alrededor de la recta $y=-1$.`,
        hint: H`Radios desplazados: $R(x)=x-(-1)=x+1$, $\rho(x)=x^3-(-1)=x^3+1$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Desplazar los radios al nuevo eje.</strong> El eje de giro ahora es $y=-1$, no el eje $x$; los radios se miden como distancia a esa recta: $$R(x) = x-(-1)=x+1, \qquad \rho(x) = x^3-(-1)=x^3+1$$ (usando el mismo orden $x\ge x^3$ del ejercicio anterior, ambos desplazados hacia abajo por el mismo eje, por lo que $R\ge\rho$ se mantiene).</p></div>
        <div class="step"><p><strong>Plantear la integral de arandelas.</strong></p>$$V=\pi\int_0^1 \Big[(x+1)^2-(x^3+1)^2\Big]\,dx$$</div>
        <div class="step"><p><strong>Expandir el integrando.</strong></p>$$(x+1)^2-(x^3+1)^2 = (x^2+2x+1)-(x^6+2x^3+1) = x^2+2x-x^6-2x^3$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\pi\left[\dfrac{x^3}{3}+x^2-\dfrac{x^7}{7}-\dfrac{x^4}{2}\right]_0^1 = \pi\left(\dfrac13+1-\dfrac17-\dfrac12\right) = \dfrac{29\pi}{42}$$</div>
        </div>
        <div class="final">$V = \dfrac{29\pi}{42} \approx 2.1689\ u^3$.</div>`,
        answer: '29*pi/42', verify: { kind: 'int', f: 'pi*((x+1)^2-(x^3+1)^2)', v: 'x', a: '0', b: '1' }
      },
      {
        id: 's4e15', level: 2, type: 'num',
        q: H`Determinar el volumen del sólido generado al girar, alrededor de la recta $y=1$, la región bajo $y=x^2+1$ en $[0,2]$ (con $y\ge 1$).`,
        hint: H`Radio $r(x)=(x^2+1)-1=x^2$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar el radio respecto al eje de giro.</strong> El eje de giro es $y=1$, no el eje $x$. Toda la región bajo $y=x^2+1$ en $[0,2]$ cumple $y\ge1$, así que el corte perpendicular es un disco (no una arandela) cuyo radio es la distancia entre la curva y el eje: $$r(x) = (x^2+1)-1 = x^2$$</p></div>
        <div class="step"><p><strong>Plantear la integral de discos.</strong></p>$$V=\pi\int_0^2 \big[r(x)\big]^2\,dx = \pi\int_0^2 (x^2)^2\,dx = \pi\int_0^2 x^4\,dx$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\pi\left[\dfrac{x^5}{5}\right]_0^2 = \dfrac{32\pi}{5}$$</div>
        </div>
        <div class="final">$V = \dfrac{32\pi}{5} \approx 20.11\ u^3$.</div>`,
        answer: '32*pi/5', verify: { kind: 'int', f: 'pi*x^4', v: 'x', a: '0', b: '2' }
      },
      {
        id: 's4e16', level: 2, type: 'set',
        q: H`Hallar las abscisas de los puntos de intersección entre $y=\dfrac14 x^2$ y $y=5-x^2$ (separadas por comas).`,
        hint: H`Igualar ambas expresiones y resolver la ecuación cuadrática resultante.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear la ecuación de intersección.</strong> Los puntos donde dos curvas se cortan son los que satisfacen ambas ecuaciones a la vez, es decir, donde sus valores de $y$ coinciden:</p>$$\dfrac14 x^2 = 5-x^2$$</div>
        <div class="step"><p><strong>Despejar $x$.</strong></p>$$\dfrac14 x^2 + x^2 = 5 \;\Rightarrow\; \dfrac54 x^2 = 5 \;\Rightarrow\; x^2=4 \;\Rightarrow\; x=\pm2$$</div>
        </div>
        <div class="final">$x=-2,\ x=2$.</div>`,
        answer: ['-2', '2']
      },
      {
        id: 's4e17', level: 2, type: 'num',
        q: H`Usando las intersecciones del ejercicio anterior, determinar el área de la región limitada por $y=\dfrac14 x^2$ y $y=5-x^2$.`,
        hint: H`Integra $\big(5-x^2\big)-\dfrac14 x^2$ entre $-2$ y $2$ (o entre $0$ y $2$ y duplica, usando la simetría).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Bosquejo y orden de las curvas.</strong> Las dos parábolas se cortan en $x=\pm2$ (ejercicio anterior). En $x=0$: $5-x^2=5$ y $\tfrac14x^2=0$, así que $y=5-x^2$ está arriba en todo $[-2,2]$.</p></div>
        <div class="step"><p><strong>Plantear la integral.</strong></p>$$A=\int_{-2}^{2}\left[(5-x^2)-\dfrac{x^2}{4}\right]dx = \int_{-2}^{2}\left(5-\dfrac{5x^2}{4}\right)dx$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$\left[5x-\dfrac{5x^3}{12}\right]_{-2}^{2} = \left(10-\dfrac{40}{12}\right)-\left(-10+\dfrac{40}{12}\right) = \dfrac{40}{3}\approx 13.33$$</div>
        </div>
        <div class="final">$A = \dfrac{40}{3} \approx 13.33\ u^2$.</div>`,
        answer: '40/3', verify: { kind: 'int', f: '(5-x^2)-x^2/4', v: 'x', a: '-2', b: '2' }
      },
      {
        id: 's4e18', level: 3, type: 'num',
        q: H`Determinar el volumen del sólido generado al girar, alrededor del eje $x$, la región limitada por $y=\dfrac14 x^2$ y $y=5-x^2$ (Ejemplo 6 de la teoría, para verificar el procedimiento con otra presentación).`,
        hint: H`Arandela con $R(x)=5-x^2$, $\rho(x)=\tfrac14x^2$; integra en $[-2,2]$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar el sólido.</strong> Es exactamente la región de los Ejercicios 16–17 (entre $y=\tfrac14x^2$ y $y=5-x^2$, en $[-2,2]$), ahora girada alrededor del eje $x$. Como está limitada por dos curvas, no por una sola, el corte transversal es una arandela con radio exterior $R(x)=5-x^2$ y radio interior $\rho(x)=\tfrac14x^2$ (ya son distancias al eje $x$, porque el eje de giro es el propio eje $x$).</p></div>
        <div class="step"><p><strong>Plantear la integral de arandelas.</strong></p>$$V=\pi\int_{-2}^{2}\left[(5-x^2)^2-\left(\dfrac{x^2}{4}\right)^2\right]dx$$</div>
        <div class="step"><p><strong>Resultado.</strong> Expandiendo el integrando y evaluando (mismo cálculo que el Ejemplo 6 de la teoría):</p>$$V = \dfrac{176\pi}{3}\approx 184.31$$</div>
        </div>
        <div class="final">$V = \dfrac{176\pi}{3} \approx 184.31\ u^3$.</div>`,
        answer: '176*pi/3', verify: { kind: 'int', f: 'pi*((5-x^2)^2-(x^2/4)^2)', v: 'x', a: '-2', b: '2' }
      },
      {
        id: 's4e19', level: 3, type: 'num',
        q: H`Determinar el volumen del sólido generado al girar, alrededor del eje $y$, la región bajo $y=x^2$ en $[0,2]$, usando el método de los casquetes cilíndricos.`,
        hint: H`$V=2\pi\int_0^2 x\cdot f(x)\,dx$ con $f(x)=x^2$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Por qué casquetes en vez de discos.</strong> El eje de giro es el eje $y$, pero la curva $y=x^2$ está dada cómodamente en función de $x$; despejarla como $x=\sqrt y$ es posible pero innecesario si se usa el método de los casquetes, que trabaja directamente con $f(x)=x^2$.</p></div>
        <div class="step"><p><strong>Plantear la integral de casquetes.</strong> Cada cáscara a distancia $x$ del eje tiene radio $x$ y altura $f(x)=x^2$:</p>$$V=2\pi\int_0^2 x\cdot f(x)\,dx = 2\pi\int_0^2 x\cdot x^2\,dx = 2\pi\int_0^2 x^3\,dx$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación.</strong></p>$$2\pi\left[\dfrac{x^4}{4}\right]_0^2 = 2\pi(4) = 8\pi$$</div>
        </div>
        <div class="final">$V = 8\pi \approx 25.13\ u^3$.</div>`,
        answer: '8*pi', verify: { kind: 'int', f: '2*pi*x*x^2', v: 'x', a: '0', b: '2' }
      },
      {
        id: 's4e20', level: 3, type: 'num',
        q: H`Determinar el área de la región limitada por $y=x^2$, $y=8-x^2$ y la recta $x=3$ (las parábolas se cruzan dentro del intervalo $[0,3]$).`,
        hint: H`Las parábolas se cruzan en $x=2$; divide el intervalo $[0,3]$ en $[0,2]$ y $[2,3]$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Bosquejo e intersección dentro del intervalo.</strong> $y=x^2$ abre hacia arriba y $y=8-x^2$ hacia abajo; se cortan donde $x^2=8-x^2 \Rightarrow x^2=4 \Rightarrow x=2$ (la raíz $x=-2$ queda fuera de $[0,3]$). Como $x=2$ está dentro de $[0,3]$, las curvas cambian de orden ahí y hay que dividir el intervalo en $[0,2]$ y $[2,3]$.</p></div>
        <div class="step"><p><strong>Orden en cada tramo.</strong> En $x=1$: $8-1=7\ge 1$, la parábola que abre hacia abajo está arriba. En $x=2.5$: $x^2=6.25\ge 8-6.25=1.75$, ahora $y=x^2$ está arriba.</p></div>
        <div class="step"><p><strong>Integrar cada tramo con el orden correcto.</strong></p>$$\int_0^2\big[(8-x^2)-x^2\big]dx = \int_0^2(8-2x^2)dx = \left[8x-\dfrac{2x^3}{3}\right]_0^2 = 16-\dfrac{16}{3}=\dfrac{32}{3}$$$$\int_2^3\big[x^2-(8-x^2)\big]dx = \int_2^3(2x^2-8)dx = \left[\dfrac{2x^3}{3}-8x\right]_2^3 = (18-24)-\left(\dfrac{16}{3}-16\right) = \dfrac{14}{3}$$</div>
        <div class="step"><p><strong>Sumar los dos tramos.</strong></p>$$A = \dfrac{32}{3}+\dfrac{14}{3} = \dfrac{46}{3}\approx 15.3333$$</div>
        </div>
        <div class="final">$A = \dfrac{46}{3} \approx 15.3333\ u^2$.</div>`,
        answer: '46/3', verify: { kind: 'int', f: 'abs((8-x^2)-x^2)', v: 'x', a: '0', b: '3' }
      },
      {
        id: 's4e21', level: 3, type: 'num',
        q: H`Determinar el área de la región limitada por $x=y^2-2$ y $x=y$, integrando respecto a $y$.`,
        hint: H`Resuelve $y=y^2-2$ para hallar los límites de integración en $y$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Por qué integrar respecto a $y$.</strong> Ambas curvas ya están dadas naturalmente como $x=f(y)$; despejar $y$ en función de $x$ para $x=y^2-2$ obligaría a trabajar con dos ramas ($y=\pm\sqrt{x+2}$). Es más simple integrar respecto a $y$.</p></div>
        <div class="step"><p><strong>Puntos de intersección.</strong></p>$$y^2-2=y \;\Rightarrow\; y^2-y-2=0 \;\Rightarrow\; (y-2)(y+1)=0 \;\Rightarrow\; y=-1,\ y=2$$</div>
        <div class="step"><p><strong>Orden entre las curvas.</strong> En $y=0$: la recta da $x=0$ y la parábola da $x=0^2-2=-2$; la recta está a la derecha, así que $y\ge y^2-2$ en todo $[-1,2]$.</p></div>
        <div class="step"><p><strong>Plantear y evaluar la integral.</strong></p>$$A=\int_{-1}^{2}\big[y-(y^2-2)\big]\,dy = \int_{-1}^{2}\big(-y^2+y+2\big)\,dy = \left[-\dfrac{y^3}{3}+\dfrac{y^2}{2}+2y\right]_{-1}^{2} = \dfrac{10}{3}-\left(-\dfrac76\right) = \dfrac92$$</div>
        </div>
        <div class="final">$A = \dfrac92 = 4.5\ u^2$.</div>`,
        answer: '9/2', verify: { kind: 'int', f: 'y-(y^2-2)', v: 'y', a: '-1', b: '2' }
      },
      {
        id: 's4e22', level: 3, type: 'num',
        q: H`Determinar el volumen del sólido generado al girar, alrededor de la recta $x=-1$, la región limitada por $x=y^2$ y $x=4$, con $y\in[-2,2]$.`,
        hint: H`Radio exterior (hasta $x=4$): $R=4-(-1)=5$ (constante). Radio interior (hasta la parábola): $\rho(y)=y^2-(-1)=y^2+1$. Usa la simetría para integrar en $[0,2]$ y duplicar.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Desplazar los radios al eje $x=-1$.</strong> La región está entre $x=y^2$ (a la izquierda) y $x=4$ (a la derecha), con $y\in[-2,2]$; el eje de giro es la recta vertical $x=-1$, así que los radios se miden como distancia horizontal a esa recta: $$R = 4-(-1) = 5 \ \text{(constante)}, \qquad \rho(y) = y^2-(-1) = y^2+1$$</p></div>
        <div class="step"><p><strong>Plantear la integral de arandelas y usar simetría.</strong> El integrando depende solo de $y^2$ (función par en $y$), así que se integra en $[0,2]$ y se duplica:</p>$$V=\pi\int_{-2}^{2}\Big[5^2-(y^2+1)^2\Big]\,dy = 2\pi\int_0^2\Big[25-(y^2+1)^2\Big]\,dy$$</div>
        <div class="step"><p><strong>Expandir el integrando.</strong></p>$$(y^2+1)^2=y^4+2y^2+1 \quad\Rightarrow\quad 25-(y^4+2y^2+1) = 24-2y^2-y^4$$</div>
        <div class="step"><p><strong>Antiderivada y evaluación en $[0,2]$.</strong></p>$$\int_0^2(24-2y^2-y^4)\,dy = \left[24y-\dfrac{2y^3}{3}-\dfrac{y^5}{5}\right]_0^2 = 48-\dfrac{16}{3}-\dfrac{32}{5} = \dfrac{544}{15}$$</div>
        <div class="step"><p><strong>Multiplicar por $2\pi$.</strong></p>$$V = 2\pi\left(\dfrac{544}{15}\right) = \dfrac{1088\pi}{15}\approx 227.87$$</div>
        </div>
        <div class="final">$V = \dfrac{1088\pi}{15} \approx 227.87\ u^3$.</div>`,
        answer: '1088*pi/15', tol: 0.05, verify: { kind: 'int', f: 'pi*(25-(y^2+1)^2)', v: 'y', a: '-2', b: '2' }
      }
    ]
  });
})();
