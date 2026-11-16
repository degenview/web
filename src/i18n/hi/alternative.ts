import type { Dict } from '../en';

export const alternative: Dict['alternative'] = {
  meta: {
    title: 'DegenView बनाम TradingView: फ्री, ओपन सोर्स विकल्प',
    description:
      'DegenView बनाम TradingView: लोकल Pine Script v6, असीमित watchlist, alert और replay वाला फ्री, ओपन सोर्स विकल्प। macOS, Windows, Linux।',
    breadcrumb: 'TradingView का विकल्प',
  },

  hero: {
    eyebrow: 'TradingView का विकल्प',
    title: 'फ्री, ओपन सोर्स <span class="gradient-text block">TradingView का विकल्प</span>',
    lead: 'क्रिप्टो, स्टॉक और prediction market के लिए डेस्कटॉप ऐप, जिसकी Pine Script आपकी अपनी मशीन पर चलती है।',
    chips: ['ओपन सोर्स · GPL-3.0', 'कोई अकाउंट नहीं', 'macOS · Windows · Linux'],
    priceCard: {
      forever: 'हमेशा',
      download: 'फ्री में Download करें',
      note: 'कोई अकाउंट नहीं। कोई क्रेडिट कार्ड नहीं। कोई ट्रायल की घड़ी नहीं।',
      platformsAria: 'macOS, Windows और Linux के लिए उपलब्ध',
    },
  },

  ladder: {
    eyebrow: 'कीमत',
    title: 'आप कितना <span class="gradient-text">देना चाहते हैं?</span>',
    lead: 'TradingView में सीढ़ी है। DegenView में फ़र्श है, और वह फ्री है।',
    freeBadge: 'फ्री',
    perMonthForever: 'प्रति माह, हमेशा',
    planName: 'TradingView {name}',
    perMonthBilledAnnually: 'प्रति माह, सालाना बिलिंग',
    perYear: '≈ {amount} प्रति वर्ष',
    note: 'कीमतें TradingView की हैं, यूरो में, जैसी {date} में उसके <a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="nofollow noopener noreferrer">प्राइसिंग पेज<span class="sr-only"> (नए टैब में खुलता है)</span></a> पर सूचीबद्ध थीं। ये बदलती रहती हैं और क्षेत्र के हिसाब से अलग होती हैं, इसलिए फ़ैसले से पहले वहीं जाँच लें।',
  },

  freeVsFree: {
    eyebrow: 'फ्री बनाम फ्री',
    title: 'बिना पैसे दिए <span class="gradient-text">आपको क्या मिलता है</span>',
    lead: 'दोनों शुरू में फ्री हैं। फ्री रहता सिर्फ़ एक है।',
    degenview: {
      subtitle: 'फ्री और ओपन सोर्स',
      // Order matters: one entry per row.
      items: [
        'असीमित watchlist',
        'जितने indicator आपका CPU सँभाल सके',
        'Multi-chart लेआउट',
        'बिना प्लान लिमिट के price alert',
        'आपकी मशीन पर चलने वाला Pine Script v6 इंजन',
        'Bar replay, paper trading और portfolio ट्रैकिंग',
        'ओपन सोर्स (GPL-3.0)',
        'अकाउंट की ज़रूरत नहीं',
      ],
      download: 'फ्री में Download करें',
    },
    tradingview: {
      subtitle: 'फ्री (Basic) प्लान',
      // Order matters: the ✓ / – / ✗ marker of each row is set in the page code.
      items: [
        'हर chart पर 2 indicator',
        'हर टैब में 1 chart',
        '1 watchlist, अधिकतम 30 symbol',
        '3 सक्रिय price alert',
        'Pine Script TradingView के सर्वर पर चलती है',
        'वेब, डेस्कटॉप और मोबाइल ऐप',
        'विशाल कम्युनिटी और script लाइब्रेरी',
        'क्लोज़्ड सोर्स',
      ],
      plans: 'TradingView के प्लान देखें',
    },
    sr: {
      included: 'शामिल: ',
      limited: 'सीमित: ',
      notAvailable: 'उपलब्ध नहीं: ',
      opensNewTab: ' (नए टैब में खुलता है)',
    },
    legendLimit: 'फ्री प्लान पर सीमा',
    checked: 'TradingView के आँकड़े आख़िरी बार {date} को जाँचे गए',
  },

  better: {
    eyebrow: 'ईमानदारी से कहें तो',
    title: 'TradingView <span class="gradient-text">अब भी बेहतर क्या करता है</span>',
    lead: 'हम चाहेंगे कि आप सही टूल चुनें, सबसे ज़ोर से बोलने वाला नहीं।',
    // Order matters: icons are set in the page code.
    items: [
      { title: 'हर जगह ऐप', description: 'वेब और मोबाइल ऐप: आपके chart किसी भी ब्राउज़र या फ़ोन पर आपके साथ चलते हैं।' },
      { title: 'ज़्यादा बड़े मार्केट', description: 'क्रिप्टो, US स्टॉक और prediction market से आगे: स्टॉक, फ़्यूचर्स, फ़ॉरेक्स, बॉन्ड और आर्थिक डेटा।' },
      { title: 'बड़ी कम्युनिटी', description: 'प्रकाशित आइडिया और दूसरों की script की एक सार्वजनिक लाइब्रेरी।' },
      { title: 'chart से ही ट्रेड', description: 'chart छोड़े बिना कनेक्टेड ब्रोकर के ज़रिए ऑर्डर लगाएँ।' },
    ],
    closing:
      'इन पर निर्भर हैं? TradingView को DegenView के साथ रखें। ज़्यादातर तेज़ chart, indicator, alert और replay चाहिए, बिना किसी प्लान के झंझट के? यह फ्री वाला है।',
  },

  comingFrom: {
    eyebrow: 'यहाँ आ रहे हैं',
    title: '<span class="gradient-text">TradingView</span> से आ रहे हैं',
    items: [
      { title: 'Pine Script v6', description: 'अपनी script Pine Studio में पेस्ट करें और लोकल चलाएँ, step debugger और profiler के साथ।' },
      { title: 'जाने-पहचाने टूल', description: 'ट्रेंड लाइन, Fibonacci retracement, रूलर, और candle से लेकर Renko और Kagi तक 18 chart प्रकार।' },
      { title: 'chart से बढ़कर', description: 'Bar replay, paper trading, portfolio ट्रैकिंग, webhook वाले alert, और AI असिस्टेंट के लिए वैकल्पिक MCP सर्वर।' },
    ],
  },

  cta: {
    title: 'आज फ्री। <span class="gradient-text block">हमेशा फ्री।</span>',
    lead: 'कोई अकाउंट नहीं, कोई ट्रायल नहीं, कोई छिपी शर्त नहीं। macOS, Windows और Linux।',
    disclaimer:
      'DegenView एक स्वतंत्र प्रोजेक्ट है और TradingView से इसका कोई संबंध नहीं है, न TradingView ने इसका समर्थन किया है और न इसे प्रायोजित किया है। TradingView और Pine Script, TradingView, Inc. के ट्रेडमार्क हैं, जिनका नाम यहाँ सिर्फ़ यह बताने के लिए लिया गया है कि DegenView किसका विकल्प है और किसके साथ संगत है।',
  },
};
