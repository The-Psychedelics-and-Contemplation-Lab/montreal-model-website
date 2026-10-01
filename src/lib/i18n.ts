import type { NavItem } from '@pcl/design-system';
import { site, siteFor, navItems, footerItems, type Lang } from '../site.config';
import { u } from './url';

export const LANGS: Lang[] = ['en', 'fr'];

/** getStaticPaths helper: one route per language ("" for English, "fr" for French). */
export const langPaths = () => [
  { params: { lang: undefined }, props: { lang: 'en' as Lang } },
  { params: { lang: 'fr' }, props: { lang: 'fr' as Lang } },
];

/** Language-prefixed path for an internal page (no base). */
export const lp = (lang: Lang, path: string) => (lang === 'en' ? path : `/fr${path}`);

/** Base-prefixed href for an internal page in the given language. */
export const href = (lang: Lang, path: string) => u(lp(lang, path));

/** Everything the <Layout> needs for a given page in a given language. */
export function pageMeta(lang: Lang, path: string, meta: { title: string; description: string; schema?: Record<string, unknown> | Record<string, unknown>[]; ogType?: 'website' | 'article' }) {
  const abs = (l: Lang) => site.url + lp(l, path);
  return {
    lang,
    site: { ...siteFor(lang), footerLinks: footerItems.map((f) => ({ label: f.label[lang], href: href(lang, f.path) })) },
    nav: navItems.map((n): NavItem => ({ label: n.label[lang], href: href(lang, n.path), current: n.path === path })),
    page: {
      ...meta,
      path: lp(lang, path),
      alternates: [
        { lang: 'en', href: abs('en') },
        { lang: 'fr', href: abs('fr') },
        { lang: 'x-default', href: abs('en') },
      ],
    },
    switchLinks: [
      { lang: 'en', label: 'English', href: href('en', path) },
      { lang: 'fr', label: 'Français', href: href('fr', path) },
    ],
  };
}

/** Small UI strings used across pages. */
export const t = (lang: Lang) => ({
  pdf: lang === 'fr' ? 'PDF' : 'PDF',
  readArticle: lang === 'fr' ? 'Lire l’article' : 'Read the article',
  contact: lang === 'fr' ? 'Contact' : 'Contact',
  opensNewTab: lang === 'fr' ? '(s’ouvre dans un nouvel onglet)' : '(opens in a new tab)',
});
