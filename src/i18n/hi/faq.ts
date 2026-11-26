import type { Dict } from '../en';

interface Entry {
  /** Question. Also the accordion summary. */
  q: string;
  /** Answer. Plain text (no HTML): it is also used verbatim for the FAQPage structured data. */
  a: string;
  /** Labels of the follow-up links under the answer, in the order of the links in `src/data/faq.ts`. */
  links?: string[];
}
const entry = (e: Entry): Entry => e;

export const faq: Dict['faq'] = {
  meta: {
    title: 'DegenView FAQ – फ्री, ओपन सोर्स TradingView का विकल्प',
    description:
      'फ्री, ओपन सोर्स TradingView का विकल्प DegenView के बारे में जवाब: अकाउंट, Pine Script, स्टॉक डेटा, प्लेटफ़ॉर्म और पहली बार चलाने की चेतावनी।',
  },
  breadcrumbs: { home: 'होम', faq: 'FAQ' },
  hero: {
    eyebrow: 'faq',
    title: 'सवाल, <span class="gradient-text">जवाब</span>',
    lead: 'वह सब कुछ जो लोग download से पहले पूछते हैं। यहाँ न मिले, तो GitHub पर पूछें।',
    searchLabel: 'सवाल खोजें',
    /** {count} = number of questions. */
    searchPlaceholder: '{count} सवालों में खोजें',
    /** Result count while searching, by plural category ({count} = matches). Add the categories your language needs (zero, one, two, few, many, other). */
    found: {
      one: '{count} सवाल मिला',
      other: '{count} सवाल मिले',
    } as Record<string, string>,
  },
  nav: {
    label: 'विषय',
    heading: 'विषय',
  },
  groups: {
    basics: { title: 'बुनियादी बातें', intro: 'इसकी कीमत क्या है, इसके पीछे कौन है, और यह क्या नहीं है।' },
    scripts: { title: 'Pine Script और AI', intro: 'script चलाना, और वे व आपके chart कहाँ तक जा सकते हैं।' },
    data: { title: 'डेटा और प्राइवेसी', intro: 'कीमतें कहाँ से आती हैं और हमें आपके बारे में क्या पता है (बहुत कम)।' },
    install: { title: 'Install और प्लेटफ़ॉर्म', intro: 'क्या कहाँ चलता है, और पहली बार चलाने पर क्या करें।' },
  },
  /** Alt text of a topic illustration. {title} = topic title. */
  groupArtLabel: '{title} का इलस्ट्रेशन',
  /** Alt text of an answer illustration. {question} = the question. */
  itemArtLabel: 'इलस्ट्रेशन: {question}',
  empty:
    'इससे कोई सवाल मेल नहीं खाता। <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">GitHub पर पूछें<span class="sr-only"> (नए टैब में खुलता है)</span></a>, हम इसे जोड़ देंगे।',
  cta: {
    title: 'अब भी <span class="gradient-text">कोई सवाल है?</span>',
    lead: 'एक issue खोलें, हम जवाब देंगे। या बस DegenView download करें और खुद देख लें।',
    download: 'फ्री में Download करें',
    ask: 'GitHub पर पूछें',
  },
  items: {
    free: entry({
      q: 'क्या DegenView सच में फ्री है?',
      a: 'हाँ। DegenView GPL-3.0 के तहत फ्री और ओपन सोर्स है। कोई पेड टियर नहीं है और कोई फ़ीचर लॉक नहीं है।',
    }),
    alternative: entry({
      q: 'क्या DegenView TradingView का फ्री विकल्प है?',
      a: 'हाँ। DegenView क्रिप्टो, स्टॉक और prediction market के लिए फ्री, ओपन सोर्स डेस्कटॉप ऐप है, जिसमें multi-chart लेआउट, लोकल Pine Script v6 इंजन, alert, bar replay और portfolio ट्रैकिंग हैं। यह TradingView से स्वतंत्र है और TradingView की हर चीज़ की जगह नहीं लेता।',
      links: ['तुलना देखें'],
    }),
    openSource: entry({
      q: 'क्या DegenView ओपन सोर्स है?',
      a: 'हाँ। सोर्स कोड GitHub पर GPL-3.0-only लाइसेंस के तहत सार्वजनिक है, और रिलीज़ बिल्ड एक सार्वजनिक workflow से बनते हैं।',
    }),
    account: entry({
      q: 'क्या मुझे अकाउंट चाहिए?',
      a: 'नहीं। साइन-अप करने को कुछ नहीं है। alert, portfolio, paper trading और Pine Script, सब आपकी मशीन पर लोकल चलते हैं।',
    }),
    affiliation: entry({
      q: 'क्या इसका TradingView या डेटा प्रदाताओं से कोई संबंध है?',
      a: 'नहीं। DegenView एक स्वतंत्र प्रोजेक्ट है। Pine Script और TradingView, TradingView, Inc. के ट्रेडमार्क हैं। Pine Script TradingView की भाषा है, और DegenView उसमें लिखी script के लिए अपना इंजन चलाता है। अन्य सभी ट्रेडमार्क उनके संबंधित स्वामियों के हैं।',
    }),
    languages: entry({
      q: 'DegenView किन भाषाओं में उपलब्ध है?',
      a: 'ऐप अंग्रेज़ी, स्पेनिश, जर्मन, रूसी और सरलीकृत चीनी में उपलब्ध है। यह आपके सिस्टम की भाषा अपनाता है, या आप Settings ▸ Appearance ▸ Language में कोई भाषा चुन सकते हैं।',
      links: ['भाषा कैसे बदलें (अंग्रेज़ी में)'],
    }),
    runPine: entry({
      q: 'क्या मैं अपनी TradingView Pine Script DegenView में चला सकता हूँ?',
      a: 'हाँ। DegenView Pine Script v6 के लिए अपना इंजन लोकल चलाता है। यह एक स्वतंत्र इम्प्लीमेंटेशन है, इसलिए बहुत अनोखी script TradingView से अलग व्यवहार कर सकती हैं।',
    }),
    pinePrivacy: entry({
      q: 'मेरी Pine Script कहाँ जाती हैं?',
      a: 'डिफ़ॉल्ट रूप से कहीं नहीं। Script आपके कंप्यूटर पर चलती हैं और सोर्स वहीं रहता है, जब तक आप खुद उसे कहीं भेजना न चुनें, जैसे असिस्टेंट के लिए सेट किए गए किसी AI प्रोवाइडर को।',
    }),
    aiAssistant: entry({
      q: 'क्या मैं AI असिस्टेंट जोड़ सकता हूँ?',
      a: 'हाँ। DegenView में एक वैकल्पिक MCP सर्वर है, जिससे AI असिस्टेंट और ऑटोमेशन टूल आपके chart, alert और Pine script के साथ काम कर सकते हैं। यह डिफ़ॉल्ट रूप से बंद रहता है, और हर कनेक्शन को क्या करने की इजाज़त है, यह आप तय करते हैं।',
    }),
    stockData: entry({
      q: 'स्टॉक डेटा कैसे मिलेगा?',
      a: 'US स्टॉक Alpaca की फ्री IEX फ़ीड से आते हैं। बस Settings में अपनी फ्री Alpaca API key जोड़ दें। क्रिप्टो, prediction market और CoinMarketCap इंडेक्स के लिए किसी key की ज़रूरत ही नहीं।',
      links: ['सभी डेटा सोर्स देखें'],
    }),
    dataCollection: entry({
      q: 'क्या DegenView मेरा डेटा इकट्ठा करता है?',
      a: 'डेस्कटॉप ऐप में कोई analytics या telemetry नहीं है और अकाउंट की ज़रूरत नहीं। यह वेबसाइट analytics cookie तभी सेट करती है जब आप उन्हें स्वीकार करें। प्राइवेसी पॉलिसी में उन सभी सेवाओं की सूची है जिनसे ऐप जुड़ता है।',
      links: ['प्राइवेसी पॉलिसी पढ़ें'],
    }),
    offline: entry({
      q: 'क्या DegenView ऑफ़लाइन चलता है?',
      a: 'ऐप, आपकी script और आपका डेटा आपकी मशीन पर रहते हैं। लाइव कीमतें फिर भी डेटा प्रोवाइडर से आती हैं, इसलिए मार्केट डेटा के लिए इंटरनेट कनेक्शन चाहिए।',
    }),
    platforms: entry({
      q: 'कौन-से प्लेटफ़ॉर्म सपोर्टेड हैं?',
      a: 'macOS (Apple Silicon और Intel), Windows (x64 और ARM64) और Linux (x64 और ARM64, tarball या Flatpak के रूप में)। कुछ अतिरिक्त चीज़ें सिर्फ़ macOS पर हैं: नेटिव टैब और विंडो, और बैकग्राउंड alert।',
      links: ['Downloads पर जाएँ'],
    }),
    smartscreen: entry({
      q: 'Windows में SmartScreen की चेतावनी दिख रही है। क्या यह सुरक्षित है?',
      a: 'Windows बिल्ड अभी code-signed नहीं है, इसलिए SmartScreen पहली बार चलाने पर चेतावनी दे सकता है। सोर्स और बिल्ड workflow GitHub पर सार्वजनिक हैं, और हर रिलीज़ में एक SHA-256 checksum दिया जाता है जिसे आप मिला सकते हैं। “More info” चुनें, फिर “Run anyway”। macOS ऐप साइन किया हुआ है।',
      links: ['अपना download verify करें'],
    }),
    autoUpdate: entry({
      q: 'क्या DegenView अपने-आप अपडेट होता है?',
      a: 'हाँ: macOS पर, Windows पर, और आपके अपने फ़ोल्डर में रखे Linux tarball के लिए। Flatpak बंडल का कोई remote नहीं होता, इसलिए वह अपने-आप अपडेट नहीं होता।',
    }),
    homebrew: entry({
      q: 'क्या मैं DegenView को Homebrew से install कर सकता हूँ?',
      a: 'हाँ, macOS पर: brew install --cask degenview/degenview/degenview@rc। यह DegenView tap से वही साइन किया हुआ ऐप Applications में install करता है। @rc के बिना वाला नाम नवीनतम फ़ाइनल रिलीज़ के लिए है और पहली फ़ाइनल रिलीज़ आने के बाद मौजूद होगा। ऐप खुद को अपडेट करता है, इसलिए brew upgrade इसे छोड़ देता है।',
      links: ['Downloads पर जाएँ'],
    }),
    whichDownload: entry({
      q: 'मुझे कौन-सा download चुनना चाहिए?',
      a: 'Mac पर Apple मेन्यू, About This Mac: “Apple M…” का मतलब Apple Silicon, “Intel” का मतलब Intel। Windows पर x64 चुनें, जब तक आपके पास Windows on ARM मशीन न हो। Linux पर tarball ज़्यादातर distro के लिए ठीक है और Flatpak पुराने distro के लिए।',
      links: ['Downloads पर जाएँ'],
    }),
  },
};
