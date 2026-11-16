import type { Dict } from '../en';

export const faq: Dict['faq'] = {
  meta: {
    title: 'FAQ de DegenView – Alternativa a TradingView gratis',
    description:
      'Respuestas sobre DegenView, la alternativa a TradingView gratis y de código abierto: cuentas, Pine Script, datos de acciones, plataformas y primer inicio.',
  },
  breadcrumbs: { home: 'Inicio', faq: 'FAQ' },
  hero: {
    eyebrow: 'faq',
    title: 'Preguntas, <span class="gradient-text">respondidas</span>',
    lead: 'Todo lo que la gente pregunta antes de descargar. Si no está aquí, pregunta en GitHub.',
    searchLabel: 'Buscar entre las preguntas',
    /** {count} = number of questions. */
    searchPlaceholder: 'Buscar entre {count} preguntas',
    /** Result count while searching, by plural category ({count} = matches). Add the categories your language needs (zero, one, two, few, many, other). */
    found: {
      one: '{count} pregunta encontrada',
      many: '{count} preguntas encontradas',
      other: '{count} preguntas encontradas',
    } as Record<string, string>,
  },
  nav: {
    label: 'Temas',
    heading: 'Temas',
  },
  groups: {
    basics: { title: 'Lo básico', intro: 'Cuánto cuesta, quién está detrás y qué no es.' },
    scripts: { title: 'Pine Script e IA', intro: 'Cómo ejecutar scripts y adónde pueden ir ellos y tus gráficos.' },
    data: { title: 'Datos y privacidad', intro: 'De dónde salen los precios y qué sabemos de ti (muy poco).' },
    install: { title: 'Instalación y plataformas', intro: 'Qué funciona dónde y qué hacer en el primer inicio.' },
  },
  /** Alt text of a topic illustration. {title} = topic title. */
  groupArtLabel: 'Ilustración de {title}',
  /** Alt text of an answer illustration. {question} = the question. */
  itemArtLabel: 'Ilustración: {question}',
  empty:
    'Ninguna pregunta coincide. <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">Pregunta en GitHub<span class="sr-only"> (se abre en una pestaña nueva)</span></a> y la añadiremos.',
  cta: {
    title: '¿Sigues con <span class="gradient-text">una duda?</span>',
    lead: 'Abre un issue y la responderemos. O simplemente descarga DegenView y compruébalo tú mismo.',
    download: 'Descargar gratis',
    ask: 'Preguntar en GitHub',
  },
  items: {
    free: {
      q: '¿DegenView es realmente gratis?',
      a: 'Sí. DegenView es gratuito y de código abierto bajo la GPL-3.0. No hay niveles de pago ni funciones bloqueadas.',
    },
    alternative: {
      q: '¿DegenView es una alternativa gratuita a TradingView?',
      a: 'Sí. DegenView es una app de escritorio gratuita y de código abierto para cripto, acciones y mercados de predicción, con diseños multigráfico, un motor local de Pine Script v6, alertas, reproducción de barras y seguimiento de carteras. Es independiente de TradingView y no reemplaza todo lo que TradingView ofrece.',
      links: ['Ver la comparación'],
    },
    openSource: {
      q: '¿DegenView es de código abierto?',
      a: 'Sí. El código fuente es público en GitHub bajo la licencia GPL-3.0-only, y las versiones se compilan con un flujo de trabajo público.',
    },
    account: {
      q: '¿Necesito una cuenta?',
      a: 'No. No hay nada que registrar. Las alertas, las carteras, el trading simulado y Pine Script se ejecutan localmente en tu equipo.',
    },
    affiliation: {
      q: '¿Está afiliado a TradingView o a los proveedores de datos?',
      a: 'No. DegenView es un proyecto independiente. Pine Script y TradingView son marcas comerciales de TradingView, Inc. Pine Script es el lenguaje de TradingView, y DegenView ejecuta su propio motor para los scripts escritos en él. Las demás marcas pertenecen a sus respectivos dueños.',
    },
    runPine: {
      q: '¿Puedo ejecutar mis scripts de Pine de TradingView en DegenView?',
      a: 'Sí. DegenView ejecuta su propio motor de Pine Script v6, en local. Es una implementación independiente, así que los scripts muy exóticos pueden comportarse distinto que en TradingView.',
    },
    pinePrivacy: {
      q: '¿Adónde van mis scripts de Pine?',
      a: 'A ninguna parte por defecto. Los scripts se ejecutan en tu equipo y el código se queda ahí, a menos que decidas enviarlo tú a otro lugar, por ejemplo a un proveedor de IA que configures para el asistente.',
    },
    aiAssistant: {
      q: '¿Puedo conectar un asistente de IA?',
      a: 'Sí. DegenView tiene un servidor MCP opcional, para que los asistentes de IA y las herramientas de automatización puedan trabajar con tus gráficos, alertas y scripts de Pine. Está desactivado por defecto y tú decides qué puede hacer cada conexión.',
    },
    stockData: {
      q: '¿Cómo obtengo datos de acciones?',
      a: 'Las acciones de EE. UU. vienen del feed IEX gratuito de Alpaca. Solo añade tus claves de API gratuitas de Alpaca en Ajustes. Cripto, mercados de predicción e índices de CoinMarketCap no necesitan ninguna clave.',
      links: ['Ver todas las fuentes de datos'],
    },
    dataCollection: {
      q: '¿DegenView recopila mis datos?',
      a: 'La app de escritorio no tiene analítica ni telemetría y no necesita cuenta. Este sitio web solo instala cookies de analítica si las aceptas. La política de privacidad enumera todos los servicios a los que se conecta la app.',
      links: ['Leer la política de privacidad'],
    },
    offline: {
      q: '¿DegenView funciona sin conexión?',
      a: 'La app, tus scripts y tus datos viven en tu equipo. Los precios en vivo siguen viniendo de los proveedores de datos, así que necesitas conexión a internet para los datos de mercado.',
    },
    platforms: {
      q: '¿Qué plataformas son compatibles?',
      a: 'macOS (Apple Silicon e Intel), Windows (x64 y ARM64) y Linux (x64 y ARM64, como tarball o Flatpak). Algunos extras son solo para macOS: pestañas y ventanas nativas, y alertas en segundo plano.',
      links: ['Ir a las descargas'],
    },
    smartscreen: {
      q: 'Windows muestra una advertencia de SmartScreen. ¿Es seguro?',
      a: 'La compilación de Windows aún no está firmada, por lo que SmartScreen puede avisar en el primer inicio. El código fuente y el flujo de compilación son públicos en GitHub, y cada versión incluye un checksum SHA-256 que puedes comparar. Elige “Más información” y luego “Ejecutar de todas formas”. La app de macOS sí está firmada.',
      links: ['Verifica tu descarga'],
    },
    autoUpdate: {
      q: '¿DegenView se actualiza solo?',
      a: 'Sí en macOS, en Windows y con el tarball de Linux en una carpeta de tu propiedad. Un paquete Flatpak no tiene remoto, así que no se actualiza solo.',
    },
    homebrew: {
      q: '¿Puedo instalar DegenView con Homebrew?',
      a: 'Sí, en macOS: brew install --cask degenview/degenview/degenview@rc. Instala la misma app firmada en Aplicaciones desde el tap de DegenView. El nombre sin @rc es para la última versión final y existe una vez que se publica una. La app se actualiza sola, así que brew upgrade la omite.',
      links: ['Ir a las descargas'],
    },
    whichDownload: {
      q: '¿Qué descarga debo elegir?',
      a: 'En un Mac, menú Apple, Acerca de este Mac: “Apple M…” significa Apple Silicon, “Intel” significa Intel. En Windows, elige x64 salvo que tengas un equipo con Windows en ARM. En Linux, el tarball sirve para la mayoría de las distros y el Flatpak para las más antiguas.',
      links: ['Ir a las descargas'],
    },
  },
};
