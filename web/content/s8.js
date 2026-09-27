(function () {
  const H = String.raw; // keeps LaTeX backslashes intact. NEVER write "$" + "{" together.
  window.SESSIONS = window.SESSIONS || [];
  window.SESSIONS.push({
    id: 's8',
    order: 8,
    code: 'CE7',
    topic: 'Tema II · Ecuaciones diferenciales',
    title: 'Ecuaciones diferenciales de primer orden: variables separables y ecuaciones exactas',
    short: 'EDO 1er orden',
    goals: [
      'Reconocer una EDO de variables separables y aplicar el procedimiento de separación e integración.',
      'Detectar soluciones constantes que se pueden perder al dividir por una expresión que contiene a $y$.',
      'Resolver problemas de valor inicial (PVI) con ecuaciones separables, incluyendo modelos de crecimiento/decaimiento, enfriamiento de Newton y mezclas simples.',
      'Reconocer una ecuación exacta mediante el criterio $M_y=N_x$.',
      'Hallar la función potencial $F(x,y)$ de una ecuación exacta y escribir la solución implícita $F(x,y)=C$.',
      'Resolver un PVI de una ecuación exacta determinando el valor de la constante.'
    ],
    theory: [
      {
        h: 'Ecuaciones de variables separables: idea y procedimiento',
        html: H`<p>Una ecuación diferencial de primer orden es de <strong>variables separables</strong> cuando puede escribirse de manera que todos los términos con $y$ (incluyendo $dy$) queden de un lado, y todos los términos con $x$ (incluyendo $dx$) queden del otro:</p>
        <div class="key">$$\frac{dy}{dx}=g(x)h(y)\qquad\Longrightarrow\qquad \frac{dy}{h(y)}=g(x)\,dx\quad (\text{si } h(y)\neq 0)$$</div>
        <p>El procedimiento tiene siempre los mismos pasos:</p>
        <ol>
          <li><strong>Separar:</strong> escribir la ecuación como $\dfrac{dy}{h(y)}=g(x)\,dx$, dividiendo entre $h(y)$ y multiplicando por $dx$.</li>
          <li><strong>Integrar ambos miembros</strong> por separado: $\displaystyle\int\frac{dy}{h(y)}=\int g(x)\,dx$.</li>
          <li><strong>Añadir la constante de integración una sola vez</strong> (en cualquiera de los dos miembros, nunca en ambos).</li>
          <li><strong>Despejar $y$</strong> si es posible, para obtener la solución explícita $y=y(x)$; si no es posible, la solución queda en forma implícita.</li>
        </ol>
        <p><strong>Ejemplo mínimo.</strong> $\dfrac{dy}{dx}=ky$ (crecimiento/decaimiento exponencial). Separando: $\dfrac{dy}{y}=k\,dx$ (aquí $h(y)=1/y$, $g(x)=k$). Integrando: $\ln|y|=kx+C_1$. Exponenciando: $|y|=e^{kx+C_1}=e^{C_1}e^{kx}$. Como $e^{C_1}$ es una constante positiva arbitraria, y además $y=0$ también es solución (se pierde al dividir por $y$, ver más abajo), se escribe de forma compacta la solución general como $y=Ce^{kx}$, donde ahora $C$ es <em>cualquier</em> número real (incluyendo $0$).</p>`
      },
      {
        h: 'Soluciones que se pueden perder al dividir',
        html: H`<p>Al separar variables se divide entre $h(y)$, lo que exige $h(y)\neq 0$. Si existe algún valor $y=y_0$ con $h(y_0)=0$, entonces la función constante $y=y_0$ también es (trivialmente) solución de la ecuación original —porque $y'=0$ y $g(x)h(y_0)=g(x)\cdot 0=0$ coinciden—, pero ese paso de la división la "pierde" del proceso algebraico.</p>
        <p><strong>Qué hacer:</strong> después de resolver por separación de variables, siempre se debe revisar si $h(y)=0$ tiene soluciones, y comprobar por sustitución directa si esas funciones constantes son solución de la ecuación original. Si lo son, deben mencionarse junto a la solución general (a veces quedan incluidas al permitir que la constante arbitraria tome el valor correspondiente, como el caso $C=0$ del ejemplo anterior; otras veces no, y deben añadirse aparte).</p>
        <div class="warn">Error común: dividir por una expresión que contiene a $y$ sin verificar después si esa expresión puede anularse. Siempre declara la restricción (p. ej. "$y\neq 0$") en el momento de dividir, y revisa al final si la solución perdida debe incluirse.</div>`
      },
      {
        h: 'Problemas de valor inicial con ecuaciones separables',
        html: H`<p>Al igual que en la sesión anterior, un PVI se resuelve hallando primero la solución general (o la relación implícita) y sustituyendo después la condición inicial para determinar el valor concreto de la constante. Cuando la solución queda implícita, conviene sustituir la condición inicial <em>antes</em> de intentar despejar $y$, si el despeje es complicado.</p>
        <p><strong>Ejemplo.</strong> Resolver $\dfrac{dy}{dx}=\dfrac{x}{y}$, con $y(0)=3$.</p>
        <p>Separando (con $y\neq 0$): $y\,dy=x\,dx$. Integrando: $\dfrac{y^2}{2}=\dfrac{x^2}{2}+C_1$, es decir $y^2=x^2+C$ (con $C=2C_1$). Usando $y(0)=3$: $9=0+C \Rightarrow C=9$. La relación implícita es $y^2=x^2+9$; como la condición inicial da $y=3>0$, se toma la rama positiva: $y=\sqrt{x^2+9}$.</p>`
      },
      {
        h: 'Aplicaciones: crecimiento/decaimiento, enfriamiento de Newton y mezclas',
        html: H`<p>Tres familias de modelos —ya vistas de forma introductoria en la sesión anterior— se resuelven exactamente con el método de separación de variables.</p>
        <p><strong>Crecimiento y decaimiento exponencial.</strong> $\dfrac{dy}{dx}=ky$. Solución general: $y=Ce^{kx}$. Si $k>0$ hay crecimiento exponencial (poblaciones, interés compuesto continuo); si $k<0$ hay decaimiento exponencial (desintegración radiactiva, enfriamiento de un objeto respecto a su propio historial).</p>
        <p><strong>Ley de enfriamiento de Newton.</strong> $\dfrac{dT}{dt}=-k(T-T_{amb})$, con $T_{amb}$ constante y $k>0$. Es separable: $\dfrac{dT}{T-T_{amb}}=-k\,dt$. Integrando: $\ln|T-T_{amb}|=-kt+C_1$, de donde $T-T_{amb}=Ce^{-kt}$, es decir</p>
        <div class="key">$$T(t)=T_{amb}+Ce^{-kt}$$</div>
        <p>La constante $C$ se determina con la temperatura inicial: $C=T(0)-T_{amb}$. Como $k>0$, $e^{-kt}\to 0$ cuando $t\to\infty$, así que $T(t)\to T_{amb}$: la temperatura siempre tiende a igualarse con el ambiente (coherente con la solución de equilibrio $T=T_{amb}$ vista mediante campos direccionales).</p>
        <p><strong>Mezclas simples.</strong> Un tanque con volumen constante de líquido recibe una solución con cierta concentración de soluto a razón constante, y la mezcla (bien agitada) sale a la misma razón. Si $S(t)$ es la cantidad de soluto en el tanque, la razón de cambio es (entra) $-$ (sale):</p>
        <div class="key">$$\frac{dS}{dt}=(\text{razón de entrada de soluto})-(\text{razón de salida de soluto})$$</div>
        <p>Cuando el volumen es constante, la razón de salida es proporcional a $S$ (concentración de salida $\times$ caudal de salida), y toda la ecuación queda de la forma $\dfrac{dS}{dt}=a-bS$, que es <em>autónoma</em> y, por lo tanto, separable: $\dfrac{dS}{a-bS}=dt$. La solución general tiene la misma estructura que la del enfriamiento de Newton: $S(t)=\dfrac{a}{b}+Ce^{-bt}$, donde $S_{eq}=a/b$ es la solución de equilibrio (la cantidad de soluto de "régimen permanente").</p>
        <div class="note">Eliminado del programa 2026–2027: el estudio de las EDO <strong>lineales</strong> de primer orden (con el método del factor integrante $\mu(x)=e^{\int p(x)\,dx}$). Los tres modelos anteriores son técnicamente lineales, pero como además son <em>autónomos</em> (el lado derecho no depende explícitamente de la variable independiente), se resuelven perfectamente por separación de variables, sin necesidad de ese método. Por eso siguen siendo parte del programa vigente.</div>`
      },
      {
        h: 'Ecuaciones exactas: definición y criterio',
        html: H`<p>Muchas ecuaciones de primer orden se escriben en la llamada <strong>forma diferencial</strong>:</p>
        <div class="key">$$M(x,y)\,dx+N(x,y)\,dy=0$$</div>
        <p>La ecuación se llama <strong>exacta</strong> en una región donde existe una función $F(x,y)$ (llamada <strong>función potencial</strong>) tal que</p>
        <div class="key">$$F_x(x,y)=M(x,y)\qquad\text{y}\qquad F_y(x,y)=N(x,y)$$</div>
        <p>Si tal $F$ existe, entonces $M\,dx+N\,dy=F_x\,dx+F_y\,dy=dF$ (la diferencial total de $F$), así que la ecuación se reescribe simplemente como $dF=0$, cuya solución general es</p>
        <div class="key">$$F(x,y)=C$$</div>
        <p>una <strong>solución implícita</strong> (no siempre se puede, ni conviene, despejar $y$ explícitamente).</p>
        <p><strong>¿Cómo saber si es exacta sin necesidad de encontrar $F$?</strong> Si $M$ y $N$ tienen derivadas parciales continuas, por el teorema de Clairaut $F_{xy}=F_{yx}$, es decir $M_y=N_x$. Este es el <strong>criterio de exactitud</strong>:</p>
        <div class="key">$$\text{la ecuación }M\,dx+N\,dy=0\text{ es exacta}\iff M_y=N_x$$</div>
        <p>(en un dominio simplemente conexo). Es el primer paso obligatorio antes de intentar resolver una ecuación por este método: si $M_y\neq N_x$, la ecuación <em>no</em> es exacta y este método no aplica directamente.</p>`
      },
      {
        h: 'Procedimiento paso a paso para resolver una ecuación exacta',
        html: H`<p>Una vez comprobado que $M_y=N_x$, se construye $F(x,y)$ siguiendo estos pasos:</p>
        <ol>
          <li><strong>Integrar $M$ respecto de $x$</strong>, tratando a $y$ como constante: $$F(x,y)=\int M(x,y)\,dx=\varphi(x,y)+g(y)$$ (la "constante" de integración puede depender de $y$, porque se integró solo respecto de $x$; por eso se escribe $g(y)$ en vez de $C$).</li>
          <li><strong>Derivar ese resultado respecto de $y$</strong>: $F_y=\varphi_y(x,y)+g'(y)$.</li>
          <li><strong>Igualar a $N(x,y)$</strong> (porque debe cumplirse $F_y=N$) y despejar $g'(y)$: $$g'(y)=N(x,y)-\varphi_y(x,y)$$ Si la ecuación es realmente exacta, el lado derecho, tras simplificar, no debe depender de $x$ (es una buena forma de autocomprobar el trabajo).</li>
          <li><strong>Integrar $g'(y)$ respecto de $y$</strong> para obtener $g(y)$ (sin necesidad de otra constante, se añadirá al final).</li>
          <li><strong>Escribir $F(x,y)=\varphi(x,y)+g(y)$</strong> y dar la solución general en forma implícita: $F(x,y)=C$.</li>
          <li>Si hay condición inicial, sustituir $(x_0,y_0)$ en $F$ para hallar el valor numérico de $C$.</li>
        </ol>
        <div class="note">Es válido (y a veces más corto) integrar primero $N$ respecto de $y$ y derivar respecto de $x$, en vez de empezar por $M$; el resultado final para $F$ es el mismo. Conviene empezar por la que se vea más fácil de integrar.</div>
        <p><strong>Ejemplo.</strong> Resolver $(2xy+3)\,dx+(x^2-1)\,dy=0$.</p>
        <p>Aquí $M=2xy+3$, $N=x^2-1$. Criterio: $M_y=2x$, $N_x=2x$; coinciden, la ecuación es exacta.</p>
        <p>Paso 1: $F=\displaystyle\int (2xy+3)\,dx=x^2y+3x+g(y)$.</p>
        <p>Paso 2: $F_y=x^2+g'(y)$.</p>
        <p>Paso 3: Igualando a $N=x^2-1$: $x^2+g'(y)=x^2-1 \Rightarrow g'(y)=-1$ (no depende de $x$: buena señal).</p>
        <p>Paso 4: $g(y)=-y$.</p>
        <p>Paso 5: $F(x,y)=x^2y+3x-y$. Solución general: $x^2y+3x-y=C$.</p>
        <div class="warn">Error común: al integrar $M$ respecto de $x$, escribir "$+C$" en vez de "$+g(y)$", y luego olvidar que esa "constante" puede (y casi siempre debe) depender de $y$. Otro error frecuente: no verificar el criterio $M_y=N_x$ antes de empezar, y aplicar el método a una ecuación que no es exacta.</div>`
      }
    ],
    examples: [
      {
        title: 'Decaimiento exponencial (variables separables)',
        statement: H`Una muestra radiactiva se desintegra según $\dfrac{dA}{dt}=-0.05A$. Si inicialmente hay $A(0)=80$ gramos, determine $A(t)$ y evalúe $A(20)$.`,
        steps: [
          H`<strong>Paso 1. Separar variables.</strong> $\dfrac{dA}{dt}=-0.05A \Rightarrow \dfrac{dA}{A}=-0.05\,dt$ (con $A\neq 0$; se revisará $A=0$ al final).`,
          H`<strong>Paso 2. Integrar ambos miembros.</strong> $$\int\frac{dA}{A}=\int(-0.05)\,dt \ \Longrightarrow\ \ln|A|=-0.05t+C_1$$`,
          H`<strong>Paso 3. Despejar $A$.</strong> Exponenciando: $|A|=e^{-0.05t+C_1}=e^{C_1}e^{-0.05t}$. Absorbiendo el signo y la constante en una nueva constante $C$ (que además admite $C=0$, recuperando la solución perdida $A=0$): $A(t)=Ce^{-0.05t}$.`,
          H`<strong>Paso 4. Aplicar la condición inicial.</strong> $A(0)=80 \Rightarrow C\cdot e^{0}=80 \Rightarrow C=80$. Solución particular: $A(t)=80e^{-0.05t}$.`,
          H`<strong>Paso 5. Evaluar en $t=20$.</strong> $A(20)=80e^{-1}\approx 80\times 0.3679\approx 29.4$ gramos.`
        ],
        answer: H`$A(t)=80e^{-0.05t}$; $A(20)\approx 29.4\ \text{g}$`
      },
      {
        title: 'Separable con solución exponencial de tipo gaussiano',
        statement: H`Resuelva la ecuación diferencial $\dfrac{dy}{dx}=xy$.`,
        steps: [
          H`<strong>Paso 1. Separar variables.</strong> $\dfrac{dy}{y}=x\,dx$ (con $y\neq 0$).`,
          H`<strong>Paso 2. Integrar.</strong> $$\int\frac{dy}{y}=\int x\,dx \Longrightarrow \ln|y|=\frac{x^2}{2}+C_1$$`,
          H`<strong>Paso 3. Despejar $y$.</strong> $y=\pm e^{C_1}e^{x^2/2}$; escribiendo la constante arbitraria como $C$ (que puede ser cualquier real, incluido $0$): $y=Ce^{x^2/2}$.`,
          H`<strong>Paso 4. Revisar la solución perdida.</strong> Al dividir por $y$ se asumió $y\neq 0$; pero $y=0$ también satisface la ecuación original ($0=x\cdot 0$). Queda incluida en la familia general tomando $C=0$, así que no hace falta añadirla por separado.`
        ],
        answer: H`$y=Ce^{x^2/2}$`
      },
      {
        title: 'PVI separable con solución implícita cuadrática',
        statement: H`Resuelva el problema de valor inicial $\dfrac{dy}{dx}=\dfrac{x}{y}$, $y(0)=3$.`,
        steps: [
          H`<strong>Paso 1. Separar variables.</strong> $y\,dy=x\,dx$ (con $y\neq 0$).`,
          H`<strong>Paso 2. Integrar ambos miembros.</strong> $$\int y\,dy=\int x\,dx \Longrightarrow \frac{y^2}{2}=\frac{x^2}{2}+C_1$$`,
          H`<strong>Paso 3. Simplificar.</strong> Multiplicando por $2$ y renombrando la constante: $y^2=x^2+C$.`,
          H`<strong>Paso 4. Usar la condición inicial.</strong> $y(0)=3 \Rightarrow 3^2=0^2+C \Rightarrow C=9$. La relación implícita es $y^2=x^2+9$.`,
          H`<strong>Paso 5. Elegir la rama correcta.</strong> Como $y(0)=3>0$, se toma la raíz positiva: $y=\sqrt{x^2+9}$ (nunca se anula, así que esta rama es válida para todo $x$).`
        ],
        answer: H`$y=\sqrt{x^2+9}$`
      },
      {
        title: 'Ley de enfriamiento de Newton',
        statement: H`Un objeto a $90°\text{C}$ se coloca en una habitación cuya temperatura se mantiene a $20°\text{C}$. Si la constante de enfriamiento es $k=0.1\ \text{min}^{-1}$, determine $T(t)$ y el instante en que la temperatura llega a $30°\text{C}$.`,
        steps: [
          H`<strong>Paso 1. Plantear y separar la ecuación.</strong> $\dfrac{dT}{dt}=-0.1(T-20) \Rightarrow \dfrac{dT}{T-20}=-0.1\,dt$ (con $T\neq 20$).`,
          H`<strong>Paso 2. Integrar.</strong> $\ln|T-20|=-0.1t+C_1 \Rightarrow T-20=Ce^{-0.1t} \Rightarrow T(t)=20+Ce^{-0.1t}$.`,
          H`<strong>Paso 3. Aplicar la condición inicial $T(0)=90$.</strong> $90=20+C \Rightarrow C=70$. Así, $T(t)=20+70e^{-0.1t}$.`,
          H`<strong>Paso 4. Plantear la ecuación para $T=30$.</strong> $30=20+70e^{-0.1t} \Rightarrow 70e^{-0.1t}=10 \Rightarrow e^{-0.1t}=\dfrac{1}{7}$.`,
          H`<strong>Paso 5. Despejar $t$ con logaritmo natural.</strong> $-0.1t=\ln\left(\dfrac{1}{7}\right)=-\ln 7 \Rightarrow t=\dfrac{\ln 7}{0.1}=10\ln 7\approx 19.46$ minutos.`
        ],
        answer: H`$T(t)=20+70e^{-0.1t}$; alcanza $30°\text{C}$ en $t=10\ln 7\approx 19.46$ min`
      },
      {
        title: 'Mezcla simple en un tanque',
        statement: H`Un tanque contiene $200$ litros de agua con $5\,\text{kg}$ de sal disuelta. Entra salmuera con concentración $0.05\,\text{kg/L}$ a razón de $4\,\text{L/min}$, y la mezcla (bien agitada) sale a la misma razón. Determine $S(t)$, la cantidad de sal en el tanque en el instante $t$.`,
        steps: [
          H`<strong>Paso 1. Plantear la razón de entrada y de salida.</strong> Entra sal a razón $0.05\,\text{kg/L}\times 4\,\text{L/min}=0.2\,\text{kg/min}$ (constante). Como el volumen se mantiene en $200\,\text{L}$, la concentración en el tanque en el instante $t$ es $S(t)/200$, y sale a razón $\left(\dfrac{S}{200}\right)\times 4=0.02S\,\text{kg/min}$.`,
          H`<strong>Paso 2. Escribir la ecuación diferencial.</strong> $$\frac{dS}{dt}=0.2-0.02S$$ Es autónoma, así que es separable.`,
          H`<strong>Paso 3. Separar e integrar.</strong> $\dfrac{dS}{0.2-0.02S}=dt$. Integrando (nota que $\frac{d}{dS}(0.2-0.02S)=-0.02$, así que aparece un factor $-1/0.02=-50$): $-50\ln|0.2-0.02S|=t+C_1$, de donde $0.2-0.02S=Ce^{-t/50}$, es decir $S(t)=10-50Ce^{-t/50}$; renombrando la constante, $S(t)=10+Ce^{-0.02t}$.`,
          H`<strong>Paso 4. Aplicar la condición inicial $S(0)=5$.</strong> $5=10+C\Rightarrow C=-5$. Solución particular: $$S(t)=10-5e^{-0.02t}$$`,
          H`<strong>Interpretación.</strong> $S_{eq}=10\,\text{kg}$ es la solución de equilibrio ($10\,\text{kg}$ en $200\,\text{L}$ es exactamente $0.05\,\text{kg/L}$, la misma concentración que entra). Como el tanque parte con menos sal de la que le corresponde en equilibrio ($5<10$), $S(t)$ crece; cuando $t\to\infty$, $e^{-0.02t}\to 0$ y $S(t)\to 10\,\text{kg}$: la cantidad de sal tiende al equilibrio.`
        ],
        answer: H`$S(t)=10-5e^{-0.02t}$; $S(t)\to 10\ \text{kg}$ cuando $t\to\infty$`
      },
      {
        title: 'Ecuación exacta: hallar la función potencial',
        statement: H`Resuelva la ecuación diferencial $(2xy+3)\,dx+(x^2-1)\,dy=0$.`,
        steps: [
          H`<strong>Paso 1. Identificar $M$ y $N$, y comprobar el criterio de exactitud.</strong> $M=2xy+3$, $N=x^2-1$. $M_y=2x$, $N_x=2x$. Como $M_y=N_x$, la ecuación es exacta.`,
          H`<strong>Paso 2. Integrar $M$ respecto de $x$.</strong> $$F(x,y)=\int(2xy+3)\,dx=x^2y+3x+g(y)$$`,
          H`<strong>Paso 3. Derivar respecto de $y$ e igualar a $N$.</strong> $F_y=x^2+g'(y)$. Debe ser $F_y=N=x^2-1$, así que $g'(y)=-1$ (efectivamente no depende de $x$: la ecuación era exacta).`,
          H`<strong>Paso 4. Integrar $g'(y)$.</strong> $g(y)=-y$.`,
          H`<strong>Paso 5. Escribir $F$ y la solución general.</strong> $F(x,y)=x^2y+3x-y$. Solución: $x^2y+3x-y=C$.`
        ],
        answer: H`$x^2y+3x-y=C$`
      },
      {
        title: 'Ecuación exacta con problema de valor inicial',
        statement: H`Resuelva el problema de valor inicial $(2x+y\cos x)\,dx+(\sin x-3y^2)\,dy=0$, $y(0)=2$.`,
        steps: [
          H`<strong>Paso 1. Identificar $M$, $N$ y comprobar exactitud.</strong> $M=2x+y\cos x$, $N=\sin x-3y^2$. $M_y=\cos x$, $N_x=\cos x$. Coinciden: es exacta.`,
          H`<strong>Paso 2. Integrar $M$ respecto de $x$.</strong> $$F=\int(2x+y\cos x)\,dx=x^2+y\sin x+g(y)$$`,
          H`<strong>Paso 3. Derivar respecto de $y$ e igualar a $N$.</strong> $F_y=\sin x+g'(y)=N=\sin x-3y^2 \Rightarrow g'(y)=-3y^2$.`,
          H`<strong>Paso 4. Integrar.</strong> $g(y)=-y^3$.`,
          H`<strong>Paso 5. Escribir $F$ y la solución general.</strong> $F(x,y)=x^2+y\sin x-y^3$. Solución general: $x^2+y\sin x-y^3=C$.`,
          H`<strong>Paso 6. Aplicar la condición inicial.</strong> $F(0,2)=0^2+2\sin 0-2^3=0+0-8=-8$, así que $C=-8$. Solución particular (implícita): $x^2+y\sin x-y^3=-8$.`
        ],
        answer: H`$x^2+y\sin x-y^3=-8$`
      }
    ],
    exercises: [
      {
        id: 's8e01', level: 1, type: 'ode', order: 1, v: 'x',
        q: H`Resuelva por separación de variables $\dfrac{dy}{dx}=5y$. Escriba la solución general con la constante $C$.`,
        res: 'yp-5*y', ref: 'C*exp(5*x)', consts: ['C'],
        hint: H`Separa $\dfrac{dy}{y}=5\,dx$, integra ambos miembros y exponencia.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Separar variables.</strong> $\dfrac{dy}{dx}=5y$ tiene la forma $g(x)h(y)$ con $g(x)=5$, $h(y)=y$; dividiendo entre $y$ (con $y\neq 0$) y multiplicando por $dx$: $$\frac{dy}{y}=5\,dx$$</p></div>
        <div class="step"><p><strong>Integrar ambos miembros.</strong> $$\int\frac{dy}{y}=\int 5\,dx \Longrightarrow \ln|y|=5x+C_1$$</p></div>
        <div class="step"><p><strong>Despejar $y$.</strong> Exponenciando: $|y|=e^{5x+C_1}=e^{C_1}e^{5x}$. Renombrando la constante como $C$ (que puede ser cualquier real, incluyendo $0$): $$y=Ce^{5x}$$</p></div>
        <div class="step"><p><strong>Revisar la solución perdida.</strong> Al dividir por $y$ se exigió $y\neq 0$; pero $y=0$ también satisface la ecuación original ($0=5\cdot 0$). Queda incluida tomando $C=0$, así que no falta ninguna solución.</p></div>
        </div>
        <div class="final">$y=Ce^{5x}$</div>`
      },
      {
        id: 's8e02', level: 1, type: 'ode', order: 1, v: 'x',
        q: H`Resuelva por separación de variables $\dfrac{dy}{dx}=-0.3y$. Escriba la solución general con la constante $C$.`,
        res: 'yp+0.3*y', ref: 'C*exp(-0.3*x)', consts: ['C'],
        hint: H`Es un decaimiento exponencial: separa, integra y exponencia.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Separar variables.</strong> Con $y\neq 0$: $$\frac{dy}{y}=-0.3\,dx$$</p></div>
        <div class="step"><p><strong>Integrar ambos miembros.</strong> $$\int\frac{dy}{y}=\int(-0.3)\,dx \Longrightarrow \ln|y|=-0.3x+C_1$$</p></div>
        <div class="step"><p><strong>Despejar $y$.</strong> Exponenciando y renombrando la constante: $$y=Ce^{-0.3x}$$ (con $C$ cualquier real; $C=0$ recupera la solución perdida $y=0$).</p></div>
        </div>
        <div class="final">$y=Ce^{-0.3x}$</div>`
      },
      {
        id: 's8e03', level: 1, type: 'func', v: 'x', ref: '7*exp(4*x)',
        q: H`Resuelva el PVI $\dfrac{dy}{dx}=4y$, $y(0)=7$.`,
        hint: H`La solución general de $y'=4y$ es $y=Ce^{4x}$; usa la condición inicial para hallar $C$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Hallar la solución general.</strong> $\dfrac{dy}{dx}=4y$ es separable: $\dfrac{dy}{y}=4\,dx \Rightarrow \ln|y|=4x+C_1 \Rightarrow y=Ce^{4x}$.</p></div>
        <div class="step"><p><strong>Aplicar la condición inicial.</strong> $y(0)=7 \Rightarrow Ce^{0}=7 \Rightarrow C=7$.</p></div>
        <div class="step"><p><strong>Escribir la solución particular.</strong> $y=7e^{4x}$.</p></div>
        </div>
        <div class="final">$y=7e^{4x}$</div>`
      },
      {
        id: 's8e04', level: 1, type: 'func', v: 'x', ref: '200*exp(-0.5*x)',
        q: H`Una sustancia se desintegra según $y'=-0.5y$, con $y(0)=200$. Halle $y(x)$.`,
        hint: H`Solución general $y=Ce^{-0.5x}$; usa la condición inicial.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Hallar la solución general.</strong> $y'=-0.5y$ es separable: $\dfrac{dy}{y}=-0.5\,dx \Rightarrow \ln|y|=-0.5x+C_1 \Rightarrow y=Ce^{-0.5x}$.</p></div>
        <div class="step"><p><strong>Aplicar la condición inicial.</strong> $y(0)=200 \Rightarrow C=200$.</p></div>
        <div class="step"><p><strong>Escribir la solución particular.</strong> $y=200e^{-0.5x}$.</p></div>
        </div>
        <div class="final">$y=200e^{-0.5x}$</div>`
      },
      {
        id: 's8e05', level: 1, type: 'choice',
        q: H`¿Cuál de las siguientes ecuaciones es de variables separables?`,
        options: [
          H`$\dfrac{dy}{dx}=x+y$`,
          H`$\dfrac{dy}{dx}=\dfrac{y}{x}$`,
          H`$\dfrac{dy}{dx}=x^2+y^2$`,
          H`$\dfrac{dy}{dx}=e^{x+y^2}$ sin poder factorizar como producto`
        ],
        correct: 1,
        hint: H`Busca cuál lado derecho puede escribirse como un producto $g(x)h(y)$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Recordar el criterio de separabilidad.</strong> Una ecuación $\dfrac{dy}{dx}=F(x,y)$ es separable si $F(x,y)$ puede escribirse como un producto $g(x)h(y)$.</p></div>
        <div class="step"><p><strong>Probar cada opción.</strong> $\dfrac{y}{x}=\dfrac{1}{x}\cdot y$: sí es un producto de una función de $x$ por una función de $y$ ($g(x)=1/x$, $h(y)=y$).</p></div>
        <div class="step"><p><strong>Descartar las opciones incorrectas.</strong> $x+y$ y $x^2+y^2$ son <em>sumas</em>, no productos, y no se factorizan como $g(x)h(y)$; $e^{x+y^2}=e^xe^{y^2}$ sí sería separable, pero el enunciado aclara que en esa opción no se puede factorizar de esa forma, así que se descarta.</p></div>
        </div>
        <div class="final">$\dfrac{dy}{dx}=\dfrac{y}{x}$ es separable, con $\dfrac{dy}{y}=\dfrac{dx}{x}$</div>`
      },
      {
        id: 's8e06', level: 1, type: 'choice',
        q: H`¿La ecuación $2xy\,dx+(x^2+3y^2)\,dy=0$ es exacta?`,
        options: [
          H`No, porque $M_y\neq N_x$`,
          H`Sí, porque $M_y=N_x=2x$`,
          H`No es aplicable el criterio porque $N$ depende de $y$`,
          H`Sí, pero solo si $x>0$`
        ],
        correct: 1,
        hint: H`Calcula $M_y$ y $N_x$ con $M=2xy$, $N=x^2+3y^2$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar $M$ y $N$.</strong> $M=2xy$, $N=x^2+3y^2$.</p></div>
        <div class="step"><p><strong>Calcular $M_y$ y $N_x$.</strong> $M_y=2x$ (derivando $M$ respecto de $y$, con $x$ constante). $N_x=2x$ (derivando $N$ respecto de $x$, con $y$ constante).</p></div>
        <div class="step"><p><strong>Aplicar el criterio.</strong> Como $M_y=N_x=2x$ para todo $(x,y)$, la ecuación es exacta.</p></div>
        <div class="step"><p><strong>Descartar las opciones incorrectas.</strong> No es cierto que $M_y\neq N_x$ (opción 1: falsa); el criterio sí es aplicable aunque $N$ dependa de $y$ (opción 3: falsa); la exactitud se cumple en todo el plano, no solo para $x>0$ (opción 4: falsa).</p></div>
        </div>
        <div class="final">Sí, es exacta, porque $M_y=N_x=2x$</div>`
      },
      {
        id: 's8e07', level: 1, type: 'num',
        q: H`Determine el valor de $a$ para que la ecuación $(axy)\,dx+(x^2+1)\,dy=0$ sea exacta.`,
        answer: '2',
        hint: H`Calcula $M_y$ y $N_x$ en función de $a$ e iguálalos.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar $M$ y $N$, y calcular $M_y$, $N_x$.</strong> $M=axy \Rightarrow M_y=ax$. $N=x^2+1 \Rightarrow N_x=2x$.</p></div>
        <div class="step"><p><strong>Imponer el criterio de exactitud.</strong> Se necesita $M_y=N_x$ para todo $x$: $$ax=2x$$</p></div>
        <div class="step"><p><strong>Despejar $a$.</strong> Dividiendo entre $x$ (para $x\neq 0$, y por continuidad para todo $x$): $a=2$.</p></div>
        </div>
        <div class="final">$a=2$</div>`
      },
      {
        id: 's8e08', level: 2, type: 'ode', order: 1, v: 'x',
        q: H`Resuelva por separación de variables $\dfrac{dy}{dx}=xy$. Use la constante $C$.`,
        res: 'yp-x*y', ref: 'C*exp(x^2/2)', consts: ['C'],
        hint: H`Separa $\dfrac{dy}{y}=x\,dx$ e integra; recuerda revisar la solución $y=0$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Separar variables.</strong> $\dfrac{dy}{dx}=xy=x\cdot y$, con $y\neq 0$: $$\frac{dy}{y}=x\,dx$$</p></div>
        <div class="step"><p><strong>Integrar ambos miembros.</strong> $$\int\frac{dy}{y}=\int x\,dx \Longrightarrow \ln|y|=\frac{x^2}{2}+C_1$$</p></div>
        <div class="step"><p><strong>Despejar $y$.</strong> Exponenciando y renombrando la constante: $$y=Ce^{x^2/2}$$</p></div>
        <div class="step"><p><strong>Revisar la solución perdida.</strong> $y=0$ también satisface la ecuación original ($0=x\cdot 0$); queda incluida en la familia general con $C=0$.</p></div>
        </div>
        <div class="final">$y=Ce^{x^2/2}$</div>`
      },
      {
        id: 's8e09', level: 2, type: 'func', v: 'x', ref: '2*exp(x^2/2)',
        q: H`Resuelva el PVI $\dfrac{dy}{dx}=xy$, $y(0)=2$.`,
        hint: H`Usa la solución general $y=Ce^{x^2/2}$ y sustituye la condición inicial.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Hallar la solución general.</strong> $\dfrac{dy}{dx}=xy$ se resuelve por separación de variables (como en el ejercicio anterior): $y=Ce^{x^2/2}$.</p></div>
        <div class="step"><p><strong>Aplicar la condición inicial.</strong> $y(0)=2 \Rightarrow Ce^{0}=2 \Rightarrow C=2$.</p></div>
        <div class="step"><p><strong>Escribir la solución particular.</strong> $y=2e^{x^2/2}$.</p></div>
        </div>
        <div class="final">$y=2e^{x^2/2}$</div>`
      },
      {
        id: 's8e10', level: 2, type: 'func', v: 'x', ref: '-sqrt(x^2+5)',
        q: H`Resuelva el PVI $\dfrac{dy}{dx}=\dfrac{x}{y}$, $y(2)=-3$.`,
        hint: H`Separa variables ($y\,dy=x\,dx$), integra, aplica la condición inicial y elige la rama del signo correcto.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Separar variables.</strong> $\dfrac{dy}{dx}=\dfrac{x}{y}$, con $y\neq 0$: $$y\,dy=x\,dx$$</p></div>
        <div class="step"><p><strong>Integrar ambos miembros.</strong> $$\int y\,dy=\int x\,dx \Longrightarrow \frac{y^2}{2}=\frac{x^2}{2}+C_1 \Longrightarrow y^2=x^2+C$$</p></div>
        <div class="step"><p><strong>Aplicar la condición inicial.</strong> $y(2)=-3 \Rightarrow (-3)^2=2^2+C \Rightarrow 9=4+C \Rightarrow C=5$. La relación implícita es $y^2=x^2+5$.</p></div>
        <div class="step"><p><strong>Elegir la rama correcta.</strong> Como $y(2)=-3<0$, se toma la raíz negativa: $y=-\sqrt{x^2+5}$.</p></div>
        <div class="step"><p><strong>Comprobar.</strong> $y(2)=-\sqrt{4+5}=-\sqrt{9}=-3$. ✓</p></div>
        </div>
        <div class="final">$y=-\sqrt{x^2+5}$</div>`
      },
      {
        id: 's8e11', level: 2, type: 'func', v: 'x', ref: '25+75*exp(-0.07*x)',
        q: H`Un objeto a $100°\text{C}$ se coloca en una habitación a $25°\text{C}$, con constante de enfriamiento $k=0.07$. Determine $T(t)$.`,
        hint: H`La solución general de $T'=-k(T-25)$ es $T=25+Ce^{-kt}$; usa $T(0)=100$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear y separar la ecuación.</strong> La ley de enfriamiento de Newton da $\dfrac{dT}{dt}=-0.07(T-25)$, que separando (con $T\neq 25$) es $\dfrac{dT}{T-25}=-0.07\,dt$.</p></div>
        <div class="step"><p><strong>Integrar.</strong> $\ln|T-25|=-0.07t+C_1 \Rightarrow T-25=Ce^{-0.07t} \Rightarrow T(t)=25+Ce^{-0.07t}$.</p></div>
        <div class="step"><p><strong>Aplicar la condición inicial $T(0)=100$.</strong> $25+C=100 \Rightarrow C=75$.</p></div>
        <div class="step"><p><strong>Escribir la solución particular.</strong> $T(t)=25+75e^{-0.07t}$.</p></div>
        </div>
        <div class="final">$T(t)=25+75e^{-0.07t}$</div>`
      },
      {
        id: 's8e12', level: 2, type: 'num',
        q: H`Para el enfriamiento del ejercicio anterior ($T(t)=25+75e^{-0.07t}$), determine el instante $t$ en que $T=40°\text{C}$. (Escriba el valor exacto, con $\ln$.)`,
        answer: 'ln(5)/0.07', tol: 0.01,
        hint: H`Sustituye $T=40$, despeja la exponencial y aplica logaritmo natural.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Sustituir $T=40$.</strong> $$40=25+75e^{-0.07t}$$</p></div>
        <div class="step"><p><strong>Aislar la exponencial.</strong> $$75e^{-0.07t}=15 \Rightarrow e^{-0.07t}=\frac{15}{75}=\frac{1}{5}$$</p></div>
        <div class="step"><p><strong>Aplicar logaritmo natural a ambos miembros.</strong> $$-0.07t=\ln\left(\frac{1}{5}\right)=-\ln 5$$</p></div>
        <div class="step"><p><strong>Despejar $t$.</strong> $$t=\frac{\ln 5}{0.07}\approx 22.99$$</p></div>
        </div>
        <div class="final">$t=\dfrac{\ln 5}{0.07}\approx 22.99$ minutos</div>`
      },
      {
        id: 's8e13', level: 2, type: 'func', v: 'x', ref: '10-5*exp(-0.02*x)',
        q: H`Un tanque de $200\,\text{L}$ recibe salmuera con concentración $0.05\,\text{kg/L}$ a razón de $4\,\text{L/min}$, con la mezcla saliendo a la misma razón. Si inicialmente hay $S(0)=5\,\text{kg}$ de sal, determine $S(t)$.`,
        hint: H`La ecuación es $S'=0.2-0.02S$, con solución general $S=10+Ce^{-0.02t}$; usa la condición inicial.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Plantear las razones de entrada y salida.</strong> Entra sal a razón $0.05\,\text{kg/L}\times 4\,\text{L/min}=0.2\,\text{kg/min}$ (constante). Con volumen constante $200\,\text{L}$, la concentración de salida es $S/200$, y sale a razón $\left(\dfrac{S}{200}\right)\times 4=0.02S\,\text{kg/min}$.</p></div>
        <div class="step"><p><strong>Escribir la ecuación diferencial.</strong> $$\frac{dS}{dt}=0.2-0.02S$$ Es autónoma, por lo tanto separable.</p></div>
        <div class="step"><p><strong>Resolver por separación de variables.</strong> $\dfrac{dS}{0.2-0.02S}=dt$; integrando (como en el ejemplo resuelto en la teoría), la solución general es $$S(t)=10+Ce^{-0.02t}$$</p></div>
        <div class="step"><p><strong>Aplicar la condición inicial $S(0)=5$.</strong> $$10+C=5 \Rightarrow C=-5$$</p></div>
        <div class="step"><p><strong>Escribir la solución particular.</strong> $S(t)=10-5e^{-0.02t}$. Como $10>0$ y $e^{-0.02t}\to 0$ cuando $t\to\infty$, $S(t)\to 10\,\text{kg}$ (la concentración de equilibrio).</p></div>
        </div>
        <div class="final">$S(t)=10-5e^{-0.02t}$</div>`
      },
      {
        id: 's8e14', level: 2, type: 'num',
        q: H`Con $S(t)=10-5e^{-0.02t}$ (ejercicio anterior), determine la cantidad de sal a los $t=50$ minutos. (Escriba el valor exacto, con $e$.)`,
        answer: '10-5*exp(-1)',
        hint: H`Evalúa $S(t)$ en $t=50$: el exponente queda $-0.02\times 50=-1$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Sustituir $t=50$ en $S(t)=10-5e^{-0.02t}$.</strong> El exponente es $-0.02\times 50=-1$: $$S(50)=10-5e^{-1}$$</p></div>
        <div class="step"><p><strong>Aproximar numéricamente.</strong> $e^{-1}\approx 0.3679$, así que $5e^{-1}\approx 1.84$, y $S(50)\approx 10-1.84\approx 8.16$.</p></div>
        </div>
        <div class="final">$S(50)=10-5e^{-1}\approx 8.16\,\text{kg}$</div>`
      },
      {
        id: 's8e15', level: 2, type: 'pot',
        q: H`Halle la función potencial $F(x,y)$ de la ecuación exacta $(3x^2+2y^2)\,dx+(4xy+6y^2)\,dy=0$ y escriba la solución general en la forma $F(x,y)=C$.`,
        M: '3*x^2+2*y^2', N: '4*x*y+6*y^2', ref: 'x^3+2*x*y^2+2*y^3',
        hint: H`Verifica primero $M_y=N_x$; luego integra $M$ respecto de $x$ y ajusta $g(y)$ usando $N$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Comprobar el criterio de exactitud.</strong> $M=3x^2+2y^2 \Rightarrow M_y=4y$. $N=4xy+6y^2 \Rightarrow N_x=4y$. Como $M_y=N_x$, la ecuación es exacta.</p></div>
        <div class="step"><p><strong>Integrar $M$ respecto de $x$.</strong> $$F(x,y)=\int(3x^2+2y^2)\,dx=x^3+2xy^2+g(y)$$</p></div>
        <div class="step"><p><strong>Derivar respecto de $y$ e igualar a $N$.</strong> $F_y=4xy+g'(y)$. Debe ser $F_y=N=4xy+6y^2$, así que $g'(y)=6y^2$ (no depende de $x$: buena señal).</p></div>
        <div class="step"><p><strong>Integrar $g'(y)$.</strong> $g(y)=2y^3$.</p></div>
        <div class="step"><p><strong>Escribir $F$ y la solución general.</strong> $F=x^3+2xy^2+2y^3$. Solución general: $x^3+2xy^2+2y^3=C$.</p></div>
        </div>
        <div class="final">$x^3+2xy^2+2y^3=C$</div>`
      },
      {
        id: 's8e16', level: 2, type: 'pot',
        q: H`Halle la función potencial de $(2xy+3)\,dx+(x^2-1)\,dy=0$ y escriba la solución general.`,
        M: '2*x*y+3', N: 'x^2-1', ref: 'x^2*y+3*x-y',
        hint: H`Este es exactamente el ejemplo resuelto en la teoría: sigue los mismos pasos.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Comprobar el criterio de exactitud.</strong> $M=2xy+3 \Rightarrow M_y=2x$. $N=x^2-1 \Rightarrow N_x=2x$. Como $M_y=N_x$, es exacta.</p></div>
        <div class="step"><p><strong>Integrar $M$ respecto de $x$.</strong> $$F(x,y)=\int(2xy+3)\,dx=x^2y+3x+g(y)$$</p></div>
        <div class="step"><p><strong>Derivar respecto de $y$ e igualar a $N$.</strong> $F_y=x^2+g'(y)=N=x^2-1 \Rightarrow g'(y)=-1$.</p></div>
        <div class="step"><p><strong>Integrar $g'(y)$.</strong> $g(y)=-y$.</p></div>
        <div class="step"><p><strong>Escribir $F$ y la solución general.</strong> $F=x^2y+3x-y$. Solución general: $x^2y+3x-y=C$.</p></div>
        </div>
        <div class="final">$x^2y+3x-y=C$</div>`
      },
      {
        id: 's8e17', level: 3, type: 'pot',
        q: H`Halle la función potencial $F(x,y)$ de la ecuación exacta $\left(y\cos x+2xe^{y}\right)dx+\left(\sin x+x^2e^{y}-1\right)dy=0$.`,
        M: 'y*cos(x)+2*x*exp(y)', N: 'sin(x)+x^2*exp(y)-1', ref: 'y*sin(x)+x^2*exp(y)-y',
        hint: H`Integra $M$ respecto de $x$ tratando $y$ como constante; después ajusta $g(y)$ usando $N$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Comprobar el criterio de exactitud.</strong> $M=y\cos x+2xe^y \Rightarrow M_y=\cos x+2xe^y$. $N=\sin x+x^2e^y-1 \Rightarrow N_x=\cos x+2xe^y$. Coinciden: es exacta.</p></div>
        <div class="step"><p><strong>Integrar $M$ respecto de $x$.</strong> $$F=\int(y\cos x+2xe^y)\,dx=y\sin x+x^2e^y+g(y)$$</p></div>
        <div class="step"><p><strong>Derivar respecto de $y$ e igualar a $N$.</strong> $F_y=\sin x+x^2e^y+g'(y)$. Igualando a $N=\sin x+x^2e^y-1$: $g'(y)=-1$ (no depende de $x$: buena señal).</p></div>
        <div class="step"><p><strong>Integrar $g'(y)$.</strong> $g(y)=-y$.</p></div>
        <div class="step"><p><strong>Escribir $F$.</strong> $F(x,y)=y\sin x+x^2e^y-y$; la solución general es $F(x,y)=C$.</p></div>
        </div>
        <div class="final">$F(x,y)=y\sin x+x^2e^y-y$</div>`
      },
      {
        id: 's8e18', level: 3, type: 'num',
        q: H`Para la ecuación exacta del ejercicio anterior, con condición inicial $y(0)=1$, determine el valor de la constante $C$ en la solución implícita $F(x,y)=C$.`,
        answer: '-1',
        hint: H`Sustituye $x=0$, $y=1$ en $F(x,y)=y\sin x+x^2e^y-y$.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Recuperar la función potencial.</strong> Del ejercicio anterior, $F(x,y)=y\sin x+x^2e^y-y$, y la solución general es $F(x,y)=C$.</p></div>
        <div class="step"><p><strong>Sustituir la condición inicial $x=0$, $y=1$.</strong> $$F(0,1)=1\cdot\sin 0+0^2\cdot e^{1}-1=0+0-1=-1$$</p></div>
        <div class="step"><p><strong>Concluir.</strong> $C=-1$, y la solución particular (implícita) es $y\sin x+x^2e^y-y=-1$.</p></div>
        </div>
        <div class="final">$C=-1$</div>`
      },
      {
        id: 's8e19', level: 3, type: 'func', v: 'x', ref: '-1+sqrt((x+1)^2+8)',
        q: H`Resuelva el problema de valor inicial $\dfrac{dy}{dx}=\dfrac{1+x}{1+y}$, $y(0)=2$.`,
        hint: H`Separa $(1+y)\,dy=(1+x)\,dx$, integra ambos miembros (quedan dos términos cuadráticos), usa la condición inicial y despeja $y$ con la fórmula cuadrática o completando cuadrados.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Separar variables.</strong> $\dfrac{dy}{dx}=\dfrac{1+x}{1+y}$ se separa como $$(1+y)\,dy=(1+x)\,dx$$</p></div>
        <div class="step"><p><strong>Integrar ambos miembros.</strong> $$\int(1+y)\,dy=\int(1+x)\,dx \Longrightarrow y+\frac{y^2}{2}=x+\frac{x^2}{2}+C$$</p></div>
        <div class="step"><p><strong>Aplicar la condición inicial $y(0)=2$.</strong> $$2+\frac{4}{2}=0+0+C \Rightarrow 2+2=C \Rightarrow C=4$$</p></div>
        <div class="step"><p><strong>Escribir la relación implícita como ecuación cuadrática en $y$.</strong> Multiplicando por $2$: $y^2+2y=x^2+2x+8$, es decir $$y^2+2y-\left(x^2+2x+8\right)=0$$</p></div>
        <div class="step"><p><strong>Resolver para $y$ con la fórmula cuadrática.</strong> Con $a=1$, $b=2$, $c=-(x^2+2x+8)$: $$y=\frac{-2+\sqrt{4+4(x^2+2x+8)}}{2}=-1+\sqrt{1+x^2+2x+8}=-1+\sqrt{(x+1)^2+8}$$ Se toma la raíz $+$ porque $y(0)=2>-1$.</p></div>
        <div class="step"><p><strong>Comprobar.</strong> $y(0)=-1+\sqrt{1+8}=-1+3=2$. ✓</p></div>
        </div>
        <div class="final">$y=-1+\sqrt{(x+1)^2+8}$</div>`
      },
      {
        id: 's8e20', level: 3, type: 'choice',
        q: H`Al resolver $\dfrac{dy}{dx}=(y-1)e^{x}$ por separación de variables (dividiendo entre $y-1$), ¿qué solución constante podría perderse en el proceso?`,
        options: [
          H`$y=0$`,
          H`$y=1$`,
          H`$y=-1$`,
          H`No se pierde ninguna solución`
        ],
        correct: 1,
        hint: H`La solución que se pierde es la que anula el factor por el que se divide.`,
        solution: H`<div class="steps">
        <div class="step"><p><strong>Identificar la expresión que se divide.</strong> Para separar $\dfrac{dy}{dx}=(y-1)e^{x}$ se divide entre $h(y)=y-1$, lo que exige $y\neq 1$.</p></div>
        <div class="step"><p><strong>Comprobar si la función constante que anula ese factor es solución.</strong> Con $y=1$: $y'=0$ (derivada de una constante) y el lado derecho es $(1-1)e^x=0\cdot e^x=0$. Ambos miembros coinciden.</p></div>
        <div class="step"><p><strong>Concluir.</strong> $y=1$ es solución de la ecuación original y se pierde en el paso de dividir entre $y-1$.</p></div>
        <div class="step"><p><strong>Descartar las opciones incorrectas.</strong> $y=0$ y $y=-1$ no anulan el factor $y-1$ (dan $-1$ y $-2$, respectivamente) y en general no satisfacen la ecuación; sí se pierde una solución, así que "ninguna" también es incorrecta.</p></div>
        </div>
        <div class="final">La solución que se pierde es $y=1$</div>`
      }
    ]
  });
})();
