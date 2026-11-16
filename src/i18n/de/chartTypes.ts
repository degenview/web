import type { Dict } from '../en';

export const chartTypes: Dict['chartTypes'] = {
  eyebrow: 'Chartarten',
  title: 'Kerzen sind <span class="gradient-text">erst der Anfang</span>',
  lead: '{count} Chartarten, alle nur einen Klick entfernt. Such dir deine aus.',
  exampleAlt: 'Beispiel für ein {name}-Chart',
  previous: 'Vorherige Chartart',
  next: 'Nächste Chartart',
  pause: 'Autoplay pausieren',
  play: 'Autoplay starten',
  // Die Namen entsprechen den englischen Bezeichnungen im Chartarten-Menü der App und bleiben deshalb stehen.
  items: {
    candles: { name: 'Candles', desc: 'Der Klassiker: Eröffnung, Hoch, Tief und Schluss in einer Form aus Körper und Docht.' },
    hollowCandles: { name: 'Hollow Candles', desc: 'Steigende Kerzen sind hohl, fallende gefüllt, so liest du das Momentum auf einen Blick.' },
    bars: { name: 'Bars', desc: 'Eine senkrechte Spannenlinie mit einem Strich für die Eröffnung links und den Schluss rechts.' },
    highLowBars: { name: 'High-Low Bars', desc: 'Jeder Balken reicht nur vom Hoch zum Tief. Reine Spanne, keine Meinung zum Schlusskurs.' },
    volumeCandles: { name: 'Volume Candles', desc: 'Kerzen, deren Breite mit dem gehandelten Volumen wächst, sodass die dicken Brocken auffallen.' },
    heikinAshi: { name: 'Heikin Ashi', desc: 'Gemittelte Kerzen, die das Rauschen glätten und Trends leichter verfolgbar machen.' },
    line: { name: 'Line', desc: 'Schlusskurse, zu einer sauberen Linie verbunden.' },
    lineWithMarkers: { name: 'Line with Markers', desc: 'Dieselbe Linie, mit einem Punkt bei jedem Schlusskurs.' },
    stepLine: { name: 'Step Line', desc: 'Hält jeden Schlusskurs flach bis zum nächsten, sodass du genau siehst, wann sich der Kurs geändert hat.' },
    area: { name: 'Area', desc: 'Eine Linie, bei der alles darunter ausgefüllt ist.' },
    hlcArea: { name: 'HLC Area', desc: 'Die Spanne von Hoch bis Tief als Band um die Schlusskurslinie.' },
    baseline: { name: 'Baseline', desc: 'Grün über einer Referenzmarke, rot darunter.' },
    columns: { name: 'Columns', desc: 'Schlusskurse als Säulen von unten, nach Richtung eingefärbt.' },
    renko: { name: 'Renko', desc: 'Steine fester Größe, die nur erscheinen, wenn sich der Kurs weit genug bewegt. Keine Bewegung, kein Stein.' },
    kagi: { name: 'Kagi', desc: 'Senkrechte Linien, durch kurze Stufen verbunden. Die Richtung wechselt nur bei einer echten Umkehr.' },
    lineBreak: { name: 'Line Break', desc: 'Ein neuer Block entsteht nur, wenn der Kurs die jüngste Spanne durchbricht. Das filtert das Rauschen.' },
    pointAndFigure: { name: 'Point & Figure', desc: 'Spalten aus X und O für steigende und fallende Kurse, ganz ohne Zeitachse.' },
    range: { name: 'Range', desc: 'Jeder Balken deckt dieselbe Kursspanne ab, ein ruhiger Markt zeichnet also einfach weniger Balken.' },
  },
};
