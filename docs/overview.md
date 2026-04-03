# Project Overview

## What Is This

Personal website and blog for Leszek Pomianowski (lepoco), deployed at **<https://lepo.co>**.  
Repository: `lepoco/.github`, branch: `main`.

## Tech Stack

- **Astro 5** (v5.13.2) — static site generator (SSG mode)
- **@astrojs/sitemap** — auto-generated sitemap
- **@astrojs/rss** — RSS feed generation
- No UI framework (pure Astro components, zero client JS except theme toggle + menu)

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── FormattedDate.astro   # Locale-aware date (en-US / pl-PL)
│   └── PostCard.astro        # Blog post card, derives slug from post.id
├── content/
│   ├── posts/en/             # English blog posts (markdown)
│   └── posts/pl/             # Polish blog posts (markdown)
├── i18n/
│   ├── ui.ts                 # Translation dictionary + Lang type
│   └── utils.ts              # getLangFromUrl(), useTranslations()
├── layouts/
│   ├── BaseLayout.astro      # Master layout (head, header, nav, footer, theme toggle)
│   └── PostLayout.astro      # Blog post wrapper (title, date, tags, reading time)
├── pages/
│   ├── index.astro           # EN homepage
│   ├── about.astro           # EN about
│   ├── contact.astro         # EN contact
│   ├── support.astro         # EN support/consulting
│   ├── privacy.astro         # Privacy policy (shared, uses fallback for PL)
│   ├── 404.astro             # EN 404
│   ├── rss.xml.js            # EN RSS feed
│   ├── posts/
│   │   ├── index.astro       # EN posts listing
│   │   └── [...slug].astro   # EN single post (dynamic route)
│   ├── tags/
│   │   ├── index.astro       # EN tags listing
│   │   └── [tag].astro       # EN posts by tag
│   └── pl/                   # Polish pages (mirror of EN structure)
│       ├── index.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── support.astro
│       ├── 404.astro
│       ├── rss.xml.js
│       ├── posts/
│       │   ├── index.astro
│       │   └── [...slug].astro
│       └── tags/
│           ├── index.astro
│           └── [tag].astro
├── styles/                   # CSS modules (no preprocessor)
│   ├── terminal.css          # Theme variables (:root), body reset
│   ├── main.css              # Layout, container, links
│   ├── header.css            # Site header
│   ├── menu.css              # Mobile/desktop menu
│   ├── footer.css            # Footer
│   ├── post.css              # Post content styles
│   ├── code.css              # Inline/block code
│   ├── syntax.css            # Shiki syntax highlighting CSS variables
│   ├── buttons.css           # Button components
│   ├── pagination.css        # Post pagination
│   ├── gist.css              # GitHub Gist embeds
│   ├── fonts.css             # Font declarations
│   └── terms.css             # Legal/terms pages
└── content.config.ts         # Content collection (glob loader, zod schema)
```

## i18n Architecture

### Routing

Configured in `astro.config.mjs`:

- **Default locale**: `en` (no prefix — pages at `/`, `/about/`, `/posts/...`)
- **Polish**: `pl` (prefix — pages at `/pl/`, `/pl/about/`, `/pl/posts/...`)
- **Fallback**: `pl` → `en` with `fallbackType: 'rewrite'` (if PL page doesn't exist, EN is served at `/pl/` URL)
- `prefixDefaultLocale: false`

### Translations

- **Dictionary**: `src/i18n/ui.ts` — exports `ui` object with `en` and `pl` keys, ~120 translation strings
- **Type**: `Lang = 'en' | 'pl'`
- **Helper**: `useTranslations(lang)` returns `t(key)` function with EN fallback

### Patterns Used in Pages

Every page follows this boilerplate:

```astro
---
import { defaultLang, type Lang } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';

const lang = (Astro.currentLocale || defaultLang) as Lang;
const t = useTranslations(lang);
---
```

- `Astro.currentLocale` — built-in Astro 5 API, automatically set based on route
- `getRelativeLocaleUrl(lang, 'path')` from `astro:i18n` — used for all internal links
- `BaseLayout` does NOT take a `lang` prop (reads `Astro.currentLocale` internally)
- `PostCard` derives slug from `post.id` internally: `post.id.replace(/^(en|pl)\//, '')`

### Content Collections

- Posts stored in `src/content/posts/en/` and `src/content/posts/pl/`
- Loader: `glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' })`
- `post.id` format: `en/hello-friend` or `pl/hello-friend` (no `.md` extension)
- `render()` imported from `astro:content` (Astro 5 API): `const { Content } = await render(post)`
- Filtering by language: `post.id.startsWith('en/')` or `post.id.startsWith('pl/')`

### Language Switcher

In `BaseLayout.astro` header — computes alternate URL by stripping locale prefix from current path and using `getRelativeLocaleUrl(altLang, pathSegment)`.

### Browser Auto-Detection

Homepage includes client-side `navigator.language` check — redirects to `/pl/` if browser language starts with `pl`.

## Theming

### CSS Variables (in `terminal.css`)

| Variable | Light | Dark |
|---|---|---|
| `--background` | `#ffffff` | `#1b1b1f` |
| `--foreground` | `#000000` | `#e3e3e3` |
| `--accent` | `#6b7f5c` | `#8fa882` |

Dark theme inspired by Microsoft Learn dark mode (soft grays instead of pure black/white).

### Theme Toggle

Three states: `auto` → `light` → `dark` → `auto` (cycled on click).  
Persisted in `localStorage.theme`. JS in `BaseLayout.astro` sets CSS variables on `:root`.

### Syntax Highlighting

Uses Shiki `css-variables` theme. Token colors defined in `syntax.css` using `--astro-code-*` variables — monochrome approach where keywords/tags use `--accent`, rest uses `--foreground`.

## Post Schema (Zod)

```ts
z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().optional(),
  image: z.string().optional(),
  avifImage: z.string().optional(),
  externalLink: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
})
```

## Build Output

61 pages (EN + PL + fallbacks). Build completes in ~1s.

## Conventions

- **No client-side JS frameworks** — static HTML with minimal vanilla JS (theme toggle, menu)
- **All links use `getRelativeLocaleUrl()`** — never hardcode `/pl/` or `/en/` prefixes
- **No `lang` prop on BaseLayout** — it reads `Astro.currentLocale` automatically
- **PostCard receives `post` directly** — no need to strip slug prefixes externally
- **Font**: system sans-serif stack (no custom font files loaded)
- **Container width**: 1200px max
