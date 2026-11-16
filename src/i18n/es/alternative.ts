import type { Dict } from '../en';

export const alternative: Dict['alternative'] = {
  meta: {
    title: 'DegenView vs TradingView: alternativa gratis y open source',
    description:
      'DegenView vs TradingView: alternativa de escritorio gratis y de código abierto con Pine Script v6 local, listas ilimitadas, alertas y replay. macOS, Windows, Linux.',
    breadcrumb: 'Alternativa a TradingView',
  },

  hero: {
    eyebrow: 'Alternativa a TradingView',
    title: 'La alternativa a TradingView <span class="gradient-text block">gratuita y de código abierto</span>',
    lead: 'Una app de escritorio para cripto, acciones y mercados de predicción, con Pine Script que se ejecuta en tu propio equipo.',
    chips: ['Código abierto · GPL-3.0', 'Sin cuenta', 'macOS · Windows · Linux'],
    priceCard: {
      forever: 'para siempre',
      download: 'Descargar gratis',
      note: 'Sin cuenta. Sin tarjeta de crédito. Sin cuenta regresiva de prueba.',
      platformsAria: 'Disponible para macOS, Windows y Linux',
    },
  },

  ladder: {
    eyebrow: 'precios',
    title: '¿Cuánto quieres <span class="gradient-text">pagar?</span>',
    lead: 'TradingView tiene una escalera. DegenView tiene un piso, y es gratis.',
    freeBadge: 'Gratis',
    perMonthForever: 'al mes, para siempre',
    planName: 'TradingView {name}',
    perMonthBilledAnnually: 'al mes, facturado anualmente',
    perYear: '≈ {amount} al año',
    note: 'Los precios son los de TradingView, en euros, tal como figuran en su <a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="nofollow noopener noreferrer">página de precios<span class="sr-only"> (se abre en una pestaña nueva)</span></a> en {date}. Cambian y varían según la región, así que compruébalos allí antes de decidir.',
  },

  freeVsFree: {
    eyebrow: 'gratis vs gratis',
    title: 'Lo que obtienes <span class="gradient-text">sin pagar</span>',
    lead: 'Ambas son gratuitas para empezar. Solo una sigue siéndolo.',
    degenview: {
      subtitle: 'Gratis y de código abierto',
      // Order matters: one entry per row.
      items: [
        'Listas de seguimiento ilimitadas',
        'Tantos indicadores como aguante tu CPU',
        'Diseños con varios gráficos',
        'Alertas de precio sin límite por plan',
        'Motor de Pine Script v6 que se ejecuta en tu equipo',
        'Reproducción de barras, trading simulado y seguimiento de carteras',
        'Código abierto (GPL-3.0)',
        'No necesitas cuenta',
      ],
      download: 'Descargar gratis',
    },
    tradingview: {
      subtitle: 'Plan gratuito (Basic)',
      // Order matters: the ✓ / – / ✗ marker of each row is set in the page code.
      items: [
        '2 indicadores por gráfico',
        '1 gráfico por pestaña',
        '1 lista de seguimiento, hasta 30 símbolos',
        '3 alertas de precio activas',
        'Pine Script se ejecuta en los servidores de TradingView',
        'Apps web, de escritorio y móviles',
        'Enorme comunidad y biblioteca de scripts',
        'Código cerrado',
      ],
      plans: 'Ver los planes de TradingView',
    },
    sr: {
      included: 'Incluido: ',
      limited: 'Limitado: ',
      notAvailable: 'No disponible: ',
      opensNewTab: ' (se abre en una pestaña nueva)',
    },
    legendLimit: 'Límite del plan gratuito',
    checked: 'Cifras de TradingView verificadas por última vez el {date}',
  },

  better: {
    eyebrow: 'para ser justos',
    title: 'Lo que TradingView <span class="gradient-text">sigue haciendo mejor</span>',
    lead: 'Preferimos que elijas la herramienta adecuada y no la que más ruido hace.',
    // Order matters: icons are set in the page code.
    items: [
      { title: 'Apps en todas partes', description: 'Apps web y móviles: tus gráficos te siguen a cualquier navegador o teléfono.' },
      { title: 'Mercados más amplios', description: 'Acciones, futuros, forex, bonos y datos económicos más allá de cripto, acciones de EE. UU. y mercados de predicción.' },
      { title: 'Una gran comunidad', description: 'Ideas publicadas y una biblioteca pública de scripts de otras personas.' },
      { title: 'Opera desde el gráfico', description: 'Coloca órdenes a través de brókeres conectados sin salir del gráfico.' },
    ],
    closing:
      '¿Dependes de eso? Mantén TradingView junto a DegenView. ¿Quieres sobre todo gráficos rápidos, indicadores, alertas y reproducción sin un plan que gestionar? Esta es la gratuita.',
  },

  comingFrom: {
    eyebrow: 'la mudanza',
    title: 'Si vienes de <span class="gradient-text">TradingView</span>',
    items: [
      { title: 'Pine Script v6', description: 'Pega tu script en Pine Studio y ejecútalo en local, con depurador paso a paso y perfilador.' },
      { title: 'Herramientas conocidas', description: 'Líneas de tendencia, retrocesos de Fibonacci, una regla y 18 tipos de gráfico, de velas a Renko y Kagi.' },
      { title: 'Más que gráficos', description: 'Reproducción de barras, trading simulado, seguimiento de carteras, alertas con webhooks y un servidor MCP opcional para asistentes de IA.' },
    ],
  },

  cta: {
    title: 'Gratis hoy. <span class="gradient-text block">Gratis para siempre.</span>',
    lead: 'Sin cuenta, sin prueba, sin trampa. macOS, Windows y Linux.',
    disclaimer:
      'DegenView es un proyecto independiente y no está afiliado a TradingView, ni cuenta con su respaldo o patrocinio. TradingView y Pine Script son marcas comerciales de TradingView, Inc., mencionadas aquí solo para describir de qué es alternativa DegenView y con qué es compatible.',
  },
};
