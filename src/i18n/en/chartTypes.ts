export const chartTypes = {
  eyebrow: 'chart types',
  title: 'Candles are <span class="gradient-text">just the start</span>',
  // {count} = number of chart types
  lead: '{count} chart types, all one click away. Pick your poison.',
  // {name} = the chart type's name
  exampleAlt: '{name} chart example',
  previous: 'Previous chart type',
  next: 'Next chart type',
  pause: 'Pause autoplay',
  play: 'Start autoplay',
  /** One entry per chart type, keyed by id (the page draws the matching illustration). Order follows the app's picker. */
  items: {
    candles: { name: 'Candles', desc: 'The classic: open, high, low and close in one body-and-wick shape.' },
    hollowCandles: { name: 'Hollow Candles', desc: 'Rising candles are hollow and falling ones are filled, so momentum reads at a glance.' },
    bars: { name: 'Bars', desc: 'A vertical range line with a tick for the open on the left and the close on the right.' },
    highLowBars: { name: 'High-Low Bars', desc: 'Each bar spans just the high to the low. Pure range, no opinions about the close.' },
    volumeCandles: { name: 'Volume Candles', desc: 'Candles whose width grows with traded volume, so the heavy bars stand out.' },
    heikinAshi: { name: 'Heikin Ashi', desc: 'Averaged candles that smooth out the noise and make trends easier to follow.' },
    line: { name: 'Line', desc: 'Closing prices joined into one clean line.' },
    lineWithMarkers: { name: 'Line with Markers', desc: 'The same line, with a dot on every close.' },
    stepLine: { name: 'Step Line', desc: 'Holds each close flat until the next one, so you see exactly when price changed.' },
    area: { name: 'Area', desc: 'A line with everything below it filled in.' },
    hlcArea: { name: 'HLC Area', desc: 'The high-low range as a band around the closing line.' },
    baseline: { name: 'Baseline', desc: 'Green above a reference level, red below it.' },
    columns: { name: 'Columns', desc: 'Closing prices as bars from the bottom, tinted by direction.' },
    renko: { name: 'Renko', desc: 'Fixed-size bricks that only appear when price moves far enough. No move, no brick.' },
    kagi: { name: 'Kagi', desc: 'Vertical lines joined by short steps, switching direction only on a meaningful reversal.' },
    lineBreak: { name: 'Line Break', desc: 'A new block forms only when price breaks the recent range, which filters out the noise.' },
    pointAndFigure: { name: 'Point & Figure', desc: 'Columns of Xs and Os for rising and falling prices, with no time axis at all.' },
    range: { name: 'Range', desc: 'Every bar covers the same price range, so a quiet market simply draws fewer bars.' },
  },
};
