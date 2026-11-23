import type { Dict } from '../en';

export const support: Dict['support'] = {
  meta: {
    title: 'DegenView unterstützen – Kostenlos und Open Source',
    description:
      'DegenView ist kostenlos, Open Source und wird von einer Person gebaut. Spendier einen Kaffee, sende Krypto, gib dem Projekt einen Stern oder erzähl davon.',
  },
  breadcrumbs: { home: 'Startseite', support: 'Unterstützen' },

  hero: {
    eyebrow: 'unterstützen',
    title: 'Damit es <span class="gradient-text">kostenlos</span> bleibt',
    lead: 'Keine Werbung, keine Paywall und nur eine Person dahinter. Wenn DegenView einen Platz auf deinem Bildschirm verdient, kannst du so helfen, dass es weitergeht.',
    star: 'Stern auf GitHub',
    note: 'Kein Druck. DegenView zu nutzen hilft schon, und alles bleibt in jedem Fall kostenlos.',
  },

  chipIn: {
    eyebrow: 'mach mit',
    title: 'Treibstoff für die <span class="gradient-text">Arbeit</span>',
    lead: 'Deine Unterstützung geht direkt an den Maintainer und schafft mehr Zeit für DegenView. Jeder Betrag ist willkommen, keiner wird erwartet.',
    coffee: {
      tag: 'Jeder Betrag',
      title: 'Spendier mir einen Kaffee',
      body: 'Der schnellste Weg, Danke zu sagen: ein einmaliger Kaffee über Buy Me a Coffee, in einer Minute erledigt.',
    },
    crypto: {
      tag: 'On-Chain',
      title: 'Krypto senden',
      body: 'Lieber mit der Wallet? Kopiere eine Adresse und sende direkt. Ohne Mittelsmann und ohne Gebühren außer denen des Netzwerks.',
      button: 'Adressen anzeigen',
    },
  },

  crypto: {
    eyebrow: 'krypto',
    title: 'Danke <span class="gradient-text">on-chain</span>',
    lead: 'Kopiere die Adresse für dein Netzwerk. Gelder, die ans falsche Netzwerk gehen, sind nicht zurückholbar. Prüfe es also vor dem Senden.',
    list: 'Krypto-Adressen',
    copy: 'Kopieren',
    copyAria: '{name}-Adresse kopieren',
    copied: 'Kopiert',
    copyFailed: 'Strg+C drücken',
    network: 'Sende {ticker} nur über das Netzwerk {network}.',
    addressLabel: '{name}-Adresse',
    safety: 'Kopiere Adressen nur von dieser Seite und vergleiche nach dem Einfügen die ersten und letzten Zeichen.',
  },

  free: {
    eyebrow: 'kostenlose wege',
    title: 'Keine Wallet? <span class="gradient-text">Kein Problem</span>',
    lead: 'Das hilft genauso viel und dauert jeweils etwa eine Minute.',
    badge: 'Gratis',
    star: {
      title: 'Gib dem Projekt einen Stern',
      body: 'Über Sterne finden Leute Open-Source-Projekte. Ein Klick hilft, dass mehr Trader DegenView entdecken.',
      button: 'Stern auf GitHub',
      count: '{count} Sterne',
    },
    share: {
      title: 'Erzähl davon',
      body: 'Sag es einem Trader-Freund, poste einen Screenshot oder antworte auf einen Thread zu „kostenlose TradingView-Alternative?“. Die Community trifft sich auf Reddit.',
      x: 'Auf X teilen',
      /** Pre-filled post text. The page URL is appended by X. */
      xText: 'DegenView: eine kostenlose Open-Source-Alternative zu TradingView für deinen Desktop.',
    },
    feedback: {
      title: 'Fehler melden, Ideen teilen',
      body: 'Jede Macke, die du meldest, wird für alle behoben. Sag uns, worüber du gestolpert bist oder was du als Nächstes sehen willst.',
      button: 'Issue öffnen',
    },
    contribute: {
      title: 'Mitmachen',
      body: 'Code, Doku oder Übersetzungen. DegenView spricht sechs Sprachen, und Korrekturen von Muttersprachlern sind sehr willkommen.',
      code: 'Quellcode',
      translations: 'Übersetzungen',
      docs: 'Doku',
    },
  },

  good: {
    eyebrow: 'gut zu wissen',
    title: 'Das <span class="gradient-text">Kleingedruckte</span>',
    items: [
      { claim: 'Nichts ist gesperrt', text: 'Alle Funktionen sind für alle kostenlos. Unterstützung ist ein Dankeschön, kein Kauf, und schaltet nichts frei.' },
      { claim: 'Geht an den Maintainer', text: 'Deine Unterstützung bezahlt die Zeit, die es braucht, DegenView zu bauen, zu testen und zu pflegen: die Zeit einer einzigen Person.' },
      { claim: 'Für immer kostenlos', text: 'DegenView ist Open Source unter GPL-3.0. Keine Werbung, keine Paywall, jetzt und später.' },
    ],
  },

  cta: {
    title: 'Vielen <span class="gradient-text">Dank</span>',
    lead: 'Ob du etwas beisteuerst, einen Stern gibst oder es einfach nutzt: Du bist der Grund, warum es das gibt.',
  },
};
