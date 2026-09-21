/**
 * Arama indeksinin şekli ve MiniSearch ayarları.
 *
 * Aynı dosyayı hem derleme sırasında indeks üreten uç nokta hem de tarayıcıda
 * arama yapan script kullanır; iki taraf da aynı normalizasyondan geçsin diye.
 */

import type { Options } from 'minisearch';

import { normalize, tokenize } from './normalize.ts';

/** Arama indeksindeki tek bir kayıt. */
export interface AramaBelgesi {
  /** Terim slug'ı; aynı zamanda MiniSearch kimliği. */
  id: string;
  term: string;
  tr: string;
  short: string;
  aliases: string;
  kategori: string;
  kategoriAdi: string;
  altKategori: string;
  seviye: string;
  durum: string;
}

/** Derleme sırasında üretilip `search-index.json` olarak yayımlanan yapı. */
export interface AramaIndeksi {
  uretildi: string;
  belgeler: AramaBelgesi[];
}

/**
 * MiniSearch ayarları.
 *
 * `processTerm` ve `tokenize` Türkçe normalizasyonu kullanır: "akilli sozlesme"
 * yazan kişi "Akıllı Sözleşme"yi bulur. Ağırlıklar terimin kendi adını
 * kısa tanımın önüne koyar.
 */
export const ARAMA_AYARLARI: Options<AramaBelgesi> = {
  fields: ['term', 'tr', 'aliases', 'short', 'kategoriAdi', 'altKategori'],
  storeFields: ['term', 'tr', 'short', 'kategori', 'kategoriAdi', 'seviye', 'durum'],
  idField: 'id',
  processTerm: (terim) => {
    const temiz = normalize(terim);
    return temiz.length > 0 ? temiz : null;
  },
  tokenize: (metin) => tokenize(metin),
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: { term: 4, tr: 3, aliases: 3, short: 1 },
  },
};
