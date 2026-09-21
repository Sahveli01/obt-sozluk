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
   * GitHub Pages yayın adresi.
   * Depo adı netleştiğinde burası güncellenir; `astro.config.ts` buradan okur.
   */
  site: 'https://example.github.io',
  /** Alt dizin yayını için taban yol. Kök alan adında '/' bırakılır. */
  base: '/',
} as const;

/** Terim sayfalarının URL ön eki. Slug'lar kalıcıdır, bu ön ek de öyle. */
export const TERIM_PATH = '/terim';
/** Kategori sayfalarının URL ön eki. */
export const KATEGORI_PATH = '/kategori';
