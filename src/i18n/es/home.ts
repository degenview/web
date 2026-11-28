import type { Dict } from '../en';

export const home: Dict['home'] = {
  meta: {
    title: 'DegenView – Alternativa a TradingView gratis y open source',
    description:
      'Alternativa a TradingView gratis y de código abierto para escritorio: varios gráficos, Pine Script v6 local, alertas, replay y carteras. macOS, Windows y Linux.',
  },

  jsonLd: {
    alternateNames: ['DegenView – alternativa a TradingView de código abierto', 'DegenView Charts'],
  },

  hero: {
    eyebrow: 'Gratis y de código abierto',
    eyebrowLink: 'Alternativa a TradingView',
    // Features TradingView paywalls. The first one is the static, no-JS headline.
    phrases: ['listas de seguimiento', 'indicadores ilimitados', 'diseños multigráfico', 'alertas ilimitadas', 'más de 30 símbolos', 'varios dibujos'],
    // Headline = headlineBefore + rotating phrase + headlineMiddle + headlineEmphasis (gradient).
    headlineBefore: 'Aquí,',
    headlineMiddle: 'no son',
    headlineEmphasis: 'funciones premium.',
    lead: 'La alternativa a TradingView gratuita y de código abierto para tu escritorio: cripto, acciones y mercados de predicción en diseños con varios gráficos, con Pine Script local, alertas y reproducción de barras. Sin cuenta, y se ejecuta en tu equipo.',
    screenshotAlt: 'Panel de DegenView con varios gráficos en vivo en una cuadrícula',
  },

  // Labels around the quotes in src/data/testimonials.ts (the quotes themselves are verbatim and never translated).
  testimonials: {
    eyebrow: 'opiniones',
    heading: 'Lo que dice <span class="gradient-text">la gente</span>',
    author: 'Opinión de un usuario',
    tags: { debugger: 'Depurador', pine: 'Pine Script', impression: 'Primera impresión' },
  },

  sources: {
    heading: 'Datos de las fuentes que ya usas',
  },

  features: {
    heading: 'Todo lo que un panel de mercados <span class="gradient-text">debería tener</span>',
    eyebrow: 'funciones',
    markets: {
      eyebrow: 'Mercados y datos en vivo',
      title: 'Todos los mercados, una pantalla.',
      blurb:
        'Busca en Binance, Coinbase, OKX, Kraken, Bybit, Gate.io, MEXC, CoinGecko y DEXScreener a la vez, añade acciones de EE. UU. y grafica Polymarket y Kalshi como probabilidades.',
      bullets: [
        'Precios en vivo de Binance, OKX, Kraken, Bybit, Gate.io, MEXC y Coinbase',
        'Acciones con el feed IEX gratuito de Alpaca',
        'Sin clave de API en casi todas las fuentes',
      ],
      alt: 'DegenView con gráficos de BTC, ETH y SOL y un gráfico de probabilidad de Polymarket en un mismo diseño multigráfico',
    },
    'pine-script': {
      eyebrow: 'Motor local de Pine Script v6',
      title: 'Escribe Pine Script. Ejecútalo en local.',
      blurb:
        'Escribe scripts compatibles con TradingView y ejecútalos en tu equipo. Sin cuenta, y tu código nunca sale de tu dispositivo.',
      bullets: [
        'Vibe coding con tu asistente de IA vía MCP',
        'Depurador paso a paso con puntos de interrupción',
        'Perfilador integrado: ve dónde pierde tiempo tu script',
        'Backtesting de estrategias con curva de capital y simulación Monte Carlo',
      ],
      alt: 'Pine Studio de DegenView con un editor de Pine Script y un gráfico de vista previa en vivo',
      linkLabel: 'Descubre Pine Studio',
    },
    mcp: {
      eyebrow: 'Servidor MCP',
      title: 'Deja que la IA trabaje tus gráficos.',
      blurb:
        'Conecta un asistente de IA a DegenView mediante MCP. Di “dibuja soporte y resistencia” y míralo aparecer en tu gráfico en vivo.',
      bullets: [
        'Añade gráficos e indicadores',
        'Crea, edita y pausa alertas de precio',
        'Lee y edita tus scripts de Pine',
      ],
      alt: 'Un asistente de IA en una terminal dibujando niveles de soporte y resistencia en un gráfico de DegenView mediante MCP',
    },
    portfolio: {
      eyebrow: 'Seguimiento de carteras',
      title: 'Varias carteras. P&L real.',
      blurb:
        'Lleva tantas carteras como quieras, con libro de transacciones y contabilidad de costo promedio ponderado.',
      bullets: [
        'Asignación, variación de 24 h, P&L realizado y no realizado',
        'Informes en USD, EUR, GBP, JPY, CHF o BTC',
        'Importa y exporta CSV, también de CoinMarketCap',
      ],
      alt: 'Resumen de cartera de DegenView con gráfico de valor, dona de asignación, tarjetas de P&L y principales posiciones',
    },
    'paper-trading': {
      eyebrow: 'Trading simulado',
      title: 'Dinero ficticio, gráficos reales.',
      blurb:
        'Un simulador local y persistente con órdenes de mercado, límite y stop y seguimiento de posición neta. Las órdenes simuladas nunca tocan un exchange real.',
      bullets: [
        'Costo promedio ponderado por posición',
        'Marcadores de órdenes y posiciones en el gráfico',
        'Sobrevive a los reinicios, todo en tu dispositivo',
      ],
      alt: 'Trading simulado en DegenView con una posición larga de BTC marcada en el gráfico y la tabla de posiciones debajo',
    },
    replay: {
      eyebrow: 'Reproducción de barras',
      title: 'Rebobina el mercado, barra a barra.',
      blurb:
        'Elige cualquier momento del pasado y reprodúcelo a tu ritmo, sin ver el futuro, en todos los gráficos a la vez.',
      bullets: [
        'Empieza en cualquier vela o fecha y hora exactas',
        'Un reloj compartido sincroniza todos los gráficos',
        'Practica entradas con el ticket de trading simulado',
      ],
      alt: 'Controles de reproducción de barras con una línea de tiempo y un selector de velocidad sobre un gráfico histórico',
    },
  },

  // Cards under "and while you're here". A trailing * marks the title that carries `note`.
  extras: {
    eyebrow: 'y ya que estás aquí',
    heading: 'El resto de <span class="gradient-text">lo bueno</span>',
    intro: 'No todas las funciones merecen una captura. Estas merecieron una ilustración.',
    illustrationAria: 'Ilustración de {title}',
    'no-account': {
      tag: 'Privacidad',
      title: 'Sin cuenta. Sin registro.*',
      text: 'Abre la app y úsala. No hay correo que verificar, ni prueba que iniciar, ni un “¡bienvenido de nuevo!” que cerrar.',
      note: 'Alpaca es la excepción: sus datos gratuitos de acciones de EE. UU. requieren una cuenta de Alpaca y tus propias claves de API. Esa es su regla, no la nuestra.',
    },
    watchlists: {
      tag: 'Listas',
      title: 'Listas de seguimiento ilimitadas',
      text: 'Haz todas las que quieras. “Mejora tu plan para añadir otra lista” nunca fue una función.',
    },
    tools: {
      tag: 'Dibujo',
      title: 'Las herramientas de gráficos que ya conoces',
      text: 'La caja de herramientas de dibujo que los usuarios de TradingView llevan en los dedos, sin la tabla comparativa de planes.',
    },
    indicators: {
      tag: 'Indicadores',
      title: 'Tantos indicadores como aguante tu CPU',
      text: 'Volumen, RSI, EMA, Bandas de Bollinger, Supertrend y tus propios scripts de Pine. Sigue apilándolos hasta que tus ventiladores presenten una queja.',
    },
    alerts: {
      tag: 'Alertas',
      title: 'Alertas de precio',
      text: 'Una app de mercados que te avisa cuando se mueve el precio. Revolucionario, ya lo sabemos.',
    },
    webhooks: {
      tag: 'Webhooks',
      title: 'Alertas con webhook',
      text: 'Las alertas de precio y las llamadas a alert() de Pine pueden llamar a un webhook que configures. Conéctalas a un bot, a Discord o a lo que más te guste.',
    },
    ai: {
      tag: 'Pine',
      title: 'Ayuda de IA para Pine Script',
      text: 'Un asistente de programación integrado para tus scripts. Él escribe el primer borrador, tú te llevas el mérito.',
    },
    icloud: {
      tag: 'macOS',
      title: 'Sincronización con iCloud en macOS',
      text: 'Actívala y tu configuración te sigue entre tus Mac a través de tu propio iCloud, no de un servidor nuestro.',
    },
  },

  download: {
    heading: 'Consigue DegenView. <span class="gradient-text block">Es gratis.</span>',
    // {version} is replaced with the release tag (rendered in monospace).
    latest: 'Última versión {version}. Sin cuenta, sin prueba, sin trampa.',
    languages: 'La app habla inglés, español, alemán, ruso y chino simplificado.',
    allDownloads: 'Todas las descargas',
    faq: 'FAQ',
    freeForever: 'Gratis para siempre. Si se gana un lugar en tu pantalla:',
  },

  // Text inside the inline SVG illustrations (SVG text does not wrap: keep these short).
  // Also used by the FAQ illustrations (free, shield, smartscreen).
  illustrations: {
    noAccount: { email: 'Correo', password: 'Contraseña', cta: 'Solo ábrela' },
    watchlists: { title: 'Lista 7', newButton: '+ Nueva' },
    indicators: { load: 'carga', indicators: 'indicadores' },
    alerts: { crossedAbove: 'Cruzó por encima de 76,000' },
    ai: { suggestion: 'Añadir alerta RSI' },
    free: { forever: 'para siempre', noAccount: 'Sin cuenta' },
    shield: { noAnalytics: 'Sin analítica', noTelemetry: 'Sin telemetría', noAccount: 'Sin cuenta' },
    smartscreen: { title: 'Windows protegió su PC', moreInfo: 'Más información', runAnyway: 'Ejecutar' },
  },
};
