import type { Dict } from '../en';

export const home: Dict['home'] = {
  meta: {
    title: 'DegenView – फ्री, ओपन सोर्स TradingView का विकल्प',
    description:
      'डेस्कटॉप के लिए फ्री, ओपन सोर्स TradingView का विकल्प: multi-chart लेआउट, लोकल Pine Script v6, alert और replay। macOS, Windows, Linux।',
  },

  jsonLd: {
    alternateNames: ['DegenView – ओपन सोर्स TradingView का विकल्प', 'DegenView Charts'],
  },

  hero: {
    eyebrow: 'फ्री और ओपन सोर्स',
    eyebrowLink: 'TradingView का विकल्प',
    // Features TradingView paywalls. The first one is the static, no-JS headline.
    phrases: ['कई watchlist', 'असीमित indicator', 'multi-chart लेआउट', 'असीमित price alert', '30 से ज़्यादा symbol', 'कई drawing'],
    // Headline = headlineBefore + rotating phrase + headlineMiddle + headlineEmphasis (gradient).
    headlineBefore: 'यहाँ',
    headlineMiddle: 'फ्री हैं,',
    headlineEmphasis: 'प्रीमियम फ़ीचर नहीं।',
    lead: 'आपके डेस्कटॉप के लिए फ्री, ओपन सोर्स TradingView का विकल्प: क्रिप्टो, स्टॉक और prediction market, multi-chart लेआउट में, साथ में लोकल Pine Script, alert और replay। कोई अकाउंट नहीं, और सब कुछ आपकी अपनी मशीन पर चलता है।',
    screenshotAlt: 'ग्रिड लेआउट में कई लाइव chart वाला DegenView डैशबोर्ड',
  },

  // Labels around the quotes in src/data/testimonials.ts (the quotes themselves are verbatim and never translated).
  testimonials: {
    eyebrow: 'फ़ीडबैक',
    heading: 'लोग <span class="gradient-text">क्या कह रहे हैं</span>',
    author: 'यूज़र फ़ीडबैक',
    tags: { debugger: 'Debugger', pine: 'Pine Script', impression: 'पहली छाप' },
  },

  sources: {
    heading: 'डेटा उन्हीं सोर्स से, जिन्हें आप पहले से इस्तेमाल करते हैं',
  },

  features: {
    heading: 'मार्केट डैशबोर्ड में जो कुछ <span class="gradient-text">होना चाहिए, सब कुछ</span>',
    eyebrow: 'फ़ीचर',
    markets: {
      eyebrow: 'मार्केट और लाइव डेटा',
      title: 'हर मार्केट, एक ही स्क्रीन पर।',
      blurb:
        'Binance, Coinbase, OKX, Kraken, Bybit, Gate.io, MEXC, CoinGecko और DEXScreener को साथ-साथ खोजें, US स्टॉक जोड़ें, और Polymarket व Kalshi को प्रोबेबिलिटी के रूप में chart करें।',
      bullets: [
        'Binance, OKX, Kraken, Bybit, Gate.io, MEXC और Coinbase की लाइव कीमतें',
        'Alpaca की फ्री IEX फ़ीड से US स्टॉक',
        'ज़्यादातर सोर्स के लिए API key नहीं चाहिए',
      ],
      alt: 'एक multi-chart लेआउट में BTC, ETH और SOL के chart और Polymarket प्रोबेबिलिटी chart के साथ DegenView',
    },
    'pine-script': {
      eyebrow: 'लोकल Pine Script v6 इंजन',
      title: 'Pine Script लिखें। अपनी मशीन पर चलाएँ।',
      blurb:
        'TradingView-संगत script लिखें और उन्हें अपनी मशीन पर चलाएँ। अकाउंट नहीं चाहिए, और आपका सोर्स डिवाइस से बाहर नहीं जाता।',
      bullets: [
        'MCP से AI असिस्टेंट के साथ vibe coding',
        'ब्रेकपॉइंट और watch वाला step debugger',
        'बिल्ट-इन profiler से देखें script का समय कहाँ जाता है',
      ],
      alt: 'Pine Script एडिटर और लाइव प्रीव्यू chart के साथ DegenView Pine Studio',
      linkLabel: 'Pine Studio देखें',
    },
    mcp: {
      eyebrow: 'MCP सर्वर',
      title: 'AI को आपके chart सँभालने दें।',
      blurb:
        'MCP से AI असिस्टेंट को DegenView से जोड़ें। “support और resistance बनाओ” कहें और उन्हें लाइव chart पर उभरते देखें।',
      bullets: [
        'नए chart और indicator जोड़ें',
        'price alert बनाएँ, एडिट करें और रोकें',
        'Pine script पढ़ें और एडिट करें',
      ],
      alt: 'टर्मिनल में एक AI असिस्टेंट MCP के ज़रिए DegenView chart पर support और resistance लेवल बनाते हुए',
    },
    portfolio: {
      eyebrow: 'Portfolio ट्रैकिंग',
      title: 'कई portfolio। असली P&L।',
      blurb:
        'ट्रांज़ैक्शन लेजर और भारित-औसत अकाउंटिंग के साथ जितने चाहें उतने portfolio ट्रैक करें।',
      bullets: [
        'एलोकेशन, 24 घंटे की हलचल, realized और unrealized P&L',
        'USD, EUR, GBP, JPY, CHF या BTC में रिपोर्ट',
        'CSV import/export, CoinMarketCap समेत',
      ],
      alt: 'वैल्यू chart, एलोकेशन डोनट, P&L कार्ड और टॉप होल्डिंग के साथ DegenView का portfolio ओवरव्यू',
    },
    'paper-trading': {
      eyebrow: 'Paper trading',
      title: 'नकली पैसा, असली chart।',
      blurb:
        'market, limit और stop ऑर्डर और नेट-पोज़िशन ट्रैकिंग वाला लोकल, स्थायी सिमुलेटर। Paper ऑर्डर कभी लाइव एक्सचेंज तक नहीं पहुँचते।',
      bullets: [
        'हर पोज़िशन की भारित-औसत लागत',
        'chart पर पोज़िशन और ऑर्डर मार्कर',
        'रीस्टार्ट के बाद भी बना रहता है, डिवाइस पर ही',
      ],
      alt: 'chart पर BTC की लॉन्ग पोज़िशन और नीचे पोज़िशन टेबल के साथ DegenView का paper trading',
    },
    replay: {
      eyebrow: 'Bar replay',
      title: 'मार्केट रिवाइंड करें, बार-दर-बार।',
      blurb:
        'इतिहास का कोई भी पल चुनें और अपनी रफ़्तार पर replay करें, बिना lookahead के, सभी chart पर एक साथ।',
      bullets: [
        'किसी भी candle या सटीक समय से शुरू करें',
        'एक साझा घड़ी सभी chart को सिंक रखती है',
        'paper-trading टिकट से एंट्री की प्रैक्टिस करें',
      ],
      alt: 'ऐतिहासिक chart के ऊपर टाइमलाइन स्क्रबर और स्पीड सिलेक्टर वाले bar replay कंट्रोल',
    },
  },

  // Cards under "and while you're here". A trailing * marks the title that carries `note`.
  extras: {
    eyebrow: 'और जब आप यहाँ हैं ही',
    heading: 'बाकी <span class="gradient-text">अच्छी चीज़ें</span>',
    intro: 'हर फ़ीचर के लिए स्क्रीनशॉट नहीं बनता। इन्होंने इलस्ट्रेशन कमाया है।',
    illustrationAria: '{title} का इलस्ट्रेशन',
    'no-account': {
      tag: 'Privacy',
      title: 'कोई अकाउंट नहीं। कोई साइन-अप नहीं।*',
      text: 'ऐप खोलें और इस्तेमाल करें। न कोई ईमेल वेरिफ़ाई करना, न कोई ट्रायल शुरू करना, और न “वापसी पर स्वागत है!” को बंद करना।',
      note: 'Alpaca अपवाद है: उसके फ्री US स्टॉक डेटा के लिए Alpaca अकाउंट और आपकी अपनी API key चाहिए। यह उनका नियम है, हमारा नहीं।',
    },
    watchlists: {
      tag: 'Watchlist',
      title: 'असीमित watchlist',
      text: 'जितनी चाहें बनाएँ। “एक और सूची जोड़ने के लिए अपग्रेड करें” कभी कोई फ़ीचर नहीं था।',
    },
    tools: {
      tag: 'Drawing',
      title: 'वही chart टूल, जो आपको पसंद हैं',
      text: 'ड्रॉइंग टूलबॉक्स, जिसकी आदत TradingView यूज़र्स की उँगलियों में है, बस प्लान की तुलना वाली टेबल के बिना।',
    },
    indicators: {
      tag: 'Indicator',
      title: 'जितने indicator आपका CPU सँभाल सके',
      text: 'Volume, RSI, EMA, Bollinger Bands, Supertrend और आपकी अपनी Pine script। तब तक जोड़ते रहें, जब तक आपके पंखे शिकायत न कर दें।',
    },
    alerts: {
      tag: 'Alert',
      title: 'Price alert',
      text: 'एक मार्केट ऐप, जो कीमत हिलने पर आपको बताता है। क्रांतिकारी, हम जानते हैं।',
    },
    webhooks: {
      tag: 'Webhook',
      title: 'Webhook alert',
      text: 'Price alert और Pine के alert() कॉल आपके सेट किए webhook को हिट कर सकते हैं। उन्हें किसी बॉट, Discord या जो भी आपको पसंद हो, उससे जोड़ें।',
    },
    ai: {
      tag: 'Pine',
      title: 'Pine Script के लिए AI मदद',
      text: 'आपकी script के लिए बिल्ट-इन कोडिंग असिस्टेंट। पहला ड्राफ़्ट वह लिखता है, क्रेडिट आप लेते हैं।',
    },
    icloud: {
      tag: 'macOS',
      title: 'macOS पर iCloud सिंक',
      text: 'चालू करें और आपका सेटअप आपके अपने iCloud के ज़रिए आपके Mac के बीच साथ चलता है, हमारे किसी सर्वर से नहीं।',
    },
  },

  download: {
    heading: 'DegenView लें। <span class="gradient-text block">यह फ्री है।</span>',
    // {version} is replaced with the release tag (rendered in monospace).
    latest: 'नवीनतम रिलीज़ {version}। कोई अकाउंट नहीं, कोई ट्रायल नहीं, कोई छिपी शर्त नहीं।',
    languages: 'ऐप अंग्रेज़ी, स्पेनिश, जर्मन, रूसी और सरलीकृत चीनी में उपलब्ध है।',
    allDownloads: 'सभी downloads',
    faq: 'FAQ',
    freeForever: 'हमेशा फ्री। अगर यह आपकी स्क्रीन पर जगह कमा ले:',
  },

  // Text inside the inline SVG illustrations (SVG text does not wrap: keep these short).
  // Also used by the FAQ illustrations (free, shield, smartscreen).
  illustrations: {
    noAccount: { email: 'ईमेल', password: 'पासवर्ड', cta: 'बस खोलिए' },
    watchlists: { title: 'Watchlist 7', newButton: '+ नई' },
    indicators: { load: 'लोड', indicators: 'indicator' },
    alerts: { crossedAbove: '76,000 के ऊपर गया' },
    ai: { suggestion: 'RSI alert जोड़ें' },
    free: { forever: 'हमेशा', noAccount: 'कोई अकाउंट नहीं' },
    shield: { noAnalytics: 'कोई analytics नहीं', noTelemetry: 'कोई telemetry नहीं', noAccount: 'कोई अकाउंट नहीं' },
    smartscreen: { title: 'Windows protected your PC', moreInfo: 'More info', runAnyway: 'Run anyway' },
  },
};
