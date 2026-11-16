import { useT, type Lang } from '../i18n';

export interface Feature {
  slug: string;
  eyebrow: string;
  title: string;
  blurb: string;
  bullets: string[];
  /** What the screenshot should show (also used as alt text). */
  alt: string;
  /** A call to action under the bullets, for features with their own page (`href` is the canonical English path). */
  link?: { label: string; href: string };
  /** The screenshot is a full app window with its own title bar and rounded corners: skip the site's card frame. */
  framed?: boolean;
}

type FeatureSlug = 'markets' | 'pine-script' | 'mcp' | 'portfolio' | 'paper-trading' | 'replay';

/** Non-text parts of each feature, in display order. The copy lives in `home.features` of the dictionary. */
const featureMeta: { slug: FeatureSlug; framed?: boolean; linkHref?: string }[] = [
  { slug: 'markets', framed: true },
  { slug: 'pine-script', linkHref: '/pine-studio/' },
  { slug: 'mcp' },
  { slug: 'portfolio' },
  { slug: 'paper-trading', framed: true },
  { slug: 'replay' },
];

export function getFeatures(lang: Lang): Feature[] {
  const t = useT(lang).home.features;
  return featureMeta.map(({ slug, framed, linkHref }) => {
    const { eyebrow, title, blurb, bullets, alt } = t[slug];
    const linkLabel = (t[slug] as { linkLabel?: string }).linkLabel;
    return {
      slug,
      eyebrow,
      title,
      blurb,
      bullets,
      alt,
      ...(linkHref && linkLabel ? { link: { label: linkLabel, href: linkHref } } : {}),
      ...(framed ? { framed } : {}),
    };
  });
}

/** Features without a screenshot of their own: a short list under the showcase sections. */
export interface Extra {
  /** Picks the illustration in MoreFeatures. */
  slug: ExtraSlug;
  /** One-word label shown as a chip on the card. */
  tag: string;
  title: string;
  text: string;
  /** Shown as a footnote under the list when the item carries an asterisk. */
  note?: string;
}

type ExtraSlug = 'no-account' | 'watchlists' | 'tools' | 'indicators' | 'alerts' | 'webhooks' | 'ai' | 'icloud';

const extraSlugs: ExtraSlug[] = ['no-account', 'watchlists', 'tools', 'indicators', 'alerts', 'webhooks', 'ai', 'icloud'];

export function getExtras(lang: Lang): Extra[] {
  const t = useT(lang).home.extras;
  return extraSlugs.map((slug) => {
    const { tag, title, text } = t[slug];
    const note = (t[slug] as { note?: string }).note;
    return { slug, tag, title, text, ...(note ? { note } : {}) };
  });
}
