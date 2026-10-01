import { u } from './url';

/**
 * Markdown bodies use root-relative URLs ("/images/x.jpg", "/fr/people/").
 * Prefix them with the site base so the same file works under /repo/ on
 * github.io and at the domain root.
 */
export const withBase = (html: string) =>
  html.replace(/(src|href)="\/(?!\/)/g, (_m, attr) => `${attr}="${u('/')}`);
