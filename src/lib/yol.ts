/**
 * Site içi bağlantı yolları.
 *
 * Tek yerde durur çünkü hem Astro sayfaları hem de derleme sırasında çalışan
 * remark eklentisi aynı yolu üretmek zorunda. `SITE.base` değişirse (alt dizin
 * yayını) bütün bağlantılar buradan düzelir.
 */

import { KATEGORI_PATH, SITE, TERIM_PATH } from '../config.ts';

const TABAN = SITE.base.replace(/\/+$/, '');

/** Taban yolu başa ekler: `/terim/gas` -> `/sozluk/terim/gas`. */
export function siteYolu(yol: string): string {
  return `${TABAN}${yol.startsWith('/') ? yol : `/${yol}`}`;
}

/** Terim sayfasının yolu. */
export function terimYolu(slug: string): string {
  return siteYolu(`${TERIM_PATH}/${slug}`);
}

/** Kategori sayfasının yolu. */
export function kategoriYolu(slug: string): string {
  return siteYolu(`${KATEGORI_PATH}/${slug}`);
}
