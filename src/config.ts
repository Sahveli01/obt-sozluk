/**
 * Projenin tek ayar dosyası.
 * Sitenin adı burada tutulur; başka hiçbir yerde sabit olarak yazılmaz.
 */

export const SITE = {
  /** Sitenin görünen adı (çalışma adı, değişebilir). */
  name: 'ODTÜ Blockchain Sözlüğü',
  /** Kısa ad; dar ekranlarda ve başlıklarda kullanılır. */
  shortName: 'Sözlük',
  /** Tek cümlelik tanıtım. */
  description:
    'Blockchain, kriptografi, yazılım ve yapay zekâ terimlerinin Türkçe açıklandığı, topluluk tarafından büyütülen bir sözlük.',
  /** Sayfa dili. */
  lang: 'tr',
  /**
   * GitHub Pages yayın adresi. `astro.config.ts` buradan okur.
   * Özel bir alan adına geçilirse burası o alan adı olur ve `base` '/' döner.
   */
  site: 'https://sahveli01.github.io',
  /** Alt dizin yayını için taban yol. Depo adıyla aynı; kök alan adında '/' olur. */
  base: '/obt-sozluk',
} as const;

/** Terim sayfalarının URL ön eki. Slug'lar kalıcıdır, bu ön ek de öyle. */
export const TERIM_PATH = '/terim';
/** Kategori sayfalarının URL ön eki. */
export const KATEGORI_PATH = '/kategori';
