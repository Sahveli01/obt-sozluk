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
    shikiConfig: {
      // Çift tema: Shiki her token için --shiki-light / --shiki-dark
      // değişkenleri basar, global.css koyu temada onlara geçer.
      // Sözdizimi renkleri token dosyasının bilinçli tek istisnasıdır;
      // gerekçesi DESIGN.md içinde.
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: true,
    },
  },
});
