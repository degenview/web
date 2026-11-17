import type { Dict } from '../en';

export const home: Dict['home'] = {
  meta: {
    title: 'DegenView – Kostenlose Open-Source-TradingView-Alternative',
    description:
      'Kostenlose Open-Source-TradingView-Alternative für den Desktop: Multi-Chart-Layouts, lokales Pine Script v6, Alarme, Replay, Portfolios. macOS, Windows, Linux.',
  },

  jsonLd: {
    alternateNames: ['DegenView – Open-Source-TradingView-Alternative', 'DegenView Charts'],
  },

  hero: {
    eyebrow: 'Kostenlos & Open Source',
    eyebrowLink: 'TradingView-Alternative',
    // Features, die TradingView hinter eine Paywall stellt. Die erste ist die statische Überschrift ohne JS.
    phrases: ['mehrere Watchlists', 'unbegrenzte Indikatoren', 'Multi-Chart-Layouts', 'unbegrenzte Preisalarme', 'mehr als 30 Symbole'],
    headlineBefore: 'Bei uns sind',
    headlineMiddle: 'keine',
    headlineEmphasis: 'Premium-Features.',
    lead: 'Die kostenlose Open-Source-Alternative zu TradingView für deinen Desktop: Krypto, Aktien und Prognosemärkte in Multi-Chart-Layouts, mit lokalem Pine Script, Alarmen und Replay. Ohne Konto, und alles läuft auf deinem Rechner.',
    screenshotAlt: 'DegenView-Dashboard mit mehreren Live-Charts in einem Rasterlayout',
  },

  sources: {
    heading: 'Daten aus den Quellen, die du schon nutzt',
  },

  features: {
    heading: 'Alles, was ein Marktdashboard <span class="gradient-text">haben sollte</span>',
    eyebrow: 'Funktionen',
    markets: {
      eyebrow: 'Märkte & Live-Daten',
      title: 'Jeder Markt, ein Bildschirm.',
      blurb:
        'Durchsuche Binance, Coinbase, OKX, Kraken, Bybit, Gate.io, MEXC, CoinGecko und DEXScreener nebeneinander, füge US-Aktien hinzu und zeige Polymarket und Kalshi als Wahrscheinlichkeiten im Chart.',
      bullets: [
        'Live-Kurse von Binance, OKX, Kraken, Bybit, Gate.io, MEXC und Coinbase',
        'US-Aktien über Alpacas kostenlosen IEX-Feed',
        'Für die meisten Quellen kein API-Key nötig',
      ],
      alt: 'DegenView mit BTC-, ETH- und SOL-Charts und einem Polymarket-Wahrscheinlichkeitschart in einem Multi-Chart-Layout',
    },
    'pine-script': {
      eyebrow: 'Lokale Pine-Script-v6-Engine',
      title: 'Schreib Pine Script. Lass es lokal laufen.',
      blurb:
        'Schreib TradingView-kompatible Skripte und führe sie auf deinem Rechner aus. Kein Konto, und dein Quellcode verlässt nie dein Gerät.',
      bullets: [
        'Vibe-Coding mit deinem KI-Assistenten per MCP',
        'Schritt-Debugger mit Breakpoints und Watches',
        'Eingebauter Profiler für die Laufzeit deiner Skripte',
      ],
      alt: 'DegenView Pine Studio mit einem Pine-Script-Editor und Live-Vorschau-Chart',
      linkLabel: 'Pine Studio entdecken',
    },
    mcp: {
      eyebrow: 'MCP-Server',
      title: 'Lass die KI an deinen Charts arbeiten.',
      blurb:
        'Verbinde einen KI-Assistenten per MCP mit DegenView. Sag „Zeichne Unterstützung und Widerstand“ und sieh zu, wie es im Live-Chart landet.',
      bullets: [
        'Charts und Indikatoren hinzufügen',
        'Preisalarme erstellen, bearbeiten und pausieren',
        'Pine-Skripte lesen und bearbeiten',
      ],
      alt: 'Ein KI-Assistent in einem Terminal zeichnet per MCP Unterstützungs- und Widerstandslinien in einen DegenView-Chart',
    },
    portfolio: {
      eyebrow: 'Portfolio-Tracking',
      title: 'Mehrere Portfolios. Echtes P&L.',
      blurb:
        'Verfolge beliebig viele Portfolios mit Transaktionsbuch und gewichteter Durchschnittsbewertung.',
      bullets: [
        'Allokation, 24-h-Entwicklung, realisiertes und unrealisiertes P&L',
        'Auswertung in USD, EUR, GBP, JPY, CHF oder BTC',
        'CSV-Import und -Export, auch von CoinMarketCap',
      ],
      alt: 'DegenView-Portfolioübersicht mit Wertchart, Allokations-Donut, P&L-Karten und größten Positionen',
    },
    'paper-trading': {
      eyebrow: 'Paper Trading',
      title: 'Spielgeld, echte Charts.',
      blurb:
        'Ein lokaler, dauerhafter Simulator mit Market-, Limit- und Stop-Orders und Netto-Positionsverfolgung. Paper-Orders erreichen nie eine echte Börse.',
      bullets: [
        'Gewichteter Durchschnittspreis pro Position',
        'Order- und Positionsmarker im Chart',
        'Übersteht Neustarts, bleibt auf deinem Gerät',
      ],
      alt: 'DegenView Paper Trading mit einer Long-BTC-Position im Chart und der Positionstabelle darunter',
    },
    replay: {
      eyebrow: 'Bar Replay',
      title: 'Spul den Markt zurück, Bar für Bar.',
      blurb:
        'Such dir einen beliebigen Moment der Vergangenheit aus und spiel ihn in deinem Tempo ab, ohne Lookahead, auf allen Charts gleichzeitig.',
      bullets: [
        'Start bei jeder Kerze oder exakter Uhrzeit',
        'Eine gemeinsame Uhr hält alle Charts synchron',
        'Übe Einstiege mit dem Paper-Trading-Ticket',
      ],
      alt: 'Bar-Replay-Steuerung mit Zeitleisten-Regler und Geschwindigkeitsauswahl über einem historischen Chart',
    },
  },

  extras: {
    eyebrow: 'und wenn du schon dabei bist',
    heading: 'Der Rest <span class="gradient-text">vom Guten</span>',
    intro: 'Nicht jedes Feature verdient einen Screenshot. Diese hier haben eine Illustration verdient.',
    illustrationAria: '{title}, Illustration',
    'no-account': {
      tag: 'Privatsphäre',
      title: 'Kein Konto. Keine Anmeldung.*',
      text: 'App öffnen und loslegen. Keine E-Mail zu bestätigen, keine Testphase zu starten und kein „Willkommen zurück!“ wegzuklicken.',
      note: 'Alpaca ist die Ausnahme: Die kostenlosen US-Aktiendaten brauchen ein Alpaca-Konto und deine eigenen API-Keys. Das ist deren Regel, nicht unsere.',
    },
    watchlists: {
      tag: 'Listen',
      title: 'Unbegrenzte Watchlists',
      text: 'Leg so viele an, wie du willst. „Upgrade, um eine weitere Liste hinzuzufügen“ war nie ein Feature.',
    },
    tools: {
      tag: 'Zeichnen',
      title: 'Die Chart-Tools, die du schon liebst',
      text: 'Die Zeichenwerkzeuge, die TradingView-Nutzer im Muskelgedächtnis haben, nur ohne Tarifvergleichstabelle.',
    },
    indicators: {
      tag: 'Indikatoren',
      title: 'So viele Indikatoren, wie deine CPU schafft',
      text: 'Volume, RSI, EMA, Bollinger Bands, Supertrend und deine eigenen Pine-Skripte. Stapel weiter, bis sich deine Lüfter beschweren.',
    },
    alerts: {
      tag: 'Alarme',
      title: 'Preisalarme',
      text: 'Eine Markt-App, die dir Bescheid sagt, wenn sich der Kurs bewegt. Revolutionär, wir wissen.',
    },
    webhooks: {
      tag: 'Webhooks',
      title: 'Webhook-Alarme',
      text: 'Preisalarme und Pine-alert()-Aufrufe können einen Webhook auslösen, den du selbst einrichtest. Verbinde sie mit einem Bot, Discord oder was immer du magst.',
    },
    ai: {
      tag: 'Pine',
      title: 'KI-Hilfe für Pine Script',
      text: 'Ein eingebauter Coding-Assistent für deine Skripte. Er schreibt den ersten Entwurf, du heimst den Ruhm ein.',
    },
    icloud: {
      tag: 'macOS',
      title: 'iCloud-Sync auf macOS',
      text: 'Aktiviere ihn, und dein Setup folgt dir über deine eigene iCloud von Mac zu Mac, nicht über einen Server von uns.',
    },
  },

  download: {
    heading: 'Hol dir DegenView. <span class="gradient-text block">Kostenlos.</span>',
    latest: 'Neueste Version {version}. Kein Konto, keine Testphase, kein Haken.',
    allDownloads: 'Alle Downloads',
    faq: 'FAQ',
    freeForever: 'Für immer kostenlos. Wenn es sich einen Platz auf deinem Bildschirm verdient:',
  },

  illustrations: {
    noAccount: { email: 'E-Mail', password: 'Passwort', cta: 'Einfach öffnen' },
    watchlists: { title: 'Watchlist 7', newButton: '+ Neu' },
    indicators: { load: 'Last', indicators: 'Indikatoren' },
    alerts: { crossedAbove: 'Über 76.000 gekreuzt' },
    ai: { suggestion: 'RSI-Alarm anlegen' },
    free: { forever: 'für immer', noAccount: 'Kein Konto' },
    shield: { noAnalytics: 'Keine Analytics', noTelemetry: 'Keine Telemetrie', noAccount: 'Kein Konto' },
    smartscreen: { title: 'Windows schützte deinen PC', moreInfo: 'Weitere Infos', runAnyway: 'Ausführen' },
  },
};
