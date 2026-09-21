/**
 * Tutarlılık kontrolleri. Hata varsa çıkış kodu 1 olur.
 *
 * Denetlenenler:
 *  1. Taslakta olup dosyası olmayan terim.
 *  2. Dosyası olup taslakta olmayan terim.
 *  3. Taslakta aynı slug'a düşen iki terim.
 *  4. `category` / `subcategory` alanlarının taslakla ve kategoriler.ts ile uyumu.
 *  5. `related`, `disambiguation` ve `[[wiki-link]]` hedeflerinin taslakta var olması,
 *     ve aynı hedefe gövdede birden fazla kez bağlanılmaması.
 *  6. Aynı alias'ın (ya da bir slug'a eşit alias'ın) iki terimde kullanılması.
 *  7. `short` uzunluğu (<= 160) ve stub olmayan terimlerde boş olmaması.
 *  8. Stub olmayan terimlerde `## Nedir?` başlığının varlığı.
 *  9. Frontmatter'ın zorunlu alanları ve enum değerleri.
 * 10. Öğrenme yollarındaki terim slug'larının var olması.
 *
 * Uyarılar (çıkış kodunu etkilemez): stub olmayan terimde 2'den az `related`,
 * kendine bağlanan terim, anlam ayrımı grubunda eksik karşılıklı bağlantı.
 *
 * Kullanım: npm run validate
 */

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

import { parse as parseYaml } from 'yaml';

import { KATEGORI_HARITASI, KATEGORILER } from '../src/data/kategoriler.ts';
import { wikiLinkHedefleri } from '../src/lib/remark-wiki-link.ts';
import { slugla } from '../src/lib/slug.ts';
import { PROJE_KOKU, TERIMLER_KLASORU, taslagiOku, type Taslak } from '../src/lib/taslak.ts';

const YOLLAR_KLASORU = path.join(PROJE_KOKU, 'src', 'content', 'yollar');
const SHORT_MAKS = 160;
const RELATED_MIN = 2;
const RELATED_MAKS = 6;
const DURUMLAR = new Set(['stub', 'taslak', 'incelendi']);
const SEVIYELER = new Set(['baslangic', 'orta', 'ileri']);

const hatalar: string[] = [];
const uyarilar: string[] = [];

function hata(nerede: string, mesaj: string): void {
  hatalar.push(`${nerede}: ${mesaj}`);
}
function uyari(nerede: string, mesaj: string): void {
  uyarilar.push(`${nerede}: ${mesaj}`);
}

interface TerimDosyasi {
  slug: string;
  dosya: string;
  frontmatter: Record<string, unknown>;
  govde: string;
}

const FRONTMATTER_DESENI = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

function frontmatterAyir(
  metin: string,
  nerede: string,
): { frontmatter: Record<string, unknown>; govde: string } | undefined {
  const eslesme = FRONTMATTER_DESENI.exec(metin);
  if (!eslesme) {
    hata(nerede, 'frontmatter bloğu (---) bulunamadı.');
    return undefined;
  }
  let ayristirilmis: unknown;
  try {
    ayristirilmis = parseYaml(eslesme[1]!);
  } catch (sebep) {
    hata(nerede, `frontmatter YAML olarak okunamadı: ${(sebep as Error).message}`);
    return undefined;
  }
  if (ayristirilmis === null || typeof ayristirilmis !== 'object' || Array.isArray(ayristirilmis)) {
    hata(nerede, 'frontmatter bir nesne değil.');
    return undefined;
  }
  return {
    frontmatter: ayristirilmis as Record<string, unknown>,
    govde: eslesme[2] ?? '',
  };
}

async function markdownDosyalari(klasor: string): Promise<string[]> {
  try {
    const girdiler = await readdir(klasor, { withFileTypes: true });
    return girdiler
      .filter((girdi) => girdi.isFile() && girdi.name.endsWith('.md'))
      .map((girdi) => girdi.name)
      .sort();
  } catch (sebep) {
    if ((sebep as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw sebep;
  }
}

async function terimleriOku(): Promise<TerimDosyasi[]> {
  const dosyalar = await markdownDosyalari(TERIMLER_KLASORU);
  const sonuc: TerimDosyasi[] = [];
  for (const dosya of dosyalar) {
    const metin = await readFile(path.join(TERIMLER_KLASORU, dosya), 'utf8');
    const ayrilmis = frontmatterAyir(metin, dosya);
    if (!ayrilmis) continue;
    sonuc.push({
      slug: dosya.slice(0, -'.md'.length),
      dosya,
      frontmatter: ayrilmis.frontmatter,
      govde: ayrilmis.govde,
    });
  }
  return sonuc;
}

/** 1-3: taslak ile dosya sisteminin karşılıklı uyumu. */
function taslakDosyaUyumu(taslak: Taslak, terimler: TerimDosyasi[]): void {
  for (const { slug, terimler: grup } of taslak.cakisanSluglar) {
    const nerede = grup.map((t) => `"${t.ad}" (satır ${t.satir})`).join(' ve ');
    hata('docs/terim-taslagi.md', `"${slug}" slug'ı iki terimde birden: ${nerede}.`);
  }

  const dosyaSluglari = new Set(terimler.map((t) => t.slug));

  for (const terim of taslak.terimler) {
    if (!dosyaSluglari.has(terim.slug)) {
      hata(
        'docs/terim-taslagi.md',
        `"${terim.ad}" (satır ${terim.satir}) taslakta var ama ` +
          `src/content/terimler/${terim.slug}.md yok. "npm run seed" çalıştır.`,
      );
    }
  }

  for (const terim of terimler) {
    if (!taslak.slugHaritasi.has(terim.slug)) {
      hata(
        terim.dosya,
        'dosya var ama taslakta karşılığı yok. Terimi taslağa ekle ya da dosyayı sil.',
      );
    }
  }
}

/** 4: kategori ve alt kategori alanlarının taslakla uyumu. */
function kategoriUyumu(taslak: Taslak, terim: TerimDosyasi): void {
  const taslakTerim = taslak.slugHaritasi.get(terim.slug);
  const kategori = terim.frontmatter['category'];
  const altKategori = terim.frontmatter['subcategory'] ?? '';

  if (typeof kategori !== 'string' || !KATEGORI_HARITASI.has(kategori)) {
    hata(terim.dosya, `category "${String(kategori)}" kategoriler.ts içinde tanımlı değil.`);
    return;
  }
  if (typeof altKategori !== 'string') {
    hata(terim.dosya, 'subcategory bir metin olmalı.');
    return;
  }

  if (taslakTerim && kategori !== taslakTerim.kategori) {
    hata(
      terim.dosya,
      `category "${kategori}" ama taslakta bu terim "${taslakTerim.kategori}" altında.`,
    );
  }
  if (taslakTerim && altKategori !== taslakTerim.altKategori) {
    hata(
      terim.dosya,
      `subcategory "${altKategori}" ama taslakta "${taslakTerim.altKategori}".`,
    );
  }

  const tanimli = KATEGORI_HARITASI.get(kategori)!.altBasliklar;
  if (altKategori !== '' && !tanimli.includes(altKategori)) {
    hata(
      terim.dosya,
      `subcategory "${altKategori}" "${kategori}" kategorisinde tanımlı değil.`,
    );
  }
}

/** kategoriler.ts ile taslak başlıklarının aynı olması. */
function kategoriTanimlariUyumu(taslak: Taslak): void {
  const taslaktaki = new Map(taslak.kategoriler.map((k) => [k.slug, k]));

  for (const kategori of KATEGORILER) {
    const taslakKategori = taslaktaki.get(kategori.slug);
    if (!taslakKategori) {
      hata('src/data/kategoriler.ts', `"${kategori.slug}" kategorisi taslakta yok.`);
      continue;
    }
    if (taslakKategori.sira !== kategori.sira) {
      hata(
        'src/data/kategoriler.ts',
        `"${kategori.slug}" sırası ${kategori.sira} ama taslakta ${taslakKategori.sira}.`,
      );
    }
    if (taslakKategori.ad !== kategori.ad) {
      hata(
        'src/data/kategoriler.ts',
        `"${kategori.slug}" adı "${kategori.ad}" ama taslakta "${taslakKategori.ad}".`,
      );
    }
    const beklenen = taslakKategori.altBasliklar.join(' | ');
    const yazilan = kategori.altBasliklar.join(' | ');
    if (beklenen !== yazilan) {
      hata(
        'src/data/kategoriler.ts',
        `"${kategori.slug}" alt başlıkları taslakla uyuşmuyor.\n` +
          `    taslak: [${beklenen}]\n` +
          `    kod   : [${yazilan}]`,
      );
    }
  }

  for (const taslakKategori of taslak.kategoriler) {
    if (!KATEGORI_HARITASI.has(taslakKategori.slug)) {
      hata(
        'docs/terim-taslagi.md',
        `"${taslakKategori.slug}" kategorisi kategoriler.ts içinde tanımlı değil.`,
      );
    }
  }
}

/** 9: frontmatter'ın zorunlu alanları ve enum değerleri. */
function frontmatterKontrolu(terim: TerimDosyasi, taslak: Taslak): string {
  const fm = terim.frontmatter;

  const term = fm['term'];
  if (typeof term !== 'string' || term.trim() === '') {
    hata(terim.dosya, 'term alanı boş.');
  } else {
    const taslakTerim = taslak.slugHaritasi.get(terim.slug);
    if (taslakTerim && term !== taslakTerim.ad) {
      hata(
        terim.dosya,
        `term "${term}" ama taslakta "${taslakTerim.ad}" yazıyor (satır ${taslakTerim.satir}).`,
      );
    }
  }

  const status = fm['status'];
  if (typeof status !== 'string' || !DURUMLAR.has(status)) {
    hata(terim.dosya, `status "${String(status)}" geçersiz (stub | taslak | incelendi).`);
  }

  const level = fm['level'];
  if (typeof level !== 'string' || !SEVIYELER.has(level)) {
    hata(terim.dosya, `level "${String(level)}" geçersiz (baslangic | orta | ileri).`);
  }

  for (const alan of ['dateSensitive'] as const) {
    if (typeof fm[alan] !== 'boolean') {
      hata(terim.dosya, `${alan} true ya da false olmalı.`);
    }
  }

  for (const alan of ['aliases', 'related', 'disambiguation', 'tags', 'reviewedBy', 'sources'] as const) {
    if (!Array.isArray(fm[alan])) {
      hata(terim.dosya, `${alan} bir liste olmalı.`);
    }
  }

  for (const alan of ['added', 'updated'] as const) {
    const deger = fm[alan];
    const gecerli =
      deger instanceof Date ? !Number.isNaN(deger.getTime()) : typeof deger === 'string' && deger !== '';
    if (!gecerli) hata(terim.dosya, `${alan} bir tarih olmalı (YYYY-AA-GG).`);
  }

  return typeof status === 'string' ? status : 'stub';
}

/** 7: short uzunluğu. */
function shortKontrolu(terim: TerimDosyasi, status: string): void {
  const short = terim.frontmatter['short'];
  if (typeof short !== 'string') {
    hata(terim.dosya, 'short bir metin olmalı.');
    return;
  }
  if (short.length > SHORT_MAKS) {
    hata(terim.dosya, `short ${short.length} karakter, en fazla ${SHORT_MAKS} olmalı.`);
  }
  if (status !== 'stub' && short.trim() === '') {
    hata(terim.dosya, `status "${status}" ama short boş.`);
  }
}

/** 8: stub olmayan terimlerde "## Nedir?" başlığı. */
function govdeKontrolu(terim: TerimDosyasi, status: string): void {
  if (status === 'stub') return;
  if (!/^##\s+Nedir\?\s*$/m.test(terim.govde)) {
    hata(terim.dosya, `status "${status}" ama "## Nedir?" başlığı yok.`);
  }
}

/** 5: related / disambiguation / [[wiki-link]] hedefleri. */
function baglantiKontrolu(terim: TerimDosyasi, taslak: Taslak): void {
  const kontrolEt = (hedefler: unknown, alan: string): void => {
    if (!Array.isArray(hedefler)) return;
    for (const hedef of hedefler) {
      if (typeof hedef !== 'string') {
        hata(
          terim.dosya,
          `${alan} içinde metin olmayan bir değer var (${JSON.stringify(hedef)}). ` +
            'YAML bazı slug\'ları özel değer sayar; "null" gibi bir slug tırnak ' +
            'içinde yazılmalıdır.',
        );
        continue;
      }
      if (hedef === terim.slug) {
        uyari(terim.dosya, `${alan} terimin kendisine bağlanıyor ("${hedef}").`);
        continue;
      }
      if (!taslak.slugHaritasi.has(hedef)) {
        hata(terim.dosya, `${alan} -> "${hedef}" taslakta yok.`);
      }
    }
  };

  const related = terim.frontmatter['related'];
  kontrolEt(related, 'related');
  kontrolEt(terim.frontmatter['disambiguation'], 'disambiguation');

  if (Array.isArray(related) && related.length > RELATED_MAKS) {
    hata(terim.dosya, `related ${related.length} slug içeriyor, en fazla ${RELATED_MAKS}.`);
  }
  const status = terim.frontmatter['status'];
  if (status !== 'stub' && Array.isArray(related) && related.length < RELATED_MIN) {
    uyari(terim.dosya, `related ${related.length} slug içeriyor, en az ${RELATED_MIN} bekleniyor.`);
  }

  const gorulenHedefler = new Set<string>();
  for (const hedef of wikiLinkHedefleri(terim.govde)) {
    if (!taslak.slugHaritasi.has(hedef)) {
      hata(terim.dosya, `[[${hedef}]] taslakta olmayan bir slug'a bağlanıyor.`);
    }
    // CLAUDE.md: bir terime yalnızca ilk geçtiği yerde bağlanılır.
    if (gorulenHedefler.has(hedef)) {
      hata(
        terim.dosya,
        `[[${hedef}]] birden fazla kez bağlanmış; yalnızca ilk kullanımda bağla.`,
      );
    }
    gorulenHedefler.add(hedef);
  }

  if (gorulenHedefler.has(terim.slug)) {
    uyari(terim.dosya, `gövde [[${terim.slug}]] ile kendine bağlanıyor.`);
  }
}

/** 6: alias çakışmaları. */
function aliasKontrolu(terimler: TerimDosyasi[]): void {
  const sahipler = new Map<string, string[]>();

  for (const terim of terimler) {
    const aliases = terim.frontmatter['aliases'];
    if (!Array.isArray(aliases)) continue;
    const gorulen = new Set<string>();
    for (const alias of aliases) {
      if (typeof alias !== 'string' || alias.trim() === '') {
        hata(terim.dosya, 'aliases içinde boş ya da metin olmayan değer var.');
        continue;
      }
      const anahtar = slugla(alias);
      if (anahtar === '') {
        hata(terim.dosya, `alias "${alias}" aranabilir bir forma indirgenemiyor.`);
        continue;
      }
      if (gorulen.has(anahtar)) {
        hata(terim.dosya, `alias "${alias}" aynı dosyada tekrar ediyor.`);
        continue;
      }
      gorulen.add(anahtar);
      const liste = sahipler.get(anahtar);
      if (liste) liste.push(terim.slug);
      else sahipler.set(anahtar, [terim.slug]);
    }
  }

  const dosyaSluglari = new Set(terimler.map((t) => t.slug));
  for (const [anahtar, sluglar] of sahipler) {
    if (sluglar.length > 1) {
      hata(
        'aliases',
        `"${anahtar}" alias'ı ${sluglar.length} terimde birden: ${sluglar.join(', ')}.`,
      );
    }
    const sahip = sluglar[0]!;
    if (dosyaSluglari.has(anahtar) && anahtar !== sahip) {
      hata(
        `${sahip}.md`,
        `alias "${anahtar}" başka bir terimin slug'ıyla aynı; arama belirsizleşir.`,
      );
    }
  }
}

/** Anlam ayrımı gruplarında karşılıklı bağlantı. */
function anlamAyrimiKontrolu(taslak: Taslak, terimler: TerimDosyasi[]): void {
  const dosyalar = new Map(terimler.map((t) => [t.slug, t]));

  for (const grup of taslak.anlamAyrimlari.values()) {
    for (const terim of grup) {
      const dosya = dosyalar.get(terim.slug);
      if (!dosya) continue;
      const mevcut = new Set(
        Array.isArray(dosya.frontmatter['disambiguation'])
          ? (dosya.frontmatter['disambiguation'] as unknown[]).filter(
              (d): d is string => typeof d === 'string',
            )
          : [],
      );
      const eksik = grup
        .filter((kardes) => kardes.slug !== terim.slug && !mevcut.has(kardes.slug))
        .map((kardes) => kardes.slug);
      if (eksik.length > 0) {
        uyari(dosya.dosya, `disambiguation eksik: ${eksik.join(', ')}.`);
      }
    }
  }
}

/** 10: öğrenme yollarındaki terim slug'ları. */
async function yollariKontrolEt(taslak: Taslak): Promise<number> {
  const dosyalar = await markdownDosyalari(YOLLAR_KLASORU);
  for (const dosya of dosyalar) {
    const metin = await readFile(path.join(YOLLAR_KLASORU, dosya), 'utf8');
    const ayrilmis = frontmatterAyir(metin, `yollar/${dosya}`);
    if (!ayrilmis) continue;
    const terms = ayrilmis.frontmatter['terms'];
    if (!Array.isArray(terms)) {
      hata(`yollar/${dosya}`, 'terms bir liste olmalı.');
      continue;
    }
    const gorulen = new Set<string>();
    for (const slug of terms) {
      if (typeof slug !== 'string') {
        hata(`yollar/${dosya}`, 'terms içinde metin olmayan bir değer var.');
        continue;
      }
      if (gorulen.has(slug)) hata(`yollar/${dosya}`, `"${slug}" listede tekrar ediyor.`);
      gorulen.add(slug);
      if (!taslak.slugHaritasi.has(slug)) {
        hata(`yollar/${dosya}`, `terms -> "${slug}" taslakta yok.`);
      }
    }
  }
  return dosyalar.length;
}

async function main(): Promise<void> {
  const taslak = await taslagiOku();
  const terimler = await terimleriOku();

  kategoriTanimlariUyumu(taslak);
  taslakDosyaUyumu(taslak, terimler);

  for (const terim of terimler) {
    const status = frontmatterKontrolu(terim, taslak);
    kategoriUyumu(taslak, terim);
    shortKontrolu(terim, status);
    govdeKontrolu(terim, status);
    baglantiKontrolu(terim, taslak);
  }

  aliasKontrolu(terimler);
  anlamAyrimiKontrolu(taslak, terimler);
  const yolSayisi = await yollariKontrolEt(taslak);

  console.log(
    `Kontrol edildi: ${taslak.terimler.length} taslak terimi, ` +
      `${terimler.length} terim dosyası, ${yolSayisi} öğrenme yolu.`,
  );

  if (uyarilar.length > 0) {
    console.log(`\n${uyarilar.length} uyarı:`);
    for (const mesaj of uyarilar) console.log(`  - ${mesaj}`);
  }

  if (hatalar.length > 0) {
    console.error(`\n${hatalar.length} hata:`);
    for (const mesaj of hatalar) console.error(`  x ${mesaj}`);
    console.error('');
    process.exitCode = 1;
    return;
  }

  console.log('\nHata yok.');
}

await main();
