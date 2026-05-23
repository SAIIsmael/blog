import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Change `base` to '/' if your repo is named username.github.io
// For project pages (username.github.io/blog), keep '/blog/'
export default defineConfig({
  site: 'https://SAIIsmael.github.io',
  base: '/blog/',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
