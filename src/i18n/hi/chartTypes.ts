import type { Dict } from '../en';

export const chartTypes: Dict['chartTypes'] = {
  eyebrow: 'chart के प्रकार',
  title: 'Candle तो <span class="gradient-text">बस शुरुआत हैं</span>',
  // {count} = number of chart types
  lead: '{count} chart प्रकार, सब बस एक क्लिक दूर। जो पसंद आए, चुन लें।',
  // {name} = the chart type's name
  exampleAlt: '{name} chart का उदाहरण',
  previous: 'पिछला chart प्रकार',
  next: 'अगला chart प्रकार',
  pause: 'ऑटोप्ले रोकें',
  play: 'ऑटोप्ले शुरू करें',
  /** One entry per chart type, keyed by id (the page draws the matching illustration). Order follows the app's picker. */
  items: {
    candles: { name: 'Candles', desc: 'क्लासिक: ओपन, हाई, लो और क्लोज़, एक ही बॉडी-और-विक आकार में।' },
    hollowCandles: { name: 'Hollow Candles', desc: 'चढ़ती candle खोखली और गिरती candle भरी हुई होती है, ताकि मोमेंटम एक नज़र में पढ़ा जा सके।' },
    bars: { name: 'Bars', desc: 'एक खड़ी रेंज लाइन, जिसमें बाईं ओर ओपन का टिक और दाईं ओर क्लोज़ का टिक होता है।' },
    highLowBars: { name: 'High-Low Bars', desc: 'हर bar सिर्फ़ हाई से लो तक फैला होता है। सिर्फ़ रेंज, क्लोज़ पर कोई राय नहीं।' },
    volumeCandles: { name: 'Volume Candles', desc: 'ऐसी candle जिनकी चौड़ाई ट्रेड हुए वॉल्यूम के साथ बढ़ती है, ताकि भारी bar अलग दिखें।' },
    heikinAshi: { name: 'Heikin Ashi', desc: 'औसत निकाली हुई candle, जो शोर को घटाती हैं और ट्रेंड को फ़ॉलो करना आसान बनाती हैं।' },
    line: { name: 'Line', desc: 'क्लोज़िंग कीमतें जुड़कर एक साफ़ लाइन बनाती हैं।' },
    lineWithMarkers: { name: 'Line with Markers', desc: 'वही लाइन, हर क्लोज़ पर एक बिंदु के साथ।' },
    stepLine: { name: 'Step Line', desc: 'हर क्लोज़ को अगले क्लोज़ तक सपाट रखती है, ताकि दिखे कि कीमत ठीक कब बदली।' },
    area: { name: 'Area', desc: 'एक लाइन, जिसके नीचे का पूरा हिस्सा भरा होता है।' },
    hlcArea: { name: 'HLC Area', desc: 'हाई-लो रेंज, क्लोज़िंग लाइन के चारों ओर एक बैंड के रूप में।' },
    baseline: { name: 'Baseline', desc: 'रेफ़रेंस लेवल के ऊपर हरा, नीचे लाल।' },
    columns: { name: 'Columns', desc: 'क्लोज़िंग कीमतें नीचे से उठते bar के रूप में, दिशा के हिसाब से रंगे हुए।' },
    renko: { name: 'Renko', desc: 'तय आकार की ईंटें, जो तभी बनती हैं जब कीमत पर्याप्त दूर चली जाए। हलचल नहीं, तो ईंट नहीं।' },
    kagi: { name: 'Kagi', desc: 'छोटी सीढ़ियों से जुड़ी खड़ी लाइनें, जो दिशा तभी बदलती हैं जब रिवर्सल सचमुच मायने रखता हो।' },
    lineBreak: { name: 'Line Break', desc: 'नया ब्लॉक तभी बनता है जब कीमत हाल की रेंज तोड़ती है, जिससे शोर छँट जाता है।' },
    pointAndFigure: { name: 'Point & Figure', desc: 'चढ़ती और गिरती कीमतों के लिए X और O के कॉलम, जिनमें कोई टाइम एक्सिस ही नहीं होती।' },
    range: { name: 'Range', desc: 'हर bar एक ही प्राइस रेंज कवर करता है, इसलिए शांत मार्केट में बस कम bar बनते हैं।' },
  },
};
