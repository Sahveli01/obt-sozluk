import { defineConfig } from 'astro/config';

import { SITE } from './src/config.ts';
import { remarkWikiLink } from './src/lib/remark-wiki-link.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  // GitHub Pages statik dosya sunar; her sayfa kendi klasöründe index.html olur.
  build: { format: 'directory' },
  trailingSlash: 'ignore',
  markdown: {
    remarkPlugins: [remarkWikiLink],
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
