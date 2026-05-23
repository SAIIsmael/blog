# Personal Blog

A minimal, professional personal blog built with [Astro](https://astro.build). Static output, zero server — deploys to GitHub Pages on every push to `main`.

**Live site:** `https://YOUR_USERNAME.github.io/blog/` (after setup)

## Features

- Markdown posts with categories (`engineering`, `opinion`, `personal`)
- Dark editorial design with gold accents, grain texture, and scroll animations
- View Transitions for smooth page navigation
- Category filtering on the writing page
- Automatic sitemap generation
- One-click deploy via GitHub Actions

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321/blog/
npm run build    # outputs to dist/
npm run preview  # preview production build
```

## Writing a post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: 'Your post title'
description: 'A one-line summary for cards and SEO.'
date: 2025-05-23
category: engineering   # engineering | opinion | personal
draft: false          # set true to hide from the site
---

Your content here. Supports **markdown**, code blocks, lists, etc.
```

Commit and push — GitHub Actions rebuilds and deploys automatically.

## Deploy to GitHub Pages

### 1. Create the repository

Push this project to a GitHub repo named `blog` (or any name).

### 2. Configure Astro for your URL

Edit `astro.config.mjs`:

```js
// Project site (username.github.io/blog)
site: 'https://YOUR_USERNAME.github.io',
base: '/blog/',

// OR user site (username.github.io) — use repo name username.github.io
site: 'https://YOUR_USERNAME.github.io',
base: '/',
```

Replace `YOUR_USERNAME` everywhere (config, Header, Footer, About page).

### 3. Enable GitHub Pages

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` handles the rest

Your site will be live at `https://YOUR_USERNAME.github.io/blog/` (or your custom domain).

## Customize

| What | Where |
|------|-------|
| Name, nav, social links | `src/components/Header.astro`, `Footer.astro` |
| About page | `src/pages/about.astro` |
| Colors & fonts | `tailwind.config.mjs`, `src/styles/global.css` |
| Site title / meta | `src/layouts/BaseLayout.astro` |

## Project structure

```
src/
├── content/blog/     ← your markdown posts
├── components/       ← Header, Footer, PostCard
├── layouts/          ← page shell
├── pages/            ← routes (index, blog, about)
└── styles/           ← global CSS
public/               ← favicon, static assets
```

## License

MIT — use it however you like.
