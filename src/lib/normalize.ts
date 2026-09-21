/**
 * Türkçe arama normalizasyonu.
 *
 * Amaç: telefonda İngilizce klavyeyle "akilli sozlesme" yazan kişinin
 * "Akıllı Sözleşme"yi bulabilmesi. Hem arama sorgusu hem de indekslenen metin
 * aynı fonksiyondan geçer, böylece iki taraf da aynı forma iner.
 */

/**
 * Türkçeye özgü harflerin ASCII karşılıkları.
 *
 * Not: `I`/`İ` dönüşümü küçük harfe çevirmeden önce yapılmaz; önce Türkçe yerel
 * ayarıyla küçültülür (`I` -> `ı`, `İ` -> `i`), sonra bu tablo uygulanır.
 */
const TR_HARFLER: Readonly<Record<string, string>> = {
  ı: 'i',
  İ: 'i',
  ş: 's',
  Ş: 's',
  ğ: 'g',
  Ğ: 'g',
  ü: 'u',
  Ü: 'u',
  ö: 'o',
  Ö: 'o',
  ç: 'c',
  Ç: 'c',
  â: 'a',
  Â: 'a',
  î: 'i',
  Î: 'i',
  û: 'u',
  Û: 'u',
};

const TR_DESEN = new RegExp(`[${Object.keys(TR_HARFLER).join('')}]`, 'g');

/** Unicode birleşik işaretleri (NFD ayrıştırmasından artakalanlar). */
const BIRLESIK_ISARETLER = /[̀-ͯ]/g;

/**
 * Metni aramaya uygun biçime getirir:
 * Türkçe yerel ayarıyla küçük harfe çevirir, Türkçe harfleri ASCII'ye indirger,
 * kalan aksanları düşürür ve boşlukları tek boşluğa sıkıştırır.
 *
 * @example
 * normalize('Akıllı Sözleşme') // 'akilli sozlesme'
 * normalize('İMZA')            // 'imza'
 * normalize('Iyi')             // 'iyi'  (I -> ı -> i)
 */
export function normalize(metin: string): string {
  return metin
    .toLocaleLowerCase('tr')
    .replace(TR_DESEN, (harf) => TR_HARFLER[harf] ?? harf)
    .normalize('NFD')
    .replace(BIRLESIK_ISARETLER, '')
    .normalize('NFC')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalize edilmiş metni arama kelimelerine böler.
 * Harf ve rakam dışındaki her şey ayırıcı sayılır; `erc-20` -> `['erc', '20']`.
 */
export function tokenize(metin: string): string[] {
  return normalize(metin)
    .split(/[^a-z0-9]+/)
    .filter((parca) => parca.length > 0);
}
