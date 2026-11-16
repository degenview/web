import type { Dict } from '../en';

export const chartTypes: Dict['chartTypes'] = {
  eyebrow: '图表类型',
  title: 'K 线<span class="gradient-text">只是开始</span>',
  // {count} = number of chart types
  lead: '{count} 种图表类型，一键切换，总有一款合你口味。',
  // {name} = the chart type's name
  exampleAlt: '{name}图表示例',
  previous: '上一种图表类型',
  next: '下一种图表类型',
  pause: '暂停自动播放',
  play: '开始自动播放',
  /** One entry per chart type, keyed by id (the page draws the matching illustration). Order follows the app's picker. */
  items: {
    candles: { name: 'K 线', desc: '经典款：开盘、最高、最低、收盘价，尽在一根带影线的实体里。' },
    hollowCandles: { name: '空心 K 线', desc: '上涨为空心，下跌为实心，动能一眼就能看清。' },
    bars: { name: '美国线', desc: '一根竖线表示价格区间，左侧短横为开盘价，右侧短横为收盘价。' },
    highLowBars: { name: '高低线', desc: '每根线只显示最高价到最低价，只看波动区间，不管收盘价。' },
    volumeCandles: { name: '成交量 K 线', desc: 'K 线宽度随成交量变化，放量的那几根格外显眼。' },
    heikinAshi: { name: '平均 K 线', desc: '经过平均处理的 K 线，过滤杂波，趋势更好跟。' },
    line: { name: '折线图', desc: '把收盘价连成一条干净的线。' },
    lineWithMarkers: { name: '带标记折线图', desc: '同样的折线，每个收盘价上多一个圆点。' },
    stepLine: { name: '阶梯线', desc: '收盘价保持水平直到下一个价格出现，价格何时变动一目了然。' },
    area: { name: '面积图', desc: '折线下方整片填充。' },
    hlcArea: { name: 'HLC 面积图', desc: '把最高价与最低价之间的区间画成围绕收盘线的色带。' },
    baseline: { name: '基准线图', desc: '高于参考价位显示绿色，低于则显示红色。' },
    columns: { name: '柱状图', desc: '收盘价以自底部升起的柱子呈现，并按涨跌着色。' },
    renko: { name: '砖形图', desc: '固定大小的砖块，只有价格走出足够幅度才会出现。价格不动，就不出砖。' },
    kagi: { name: '卡吉图', desc: '竖线之间以短横相连，只有出现有意义的反转时才转向。' },
    lineBreak: { name: '新价线', desc: '只有价格突破近期区间才会生成新的方块，自然滤掉杂波。' },
    pointAndFigure: { name: '点数图', desc: '用 X 和 O 的列表示上涨和下跌，完全没有时间轴。' },
    range: { name: '区间图', desc: '每根线覆盖相同的价格区间，行情清淡时自然就少画几根。' },
  },
};
