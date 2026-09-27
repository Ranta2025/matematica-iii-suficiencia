(function () {
  const H = String.raw; // keeps LaTeX backslashes intact. NEVER write the two chars "$" + "{" together.
  window.SESSIONS = window.SESSIONS || [];
  window.SESSIONS.push({
    id: 's6',
    order: 6,
    code: 'CE6',
    topic: 'Tema I · Cálculo integral',
    title: 'Aplicaciones de la integral doble: áreas y volúmenes',
    short: 'Aplic. integral doble',
    goals: [
      'Modelar y calcular, mediante integrales dobles, el área de regiones planas descritas como tipo I o tipo II, dividiéndolas cuando sea necesario.',
      'Modelar y calcular volúmenes de sólidos limitados por superficies (planos, paraboloides) sobre regiones generales del plano xy.',
      'Interpretar un sólido limitado por un cilindro y planos como un cuerpo cilíndrico proyectado sobre el plano xy, y plantear la integral doble correspondiente.',
      'Relacionar la función área de la sección transversal $A(x)$ (o $A(y)$) de la integral doble con el método de secciones transversales y de discos/arandelas visto en la Conferencia 4.'
    ],
    theory: [
      {
        h: '6.1 Área de una región plana con integrales dobles',
        html: H`<p>Ya vimos que si $f\equiv 1$ sobre $D$, la integral doble reproduce el área de $D$:</p>
<div class="key">$$A_D=\iint_D dA$$</div>
<p>Si $D$ es tipo I, $A_D=\displaystyle\int_a^b\int_{g_1(x)}^{g_2(x)} dy\,dx=\int_a^b\big[g_2(x)-g_1(x)\big]\,dx$: la integral interior colapsa exactamente en la conocida fórmula del área entre dos curvas. Si $D$ es tipo II, análogamente $A_D=\displaystyle\int_c^d\big[h_2(y)-h_1(y)\big]\,dy$. Es decir: <strong>el cálculo de áreas entre curvas de integrales simples es un caso particular de la integral doble</strong>, no un método aparte.</p>
<p>La novedad real aparece cuando una región es tipo I pero <strong>no</strong> es tipo II (o viceversa) sin dividirla. Esto ocurre, por ejemplo, cuando el borde izquierdo o derecho de la región cambia de curva a mitad de camino.</p>
<div class="note">Procedimiento cuando una región no es de un tipo sencillo: 1) grafíquela; 2) intente describirla como tipo I (o tipo II); si una recta de prueba entra/sale siempre por las mismas dos curvas, ya está lista. 3) Si no, ubique el valor donde el borde cambia de curva y divídala en $D_1,D_2,\dots$ tipo II (o tipo I) en ese punto; 4) use la propiedad de aditividad $A_D=A_{D_1}+A_{D_2}+\cdots$.</div>`
      },
      {
        h: '6.2 Ejemplo guía: una región que debe dividirse',
        html: H`<p>Consideremos la región $D$ limitada por la parábola $y=9-x^2$, la recta $y=2x+1$ y el eje $y$ ($x=0$), en el primer cuadrante.</p>
<figure style="margin:1rem 0">
<svg viewBox="0 0 300 220" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="190" x2="280" y2="190" stroke="var(--ink)" stroke-width="1.5"/>
  <line x1="40" y1="10" x2="40" y2="200" stroke="var(--ink)" stroke-width="1.5"/>
  <path d="M 40 190 Q 130 15 220 55" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M 40 170 L 165 55" fill="none" stroke="var(--hl)" stroke-width="2.5"/>
  <path d="M 40 190 Q 130 15 220 55 L 165 55 L 40 170 Z" fill="var(--hl)" opacity="0.3"/>
  <line x1="120" y1="188" x2="120" y2="70" stroke="var(--ink)" stroke-width="1.4" stroke-dasharray="4 3"/>
  <text x="45" y="14" font-size="11" fill="var(--ink)">y=9-x&#178;</text>
  <text x="168" y="52" font-size="11" fill="var(--ink)">y=2x+1</text>
  <text x="122" y="205" font-size="11" fill="var(--muted)">x</text>
  <text x="140" y="120" font-size="13" fill="var(--ink)">D</text>
</svg>
<figcaption style="font-size:.85rem;color:var(--muted)">$D$: entre $y=2x+1$ (abajo) y $y=9-x^2$ (arriba), para $0\le x\le 2$.</figcaption>
</figure>
<p><strong>Como tipo I</strong> es directa: igualando $9-x^2=2x+1$ se obtiene $x^2+2x-8=0\Rightarrow(x+4)(x-2)=0$, y con $x\ge0$ el corte útil es $x=2$ (junto con el borde $x=0$). $$D=\{0\le x\le 2,\ 2x+1\le y\le 9-x^2\}$$</p>
<p><strong>Como tipo II</strong> no es directa: para $y$ entre $1$ y $5$ el borde izquierdo es el eje $x=0$ y el derecho es la recta despejada $x=\tfrac12(y-1)$; pero para $y$ entre $5$ y $9$ el borde derecho pasa a ser la parábola despejada $x=\sqrt{9-y}$. El cambio ocurre en $y=5$ (la altura del vértice compartido, que corresponde a $x=2$). Por eso hay que <strong>dividir</strong> en dos regiones tipo II:</p>
<div class="key">$$D_1=\{1\le y\le 5,\ 0\le x\le \tfrac12(y-1)\} \qquad D_2=\{5\le y\le 9,\ 0\le x\le \sqrt{9-y}\}$$</div>
<p>Ambos caminos (tipo I directo, o tipo II dividido en $D_1\cup D_2$) deben dar el mismo resultado; se desarrollan por completo en el ejemplo 1.</p>`
      },
      {
        h: '6.3 Volumen de sólidos bajo una superficie sobre una región general',
        html: H`<p>El esquema es siempre el mismo que en la conferencia anterior, ahora enfatizando el proceso completo de modelación:</p>
<ol>
<li>Identificar la superficie superior $z=f(x,y)$ (plano, paraboloide, etc.) y comprobar que $f(x,y)\ge 0$ sobre la región de interés (si no, la integral da un volumen "con signo", no el volumen físico).</li>
<li>Identificar (o construir, proyectando) la región $D$ del plano $xy$ que es la base del sólido.</li>
<li>Clasificar $D$ como tipo I o tipo II (dividiendo si es necesario) y escribir las inecuaciones.</li>
<li>Plantear $V=\displaystyle\iint_D f(x,y)\,dA$ como integral iterada y resolverla de adentro hacia afuera.</li>
</ol>
<p>Superficies típicas: planos $z=Ax+By+C$ (el sólido es una "cuña" o prisma inclinado), paraboloides $z=Ax^2+By^2+C$ (el sólido se "curva" hacia arriba o abajo). En ambos casos el procedimiento no cambia; solo la integral interior es más laboriosa con el paraboloide.</p>
<div class="warn"><strong>Error común al integrar un plano $z=Ax+By+C$:</strong> al evaluar $\displaystyle\int (Ax+By+C)\,dy=Axy+\dfrac{By^2}{2}+Cy$ es fácil, al sustituir los límites, "perder" el último término $Cy$ (el que no tiene $y^2$). Revise siempre que la primitiva tenga tantos términos como el integrando.</div>`
      },
      {
        h: '6.4 Sólidos limitados por un cilindro y planos: proyección sobre el plano xy',
        html: H`<p>Un tipo de problema frecuente describe el sólido mediante una superficie <strong>cilíndrica</strong> (por ejemplo $y^2+z^2=r^2$, un cilindro circular con eje paralelo al eje $x$) y varios planos que lo "cortan". Aquí no hay una función $z=f(x,y)$ dada explícitamente: hay que obtenerla despejando de la ecuación del cilindro, y decidir con cuál mitad (signo) se trabaja según el sólido descrito.</p>
<p><strong>Procedimiento:</strong></p>
<ol>
<li>Interprete el sólido a partir de su descripción o gráfico: ¿qué planos lo acotan por los lados, por arriba, por abajo?</li>
<li>Despeje $z$ de la ecuación del cilindro, eligiendo el signo (rama) que corresponde a la parte del sólido en cuestión. Por ejemplo, de $y^2+z^2=r^2$ con $z\ge 0$: $z=\sqrt{r^2-y^2}$.</li>
<li>La región $D$ del plano $xy$ es la <strong>proyección</strong> (o "sombra") del sólido sobre ese plano: queda delimitada por los planos que cortan lateralmente (y por donde el cilindro toca $z=0$, si corresponde).</li>
<li>Plantee $V=\displaystyle\iint_D z(x,y)\,dA$ con la $z$ despejada en el paso 2.</li>
</ol>
<p>El ejemplo 3 desarrolla un caso completo con el cilindro $y^2+z^2=9$.</p>`
      },
      {
        h: '6.5 La función área de la sección transversal A(x) y su relación con la Conferencia 4',
        html: H`<p>Al resolver $V=\displaystyle\iint_D f(x,y)\,dA$ como integral iterada tipo I, la integral <strong>interior</strong> (en $y$) es, para cada $x$ fijo, un número que depende de $x$:</p>
<div class="key">$$A(x)=\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy \qquad\Longrightarrow\qquad V=\int_a^b A(x)\,dx$$</div>
<p>Geométricamente, $A(x_0)$ es el área de la sección que se obtiene al cortar el sólido con el plano vertical $x=x_0$: esa sección es la región plana (en las variables $y,z$) bajo la curva $z=f(x_0,y)$ entre $y=g_1(x_0)$ y $y=g_2(x_0)$. Análogamente, si se integra primero en $x$ (región tipo II), se obtiene $A(y)=\displaystyle\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx$ y $V=\displaystyle\int_c^d A(y)\,dy$.</p>
<p>Esto es <strong>exactamente</strong> el principio de "volumen por secciones transversales conocidas" que se estudió en la Conferencia 4 sobre aplicaciones de la integral definida: $V=\displaystyle\int_a^b A(x)\,dx$, donde $A(x)$ es el área de la sección al cortar el sólido perpendicularmente al eje $x$. La diferencia entre lo visto entonces y lo que hacemos ahora es <strong>cómo se obtiene $A(x)$</strong>:</p>
<ul>
<li>En los <strong>sólidos de revolución</strong> (método de discos/arandelas, Conferencia 4), $A(x)$ se obtenía de una <strong>fórmula geométrica memorizada</strong>: $A(x)=\pi R(x)^2$ (disco) o $A(x)=\pi\big[R(x)^2-r(x)^2\big]$ (arandela), porque la sección transversal es siempre un círculo o una corona circular.</li>
<li>En los <strong>sólidos bajo una superficie $z=f(x,y)$</strong> (integral doble), $A(x)$ se obtiene <strong>calculando una integral</strong>, $A(x)=\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy$, porque la sección puede tener cualquier forma (no necesariamente un círculo).</li>
</ul>
<p>En ambos casos el principio rector es el mismo: <em>el volumen es la integral, a lo largo de un eje, del área de las secciones perpendiculares a ese eje</em>. La integral doble generaliza el método de secciones transversales, dando una manera sistemática (integrar en la otra variable) de obtener $A(x)$ cuando la sección no es una figura geométrica elemental. El ejemplo 6 desarrolla esta comparación con un caso concreto de revolución.</p>`
      },
      {
        h: '6.6 Procedimiento general para resolver un problema de aplicación',
        html: H`<div class="note"><strong>Lista de verificación paso a paso:</strong>
<ol>
<li><strong>Graficar</strong> las curvas o superficies dadas (aunque sea un bosquejo). En volumen, identificar cuál es la superficie "techo" ($z=f(x,y)$) y confirmar que $f\ge0$ en la región de interés.</li>
<li><strong>Hallar las intersecciones</strong> de las curvas/planos que acotan la región, resolviendo el sistema correspondiente. Estos valores son los límites numéricos exteriores.</li>
<li><strong>Decidir el tipo de región</strong> (I o II) con la regla de "la recta que entra y sale"; dividir en subregiones si ningún tipo único describe toda $D$ de una vez.</li>
<li><strong>Plantear los límites</strong> de la integral iterada (interior variable, exterior numérico) para cada subregión.</li>
<li><strong>Integrar la interior</strong> (tratando la otra variable como constante), obteniendo la función área de la sección transversal.</li>
<li><strong>Integrar la exterior</strong> y sumar los resultados de todas las subregiones si hubo que dividir.</li>
</ol>
</div>`
      }
    ],
    examples: [
      {
        title: 'Ejemplo 1: área de una región dividida en dos regiones tipo II',
        statement: H`Sea $D$ la región limitada por $y=9-x^2$, $y=2x+1$ y $x=0$ (primer cuadrante). Hallar el área de $D$ tratándola como tipo I y comprobar dividiéndola en dos regiones tipo II.`,
        steps: [
          H`<strong>Paso 1: intersección y tipo I.</strong> $9-x^2=2x+1\Rightarrow x^2+2x-8=0\Rightarrow(x+4)(x-2)=0$; con $x\ge0$, el corte es $x=2$. $$D=\{0\le x\le 2,\ 2x+1\le y\le 9-x^2\}$$`,
          H`<strong>Paso 2: área como tipo I.</strong> $$A_D=\int_0^2\Big[(9-x^2)-(2x+1)\Big]dx=\int_0^2(8-2x-x^2)\,dx=\left[8x-x^2-\frac{x^3}{3}\right]_0^2=16-4-\frac83=12-\frac83=\frac{28}{3}\approx9.33$$`,
          H`<strong>Paso 3: por qué debe dividirse para tipo II.</strong> El vértice donde la recta y la parábola se cruzan está en $(2,5)$. Para $1\le y\le 5$ el borde izquierdo de $D$ es el eje $x=0$ y el derecho es la recta despejada, $x=\tfrac12(y-1)$ (de $y=2x+1$). Para $5\le y\le 9$ el borde izquierdo sigue siendo $x=0$ pero el derecho pasa a ser la parábola despejada, $x=\sqrt{9-y}$ (de $y=9-x^2$, con $x\ge0$). $$D_1=\{1\le y\le5,\ 0\le x\le\tfrac12(y-1)\}\qquad D_2=\{5\le y\le9,\ 0\le x\le\sqrt{9-y}\}$$`,
          H`<strong>Paso 4: área de $D_1$.</strong> $$A_{D_1}=\int_1^5 \frac{y-1}{2}\,dy=\frac12\left[\frac{y^2}{2}-y\right]_1^5=\frac12\left[\left(\frac{25}{2}-5\right)-\left(\frac12-1\right)\right]=\frac12\left[7.5-(-0.5)\right]=\frac12(8)=4$$`,
          H`<strong>Paso 5: área de $D_2$ y suma final.</strong> $$A_{D_2}=\int_5^9 \sqrt{9-y}\,dy=\left[-\frac23(9-y)^{3/2}\right]_5^9=0-\left(-\frac23\cdot 4^{3/2}\right)=\frac23\cdot8=\frac{16}{3}$$ Entonces $A_D=A_{D_1}+A_{D_2}=4+\dfrac{16}{3}=\dfrac{12}{3}+\dfrac{16}{3}=\dfrac{28}{3}$, exactamente igual al resultado por tipo I.`
        ],
        answer: H`$A_D=\dfrac{28}{3}\approx9.33\ \text{u}^2$. Ambos caminos coinciden, como garantiza la aditividad de la integral doble.`
      },
      {
        title: 'Ejemplo 2: volumen bajo un plano sobre la misma región y función A(x)',
        statement: H`Sobre la misma región $D$ del ejemplo 1, hallar el volumen del sólido $S$ bajo el plano $z=y$ y sobre $D$, y determinar la función área de la sección transversal $A(x)$.`,
        steps: [
          H`<strong>Paso 1: modelo con la región tipo I.</strong> $$V=\iint_D y\,dA=\int_0^2\int_{2x+1}^{9-x^2} y\,dy\,dx$$`,
          H`<strong>Paso 2: integral interior — esta ES la función A(x).</strong> $$A(x)=\int_{2x+1}^{9-x^2} y\,dy=\left[\frac{y^2}{2}\right]_{2x+1}^{9-x^2}=\frac{(9-x^2)^2-(2x+1)^2}{2}$$ Esta $A(x)$ es, literalmente, el área de la sección del sólido $S$ al cortarlo con el plano vertical $x=$ cte: una franja entre $z=0$ y $z=y$ para $y$ entre las dos curvas frontera.`,
          H`<strong>Paso 3: desarrollar A(x).</strong> $(9-x^2)^2=81-18x^2+x^4$ y $(2x+1)^2=4x^2+4x+1$. Restando: $x^4-22x^2-4x+80$. Entonces $A(x)=\dfrac{x^4-22x^2-4x+80}{2}$.`,
          H`<strong>Paso 4: integral exterior.</strong> $$V=\int_0^2 A(x)\,dx=\frac12\int_0^2\left(x^4-22x^2-4x+80\right)dx=\frac12\left[\frac{x^5}{5}-\frac{22x^3}{3}-2x^2+80x\right]_0^2$$`,
          H`<strong>Paso 5: evaluación numérica.</strong> En $x=2$: $\dfrac{32}{5}-\dfrac{176}{3}-8+160=\dfrac{32}{5}-\dfrac{176}{3}+152$. Con denominador común $15$: $\dfrac{96}{15}-\dfrac{880}{15}+\dfrac{2280}{15}=\dfrac{1496}{15}$. Entonces $V=\dfrac12\cdot\dfrac{1496}{15}=\dfrac{748}{15}$.`
        ],
        answer: H`$V=\dfrac{748}{15}\approx49.87\ \text{u}^3$, con $A(x)=\dfrac{(9-x^2)^2-(2x+1)^2}{2}$ la función área de la sección transversal (comparar con la Conferencia 4: aquí $A(x)$ se obtuvo integrando, no de una fórmula geométrica).`
      },
      {
        title: 'Ejemplo 3: sólido limitado por un cilindro y planos, proyectado sobre xy',
        statement: H`Hallar el volumen del sólido limitado por el cilindro $y^2+z^2=9$ (con $z\ge0$) y los planos $x=0$, $x=5$, $z=0$.`,
        steps: [
          H`<strong>Paso 1: interpretar el sólido.</strong> El cilindro $y^2+z^2=9$ tiene eje paralelo al eje $x$ y radio $3$. Tomando la mitad superior ($z\ge 0$) y "cortando" con los planos $x=0$ y $x=5$, se obtiene un medio cilindro de longitud $5$ apoyado sobre el plano $xy$ (con $z=0$ como base).`,
          H`<strong>Paso 2: despejar z.</strong> De $y^2+z^2=9$ con $z\ge0$: $z=\sqrt{9-y^2}$. Esta es la superficie "techo" del sólido.`,
          H`<strong>Paso 3: proyección sobre xy.</strong> El sólido existe para $0\le x\le5$ (los planos laterales) y, para que $z=\sqrt{9-y^2}$ esté definida y el semicírculo se cierre en $z=0$, para $-3\le y\le3$. La proyección es el rectángulo $D=\{0\le x\le5,\ -3\le y\le3\}$.`,
          H`<strong>Paso 4: plantear el volumen.</strong> $$V=\iint_D \sqrt{9-y^2}\,dA=\int_0^5\int_{-3}^{3}\sqrt{9-y^2}\,dy\,dx$$ Como el integrando no depende de $x$, esto es separable: $V=5\displaystyle\int_{-3}^3\sqrt{9-y^2}\,dy$.`,
          H`<strong>Paso 5: resolver la integral en y.</strong> $\displaystyle\int_{-3}^3\sqrt{9-y^2}\,dy$ es el área de un semicírculo de radio $3$ (la mitad superior de $y^2+z^2=9$ vista en el plano $yz$): $\dfrac{\pi(3)^2}{2}=\dfrac{9\pi}{2}$. (Con la fórmula $\int\sqrt{a^2-u^2}\,du=\tfrac{u}{2}\sqrt{a^2-u^2}+\tfrac{a^2}{2}\arcsin\tfrac{u}{a}+C$ se obtiene el mismo resultado.)`,
          H`<strong>Paso 6: volumen final.</strong> $$V=5\cdot\frac{9\pi}{2}=\frac{45\pi}{4}$$`
        ],
        answer: H`$V=\dfrac{45\pi}{4}\approx35.34\ \text{u}^3$.`
      },
      {
        title: 'Ejemplo 4: volumen bajo un plano (cuidado con los tres términos)',
        statement: H`Calcular el volumen del sólido cilíndrico cuya tapa es la parte de la superficie $z=x+2y+1$ que se proyecta sobre la región $B$ limitada por $y=1-x^2$ en el primer cuadrante del plano $xy$.`,
        steps: [
          H`<strong>Paso 1: región.</strong> En el primer cuadrante, $B=\{0\le x\le1,\ 0\le y\le 1-x^2\}$ (tipo I).`,
          H`<strong>Paso 2: modelo.</strong> $$V_B=\iint_B (x+2y+1)\,dA=\int_0^1\int_0^{1-x^2}(x+2y+1)\,dy\,dx$$`,
          H`<strong>Paso 3: integral interior — los TRES términos.</strong> $$\int_0^{1-x^2}(x+2y+1)\,dy=\Big[xy+y^2+y\Big]_0^{1-x^2}=x(1-x^2)+(1-x^2)^2+(1-x^2)$$ <div class="warn">Aquí está el error más frecuente: la primitiva $xy+y^2+y$ tiene <strong>tres</strong> términos porque el integrando tenía tres términos ($x$, $2y$, $1$). Olvidar el último sumando $(1-x^2)$ (proveniente de "$+1$") da un resultado incorrecto.</div>`,
          H`<strong>Paso 4: expandir.</strong> $x(1-x^2)=x-x^3$. $(1-x^2)^2=1-2x^2+x^4$. Sumando los tres términos: $$\big(x-x^3\big)+\big(1-2x^2+x^4\big)+\big(1-x^2\big)=x^4-x^3-3x^2+x+2$$`,
          H`<strong>Paso 5: integral exterior.</strong> $$V_B=\int_0^1\left(x^4-x^3-3x^2+x+2\right)dx=\left[\frac{x^5}{5}-\frac{x^4}{4}-x^3+\frac{x^2}{2}+2x\right]_0^1=\frac15-\frac14-1+\frac12+2$$`,
          H`<strong>Paso 6: aritmética final.</strong> Con denominador común $20$: $\dfrac{4}{20}-\dfrac{5}{20}-\dfrac{20}{20}+\dfrac{10}{20}+\dfrac{40}{20}=\dfrac{29}{20}$.`
        ],
        answer: H`$V_B=\dfrac{29}{20}=1.45\ \text{u}^3$.`
      },
      {
        title: 'Ejemplo 5: volumen bajo un paraboloide sobre un triángulo',
        statement: H`Hallar el volumen del sólido bajo el paraboloide $z=4-x^2-2y^2$ sobre el triángulo $D=\{0\le x\le1,\ 0\le y\le x\}$.`,
        steps: [
          H`<strong>Paso 1: comprobar positividad.</strong> En $D$, $0\le y\le x\le1$, así que $x^2+2y^2\le 1+2=3<4$: $z=4-x^2-2y^2>0$ en toda la región, luego la integral representa un volumen genuino.`,
          H`<strong>Paso 2: integral interior.</strong> $$\int_0^{x}(4-x^2-2y^2)\,dy=\left[4y-x^2y-\frac{2y^3}{3}\right]_0^{x}=4x-x^3-\frac{2x^3}{3}=4x-\frac{5x^3}{3}$$`,
          H`<strong>Paso 3: integral exterior.</strong> $$V=\int_0^1\left(4x-\frac{5x^3}{3}\right)dx=\left[2x^2-\frac{5x^4}{12}\right]_0^1=2-\frac{5}{12}=\frac{24}{12}-\frac{5}{12}=\frac{19}{12}$$`
        ],
        answer: H`$V=\dfrac{19}{12}\approx1.58\ \text{u}^3$.`
      },
      {
        title: 'Ejemplo 6: comparación con el método de discos (Conferencia 4)',
        statement: H`La región bajo $y=\sqrt{x}$, $0\le x\le4$, gira alrededor del eje $x$. Calcular el volumen del sólido de revolución y compararlo, en su estructura, con el cálculo de un volumen mediante integral doble.`,
        steps: [
          H`<strong>Paso 1: método de discos (Conferencia 4).</strong> El radio del disco a la altura $x$ es $R(x)=\sqrt x$, así que el área de la sección circular es $A(x)=\pi R(x)^2=\pi x$. Esta $A(x)$ es una <strong>fórmula geométrica</strong> (área de un círculo), no el resultado de integrar una función de dos variables.`,
          H`<strong>Paso 2: volumen por secciones.</strong> $$V=\int_0^4 A(x)\,dx=\int_0^4 \pi x\,dx=\pi\left[\frac{x^2}{2}\right]_0^4=8\pi$$`,
          H`<strong>Paso 3: contraste con la integral doble.</strong> Si en cambio tuviéramos un sólido bajo una superficie $z=f(x,y)$ sobre una región $D$ tipo I, la función área de la sección sería $A(x)=\displaystyle\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy$ — un cálculo, no una fórmula geométrica fija. Ambos casos comparten la misma fórmula final $V=\displaystyle\int_a^b A(x)\,dx$; lo que cambia es <em>de dónde sale</em> $A(x)$.`
        ],
        answer: H`$V=8\pi\approx25.13\ \text{u}^3$ por el método de discos. La lección conceptual: los discos/arandelas (Conf. 4) y la integral doble (Conf. 5–6) son dos maneras distintas de obtener la misma función $A(x)$ dentro de la fórmula general $V=\int A(x)\,dx$.`
      }
    ],
    exercises: [
      {
        id: 's6e01', level: 1, type: 'num', label: 'Área =',
        q: H`Usar una integral doble para hallar el área del triángulo $D=\{0\le x\le3,\ 0\le y\le x\}$.`,
        hint: H`$A_D=\displaystyle\iint_D dA$; región tipo I con límite superior $y=x$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región y tipo.</strong> $D=\{0\le x\le3,\ 0\le y\le x\}$: la recta vertical entra por $y=0$ y sale por $y=x$; tipo I.</p></div>
<div class="step"><p><strong>Modelo del área e integral interior.</strong> $$A_D=\iint_D dA=\int_0^3\int_0^x dy\,dx=\int_0^3 x\,dx$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^3 x\,dx=\left[\frac{x^2}{2}\right]_0^3=\frac92$$</p></div>
</div>
<div class="final">$A_D=\dfrac92\ \text{u}^2$.</div>`,
        answer: '9/2', verify: { kind: 'int2', f: '1', outer: 'x', a: '0', b: '3', lo: '0', hi: 'x' }
      },
      {
        id: 's6e02', level: 1, type: 'num', label: 'Volumen =',
        q: H`Hallar el volumen bajo el plano horizontal $z=3$ sobre el rectángulo $R=[0,2]\times[0,3]$.`,
        hint: H`Con altura constante, el volumen es altura por área de la base.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región.</strong> $R=[0,2]\times[0,3]$ es un rectángulo de área $A_R=2\times3=6$.</p></div>
<div class="step"><p><strong>Reconocer la altura constante.</strong> Como $z=3$ es constante, el sólido es un prisma recto: $V=\iint_R 3\,dA=3\cdot A_R$, sin necesidad de integrar variable por variable.</p></div>
<div class="step"><p><strong>Cálculo.</strong> $$V=3\cdot6=18$$</p></div>
<div class="step"><p><strong>Verificación por integración directa.</strong> $\displaystyle\int_0^3 3\,dy=9$; luego $\displaystyle\int_0^2 9\,dx=18$, el mismo resultado.</p></div>
</div>
<div class="final">$V=18\ \text{u}^3$.</div>`,
        answer: '18', verify: { kind: 'int2', f: '3', outer: 'x', a: '0', b: '2', lo: '0', hi: '3' }
      },
      {
        id: 's6e03', level: 1, type: 'num', label: 'Volumen =',
        q: H`Hallar el volumen bajo el plano $z=x$ sobre el triángulo $D=\{0\le x\le1,\ 0\le y\le x\}$.`,
        hint: H`Integre primero en $y$: como $z=x$ no depende de $y$, la integral interior es solo $x\cdot(x-0)$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región y tipo.</strong> $D=\{0\le x\le1,\ 0\le y\le x\}$, tipo I.</p></div>
<div class="step"><p><strong>Integral interior.</strong> Como $z=x$ no depende de $y$: $$\int_0^{x} x\,dy=x\cdot x=x^2$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^1 x^2\,dx=\left[\frac{x^3}{3}\right]_0^1=\frac13$$</p></div>
</div>
<div class="final">$V=\dfrac13\ \text{u}^3$.</div>`,
        answer: '1/3', verify: { kind: 'int2', f: 'x', outer: 'x', a: '0', b: '1', lo: '0', hi: 'x' }
      },
      {
        id: 's6e04', level: 1, type: 'num', label: 'Área =',
        q: H`Hallar, con una integral doble, el área de la región bajo $y=\sqrt x$ entre $x=0$ y $x=4$ (y sobre el eje $x$).`,
        hint: H`Región tipo I: $0\le x\le4$, $0\le y\le\sqrt x$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región y tipo.</strong> $D=\{0\le x\le4,\ 0\le y\le\sqrt x\}$, tipo I.</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_0^{\sqrt x} dy=\sqrt x$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^4 \sqrt x\,dx=\left[\frac23 x^{3/2}\right]_0^4=\frac23\cdot8=\frac{16}{3}$$</p></div>
</div>
<div class="final">$A_D=\dfrac{16}{3}\ \text{u}^2$.</div>`,
        answer: '16/3', verify: { kind: 'int2', f: '1', outer: 'x', a: '0', b: '4', lo: '0', hi: 'sqrt(x)' }
      },
      {
        id: 's6e05', level: 1, type: 'num', label: 'Volumen =',
        q: H`Hallar el volumen bajo el plano $z=2y$ sobre la región $D=\{0\le x\le4,\ 0\le y\le\sqrt x\}$.`,
        hint: H`Integre primero en $y$ (de $0$ a $\sqrt x$) y luego en $x$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región y modelo.</strong> $D=\{0\le x\le4,\ 0\le y\le\sqrt x\}$ es tipo I. $$V=\iint_D 2y\,dA=\int_0^4\int_0^{\sqrt x} 2y\,dy\,dx$$</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_0^{\sqrt x} 2y\,dy=\Big[y^2\Big]_0^{\sqrt x}=x$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^4 x\,dx=\left[\frac{x^2}{2}\right]_0^4=8$$</p></div>
</div>
<div class="final">$V=8\ \text{u}^3$.</div>`,
        answer: '8', verify: { kind: 'int2', f: '2*y', outer: 'x', a: '0', b: '4', lo: '0', hi: 'sqrt(x)' }
      },
      {
        id: 's6e06', level: 1, type: 'set', label: 'x = (separados por comas)',
        q: H`Para acotar la región entre $y=x^2$ y $y=x+2$, hallar las abscisas de sus puntos de intersección.`,
        hint: H`Resuelva $x^2=x+2$ factorizando el trinomio.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Plantear la ecuación.</strong> Los puntos comunes cumplen $x^2=x+2$.</p></div>
<div class="step"><p><strong>Factorizar.</strong> $$x^2-x-2=0\ \Rightarrow\ (x-2)(x+1)=0$$</p></div>
<div class="step"><p><strong>Soluciones y verificación.</strong> $x=2$ o $x=-1$. En $x=2$: $x^2=4$ y $x+2=4$ ✓; en $x=-1$: $x^2=1$ y $x+2=1$ ✓.</p></div>
</div>
<div class="final">$x=-1,\ 2$.</div>`,
        answer: ['-1', '2']
      },
      {
        id: 's6e07', level: 1, type: 'choice',
        q: H`La región $D$ está limitada por $y=x^2$ y $y=x+2$. ¿Cuál es el planteamiento correcto como región tipo I?`,
        hint: H`Ya sabe (ejercicio anterior) que las curvas se cortan en $x=-1$ y $x=2$; determine cuál curva queda arriba en ese intervalo (pruebe con $x=0$).`,
        options: [
          H`$\displaystyle\int_{-1}^{2}\int_{x^2}^{x+2} f(x,y)\,dy\,dx$`,
          H`$\displaystyle\int_{-1}^{2}\int_{x+2}^{x^2} f(x,y)\,dy\,dx$`,
          H`$\displaystyle\int_{0}^{2}\int_{x^2}^{x+2} f(x,y)\,dy\,dx$`,
          H`$\displaystyle\int_{-1}^{2}\int_{0}^{x^2} f(x,y)\,dy\,dx$`
        ],
        correct: 0,
        solution: H`<div class="steps">
<div class="step"><p><strong>Retomar los límites exteriores.</strong> Del ejercicio anterior, las curvas $y=x^2$ y $y=x+2$ se cortan en $x=-1$ y $x=2$: esos son los límites de $x$.</p></div>
<div class="step"><p><strong>Determinar cuál curva queda arriba.</strong> En $x=0$: $y=x+2=2$ y $y=x^2=0$, así que $2>0$: la recta queda arriba y la parábola abajo en todo el intervalo.</p></div>
<div class="step"><p><strong>Plantear la región tipo I.</strong> $D=\{-1\le x\le2,\ x^2\le y\le x+2\}$, que corresponde a $$\int_{-1}^{2}\int_{x^2}^{x+2} f(x,y)\,dy\,dx$$</p></div>
<div class="step"><p><strong>Descartar las opciones incorrectas.</strong> La opción 2 invierte los límites de $y$ (pondría la recta abajo y la parábola arriba, al revés de lo comprobado). La opción 3 usa el límite exterior $0\le x\le2$, ignorando la rama $-1\le x\le0$. La opción 4 no usa ninguna de las dos curvas frontera como límite de $y$.</p></div>
</div>
<div class="final">La opción correcta es la 1: $\displaystyle\int_{-1}^{2}\int_{x^2}^{x+2} f(x,y)\,dy\,dx$.</div>`
      },
      {
        id: 's6e08', level: 2, type: 'num', label: 'Área =',
        q: H`Hallar el área de la región limitada por $y=8-x^2$ y $y=x^2$.`,
        hint: H`Halle las intersecciones y determine cuál parábola queda arriba.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Intersecciones.</strong> $8-x^2=x^2\Rightarrow8=2x^2\Rightarrow x^2=4\Rightarrow x=\pm2$.</p></div>
<div class="step"><p><strong>Curva superior.</strong> En $x=0$: $8-x^2=8>x^2=0$, así que $y=8-x^2$ queda arriba. Región tipo I: $D=\{-2\le x\le2,\ x^2\le y\le8-x^2\}$.</p></div>
<div class="step"><p><strong>Modelo e integral interior.</strong> $$A_D=\int_{-2}^2\int_{x^2}^{8-x^2}dy\,dx=\int_{-2}^2\Big[(8-x^2)-x^2\Big]dx=\int_{-2}^2(8-2x^2)\,dx$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_{-2}^2(8-2x^2)\,dx=\left[8x-\frac{2x^3}{3}\right]_{-2}^2=\left(16-\frac{16}{3}\right)-\left(-16+\frac{16}{3}\right)=32-\frac{32}{3}=\frac{64}{3}$$</p></div>
</div>
<div class="final">$A_D=\dfrac{64}{3}\ \text{u}^2$.</div>`,
        answer: '64/3', verify: { kind: 'int2', f: '1', outer: 'x', a: '-2', b: '2', lo: 'x^2', hi: '8-x^2' }
      },
      {
        id: 's6e09', level: 2, type: 'num', label: 'Área =',
        q: H`Hallar el área de la región $D$ del primer cuadrante limitada por $y=6-x^2$, $y=x$ y $x=0$.`,
        hint: H`Como tipo I, $D=\{0\le x\le2,\ x\le y\le 6-x^2\}$: no es necesario dividir para este orden (aunque como tipo II sí habría que hacerlo).`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Intersección relevante.</strong> $6-x^2=x\Rightarrow x^2+x-6=0\Rightarrow(x+3)(x-2)=0$; en el primer cuadrante solo sirve $x=2$ (la raíz $x=-3$ no aplica).</p></div>
<div class="step"><p><strong>Región tipo I (sin dividir).</strong> Para $0\le x\le2$, $y=6-x^2$ queda arriba de $y=x$ (en $x=0$: $6>0$): $D=\{0\le x\le2,\ x\le y\le6-x^2\}$.</p></div>
<div class="step"><p><strong>Modelo e integral interior.</strong> $$A_D=\int_0^2\int_x^{6-x^2}dy\,dx=\int_0^2\Big[(6-x^2)-x\Big]dx=\int_0^2(6-x-x^2)\,dx$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^2(6-x-x^2)\,dx=\left[6x-\frac{x^2}{2}-\frac{x^3}{3}\right]_0^2=12-2-\frac83=10-\frac83=\frac{22}{3}$$</p></div>
<div class="step"><p><strong>Por qué tipo II obligaría a dividir.</strong> Si se integrara primero en $x$, el borde derecho de $D$ cambia de curva exactamente en $y=2$ (donde $x=y$ y $x=\sqrt{6-y}$ coinciden): habría que usar $D_1=\{0\le y\le2,\ 0\le x\le y\}$ y $D_2=\{2\le y\le6,\ 0\le x\le\sqrt{6-y}\}$. El orden tipo I evita esa división.</p></div>
</div>
<div class="final">$A_D=\dfrac{22}{3}\ \text{u}^2$.</div>`,
        answer: '22/3', verify: { kind: 'int2', f: '1', outer: 'x', a: '0', b: '2', lo: 'x', hi: '6-x^2' }
      },
      {
        id: 's6e10', level: 2, type: 'num', label: 'Volumen =',
        q: H`Hallar el volumen bajo el plano $z=x+y$ sobre $D=\{0\le x\le2,\ 0\le y\le x^2\}$.`,
        hint: H`Integre primero en $y$ de $0$ a $x^2$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región y modelo.</strong> $D=\{0\le x\le2,\ 0\le y\le x^2\}$ es tipo I. $$V=\int_0^2\int_0^{x^2}(x+y)\,dy\,dx$$</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_0^{x^2}(x+y)\,dy=\left[xy+\frac{y^2}{2}\right]_0^{x^2}=x^3+\frac{x^4}{2}$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^2\left(x^3+\frac{x^4}{2}\right)dx=\left[\frac{x^4}{4}+\frac{x^5}{10}\right]_0^2=4+3.2$$</p></div>
<div class="step"><p><strong>Aritmética final.</strong> $=7.2=\dfrac{36}{5}$.</p></div>
</div>
<div class="final">$V=\dfrac{36}{5}\ \text{u}^3$.</div>`,
        answer: '36/5', verify: { kind: 'int2', f: 'x+y', outer: 'x', a: '0', b: '2', lo: '0', hi: 'x^2' }
      },
      {
        id: 's6e11', level: 2, type: 'num', label: 'Volumen =', tol: 0.01,
        q: H`Hallar el volumen del sólido limitado por el cilindro $x^2+z^2=4$ (con $z\ge0$) y los planos $y=0$, $y=3$.`,
        hint: H`Despeje $z=\sqrt{4-x^2}$; la proyección sobre $xy$ es $D=\{-2\le x\le2,\ 0\le y\le3\}$. El integrando no depende de $y$: la integral en $y$ es solo multiplicar por $3$, y la integral en $x$ es el área de un semicírculo.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Despejar z e identificar la proyección.</strong> De $x^2+z^2=4$ con $z\ge0$: $z=\sqrt{4-x^2}$, definida para $-2\le x\le2$. Los planos $y=0,\,y=3$ acotan la proyección: $D=\{-2\le x\le2,\ 0\le y\le3\}$.</p></div>
<div class="step"><p><strong>Plantear el volumen.</strong> $$V=\iint_D \sqrt{4-x^2}\,dA=\int_{-2}^{2}\int_0^3 \sqrt{4-x^2}\,dy\,dx$$</p></div>
<div class="step"><p><strong>Separar (el integrando no depende de y).</strong> $$V=3\int_{-2}^2\sqrt{4-x^2}\,dx$$</p></div>
<div class="step"><p><strong>Integral en x como área de un semicírculo.</strong> $\displaystyle\int_{-2}^2\sqrt{4-x^2}\,dx$ es el área del semicírculo de radio $2$: $\dfrac{\pi(2)^2}{2}=2\pi$.</p></div>
<div class="step"><p><strong>Volumen final.</strong> $$V=3\cdot2\pi=6\pi$$</p></div>
</div>
<div class="final">$V=6\pi\approx18.85\ \text{u}^3$.</div>`,
        answer: '6*pi', verify: { kind: 'int2', f: 'sqrt(4-x^2)', outer: 'x', a: '-2', b: '2', lo: '0', hi: '3' }
      },
      {
        id: 's6e12', level: 2, type: 'num', label: 'Volumen =',
        q: H`Hallar el volumen bajo el plano $z=4-x-y$ sobre el triángulo $D=\{0\le x\le2,\ 0\le y\le 2-x\}$.`,
        hint: H`Compruebe primero que $z>0$ en $D$ (pues $x+y\le2<4$). Integre primero en $y$; recuerde los tres términos del integrando.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Comprobar positividad.</strong> En $D=\{0\le x\le2,\ 0\le y\le2-x\}$, $x\le2$ y $y\le2-x$, así que $x+y\le2<4$: $z=4-x-y>0$ en toda la región.</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_0^{2-x}(4-x-y)\,dy=\left[4y-xy-\frac{y^2}{2}\right]_0^{2-x}$$ Sustituyendo $y=2-x$: $4(2-x)-x(2-x)-\dfrac{(2-x)^2}{2}$.</p></div>
<div class="step"><p><strong>Desarrollar.</strong> $4(2-x)=8-4x$; $x(2-x)=2x-x^2$; $(2-x)^2=4-4x+x^2$. Entonces: $$8-4x-(2x-x^2)-\frac{4-4x+x^2}{2}=8-6x+x^2-2+2x-\frac{x^2}{2}=6-4x+\frac{x^2}{2}$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^2\left(6-4x+\frac{x^2}{2}\right)dx=\left[6x-2x^2+\frac{x^3}{6}\right]_0^2=12-8+\frac86$$</p></div>
<div class="step"><p><strong>Aritmética final.</strong> $=4+\dfrac43=\dfrac{16}{3}$.</p></div>
</div>
<div class="final">$V=\dfrac{16}{3}\ \text{u}^3$.</div>`,
        answer: '16/3', verify: { kind: 'int2', f: '4-x-y', outer: 'x', a: '0', b: '2', lo: '0', hi: '2-x' }
      },
      {
        id: 's6e13', level: 2, type: 'choice',
        q: H`Se quiere el volumen bajo el paraboloide $z=x^2+y^2$ sobre el rectángulo $R=[0,1]\times[0,2]$. ¿Cuál integral iterada lo calcula correctamente?`,
        hint: H`El rectángulo tiene límites constantes en ambas variables; no hace falta despejar ninguna curva.`,
        options: [
          H`$\displaystyle\int_0^1\int_0^2 (x^2+y^2)\,dy\,dx$`,
          H`$\displaystyle\int_0^2\int_0^1 (x^2+y^2)\,dx\,dx$`,
          H`$\displaystyle\int_0^1\int_0^1 (x^2+y^2)\,dy\,dx$`,
          H`$\displaystyle\int_0^1\int_x^2 (x^2+y^2)\,dy\,dx$`
        ],
        correct: 0,
        solution: H`<div class="steps">
<div class="step"><p><strong>Leer los límites del rectángulo.</strong> $R=[0,1]\times[0,2]$ significa $0\le x\le1$ (constante) y $0\le y\le2$ (constante): ambos límites son numéricos, no hace falta despejar ninguna curva.</p></div>
<div class="step"><p><strong>Plantear la integral iterada.</strong> $$V=\iint_R (x^2+y^2)\,dA=\int_0^1\int_0^2 (x^2+y^2)\,dy\,dx$$ que corresponde a la opción 1.</p></div>
<div class="step"><p><strong>Descartar las opciones incorrectas.</strong> La opción 2 repite $dx\,dx$ en vez de $dx\,dy$ y confunde el orden. La opción 3 usa $[0,1]$ para ambas variables, cambiando la región a $[0,1]\times[0,1]$. La opción 4 introduce el límite variable $y=x$, que no aparece en la definición de $R$ (un rectángulo tiene límites constantes en ambas variables).</p></div>
</div>
<div class="final">La opción correcta es la 1: $\displaystyle\int_0^1\int_0^2 (x^2+y^2)\,dy\,dx$.</div>`
      },
      {
        id: 's6e14', level: 2, type: 'num', label: 'Volumen =',
        q: H`Resolver la integral doble planteada en el ejercicio anterior: $\displaystyle\iint_R (x^2+y^2)\,dA$, $R=[0,1]\times[0,2]$.`,
        hint: H`Integre primero en $y$ de $0$ a $2$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región.</strong> $R=[0,1]\times[0,2]$, rectángulo. Integramos primero en $y$.</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_0^2(x^2+y^2)\,dy=\left[x^2y+\frac{y^3}{3}\right]_0^2=2x^2+\frac83$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^1\left(2x^2+\frac83\right)dx=\left[\frac{2x^3}{3}+\frac{8x}{3}\right]_0^1=\frac23+\frac83=\frac{10}{3}$$</p></div>
</div>
<div class="final">$V=\dfrac{10}{3}\ \text{u}^3$.</div>`,
        answer: '10/3', verify: { kind: 'int2', f: 'x^2+y^2', outer: 'x', a: '0', b: '1', lo: '0', hi: '2' }
      },
      {
        id: 's6e15', level: 3, type: 'num', label: 'Volumen =',
        q: H`Para el sólido bajo $z=6-2x-3y$ sobre $D=\{0\le x\le1,\ 0\le y\le 1-x\}$: obtener $A(x)$ y calcular $V=\displaystyle\int_0^1 A(x)\,dx$.`,
        hint: H`$A(x)=\displaystyle\int_0^{1-x}(6-2x-3y)\,dy$. Simplifique factorizando $(1-x)$ antes de integrar en $x$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región y planteamiento de A(x).</strong> $D=\{0\le x\le1,\ 0\le y\le1-x\}$, tipo I. $$A(x)=\int_0^{1-x}(6-2x-3y)\,dy$$</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$A(x)=\left[6y-2xy-\frac{3y^2}{2}\right]_0^{1-x}=6(1-x)-2x(1-x)-\frac32(1-x)^2$$</p></div>
<div class="step"><p><strong>Simplificar factorizando $s=1-x$.</strong> $A(x)=s(6-2x)-\dfrac32 s^2=s\left(6-2x-\dfrac32 s\right)$. Con $s=1-x$: $$6-2x-\frac32(1-x)=6-2x-1.5+1.5x=4.5-0.5x$$ Entonces $A(x)=(1-x)(4.5-0.5x)=4.5-5x+0.5x^2$.</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$V=\int_0^1 A(x)\,dx=\int_0^1\left(4.5-5x+0.5x^2\right)dx=\left[4.5x-2.5x^2+\frac{x^3}{6}\right]_0^1$$</p></div>
<div class="step"><p><strong>Aritmética final.</strong> $=4.5-2.5+\dfrac16=2+\dfrac16=\dfrac{13}{6}$.</p></div>
</div>
<div class="final">$A(x)=4.5-5x+0.5x^2$ y $V=\dfrac{13}{6}\ \text{u}^3$.</div>`,
        answer: '13/6', verify: { kind: 'int2', f: '6-2*x-3*y', outer: 'x', a: '0', b: '1', lo: '0', hi: '1-x' }
      },
      {
        id: 's6e16', level: 3, type: 'num', label: 'Volumen =',
        q: H`Hallar el volumen del sólido limitado por el cilindro parabólico $z=4-y^2$ (con $z\ge0$) y los planos $x=0$, $x=3$.`,
        hint: H`Como $z\ge0$ requiere $y^2\le4$, la proyección sobre $xy$ es $D=\{0\le x\le3,\ -2\le y\le2\}$. El integrando no depende de $x$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Identificar la proyección.</strong> $z=4-y^2\ge0$ requiere $y^2\le4$, es decir $-2\le y\le2$; junto con $0\le x\le3$: $D=\{0\le x\le3,\ -2\le y\le2\}$.</p></div>
<div class="step"><p><strong>Plantear y separar.</strong> El integrando no depende de $x$: $$V=\int_0^3\int_{-2}^2(4-y^2)\,dy\,dx=3\int_{-2}^2(4-y^2)\,dy$$</p></div>
<div class="step"><p><strong>Integral en y.</strong> $$\int_{-2}^2(4-y^2)\,dy=\left[4y-\frac{y^3}{3}\right]_{-2}^2=\left(8-\frac83\right)-\left(-8+\frac83\right)=16-\frac{16}{3}=\frac{32}{3}$$</p></div>
<div class="step"><p><strong>Volumen final.</strong> $$V=3\cdot\frac{32}{3}=32$$</p></div>
</div>
<div class="final">$V=32\ \text{u}^3$.</div>`,
        answer: '32', verify: { kind: 'int2', f: '4-y^2', outer: 'x', a: '0', b: '3', lo: '-2', hi: '2' }
      },
      {
        id: 's6e17', level: 3, type: 'num', label: 'Volumen =',
        q: H`Hallar el volumen bajo el paraboloide $z=9-x^2-y^2$ sobre el rectángulo $R=[0,1]\times[0,1]$.`,
        hint: H`Compruebe la positividad ($x^2+y^2\le2<9$ en $R$) e integre primero en $y$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Comprobar positividad.</strong> En $R=[0,1]\times[0,1]$, $x^2+y^2\le2<9$, así que $z=9-x^2-y^2>0$ en toda la región.</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_0^1(9-x^2-y^2)\,dy=\left[9y-x^2y-\frac{y^3}{3}\right]_0^1=9-x^2-\frac13=\frac{26}{3}-x^2$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^1\left(\frac{26}{3}-x^2\right)dx=\left[\frac{26x}{3}-\frac{x^3}{3}\right]_0^1=\frac{26}{3}-\frac13=\frac{25}{3}$$</p></div>
</div>
<div class="final">$V=\dfrac{25}{3}\ \text{u}^3$.</div>`,
        answer: '25/3', verify: { kind: 'int2', f: '9-x^2-y^2', outer: 'x', a: '0', b: '1', lo: '0', hi: '1' }
      },
      {
        id: 's6e18', level: 3, type: 'num', label: 'Volumen =',
        q: H`Hallar el volumen bajo la superficie $z=xy$ sobre $D=\{0\le x\le1,\ x\le y\le 2x\}$.`,
        hint: H`Compruebe que $z=xy\ge0$ en $D$ (pues $x\ge0$, $y\ge0$) e integre primero en $y$.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Comprobar positividad y tipo.</strong> En $D=\{0\le x\le1,\ x\le y\le2x\}$, $x\ge0$ y $y\ge0$, así que $z=xy\ge0$: región tipo I.</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_{x}^{2x} xy\,dy=x\left[\frac{y^2}{2}\right]_{x}^{2x}=\frac{x}{2}(4x^2-x^2)=\frac{3x^3}{2}$$</p></div>
<div class="step"><p><strong>Integral exterior.</strong> $$\int_0^1 \frac{3x^3}{2}\,dx=\frac32\left[\frac{x^4}{4}\right]_0^1=\frac38$$</p></div>
</div>
<div class="final">$V=\dfrac38\ \text{u}^3$.</div>`,
        answer: '3/8', verify: { kind: 'int2', f: 'x*y', outer: 'x', a: '0', b: '1', lo: 'x', hi: '2*x' }
      },
      {
        id: 's6e19', level: 3, type: 'choice',
        q: H`El método de discos/arandelas de la Conferencia 4 (volúmenes de revolución) es un caso particular de:`,
        hint: H`Piense en qué fórmula general comparten los discos/arandelas y los sólidos bajo una superficie sobre una región del plano $xy$.`,
        options: [
          H`La fórmula general de volumen por secciones transversales $V=\displaystyle\int A(x)\,dx$, donde en los discos/arandelas $A(x)$ es el área de un círculo o una corona circular ($\pi R^2$ o $\pi[R^2-r^2]$), en vez de obtenerse integrando una función de dos variables.`,
          H`Una integral doble sobre un rectángulo, porque toda superficie de revolución puede escribirse como $z=f(x,y)$ sobre un rectángulo.`,
          H`El teorema de Fubini, porque ambos métodos permiten cambiar el orden de integración.`,
          H`No están relacionados: son técnicas independientes que no comparten ninguna fórmula.`
        ],
        correct: 0,
        solution: H`<div class="steps">
<div class="step"><p><strong>Identificar la fórmula compartida.</strong> Tanto el método de discos/arandelas como el volumen bajo una superficie $z=f(x,y)$ calculan $V=\displaystyle\int A(x)\,dx$ (o en $y$): ambos son casos del mismo principio de secciones transversales.</p></div>
<div class="step"><p><strong>Distinguir de dónde sale A(x).</strong> En discos/arandelas, $A(x)$ es una <strong>fórmula geométrica</strong> ($\pi R^2$ o $\pi[R^2-r^2]$) porque la sección es siempre un círculo o corona. En el sólido bajo $z=f(x,y)$, $A(x)$ se obtiene <strong>integrando</strong>: $A(x)=\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy$.</p></div>
<div class="step"><p><strong>Descartar las opciones incorrectas.</strong> La opción 2 es falsa porque no toda superficie de revolución se proyecta sobre un rectángulo (el radio $R(x)$ suele variar con $x$). La opción 3 confunde el teorema de Fubini (que trata sobre el orden de integración) con la fórmula de secciones transversales. La opción 4 niega una relación que sí existe: ambos métodos comparten la fórmula $V=\int A(x)\,dx$.</p></div>
</div>
<div class="final">La opción correcta es la 1.</div>`
      },
      {
        id: 's6e20', level: 3, type: 'num', label: 'Volumen =',
        q: H`Hallar el volumen bajo el plano $z=x+y+2$ sobre la región $D=\{-1\le x\le1,\ x^2\le y\le1\}$ (entre la parábola $y=x^2$ y la recta $y=1$).`,
        hint: H`Aproveche que $D$ es simétrica respecto al eje $y$: separe el integrando en una parte impar en $x$ (que se anula) y una parte par.`,
        solution: H`<div class="steps">
<div class="step"><p><strong>Región.</strong> $D=\{-1\le x\le1,\ x^2\le y\le1\}$: para cada $x$, $y$ entra por la parábola $y=x^2$ y sale por la recta $y=1$; tipo I y simétrica respecto al eje $y$.</p></div>
<div class="step"><p><strong>Integral interior.</strong> $$\int_{x^2}^{1}(x+y+2)\,dy=\left[xy+\frac{y^2}{2}+2y\right]_{x^2}^{1}=\left(x+\frac12+2\right)-\left(x^3+\frac{x^4}{2}+2x^2\right)=x+2.5-x^3-\frac{x^4}{2}-2x^2$$</p></div>
<div class="step"><p><strong>Aprovechar la simetría.</strong> Los términos $x$ y $-x^3$ son impares en $x$; como $D$ es simétrica respecto al eje $y$, se cancelan al integrar en $[-1,1]$. Solo sobreviven los términos pares: $$V=\int_{-1}^1\left(2.5-\frac{x^4}{2}-2x^2\right)dx=2\int_0^1\left(2.5-\frac{x^4}{2}-2x^2\right)dx$$</p></div>
<div class="step"><p><strong>Integral exterior (mitad par) y aritmética final.</strong> $$2\left[2.5x-\frac{x^5}{10}-\frac{2x^3}{3}\right]_0^1$$ En $x=1$: $2.5-0.1-\dfrac23=\dfrac{5}{2}-\dfrac1{10}-\dfrac23$; con denominador $30$: $\dfrac{75}{30}-\dfrac{3}{30}-\dfrac{20}{30}=\dfrac{52}{30}=\dfrac{26}{15}$. Entonces $V=2\cdot\dfrac{26}{15}=\dfrac{52}{15}$.</p></div>
</div>
<div class="final">$V=\dfrac{52}{15}\ \text{u}^3$.</div>`,
        answer: '52/15', verify: { kind: 'int2', f: 'x+y+2', outer: 'x', a: '-1', b: '1', lo: 'x^2', hi: '1' }
      }
    ]
  });
})();
