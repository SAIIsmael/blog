# blog

Personal site and writing by [Ismael](https://SAIIsmael.github.io/blog/about/). Built with [Astro](https://astro.build), deployed to GitHub Pages.

**Live:** [https://SAIIsmael.github.io/blog/](https://SAIIsmael.github.io/blog/)

## Stack

- [Astro 5](https://astro.build) (static output)
- [Tailwind CSS](https://tailwindcss.com)
- Markdown content collections
- GitHub Actions → GitHub Pages

## Features

- Markdown posts with categories: `engineering`, `opinion`, `personal`
- Terminal-inspired dark theme
- Responsive nav, view transitions, scroll animations
- Category filter on the writing page
- Sitemap generation
- Auto-deploy on push to `main`

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/blog/
npm run build    # outputs to dist/
npm run preview  # preview production build
```

## Writing a post

Add a `.md` file in `src/content/blog/`:

```markdown
---
title: 'Your post title'
description: 'One-line summary for cards and SEO.'
date: 2026-05-23
category: engineering   # engineering | opinion | personal
draft: false            # true = hidden from the site
---

Your content here.
```

Commit and push to `main`. The deploy workflow rebuilds the site automatically.

## Customize

Most site copy and links live in one place:

| What | Where |
|------|-------|
| Name, handle, tagline, about text, links | `src/config/site.ts` |
| Colors, typography, prose styling | `tailwind.config.mjs`, `src/styles/global.css` |
| Pages and layout | `src/pages/`, `src/layouts/` |
| URL / base path | `astro.config.mjs` |

Profile photo: `public/avatar.jpg` (square, ~400×400; `#0d1117` background blends best with the theme).

## Deploy

This repo is set up for GitHub Pages with **GitHub Actions** as the source.

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions
2. Push to `main`

Workflow: `.github/workflows/deploy.yml`

If the repo name is not `blog`, update `base` in `astro.config.mjs` to match (`/blog/` for a repo named `blog`, `/` for `username.github.io`).

## Project structure

```
src/
├── config/site.ts      # site-wide copy and links
├── content/blog/       # markdown posts
├── components/         # Header, Footer, PostCard, etc.
├── layouts/
├── pages/
└── styles/
public/                 # avatar.jpg, favicon
.github/workflows/      # deploy.yml
```

## License

MIT — see [LICENSE](LICENSE). Blog posts are © Ismael unless stated otherwise.
