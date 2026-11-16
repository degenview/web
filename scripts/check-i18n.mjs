// Post-build i18n sanity check: node scripts/check-i18n.mjs [distDir]
// Verifies every locale ships the same pages and each page has correct lang, canonical,
// reciprocal hreflang, localized internal links, and a different title than English.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const SITE = 'https://degenview.app';
const LOCALES = { en: 'en', es: 'es', fr: 'fr', hi: 'hi', de: 'de', zh: 'zh-Hans' };
const DEFAULT = 'en';
const prefixed = Object.keys(LOCALES).filter((l) => l !== DEFAULT);
const dist = process.argv[2] ?? 'dist';

const errors = [];
const err = (page, msg) => errors.push(`${page}: ${msg}`);

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

// Pages per locale, as locale-agnostic paths ('/', '/faq/').
const pages = Object.fromEntries(Object.keys(LOCALES).map((l) => [l, new Set()]));
for (const f of walk(dist)) {
  if (!f.endsWith('index.html')) continue;
  const rel = '/' + relative(dist, f).replace(/index\.html$/, '');
  const m = rel.match(/^\/(es|fr|hi|de|zh)(\/.*)$/);
  if (m) pages[m[1]].add(m[2]);
  else if (!rel.startsWith('/why-free')) pages[DEFAULT].add(rel);
}
const enPages = [...pages[DEFAULT]].sort();
for (const l of prefixed) {
  for (const p of enPages) if (!pages[l].has(p)) err(`/${l}${p}`, 'missing page');
  for (const p of pages[l]) if (!pages[DEFAULT].has(p)) err(`/${l}${p}`, 'page not in default locale');
}

const href = (l, p) => `${SITE}${l === DEFAULT ? '' : '/' + l}${p}`;
const read = (l, p) => readFileSync(join(dist, l === DEFAULT ? '' : l, p, 'index.html'), 'utf8');
const attr = (html, re) => html.match(re)?.[1];
const ASSET = /^\/(_astro|favicon|icon-|apple-touch|og\.png|site\.webmanifest|sitemap|robots|llms|CNAME|why-free|404)/;

for (const p of enPages) {
  const enTitle = attr(read(DEFAULT, p), /<title>([^<]*)<\/title>/);
  for (const l of Object.keys(LOCALES)) {
    if (!existsSync(join(dist, l === DEFAULT ? '' : l, p, 'index.html'))) continue;
    const page = `${l === DEFAULT ? '' : '/' + l}${p}`;
    const html = read(l, p);

    if (attr(html, /<html lang="([^"]+)"/) !== LOCALES[l]) err(page, `<html lang> is not ${LOCALES[l]}`);
    if (attr(html, /<link rel="canonical" href="([^"]+)"/) !== href(l, p)) err(page, 'canonical is not self-referencing');

    const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]);
    for (const k of [...Object.keys(LOCALES), 'x-default']) {
      const want = href(k === 'x-default' ? DEFAULT : k, p);
      if (!alts.some(([h, u]) => h === (k === 'x-default' ? k : LOCALES[k]) && u === want)) err(page, `missing/incorrect hreflang ${k}`);
    }

    // Internal links in non-default locales must stay inside the locale.
    if (l !== DEFAULT) {
      for (const m of html.matchAll(/<a ([^>]*)href="(\/[^"]*)"([^>]*)>/g)) {
        if (/hreflang=/.test(m[1] + m[3])) continue; // language switcher links leave the locale on purpose
        const u = m[2];
        if (ASSET.test(u) || u.startsWith('//')) continue;
        if (!u.startsWith(`/${l}/`) && u !== `/${l}`) err(page, `internal link leaves locale: ${u}`);
      }
      const t = attr(html, /<title>([^<]*)<\/title>/);
      if (t === enTitle) err(page, 'title identical to English (untranslated?)');
    }
  }
}

if (errors.length) {
  console.error(`i18n check failed (${errors.length}):\n` + errors.slice(0, 80).map((e) => '  ' + e).join('\n'));
  process.exit(1);
}
console.log(`i18n check passed: ${Object.keys(LOCALES).length} locales × ${enPages.length} pages.`);
