export const pineStudio = {
  meta: {
    title: 'Pine Script Editor, Debugger & Profiler | DegenView',
    description:
      'Pine Studio is DegenView’s free Pine Script v6 editor for desktop: a step debugger, profiler, AI assistant and custom editor themes. Runs locally, no account.',
    breadcrumbHome: 'Home',
    breadcrumbName: 'Pine Studio',
  },

  /** Labels of the floating section nav, keyed by section id. */
  sectionNav: {
    write: 'Write',
    debugger: 'Debugger',
    profiler: 'Profiler',
    ai: 'AI assistant',
    themes: 'Themes',
    local: 'Local',
    workflow: 'Workflow',
    differences: 'vs TradingView',
    faq: 'FAQ',
    download: 'Download',
  },

  /** JSON-LD text (SoftwareApplication). */
  jsonLd: {
    name: 'DegenView Pine Studio',
    applicationSubCategory: 'Pine Script editor',
    featureList: [
      'Pine Script v6 engine that runs locally',
      'Live preview chart with input controls',
      'Step debugger with breakpoints, watches and call stack',
      'Per-line profiler',
      'Strategy backtesting with equity curve, trade list and Monte Carlo simulation',
      'AI assistant with Ask, Plan and Edit modes',
      'MCP server so other AI assistants can read, edit and apply scripts',
      'Customizable editor themes',
    ],
  },

  hero: {
    // {home} = link to the home page
    badge:
      'Pine Studio <span class="mx-2 text-line" aria-hidden="true">·</span> part of <a href="{home}" class="ml-1 font-semibold text-accent-text hover:underline">DegenView</a>',
    title: 'The Pine Script editor with a <span class="gradient-text block">real debugger.</span>',
    lead: 'Write Pine Script v6, break on any line, profile the slow parts and get AI help. Runs on your machine, on live data. Free, open source, no account.',
    docsLink: 'Read the Pine Studio docs',
    chips: ['Pine Script v6', 'Runs 100% locally', 'macOS · Windows · Linux', 'Open source · GPL-3.0'],
    screenshotAlt: "Pine Studio with the Pivot Levels script in the editor, a live BTC/USDT chart with its levels, the script's inputs and the debugger paused on a line",
  },

  write: {
    eyebrow: 'Pine Studio',
    title: 'A proper workspace for <span class="gradient-text">Pine Script v6</span>',
    lead: 'A script library, an editor and a live preview chart in one tab. Scripts run as you type, on real market data.',
    // Same order as the icons in the page: engine, preview, problems, logs, strategy, editor.
    items: [
      {
        title: 'A real Pine v6 engine, locally',
        body: 'Indicators, strategies and libraries run on your machine. No server, no upload, no account.',
      },
      {
        title: 'A live preview chart',
        body: 'Re-runs as you type, on any crypto or stock market. Every input() becomes a control.',
      },
      {
        title: 'Diagnostics that point at the line',
        body: 'Errors and warnings, including run-time failures, land in a Problems tab with go-to-line.',
      },
      {
        title: 'A Logs pane for log.*()',
        body: 'Search by text or regex, filter by level, and jump from a message to its line or bar.',
      },
      {
        title: 'Strategies with a report',
        body: 'Backtest figures, an equity curve and a full trade list.',
      },
      {
        title: 'An editor that helps',
        body: 'Completion, signature help, go to definition, rename, multiple cursors and change marks.',
      },
    ],
    examples: 'Starts with nine example scripts, from an EMA cross to a stats table.',
    examplesLink: 'How to write scripts in Pine Studio',
  },

  debugger: {
    eyebrow: 'Step debugger',
    title: 'Stop debugging Pine with <span class="gradient-text">log.info()</span>',
    lead: 'Set a breakpoint, run over your chart’s bars and stop where it matters. Read every variable and step through code like in a real IDE.',
    screenshotAlt: 'Pine Studio paused on line 14 of a Pine Script, with inline values, the variables panel and the step controls',
    // Same order as the icons in the page: breakpoint, step, variables, jump.
    items: [
      {
        title: 'Breakpoints that think',
        body: 'Click the gutter or press F9. Add a condition, a hit count or a logpoint.',
      },
      {
        title: 'Step like in any IDE',
        body: 'Step over, into and out, or a whole bar at a time. Values show inline.',
      },
      {
        title: 'See every variable',
        body: 'Locals and globals with types, changes highlighted. Add watches like close - open.',
      },
      {
        title: 'Jump to any bar',
        body: 'Stop at a bar or a date and read the call stack. Restart in one click.',
      },
    ],
    note: 'The debugger runs on a frozen copy of the preview chart’s bars, so nothing moves while you look.',
    docsLink: 'Debugger docs',
  },

  profiler: {
    eyebrow: 'Profiler',
    title: 'Find the slow line, <span class="gradient-text">not just the slow script.</span>',
    lead: 'Turn on the stopwatch and DegenView times your script over the preview chart’s bars, with a bar and a share beside each line.',
    bullets: [
      'Per-line time and share, next to your code',
      'Hottest lines, blocks and functions, ranked',
      'Click a row to jump to the line',
    ],
    docsLink: 'How the profiler measures',
    screenshotAlt: 'Pine Studio profiler: a time bar and share beside each line of code and a ranked list of the hottest lines',
  },

  ai: {
    eyebrow: 'AI assistant',
    title: 'It edits a copy. <span class="gradient-text">You approve every change.</span>',
    lead: 'Describe what you want. The assistant reads, compiles and profiles your script, then proposes changes you review before anything touches your editor.',
    // {name} = the mode name below
    modeAlt: 'The {name} mode of the Pine Studio assistant',
    // Same order as the screenshots: pine-ai-chat, pine-ai-plan, pine-ai-proposal.
    modes: [
      { name: 'Ask', body: 'Questions about your script. It reads, compiles and measures, but never edits.' },
      { name: 'Plan', body: 'It investigates, then proposes a plan of up to twelve steps. Approve, revise or discard.' },
      { name: 'Edit', body: 'It proposes changes as a diff. Apply all, or review one by one.' },
    ],
    review: {
      screenshotAlt: 'The review sheet: five proposed changes with per-change checkboxes and a diff, ready to apply as one step',
      title: 'Review it like a pull request',
      bullets: [
        'A diff with a checkbox per change',
        'One undo step. Auto-apply is optional',
        'Bring your own key: OpenAI, Anthropic or compatible servers',
      ],
      note: 'Your script goes straight to the provider you pick, with no DegenView server in between. You pay them directly. Keys live in the system keychain on macOS and Linux.',
      docsLink: 'AI assistant docs',
    },
    mcp: {
      eyebrow: 'MCP server',
      title: 'Or drive Pine Studio from <span class="gradient-text">your own assistant</span>',
      lead: 'DegenView’s optional MCP server opens Pine Studio to any MCP-capable AI assistant: read scripts, compile, fix diagnostics and put the result on a chart.',
      setupLink: 'Set up the MCP server',
      moreLink: 'More on MCP',
      bullets: [
        'Read, compile and edit script drafts, with no silent overwrites',
        'Apply a saved script to a chart, tune or remove it',
        'Off by default, local, token-protected. Saves need your approval',
      ],
    },
  },

  themes: {
    eyebrow: 'Editor themes',
    title: 'Make the editor <span class="gradient-text">yours</span>',
    lead: 'Follow the app, or pick Dark, Light or Dracula. Then change every color, the font and the line height.',
    // Same order as the screenshots: dark, light, dracula.
    items: [
      { name: 'Dark', note: 'Built-in', alt: 'Pine Script editor in the Dark theme' },
      { name: 'Light', note: 'Built-in', alt: 'Pine Script editor in the Light theme' },
      { name: 'Dracula', note: 'Built-in', alt: 'Pine Script editor in the Dracula theme' },
    ],
    custom: {
      title: 'Build your own theme',
      bullets: [
        'Edit syntax, editor and typography with a live preview',
        'Any monospaced font, 9 to 32 pt',
        'Export and share themes as .degenview-theme.json files',
      ],
      docsLink: 'Editor themes in the docs',
      screenshotAlt: 'The theme editor for a custom theme named Night shift, with Syntax, Editor and Typography tabs',
    },
  },

  local: {
    eyebrow: 'Yours to keep',
    title: 'Your scripts <span class="gradient-text">stay on your machine</span>',
    lead: 'Pine Studio evaluates scripts in-process. Your source is a plain <span class="font-mono text-base">.pine</span> file in a folder you own.',
    // Same order as the icons in the page: shield, user, code.
    items: [
      {
        title: 'Nothing is uploaded',
        body: 'Scripts run locally. Source text only leaves your computer if you ask the AI assistant, and then goes to your chosen provider.',
      },
      { title: 'No account', body: 'Nothing to sign up for. Download DegenView, open Pine Studio and write.' },
      { title: 'Open source', body: 'GPL-3.0 on GitHub. Read how the engine works, or build it yourself.' },
    ],
    supportsTitle: 'What the engine runs',
    supports: [
      'Indicators, strategies and libraries',
      'Plots, fills, shapes and background colors',
      'Labels, lines, boxes and tables',
      'ta.*, math.*, str.* and color.*',
      'Arrays, maps and matrices',
      'User-defined types and methods',
      'request.security and timeframes',
      'alert() and alertcondition()',
      'input.* controls',
      'log.*()',
      'varip',
      'import of your own libraries',
    ],
    note: 'An independent Pine Script v6 implementation that tells you when something is unsupported instead of failing silently.',
    noteLink: 'What Pine supports',
  },

  workflow: {
    eyebrow: 'From idea to alert',
    title: 'One loop, <span class="gradient-text">start to finish</span>',
    // {topic} = the step's `topic`, for the screen-reader-only part of the link
    readMore: 'Read more<span class="sr-only"> about {topic}</span>',
    // Same order as the docs links in the page: writing-scripts, debugger-profiler, using-scripts, script-alerts.
    // `topic` is the lowercase form of the title, used in the sr-only link text.
    steps: [
      {
        title: 'Write',
        topic: 'write',
        body: 'Start from one of nine examples or a blank script and watch the preview chart follow your code.',
      },
      {
        title: 'Debug',
        topic: 'debug',
        body: 'Break on the line that misbehaves, read variables, profile the slow part and ask the assistant.',
      },
      {
        title: 'Add to a chart',
        topic: 'add to a chart',
        body: 'Apply the script from the + menu. Tune its inputs and style, or turn it off.',
      },
      {
        title: 'Get alerted',
        topic: 'get alerted',
        body: 'Turn alert() calls into script alerts that notify you on a live bar, or post to your own webhook.',
      },
    ],
  },

  differences: {
    eyebrow: 'Compatibility',
    title: 'How it differs from <span class="gradient-text">TradingView</span>',
    lead: 'Pine Studio is an independent Pine Script v6 implementation with its own engine and data, so the same script can behave differently.',
    // Table column headings (desktop) and the labels repeated inside each row on mobile.
    colTradingView: 'TradingView',
    colDegenView: 'DegenView Pine Studio',
    mobileTradingView: 'TradingView',
    mobileDegenView: 'Pine Studio',
    // What differs from TradingView. Keep in step with docs.degenview.app/pine/language.
    rows: [
      {
        area: 'Language versions',
        tradingView: 'Still runs scripts written for older versions of Pine.',
        degenView: 'Pine Script v6 only. Older scripts are rejected with a clear error, so migrate them first.',
      },
      {
        area: 'Where scripts run',
        tradingView: 'On TradingView’s servers, tied to your account.',
        degenView: 'On your computer. Plain .pine files, no account, nothing uploaded.',
      },
      {
        area: 'Markets and timeframes',
        tradingView: 'Stocks, futures, forex, bonds, crypto and more, with intraday timeframes.',
        degenView: 'Crypto, US stocks and ETFs, and prediction markets, in 1H, 1D, 1W, 1M, 3M and 1Y candles. No minute timeframes.',
      },
      {
        area: 'Data feeds in scripts',
        tradingView: 'Fundamentals, earnings, dividends, splits, economic data and more through request.*.',
        degenView:
          'request.security and request.security_lower_tf work. Earnings, dividends, splits, economic, financial, seed and quandl feeds return na with a warning. request.footprint approximates tick data from finer candles.',
      },
      {
        area: 'Strategy backtests',
        tradingView: 'TradingView’s own broker emulator, including margin.',
        degenView:
          'A separate emulator with no margin model or margin calls. calc_on_order_fills and the bar magnifier are ignored with a warning. Expect different numbers.',
      },
      {
        area: 'Time zones on stocks',
        tradingView: 'Calendar values follow the exchange’s time zone.',
        degenView: 'Hour and day-of-week values use UTC on stocks.',
      },
      {
        area: 'Text styling',
        tradingView: 'Choose font family, bold and italic on labels, boxes and tables.',
        degenView: 'Accepted, but ignored.',
      },
      {
        area: 'Sharing',
        tradingView: 'Publish scripts and browse a community library.',
        degenView:
          'No publishing and no built-in library. The Community scripts link opens tradingview.com/scripts in your browser; paste what you want to run.',
      },
    ],
    cards: [
      {
        title: 'Unsupported means a warning, not a surprise',
        body: 'Unsupported features return na or are ignored, with a numbered warning in the Problems tab.',
      },
      {
        title: 'Check results before you rely on them',
        body: 'Data sources and the strategy emulator differ, so plots and backtests can differ. Check a community script’s license before you reuse it.',
      },
    ],
    supportedLink: 'The full list of what Pine Studio supports',
    compareLink: 'DegenView vs TradingView',
    trademark: 'Pine Script and TradingView are trademarks of TradingView, Inc. DegenView is not affiliated with or endorsed by TradingView.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pine Studio, <span class="gradient-text">answered</span>',
    // {faqHref} = general FAQ page, {issuesHref} = GitHub issues
    more: 'More in the <a class="font-medium text-accent-text underline underline-offset-4" href="{faqHref}">general FAQ</a>, or <a class="font-medium text-accent-text underline underline-offset-4" href="{issuesHref}" target="_blank" rel="noopener noreferrer">ask on GitHub<span class="sr-only"> (opens in a new tab)</span></a>.',
    // Plain text: also used as the FAQPage JSON-LD.
    items: [
      {
        q: 'What is Pine Studio?',
        a: 'Pine Studio is the Pine Script workspace inside DegenView, the free and open source desktop market dashboard. It is a script library, a code editor and a live preview chart in one tab, with a step debugger, a profiler, an AI assistant and editor themes.',
      },
      {
        q: 'Does DegenView run Pine Script v6 scripts from TradingView?',
        a: 'DegenView runs its own Pine Script v6 engine on your computer, so you can paste a script into Pine Studio and run it. It is an independent implementation, not TradingView’s, so very exotic scripts can behave differently, and a few features, such as some request.* data feeds, return na with a warning. Pine Script v6 is the only supported version.',
      },
      {
        q: 'Can I debug a Pine Script with breakpoints?',
        a: 'Yes. Set breakpoints in the gutter, with optional conditions, hit counts and logpoints, then step over, into and out of functions or step a whole bar at a time. Locals, globals, watch expressions and the call stack update at every stop. The debugger runs on a frozen copy of the preview chart’s bars.',
      },
      {
        q: 'Is there a Pine Script profiler?',
        a: 'Yes. Turn on the profiler and DegenView times your script over the preview chart’s bars. It draws a bar and a share beside each line and ranks the hottest lines, blocks and functions, so you can see what to fix first.',
      },
      {
        q: 'Can I backtest a strategy?',
        a: 'Yes. A Pine strategy places simulated trades on the chart’s candles, and the Report tab shows its figures, equity curve and trade list. A Monte Carlo simulation then draws your closed trades at random, repeats allowed, to show how far the result could move if the wins and losses had come out differently. Backtests use candles only, with no margin model, so they are a way to study a strategy, not a promise of results.',
      },
      {
        q: 'Does the AI assistant send my code anywhere?',
        a: 'Only if you use it, and only to the provider you choose. You bring your own API key for OpenAI, Anthropic or an OpenAI-compatible server such as OpenRouter, Ollama or LM Studio. DegenView has no server in between, and you pay your provider directly. The assistant works on a private copy of your script and never changes your editor until you apply a change.',
      },
      {
        q: 'Can I vibe-code Pine scripts with my own AI assistant?',
        a: 'Yes, through DegenView’s optional MCP server. Describe the idea to an MCP-capable assistant and it can list, read and compile your scripts, edit a script’s draft, read diagnostics, inputs and reports, and apply a saved script to a chart. The server is off by default, listens only on your machine and needs a token, and you choose what each assistant may do. By default, saving over a script waits for your approval in the app.',
      },
      {
        q: 'Do I need an account, or an internet connection?',
        a: 'No account. Your scripts are plain .pine files on your computer. Market data for the preview chart comes from public providers, so you need a connection to see live prices, but not to edit a script.',
      },
      {
        q: 'Is Pine Studio free?',
        a: 'Yes. Pine Studio is part of DegenView, which is free and open source under the GPL-3.0 license, for macOS, Windows and Linux.',
      },
    ],
  },

  download: {
    title: 'Write Pine. <span class="gradient-text block">Debug it properly.</span>',
    lead: 'Pine Studio comes with DegenView. Free, open source, and nothing to sign up for.',
    docsLink: 'Pine Studio docs',
    allDownloadsLink: 'All downloads',
    compareLink: 'Compare with TradingView',
  },
};
