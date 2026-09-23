/**
 * Seviye kodlarının görünen Türkçe adları.
 *
 * Şemadaki değerler ASCII (`baslangic`) çünkü dosyalarda ve URL'lerde
 * kullanılıyorlar; ekranda görünen ad tek yerde burada durur.
 */

import type { Seviye } from '../content.config.ts';

export const SEVIYE_ADLARI: Record<Seviye, string> = {
  baslangic: 'Başlangıç',
  orta: 'Orta',
  ileri: 'İleri',
};

/** Listeleri kolaydan zora dizmek için sıra numarası. */
export const SEVIYE_SIRASI: Record<Seviye, number> = {
  baslangic: 0,
  orta: 1,
  ileri: 2,
};
