import type { SiteConfig } from '@pcl/design-system';

export type Lang = 'en' | 'fr';

/**
 * Contact address shown on every page (footer + home "Contact" block).
 * The WordPress site used WPForms; no address was in the export.
 * TODO (lab): confirm or replace this address.
 */
export const contactEmail = 'kyle.greenway@mcgill.ca';

const url = 'https://montrealmodelketaminetherapy.com';

const affiliation: Record<Lang, string> = {
  en: 'The Montreal Model of Ketamine Therapy was developed at McGill University and the Jewish General Hospital (Lady Davis Institute for Medical Research), Montréal, with the Centre hospitalier de l’Université de Montréal (CHUM).',
  fr: 'Le modèle de Montréal de thérapie par la kétamine a été développé à l’Université McGill et à l’Hôpital général juif (Institut Lady Davis de recherches médicales), à Montréal, avec le Centre hospitalier de l’Université de Montréal (CHUM).',
};

export const site: SiteConfig & { base: string; previewUrl: string } = {
  name: 'The Montreal Model',
  tagline: 'Ketamine therapy',
  url,
  lang: 'en',
  accent: '#6E4560',
  analyticsToken: '5dd75defb8bb48d9bba21ffe30e0ec16',   // Cloudflare Web Analytics (cookieless page-view counts; dashboard: dash.cloudflare.com → Web analytics)
  affiliation: affiliation.en,
  base: '/montreal-model-website',
  previewUrl: 'https://the-psychedelics-and-contemplation-lab.github.io',
  footerLinks: [],
  ogImage: `${url}/og-image.png`,
  ogImageAlt: 'Modèle de Montréal · Montreal Model — Thérapie par kétamine · Ketamine-therapy',
  organizationSchema: {
    '@context': 'https://schema.org',
    '@type': 'ResearchOrganization',
    name: 'The Montreal Model of Ketamine Therapy',
    url,
    parentOrganization: [
      { '@type': 'CollegeOrUniversity', name: 'McGill University' },
      { '@type': 'ResearchOrganization', name: 'Lady Davis Institute for Medical Research, Jewish General Hospital' },
    ],
  },
};

/** Per-language site config (name/tagline/affiliation differ in French). */
export function siteFor(lang: Lang): typeof site {
  if (lang === 'en') return site;
  return {
    ...site,
    name: 'Le modèle de Montréal',
    tagline: 'Thérapie par la kétamine',
    affiliation: affiliation.fr,
    footerLinks: [],
  };
}

/** Navigation; hrefs are built by the page with the base prefix (see lib/i18n.ts). */
/** Secondary pages, linked from the footer (built per language in lib/i18n.ts). */
export const footerItems: { path: string; label: Record<Lang, string> }[] = [
  { path: '/media-coverage/', label: { en: 'Media coverage', fr: 'Couverture médiatique' } },
];

/** Six items max so the header fits beside the McGill / LDI–JGH lockup from 1024 px up. */
// Same order as the original site's menu (Home is the wordmark): People, Research Publications,
// Clinical Information, Music, Training, Media Coverage, Ketamine Mechanism.
export const navItems: { path: string; label: Record<Lang, string> }[] = [
  { path: '/people/', label: { en: 'People', fr: 'Équipe' } },
  { path: '/research-publications/', label: { en: 'Publications', fr: 'Publications' } },
  { path: '/clinical-information/', label: { en: 'Clinical', fr: 'Clinique' } },
  { path: '/music/', label: { en: 'Music', fr: 'Musique' } },
  { path: '/training/', label: { en: 'Training', fr: 'Formation' } },
  { path: '/media-coverage/', label: { en: 'Media', fr: 'Médias' } },
  { path: '/ketamine-mechanism/', label: { en: 'Mechanism', fr: 'Mécanisme' } },
];
