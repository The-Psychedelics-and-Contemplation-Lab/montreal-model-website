// Verifies that every sentence (≥ 6 words) of the ORIGINAL French pages (TranslatePress export,
// /home/claude/sources/montreal-model/mm_pages_html.json) appears verbatim in the built FR page.
// Whitespace (incl. NBSP) and quote styles are normalised before comparison.
import { readFileSync } from 'node:fs';
const src = JSON.parse(readFileSync(process.argv[2] || '/home/claude/sources/montreal-model/mm_pages_html.json', 'utf8'));
const norm = (s) => s
  .replace(/<\/?(h[1-6]|p|li|div|ul|ol|br|figcaption|blockquote)[^>]*>/g, ' \n ')
  .replace(/<\/?(span|i|b|em|strong|u|sup|a)\b[^>]*>/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#8217;|&rsquo;/g, '’').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/[’‘ʼ]/g, "'").replace(/[“”«»"]/g, '"').replace(/[–—]/g, '-')
  .replace(/\bdoi:\s*/g, 'https://doi.org/')
  .replace(/\.\s*\./g, '.') // a stray duplicated period in the old People page ("…substances</span>.")
  .replace(/[ \t\u00a0]+/g, ' ').replace(/ ([,.;:)])/g, '$1').replace(/\s*\n\s*/g, '\n').trim();
const flat = (s) => s.replace(/\s+/g, ' ');
const words = (s) => s.split(' ').filter(Boolean).length;
// Known placeholder/draft text on the old People page that was deliberately not published.
const skip = [/^Lorem ipsum/, /^Ut elit tellus/, /^and mention the Imperial/, /^bio bio bio$/i, /^Bio$/,
  // Media-coverage date lines: the old FR page left them in English ("LaPresse – June 20, 2025"); the site shows them in French.
  /^(LaPresse|Business Insider|National Post) - /];
let total = 0, missing = 0;
for (const [path, { html }] of Object.entries(src)) {
  if (!path.startsWith('/fr/')) continue;
  const built = flat(norm(readFileSync(`dist${path}index.html`, 'utf8')));
  const text = norm(html);
  // split into blocks (headings/paragraphs/list items), then into sentences on . ! ? followed by a space; keep ≥ 6 words
  const sentences = text.split('\n').flatMap((b) => b.split(/(?<=[.!?])(?<!\bDr\.)(?<!\bcoll\.)\s+(?=[A-ZÀ-Ý"«(])/)).map((s) => s.trim()).filter((s) => words(s) >= 6 && !skip.some((r) => r.test(s)));
  const miss = sentences.filter((s) => !built.includes(s));
  total += sentences.length; missing += miss.length;
  console.log(`${path.padEnd(28)} ${sentences.length - miss.length}/${sentences.length} sentences found`);
  for (const m of miss) console.log(`   ✗ ${m.slice(0, 140)}`);
}
console.log(`TOTAL ${total - missing}/${total}`);
process.exit(missing ? 1 : 0);
