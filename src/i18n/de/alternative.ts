import type { Dict } from '../en';

export const alternative: Dict['alternative'] = {
  meta: {
    title: 'DegenView vs. TradingView: kostenlos und Open Source',
    description:
      'DegenView vs. TradingView: die kostenlose Open-Source-Alternative für den Desktop mit lokalem Pine Script v6, unbegrenzten Watchlists, Alarmen und Replay.',
    breadcrumb: 'TradingView-Alternative',
  },

  hero: {
    eyebrow: 'TradingView-Alternative',
    title: 'Die kostenlose Open-Source-<span class="gradient-text block">TradingView-Alternative</span>',
    lead: 'Eine Desktop-App für Krypto, Aktien und Prognosemärkte, mit Pine Script, das auf deinem eigenen Rechner läuft.',
    chips: ['Open Source · GPL-3.0', 'Kein Konto', 'macOS · Windows · Linux'],
    priceCard: {
      forever: 'für immer',
      download: 'Kostenlos herunterladen',
      note: 'Kein Konto. Keine Kreditkarte. Keine Testphase.',
      platformsAria: 'Verfügbar für macOS, Windows und Linux',
    },
  },

  ladder: {
    eyebrow: 'Preise',
    title: 'Wie viel willst du <span class="gradient-text">bezahlen?</span>',
    lead: 'TradingView hat eine Preisleiter. DegenView hat einen Boden, und der ist kostenlos.',
    freeBadge: 'Kostenlos',
    perMonthForever: 'pro Monat, für immer',
    planName: 'TradingView {name}',
    perMonthBilledAnnually: 'pro Monat, jährlich abgerechnet',
    perYear: '≈ {amount} im Jahr',
    note: 'Die Preise sind die von TradingView, in Euro, wie auf der <a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="nofollow noopener noreferrer">Preisseite<span class="sr-only"> (öffnet in einem neuen Tab)</span></a> im {date} aufgeführt. Sie ändern sich und variieren je nach Region, prüfe sie also dort, bevor du dich entscheidest.',
  },

  freeVsFree: {
    eyebrow: 'kostenlos vs. kostenlos',
    title: 'Was du bekommst, <span class="gradient-text">ohne zu bezahlen</span>',
    lead: 'Beide sind zum Start kostenlos. Nur eines bleibt es.',
    degenview: {
      subtitle: 'Kostenlos und Open Source',
      items: [
        'Unbegrenzte Watchlists',
        'So viele Indikatoren, wie deine CPU schafft',
        'Multi-Chart-Layouts',
        'Preisalarme ohne Tariflimit',
        'Pine-Script-v6-Engine, die auf deinem Rechner läuft',
        'Bar Replay, Paper Trading und Portfolio-Tracking',
        'Open Source (GPL-3.0)',
        'Kein Konto nötig',
      ],
      download: 'Kostenlos herunterladen',
    },
    tradingview: {
      subtitle: 'Kostenloser Tarif (Basic)',
      items: [
        '2 Indikatoren pro Chart',
        '1 Chart pro Tab',
        '1 Watchlist, bis zu 30 Symbole',
        '3 aktive Preisalarme',
        'Pine Script läuft auf den Servern von TradingView',
        'Web-, Desktop- und Mobil-Apps',
        'Riesige Community und Skriptbibliothek',
        'Closed Source',
      ],
      plans: 'Die Tarife von TradingView ansehen',
    },
    sr: {
      included: 'Enthalten: ',
      limited: 'Eingeschränkt: ',
      notAvailable: 'Nicht verfügbar: ',
      opensNewTab: ' (öffnet in einem neuen Tab)',
    },
    legendLimit: 'Limit im kostenlosen Tarif',
    checked: 'TradingView-Angaben zuletzt geprüft im {date}',
  },

  better: {
    eyebrow: 'fairerweise',
    title: 'Was TradingView <span class="gradient-text">weiterhin besser kann</span>',
    lead: 'Wir sehen dich lieber beim passenden Tool als beim lautesten.',
    items: [
      { title: 'Apps überall', description: 'Web- und Mobil-Apps: deine Charts folgen dir in jeden Browser und aufs Handy.' },
      { title: 'Breitere Märkte', description: 'Aktien, Futures, Forex, Anleihen und Wirtschaftsdaten, über Krypto, US-Aktien und Prognosemärkte hinaus.' },
      { title: 'Eine große Community', description: 'Veröffentlichte Ideen und eine öffentliche Bibliothek mit den Skripten anderer.' },
      { title: 'Direkt aus dem Chart handeln', description: 'Orders über verbundene Broker aufgeben, ohne den Chart zu verlassen.' },
    ],
    closing:
      'Darauf angewiesen? Behalte TradingView neben DegenView. Willst du vor allem schnelle Charts, Indikatoren, Alarme und Replay ohne Tarif? Dann ist das hier die kostenlose Option.',
  },

  comingFrom: {
    eyebrow: 'Umstieg',
    title: 'Du kommst von <span class="gradient-text">TradingView</span>',
    items: [
      { title: 'Pine Script v6', description: 'Füge dein Skript in Pine Studio ein und führe es lokal aus, mit Schritt-Debugger und Profiler.' },
      { title: 'Vertraute Werkzeuge', description: 'Trendlinien, Fibonacci-Retracements, ein Lineal und 18 Chartarten von Candles bis Renko und Kagi.' },
      { title: 'Mehr als Charts', description: 'Bar Replay, Paper Trading, Portfolio-Tracking, Alarme mit Webhooks und ein optionaler MCP-Server für KI-Assistenten.' },
    ],
  },

  cta: {
    title: 'Heute kostenlos. <span class="gradient-text block">Für immer kostenlos.</span>',
    lead: 'Kein Konto, keine Testphase, kein Haken. macOS, Windows und Linux.',
    disclaimer:
      'DegenView ist ein unabhängiges Projekt und steht in keiner Verbindung zu TradingView, wird von TradingView weder unterstützt noch gesponsert. TradingView und Pine Script sind Marken von TradingView, Inc. und werden hier nur genannt, um zu beschreiben, wozu DegenView eine Alternative und womit es kompatibel ist.',
  },
};
