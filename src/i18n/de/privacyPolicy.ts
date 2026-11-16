import type { Dict } from '../en';

export const privacyPolicy: Dict['privacyPolicy'] = {
  meta: {
    title: 'Datenschutzerklärung – DegenView',
    description:
      'Wie degenview.app mit Cookies und Analytics umgeht: Ohne Einwilligung wird nichts getrackt, und die DegenView-Desktop-App hat weder Analytics noch Telemetrie.',
    breadcrumb: 'Datenschutzerklärung',
  },

  notice: 'Dies ist eine Übersetzung zur Orientierung. Rechtlich verbindlich ist die englische Fassung.',

  hero: {
    eyebrow: 'dein Datenschutz',
    title: 'Cookies &amp; <span class="gradient-text">Analytics</span>',
    lead: 'Diese Website erhebt oder speichert selbst keine personenbezogenen Daten von Besuchern. Wenn du es erlaubst, nutzt sie Cookies und ähnliche Technologien, um zu verstehen, wie die Website verwendet wird.',
    lastUpdated: 'Zuletzt aktualisiert: {date}',
  },

  opensNewTab: ' (öffnet in einem neuen Tab)',

  storage: {
    title: 'Arten der Speicherung, die wir nutzen',
    necessary: {
      title: 'Unbedingt erforderlich',
      body: 'Nötig, damit die Website so funktioniert, wie du sie eingestellt hast: dein Farbschema und deine Cookie-Auswahl. Das wird ausschließlich in deinem Browser gespeichert.',
      badge: 'Keine Einwilligung erforderlich',
    },
    analytics: {
      title: 'Analytics (optional)',
      body: 'Dienen dazu, den Traffic zu messen und zu verstehen, wie Besucher die Website nutzen. Wenn du zustimmst, können sie IP-Adressen, Geräte- und Browserinformationen sowie die von dir aufgerufenen Seiten verarbeiten.',
      badge: 'Aus, bis du zustimmst',
    },
    table: {
      caption: 'Was in deinem Browser gespeichert wird',
      name: 'Name',
      purpose: 'Zweck',
      duration: 'Dauer',
      themePurpose: 'Merkt sich, ob du Hell, Dunkel oder System gewählt hast.',
      themeDuration: 'Local Storage, bis du ihn löschst',
      consentPurpose: 'Merkt sich, ob du Analytics akzeptiert oder abgelehnt hast.',
      consentDuration: 'Local Storage, bis du ihn löschst',
      googleName: 'Google-Cookies',
      googlePurpose: 'Nur, wenn du Analytics akzeptierst: gesetzt vom Google Tag Manager und den darin enthaltenen Tags, um Besuche zu messen.',
      googleDuration: 'Von Google gesetzt, siehe deren Richtlinie',
    },
  },

  legal: {
    title: 'Rechtsgrundlagen der Verarbeitung',
    body: [
      'Wo das Gesetz es verlangt, etwa im EWR und im Vereinigten Königreich, werden Analytics nur mit deiner Einwilligung verwendet. Anderswo können sie auf berechtigten Interessen oder auf deiner Einwilligung beruhen. Analytics sind standardmäßig ausgeschaltet.',
    ],
  },

  consent: {
    title: 'So funktioniert die Einwilligung',
    steps: [
      'Du kannst Analytics bei deinem ersten Besuch akzeptieren oder ablehnen.',
      'Ohne deine Einwilligung werden keine Analytics-Cookies verwendet, und es wird nichts von Google geladen.',
      'Deine Auswahl wird auf deinem Gerät gespeichert, damit wir sie uns merken können.',
      'Wenn du ablehnst, findet kein Analytics-Tracking statt.',
    ],
  },

  manage: {
    title: 'Einstellungen verwalten',
    body: 'Du kannst deine Einwilligung jederzeit ändern oder widerrufen.',
    button: 'Cookie-Einstellungen öffnen',
  },

  third: {
    title: 'Dienste von Drittanbietern',
    body: [
      'Analytics werden, wenn du sie akzeptierst, von Google über den Google Tag Manager nach Googles eigener Datenschutzerklärung verarbeitet, und deine Daten können außerhalb deines Landes verarbeitet werden.',
      'Diese Website wird auf GitHub Pages gehostet. Um sie auszuliefern, die aktuelle Version auf den Download-Buttons anzuzeigen und die Download-Dateien abzurufen, kommuniziert dein Browser mit GitHub (github.com und api.github.com), das nach der Datenschutzerklärung von GitHub technische Daten wie deine IP-Adresse sehen kann. Schriftarten und Bilder werden von dieser Website selbst ausgeliefert, nicht von Google oder anderen Dritten.',
    ],
  },

  retention: {
    title: 'Datenspeicherung und deine Rechte',
    body: [
      'Wir speichern selbst keine personenbezogenen Daten über Besucher. Analytics-Daten werden von Google für den in unserer Google-Konfiguration festgelegten Zeitraum aufbewahrt und gelöscht oder anonymisiert, wenn sie nicht mehr benötigt werden.',
      'Je nachdem, wo du lebst, hast du möglicherweise das Recht, auf personenbezogene Daten zuzugreifen, sie zu berichtigen oder zu löschen, der Verarbeitung zu widersprechen und deine Einwilligung jederzeit zu widerrufen. Da diese Website selbst keine personenbezogenen Daten speichert, musst du dich für Anfragen zu Daten, die Google oder GitHub verarbeiten, eventuell an Google oder GitHub wenden. Du kannst dich außerdem bei deiner Datenschutzbehörde beschweren.',
    ],
  },

  app: {
    title: 'Die DegenView-Desktop-App',
    body: [
      'Diese Erklärung gilt für diese Website. Die DegenView-Desktop-App hat weder Analytics noch Telemetrie und braucht kein Konto. Um ihre Aufgabe zu erfüllen, verbindet sie sich direkt von deinem Computer aus mit den unten aufgeführten Diensten. Deine Watchlists, Portfolios und Pine-Skripte bleiben auf deinem Gerät, es sei denn, du schickst sie selbst irgendwohin, zum Beispiel an einen KI-Anbieter, den du eingerichtet hast.',
      'Diese Dienste werden von anderen Unternehmen betrieben, nicht von uns. Wenn du DegenView nutzt, nutzt du deren Daten und Dienste und stimmst damit deren Nutzungsbedingungen und Datenschutzerklärungen zu. Wir kontrollieren sie nicht und sind nicht dafür verantwortlich, wie sie mit Daten umgehen. Manche brauchen ein eigenes Konto oder einen eigenen API-Key von dir, etwa Alpaca und die KI-Anbieter.',
      'Wenn du den KI-Assistenten nutzt, geht der Text, den du sendest und der dein Skript enthalten kann, an den Anbieter, den du gewählt hast. Bei Anbietern, die du selbst betreibst, etwa einem lokalen Modell, bleibt er auf deinem Rechner.',
    ],
    table: {
      caption: 'Dienste, mit denen sich die Desktop-App verbindet, mit ihren Nutzungsbedingungen und Datenschutzerklärungen',
      service: 'Dienst',
      usedFor: 'Verwendet für',
      terms: 'Bedingungen',
      privacy: 'Datenschutz',
      termsSr: ' von {name} (öffnet in einem neuen Tab)',
      privacySr: ' von {name} (öffnet in einem neuen Tab)',
      siteLink: 'Bedingungen und Datenschutz auf {host}',
      groups: {
        marketData: 'Marktdaten',
        other: 'Dienste, die du aktivierst oder nutzt',
      },
    },
    uses: {
      binance: 'Krypto-Kurse und Charts',
      coinbase: 'Krypto-Kurse und Charts',
      coingecko: 'Coin-Listen, Kurse und Charts',
      geckoterminal: 'DEX-Pool-Charts. Betrieben von CoinGecko, dessen Bedingungen gelten',
      dexscreener: 'DEX-Paare und Kurse',
      coinmarketcap: 'Marktindizes wie Fear & Greed. Optionaler API-Key',
      polymarket: 'Prognosemärkte',
      kalshi: 'Prognosemärkte',
      alpaca: 'US-Aktien, mit deinen eigenen kostenlosen API-Keys',
      bitstamp: 'Bitcoin-Kursverlauf für die Währungsumrechnung',
      github: 'Suche nach und Download von Updates',
      x: 'Vorschauen von X-Beiträgen, die du als Karten hinzufügst',
      openai: 'KI-Assistent, nur wenn du deinen eigenen API-Key hinzufügst',
      anthropic: 'KI-Assistent, nur wenn du deinen eigenen API-Key hinzufügst',
      openrouter: 'KI-Assistent, nur wenn du deinen eigenen API-Key hinzufügst',
      icloud: 'Optionale Synchronisierung zwischen deinen Macs',
    },
  },

  contact: {
    title: 'Kontakt und Aktualisierungen',
    intro: 'DegenView ist ein Open-Source-Projekt von Nico Oelgart. Bei Fragen zu dieser Erklärung <a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">eröffne ein Issue auf der GitHub-Seite des Projekts<span class="sr-only"> (öffnet in einem neuen Tab)</span></a>.',
    body: [
      'Wir können diese Erklärung aktualisieren, wenn sich die Rechtslage oder die Website ändert. Das Datum oben zeigt, wann sie zuletzt geändert wurde, und Aktualisierungen werden auf dieser Seite veröffentlicht.',
    ],
    button: 'GitHub-Issue eröffnen',
  },
};
