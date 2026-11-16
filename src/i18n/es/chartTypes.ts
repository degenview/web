import type { Dict } from '../en';

export const chartTypes: Dict['chartTypes'] = {
  eyebrow: 'tipos de gráfico',
  title: 'Las velas son <span class="gradient-text">solo el comienzo</span>',
  // {count} = number of chart types
  lead: '{count} tipos de gráfico, todos a un clic. Elige tu veneno.',
  // {name} = the chart type's name
  exampleAlt: 'Ejemplo de gráfico de {name}',
  previous: 'Tipo de gráfico anterior',
  next: 'Tipo de gráfico siguiente',
  pause: 'Pausar reproducción automática',
  play: 'Iniciar reproducción automática',
  /** One entry per chart type, keyed by id (the page draws the matching illustration). Order follows the app's picker. */
  items: {
    candles: { name: 'Velas', desc: 'El clásico: apertura, máximo, mínimo y cierre en una sola forma de cuerpo y mechas.' },
    hollowCandles: { name: 'Velas huecas', desc: 'Las velas alcistas van huecas y las bajistas rellenas, así el impulso se lee de un vistazo.' },
    bars: { name: 'Barras', desc: 'Una línea vertical de rango con una marca para la apertura a la izquierda y el cierre a la derecha.' },
    highLowBars: { name: 'Barras máx-mín', desc: 'Cada barra abarca solo del máximo al mínimo. Rango puro, sin opinar sobre el cierre.' },
    volumeCandles: { name: 'Velas de volumen', desc: 'Velas cuyo ancho crece con el volumen operado, para que destaquen las barras con más peso.' },
    heikinAshi: { name: 'Heikin Ashi', desc: 'Velas promediadas que suavizan el ruido y hacen más fácil seguir las tendencias.' },
    line: { name: 'Línea', desc: 'Los precios de cierre unidos en una línea limpia.' },
    lineWithMarkers: { name: 'Línea con marcadores', desc: 'La misma línea, con un punto en cada cierre.' },
    stepLine: { name: 'Línea escalonada', desc: 'Mantiene cada cierre plano hasta el siguiente, así ves exactamente cuándo cambió el precio.' },
    area: { name: 'Área', desc: 'Una línea con todo lo que queda debajo relleno.' },
    hlcArea: { name: 'Área HLC', desc: 'El rango entre máximo y mínimo como una banda alrededor de la línea de cierre.' },
    baseline: { name: 'Línea base', desc: 'Verde por encima de un nivel de referencia, rojo por debajo.' },
    columns: { name: 'Columnas', desc: 'Los precios de cierre como barras desde la base, teñidas según la dirección.' },
    renko: { name: 'Renko', desc: 'Ladrillos de tamaño fijo que solo aparecen cuando el precio se mueve lo suficiente. Sin movimiento, sin ladrillo.' },
    kagi: { name: 'Kagi', desc: 'Líneas verticales unidas por pasos cortos, que cambian de dirección solo ante una reversión relevante.' },
    lineBreak: { name: 'Ruptura de línea', desc: 'Se forma un bloque nuevo solo cuando el precio rompe el rango reciente, lo que filtra el ruido.' },
    pointAndFigure: { name: 'Punto y figura', desc: 'Columnas de X y O para los precios que suben y bajan, sin eje de tiempo.' },
    range: { name: 'Rango', desc: 'Cada barra cubre el mismo rango de precio, así que un mercado tranquilo simplemente dibuja menos barras.' },
  },
};
