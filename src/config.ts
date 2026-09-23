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
   * Yayın adresi. `astro.config.ts` buradan okur; sitenin tek yayın hedefi
   * Vercel'dir. Özel bir alan adına geçilirse yalnızca burası değişir.
   */
  site: 'https://obt-sozluk.vercel.app',
  /**
   * Taban yol. Site kök dizinde yayınlandığı için '/'.
   *
   * Alt dizinde yayın (ör. GitHub Pages'te `/depo-adi`) gerekirse burası
   * o dizin olur; `src/lib/yol.ts` ve derleme sırasında çalışan remark
   * eklentisi bütün bağlantıları buradan üretir. Kök yayında bu değerin
   * '/' dışında bir şey olması varlık yollarını 404'e düşürür.
   */
  base: '/',
} as const;

/** Terim sayfalarının URL ön eki. Slug'lar kalıcıdır, bu ön ek de öyle. */
export const TERIM_PATH = '/terim';
/** Kategori sayfalarının URL ön eki. */
export const KATEGORI_PATH = '/kategori';
