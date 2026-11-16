import type { Dict } from '../en';

export const pineStudio: Dict['pineStudio'] = {
  meta: {
    title: 'Editor de Pine Script, depurador y perfilador | DegenView',
    description:
      'Pine Studio es el editor gratuito de Pine Script v6 de DegenView para escritorio: depurador paso a paso, perfilador, asistente de IA y temas. Local, sin cuenta.',
    breadcrumbHome: 'Inicio',
    breadcrumbName: 'Pine Studio',
  },

  /** Labels of the floating section nav, keyed by section id. */
  sectionNav: {
    write: 'Escribir',
    debugger: 'Depurador',
    profiler: 'Perfilador',
    ai: 'Asistente de IA',
    themes: 'Temas',
    local: 'Local',
    workflow: 'Flujo',
    differences: 'vs TradingView',
    faq: 'FAQ',
    download: 'Descargar',
  },

  /** JSON-LD text (SoftwareApplication). */
  jsonLd: {
    name: 'DegenView Pine Studio',
    applicationSubCategory: 'Editor de Pine Script',
    featureList: [
      'Motor de Pine Script v6 que se ejecuta en local',
      'Gráfico de vista previa en vivo con controles de entrada',
      'Depurador paso a paso con puntos de interrupción, inspección de variables y pila de llamadas',
      'Perfilador por línea',
      'Asistente de IA con los modos Preguntar, Planificar y Editar',
      'Servidor MCP para que otros asistentes de IA puedan leer, editar y aplicar scripts',
      'Temas de editor personalizables',
    ],
  },

  hero: {
    // {home} = link to the home page
    badge:
      'Pine Studio <span class="mx-2 text-line" aria-hidden="true">·</span> parte de <a href="{home}" class="ml-1 font-semibold text-accent-text hover:underline">DegenView</a>',
    title: 'El editor de Pine Script con un <span class="gradient-text block">depurador de verdad.</span>',
    lead: 'Escribe Pine Script v6, detente en cualquier línea, perfila las partes lentas y recibe ayuda de IA. Se ejecuta en tu equipo, con datos en vivo. Gratis, de código abierto y sin cuenta.',
    docsLink: 'Lee la documentación de Pine Studio',
    chips: ['Pine Script v6', 'Se ejecuta 100% en local', 'macOS · Windows · Linux', 'Código abierto · GPL-3.0'],
    screenshotAlt: 'Pine Studio con el script Pivot Levels en el editor, un gráfico de BTC/USDT en vivo con sus niveles, las entradas del script y el depurador en pausa en una línea',
  },

  write: {
    eyebrow: 'Pine Studio',
    title: 'Un espacio de trabajo de verdad para <span class="gradient-text">Pine Script v6</span>',
    lead: 'Una biblioteca de scripts, un editor y un gráfico de vista previa en vivo en una sola pestaña. Los scripts se ejecutan mientras escribes, con datos de mercado reales.',
    // Same order as the icons in the page: engine, preview, problems, logs, strategy, editor.
    items: [
      {
        title: 'Un motor real de Pine v6, en local',
        body: 'Indicadores, estrategias y bibliotecas se ejecutan en tu equipo. Sin servidor, sin subidas, sin cuenta.',
      },
      {
        title: 'Un gráfico de vista previa en vivo',
        body: 'Se vuelve a ejecutar mientras escribes, en cualquier mercado de cripto o acciones. Cada input() se convierte en un control.',
      },
      {
        title: 'Diagnósticos que señalan la línea',
        body: 'Los errores y advertencias, incluidos los fallos en ejecución, llegan a una pestaña de problemas con ir a la línea.',
      },
      {
        title: 'Un panel de registros para log.*()',
        body: 'Busca por texto o regex, filtra por nivel y salta de un mensaje a su línea o barra.',
      },
      {
        title: 'Estrategias con informe',
        body: 'Cifras de backtest, curva de capital y lista completa de operaciones.',
      },
      {
        title: 'Un editor que ayuda',
        body: 'Autocompletado, ayuda de firmas, ir a la definición, renombrar, cursores múltiples y marcas de cambios.',
      },
    ],
    examples: 'Viene con nueve scripts de ejemplo, desde un cruce de EMA hasta una tabla de estadísticas.',
    examplesLink: 'Cómo escribir scripts en Pine Studio',
  },

  debugger: {
    eyebrow: 'Depurador paso a paso',
    title: 'Deja de depurar Pine con <span class="gradient-text">log.info()</span>',
    lead: 'Pon un punto de interrupción, ejecuta sobre las barras de tu gráfico y detente donde importa. Lee cada variable y avanza por el código como en un IDE de verdad.',
    screenshotAlt: 'Pine Studio en pausa en la línea 14 de un Pine Script, con valores en línea, el panel de variables y los controles de paso',
    // Same order as the icons in the page: breakpoint, step, variables, jump.
    items: [
      {
        title: 'Puntos de interrupción con cabeza',
        body: 'Haz clic en el margen o pulsa F9. Añade una condición, un número de activaciones o un logpoint.',
      },
      {
        title: 'Avanza como en cualquier IDE',
        body: 'Avanza sobre, dentro y fuera, o una barra entera cada vez. Los valores aparecen en línea.',
      },
      {
        title: 'Mira cada variable',
        body: 'Locales y globales con sus tipos y los cambios resaltados. Añade inspecciones como close - open.',
      },
      {
        title: 'Salta a cualquier barra',
        body: 'Detente en una barra o en una fecha y lee la pila de llamadas. Reinicia con un clic.',
      },
    ],
    note: 'El depurador se ejecuta sobre una copia congelada de las barras del gráfico de vista previa, así que nada se mueve mientras miras.',
    docsLink: 'Documentación del depurador',
  },

  profiler: {
    eyebrow: 'Perfilador',
    title: 'Encuentra la línea lenta, <span class="gradient-text">no solo el script lento.</span>',
    lead: 'Activa el cronómetro y DegenView mide tu script sobre las barras del gráfico de vista previa, con una barra y un porcentaje junto a cada línea.',
    bullets: [
      'Tiempo y porcentaje por línea, junto a tu código',
      'Líneas, bloques y funciones más pesados, ordenados',
      'Haz clic en una fila para saltar a la línea',
    ],
    docsLink: 'Cómo mide el perfilador',
    screenshotAlt: 'Perfilador de Pine Studio: una barra de tiempo y un porcentaje junto a cada línea de código y una lista ordenada de las líneas más pesadas',
  },

  ai: {
    eyebrow: 'Asistente de IA',
    title: 'Edita una copia. <span class="gradient-text">Tú apruebas cada cambio.</span>',
    lead: 'Describe lo que quieres. El asistente lee, compila y perfila tu script, y propone cambios que revisas antes de que toquen tu editor.',
    // {name} = the mode name below
    modeAlt: 'El modo {name} del asistente de Pine Studio',
    // Same order as the screenshots: pine-ai-chat, pine-ai-plan, pine-ai-proposal.
    modes: [
      { name: 'Preguntar', body: 'Preguntas sobre tu script. Lee, compila y mide, pero nunca edita.' },
      { name: 'Planificar', body: 'Investiga y propone un plan de hasta doce pasos. Apruébalo, revísalo o descártalo.' },
      { name: 'Editar', body: 'Propone cambios como un diff. Aplícalos todos o revísalos uno por uno.' },
    ],
    review: {
      screenshotAlt: 'La hoja de revisión: cinco cambios propuestos con casillas por cambio y un diff, listos para aplicarse en un solo paso',
      title: 'Revísalo como un pull request',
      bullets: [
        'Un diff con una casilla por cambio',
        'Un solo paso de deshacer. Aplicar automáticamente es opcional',
        'Trae tu propia clave: OpenAI, Anthropic o servidores compatibles',
      ],
      note: 'Tu script va directo al proveedor que elijas, sin ningún servidor de DegenView en medio. Le pagas directamente a él. Las claves se guardan en el llavero del sistema en macOS y Linux.',
      docsLink: 'Documentación del asistente de IA',
    },
    mcp: {
      eyebrow: 'Servidor MCP',
      title: 'O maneja Pine Studio desde <span class="gradient-text">tu propio asistente</span>',
      lead: 'El servidor MCP opcional de DegenView abre Pine Studio a cualquier asistente de IA compatible con MCP: leer scripts, compilar, corregir diagnósticos y poner el resultado en un gráfico.',
      setupLink: 'Configura el servidor MCP',
      moreLink: 'Más sobre MCP',
      bullets: [
        'Lee, compila y edita borradores de scripts, sin sobrescrituras silenciosas',
        'Aplica un script guardado a un gráfico, ajústalo o quítalo',
        'Desactivado por defecto, local y con token. Guardar requiere tu aprobación',
      ],
    },
  },

  themes: {
    eyebrow: 'Temas del editor',
    title: 'Haz que el editor sea <span class="gradient-text">tuyo</span>',
    lead: 'Sigue la app, o elige Dark, Light o Dracula. Luego cambia cada color, la fuente y el interlineado.',
    // Same order as the screenshots: dark, light, dracula.
    items: [
      { name: 'Dark', note: 'Integrado', alt: 'Editor de Pine Script con el tema Dark' },
      { name: 'Light', note: 'Integrado', alt: 'Editor de Pine Script con el tema Light' },
      { name: 'Dracula', note: 'Integrado', alt: 'Editor de Pine Script con el tema Dracula' },
    ],
    custom: {
      title: 'Crea tu propio tema',
      bullets: [
        'Edita sintaxis, editor y tipografía con vista previa en vivo',
        'Cualquier fuente monoespaciada, de 9 a 32 pt',
        'Exporta y comparte temas como archivos .degenview-theme.json',
      ],
      docsLink: 'Temas del editor en la documentación',
      screenshotAlt: 'El editor de temas para un tema personalizado llamado Night shift, con las pestañas Syntax, Editor y Typography',
    },
  },

  local: {
    eyebrow: 'Tuyo para siempre',
    title: 'Tus scripts <span class="gradient-text">se quedan en tu equipo</span>',
    lead: 'Pine Studio evalúa los scripts dentro del propio proceso. Tu código es un archivo <span class="font-mono text-base">.pine</span> normal en una carpeta de tu propiedad.',
    // Same order as the icons in the page: shield, user, code.
    items: [
      {
        title: 'No se sube nada',
        body: 'Los scripts se ejecutan en local. El texto del código solo sale de tu equipo si se lo pides al asistente de IA, y va al proveedor que elegiste.',
      },
      { title: 'Sin cuenta', body: 'Nada que registrar. Descarga DegenView, abre Pine Studio y escribe.' },
      { title: 'Código abierto', body: 'GPL-3.0 en GitHub. Lee cómo funciona el motor o compílalo tú mismo.' },
    ],
    supportsTitle: 'Qué ejecuta el motor',
    supports: [
      'Indicadores, estrategias y bibliotecas',
      'Trazados, rellenos, formas y colores de fondo',
      'Etiquetas, líneas, cajas y tablas',
      'ta.*, math.*, str.* y color.*',
      'Arrays, mapas y matrices',
      'Tipos y métodos definidos por el usuario',
      'request.security y temporalidades',
      'alert() y alertcondition()',
      'Controles input.*',
      'log.*()',
      'varip',
      'import de tus propias bibliotecas',
    ],
    note: 'Una implementación independiente de Pine Script v6 que te avisa cuando algo no es compatible, en vez de fallar en silencio.',
    noteLink: 'Qué admite Pine',
  },

  workflow: {
    eyebrow: 'De la idea a la alerta',
    title: 'Un solo ciclo, <span class="gradient-text">de principio a fin</span>',
    // {topic} = the step's `topic`, for the screen-reader-only part of the link
    readMore: 'Leer más<span class="sr-only"> sobre {topic}</span>',
    // Same order as the docs links in the page: writing-scripts, debugger-profiler, using-scripts, script-alerts.
    // `topic` is the lowercase form of the title, used in the sr-only link text.
    steps: [
      {
        title: 'Escribe',
        topic: 'escribir',
        body: 'Parte de uno de los nueve ejemplos o de un script en blanco y mira cómo el gráfico de vista previa sigue tu código.',
      },
      {
        title: 'Depura',
        topic: 'depurar',
        body: 'Detente en la línea que falla, lee las variables, perfila la parte lenta y pregunta al asistente.',
      },
      {
        title: 'Añade a un gráfico',
        topic: 'añadir a un gráfico',
        body: 'Aplica el script desde el menú +. Ajusta sus entradas y su estilo, o desactívalo.',
      },
      {
        title: 'Recibe alertas',
        topic: 'recibir alertas',
        body: 'Convierte las llamadas a alert() en alertas de script que te avisan en una barra en vivo o envían datos a tu webhook.',
      },
    ],
  },

  differences: {
    eyebrow: 'Compatibilidad',
    title: 'En qué se diferencia de <span class="gradient-text">TradingView</span>',
    lead: 'Pine Studio es una implementación independiente de Pine Script v6 con su propio motor y sus propios datos, así que el mismo script puede comportarse distinto.',
    // Table column headings (desktop) and the labels repeated inside each row on mobile.
    colTradingView: 'TradingView',
    colDegenView: 'DegenView Pine Studio',
    mobileTradingView: 'TradingView',
    mobileDegenView: 'Pine Studio',
    // What differs from TradingView. Keep in step with docs.degenview.app/pine/language.
    rows: [
      {
        area: 'Versiones del lenguaje',
        tradingView: 'Aún ejecuta scripts escritos para versiones anteriores de Pine.',
        degenView: 'Solo Pine Script v6. Los scripts antiguos se rechazan con un error claro, así que migra primero.',
      },
      {
        area: 'Dónde se ejecutan los scripts',
        tradingView: 'En los servidores de TradingView, vinculados a tu cuenta.',
        degenView: 'En tu equipo. Archivos .pine normales, sin cuenta, sin subir nada.',
      },
      {
        area: 'Mercados y temporalidades',
        tradingView: 'Acciones, futuros, forex, bonos, cripto y más, con temporalidades intradía.',
        degenView: 'Cripto, acciones y ETF de EE. UU. y mercados de predicción, en velas de 1H, 1D, 1W, 1M, 3M y 1Y. Sin temporalidades de minutos.',
      },
      {
        area: 'Feeds de datos en scripts',
        tradingView: 'Fundamentales, resultados, dividendos, splits, datos económicos y más mediante request.*.',
        degenView:
          'request.security y request.security_lower_tf funcionan. Los feeds earnings, dividends, splits, economic, financial, seed y quandl devuelven na con una advertencia. request.footprint aproxima los datos por tick con velas más finas.',
      },
      {
        area: 'Backtests de estrategias',
        tradingView: 'El emulador de bróker propio de TradingView, con margen incluido.',
        degenView:
          'Un emulador aparte, sin modelo de margen ni llamadas de margen. calc_on_order_fills y el bar magnifier se ignoran con una advertencia. Espera cifras distintas.',
      },
      {
        area: 'Zonas horarias en acciones',
        tradingView: 'Los valores de calendario siguen la zona horaria de la bolsa.',
        degenView: 'Los valores de hora y día de la semana usan UTC en acciones.',
      },
      {
        area: 'Estilo de texto',
        tradingView: 'Elige familia tipográfica, negrita y cursiva en etiquetas, cajas y tablas.',
        degenView: 'Se acepta, pero se ignora.',
      },
      {
        area: 'Compartir',
        tradingView: 'Publica scripts y explora una biblioteca de la comunidad.',
        degenView:
          'Sin publicación ni biblioteca integrada. El enlace Community scripts abre tradingview.com/scripts en tu navegador; pega lo que quieras ejecutar.',
      },
    ],
    cards: [
      {
        title: 'No compatible significa una advertencia, no una sorpresa',
        body: 'Lo no compatible devuelve na o se ignora, con una advertencia numerada en la pestaña de problemas.',
      },
      {
        title: 'Comprueba los resultados antes de fiarte',
        body: 'Las fuentes de datos y el emulador de estrategias difieren, así que los trazados y backtests pueden diferir. Revisa la licencia de un script de la comunidad antes de reutilizarlo.',
      },
    ],
    supportedLink: 'La lista completa de lo que admite Pine Studio',
    compareLink: 'DegenView vs TradingView',
    trademark: 'Pine Script y TradingView son marcas comerciales de TradingView, Inc. DegenView no está afiliado a TradingView ni cuenta con su respaldo.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pine Studio, <span class="gradient-text">respondido</span>',
    // {faqHref} = general FAQ page, {issuesHref} = GitHub issues
    more: 'Más en la <a class="font-medium text-accent-text underline underline-offset-4" href="{faqHref}">FAQ general</a>, o <a class="font-medium text-accent-text underline underline-offset-4" href="{issuesHref}" target="_blank" rel="noopener noreferrer">pregunta en GitHub<span class="sr-only"> (se abre en una pestaña nueva)</span></a>.',
    // Plain text: also used as the FAQPage JSON-LD.
    items: [
      {
        q: '¿Qué es Pine Studio?',
        a: 'Pine Studio es el espacio de trabajo de Pine Script dentro de DegenView, el panel de mercados de escritorio gratuito y de código abierto. Es una biblioteca de scripts, un editor de código y un gráfico de vista previa en vivo en una sola pestaña, con un depurador paso a paso, un perfilador, un asistente de IA y temas de editor.',
      },
      {
        q: '¿DegenView ejecuta scripts de Pine Script v6 de TradingView?',
        a: 'DegenView ejecuta su propio motor de Pine Script v6 en tu equipo, así que puedes pegar un script en Pine Studio y ejecutarlo. Es una implementación independiente, no la de TradingView, por lo que los scripts muy exóticos pueden comportarse distinto, y algunas funciones, como ciertos feeds de datos request.*, devuelven na con una advertencia. Pine Script v6 es la única versión compatible.',
      },
      {
        q: '¿Puedo depurar un Pine Script con puntos de interrupción?',
        a: 'Sí. Pon puntos de interrupción en el margen, con condiciones opcionales, número de activaciones y logpoints, y luego avanza sobre, dentro y fuera de funciones o ejecuta una barra entera cada vez. Las variables locales y globales, las expresiones inspeccionadas y la pila de llamadas se actualizan en cada parada. El depurador se ejecuta sobre una copia congelada de las barras del gráfico de vista previa.',
      },
      {
        q: '¿Hay un perfilador de Pine Script?',
        a: 'Sí. Activa el perfilador y DegenView mide el tiempo de tu script sobre las barras del gráfico de vista previa. Dibuja una barra y un porcentaje junto a cada línea y ordena las líneas, bloques y funciones más pesados, para que veas qué corregir primero.',
      },
      {
        q: '¿El asistente de IA envía mi código a algún sitio?',
        a: 'Solo si lo usas, y solo al proveedor que elijas. Traes tu propia clave de API de OpenAI, Anthropic o un servidor compatible con OpenAI como OpenRouter, Ollama o LM Studio. DegenView no tiene ningún servidor en medio y le pagas directamente a tu proveedor. El asistente trabaja sobre una copia privada de tu script y nunca cambia tu editor hasta que aplicas un cambio.',
      },
      {
        q: '¿Puedo hacer vibe coding de scripts de Pine con mi propio asistente de IA?',
        a: 'Sí, mediante el servidor MCP opcional de DegenView. Describe la idea a un asistente compatible con MCP y podrá listar, leer y compilar tus scripts, editar el borrador de un script, leer diagnósticos, entradas e informes, y aplicar un script guardado a un gráfico. El servidor está desactivado por defecto, solo escucha en tu equipo y requiere un token, y tú eliges qué puede hacer cada asistente. Por defecto, guardar sobre un script espera tu aprobación en la app.',
      },
      {
        q: '¿Necesito una cuenta o conexión a internet?',
        a: 'No necesitas cuenta. Tus scripts son archivos .pine normales en tu equipo. Los datos de mercado del gráfico de vista previa vienen de proveedores públicos, así que necesitas conexión para ver precios en vivo, pero no para editar un script.',
      },
      {
        q: '¿Pine Studio es gratis?',
        a: 'Sí. Pine Studio forma parte de DegenView, que es gratuito y de código abierto bajo la licencia GPL-3.0, para macOS, Windows y Linux.',
      },
    ],
  },

  download: {
    title: 'Escribe Pine. <span class="gradient-text block">Depúralo como se debe.</span>',
    lead: 'Pine Studio viene con DegenView. Gratis, de código abierto y sin nada que registrar.',
    docsLink: 'Documentación de Pine Studio',
    allDownloadsLink: 'Todas las descargas',
    compareLink: 'Comparar con TradingView',
  },
};
