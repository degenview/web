import type { Dict } from '../en';

export const pineStudio: Dict['pineStudio'] = {
  meta: {
    title: 'Pine-Script-Editor, Debugger & Profiler | DegenView',
    description:
      'Pine Studio: kostenloser Pine-Script-v6-Editor für den Desktop mit Schritt-Debugger, Profiler, KI-Assistent und Editor-Themes. Läuft lokal, ohne Konto.',
    breadcrumbHome: 'Startseite',
    breadcrumbName: 'Pine Studio',
  },

  sectionNav: {
    write: 'Schreiben',
    debugger: 'Debugger',
    profiler: 'Profiler',
    ai: 'KI-Assistent',
    themes: 'Themes',
    local: 'Lokal',
    workflow: 'Workflow',
    differences: 'vs. TradingView',
    faq: 'FAQ',
    download: 'Download',
  },

  jsonLd: {
    name: 'DegenView Pine Studio',
    applicationSubCategory: 'Pine-Script-Editor',
    featureList: [
      'Pine-Script-v6-Engine, die lokal läuft',
      'Live-Vorschau-Chart mit Eingabereglern',
      'Schritt-Debugger mit Breakpoints, Watches und Call Stack',
      'Profiler pro Zeile',
      'Strategie-Backtests mit Equity-Kurve, Trade-Liste und Monte-Carlo-Simulation',
      'KI-Assistent mit den Modi Ask, Plan und Edit',
      'MCP-Server, damit andere KI-Assistenten Skripte lesen, bearbeiten und anwenden können',
      'Anpassbare Editor-Themes',
    ],
  },

  hero: {
    badge:
      'Pine Studio <span class="mx-2 text-line" aria-hidden="true">·</span> Teil von <a href="{home}" class="ml-1 font-semibold text-accent-text hover:underline">DegenView</a>',
    title: 'Der Pine-Script-Editor mit <span class="gradient-text block">echtem Debugger.</span>',
    lead: 'Schreib Pine Script v6, halte in jeder Zeile an, profiliere die langsamen Stellen und hol dir KI-Hilfe. Läuft auf deinem Rechner, mit Live-Daten. Kostenlos, Open Source, ohne Konto.',
    docsLink: 'Pine-Studio-Doku lesen',
    chips: ['Pine Script v6', 'Läuft zu 100 % lokal', 'macOS · Windows · Linux', 'Open Source · GPL-3.0'],
    screenshotAlt: 'Pine Studio mit dem Skript Pivot Levels im Editor, einem Live-Chart für BTC/USDT mit seinen Levels, den Eingaben des Skripts und dem Debugger, pausiert auf einer Zeile',
  },

  write: {
    eyebrow: 'Pine Studio',
    title: 'Ein richtiger Workspace für <span class="gradient-text">Pine Script v6</span>',
    lead: 'Eine Skriptbibliothek, ein Editor und ein Live-Vorschau-Chart in einem Tab. Skripte laufen, während du tippst, auf echten Marktdaten.',
    items: [
      {
        title: 'Eine echte Pine-v6-Engine, lokal',
        body: 'Indikatoren, Strategien und Bibliotheken laufen auf deinem Rechner. Kein Server, kein Upload, kein Konto.',
      },
      {
        title: 'Ein Live-Vorschau-Chart',
        body: 'Läuft bei jeder Eingabe neu, auf jedem Krypto- oder Aktienmarkt. Jedes input() wird zum Regler.',
      },
      {
        title: 'Diagnosen, die auf die Zeile zeigen',
        body: 'Fehler und Warnungen, auch Laufzeitfehler, landen mit Sprung zur Zeile im Problems-Tab.',
      },
      {
        title: 'Ein Logs-Bereich für log.*()',
        body: 'Such per Text oder Regex, filtere nach Level und spring von einer Meldung zu ihrer Zeile oder Bar.',
      },
      {
        title: 'Strategien mit Bericht',
        body: 'Backtest-Kennzahlen, eine Equity-Kurve und eine vollständige Tradeliste.',
      },
      {
        title: 'Ein Editor, der mitdenkt',
        body: 'Vervollständigung, Signaturhilfe, Gehe zu Definition, Umbenennen, mehrere Cursor und Änderungsmarken.',
      },
    ],
    examples: 'Startet mit neun Beispielskripten, von einem EMA-Cross bis zu einer Statistiktabelle.',
    examplesLink: 'So schreibst du Skripte in Pine Studio',
  },

  debugger: {
    eyebrow: 'Schritt-Debugger',
    title: 'Schluss mit dem Pine-Debuggen per <span class="gradient-text">log.info()</span>',
    lead: 'Setz einen Breakpoint, lass das Skript über die Bars deines Charts laufen und halte dort an, wo es zählt. Lies jede Variable und geh den Code Schritt für Schritt durch, wie in einer echten IDE.',
    screenshotAlt: 'Pine Studio, angehalten in Zeile 14 eines Pine Scripts, mit Inline-Werten, Variablenpanel und Schrittsteuerung',
    items: [
      {
        title: 'Breakpoints, die mitdenken',
        body: 'Klick in den Rand oder drück F9. Füge eine Bedingung, eine Trefferzahl oder einen Logpoint hinzu.',
      },
      {
        title: 'Schritt für Schritt wie in jeder IDE',
        body: 'Spring über, in oder aus Funktionen, oder lauf eine ganze Bar durch. Werte erscheinen inline.',
      },
      {
        title: 'Jede Variable im Blick',
        body: 'Lokale und globale Variablen mit Typen, Änderungen hervorgehoben. Füge Watches wie close - open hinzu.',
      },
      {
        title: 'Spring zu jeder Bar',
        body: 'Halte bei einer Bar oder einem Datum an und lies den Call Stack. Starte mit einem Klick neu.',
      },
    ],
    note: 'Der Debugger läuft auf einer eingefrorenen Kopie der Bars des Vorschau-Charts, sodass sich nichts bewegt, während du hinsiehst.',
    docsLink: 'Debugger-Doku',
  },

  profiler: {
    eyebrow: 'Profiler',
    title: 'Finde die langsame Zeile, <span class="gradient-text">nicht nur das langsame Skript.</span>',
    lead: 'Schalte die Stoppuhr ein, und DegenView misst dein Skript über die Bars des Vorschau-Charts, mit Balken und Anteil neben jeder Zeile.',
    bullets: [
      'Zeit und Anteil pro Zeile, neben deinem Code',
      'Heißeste Zeilen, Blöcke und Funktionen als Rangliste',
      'Klick auf eine Zeile springt zur Codezeile',
    ],
    docsLink: 'Wie der Profiler misst',
    screenshotAlt: 'Pine-Studio-Profiler: ein Zeitbalken und ein Anteil neben jeder Codezeile und eine Rangliste der heißesten Zeilen',
  },

  ai: {
    eyebrow: 'KI-Assistent',
    title: 'Er bearbeitet eine Kopie. <span class="gradient-text">Du genehmigst jede Änderung.</span>',
    lead: 'Beschreib, was du willst. Der Assistent liest, kompiliert und profiliert dein Skript und schlägt Änderungen vor, die du prüfst, bevor etwas deinen Editor berührt.',
    modeAlt: 'Der Modus {name} des Pine-Studio-Assistenten',
    modes: [
      { name: 'Ask', body: 'Fragen zu deinem Skript. Er liest, kompiliert und misst, bearbeitet aber nichts.' },
      { name: 'Plan', body: 'Er recherchiert und schlägt einen Plan mit bis zu zwölf Schritten vor. Genehmige, überarbeite oder verwirf ihn.' },
      { name: 'Edit', body: 'Er schlägt Änderungen als Diff vor. Wende alle an oder prüfe sie einzeln.' },
    ],
    review: {
      screenshotAlt: 'Das Review-Sheet: fünf vorgeschlagene Änderungen mit Checkbox pro Änderung und einem Diff, bereit zur Anwendung in einem Schritt',
      title: 'Prüfe es wie einen Pull Request',
      bullets: [
        'Ein Diff mit Checkbox pro Änderung',
        'Ein Undo-Schritt. Auto-Anwenden ist optional',
        'Eigener Key: OpenAI, Anthropic oder kompatible Server',
      ],
      note: 'Dein Skript geht direkt an den gewählten Anbieter, ohne DegenView-Server dazwischen. Du bezahlst ihn direkt. Keys liegen unter macOS und Linux im System-Schlüsselbund.',
      docsLink: 'Doku zum KI-Assistenten',
    },
    mcp: {
      eyebrow: 'MCP-Server',
      title: 'Oder steuere Pine Studio mit <span class="gradient-text">deinem eigenen Assistenten</span>',
      lead: 'Der optionale MCP-Server von DegenView öffnet Pine Studio für jeden MCP-fähigen KI-Assistenten: Skripte lesen, kompilieren, Diagnosen beheben und das Ergebnis in einen Chart legen.',
      setupLink: 'MCP-Server einrichten',
      moreLink: 'Mehr zu MCP',
      bullets: [
        'Skriptentwürfe lesen, kompilieren und bearbeiten, ohne stilles Überschreiben',
        'Gespeichertes Skript auf einen Chart anwenden, abstimmen oder entfernen',
        'Standardmäßig aus, lokal, per Token geschützt. Speichern braucht deine Freigabe',
      ],
    },
  },

  themes: {
    eyebrow: 'Editor-Themes',
    title: 'Mach den Editor <span class="gradient-text">zu deinem</span>',
    lead: 'Folge der App oder wähle Dark, Light oder Dracula. Ändere dann jede Farbe, die Schriftart und die Zeilenhöhe.',
    items: [
      { name: 'Dark', note: 'Eingebaut', alt: 'Pine-Script-Editor im Dark-Theme' },
      { name: 'Light', note: 'Eingebaut', alt: 'Pine-Script-Editor im Light-Theme' },
      { name: 'Dracula', note: 'Eingebaut', alt: 'Pine-Script-Editor im Dracula-Theme' },
    ],
    custom: {
      title: 'Bau dir dein eigenes Theme',
      bullets: [
        'Syntax, Editor und Typografie mit Live-Vorschau bearbeiten',
        'Jede Festbreitenschrift, von 9 bis 32 pt',
        'Themes als .degenview-theme.json exportieren und teilen',
      ],
      docsLink: 'Editor-Themes in der Doku',
      screenshotAlt: 'Der Theme-Editor für ein eigenes Theme namens Night shift, mit den Tabs Syntax, Editor und Typography',
    },
  },

  local: {
    eyebrow: 'Gehört dir',
    title: 'Deine Skripte <span class="gradient-text">bleiben auf deinem Rechner</span>',
    lead: 'Pine Studio wertet Skripte im eigenen Prozess aus. Dein Quellcode ist eine einfache <span class="font-mono text-base">.pine</span>-Datei in einem Ordner, der dir gehört.',
    items: [
      {
        title: 'Nichts wird hochgeladen',
        body: 'Skripte laufen lokal. Quelltext verlässt deinen Computer nur, wenn du den KI-Assistenten fragst, und geht dann an deinen gewählten Anbieter.',
      },
      { title: 'Kein Konto', body: 'Nichts zum Anmelden. Lade DegenView herunter, öffne Pine Studio und schreib los.' },
      { title: 'Open Source', body: 'GPL-3.0 auf GitHub. Lies nach, wie die Engine funktioniert, oder bau sie selbst.' },
    ],
    supportsTitle: 'Was die Engine ausführt',
    supports: [
      'Indikatoren, Strategien und Bibliotheken',
      'Plots, Füllungen, Formen und Hintergrundfarben',
      'Labels, Linien, Boxen und Tabellen',
      'ta.*, math.*, str.* und color.*',
      'Arrays, Maps und Matrizen',
      'Benutzerdefinierte Typen und Methoden',
      'request.security und Zeitrahmen',
      'alert() und alertcondition()',
      'input.*-Steuerelemente',
      'log.*()',
      'varip',
      'import eigener Bibliotheken',
    ],
    note: 'Eine unabhängige Implementierung von Pine Script v6, die dir sagt, wenn etwas nicht unterstützt wird, statt stillschweigend zu scheitern.',
    noteLink: 'Was Pine unterstützt',
  },

  workflow: {
    eyebrow: 'Von der Idee zum Alarm',
    title: 'Ein Kreislauf, <span class="gradient-text">von Anfang bis Ende</span>',
    readMore: 'Mehr lesen<span class="sr-only"> zum Thema „{topic}“</span>',
    steps: [
      {
        title: 'Schreiben',
        topic: 'schreiben',
        body: 'Starte mit einem von neun Beispielen oder einem leeren Skript und sieh zu, wie der Vorschau-Chart deinem Code folgt.',
      },
      {
        title: 'Debuggen',
        topic: 'debuggen',
        body: 'Halte an der falschen Zeile an, lies die Variablen, profiliere die langsame Stelle und frag den Assistenten.',
      },
      {
        title: 'Zu einem Chart hinzufügen',
        topic: 'zu einem Chart hinzufügen',
        body: 'Wende das Skript über das +-Menü an. Stimme Eingaben und Stil ab oder schalte es aus.',
      },
      {
        title: 'Benachrichtigt werden',
        topic: 'benachrichtigt werden',
        body: 'Mach aus alert()-Aufrufen Skript-Alarme, die dich bei einer Live-Bar benachrichtigen oder an deinen Webhook senden.',
      },
    ],
  },

  differences: {
    eyebrow: 'Kompatibilität',
    title: 'Wie es sich von <span class="gradient-text">TradingView</span> unterscheidet',
    lead: 'Pine Studio ist eine unabhängige Implementierung von Pine Script v6 mit eigener Engine und eigenen Daten, dasselbe Skript kann sich also anders verhalten.',
    colTradingView: 'TradingView',
    colDegenView: 'DegenView Pine Studio',
    mobileTradingView: 'TradingView',
    mobileDegenView: 'Pine Studio',
    rows: [
      {
        area: 'Sprachversionen',
        tradingView: 'Führt weiterhin Skripte aus, die für ältere Pine-Versionen geschrieben wurden.',
        degenView: 'Nur Pine Script v6. Ältere Skripte werden mit einer klaren Fehlermeldung abgelehnt, migriere sie also zuerst.',
      },
      {
        area: 'Wo Skripte laufen',
        tradingView: 'Auf den Servern von TradingView, an dein Konto gebunden.',
        degenView: 'Auf deinem Computer. Einfache .pine-Dateien, kein Konto, nichts wird hochgeladen.',
      },
      {
        area: 'Märkte und Zeitrahmen',
        tradingView: 'Aktien, Futures, Forex, Anleihen, Krypto und mehr, mit Intraday-Zeitrahmen.',
        degenView: 'Krypto, US-Aktien und ETFs sowie Prognosemärkte, in Kerzen von 1H, 1D, 1W, 1M, 3M und 1Y. Keine Minuten-Zeitrahmen.',
      },
      {
        area: 'Datenfeeds in Skripten',
        tradingView: 'Fundamentaldaten, Gewinne, Dividenden, Splits, Wirtschaftsdaten und mehr über request.*.',
        degenView:
          'request.security und request.security_lower_tf funktionieren. Feeds wie earnings, dividends, splits, economic, financial, seed und quandl liefern na mit einer Warnung. request.footprint nähert Tickdaten aus feineren Kerzen an.',
      },
      {
        area: 'Strategie-Backtests',
        tradingView: 'Der eigene Broker-Emulator von TradingView, einschließlich Margin.',
        degenView:
          'Ein separater Emulator ohne Margin-Modell und Margin Calls. calc_on_order_fills und der Bar Magnifier werden mit einer Warnung ignoriert. Rechne mit abweichenden Zahlen.',
      },
      {
        area: 'Zeitzonen bei Aktien',
        tradingView: 'Kalenderwerte folgen der Zeitzone der Börse.',
        degenView: 'Stunden- und Wochentagswerte verwenden bei Aktien UTC.',
      },
      {
        area: 'Textformatierung',
        tradingView: 'Wähle Schriftfamilie, Fett und Kursiv für Labels, Boxen und Tabellen.',
        degenView: 'Wird akzeptiert, aber ignoriert.',
      },
      {
        area: 'Teilen',
        tradingView: 'Veröffentliche Skripte und stöbere in einer Community-Bibliothek.',
        degenView:
          'Kein Veröffentlichen und keine eingebaute Bibliothek. Der Link „Community scripts“ öffnet tradingview.com/scripts im Browser; füge ein, was du ausführen willst.',
      },
    ],
    cards: [
      {
        title: 'Nicht unterstützt heißt Warnung, keine Überraschung',
        body: 'Nicht Unterstütztes liefert na oder wird ignoriert, mit einer nummerierten Warnung im Problems-Tab.',
      },
      {
        title: 'Prüfe Ergebnisse, bevor du dich darauf verlässt',
        body: 'Datenquellen und Strategie-Emulator unterscheiden sich, daher können Plots und Backtests abweichen. Prüfe die Lizenz eines Community-Skripts, bevor du es weiterverwendest.',
      },
    ],
    supportedLink: 'Die vollständige Liste dessen, was Pine Studio unterstützt',
    compareLink: 'DegenView vs. TradingView',
    trademark: 'Pine Script und TradingView sind Marken von TradingView, Inc. DegenView steht in keiner Verbindung zu TradingView und wird von TradingView nicht unterstützt.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pine Studio, <span class="gradient-text">beantwortet</span>',
    more: 'Mehr in den <a class="font-medium text-accent-text underline underline-offset-4" href="{faqHref}">allgemeinen FAQ</a> oder <a class="font-medium text-accent-text underline underline-offset-4" href="{issuesHref}" target="_blank" rel="noopener noreferrer">frag auf GitHub<span class="sr-only"> (öffnet in einem neuen Tab)</span></a>.',
    items: [
      {
        q: 'Was ist Pine Studio?',
        a: 'Pine Studio ist der Pine-Script-Arbeitsbereich in DegenView, dem kostenlosen Open-Source-Marktdashboard für den Desktop. Es vereint eine Skriptbibliothek, einen Code-Editor und einen Live-Vorschau-Chart in einem Tab, mit Schritt-Debugger, Profiler, KI-Assistent und Editor-Themes.',
      },
      {
        q: 'Führt DegenView Pine-Script-v6-Skripte von TradingView aus?',
        a: 'DegenView bringt eine eigene Pine-Script-v6-Engine mit, die auf deinem Computer läuft. Du kannst also ein Skript in Pine Studio einfügen und ausführen. Es ist eine unabhängige Implementierung und nicht die von TradingView, daher können sich sehr exotische Skripte anders verhalten, und einige Funktionen, etwa manche request.*-Datenfeeds, liefern na mit einer Warnung. Unterstützt wird ausschließlich Pine Script v6.',
      },
      {
        q: 'Kann ich ein Pine Script mit Breakpoints debuggen?',
        a: 'Ja. Setz Breakpoints im Rand, wahlweise mit Bedingungen, Trefferzahlen und Logpoints, und geh dann über Funktionen, in sie hinein oder aus ihnen heraus oder durchlaufe eine ganze Bar auf einmal. Lokale und globale Variablen, Watch-Ausdrücke und der Call Stack aktualisieren sich bei jedem Halt. Der Debugger läuft auf einer eingefrorenen Kopie der Bars des Vorschau-Charts.',
      },
      {
        q: 'Gibt es einen Pine-Script-Profiler?',
        a: 'Ja. Schalte den Profiler ein, und DegenView misst die Laufzeit deines Skripts über die Bars des Vorschau-Charts. Er zeichnet neben jede Zeile einen Balken und einen Anteil und ordnet die heißesten Zeilen, Blöcke und Funktionen nach Rang, sodass du siehst, was du zuerst beheben solltest.',
      },
      {
        q: 'Kann ich eine Strategie backtesten?',
        a: 'Ja. Eine Pine-Strategie platziert simulierte Trades auf den Kerzen des Charts, und der Tab Report zeigt Kennzahlen, Equity-Kurve und Trade-Liste. Eine Monte-Carlo-Simulation zieht deine abgeschlossenen Trades anschließend zufällig neu, um zu zeigen, wie stark das Ergebnis von ihrer Reihenfolge abhing. Backtests nutzen nur Kerzen und haben kein Margin-Modell. Sie sind ein Werkzeug, um eine Strategie zu untersuchen, kein Ergebnisversprechen.',
      },
      {
        q: 'Schickt der KI-Assistent meinen Code irgendwohin?',
        a: 'Nur, wenn du ihn nutzt, und nur an den Anbieter, den du wählst. Du bringst deinen eigenen API-Key für OpenAI, Anthropic oder einen OpenAI-kompatiblen Server wie OpenRouter, Ollama oder LM Studio mit. DegenView hat keinen Server dazwischen, und du bezahlst deinen Anbieter direkt. Der Assistent arbeitet an einer privaten Kopie deines Skripts und ändert deinen Editor erst, wenn du eine Änderung anwendest.',
      },
      {
        q: 'Kann ich Pine-Skripte per Vibe-Coding mit meinem eigenen KI-Assistenten schreiben?',
        a: 'Ja, über den optionalen MCP-Server von DegenView. Beschreib die Idee einem MCP-fähigen Assistenten, und er kann deine Skripte auflisten, lesen und kompilieren, den Entwurf eines Skripts bearbeiten, Diagnosen, Eingaben und Berichte lesen und ein gespeichertes Skript auf einen Chart anwenden. Der Server ist standardmäßig aus, lauscht nur auf deinem Rechner und braucht ein Token, und du bestimmst, was jeder Assistent darf. Standardmäßig wartet das Überschreiben eines Skripts auf deine Freigabe in der App.',
      },
      {
        q: 'Brauche ich ein Konto oder eine Internetverbindung?',
        a: 'Kein Konto. Deine Skripte sind einfache .pine-Dateien auf deinem Computer. Die Marktdaten für den Vorschau-Chart kommen von öffentlichen Anbietern, für Live-Kurse brauchst du also eine Verbindung, zum Bearbeiten eines Skripts aber nicht.',
      },
      {
        q: 'Ist Pine Studio kostenlos?',
        a: 'Ja. Pine Studio gehört zu DegenView, das kostenlos und Open Source unter der GPL-3.0-Lizenz für macOS, Windows und Linux verfügbar ist.',
      },
    ],
  },

  download: {
    title: 'Schreib Pine. <span class="gradient-text block">Debugge es richtig.</span>',
    lead: 'Pine Studio gehört zu DegenView. Kostenlos, Open Source und ohne Anmeldung.',
    docsLink: 'Pine-Studio-Doku',
    allDownloadsLink: 'Alle Downloads',
    compareLink: 'Mit TradingView vergleichen',
  },
};
