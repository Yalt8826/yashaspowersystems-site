import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config';

// https://astro.build/config
export default defineConfig({
  // Pulled from src/site.config.ts — edit it there, not here.
  site: SITE.domain,

  // Pure static output: every route becomes a real .html file.
  // This is what makes /privacy an actual page and gives us a real 404.
  output: 'static',

  // Cloudflare Pages serves the contents of `dist/`, so trailing-slash
  // handling must match its extensionless URL behaviour.
  trailingSlash: 'ignore',

  integrations: [sitemap()],
});
