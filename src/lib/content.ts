import { u } from './url';

/**
 * Markdown bodies use root-relative URLs ("/images/x.jpg", "/fr/people/").
 * Prefix them with the site base so the same file works under /repo/ on
 * github.io and at the domain root.
 */
export const withBase = (html: string) =>
  html.replace(/(src|href)="\/(?!\/)/g, (_m, attr) => `${attr}="${u('/')}`);

/** Split rendered Markdown into chunks, each starting at an <h2>. The first chunk is whatever precedes the first <h2> (may be empty). */
export const splitAtH2 = (html: string): string[] => {
  const parts = html.split(/(?=<h2[\s>])/);
  return /^\s*<h2[\s>]/.test(parts[0] ?? '') ? ['', ...parts] : parts;
};

/** Split at the first closing </p>: [first paragraph, rest]. */
export const splitFirstParagraph = (html: string): [string, string] => {
  const i = html.indexOf('</p>');
  return i === -1 ? [html, ''] : [html.slice(0, i + 4), html.slice(i + 4)];
};

/** Heading text of a chunk produced by splitAtH2 (tags stripped). */
export const h2Text = (chunk: string) => (chunk.match(/<h2[^>]*>(.*?)<\/h2>/)?.[1] ?? '').replace(/<[^>]+>/g, '');

/**
 * Add class="reveal" to h2/h3 headings (never to body paragraphs) so they fade in on scroll.
 * Headings carry an id from the Markdown renderer; the class is appended to the opening tag.
 */
export const revealHeadings = (html: string, cls = 'reveal-words') => html.replace(/<(h2|h3)(\s[^>]*)?>/g, (_m, tag, attrs = '') => `<${tag}${attrs} class="${cls}">`);

/** Stagger the items of every top-level list (ul/ol) slowly on scroll. */
export const revealLists = (html: string, cls = 'reveal-group reveal-group--slow') => html.replace(/<(ul|ol)(\s[^>]*)?>/g, (_m, tag, attrs = '') => `<${tag}${attrs} class="${cls}">`);

/**
 * A paragraph that is entirely italic (<p><em>…</em></p>) at the start of a page is the
 * model's motto; render it as a pull quote. Only the first match is converted.
 */
export const mottoToPullquote = (html: string) =>
  html.replace(/<p><em>([^<]+)<\/em><\/p>/, (_m, text) => `<blockquote class="pullquote reveal reveal--rise-lg"><p>${text}</p></blockquote>`);

/** Remove <figure>…</figure> blocks from rendered Markdown (the page renders them with <Figure>). */
export const stripFigures = (html: string) => html.replace(/<figure[\s\S]*?<\/figure>/g, '');
