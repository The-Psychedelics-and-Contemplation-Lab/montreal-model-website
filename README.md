# The Montreal Model — montrealmodelketaminetherapy.com

Built with [Astro](https://astro.build) and the lab's shared [design-system](https://github.com/The-Psychedelics-and-Contemplation-Lab/design-system). Published automatically to GitHub Pages on every push to `main`.

## Editing content
Texts live in `src/content/` (Markdown) and `src/pages/` (page layout). Edit a file on GitHub → *Commit changes* → the site rebuilds in about a minute. `src/site.config.ts` holds the site name, accent colour, navigation and affiliation line.

## Working locally
```
npm install
npm run dev        # http://localhost:4321
npm run build && npm run check:html
```

## Where things live
- `src/content/pages/en/*.md` and `src/content/pages/fr/*.md` — the prose of Home, Clinical Information, Music and Training (one file per language; front-matter holds the page title, lead, SEO title and description).
- `src/content/data/people.ts` — people cards; `src/content/data/publications.ts` — publications, media coverage links and Spotify playlist IDs.
- `src/site.config.ts` — site name, accent, navigation, footer links, affiliation line and the **contact e-mail address** (`contactEmail`).
- `public/modules/ketamine-mechanism/index.html` — the self-contained interactive module, shipped unchanged.
- `public/papers/` — the three PDFs; `public/images/` — compressed photos and logos.
