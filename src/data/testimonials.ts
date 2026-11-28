// What people are saying. The quotes are verbatim and stay in their original language in every locale (only the labels
// around them are translated, see `home.testimonials` in src/i18n). `highlight` is a substring of the quote that gets
// the gradient treatment; `tag` indexes `home.testimonials.tags`.
export interface Testimonial {
  quote: string;
  highlight?: string;
  tag?: 'debugger' | 'pine' | 'impression';
  /** The big card: it gets the lit backdrop and larger type. */
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'You can even debug directly when running scripts locally. This is seriously useful—it should’ve come out ages ago.',
    highlight: 'seriously useful',
    tag: 'debugger',
    featured: true,
  },
  {
    quote: 'Damn honestly i didn\'t think it would work this good.',
    highlight: 'work this good',
    tag: 'impression',
  },
  {
    quote: 'I\'d move away from pine garbage coding language',
    highlight: 'move away',
    tag: 'pine',
  },
  {
    quote: 'The one who made DegenView is genius',
    highlight: 'genius',
  },
];
