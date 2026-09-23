/**
 * Okuma süresi tahmini.
 *
 * Süre elle yazılmaz; öğrenme yolundaki terimlerin gerçek gövde uzunluğundan
 * derleme sırasında hesaplanır. Böylece terimler büyüdükçe süre kendiliğinden
 * güncellenir ve dosyada bayatlayan bir rakam kalmaz.
 */

/**
 * Türkçe metin için okuma hızı varsayımı (kelime/dakika).
 *
 * İngilizce için yaygın kabul 200-250'dir; Türkçe sondan eklemeli olduğu ve
 * bir kelime çoğu zaman iki üç İngilizce kelimenin işini gördüğü için daha
 * düşük tutuldu. Okur telefondan ve konuyu ilk kez okuyor.
 */
const HIZ = 180;

/** Süre bu basamağa yuvarlanır: "~32 dakika" sahte bir kesinlik verirdi. */
const BASAMAK = 5;

/** Boşluklara göre kaba kelime sayısı. Markdown işaretleri ayıklanmaz. */
export function kelimeSay(metin: string): number {
  const temiz = metin.trim();
  return temiz === '' ? 0 : temiz.split(/\s+/).length;
}

/** Kelime sayısını beş dakikalık basamaklara yuvarlanmış süreye çevirir. */
export function okumaDakikasi(kelime: number): number {
  return Math.max(BASAMAK, Math.round(kelime / HIZ / BASAMAK) * BASAMAK);
}
