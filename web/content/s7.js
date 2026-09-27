(function () {
  const H = String.raw; // keeps LaTeX backslashes intact. NEVER write "$" + "{" together.
  window.SESSIONS = window.SESSIONS || [];
  window.SESSIONS.push({
    id: 's7',
    order: 7,
    code: 'CE6',
    topic: 'Tema II · Ecuaciones diferenciales',
    title: 'Introducción a las ecuaciones diferenciales. Modelos, clasificación, solución general y particular. Campos direccionales',
    short: 'Intro a las ED',
    goals: [
      'Reconocer una ecuación diferencial (ED) como un nuevo tipo de ecuación cuya incógnita es una función.',
      'Clasificar una ED según su tipo (ordinaria/parcial), orden, grado y linealidad.',
      'Comprobar por sustitución si una función dada es solución de una ED, y hallar valores de un parámetro (por ejemplo $r$ en $y=e^{rx}$) que la conviertan en solución.',
      'Distinguir solución general, solución particular y problema de valor inicial (problema de Cauchy).',
      'Resolver por integración directa ecuaciones del tipo $y\'=f(x)$.',
      'Interpretar el campo direccional de una EDO de primer orden: calcular pendientes, identificar isoclinas, hallar soluciones de equilibrio y describir el comportamiento cuando $t\\to\\infty$.',
      'Aplicar el método de Euler para aproximar numéricamente la solución de un problema de valor inicial (contenido complementario, fuera del programa 2026–2027).'
    ],
    theory: [
      {
        h: '¿Qué es una ecuación diferencial? Dos modelos de partida',
        html: H`<p>Hasta ahora, en todas las ecuaciones que has resuelto la incógnita era un <strong>número</strong> (o una variable de dominio numérico): $2x+3=7$, $x^2-5x+6=0$, etc. Una <strong>ecuación diferencial</strong> (ED) es un tipo de ecuación radicalmente distinto: la incógnita es una <strong>función</strong>, y en la ecuación aparece, además de la función, al menos una de sus derivadas. Esta es la diferencia esencial y la razón por la que constituyen "un nuevo paradigma de ecuación".</p>
        <p>Veamos dos problemas que se modelan de forma natural con ecuaciones diferenciales.</p>
        <p><strong>Modelo de crecimiento poblacional.</strong> Sea $t$ el tiempo y $P(t)$ el número de individuos de una población (personas, bacterias, animales, plantas). En condiciones ideales — sin depredadores, sin escasez de alimento, sin enfermedades — la rapidez de crecimiento de la población es proporcional a su tamaño en cada instante: cuantos más individuos hay, más rápido crece el total. Traduciendo esa ley al lenguaje del cálculo:</p>
        <div class="key">$$\frac{dP}{dt}=kP$$</div>
        <p>donde $k$ es la constante de proporcionalidad ($k>0$ si la población crece, $k<0$ si decrece). Observa que la incógnita es la función $P(t)$, no un número; y que en la ecuación aparece su derivada $\frac{dP}{dt}$.</p>
        <p><strong>Modelo del resorte (ley de Hooke y segunda ley de Newton).</strong> Consideremos un cuerpo de masa $m$ sujeto al extremo de un resorte vertical. La ley de Hooke establece que si el resorte se estira o comprime $x$ unidades respecto de su longitud natural, ejerce una fuerza restauradora proporcional a $x$: $F=-kx$, donde $k>0$ es la constante del resorte (el signo negativo indica que la fuerza se opone al desplazamiento). Bajo condiciones ideales (sin fricción), la segunda ley de Newton dice que fuerza $=$ masa $\times$ aceleración, y la aceleración es la segunda derivada de la posición respecto del tiempo:</p>
        <div class="key">$$m\,\frac{d^2x}{dt^2}=-kx$$</div>
        <p>Aquí la incógnita $x(t)$ (la posición del cuerpo en función del tiempo) aparece junto con su <em>segunda</em> derivada.</p>`
      },
      {
        h: 'Más modelos: enfriamiento de Newton y un circuito eléctrico',
        html: H`<p><strong>Ley de enfriamiento de Newton.</strong> La rapidez con que se enfría (o calienta) un objeto es proporcional a la diferencia entre su temperatura $T(t)$ y la temperatura ambiente $T_{amb}$ (constante):</p>
        <div class="key">$$\frac{dT}{dt}=-k(T-T_{amb}),\qquad k>0$$</div>
        <p>Si $T>T_{amb}$ el objeto se enfría ($dT/dt<0$); si $T<T_{amb}$ se calienta ($dT/dt>0$); en ambos casos la temperatura tiende a igualarse con la del ambiente.</p>
        <p><strong>Un circuito eléctrico simple.</strong> En un circuito con una resistencia $R$, una inductancia $L$ y una fuente de voltaje constante $E$, la corriente $I(t)$ satisface (por la ley de voltajes de Kirchhoff):</p>
        <div class="key">$$L\frac{dI}{dt}+RI=E$$</div>
        <p>Con valores concretos, por ejemplo $L=4$, $R=12$, $E=60$, la ecuación queda $4\dfrac{dI}{dt}+12I=60$; volveremos a ella al estudiar campos direccionales, pues ilustra muy bien el concepto de <em>solución de equilibrio</em> (la corriente de "régimen permanente" del circuito).</p>
        <div class="note">Estos cuatro modelos ($dP/dt=kP$, $mx''=-kx$, la ley de enfriamiento y el circuito) son solo una muestra: prácticamente cualquier fenómeno que involucre una razón de cambio (crecimiento, desintegración, movimiento, difusión de calor, corrientes eléctricas, mezclas químicas...) se describe con ecuaciones diferenciales.</div>`
      },
      {
        h: 'Clasificación de las ecuaciones diferenciales',
        html: H`<p>Antes de resolver cualquier ED conviene clasificarla; el tipo de método que se usa depende directamente de esta clasificación.</p>
        <p><strong>Por el tipo de función incógnita:</strong></p>
        <ul>
          <li><strong>Ecuación diferencial ordinaria (EDO):</strong> la función incógnita depende de <em>una sola</em> variable independiente (por ejemplo $y=y(x)$ o $P=P(t)$). Solo aparecen derivadas ordinarias.</li>
          <li><strong>Ecuación en derivadas parciales (EDP):</strong> la función incógnita depende de <em>varias</em> variables (por ejemplo $u=u(x,t)$) y aparecen derivadas parciales, como $\dfrac{\partial u}{\partial t}=\dfrac{\partial^2 u}{\partial x^2}$ (la ecuación del calor).</li>
        </ul>
        <p>En este curso estudiaremos únicamente <strong>EDO</strong>.</p>
        <p><strong>Por el orden:</strong> el orden de una ED es el de la derivada de mayor orden que aparece en ella.</p>
        <ul>
          <li>De <strong>primer orden</strong> si solo aparecen derivadas primeras: $\dfrac{dP}{dt}=kP$.</li>
          <li>De <strong>segundo orden</strong> si la derivada de mayor orden presente es la segunda: $m\dfrac{d^2x}{dt^2}=-kx$.</li>
          <li>En general, de <strong>orden $n$</strong> si $n$ es el orden de la derivada de mayor orden presente.</li>
        </ul>
        <p>En este curso trabajaremos EDO de primer y de segundo orden.</p>
        <p><strong>Por el grado:</strong> el grado es el exponente al que está elevada la derivada de mayor orden (una vez que la ecuación está escrita como polinomio en las derivadas).</p>
        <ul>
          <li>De <strong>primer grado</strong> si esa derivada aparece elevada a la primera potencia (sin raíces ni potencias sobre ella). Todas las ecuaciones que estudiaremos son de primer grado.</li>
        </ul>
        <p><strong>Por la linealidad:</strong> una EDO es <strong>lineal</strong> si puede escribirse de la forma</p>
        <div class="key">$$a_n(x)\,y^{(n)}+a_{n-1}(x)\,y^{(n-1)}+\cdots+a_1(x)\,y'+a_0(x)\,y=g(x)$$</div>
        <p>es decir: la función incógnita y todas sus derivadas aparecen elevadas a la primera potencia, sin productos entre ellas (como $y\cdot y'$) y sin que estén dentro de otra función (como $\sin y$, $e^y$ o $\sqrt{y'}$). Los coeficientes $a_i(x)$ pueden depender de la variable independiente, pero no de $y$. Si no cumple esto, la ecuación es <strong>no lineal</strong>.</p>
        <p>Ejemplos: $\dfrac{dP}{dt}=kP$ es EDO, de primer orden, primer grado y <strong>lineal</strong>. $m\dfrac{d^2x}{dt^2}=-kx$ es EDO, de segundo orden, primer grado y <strong>lineal</strong>. En cambio $y'=xy^2$ es no lineal (aparece $y^2$) y $yy'=x$ es no lineal (producto $y\cdot y'$).</p>`
      },
      {
        h: 'Cómo comprobar que una función es solución de una ED',
        html: H`<p>Una función $y=f(x)$ es <strong>solución</strong> de una ED si, al sustituir $y$ y sus derivadas en la ecuación, se obtiene una identidad (una igualdad que se cumple para todo $x$ del dominio considerado). El procedimiento es siempre el mismo:</p>
        <ol>
          <li>Se calculan las derivadas necesarias de la función propuesta ($y'$, y si es de segundo orden también $y''$).</li>
          <li>Se sustituyen $y$, $y'$ (y $y''$ si corresponde) en la ecuación.</li>
          <li>Se simplifica el miembro izquierdo (MI) y se compara con el miembro derecho (MD). Si MI $=$ MD para todo $x$, la función es solución.</li>
        </ol>
        <p><strong>Ejemplo.</strong> Comprobemos que $y=\frac{2}{3}e^{x}+e^{-2x}$ es solución de $y'+2y=2e^{x}$.</p>
        <p>Derivando: $y'=\frac{2}{3}e^{x}-2e^{-2x}$. Sustituyendo en el miembro izquierdo:</p>
        <p>$$y'+2y=\left(\frac{2}{3}e^{x}-2e^{-2x}\right)+2\left(\frac{2}{3}e^{x}+e^{-2x}\right)=\frac{2}{3}e^{x}-2e^{-2x}+\frac{4}{3}e^{x}+2e^{-2x}=\frac{6}{3}e^{x}+0=2e^{x}$$</p>
        <p>Como MI $=2e^x=$ MD, la función dada es efectivamente solución.</p>
        <p><strong>Hallar valores de un parámetro.</strong> Un tipo de ejercicio muy frecuente pide determinar para qué valores de $r$ la función $y=e^{rx}$ es solución de una ED lineal homogénea con coeficientes constantes. El procedimiento es el mismo, solo que el miembro izquierdo quedará en función de $r$, y como $e^{rx}\neq 0$ para todo $x$, se puede "cancelar" ese factor y queda una ecuación algebraica en $r$.</p>
        <p><strong>Ejemplo.</strong> ¿Para qué valores de $r$ la función $y=e^{rx}$ satisface $2y''+y'-y=0$?</p>
        <p>$y=e^{rx}$, $y'=re^{rx}$, $y''=r^2e^{rx}$. Sustituyendo: $2r^2e^{rx}+re^{rx}-e^{rx}=0$, es decir $e^{rx}(2r^2+r-1)=0$. Como $e^{rx}>0$ siempre, la única forma de que el producto se anule es que $2r^2+r-1=0$, lo que factoriza como $(r+1)(2r-1)=0$, de donde $r=-1$ o $r=\frac12$. Así, tanto $y=e^{-x}$ como $y=e^{x/2}$ son soluciones (y, como estudiaremos en la sesión de ecuaciones de segundo orden, también lo es cualquier combinación $y=C_1e^{-x}+C_2e^{x/2}$).</p>`
      },
      {
        h: 'Solución general, solución particular y problema de valor inicial (problema de Cauchy)',
        html: H`<p>Cuando se pide "resolver" una ED, se trata de hallar <em>todas</em> las funciones que la satisfacen. En el ejemplo del crecimiento poblacional $\frac{dP}{dt}=kP$, buscamos una función cuya derivada sea proporcional a ella misma; el único tipo de función con esa propiedad es la exponencial. Proponiendo $P(t)=Ce^{kt}$ y comprobando: $P'(t)=Cke^{kt}=kP(t)$. Se cumple para <em>cualquier</em> valor de la constante $C$: existe toda una familia de funciones que resuelven la ecuación. A este conjunto de soluciones, que depende de una o más constantes arbitrarias, se le llama <strong>solución general</strong> de la ED.</p>
        <p>En la práctica casi siempre se conoce una condición adicional (por ejemplo, el tamaño de la población en el instante inicial) que permite seleccionar, dentro de la familia, <em>una</em> función específica: esa es la <strong>solución particular</strong>. Cuando la condición adicional se da en el punto inicial del dominio, se le llama <strong>condición inicial</strong>, y al problema formado por la ED junto con la condición inicial se le llama <strong>problema de valor inicial (PVI)</strong> o <strong>problema de Cauchy</strong>.</p>
        <p><strong>Ejemplo.</strong> La ecuación $\dfrac{dP}{dt}=3P$ modela el crecimiento de una población. Si en el instante $t=0$ (días) la población es de $10$ individuos, ¿cuántos individuos habrá a los $2$ días?</p>
        <p>La solución general es $P(t)=Ce^{3t}$. Usamos la condición inicial $P(0)=10$ para hallar $C$: $10=Ce^{3\cdot 0}=C$, luego $C=10$. La solución particular (la que satisface el PVI) es $P(t)=10e^{3t}$. Para responder la pregunta evaluamos en $t=2$: $P(2)=10e^{6}\approx 4034.3$. Gráficamente, se trata de la única curva de la familia que pasa por el punto $(0,10)$.</p>
        <div class="note">Un PVI de primer orden queda determinado por <strong>una</strong> condición ($y(x_0)=y_0$), que fija <strong>una</strong> constante. Un PVI de segundo orden necesita <strong>dos</strong> condiciones (típicamente $y(x_0)=y_0$ y $y'(x_0)=y_0'$) para fijar las <strong>dos</strong> constantes de la solución general; este caso se estudia con detalle en la sesión sobre ecuaciones de segundo orden.</div>`
      },
      {
        h: 'El caso más simple: $y\'=f(x)$, resuelto integrando',
        html: H`<p>Hay ecuaciones particularmente sencillas que no requieren de ningún método sofisticado: las del tipo</p>
        <div class="key">$$\frac{dy}{dx}=f(x)$$</div>
        <p>en las que el lado derecho depende <em>solo</em> de la variable independiente. Para resolverlas basta hallar la familia de antiderivadas (primitivas) de $f(x)$: se escribe $dy=f(x)\,dx$ y se integra en ambos miembros, $\displaystyle\int dy=\int f(x)\,dx$, de donde $y=F(x)+C$, siendo $F$ una antiderivada de $f$.</p>
        <p><strong>Ejemplo.</strong> Resolver $\dfrac{dy}{dx}=x^2$.</p>
        <p>Separando: $dy=x^2\,dx$. Integrando ambos miembros: $\displaystyle\int dy=\int x^2\,dx$, es decir $y=\dfrac{x^3}{3}+C$. Basta derivar para comprobar: $y'=x^2$. Esta familia de parábolas cúbicas verticalmente desplazadas es la solución general de la ecuación.</p>
        <div class="note">Este caso es, en realidad, el primer ejemplo de "ecuación de variables separables", el tema central de la próxima sesión (CE7). Aquí lo vemos como caso particular porque el lado derecho ya está separado de $y$.</div>`
      },
      {
        h: 'Campos direccionales (campos de pendientes)',
        html: H`<p>La mayoría de las ecuaciones diferenciales no se pueden resolver de forma que se obtenga una expresión explícita de la solución. Aun sin conocerla, es posible estudiar el comportamiento cualitativo de las soluciones mediante el <strong>campo direccional</strong>.</p>
        <p>Para una ecuación de primer orden escrita en la forma $\dfrac{dy}{dx}=f(x,y)$, el miembro derecho $f(x,y)$ es, precisamente, la pendiente que debe tener la curva solución que pasa por el punto $(x,y)$ (porque $\frac{dy}{dx}$ es la pendiente de la recta tangente). La idea del campo direccional es dibujar, en muchos puntos $(x,y)$ del plano, un pequeño segmento con esa pendiente; el conjunto de segmentos "perfila" el comportamiento de las curvas solución sin necesidad de conocerlas explícitamente.</p>
        <p><strong>Procedimiento para un punto dado.</strong> Sea $\dfrac{dy}{dx}=x^2y$. Calculemos la pendiente en $(0,1)$ y en $(1,1)$:</p>
        <ul>
          <li>En $(0,1)$: $f(0,1)=0^2\cdot 1=0$. Se traza un segmento horizontal (pendiente $0$).</li>
          <li>En $(1,1)$: $f(1,1)=1^2\cdot 1=1$. Se traza un segmento con pendiente $1$ (a $45°$).</li>
        </ul>
        <p>Repitiendo esto en una malla de puntos se obtiene el campo direccional completo, y siguiendo el flujo de las pendientes se pueden esbozar las curvas solución que pasan por cualquier punto dado (en particular, la que satisface una condición inicial concreta).</p>
        <p><strong>Isoclinas.</strong> Una <em>isoclina</em> es el conjunto de puntos del plano donde $f(x,y)$ toma un valor constante, es decir, donde todos los segmentos del campo tienen la misma pendiente. Para $\dfrac{dy}{dx}=x^2y$, la isoclina de pendiente $0$ es el conjunto $x^2y=0$, es decir, los ejes $x=0$ e $y=0$. Localizar isoclinas sencillas (en particular la de pendiente $0$) ayuda mucho a esbozar el campo a mano.</p>
        <p><strong>Soluciones de equilibrio.</strong> Cuando la ecuación es <em>autónoma</em> (el lado derecho no depende explícitamente de la variable independiente, $\dfrac{dy}{dt}=f(y)$), los valores de $y$ para los cuales $f(y)=0$ dan lugar a <strong>soluciones constantes</strong> $y(t)=y_0$, llamadas <strong>soluciones de equilibrio</strong> (o puntos críticos). Son soluciones porque si $y$ es constante, $y'=0$, y la ecuación se satisface exactamente cuando $f(y_0)=0$. En el campo direccional se reconocen porque todos los segmentos sobre la recta horizontal $y=y_0$ son horizontales.</p>
        <p><strong>Estabilidad y comportamiento cuando $t\to\infty$.</strong> Observando hacia dónde "empujan" las pendientes alrededor de un equilibrio se determina su estabilidad:</p>
        <ul>
          <li><strong>Estable (atractor):</strong> las soluciones vecinas se acercan a $y_0$ cuando $t\to\infty$.</li>
          <li><strong>Inestable (repulsor):</strong> las soluciones vecinas se alejan de $y_0$.</li>
          <li><strong>Semiestable:</strong> atrae por un lado y repele por el otro.</li>
        </ul>
        <p><strong>Ejemplo.</strong> Sea $4\dfrac{dy}{dt}+12y=60$. a) Para obtener el campo direccional primero se despeja $\dfrac{dy}{dt}$: $\dfrac{dy}{dt}=\dfrac{60-12y}{4}=15-3y$. b) Observando el campo (o razonando algebraicamente) se ve que, sin importar el valor inicial, las soluciones se aproximan a $y=5$ cuando $t\to+\infty$: $\lim_{t\to+\infty}y(t)=5$. c) La solución de equilibrio se obtiene resolviendo $15-3y=0$, es decir $y=5$; en efecto, al sustituir $y=5$ ambos miembros de la ecuación se anulan ($dy/dt=0=15-3(5)$). Como las soluciones vecinas se acercan a $5$, es un equilibrio <strong>estable</strong>. Este modelo corresponde, de hecho, a un circuito eléctrico ($4\frac{dI}{dt}+12I=60$): el que $I(t)=5$ sea una solución de equilibrio estable significa que $5$ amperes es la corriente de régimen permanente del circuito: si la corriente inicial es menor, crecerá hasta $5$; si es mayor, decrecerá hasta $5$.</p>
        <p><strong>Descartar gráficas que no pueden ser soluciones.</strong> Conociendo el signo de $f(x,y)=dy/dx$ se puede descartar de inmediato una gráfica propuesta como solución. Por ejemplo, para $\dfrac{dy}{dt}=e^{t}(y-1)^2$ el lado derecho es siempre $\ge 0$ (un exponencial por un cuadrado), así que toda solución debe ser <strong>no decreciente</strong>; cualquier gráfica que decrezca en algún tramo queda descartada de inmediato, sin necesidad de resolver la ecuación. Además, $f(t,y)=0$ exactamente en los puntos con $y=1$: ahí las soluciones tienen tangente horizontal, pero no un máximo ni un mínimo (es un punto de inflexión con tangente lateral de pendiente cero, similar al de $y=x^3$ en el origen).</p>`
      },
      {
        h: 'Método de Euler',
        html: H`<div class="note">El método de Euler fue eliminado del programa de Matemática III a partir del curso 2026–2027 (junto con el estudio de las EDO lineales de primer orden). Se incluye aquí como complemento, porque ayuda a entender la idea de "seguir el campo direccional" paso a paso, pero no es exigible en la evaluación bajo el programa vigente.</div>
        <p>Las ecuaciones diferenciales que no se pueden resolver de forma explícita también pueden estudiarse mediante <strong>métodos numéricos</strong>, que producen una aproximación de la solución en una malla discreta de puntos. El método numérico más simple es el <strong>método de Euler</strong>; sirve además de base para los métodos de Runge-Kutta, mucho más precisos, que se fundamentan en los polinomios de Taylor.</p>
        <p>Sea el problema de Cauchy $\dfrac{dy}{dx}=F(x,y)$, $y(x_0)=y_0$. La idea es la misma que la de construir un campo direccional: en el punto inicial $(x_0,y_0)$ se conoce la pendiente $F(x_0,y_0)$; en lugar de solo dibujar un segmento, se <em>avanza</em> sobre la recta tangente una distancia horizontal $h$ (el "paso") para obtener una aproximación del siguiente punto de la curva solución. Repitiendo el proceso se va perfilando una poligonal que aproxima la curva solución real.</p>
        <p>Concretando: la recta que pasa por $(x_0,y_0)$ con pendiente $F(x_0,y_0)$ es $r_1(x)=F(x_0,y_0)(x-x_0)+y_0$. Evaluándola en $x_1=x_0+h$ se obtiene la aproximación $y_1=r_1(x_1)=y_0+hF(x_0,y_0)$. Repitiendo el razonamiento desde $(x_1,y_1)$ se obtiene $y_2=y_1+hF(x_1,y_1)$, y en general la <strong>fórmula de Euler</strong>:</p>
        <div class="key">$$x_{n+1}=x_n+h,\qquad y_{n+1}=y_n+h\,F(x_n,y_n)$$</div>
        <p><strong>Ejemplo.</strong> Aproximar la solución de $\dfrac{dy}{dx}=x-y$, $y(0)=1$, con paso $h=0.5$, hasta $x=1$.</p>
        <p>Aquí $F(x,y)=x-y$, $(x_0,y_0)=(0,1)$.</p>
        <table class="tbl"><thead><tr><th>$n$</th><th>$x_n$</th><th>$y_n$</th><th>$F(x_n,y_n)$</th><th>$h\,F(x_n,y_n)$</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>0</td><td>1</td><td>$0-1=-1$</td><td>$-0.5$</td></tr>
          <tr><td>1</td><td>0.5</td><td>$1+(-0.5)=0.5$</td><td>$0.5-0.5=0$</td><td>$0$</td></tr>
          <tr><td>2</td><td>1</td><td>$0.5+0=0.5$</td><td>—</td><td>—</td></tr>
        </tbody></table>
        <p>Se obtiene la aproximación $y(1)\approx 0.5$. Cuanto menor es el paso $h$, más se acerca la poligonal de Euler a la curva solución real, pero también aumenta el número de pasos (y de cálculos) necesarios.</p>`
      }
    ],
    examples: [
      {
        title: 'Comprobar que una función dada es solución',
        statement: H`Demuestre que $y=\dfrac{2}{3}e^{x}+e^{-2x}$ es solución de la ecuación diferencial $y'+2y=2e^{x}$.`,
        steps: [
          H`<strong>Paso 1. Derivar la función propuesta.</strong> $y=\dfrac{2}{3}e^{x}+e^{-2x}\ \Rightarrow\ y'=\dfrac{2}{3}e^{x}-2e^{-2x}$ (derivando cada término; el segundo usa la regla de la cadena, $\frac{d}{dx}e^{-2x}=-2e^{-2x}$).`,
          H`<strong>Paso 2. Sustituir $y$ y $y'$ en el miembro izquierdo.</strong> $$y'+2y=\left(\frac{2}{3}e^{x}-2e^{-2x}\right)+2\left(\frac{2}{3}e^{x}+e^{-2x}\right)$$`,
          H`<strong>Paso 3. Simplificar.</strong> $$=\frac{2}{3}e^{x}-2e^{-2x}+\frac{4}{3}e^{x}+2e^{-2x}=\left(\frac{2}{3}+\frac{4}{3}\right)e^{x}+(-2+2)e^{-2x}=2e^{x}+0$$`,
          H`<strong>Paso 4. Comparar con el miembro derecho.</strong> Se obtiene MI $=2e^{x}=$ MD, para todo $x$. Queda demostrado que la función dada es solución de la ecuación.`
        ],
        answer: H`$y'+2y=2e^{x}$ se verifica idénticamente: es solución.`
      },
      {
        title: 'Hallar r para que $y=e^{rx}$ sea solución',
        statement: H`¿Para qué valores de $r$ la función $y=e^{rx}$ satisface la ecuación diferencial $2y''+y'-y=0$?`,
        steps: [
          H`<strong>Paso 1. Calcular las derivadas de $y=e^{rx}$.</strong> $y'=re^{rx}$, $y''=r^2e^{rx}$.`,
          H`<strong>Paso 2. Sustituir en la ecuación.</strong> $$2\left(r^2e^{rx}\right)+re^{rx}-e^{rx}=0$$`,
          H`<strong>Paso 3. Factorizar el factor común $e^{rx}$.</strong> $$e^{rx}\left(2r^2+r-1\right)=0$$ Como $e^{rx}>0$ para todo $x$ y todo $r$, la igualdad solo puede cumplirse si el otro factor es cero: $2r^2+r-1=0$.`,
          H`<strong>Paso 4. Resolver la ecuación cuadrática en $r$.</strong> Factorizando el trinomio: $(r+1)(2r-1)=0$, de donde $r=-1$ o $r=\dfrac{1}{2}$.`,
          H`<strong>Paso 5. Interpretar el resultado.</strong> Tanto $y=e^{-x}$ como $y=e^{x/2}$ son soluciones de la ecuación. De hecho, cualquier combinación $y=C_1e^{-x}+C_2e^{x/2}$ también lo es (principio de superposición, que estudiaremos con las ecuaciones de segundo orden).`
        ],
        answer: H`$r=-1$ o $r=\dfrac{1}{2}$`
      },
      {
        title: 'Problema de valor inicial: crecimiento poblacional',
        statement: H`La ecuación $\dfrac{dP}{dt}=3P$ modela el crecimiento de una población. Si en el instante inicial $t=0$ (días) la población es de $10$ individuos, determine cuántos individuos habrá a los $2$ días.`,
        steps: [
          H`<strong>Paso 1. Reconocer la forma de la solución general.</strong> Buscamos una función cuya derivada sea proporcional a ella misma: la única familia con esa propiedad es la exponencial, $P(t)=Ce^{3t}$. En efecto $P'(t)=3Ce^{3t}=3P(t)$, para cualquier constante $C$: es la solución general.`,
          H`<strong>Paso 2. Usar la condición inicial para hallar $C$.</strong> $P(0)=10 \Rightarrow Ce^{3\cdot 0}=10 \Rightarrow C=10$.`,
          H`<strong>Paso 3. Escribir la solución particular.</strong> $P(t)=10e^{3t}$.`,
          H`<strong>Paso 4. Evaluar en $t=2$.</strong> $P(2)=10e^{6}\approx 10\times 403.43\approx 4034.3$.`
        ],
        answer: H`$P(2)=10e^{6}\approx 4034$ individuos`
      },
      {
        title: 'Ecuación del tipo $y\'=f(x)$: resolver integrando',
        statement: H`Resuelva la ecuación diferencial $\dfrac{dy}{dx}=x^2$.`,
        steps: [
          H`<strong>Paso 1. Separar diferenciales.</strong> $dy=x^2\,dx$ (formalmente, se multiplican ambos miembros por $dx$).`,
          H`<strong>Paso 2. Integrar ambos miembros.</strong> $$\int dy=\int x^2\,dx$$`,
          H`<strong>Paso 3. Evaluar las integrales.</strong> $$y=\frac{x^3}{3}+C$$ (la constante de integración solo se escribe una vez, del lado que se prefiera; aquí del lado de $y$).`,
          H`<strong>Paso 4. Comprobar.</strong> $y'=x^2$, que coincide con la ecuación original: la familia $y=\dfrac{x^3}{3}+C$ es la solución general.`
        ],
        answer: H`$y=\dfrac{x^3}{3}+C$`
      },
      {
        title: 'Construir un campo direccional en dos puntos',
        statement: H`Para la ecuación diferencial $\dfrac{dy}{dx}=x^2y$, determine la pendiente del campo direccional en los puntos $(0,1)$ y $(1,1)$, y describa qué representa cada valor.`,
        steps: [
          H`<strong>Paso 1. Identificar $f(x,y)$.</strong> Aquí $f(x,y)=x^2y$: en cada punto del plano, este valor es la pendiente que debe tener la curva solución que pasa por ese punto.`,
          H`<strong>Paso 2. Evaluar en $(0,1)$.</strong> $f(0,1)=0^2\cdot 1=0$. Se traza en ese punto un pequeño segmento horizontal.`,
          H`<strong>Paso 3. Evaluar en $(1,1)$.</strong> $f(1,1)=1^2\cdot 1=1$. Se traza un segmento con pendiente $1$ (inclinado a $45°$).`,
          H`<strong>Paso 4. Interpretar.</strong> Repitiendo este cálculo en una malla de puntos se obtiene el campo direccional completo; siguiendo la dirección de los segmentos se pueden esbozar las curvas solución sin resolver la ecuación explícitamente. Nota además que la isoclina de pendiente $0$ es el conjunto $x^2y=0$, es decir, los dos ejes coordenados.`
        ],
        answer: H`Pendiente en $(0,1)$: $0$. Pendiente en $(1,1)$: $1$`
      },
      {
        title: 'Equilibrio y comportamiento cuando $t\\to\\infty$',
        statement: H`Sea la ecuación diferencial $4\dfrac{dy}{dt}+12y=60$. a) Reescríbala en la forma $\frac{dy}{dt}=f(t,y)$. b) Determine la solución de equilibrio. c) Describa el comportamiento de las soluciones cuando $t\to+\infty$.`,
        steps: [
          H`<strong>Paso 1 (inciso a). Despejar $dy/dt$.</strong> $$4\frac{dy}{dt}+12y=60 \ \Rightarrow\ \frac{dy}{dt}=\frac{60-12y}{4}=15-3y$$`,
          H`<strong>Paso 2 (inciso b). Hallar la solución de equilibrio.</strong> Una solución de equilibrio es una solución constante $y(t)=y_0$; para ella $y'=0$, así que debe cumplirse $15-3y_0=0$, de donde $y_0=5$. Se comprueba: si $y=5$, ambos miembros de la ecuación se anulan.`,
          H`<strong>Paso 3 (inciso c). Analizar el signo de $dy/dt$ alrededor del equilibrio.</strong> Si $y<5$ entonces $15-3y>0$ y la solución crece; si $y>5$ entonces $15-3y<0$ y la solución decrece. En ambos casos la solución se acerca a $y=5$: es un equilibrio estable, y $\lim_{t\to+\infty}y(t)=5$ para cualquier condición inicial.`,
          H`<strong>Interpretación física.</strong> Esta ecuación modela, por ejemplo, la corriente $I(t)$ de un circuito ($4I'+12I=60$): $I=5$ amperes es la corriente de régimen permanente; desde cualquier valor inicial, la corriente del circuito se estabiliza en $5\,\text{A}$.`
        ],
        answer: H`$dy/dt=15-3y$; equilibrio estable $y=5$; $\lim_{t\to+\infty}y(t)=5$`
      },
      {
        title: 'Método de Euler paso a paso',
        statement: H`Halle numéricamente, con el método de Euler y paso $h=0.5$, una aproximación de la solución del problema de valor inicial $\dfrac{dy}{dx}=x-y$, $y(0)=1$, hasta $x=1$.`,
        steps: [
          H`<strong>Paso 1. Identificar los datos.</strong> $F(x,y)=x-y$, $h=0.5$, $(x_0,y_0)=(0,1)$.`,
          H`<strong>Paso 2. Primer paso de Euler.</strong> $F(x_0,y_0)=F(0,1)=0-1=-1$. $$x_1=x_0+h=0.5,\qquad y_1=y_0+hF(x_0,y_0)=1+0.5(-1)=0.5$$`,
          H`<strong>Paso 3. Segundo paso de Euler.</strong> $F(x_1,y_1)=F(0.5,0.5)=0.5-0.5=0$. $$x_2=x_1+h=1,\qquad y_2=y_1+hF(x_1,y_1)=0.5+0.5(0)=0.5$$`,
          H`<strong>Paso 4. Organizar los resultados en una tabla y concluir.</strong> $(x_0,y_0)=(0,1)$, $(x_1,y_1)=(0.5,0.5)$, $(x_2,y_2)=(1,0.5)$. La poligonal que une estos puntos es la aproximación de Euler a la curva solución; $y(1)\approx 0.5$.`
        ],
        answer: H`$y(1)\approx 0.5$ (aproximación de Euler con $h=0.5$)`
      }
    ],
    exercises: [
      {
        id: 's7e01', level: 1, type: 'choice',
        q: H`Clasifique la ecuación $\dfrac{dP}{dt}=kP$ según su tipo, orden y grado.`,
        options: [
          H`Ecuación en derivadas parciales, orden 1, grado 1`,
          H`Ecuación diferencial ordinaria, orden 1, grado 1`,
          H`Ecuación diferencial ordinaria, orden 2, grado 1`,
          H`Ecuación diferencial ordinaria, orden 1, grado 2`
        ],
        correct: 1,
        hint: H`Fíjate en si $P$ depende de una sola variable ($t$) y cuál es la derivada de mayor orden que aparece.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Analizar el tipo.</strong> La incógnita es $P=P(t)$: depende de una sola variable independiente ($t$), y solo aparecen derivadas ordinarias, nunca parciales. Por eso la ecuación es una ecuación diferencial ordinaria (EDO), no una EDP.</p></div>
        <div class="step"><p><strong>Determinar el orden.</strong> El orden de una ED es el de la derivada de mayor orden presente. Aquí solo aparece $dP/dt$, una derivada primera, así que el orden es $1$.</p></div>
        <div class="step"><p><strong>Determinar el grado.</strong> $dP/dt$ aparece elevada a la primera potencia (sin raíces ni exponentes sobre ella), así que el grado también es $1$.</p></div>
        <div class="step"><p><strong>Descartar las opciones incorrectas.</strong> "EDP" es incorrecto porque $P$ depende de una sola variable, no de varias. Las opciones con "orden 2" o "grado 2" son incorrectas porque en $dP/dt=kP$ no hay ninguna derivada segunda ni ninguna potencia sobre $dP/dt$.</p></div>
        </div>
        <div class="final">Es una ecuación diferencial ordinaria, de orden $1$ y grado $1$.</div>`
      },
      {
        id: 's7e02', level: 1, type: 'choice',
        q: H`Clasifique la ecuación $m\,x''=-kx$ (modelo del resorte sin fricción) según su tipo, orden y grado.`,
        options: [
          H`EDO, orden 1, grado 1`,
          H`EDP, orden 2, grado 1`,
          H`EDO, orden 2, grado 1`,
          H`EDO, orden 2, grado 2`
        ],
        correct: 2,
        hint: H`$x=x(t)$ depende de una sola variable; ¿cuál es la derivada de mayor orden y a qué potencia está elevada?`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Analizar el tipo.</strong> $x=x(t)$ depende de una sola variable independiente y solo aparecen derivadas ordinarias, así que es una EDO.</p></div>
        <div class="step"><p><strong>Determinar el orden.</strong> La derivada de mayor orden presente es $x''$, una derivada segunda, así que el orden es $2$.</p></div>
        <div class="step"><p><strong>Determinar el grado.</strong> $x''$ aparece elevada a la primera potencia (no está al cuadrado ni bajo una raíz), así que el grado es $1$.</p></div>
        <div class="step"><p><strong>Descartar las opciones incorrectas.</strong> "Orden 1" es incorrecto porque sí hay una derivada segunda; "EDP" es incorrecto porque $x$ depende de una sola variable; "grado 2" es incorrecto porque $x''$ no está elevada al cuadrado.</p></div>
        </div>
        <div class="final">Es una EDO de orden $2$ y grado $1$.</div>`
      },
      {
        id: 's7e03', level: 1, type: 'set',
        q: H`Determine los valores de $r$ para los cuales $y=e^{rx}$ es solución de $y''-y'-6y=0$. Escriba los dos valores de $r$ separados por comas.`,
        answer: ['3', '-2'],
        hint: H`Sustituye $y=e^{rx}$, $y'=re^{rx}$, $y''=r^2e^{rx}$; factoriza $e^{rx}$ y resuelve la ecuación cuadrática en $r$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Calcular las derivadas de $y=e^{rx}$.</strong> Se necesita probar la función propuesta en la ecuación, así que primero se derivan: $y'=re^{rx}$, $y''=r^2e^{rx}$.</p></div>
        <div class="step"><p><strong>Sustituir en la ecuación.</strong> $$r^2e^{rx}-re^{rx}-6e^{rx}=0$$</p></div>
        <div class="step"><p><strong>Factorizar el factor común $e^{rx}$.</strong> $$e^{rx}\left(r^2-r-6\right)=0$$ Como $e^{rx}\neq 0$ para todo $x$, la igualdad solo puede cumplirse si $r^2-r-6=0$.</p></div>
        <div class="step"><p><strong>Resolver la ecuación cuadrática en $r$.</strong> Factorizando el trinomio: $(r-3)(r+2)=0$, de donde $r=3$ o $r=-2$.</p></div>
        </div>
        <div class="final">$r=3$ o $r=-2$</div>`
      },
      {
        id: 's7e04', level: 1, type: 'num',
        q: H`Determine el valor de $k$ para el cual la función $y=5e^{kx}$ es solución de la ecuación $y'=3y$.`,
        answer: '3',
        hint: H`Deriva $y=5e^{kx}$ y sustituye en $y'=3y$; obtendrás una igualdad válida para todo $x$ solo si $k=3$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Derivar la función propuesta.</strong> $y=5e^{kx}\Rightarrow y'=5ke^{kx}$ (derivada de una exponencial, regla de la cadena).</p></div>
        <div class="step"><p><strong>Sustituir en la ecuación $y'=3y$.</strong> $$5ke^{kx}=3\left(5e^{kx}\right)=15e^{kx}$$</p></div>
        <div class="step"><p><strong>Cancelar el factor común.</strong> Como $5e^{kx}\neq 0$ para todo $x$, se puede dividir ambos miembros por $5e^{kx}$: $$k=3$$</p></div>
        </div>
        <div class="final">$k=3$</div>`
      },
      {
        id: 's7e05', level: 1, type: 'ode', order: 1,
        q: H`Resuelva $\dfrac{dy}{dx}=4x^3$ integrando directamente. Escriba la solución general usando la constante $C$.`,
        res: 'yp-4*x^3', ref: 'x^4+C', consts: ['C'], v: 'x',
        hint: H`Separa $dy=4x^3\,dx$ e integra ambos miembros.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar el tipo de ecuación.</strong> El lado derecho depende solo de $x$, así que basta integrar directamente. Se separan las diferenciales: $dy=4x^3\,dx$.</p></div>
        <div class="step"><p><strong>Integrar ambos miembros.</strong> $$\int dy=\int 4x^3\,dx$$</p></div>
        <div class="step"><p><strong>Evaluar la integral.</strong> $$y=4\cdot\frac{x^4}{4}+C=x^4+C$$</p></div>
        <div class="step"><p><strong>Comprobar derivando.</strong> $y'=4x^3$, que coincide exactamente con la ecuación dada: la familia es la solución general. ✓</p></div>
        </div>
        <div class="final">$y=x^4+C$</div>`
      },
      {
        id: 's7e06', level: 1, type: 'func', v: 'x', ref: 'x^2+2',
        q: H`Resuelva el problema de valor inicial $\dfrac{dy}{dx}=2x$, $y(1)=3$.`,
        hint: H`Halla primero la solución general integrando, y usa $y(1)=3$ para determinar la constante.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Hallar la solución general.</strong> El lado derecho depende solo de $x$: se integra directamente. $$y=\int 2x\,dx=x^2+C$$</p></div>
        <div class="step"><p><strong>Usar la condición inicial $y(1)=3$.</strong> $$1^2+C=3 \Rightarrow C=2$$</p></div>
        <div class="step"><p><strong>Escribir la solución particular.</strong> $y=x^2+2$.</p></div>
        <div class="step"><p><strong>Comprobar.</strong> $y'=2x$ (coincide con la ecuación) y $y(1)=1+2=3$ (coincide con la condición inicial). ✓</p></div>
        </div>
        <div class="final">$y=x^2+2$</div>`
      },
      {
        id: 's7e07', level: 2, type: 'num',
        q: H`Una población crece según $\dfrac{dP}{dt}=0.4P$, con $P(0)=50$. ¿Cuántos individuos habrá cuando $t=5$? (Escriba el valor exacto, con $e$.)`,
        answer: '50*exp(2)',
        hint: H`La solución general de $P'=0.4P$ es $P(t)=Ce^{0.4t}$. Usa la condición inicial y evalúa en $t=5$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer la solución general.</strong> $\dfrac{dP}{dt}=0.4P$ tiene la forma $P'=kP$ con $k=0.4$, cuya solución general es $P(t)=Ce^{0.4t}$.</p></div>
        <div class="step"><p><strong>Aplicar la condición inicial.</strong> $P(0)=50 \Rightarrow Ce^{0}=50 \Rightarrow C=50$. Así, $P(t)=50e^{0.4t}$.</p></div>
        <div class="step"><p><strong>Evaluar en $t=5$.</strong> $$P(5)=50e^{0.4\cdot 5}=50e^{2}\approx 50\times 7.389\approx 369.5$$</p></div>
        </div>
        <div class="final">$P(5)=50e^{2}\approx 369.5$ individuos</div>`
      },
      {
        id: 's7e08', level: 2, type: 'num',
        q: H`Para la ecuación diferencial $\dfrac{dy}{dx}=xy-x$, calcule la pendiente del segmento del campo direccional en el punto $(2,1)$.`,
        answer: '0',
        hint: H`Sustituye $x=2$, $y=1$ directamente en $f(x,y)=xy-x$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar $f(x,y)$.</strong> Para $\dfrac{dy}{dx}=f(x,y)$, el valor de $f$ en un punto es la pendiente del segmento del campo direccional en ese punto. Aquí $f(x,y)=xy-x$.</p></div>
        <div class="step"><p><strong>Evaluar en $(2,1)$.</strong> $$f(2,1)=2\cdot 1-2=2-2=0$$</p></div>
        <div class="step"><p><strong>Interpretar.</strong> La pendiente es $0$: se traza un segmento horizontal. De hecho $xy-x=x(y-1)=0$ cuando $y=1$, así que $(2,1)$ está sobre la isoclina de pendiente cero.</p></div>
        </div>
        <div class="final">La pendiente del campo direccional en $(2,1)$ es $0$</div>`
      },
      {
        id: 's7e09', level: 2, type: 'num',
        q: H`Para la ecuación diferencial $\dfrac{dy}{dx}=x^2-y$, calcule la pendiente del campo direccional en el punto $(-1,2)$.`,
        answer: '-1',
        hint: H`Sustituye $x=-1$, $y=2$ en $f(x,y)=x^2-y$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar $f(x,y)$.</strong> Aquí $f(x,y)=x^2-y$; su valor en un punto es la pendiente del segmento del campo direccional en ese punto.</p></div>
        <div class="step"><p><strong>Evaluar en $(-1,2)$.</strong> $$f(-1,2)=(-1)^2-2=1-2=-1$$</p></div>
        </div>
        <div class="final">La pendiente del campo direccional en $(-1,2)$ es $-1$</div>`
      },
      {
        id: 's7e10', level: 2, type: 'set',
        q: H`Determine las soluciones de equilibrio de la ecuación autónoma $\dfrac{dy}{dt}=(y-2)(y+1)$. Escriba los dos valores separados por comas.`,
        answer: ['2', '-1'],
        hint: H`Las soluciones de equilibrio son los valores de $y$ para los que el lado derecho se anula.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Recordar la condición de equilibrio.</strong> Una solución de equilibrio es una solución constante $y(t)=y_0$; para ella $y'=0$ siempre, así que debe cumplirse $(y_0-2)(y_0+1)=0$.</p></div>
        <div class="step"><p><strong>Resolver la ecuación en $y_0$.</strong> El producto se anula cuando alguno de los factores es cero: $y_0-2=0$ o $y_0+1=0$, es decir $y_0=2$ o $y_0=-1$.</p></div>
        <div class="step"><p><strong>Comprobar.</strong> Con $y=2$: $(2-2)(2+1)=0$. Con $y=-1$: $(-1-2)(-1+1)=0$. Ambas anulan el lado derecho, así que son soluciones de equilibrio.</p></div>
        </div>
        <div class="final">Las soluciones de equilibrio son $y=2$ y $y=-1$</div>`
      },
      {
        id: 's7e11', level: 2, type: 'num',
        q: H`Para la ecuación $\dfrac{dy}{dt}=15-3y$, calcule la pendiente del campo direccional en el punto $(t,y)=(0,1)$.`,
        answer: '12',
        hint: H`La ecuación es autónoma: el valor de $t$ no influye, solo el de $y$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer que la ecuación es autónoma.</strong> $f(t,y)=15-3y$ no depende explícitamente de $t$, así que su valor no cambia con $t$: solo importa el valor de $y$.</p></div>
        <div class="step"><p><strong>Evaluar en $y=1$.</strong> $$f=15-3(1)=12$$</p></div>
        <div class="step"><p><strong>Interpretar.</strong> La pendiente en $(0,1)$ es $12$: fuertemente creciente, coherente con que $y=1$ está muy por debajo del equilibrio $y=5$ (a mayor distancia del equilibrio, mayor la pendiente).</p></div>
        </div>
        <div class="final">La pendiente en $(0,1)$ es $12$</div>`
      },
      {
        id: 's7e12', level: 2, type: 'choice',
        q: H`Para la ecuación diferencial $\dfrac{dy}{dt}=e^{t}(y-1)^2$, ¿cuál de las siguientes gráficas NO puede corresponder a una solución?`,
        options: [
          H`Una función creciente que se aproxima a $y=1$ sin cruzarla`,
          H`Una función decreciente en algún intervalo de su dominio`,
          H`La función constante $y=1$`,
          H`Una función creciente sin cota superior`
        ],
        correct: 1,
        hint: H`Analiza el signo de $F(t,y)=e^{t}(y-1)^2$: ¿puede ser negativo alguna vez?`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Analizar el signo de $F(t,y)=e^{t}(y-1)^2$.</strong> Es un producto de $e^{t}>0$ (siempre positivo) por un cuadrado $(y-1)^2\ge 0$, así que $F(t,y)\ge 0$ para todo $(t,y)$.</p></div>
        <div class="step"><p><strong>Traducir el signo a una propiedad de las soluciones.</strong> Como $y'=F(t,y)\ge 0$ siempre, toda solución debe ser no decreciente (nunca puede disminuir).</p></div>
        <div class="step"><p><strong>Evaluar cada opción.</strong> Una función creciente que se acerca a $y=1$: compatible. La constante $y=1$: es una solución de equilibrio (compatible, con $y'=0$). Una función creciente sin cota: compatible. Una función que decrece en algún tramo: violaría $y'\ge 0$ en ese tramo, así que es incompatible.</p></div>
        </div>
        <div class="final">La gráfica que decrece en algún intervalo no puede ser solución, porque $F(t,y)\ge 0$ para todo $(t,y)$</div>`
      },
      {
        id: 's7e13', level: 2, type: 'ode', order: 1,
        q: H`Resuelva $\dfrac{dy}{dx}=6x^2-2$ integrando directamente. Use la constante $C$.`,
        res: 'yp-6*x^2+2', ref: '2*x^3-2*x+C', consts: ['C'], v: 'x',
        hint: H`Integra término a término: $\int 6x^2\,dx$ y $\int(-2)\,dx$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Separar diferenciales.</strong> El lado derecho depende solo de $x$: $dy=(6x^2-2)\,dx$.</p></div>
        <div class="step"><p><strong>Integrar término a término.</strong> $$y=\int 6x^2\,dx-\int 2\,dx=6\cdot\frac{x^3}{3}-2x+C$$</p></div>
        <div class="step"><p><strong>Simplificar.</strong> $$y=2x^3-2x+C$$</p></div>
        <div class="step"><p><strong>Comprobar derivando.</strong> $y'=6x^2-2$, que coincide con la ecuación dada. ✓</p></div>
        </div>
        <div class="final">$y=2x^3-2x+C$</div>`
      },
      {
        id: 's7e14', level: 2, type: 'func', v: 'x', ref: 'sin(x)+1',
        q: H`Resuelva el problema de valor inicial $\dfrac{dy}{dx}=\cos x$, $y(0)=1$.`,
        hint: H`Integra $\cos x$ y usa $y(0)=1$ para hallar la constante.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Integrar directamente.</strong> El lado derecho depende solo de $x$: $$y=\int \cos x\,dx=\sin x+C$$</p></div>
        <div class="step"><p><strong>Aplicar la condición inicial.</strong> $y(0)=1 \Rightarrow \sin 0+C=1 \Rightarrow 0+C=1 \Rightarrow C=1$.</p></div>
        <div class="step"><p><strong>Escribir la solución particular.</strong> $y=\sin x+1$.</p></div>
        </div>
        <div class="final">$y=\sin x+1$</div>`
      },
      {
        id: 's7e15', level: 2, type: 'choice',
        q: H`La ecuación del calor $\dfrac{\partial u}{\partial t}=\dfrac{\partial^2 u}{\partial x^2}$ es:`,
        options: [
          H`Una EDO de orden 2`,
          H`Una ecuación en derivadas parciales (EDP) de orden 2`,
          H`Una EDO de orden 1`,
          H`Una ecuación algebraica`
        ],
        correct: 1,
        hint: H`Observa cuántas variables independientes tiene $u$ y qué tipo de derivadas aparecen (símbolo $\partial$).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Analizar el tipo.</strong> $u=u(x,t)$ depende de <em>dos</em> variables independientes ($x$ y $t$), y las derivadas que aparecen usan el símbolo $\partial$ (derivadas parciales, no ordinarias). Por eso es una ecuación en derivadas parciales (EDP).</p></div>
        <div class="step"><p><strong>Determinar el orden.</strong> La derivada de mayor orden es $\partial^2u/\partial x^2$, de segundo orden.</p></div>
        <div class="step"><p><strong>Descartar las opciones incorrectas.</strong> No puede ser EDO (de orden 1 o 2) porque $u$ depende de dos variables, no de una; tampoco es una ecuación algebraica, porque contiene derivadas.</p></div>
        </div>
        <div class="final">Es una ecuación en derivadas parciales (EDP) de orden $2$</div>`
      },
      {
        id: 's7e16', level: 3, type: 'num',
        q: H`Use el método de Euler con paso $h=0.25$ para estimar $y(0.5)$, donde $y(x)$ es la solución del problema de valor inicial $y'=x+y$, $y(0)=1$.`,
        answer: '1.625', tol: 0.0005,
        hint: H`Necesitas dos pasos de Euler ($x_0=0\to x_1=0.25\to x_2=0.5$) con $F(x,y)=x+y$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar los datos.</strong> $F(x,y)=x+y$, $h=0.25$, $(x_0,y_0)=(0,1)$. Se necesitan dos pasos para llegar de $x=0$ a $x=0.5$.</p></div>
        <div class="step"><p><strong>Primer paso de Euler.</strong> $F(x_0,y_0)=F(0,1)=0+1=1$. $$x_1=x_0+h=0.25,\qquad y_1=y_0+hF(x_0,y_0)=1+0.25(1)=1.25$$</p></div>
        <div class="step"><p><strong>Segundo paso de Euler.</strong> $F(x_1,y_1)=F(0.25,1.25)=0.25+1.25=1.5$. $$x_2=x_1+h=0.5,\qquad y_2=y_1+hF(x_1,y_1)=1.25+0.25(1.5)=1.25+0.375=1.625$$</p></div>
        <div class="step"><p><strong>Concluir.</strong> Se llega a $(x_2,y_2)=(0.5,1.625)$, así que $y(0.5)\approx 1.625$.</p></div>
        </div>
        <div class="final">$y(0.5)\approx 1.625$ (aproximación de Euler con $h=0.25$)</div>`
      },
      {
        id: 's7e17', level: 3, type: 'num',
        q: H`Use el método de Euler con paso $h=0.25$ para estimar $y(0.5)$, donde $y(x)$ es la solución del problema de valor inicial $y'=x-y$, $y(0)=1$.`,
        answer: '0.625', tol: 0.0005,
        hint: H`Necesitas dos pasos de Euler con $F(x,y)=x-y$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar los datos.</strong> $F(x,y)=x-y$, $h=0.25$, $(x_0,y_0)=(0,1)$. Se necesitan dos pasos para llegar de $x=0$ a $x=0.5$.</p></div>
        <div class="step"><p><strong>Primer paso de Euler.</strong> $F(x_0,y_0)=F(0,1)=0-1=-1$. $$x_1=x_0+h=0.25,\qquad y_1=y_0+hF(x_0,y_0)=1+0.25(-1)=0.75$$</p></div>
        <div class="step"><p><strong>Segundo paso de Euler.</strong> $F(x_1,y_1)=F(0.25,0.75)=0.25-0.75=-0.5$. $$x_2=x_1+h=0.5,\qquad y_2=y_1+hF(x_1,y_1)=0.75+0.25(-0.5)=0.75-0.125=0.625$$</p></div>
        <div class="step"><p><strong>Concluir.</strong> Se llega a $(x_2,y_2)=(0.5,0.625)$, así que $y(0.5)\approx 0.625$. Nota que con $h=0.5$ (ejemplo resuelto en la teoría) se obtenía $0.5$: al reducir el paso, la aproximación cambia y, en general, mejora.</p></div>
        </div>
        <div class="final">$y(0.5)\approx 0.625$ (aproximación de Euler con $h=0.25$)</div>`
      },
      {
        id: 's7e18', level: 3, type: 'set',
        q: H`Determine los valores de $r$ para los cuales $y=e^{rx}$ es solución de $y''+2y'-3y=0$. Escriba los dos valores separados por comas.`,
        answer: ['1', '-3'],
        hint: H`Sustituye $y=e^{rx}$, factoriza $e^{rx}$ y resuelve la ecuación cuadrática resultante en $r$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Calcular las derivadas de $y=e^{rx}$.</strong> $y'=re^{rx}$, $y''=r^2e^{rx}$.</p></div>
        <div class="step"><p><strong>Sustituir en la ecuación y factorizar $e^{rx}$.</strong> $$r^2e^{rx}+2re^{rx}-3e^{rx}=0 \Rightarrow e^{rx}\left(r^2+2r-3\right)=0$$ Como $e^{rx}\neq 0$ para todo $x$, debe ser $r^2+2r-3=0$.</p></div>
        <div class="step"><p><strong>Resolver la ecuación cuadrática en $r$.</strong> Factorizando: $(r+3)(r-1)=0$, de donde $r=-3$ o $r=1$.</p></div>
        </div>
        <div class="final">$r=1$ o $r=-3$</div>`
      }
    ]
  });
})();
