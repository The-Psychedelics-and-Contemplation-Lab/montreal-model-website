import type { APIRoute } from 'astro';
import { site } from '../site.config';
const pages = ['/', '/people/', '/research-publications/', '/clinical-information/', '/music/', '/training/', '/media-coverage/', '/ketamine-mechanism/'];
const xhtml = 'xmlns:xhtml="http://www.w3.org/1999/xhtml"';
export const GET: APIRoute = () => {
  const entries = pages.flatMap((p) => [
    { loc: `${site.url}${p}`, en: `${site.url}${p}`, fr: `${site.url}/fr${p}` },
    { loc: `${site.url}/fr${p}`, en: `${site.url}${p}`, fr: `${site.url}/fr${p}` },
  ]);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ${xhtml}>\n${entries.map((e) => `  <url><loc>${e.loc}</loc><xhtml:link rel="alternate" hreflang="en" href="${e.en}"/><xhtml:link rel="alternate" hreflang="fr" href="${e.fr}"/></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
