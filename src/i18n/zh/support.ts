import type { Dict } from '../en';

export const support: Dict['support'] = {
  meta: {
    title: '支持 DegenView – 免费且开源',
    description: 'DegenView 免费、开源，由一个人打造。请我喝杯咖啡、发送加密货币、给项目点星标，或者帮忙宣传，让它继续走下去。',
  },
  breadcrumbs: { home: '首页', support: '支持' },

  hero: {
    eyebrow: '支持',
    title: '让它一直<span class="gradient-text">免费</span>',
    lead: '没有广告，没有付费墙，背后只有一个人。如果 DegenView 值得在你的屏幕上占一席之地，这里是帮它继续走下去的方式。',
    star: '在 GitHub 上点星标',
    note: '没有压力。用 DegenView 本身就是帮助，无论如何一切都会保持免费。',
  },

  chipIn: {
    eyebrow: '出一份力',
    title: '为开发<span class="gradient-text">加油</span>',
    lead: '你的支持会直接交给维护者，换来更多投入 DegenView 的时间。多少都欢迎，也不强求。',
    coffee: {
      tag: '金额随意',
      title: '请我喝杯咖啡',
      body: '最快的致谢方式：通过 Buy Me a Coffee 请我喝一杯，一分钟搞定。',
    },
    crypto: {
      tag: '链上',
      title: '发送加密货币',
      body: '更喜欢用钱包？复制地址直接转账。没有中间人，除网络费用外没有其他费用。',
      button: '查看地址',
    },
  },

  supporters: {
    title: '近期<span class="gradient-text">支持者</span>',
    lead: '感谢每一份支持，让 DegenView 继续免费。',
    anonymous: '匿名支持者',
  },

  crypto: {
    eyebrow: '加密货币',
    title: '链上的<span class="gradient-text">谢意</span>',
    lead: '请复制对应网络的地址。转到错误网络的资金无法找回，发送前请务必确认。',
    list: '加密货币地址',
    copy: '复制',
    copyAria: '复制 {name} 地址',
    copied: '已复制',
    copyFailed: '请按 ⌘/Ctrl+C',
    network: '仅通过 {network} 网络发送 {ticker}。',
    addressLabel: '{name} 地址',
    safety: '只从本页面复制地址，粘贴后请核对开头和结尾的几个字符。',
  },

  free: {
    eyebrow: '免费的方式',
    title: '没有钱包？<span class="gradient-text">没关系</span>',
    lead: '这些同样有帮助，每一项大约只需一分钟。',
    badge: '免费',
    star: {
      title: '给项目点星标',
      body: '大家就是靠星标发现开源项目的。点一下，就能让更多交易者发现 DegenView。',
      button: '在 GitHub 上点星标',
      count: '{count} 个星标',
    },
    share: {
      title: '帮忙宣传',
      body: '告诉做交易的朋友，发一张截图，或者回答“有没有免费的 TradingView 替代品？”这类帖子。社区在 Reddit 上。',
      x: '分享到 X',
      /** Pre-filled post text. The page URL is appended by X. */
      xText: 'DegenView：免费、开源的桌面版 TradingView 替代品。',
    },
    feedback: {
      title: '报告问题，分享想法',
      body: '你报告的每个问题都会为所有人修好。告诉我们你遇到了什么，或者接下来想看到什么。',
      button: '提交 Issue',
    },
    contribute: {
      title: '参与贡献',
      body: '代码、文档或翻译都行。DegenView 支持六种语言，非常欢迎母语者来修正翻译。',
      code: '源代码',
      translations: '翻译',
      docs: '文档',
    },
  },

  good: {
    eyebrow: '先说清楚',
    title: '<span class="gradient-text">细则</span>说明',
    items: [
      { claim: '没有任何锁定', text: '所有功能对所有人免费。支持是一份谢意，不是购买，也不会解锁任何东西。' },
      { claim: '交给维护者', text: '你的支持用来换取开发、测试和维护 DegenView 所需的时间，也就是一个人的时间。' },
      { claim: '永远免费', text: 'DegenView 以 GPL-3.0 开源。没有广告，没有付费墙，现在如此，以后也是。' },
    ],
  },

  cta: {
    title: '<span class="gradient-text">谢谢</span>你',
    lead: '无论你出一份力、点个星标，还是只是用一用：有你才有它。',
  },
};
