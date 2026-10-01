# Migration report — montreal-model-website

WordPress (Elementor + TranslatePress) → Astro 7 + `@pcl/design-system`.
Source: `/home/claude/sources/montreal-model/` (WXR export of 2025-10, 54 uploads, `ketaminemechanismmodule.html`).
Build: `npm run build` ✓ (16 pages) · `npm run check:html` ✓ (16 pages checked, 0 problems).

## Pages built

| Old URL | New EN | New FR | Source | Notes |
|---|---|---|---|---|
| `/` | `/` | `/fr/` | `src/content/pages/{en,fr}/home.md` + `src/pages/[...lang]/index.astro` | Hero (eyebrow, H1, lead, 2 buttons, logo mark), key-facts strip, all three text sections, **Reference** block (Garel et al. 2023, Frontiers link), Contact block |
| `/people/` | `/people/` | `/fr/people/` | `src/content/data/people.ts` | Cards: photo, name, role, affiliation, bio (leads); collaborators grid; CHUM / UdeM logos |
| `/research-publications/` | same | `/fr/research-publications/` | `src/content/data/publications.ts` | Clean list: authors, year, title, journal, volume/pages, DOI, Article link, PDF ⤓ (3 PDFs); summaries preserved verbatim (EN) / translated (FR); JSON-LD `ScholarlyArticle` list |
| `/clinical-information/` | same | `/fr/clinical-information/` | `pages/{en,fr}/clinical-information.md` | Every paragraph and the 8 headings in source order; protocol diagram kept (with full-size link) |
| `/music/` | same | `/fr/music/` | `pages/{en,fr}/music.md` + Spotify cards | All prose and 7 headings in order; 3 Spotify playlists as compact embeds + plain links; Spotify profile link |
| `/training/` | same | `/fr/training/` | `pages/{en,fr}/training.md` | Workshop text + 2 photos, "Upcoming Trainings", plus an **Online modules** band |
| `/media-coverage/` | same | `/fr/media-coverage/` | `publications.ts` (`media`) | 3 podcasts, 4 news items with outlet/date and "Read article" links |
| `/ketamine-mechanism/` (was only a menu item) | same | `/fr/ketamine-mechanism/` | `src/pages/[...lang]/ketamine-mechanism.astro` | Embeds `public/modules/ketamine-mechanism/index.html` in `<iframe title="Interactive module: how ketamine acts on the brain" loading="lazy">` + "Open full screen" link |

Pages **not** migrated (checked, no real content): *Sample Page*, *Hello world!*, *Privacy Policy* (draft, WordPress boilerplate), *About* and *Services* (untouched "Love Nature" theme demo text — lorem-style "Web Design, From $99"), *Elementor #6 / #2051* (empty drafts). The *Contact* page contained only two WPForms shortcodes plus three sentences; those sentences are on the home-page Contact block (see below).

## Word counts (main content, source WXR vs. built `<main>`)

| Page | Source (WXR) | Built EN | Built FR |
|---|---|---|---|
| Home | 541 | 684 | 845 |
| People | 273 | 337 | 389 |
| Research Publications | 1219 | 1255 | 1447 |
| Clinical Information | 695 | 726 | 934 |
| Music | 616 | 653 | 828 |
| Training | 185 | 253 | 307 |
| Media Coverage | 122 | 134 | 137 |
| Ketamine Mechanism (new page; module text excluded) | – | 62 | 72 |

Built counts are ≥ source on every page: all source words are present; the extra words are eyebrows, leads, link labels ("Article", "DOI", "PDF"), image captions, the key-facts strip, the Reference block and the Contact block. Collaborator placeholder bios ("Bio", "bio bio bio", "and mention the Imperial Psychedelic Research Centre & NHS program") were draft notes in the source and were **not** published; they were replaced by one-line roles/affiliations limited to what the site's own pages state (see "To confirm").

## French

**FR is a fresh translation written during this migration — the TranslatePress strings were not in the export. Please have the lab proofread every `/fr/` page** (`src/content/pages/fr/*.md`, FR fields in `people.ts` and `publications.ts`, FR strings in the `.astro` pages). Register: clinical, Canadian French; « modèle de Montréal », « thérapie par la kétamine », « dépression résistante au traitement », « psychothérapie assistée par la kétamine ». Publication titles and the protocol diagram remain in English (as published). Home-page FR title/description are the ones that were live on the old site.

## Titles and descriptions
Home EN/FR use the titles/descriptions that were live. All other pages have unique hand-written titles and descriptions in both languages (all descriptions ≤ 160 characters, enforced by the content schema). Every page emits `hreflang` en / fr / x-default alternates, canonical, Open Graph, Twitter card and JSON-LD (Organization; MedicalWebPage + citation on Home; ScholarlyArticle list on Publications).

## Links, anchors, assets
- All 8 publication links, 3 DOIs, 3 PDFs, 3 podcasts, 4 news articles, Spotify profile + 3 playlist links carried over. La Presse tracking parameters (`utm_*`) stripped from one URL.
- Internal links are base-prefixed (`src/lib/url.ts`, `src/lib/i18n.ts`; Markdown bodies are post-processed by `src/lib/content.ts`), so the site works under `/montreal-model-website/` and at the domain root.
- Home "Learn more → #ketamine-therapy" anchor exists as the `id` of the "Ketamine Therapy" heading.
- `check:html`: 0 broken internal links/anchors.

## Images (all < 400 KB, in `public/images/`)
| File | From | Result |
|---|---|---|
| `people/michael-lifshitz.jpg` | `Michael-Lifshitz_profile.png` 1081×1143, 1105 KB | 900×952 JPEG q82, 92 KB |
| `people/julien-thibault-levesque.jpg` | `Screen-Shot-2025-04-16…png` 757 KB | 690×692 JPEG, 64 KB |
| `people/kyle-greenway.jpg`, `people/nicolas-garel.jpg` | `drkyle.jpg`, `drnico2.jpg` | 39 KB, 41 KB |
| `montreal-model-protocol.jpg` | `Screen-Shot-2025-06-25-at-12.48.34-PM-scaled.jpg` | 1600×706, 137 KB |
| `workshop-2025-auditorium.jpg`, `workshop-2025-team.jpg` | `IMG_0498-scaled.jpg`, `Montreal-Model-Extravaganza…jpeg` | 308 KB, 202 KB |
| `montreal-model-mark.png`, `montreal-model-wordmark-bilingual.png`, `logo-chum.png`, `logo-udem.png` | logos | ≤ 60 KB each |
| `/og-image.png` (1200×630), `/apple-touch-icon.png`, `/favicon.svg` | generated from the bilingual wordmark / mark | 100 KB / 7 KB / <1 KB |

Not used: the 19 "Love Nature" theme demo images (2021/2022 uploads), the duplicate/cropped logo variants and the marbled `mtlmodel*.png` backgrounds (decorative; the brief asks for no gradients/clutter).

## Interactive module
- `public/modules/ketamine-mechanism/index.html` = `ketaminemechanismmodule.html` **byte-for-byte unchanged** (676 KB). Embedded on `/ketamine-mechanism/` and linked from the Training page.
- **Reduced motion: the module does not honour `prefers-reduced-motion`** — it contains 17 `@keyframes`, 24 `animation:` and 5 `requestAnimationFrame` uses and zero `prefers-reduced-motion` queries. Not rewritten, per the brief; the embedding page states that the module contains animations. Recommend adding a `@media (prefers-reduced-motion: reduce)` rule in the module's own source (`studio/src/v18/`).
- The module's own `<th>` elements lack `scope`, and it has no meta description/JSON-LD; since it ships unchanged, `scripts/check-html.mjs` was given a one-line rule to skip `dist/modules/**` (third-party, self-contained files). All 16 site pages are still checked.
- **"MM Module 1" (41 MB HTML5)** was not in the sources. The Training page has a placeholder card linking to `https://media.psychedelicsandcontemplationlab.com/montreal-model/module-1/` — to be deployed from the `lab-media` repo. Until then the link 404s.

## Contact
No forms. The old Contact page (and its WPForms "mailing list" form) became a Contact block on the home page with two `mailto:` buttons ("Email the team", "Join the mailing list") and the original sentences ("No patient inquiries please", "Contact us here for any clinical, research, or press inquiries", "Receive updates for our training opportunities"). The old site had no REDCap or recruitment call-to-action, so none was added.

## To confirm (lab)
1. **Contact e-mail**: the export contained no address. `contactEmail` in `src/site.config.ts` is set to `kyle.greenway@mcgill.ca` as a best guess — **verify or replace** before going live.
2. Collaborator roles/affiliations (`people.ts`): Julien Thibault Lévesque, David Erritzoe (Imperial, per the source's draft note), Mendel Kaelen, Le-Anh Dinh-Williams (source said only "Le-Anh"; surname taken from the MUSIK author list), Michael Lifshitz. No bios existed in the source; add real ones if desired.
3. French proofreading (see above).
4. Spotify playlists are embedded as compact players (third-party iframes, lazy-loaded). Remove the `<iframe>` in `src/pages/[...lang]/music.astro` if you prefer links only.

## Known limitations / design-system notes
- `Layout` hard-codes `/favicon.svg`, `/apple-touch-icon.png` and the brand link `/` (or `/fr/`) without the base path, so on github.io the favicon 404s and the wordmark links to the org root; both are correct at the final domain. Fix belongs in `design-system/Layout.astro` (`import.meta.env.BASE_URL`).
- Navigation was trimmed to five items (Clinical · Publications · Music · Training · People) so it fits beside the McGill / LDI–JGH lockup at 1400 px; *Ketamine mechanism* and *Media coverage* are in the footer and cross-linked from Training.

## Screenshots reviewed
`/tmp/claude-0/-home-claude/d9c59551-93c5-59f4-b4f5-a25a201bb1e9/scratchpad/montreal-model/shots/` — `{en,fr}-{home,people,research-publications,clinical-information,music,training,media-coverage,ketamine-mechanism}-{1400,390}.png` (32 files) + `print-music.png`, `print-publications.png`. Fixed after review: header overflow (nav trimmed, taglines shortened), removed a decorative hero SVG, widened the protocol diagram, resized the module iframe, replaced 352 px Spotify embeds with compact cards. No horizontal overflow at 390 px; no console errors other than the github.io favicon 404 noted above.
