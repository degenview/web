import type { Dict } from '../en';

export const faq: Dict['faq'] = {
  meta: {
    title: 'DegenView FAQ – Kostenlose TradingView-Alternative',
    description:
      'Antworten zu DegenView, der kostenlosen TradingView-Alternative: Konto, Pine Script, Aktiendaten, unterstützte Plattformen und Warnungen beim ersten Start.',
  },
  breadcrumbs: { home: 'Startseite', faq: 'FAQ' },
  hero: {
    eyebrow: 'FAQ',
    title: 'Fragen, <span class="gradient-text">beantwortet</span>',
    lead: 'Alles, was Leute vor dem Download fragen. Wenn es hier nicht steht, frag auf GitHub.',
    searchLabel: 'Fragen durchsuchen',
    searchPlaceholder: '{count} Fragen durchsuchen',
    found: {
      one: '{count} Frage gefunden',
      other: '{count} Fragen gefunden',
    } as Record<string, string>,
  },
  nav: {
    label: 'Themen',
    heading: 'Themen',
  },
  groups: {
    basics: { title: 'Die Grundlagen', intro: 'Was es kostet, wer dahintersteckt und was es nicht ist.' },
    scripts: { title: 'Pine Script und KI', intro: 'Skripte ausführen und wohin sie und deine Charts gelangen können.' },
    data: { title: 'Daten und Datenschutz', intro: 'Woher die Kurse kommen und was wir über dich wissen (sehr wenig).' },
    install: { title: 'Installation und Plattformen', intro: 'Was wo läuft und was beim ersten Start zu tun ist.' },
  },
  groupArtLabel: '{title}, Illustration',
  itemArtLabel: 'Illustration: {question}',
  empty:
    'Dazu gibt es keine passende Frage. <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">Frag auf GitHub<span class="sr-only"> (öffnet in einem neuen Tab)</span></a>, dann nehmen wir sie auf.',
  cta: {
    title: 'Noch <span class="gradient-text">eine Frage?</span>',
    lead: 'Eröffne ein Issue, und wir antworten. Oder lade DegenView einfach herunter und überzeug dich selbst.',
    download: 'Kostenlos herunterladen',
    ask: 'Auf GitHub fragen',
  },
  items: {
    free: {
      q: 'Ist DegenView wirklich kostenlos?',
      a: 'Ja. DegenView ist kostenlos und Open Source unter der GPL-3.0. Es gibt keine kostenpflichtigen Stufen und keine gesperrten Funktionen.',
    },
    alternative: {
      q: 'Ist DegenView eine kostenlose TradingView-Alternative?',
      a: 'Ja. DegenView ist eine kostenlose Open-Source-Desktop-App für Krypto, Aktien und Prognosemärkte, mit Multi-Chart-Layouts, einer lokalen Pine-Script-v6-Engine, Alarmen, Bar Replay und Portfolio-Tracking. Es ist unabhängig von TradingView und ersetzt nicht alles, was TradingView bietet.',
      links: ['Zum Vergleich'],
    },
    openSource: {
      q: 'Ist DegenView Open Source?',
      a: 'Ja. Der Quellcode ist auf GitHub unter der Lizenz GPL-3.0-only öffentlich, und die Release-Builds stammen aus einem öffentlichen Workflow.',
    },
    account: {
      q: 'Brauche ich ein Konto?',
      a: 'Nein. Es gibt nichts, wofür du dich anmelden musst. Alarme, Portfolios, Paper Trading und Pine Script laufen alle lokal auf deinem Rechner.',
    },
    affiliation: {
      q: 'Gehört es zu TradingView oder zu den Datenanbietern?',
      a: 'Nein. DegenView ist ein unabhängiges Projekt. Pine Script und TradingView sind Marken von TradingView, Inc. Pine Script ist die Sprache von TradingView, und DegenView führt Skripte in dieser Sprache mit einer eigenen Engine aus. Alle anderen Marken gehören ihren jeweiligen Inhabern.',
    },
    runPine: {
      q: 'Kann ich meine TradingView-Pine-Skripte in DegenView ausführen?',
      a: 'Ja. DegenView führt Pine Script v6 mit einer eigenen Engine lokal aus. Es ist eine unabhängige Implementierung, daher können sich sehr exotische Skripte anders verhalten als bei TradingView.',
    },
    pinePrivacy: {
      q: 'Wohin gehen meine Pine-Skripte?',
      a: 'Standardmäßig nirgendwohin. Skripte laufen auf deinem Computer, und der Quellcode bleibt dort, es sei denn, du schickst ihn selbst irgendwohin, zum Beispiel an einen KI-Anbieter, den du für den Assistenten eingerichtet hast.',
    },
    aiAssistant: {
      q: 'Kann ich einen KI-Assistenten anbinden?',
      a: 'Ja. DegenView hat einen optionalen MCP-Server, mit dem KI-Assistenten und Automatisierungstools mit deinen Charts, Alarmen und Pine-Skripten arbeiten können. Er ist standardmäßig aus, und du bestimmst, was jede Verbindung darf.',
    },
    stockData: {
      q: 'Wie bekomme ich Aktiendaten?',
      a: 'US-Aktien kommen aus Alpacas kostenlosem IEX-Feed. Trag einfach deine kostenlosen Alpaca-API-Keys in den Einstellungen ein. Krypto, Prognosemärkte und CoinMarketCap-Indizes brauchen gar keine Keys.',
      links: ['Alle Datenquellen ansehen'],
    },
    dataCollection: {
      q: 'Sammelt DegenView meine Daten?',
      a: 'Die Desktop-App hat weder Analytics noch Telemetrie und braucht kein Konto. Diese Website setzt Analytics-Cookies nur, wenn du sie akzeptierst. Die Datenschutzerklärung listet jeden Dienst auf, mit dem sich die App verbindet.',
      links: ['Datenschutzerklärung lesen'],
    },
    offline: {
      q: 'Funktioniert DegenView offline?',
      a: 'Die App, deine Skripte und deine Daten liegen auf deinem Rechner. Live-Kurse kommen aber weiterhin von den Datenanbietern, für Marktdaten brauchst du also eine Internetverbindung.',
    },
    platforms: {
      q: 'Welche Plattformen werden unterstützt?',
      a: 'macOS (Apple Silicon und Intel), Windows (x64 und ARM64) und Linux (x64 und ARM64, als Tarball oder Flatpak). Ein paar Extras gibt es nur unter macOS: native Tabs und Fenster sowie Alarme im Hintergrund.',
      links: ['Zu den Downloads'],
    },
    smartscreen: {
      q: 'Windows zeigt eine SmartScreen-Warnung. Ist das sicher?',
      a: 'Der Windows-Build ist noch nicht codesigniert, daher kann SmartScreen beim ersten Start warnen. Der Quellcode und der Build-Workflow sind auf GitHub öffentlich, und jedes Release listet eine SHA-256-Prüfsumme, die du vergleichen kannst. Wähle „Weitere Informationen“ und dann „Trotzdem ausführen“. Die macOS-App ist signiert.',
      links: ['Download prüfen'],
    },
    autoUpdate: {
      q: 'Aktualisiert sich DegenView selbst?',
      a: 'Ja, unter macOS, unter Windows und beim Linux-Tarball in einem Ordner, der dir gehört. Ein Flatpak-Bundle hat keine Remote und aktualisiert sich deshalb nicht selbst.',
    },
    homebrew: {
      q: 'Kann ich DegenView mit Homebrew installieren?',
      a: 'Ja, unter macOS: brew install --cask degenview/degenview/degenview@rc. Es installiert dieselbe signierte App aus dem DegenView-Tap im Ordner „Programme“. Der Name ohne @rc steht für das neueste finale Release und existiert, sobald eines veröffentlicht ist. Die App aktualisiert sich selbst, daher überspringt brew upgrade sie.',
      links: ['Zu den Downloads'],
    },
    whichDownload: {
      q: 'Welchen Download soll ich wählen?',
      a: 'Auf einem Mac: Apple-Menü, „Über diesen Mac“. „Apple M…“ bedeutet Apple Silicon, „Intel“ bedeutet Intel. Unter Windows wähle x64, außer du hast ein Windows-on-ARM-Gerät. Unter Linux passt der Tarball zu den meisten Distributionen und das Flatpak zu älteren.',
      links: ['Zu den Downloads'],
    },
  },
};
