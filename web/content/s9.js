(function () {
  const H = String.raw; // keeps LaTeX backslashes intact. NEVER write "$" + "{" together.
  window.SESSIONS = window.SESSIONS || [];
  window.SESSIONS.push({
    id: 's9',
    order: 9,
    code: 'CE8',
    topic: 'Tema II · Ecuaciones diferenciales',
    title: 'Ecuaciones diferenciales de orden superior. Ecuaciones lineales de segundo orden',
    short: 'EDO 2do orden',
    goals: [
      'Reconocer la forma general de una ecuación lineal de segundo orden y distinguir el caso homogéneo del no homogéneo.',
      'Aplicar el principio de superposición y el concepto de independencia lineal (Wronskiano) para construir la solución general de una ecuación homogénea.',
      'Plantear y resolver la ecuación característica de una ecuación lineal homogénea con coeficientes constantes, para los tres casos de raíces (reales distintas, real doble, complejas conjugadas).',
      'Resolver un problema de valor inicial de segundo orden, determinando ambas constantes con $y(0)$ y $y\'(0)$.',
      'Modelar y resolver el movimiento armónico simple de un resorte sin fricción.',
      'Resolver una ecuación lineal no homogénea con coeficientes constantes por el método de coeficientes indeterminados, incluyendo la regla de modificación cuando hay resonancia con la solución homogénea.'
    ],
    theory: [
      {
        h: 'Ecuaciones lineales de segundo orden: forma general',
        html: H`<p>Una ecuación diferencial de <strong>orden superior</strong> es simplemente una EDO cuyo orden es mayor que uno. En este curso trabajaremos el caso más importante en las aplicaciones: las ecuaciones <strong>lineales de segundo orden</strong>, con la forma general</p>
        <div class="key">$$a\,y''+b\,y'+c\,y=g(x)$$</div>
        <p>Cuando los coeficientes $a$, $b$, $c$ son constantes (el caso que estudiaremos en detalle) y $g(x)$ es una función dada de la variable independiente:</p>
        <ul>
          <li>Si $g(x)=0$ para todo $x$, la ecuación se llama <strong>homogénea</strong>: $ay''+by'+cy=0$.</li>
          <li>Si $g(x)\neq 0$ (al menos en algún punto), la ecuación se llama <strong>no homogénea</strong>.</li>
        </ul>
        <p>A la ecuación homogénea $ay''+by'+cy=0$ se le llama <strong>ecuación homogénea asociada</strong> de la no homogénea $ay''+by'+cy=g(x)$: como veremos, la solución general de la segunda se construye a partir de la solución general de la primera.</p>`
      },
      {
        h: 'Principio de superposición e independencia lineal',
        html: H`<p><strong>Principio de superposición (caso homogéneo).</strong> Si $y_1(x)$ y $y_2(x)$ son ambas soluciones de la ecuación lineal homogénea $ay''+by'+cy=0$, entonces cualquier combinación lineal</p>
        <div class="key">$$y=C_1y_1+C_2y_2$$</div>
        <p>también es solución, para cualesquiera constantes $C_1,C_2$. (Se comprueba sustituyendo directamente: al ser la ecuación lineal y homogénea, sustituir una suma de soluciones "reparte" la ecuación en dos partes, cada una nula por hipótesis.)</p>
        <p><strong>Independencia lineal y Wronskiano.</strong> Para que $y=C_1y_1+C_2y_2$ sea, en efecto, la solución <em>general</em> (es decir, que contenga <em>todas</em> las soluciones y no solo una familia más pequeña), $y_1$ y $y_2$ deben ser <strong>linealmente independientes</strong>: ninguna es múltiplo constante de la otra. Un criterio práctico para verificarlo es el <strong>Wronskiano</strong>:</p>
        <div class="key">$$W(y_1,y_2)=y_1y_2'-y_2y_1'$$</div>
        <p>Si $W(y_1,y_2)\neq 0$ en algún punto del intervalo de interés, entonces $y_1,y_2$ son linealmente independientes y $\{y_1,y_2\}$ es un <strong>conjunto fundamental de soluciones</strong>; en ese caso $y=C_1y_1+C_2y_2$ es la solución general de la ecuación homogénea (contiene todas sus soluciones, para las dos constantes arbitrarias $C_1$ y $C_2$).</p>
        <div class="note">En este curso, para ecuaciones con coeficientes constantes, las dos soluciones $y_1,y_2$ que se obtienen de la ecuación característica (ver más abajo) resultan automáticamente independientes en cada uno de los tres casos posibles, así que en la práctica no será necesario calcular el Wronskiano explícitamente; basta con reconocer el caso y escribir la forma correspondiente de la solución general.</div>`
      },
      {
        h: 'Coeficientes constantes: la ecuación característica',
        html: H`<p>Para resolver $ay''+by'+cy=0$ con $a,b,c$ constantes, se propone (como ya se hizo, de forma introductoria, con ecuaciones de primer orden) una solución exponencial $y=e^{rx}$. Sustituyendo $y'=re^{rx}$, $y''=r^2e^{rx}$:</p>
        <div class="key">$$ar^2e^{rx}+bre^{rx}+ce^{rx}=0 \ \Longrightarrow\ e^{rx}\left(ar^2+br+c\right)=0$$</div>
        <p>Como $e^{rx}\neq 0$ siempre, se obtiene la <strong>ecuación característica</strong> (una simple ecuación cuadrática en $r$):</p>
        <div class="key">$$ar^2+br+c=0$$</div>
        <p>Sus raíces determinan la forma de la solución general, según el signo del discriminante $\Delta=b^2-4ac$. Hay <strong>tres casos</strong>:</p>
        <p><strong>Caso 1: raíces reales distintas ($\Delta>0$), $r_1\neq r_2$.</strong> Se obtienen dos soluciones exponenciales independientes $y_1=e^{r_1x}$, $y_2=e^{r_2x}$ (independientes porque $r_1\neq r_2$ hace que ninguna sea múltiplo de la otra). La solución general es</p>
        <div class="key">$$y=C_1e^{r_1x}+C_2e^{r_2x}$$</div>
        <p><strong>Caso 2: raíz real doble ($\Delta=0$), $r_1=r_2=r$.</strong> La ecuación característica solo aporta una solución, $y_1=e^{rx}$; se necesita una segunda solución independiente, que resulta ser $y_2=xe^{rx}$ (se puede comprobar por sustitución directa que también es solución cuando la raíz es doble). La solución general es</p>
        <div class="key">$$y=(C_1+C_2x)\,e^{rx}$$</div>
        <p><strong>Caso 3: raíces complejas conjugadas ($\Delta<0$), $r=\alpha\pm\beta i$.</strong> Usando la fórmula de Euler ($e^{i\theta}=\cos\theta+i\sin\theta$) se puede reescribir la combinación de exponenciales complejas $e^{(\alpha+\beta i)x}$ y $e^{(\alpha-\beta i)x}$ en términos de funciones reales; la solución general (ya real) es</p>
        <div class="key">$$y=e^{\alpha x}\left(C_1\cos\beta x+C_2\sin\beta x\right)$$</div>
        <p><strong>Ejemplo (los tres casos).</strong></p>
        <ul>
          <li>$y''-y'-6y=0$: $r^2-r-6=0 \Rightarrow (r-3)(r+2)=0 \Rightarrow r=3,-2$ (Caso 1). $y=C_1e^{3x}+C_2e^{-2x}$.</li>
          <li>$y''-6y'+9y=0$: $r^2-6r+9=0 \Rightarrow (r-3)^2=0 \Rightarrow r=3$ (doble, Caso 2). $y=(C_1+C_2x)e^{3x}$.</li>
          <li>$y''+4y'+13y=0$: $r=\dfrac{-4\pm\sqrt{16-52}}{2}=\dfrac{-4\pm\sqrt{-36}}{2}=-2\pm 3i$ (Caso 3, $\alpha=-2$, $\beta=3$). $y=e^{-2x}(C_1\cos 3x+C_2\sin 3x)$.</li>
        </ul>`
      },
      {
        h: 'Problema de valor inicial de segundo orden',
        html: H`<p>La solución general de una ecuación lineal de segundo orden tiene <strong>dos</strong> constantes arbitrarias; se necesitan, por tanto, <strong>dos</strong> condiciones para determinarlas por completo. Lo habitual es dar ambas condiciones en el mismo punto $x_0$: $y(x_0)=y_0$ y $y'(x_0)=y_0'$ (posición y velocidad inicial, en el lenguaje del movimiento).</p>
        <p>El procedimiento es:</p>
        <ol>
          <li>Escribir la solución general $y(x)$ según el caso correspondiente.</li>
          <li>Derivar para obtener $y'(x)$ (en función de las mismas constantes).</li>
          <li>Sustituir $x=x_0$ en $y(x)$ e igualar a $y_0$: primera ecuación.</li>
          <li>Sustituir $x=x_0$ en $y'(x)$ e igualar a $y_0'$: segunda ecuación.</li>
          <li>Resolver el sistema de dos ecuaciones lineales con dos incógnitas $C_1,C_2$.</li>
        </ol>
        <p><strong>Ejemplo.</strong> Resolver $y''-y=0$, $y(0)=2$, $y'(0)=-1$.</p>
        <p>Ecuación característica: $r^2-1=0 \Rightarrow r=\pm 1$ (Caso 1). Solución general: $y=C_1e^{x}+C_2e^{-x}$, con $y'=C_1e^{x}-C_2e^{-x}$.</p>
        <p>Con $y(0)=2$: $C_1+C_2=2$. Con $y'(0)=-1$: $C_1-C_2=-1$. Sumando ambas ecuaciones: $2C_1=1 \Rightarrow C_1=\dfrac12$; y entonces $C_2=2-\dfrac12=\dfrac32$.</p>
        <p>Solución particular: $y=\dfrac12 e^{x}+\dfrac32 e^{-x}$.</p>`
      },
      {
        h: 'Aplicación: el resorte sin fricción (movimiento armónico simple)',
        html: H`<p>Retomando el modelo de la primera sesión del tema, $m\dfrac{d^2x}{dt^2}=-kx$, es decir</p>
        <div class="key">$$m\,x''+k\,x=0\qquad\Longleftrightarrow\qquad x''+\omega^2x=0,\quad \omega=\sqrt{\frac{k}{m}}$$</div>
        <p>La ecuación característica es $r^2+\omega^2=0$, con raíces complejas puras $r=\pm\omega i$ (Caso 3, con $\alpha=0$, $\beta=\omega$). La solución general es</p>
        <div class="key">$$x(t)=C_1\cos\omega t+C_2\sin\omega t$$</div>
        <p>que describe un <strong>movimiento armónico simple</strong>: una oscilación periódica, de periodo $T=\dfrac{2\pi}{\omega}$, que nunca se amortigua (porque no hay fricción). Las constantes $C_1,C_2$ quedan determinadas por la posición y la velocidad iniciales, $x(0)$ y $x'(0)$.</p>
        <p><strong>Ejemplo.</strong> Un cuerpo de masa $m=1$ está sujeto a un resorte de constante $k=4$. Se separa $1$ unidad de su posición de equilibrio y se suelta sin velocidad inicial ($x(0)=1$, $x'(0)=0$). Aquí $\omega=\sqrt{k/m}=2$, así que $x(t)=C_1\cos 2t+C_2\sin 2t$, con $x'(t)=-2C_1\sin 2t+2C_2\cos 2t$. De $x(0)=1$: $C_1=1$. De $x'(0)=0$: $2C_2=0 \Rightarrow C_2=0$. Solución: $x(t)=\cos 2t$: el cuerpo oscila con amplitud $1$ y periodo $T=\dfrac{2\pi}{2}=\pi$.</p>`
      },
      {
        h: 'Ecuaciones no homogéneas: $y=y_h+y_p$',
        html: H`<p>Para la ecuación no homogénea $ay''+by'+cy=g(x)$, la solución general se construye en dos partes:</p>
        <div class="key">$$y=y_h+y_p$$</div>
        <p>donde $y_h$ es la <strong>solución general de la ecuación homogénea asociada</strong> ($ay''+by'+cy=0$, con sus dos constantes arbitrarias) y $y_p$ es <strong>cualquier</strong> solución particular de la ecuación no homogénea completa (sin constantes, una función específica).</p>
        <p><strong>Por qué funciona.</strong> Si $y_p$ satisface $ay_p''+by_p'+cy_p=g(x)$ y $y_h$ satisface $ay_h''+by_h'+cy_h=0$, entonces $y=y_h+y_p$ satisface: $a(y_h+y_p)''+b(y_h+y_p)'+c(y_h+y_p)=\underbrace{(ay_h''+by_h'+cy_h)}_{=0}+\underbrace{(ay_p''+by_p'+cy_p)}_{=g(x)}=g(x)$. Y como $y_h$ ya contiene dos constantes arbitrarias, $y=y_h+y_p$ es, en efecto, la solución general completa (tiene tantas constantes como se necesitan, dos).</p>`
      },
      {
        h: 'Coeficientes indeterminados: cómo proponer $y_p$',
        html: H`<p>El <strong>método de coeficientes indeterminados</strong> permite hallar $y_p$ cuando $g(x)$ es de un tipo "simple": un polinomio, una exponencial, un seno o coseno, o un producto de estos. La idea es proponer una forma para $y_p$ con coeficientes desconocidos, del mismo "tipo" que $g(x)$, sustituirla en la ecuación y determinar los coeficientes igualando términos semejantes.</p>
        <table class="tbl"><thead><tr><th>Forma de $g(x)$</th><th>Forma que se propone para $y_p$</th></tr></thead>
        <tbody>
          <tr><td>Polinomio de grado $n$</td><td>Polinomio genérico de grado $n$: $A_nx^n+\cdots+A_1x+A_0$</td></tr>
          <tr><td>$e^{ax}$</td><td>$Ae^{ax}$</td></tr>
          <tr><td>$\sin(bx)$ o $\cos(bx)$</td><td>$A\cos bx+B\sin bx$ (se incluyen <em>ambos</em> términos, aunque $g$ tenga solo seno o solo coseno)</td></tr>
        </tbody></table>
        <p><strong>Procedimiento.</strong></p>
        <ol>
          <li>Resolver primero la ecuación homogénea asociada, para tener $y_h$ (y saber qué raíces tiene la ecuación característica; esto es necesario para el siguiente apartado, la regla de modificación).</li>
          <li>Proponer $y_p$ según la tabla, con coeficientes desconocidos ($A$, $B$, etc.).</li>
          <li>Calcular $y_p'$ y $y_p''$.</li>
          <li>Sustituir $y_p,y_p',y_p''$ en la ecuación completa y agrupar términos semejantes.</li>
          <li>Igualar los coeficientes de cada término (potencia de $x$, o de $e^{ax}$, o de $\sin bx$/$\cos bx$) en ambos miembros, obteniendo un sistema (casi siempre sencillo) para los coeficientes desconocidos.</li>
          <li>Escribir $y=y_h+y_p$.</li>
        </ol>
        <p><strong>Ejemplo (sin resonancia).</strong> Resolver $y''-3y'+2y=4x$.</p>
        <p>Homogénea: $r^2-3r+2=0 \Rightarrow (r-1)(r-2)=0 \Rightarrow r=1,2$. $y_h=C_1e^{x}+C_2e^{2x}$.</p>
        <p>Como $g(x)=4x$ es un polinomio de grado 1, se propone $y_p=Ax+B$, con $y_p'=A$, $y_p''=0$. Sustituyendo: $0-3A+2(Ax+B)=4x \Rightarrow 2Ax+(2B-3A)=4x+0$. Igualando coeficientes: de $x$: $2A=4 \Rightarrow A=2$; del término constante: $2B-3A=0 \Rightarrow 2B=6 \Rightarrow B=3$. Así $y_p=2x+3$.</p>
        <p>Solución general: $y=C_1e^{x}+C_2e^{2x}+2x+3$.</p>`
      },
      {
        h: 'Regla de modificación (resonancia)',
        html: H`<p>El método anterior falla cuando la forma propuesta para $y_p$ ya es, de por sí, solución de la ecuación <em>homogénea</em> (es decir, cuando "coincide" con algún término de $y_h$): en ese caso, sustituirla en la ecuación completa da $0=g(x)$, una contradicción, porque toda esa forma se anula al aplicar el operador. A esta coincidencia se le llama <strong>resonancia</strong>.</p>
        <p><strong>Regla de modificación:</strong> si la forma inicialmente propuesta para $y_p$ coincide con un término de $y_h$, se multiplica toda la propuesta por $x$. Si aun así sigue coincidiendo (esto solo ocurre cuando la raíz correspondiente es doble y se repite dos veces en $y_h$), se multiplica por $x^2$.</p>
        <p><strong>Ejemplo.</strong> Resolver $y''-4y=e^{2x}$.</p>
        <p>Homogénea: $r^2-4=0 \Rightarrow r=\pm 2$. $y_h=C_1e^{2x}+C_2e^{-2x}$.</p>
        <p>El lado derecho es $e^{2x}$, que "según la tabla" sugeriría $y_p=Ae^{2x}$; pero $e^{2x}$ ya aparece en $y_h$ (con $C_1$): hay resonancia. Se aplica la regla de modificación: se propone $y_p=Axe^{2x}$.</p>
        <p>Derivando: $y_p'=Ae^{2x}+2Axe^{2x}=Ae^{2x}(1+2x)$. $y_p''=2Ae^{2x}(1+2x)+2Ae^{2x}=Ae^{2x}(4+4x)$.</p>
        <p>Sustituyendo en $y''-4y=e^{2x}$: $Ae^{2x}(4+4x)-4Axe^{2x}=e^{2x} \Rightarrow Ae^{2x}\left[(4+4x)-4x\right]=e^{2x} \Rightarrow 4Ae^{2x}=e^{2x} \Rightarrow A=\dfrac14$.</p>
        <p>Así $y_p=\dfrac{x}{4}e^{2x}$, y la solución general es $y=C_1e^{2x}+C_2e^{-2x}+\dfrac{x}{4}e^{2x}$.</p>
        <div class="warn">Error común: proponer $y_p=Ae^{2x}$ sin comparar antes con $y_h$, y llegar a una contradicción del tipo "$0=e^{2x}$". Siempre halla primero $y_h$ y compara cada término propuesto con ella antes de sustituir en la ecuación completa.</div>`
      }
    ],
    examples: [
      {
        title: 'Homogénea con raíces reales distintas',
        statement: H`Halle la solución general de $y''-y'-6y=0$.`,
        steps: [
          H`<strong>Paso 1. Plantear la ecuación característica.</strong> Sustituyendo $y=e^{rx}$: $r^2-r-6=0$.`,
          H`<strong>Paso 2. Resolver la cuadrática.</strong> Factorizando: $(r-3)(r+2)=0 \Rightarrow r_1=3$, $r_2=-2$ (reales y distintas: Caso 1).`,
          H`<strong>Paso 3. Escribir la solución general.</strong> $$y=C_1e^{3x}+C_2e^{-2x}$$`
        ],
        answer: H`$y=C_1e^{3x}+C_2e^{-2x}$`
      },
      {
        title: 'Homogénea con raíz doble',
        statement: H`Halle la solución general de $y''-6y'+9y=0$.`,
        steps: [
          H`<strong>Paso 1. Ecuación característica.</strong> $r^2-6r+9=0$.`,
          H`<strong>Paso 2. Resolver.</strong> $(r-3)^2=0 \Rightarrow r=3$ (raíz doble: Caso 2).`,
          H`<strong>Paso 3. Escribir la solución general.</strong> Como la raíz se repite, la segunda solución independiente es $xe^{3x}$: $$y=(C_1+C_2x)e^{3x}$$`
        ],
        answer: H`$y=(C_1+C_2x)e^{3x}$`
      },
      {
        title: 'Homogénea con raíces complejas conjugadas',
        statement: H`Halle la solución general de $y''+4y'+13y=0$.`,
        steps: [
          H`<strong>Paso 1. Ecuación característica.</strong> $r^2+4r+13=0$.`,
          H`<strong>Paso 2. Resolver con la fórmula cuadrática.</strong> $$r=\frac{-4\pm\sqrt{16-52}}{2}=\frac{-4\pm\sqrt{-36}}{2}=\frac{-4\pm 6i}{2}=-2\pm 3i$$ (Caso 3: $\alpha=-2$, $\beta=3$).`,
          H`<strong>Paso 3. Escribir la solución general.</strong> $$y=e^{-2x}\left(C_1\cos 3x+C_2\sin 3x\right)$$`
        ],
        answer: H`$y=e^{-2x}(C_1\cos 3x+C_2\sin 3x)$`
      },
      {
        title: 'Problema de valor inicial de segundo orden',
        statement: H`Resuelva el PVI $y''-y=0$, $y(0)=2$, $y'(0)=-1$.`,
        steps: [
          H`<strong>Paso 1. Ecuación característica y solución general.</strong> $r^2-1=0 \Rightarrow r=\pm 1$. $y=C_1e^{x}+C_2e^{-x}$.`,
          H`<strong>Paso 2. Derivar.</strong> $y'=C_1e^{x}-C_2e^{-x}$.`,
          H`<strong>Paso 3. Sustituir $x=0$ en $y$ e igualar a $y(0)=2$.</strong> $C_1+C_2=2$.`,
          H`<strong>Paso 4. Sustituir $x=0$ en $y'$ e igualar a $y'(0)=-1$.</strong> $C_1-C_2=-1$.`,
          H`<strong>Paso 5. Resolver el sistema.</strong> Sumando ambas ecuaciones: $2C_1=1 \Rightarrow C_1=\dfrac12$. Sustituyendo: $C_2=2-\dfrac12=\dfrac32$.`
        ],
        answer: H`$y=\dfrac12 e^{x}+\dfrac32 e^{-x}$`
      },
      {
        title: 'Movimiento armónico simple de un resorte',
        statement: H`Un cuerpo de masa $m=1$ está sujeto a un resorte de constante $k=4$ (sin fricción). Se separa $1$ unidad de la posición de equilibrio y se suelta sin velocidad inicial. Halle $x(t)$.`,
        steps: [
          H`<strong>Paso 1. Plantear la ecuación y la frecuencia angular.</strong> $x''+4x=0$ (dividiendo $mx''+kx=0$ entre $m=1$), es decir $\omega^2=4 \Rightarrow \omega=2$.`,
          H`<strong>Paso 2. Ecuación característica y solución general.</strong> $r^2+4=0 \Rightarrow r=\pm 2i$ (Caso 3, $\alpha=0,\beta=2$). $x(t)=C_1\cos 2t+C_2\sin 2t$.`,
          H`<strong>Paso 3. Derivar.</strong> $x'(t)=-2C_1\sin 2t+2C_2\cos 2t$.`,
          H`<strong>Paso 4. Aplicar $x(0)=1$.</strong> $x(0)=C_1=1$.`,
          H`<strong>Paso 5. Aplicar $x'(0)=0$.</strong> $x'(0)=2C_2=0 \Rightarrow C_2=0$.`,
          H`<strong>Paso 6. Concluir.</strong> $x(t)=\cos 2t$: oscilación de amplitud $1$ y periodo $T=2\pi/2=\pi$.`
        ],
        answer: H`$x(t)=\cos 2t$`
      },
      {
        title: 'No homogénea por coeficientes indeterminados (sin resonancia)',
        statement: H`Resuelva $y''-3y'+2y=4x$.`,
        steps: [
          H`<strong>Paso 1. Resolver la homogénea asociada.</strong> $r^2-3r+2=0 \Rightarrow (r-1)(r-2)=0 \Rightarrow r=1,2$. $y_h=C_1e^{x}+C_2e^{2x}$.`,
          H`<strong>Paso 2. Proponer $y_p$ según la tabla.</strong> Como $g(x)=4x$ es polinomio de grado 1 (y ningún término polinómico aparece en $y_h$, no hay resonancia): $y_p=Ax+B$.`,
          H`<strong>Paso 3. Calcular derivadas y sustituir.</strong> $y_p'=A$, $y_p''=0$. $$0-3A+2(Ax+B)=4x \Rightarrow 2Ax+(2B-3A)=4x+0$$`,
          H`<strong>Paso 4. Igualar coeficientes.</strong> De $x$: $2A=4 \Rightarrow A=2$. Del término constante: $2B-3A=0 \Rightarrow B=\dfrac{3A}{2}=3$.`,
          H`<strong>Paso 5. Escribir la solución general.</strong> $y_p=2x+3$, así $$y=C_1e^{x}+C_2e^{2x}+2x+3$$`
        ],
        answer: H`$y=C_1e^{x}+C_2e^{2x}+2x+3$`
      },
      {
        title: 'No homogénea con resonancia (regla de modificación)',
        statement: H`Resuelva $y''-4y=e^{2x}$.`,
        steps: [
          H`<strong>Paso 1. Resolver la homogénea asociada.</strong> $r^2-4=0 \Rightarrow r=\pm 2$. $y_h=C_1e^{2x}+C_2e^{-2x}$.`,
          H`<strong>Paso 2. Comparar $g(x)=e^{2x}$ con $y_h$.</strong> La forma "natural" $y_p=Ae^{2x}$ ya está en $y_h$ (coincide con el término $C_1e^{2x}$): hay resonancia. Se aplica la regla de modificación: $y_p=Axe^{2x}$.`,
          H`<strong>Paso 3. Derivar.</strong> $y_p'=Ae^{2x}(1+2x)$. $y_p''=Ae^{2x}(4+4x)$ (derivando de nuevo con la regla del producto).`,
          H`<strong>Paso 4. Sustituir en la ecuación completa.</strong> $$Ae^{2x}(4+4x)-4Axe^{2x}=e^{2x} \Rightarrow Ae^{2x}\big[(4+4x)-4x\big]=e^{2x} \Rightarrow 4Ae^{2x}=e^{2x}$$`,
          H`<strong>Paso 5. Despejar $A$ y escribir la solución general.</strong> $A=\dfrac14$, así $y_p=\dfrac{x}{4}e^{2x}$ y $$y=C_1e^{2x}+C_2e^{-2x}+\frac{x}{4}e^{2x}$$`
        ],
        answer: H`$y=C_1e^{2x}+C_2e^{-2x}+\dfrac{x}{4}e^{2x}$`
      }
    ],
    exercises: [
      {
        id: 's9e01', level: 1, type: 'set',
        q: H`Determine las raíces de la ecuación característica de $y''-y'-2y=0$. Escríbalas separadas por comas.`,
        answer: ['2', '-1'],
        hint: H`Sustituye $y=e^{rx}$ y resuelve la ecuación cuadrática $r^2-r-2=0$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear la ecuación característica.</strong> Sustituyendo $y=e^{rx}$ en $y''-y'-2y=0$ y factorizando $e^{rx}$ (que nunca se anula) se obtiene: $$r^2-r-2=0$$</p></div>
        <div class="step"><p><strong>Resolver la cuadrática factorizando.</strong> $$(r-2)(r+1)=0$$</p></div>
        <div class="step"><p><strong>Concluir.</strong> $r=2$ o $r=-1$: son las dos raíces reales y distintas.</p></div>
        </div>
        <div class="final">$r=2$ o $r=-1$</div>`
      },
      {
        id: 's9e02', level: 1, type: 'ode', order: 2, v: 'x',
        q: H`Escriba la solución general de $y''-y'-2y=0$ (raíces $r=2,-1$, del ejercicio anterior). Use las constantes $C_1$, $C_2$.`,
        res: 'ypp-yp-2*y', ref: 'C1*exp(2*x)+C2*exp(-x)', consts: ['C1', 'C2'],
        hint: H`Raíces reales distintas: la solución general es $C_1e^{r_1x}+C_2e^{r_2x}$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer el caso.</strong> Las raíces $r_1=2$, $r_2=-1$ son reales y distintas: Caso 1.</p></div>
        <div class="step"><p><strong>Aplicar la forma correspondiente.</strong> Para raíces reales distintas, la solución general es $y=C_1e^{r_1x}+C_2e^{r_2x}$.</p></div>
        <div class="step"><p><strong>Sustituir las raíces.</strong> $$y=C_1e^{2x}+C_2e^{-x}$$</p></div>
        </div>
        <div class="final">$y=C_1e^{2x}+C_2e^{-x}$</div>`
      },
      {
        id: 's9e03', level: 1, type: 'set',
        q: H`Determine la(s) raíz(ces) de la ecuación característica de $y''+6y'+9y=0$. Si la raíz es doble, escríbala dos veces separada por coma.`,
        answer: ['-3', '-3'],
        hint: H`$r^2+6r+9$ es un trinomio cuadrado perfecto.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear la ecuación característica.</strong> Sustituyendo $y=e^{rx}$ en $y''+6y'+9y=0$: $$r^2+6r+9=0$$</p></div>
        <div class="step"><p><strong>Reconocer el trinomio cuadrado perfecto.</strong> $$r^2+6r+9=(r+3)^2=0$$</p></div>
        <div class="step"><p><strong>Concluir.</strong> $r=-3$ es la única raíz, con multiplicidad $2$ (raíz doble).</p></div>
        </div>
        <div class="final">$r=-3$ (doble)</div>`
      },
      {
        id: 's9e04', level: 1, type: 'ode', order: 2, v: 'x',
        q: H`Escriba la solución general de $y''+6y'+9y=0$ (raíz doble $r=-3$). Use las constantes $C_1$, $C_2$.`,
        res: 'ypp+6*yp+9*y', ref: '(C1+C2*x)*exp(-3*x)', consts: ['C1', 'C2'],
        hint: H`Con raíz doble $r$, la solución general es $(C_1+C_2x)e^{rx}$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer el caso.</strong> La raíz $r=-3$ es doble: Caso 2.</p></div>
        <div class="step"><p><strong>Aplicar la forma correspondiente.</strong> Con raíz doble, la ecuación característica solo aporta $y_1=e^{rx}$; la segunda solución independiente es $y_2=xe^{rx}$, así que la solución general es $y=(C_1+C_2x)e^{rx}$.</p></div>
        <div class="step"><p><strong>Sustituir la raíz.</strong> $$y=(C_1+C_2x)e^{-3x}$$</p></div>
        </div>
        <div class="final">$y=(C_1+C_2x)e^{-3x}$</div>`
      },
      {
        id: 's9e05', level: 2, type: 'set',
        q: H`Las raíces de la ecuación característica de $y''+2y'+5y=0$ son complejas conjugadas, $r=\alpha\pm\beta i$. Determine $\alpha$ y $\beta$, separados por comas.`,
        answer: ['-1', '2'],
        hint: H`Usa la fórmula cuadrática en $r^2+2r+5=0$; el discriminante es negativo.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear la ecuación característica.</strong> $r^2+2r+5=0$.</p></div>
        <div class="step"><p><strong>Aplicar la fórmula cuadrática.</strong> $$r=\frac{-2\pm\sqrt{2^2-4(1)(5)}}{2(1)}=\frac{-2\pm\sqrt{4-20}}{2}=\frac{-2\pm\sqrt{-16}}{2}$$</p></div>
        <div class="step"><p><strong>Simplificar la raíz negativa.</strong> $\sqrt{-16}=4i$, así que $$r=\frac{-2\pm 4i}{2}=-1\pm 2i$$</p></div>
        <div class="step"><p><strong>Identificar $\alpha$ y $\beta$.</strong> Comparando con $r=\alpha\pm\beta i$: $\alpha=-1$, $\beta=2$.</p></div>
        </div>
        <div class="final">$\alpha=-1$, $\beta=2$</div>`
      },
      {
        id: 's9e06', level: 2, type: 'ode', order: 2, v: 'x',
        q: H`Escriba la solución general de $y''+2y'+5y=0$ (raíces $\alpha\pm\beta i=-1\pm 2i$, del ejercicio anterior). Use las constantes $C_1$, $C_2$.`,
        res: 'ypp+2*yp+5*y', ref: 'exp(-x)*(C1*cos(2*x)+C2*sin(2*x))', consts: ['C1', 'C2'],
        hint: H`Raíces complejas $\alpha\pm\beta i$: la solución general es $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer el caso.</strong> Las raíces $\alpha\pm\beta i=-1\pm 2i$ son complejas conjugadas: Caso 3.</p></div>
        <div class="step"><p><strong>Aplicar la forma correspondiente.</strong> Para raíces complejas $\alpha\pm\beta i$, la solución general es $y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$.</p></div>
        <div class="step"><p><strong>Sustituir $\alpha=-1$, $\beta=2$.</strong> $$y=e^{-x}\left(C_1\cos 2x+C_2\sin 2x\right)$$</p></div>
        </div>
        <div class="final">$y=e^{-x}(C_1\cos 2x+C_2\sin 2x)$</div>`
      },
      {
        id: 's9e07', level: 2, type: 'choice',
        q: H`La ecuación $y''+xy'-y=x^2$ es:`,
        options: [
          H`Homogénea y lineal`,
          H`No homogénea y lineal`,
          H`No homogénea y no lineal`,
          H`Homogénea y no lineal`
        ],
        correct: 1,
        hint: H`Fíjate en si el lado derecho es cero, y si $y$ y sus derivadas aparecen solo a la primera potencia, sin productos entre ellas.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Comprobar si es homogénea.</strong> El lado derecho es $g(x)=x^2$, que no es idénticamente cero: la ecuación es <strong>no homogénea</strong>.</p></div>
        <div class="step"><p><strong>Comprobar la linealidad.</strong> $y$, $y'$ e $y''$ aparecen elevadas a la primera potencia, sin productos entre ellas y sin estar dentro de otra función; los coeficientes ($1$, $x$, $-1$) dependen solo de $x$, no de $y$. Por lo tanto es <strong>lineal</strong>.</p></div>
        <div class="step"><p><strong>Descartar las opciones incorrectas.</strong> No es homogénea (el lado derecho no es cero), y sí es lineal (no hay productos como $y\cdot y'$ ni funciones no lineales de $y$).</p></div>
        </div>
        <div class="final">Es no homogénea y lineal</div>`
      },
      {
        id: 's9e08', level: 1, type: 'choice',
        q: H`Si la ecuación característica $ar^2+br+c=0$ tiene raíces reales distintas $r_1\neq r_2$, ¿cuál es la forma correcta de la solución general de $ay''+by'+cy=0$?`,
        options: [
          H`$y=C_1e^{r_1x}\cdot C_2e^{r_2x}$`,
          H`$y=C_1e^{r_1x}+C_2e^{r_2x}$`,
          H`$y=(C_1+C_2x)e^{r_1x}$`,
          H`$y=C_1e^{r_1x}$ únicamente`
        ],
        correct: 1,
        hint: H`Con raíces distintas, ambas soluciones exponenciales se combinan por el principio de superposición, con dos constantes independientes.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Recordar el principio de superposición.</strong> Si $y_1$ y $y_2$ son soluciones de una ecuación lineal homogénea, cualquier combinación lineal $y=C_1y_1+C_2y_2$ también es solución.</p></div>
        <div class="step"><p><strong>Identificar las dos soluciones.</strong> Con raíces reales distintas $r_1\neq r_2$, se obtienen $y_1=e^{r_1x}$ y $y_2=e^{r_2x}$, que son linealmente independientes (ninguna es múltiplo constante de la otra).</p></div>
        <div class="step"><p><strong>Escribir la solución general.</strong> $$y=C_1e^{r_1x}+C_2e^{r_2x}$$</p></div>
        <div class="step"><p><strong>Descartar las opciones incorrectas.</strong> No es un producto $C_1e^{r_1x}\cdot C_2e^{r_2x}$ (esa expresión ni siquiera resuelve la ecuación en general); la forma $(C_1+C_2x)e^{r_1x}$ corresponde al caso de raíz doble, no a raíces distintas; usar solo $C_1e^{r_1x}$ deja fuera la mitad de las soluciones (falta la segunda constante).</p></div>
        </div>
        <div class="final">$y=C_1e^{r_1x}+C_2e^{r_2x}$</div>`
      },
      {
        id: 's9e09', level: 2, type: 'func', v: 'x', ref: '2*exp(x)+exp(-x)',
        q: H`Resuelva el PVI $y''-y=0$, $y(0)=3$, $y'(0)=1$.`,
        hint: H`Solución general $y=C_1e^{x}+C_2e^{-x}$; deriva y plantea el sistema con las dos condiciones.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Resolver la ecuación característica.</strong> $r^2-1=0 \Rightarrow r=\pm 1$ (Caso 1). Solución general: $y=C_1e^{x}+C_2e^{-x}$.</p></div>
        <div class="step"><p><strong>Derivar.</strong> $y'=C_1e^{x}-C_2e^{-x}$.</p></div>
        <div class="step"><p><strong>Aplicar $y(0)=3$.</strong> $$C_1+C_2=3$$</p></div>
        <div class="step"><p><strong>Aplicar $y'(0)=1$.</strong> $$C_1-C_2=1$$</p></div>
        <div class="step"><p><strong>Resolver el sistema.</strong> Sumando ambas ecuaciones: $2C_1=4 \Rightarrow C_1=2$; sustituyendo, $C_2=3-2=1$.</p></div>
        </div>
        <div class="final">$y=2e^{x}+e^{-x}$</div>`
      },
      {
        id: 's9e10', level: 2, type: 'func', v: 'x', ref: '3*sin(2*x)',
        q: H`Resuelva el PVI $y''+4y=0$, $y(0)=0$, $y'(0)=6$.`,
        hint: H`Raíces $r=\pm 2i$; solución general $y=C_1\cos 2x+C_2\sin 2x$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Resolver la ecuación característica.</strong> $r^2+4=0 \Rightarrow r=\pm 2i$ (Caso 3, $\alpha=0$, $\beta=2$). Solución general: $y=C_1\cos 2x+C_2\sin 2x$.</p></div>
        <div class="step"><p><strong>Derivar.</strong> $y'=-2C_1\sin 2x+2C_2\cos 2x$.</p></div>
        <div class="step"><p><strong>Aplicar $y(0)=0$.</strong> $y(0)=C_1\cos 0+C_2\sin 0=C_1$, así que $C_1=0$.</p></div>
        <div class="step"><p><strong>Aplicar $y'(0)=6$.</strong> $y'(0)=-2C_1\sin 0+2C_2\cos 0=2C_2$, así que $2C_2=6 \Rightarrow C_2=3$.</p></div>
        <div class="step"><p><strong>Escribir la solución.</strong> $y=0\cdot\cos 2x+3\sin 2x=3\sin 2x$.</p></div>
        </div>
        <div class="final">$y=3\sin 2x$</div>`
      },
      {
        id: 's9e11', level: 2, type: 'func', v: 'x', ref: '2*cos(2*x)',
        q: H`Un cuerpo de masa $m=4$ está sujeto a un resorte de constante $k=16$ (sin fricción). Si se separa $2$ unidades de la posición de equilibrio y se suelta sin velocidad inicial, halle $x(t)$ (aquí $x$ representa el tiempo $t$).`,
        hint: H`Divide entre $m$ para obtener $x''+\omega^2x=0$ con $\omega=\sqrt{k/m}$; luego aplica $x(0)=2$, $x'(0)=0$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear la ecuación y la frecuencia angular.</strong> $mx''+kx=0$ con $m=4$, $k=16$: $4x''+16x=0$. Dividiendo entre $m=4$: $x''+4x=0$, es decir $\omega^2=4 \Rightarrow \omega=2$.</p></div>
        <div class="step"><p><strong>Ecuación característica y solución general.</strong> $r^2+4=0 \Rightarrow r=\pm 2i$ (Caso 3). $x(t)=C_1\cos 2t+C_2\sin 2t$.</p></div>
        <div class="step"><p><strong>Derivar.</strong> $x'(t)=-2C_1\sin 2t+2C_2\cos 2t$.</p></div>
        <div class="step"><p><strong>Aplicar $x(0)=2$.</strong> $x(0)=C_1=2$.</p></div>
        <div class="step"><p><strong>Aplicar $x'(0)=0$.</strong> $x'(0)=2C_2=0 \Rightarrow C_2=0$.</p></div>
        <div class="step"><p><strong>Concluir.</strong> $x(t)=2\cos 2t$.</p></div>
        </div>
        <div class="final">$x(t)=2\cos 2t$</div>`
      },
      {
        id: 's9e12', level: 1, type: 'num',
        q: H`Para el resorte del ejercicio anterior ($\omega=2$), determine el periodo $T$ de la oscilación.`,
        answer: 'pi',
        hint: H`$T=\dfrac{2\pi}{\omega}$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Recordar la fórmula del periodo.</strong> Para $x(t)=C_1\cos\omega t+C_2\sin\omega t$, el periodo de la oscilación es $T=\dfrac{2\pi}{\omega}$.</p></div>
        <div class="step"><p><strong>Sustituir $\omega=2$.</strong> $$T=\frac{2\pi}{2}=\pi$$</p></div>
        </div>
        <div class="final">$T=\pi$</div>`
      },
      {
        id: 's9e13', level: 2, type: 'ode', order: 2, v: 'x',
        q: H`Escriba la solución general de $y''-3y'+2y=4x$ (del ejemplo resuelto en la teoría). Use las constantes $C_1$, $C_2$.`,
        res: 'ypp-3*yp+2*y-4*x', ref: 'C1*exp(x)+C2*exp(2*x)+2*x+3', consts: ['C1', 'C2'],
        hint: H`$y_h=C_1e^{x}+C_2e^{2x}$ (raíces $1,2$) y $y_p=2x+3$ (calculado en la teoría).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Resolver la homogénea asociada.</strong> $r^2-3r+2=0 \Rightarrow (r-1)(r-2)=0 \Rightarrow r=1,2$. $y_h=C_1e^{x}+C_2e^{2x}$.</p></div>
        <div class="step"><p><strong>Proponer $y_p$ según la tabla.</strong> Como $g(x)=4x$ es un polinomio de grado $1$, y ningún término polinómico aparece en $y_h$ (no hay resonancia), se propone $y_p=Ax+B$.</p></div>
        <div class="step"><p><strong>Sustituir y agrupar.</strong> Con $y_p'=A$, $y_p''=0$: $$0-3A+2(Ax+B)=4x \Rightarrow 2Ax+(2B-3A)=4x+0$$</p></div>
        <div class="step"><p><strong>Igualar coeficientes.</strong> De $x$: $2A=4 \Rightarrow A=2$. Del término constante: $2B-3A=0 \Rightarrow 2B=6 \Rightarrow B=3$. Así $y_p=2x+3$.</p></div>
        <div class="step"><p><strong>Escribir la solución general.</strong> $$y=y_h+y_p=C_1e^{x}+C_2e^{2x}+2x+3$$</p></div>
        </div>
        <div class="final">$y=C_1e^{x}+C_2e^{2x}+2x+3$</div>`
      },
      {
        id: 's9e14', level: 3, type: 'num',
        q: H`Al resolver $y''-y=6x^2$ por coeficientes indeterminados con $y_p=Ax^2+Bx+C_0$, determine el coeficiente $A$.`,
        answer: '-6',
        hint: H`Calcula $y_p''=2A$ y sustituye en $y_p''-y_p=6x^2$; iguala el coeficiente de $x^2$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Calcular las derivadas de $y_p$.</strong> Con $y_p=Ax^2+Bx+C_0$: $y_p'=2Ax+B$, $y_p''=2A$.</p></div>
        <div class="step"><p><strong>Sustituir en $y_p''-y_p=6x^2$.</strong> $$2A-(Ax^2+Bx+C_0)=6x^2+0x+0$$ Reordenando: $$-Ax^2-Bx+(2A-C_0)=6x^2+0x+0$$</p></div>
        <div class="step"><p><strong>Igualar el coeficiente de $x^2$.</strong> $$-A=6 \Rightarrow A=-6$$</p></div>
        <div class="step"><p><strong>Verificar los demás coeficientes (no pedidos, pero completan el cuadro).</strong> Igualando el coeficiente de $x$: $-B=0 \Rightarrow B=0$. Igualando el término constante: $2A-C_0=0 \Rightarrow C_0=2(-6)=-12$.</p></div>
        </div>
        <div class="final">$A=-6$</div>`
      },
      {
        id: 's9e15', level: 2, type: 'choice',
        q: H`Al resolver $y''-4y=e^{2x}$ por coeficientes indeterminados, ¿por qué no puede usarse la propuesta $y_p=Ae^{2x}$?`,
        options: [
          H`Porque $e^{2x}$ no es una función derivable`,
          H`Porque $e^{2x}$ ya es solución de la ecuación homogénea asociada (hay resonancia)`,
          H`Porque el coeficiente $A$ siempre debe ser negativo`,
          H`Porque la ecuación no tiene solución particular`
        ],
        correct: 1,
        hint: H`Compara la raíz $r=2$ de la ecuación característica con el exponente de $e^{2x}$ en el lado derecho.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Resolver la homogénea asociada.</strong> $r^2-4=0 \Rightarrow r=\pm 2$. $y_h=C_1e^{2x}+C_2e^{-2x}$.</p></div>
        <div class="step"><p><strong>Comparar la propuesta con $y_h$.</strong> $e^{2x}$ ya aparece en $y_h$ (con coeficiente $C_1$), así que $y_p=Ae^{2x}$ satisface la ecuación homogénea y, al sustituirla en la completa, daría $0=e^{2x}$: una contradicción.</p></div>
        <div class="step"><p><strong>Reconocer la resonancia y descartar las opciones incorrectas.</strong> $e^{2x}$ sí es derivable (se descarta esa opción); el problema no es el signo de $A$ ni la inexistencia de solución particular, sino precisamente que $e^{2x}$ ya resuelve la homogénea (resonancia).</p></div>
        <div class="step"><p><strong>Concluir la forma correcta.</strong> Por la regla de modificación, se debe multiplicar por $x$: $y_p=Axe^{2x}$.</p></div>
        </div>
        <div class="final">No puede usarse porque $e^{2x}$ ya es solución de la homogénea asociada (hay resonancia)</div>`
      },
      {
        id: 's9e16', level: 3, type: 'func', v: 'x', ref: '(-1/16)*exp(2*x)+(1/16)*exp(-2*x)+(x/4)*exp(2*x)',
        q: H`Para la ecuación $y''-4y=e^{2x}$ (con $y_p=\dfrac{x}{4}e^{2x}$, calculado en la teoría), resuelva el PVI con $y(0)=0$, $y'(0)=0$.`,
        hint: H`Usa $y=C_1e^{2x}+C_2e^{-2x}+\frac{x}{4}e^{2x}$, deriva con cuidado el último término (regla del producto) y aplica las condiciones iniciales.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Escribir la solución general.</strong> Combinando $y_h$ y $y_p$ (obtenidos en la teoría): $$y=C_1e^{2x}+C_2e^{-2x}+\frac{x}{4}e^{2x}$$</p></div>
        <div class="step"><p><strong>Derivar (regla del producto en el último término).</strong> $$y'=2C_1e^{2x}-2C_2e^{-2x}+\frac14e^{2x}+\frac{x}{2}e^{2x}$$</p></div>
        <div class="step"><p><strong>Aplicar $y(0)=0$.</strong> $$C_1+C_2=0$$</p></div>
        <div class="step"><p><strong>Aplicar $y'(0)=0$.</strong> $$2C_1-2C_2+\frac14=0 \Rightarrow C_1-C_2=-\frac18$$</p></div>
        <div class="step"><p><strong>Resolver el sistema.</strong> Sumando $C_1+C_2=0$ y $C_1-C_2=-1/8$: $2C_1=-\dfrac18 \Rightarrow C_1=-\dfrac{1}{16}$; entonces $C_2=-C_1=\dfrac{1}{16}$.</p></div>
        <div class="step"><p><strong>Escribir la solución particular.</strong> $$y=-\frac{1}{16}e^{2x}+\frac{1}{16}e^{-2x}+\frac{x}{4}e^{2x}$$</p></div>
        </div>
        <div class="final">$y=-\dfrac{1}{16}e^{2x}+\dfrac{1}{16}e^{-2x}+\dfrac{x}{4}e^{2x}$</div>`
      },
      {
        id: 's9e17', level: 2, type: 'ode', order: 2, v: 'x',
        q: H`Escriba la solución general de $y''+y=0$. Use las constantes $C_1$, $C_2$.`,
        res: 'ypp+y', ref: 'C1*cos(x)+C2*sin(x)', consts: ['C1', 'C2'],
        hint: H`Raíces $r=\pm i$ ($\alpha=0,\beta=1$).`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear la ecuación característica.</strong> $r^2+1=0$.</p></div>
        <div class="step"><p><strong>Resolver.</strong> $r^2=-1 \Rightarrow r=\pm i$ (raíces complejas puras: Caso 3, con $\alpha=0$, $\beta=1$).</p></div>
        <div class="step"><p><strong>Escribir la solución general.</strong> $$y=e^{0\cdot x}\left(C_1\cos x+C_2\sin x\right)=C_1\cos x+C_2\sin x$$</p></div>
        </div>
        <div class="final">$y=C_1\cos x+C_2\sin x$</div>`
      },
      {
        id: 's9e18', level: 3, type: 'ode', order: 2, v: 'x',
        q: H`Resuelva $y''+y=\sin(2x)$ por coeficientes indeterminados (compruebe primero que no hay resonancia, pues las raíces son $\pm i$ y el lado derecho tiene frecuencia $2\neq 1$). Escriba la solución general con $C_1$, $C_2$.`,
        res: 'ypp+y-sin(2*x)', ref: 'C1*cos(x)+C2*sin(x)-(1/3)*sin(2*x)', consts: ['C1', 'C2'],
        hint: H`Propón $y_p=A\cos 2x+B\sin 2x$, sustituye y despeja $A$, $B$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Resolver la homogénea asociada.</strong> $r^2+1=0 \Rightarrow r=\pm i$. $y_h=C_1\cos x+C_2\sin x$.</p></div>
        <div class="step"><p><strong>Comprobar que no hay resonancia.</strong> El lado derecho $\sin 2x$ tiene frecuencia $2$, mientras que $y_h$ está formada por $\cos x$ y $\sin x$ (frecuencia $1$): no coinciden, así que no hay resonancia.</p></div>
        <div class="step"><p><strong>Proponer $y_p$ y derivar.</strong> $y_p=A\cos 2x+B\sin 2x \Rightarrow y_p''=-4A\cos 2x-4B\sin 2x$.</p></div>
        <div class="step"><p><strong>Sustituir en $y''+y=\sin 2x$.</strong> $$(-4A\cos2x-4B\sin2x)+(A\cos2x+B\sin2x)=\sin2x \Rightarrow -3A\cos2x-3B\sin2x=0\cos2x+1\sin2x$$</p></div>
        <div class="step"><p><strong>Igualar coeficientes.</strong> De $\cos 2x$: $-3A=0 \Rightarrow A=0$. De $\sin 2x$: $-3B=1 \Rightarrow B=-\dfrac13$. Así $y_p=-\dfrac13\sin 2x$.</p></div>
        <div class="step"><p><strong>Escribir la solución general.</strong> $$y=C_1\cos x+C_2\sin x-\frac13\sin 2x$$</p></div>
        </div>
        <div class="final">$y=C_1\cos x+C_2\sin x-\dfrac13\sin 2x$</div>`
      },
      {
        id: 's9e19', level: 3, type: 'choice',
        q: H`Para resolver $y''+4y=\cos(2x)$ (raíces $r=\pm 2i$) por coeficientes indeterminados, ¿cuál es la forma correcta de $y_p$?`,
        options: [
          H`$y_p=A\cos 2x+B\sin 2x$`,
          H`$y_p=x(A\cos 2x+B\sin 2x)$`,
          H`$y_p=Ae^{2x}$`,
          H`$y_p=A\cos 2x$ (sin el término en seno)`
        ],
        correct: 1,
        hint: H`Compara la frecuencia del lado derecho ($\cos 2x$) con las raíces de la ecuación característica ($\pm 2i$): ¿coinciden?`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar $y_h$.</strong> Las raíces $r=\pm 2i$ corresponden a $y_h=C_1\cos 2x+C_2\sin 2x$.</p></div>
        <div class="step"><p><strong>Comparar el lado derecho con $y_h$.</strong> $g(x)=\cos 2x$ ya es (con coeficiente $C_1$) parte de $y_h$: hay resonancia con la propuesta "natural" $y_p=A\cos 2x+B\sin 2x$.</p></div>
        <div class="step"><p><strong>Aplicar la regla de modificación.</strong> Como la forma coincide con un término de $y_h$, se multiplica toda la propuesta por $x$: $y_p=x(A\cos 2x+B\sin 2x)$.</p></div>
        <div class="step"><p><strong>Descartar las opciones incorrectas.</strong> $y_p=A\cos 2x+B\sin 2x$ (sin el factor $x$) coincidiría con $y_h$ y daría una contradicción; $y_p=Ae^{2x}$ no es del tipo correcto para un lado derecho trigonométrico; omitir el término en seno ($A\cos 2x$ solo) no captura toda la forma necesaria, incluso antes de la resonancia.</p></div>
        </div>
        <div class="final">$y_p=x(A\cos 2x+B\sin 2x)$</div>`
      },
      {
        id: 's9e20', level: 2, type: 'set',
        q: H`Determine las raíces de la ecuación característica de $2y''-3y'-2y=0$. Escríbalas separadas por comas.`,
        answer: ['2', '-1/2'],
        hint: H`Usa la fórmula cuadrática en $2r^2-3r-2=0$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear la ecuación característica.</strong> $2r^2-3r-2=0$.</p></div>
        <div class="step"><p><strong>Aplicar la fórmula cuadrática.</strong> Con $a=2$, $b=-3$, $c=-2$: $$r=\frac{-(-3)\pm\sqrt{(-3)^2-4(2)(-2)}}{2(2)}=\frac{3\pm\sqrt{9+16}}{4}=\frac{3\pm 5}{4}$$</p></div>
        <div class="step"><p><strong>Calcular las dos raíces.</strong> $r=\dfrac{3+5}{4}=2$ o $r=\dfrac{3-5}{4}=-\dfrac12$.</p></div>
        </div>
        <div class="final">$r=2$ o $r=-\dfrac12$</div>`
      },
      {
        id: 's9e21', level: 2, type: 'ode', order: 2, v: 'x',
        q: H`Escriba la solución general de $2y''-3y'-2y=0$ (raíces $r=2,-\frac12$, del ejercicio anterior). Use las constantes $C_1$, $C_2$.`,
        res: '2*ypp-3*yp-2*y', ref: 'C1*exp(2*x)+C2*exp(-x/2)', consts: ['C1', 'C2'],
        hint: H`Raíces reales distintas: $y=C_1e^{r_1x}+C_2e^{r_2x}$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Reconocer el caso.</strong> Las raíces $r_1=2$, $r_2=-\dfrac12$ (del ejercicio anterior) son reales y distintas: Caso 1.</p></div>
        <div class="step"><p><strong>Aplicar la forma correspondiente.</strong> $y=C_1e^{r_1x}+C_2e^{r_2x}$.</p></div>
        <div class="step"><p><strong>Sustituir las raíces.</strong> $$y=C_1e^{2x}+C_2e^{-x/2}$$</p></div>
        </div>
        <div class="final">$y=C_1e^{2x}+C_2e^{-x/2}$</div>`
      },
      {
        id: 's9e22', level: 3, type: 'func', v: 'x', ref: '(1+2*x)*exp(x)',
        q: H`Resuelva el PVI $y''-2y'+y=0$, $y(0)=1$, $y'(0)=3$.`,
        hint: H`La ecuación característica tiene raíz doble; solución general $(C_1+C_2x)e^{x}$. Deriva con la regla del producto antes de aplicar las condiciones.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Resolver la ecuación característica.</strong> $r^2-2r+1=0 \Rightarrow (r-1)^2=0 \Rightarrow r=1$ (raíz doble: Caso 2). Solución general: $y=(C_1+C_2x)e^{x}$.</p></div>
        <div class="step"><p><strong>Derivar (regla del producto).</strong> $$y'=C_2e^{x}+(C_1+C_2x)e^{x}=e^{x}\left(C_1+C_2+C_2x\right)$$</p></div>
        <div class="step"><p><strong>Aplicar $y(0)=1$.</strong> $y(0)=C_1=1$.</p></div>
        <div class="step"><p><strong>Aplicar $y'(0)=3$.</strong> $y'(0)=C_1+C_2=3 \Rightarrow C_2=3-1=2$.</p></div>
        <div class="step"><p><strong>Escribir la solución.</strong> $$y=(1+2x)e^{x}$$</p></div>
        </div>
        <div class="final">$y=(1+2x)e^{x}$</div>`
      }
    ]
  });
})();
