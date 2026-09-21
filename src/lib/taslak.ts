/**
 * `docs/terim-taslagi.md` ayrıştırıcısı.
 *
 * Taslak, sözlüğün kaynak gerçeğidir: terim ekleme/silme/yeniden adlandırma
 * yalnızca oradan yapılır. seed, validate ve stats script'leri aynı sonucu
 * görsün diye ayrıştırma tek bir yerde durur.
 *
 * Tanınan sözdizimi:
 *   `## 1. Blockchain Temelleri (slug: temeller)`  -> kategori
 *   `### Temel kavramlar`                          -> alt kategori
 *   `- Reentrancy Attack`                          -> terim
 *   `- C++ {slug: cpp}`                            -> slug'ı elle belirlenmiş terim
 *   `- Fork (Blockchain)`                          -> anlam ayrımlı terim
 *
 * İlk `## ` başlığından önceki satırlar (dosyanın kendi kullanım kılavuzu)
 * yok sayılır; oradaki `- ` ile başlayan satırlar terim değildir.
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { normalize } from './normalize.ts';
import { parantezliMi, slugla, tabanAd } from './slug.ts';

/** Depo kökü (bu dosya `src/lib/` içinde durur). */
export const PROJE_KOKU = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
/** Ana terim listesinin yolu. */
export const TASLAK_YOLU = path.join(PROJE_KOKU, 'docs', 'terim-taslagi.md');
/** Terim dosyalarının klasörü. */
export const TERIMLER_KLASORU = path.join(PROJE_KOKU, 'src', 'content', 'terimler');

export interface TaslakTerim {
  /** İngilizce kanonik ad, taslaktaki hâliyle (anlam ayrımı parantezi dahil). */
  ad: string;
  /** Dosya adı olacak kalıcı slug. */
  slug: string;
  /** Sondaki anlam ayrımı parantezi atılmış hâl; eş adlıları bulmak için. */
  taban: string;
  /** Slug `{slug: ...}` ile elle mi verildi? */
  slugElle: boolean;
  /** Ait olduğu kategori slug'ı. */
  kategori: string;
  /** Ait olduğu `###` alt başlığı; düz kategorilerde boş dize. */
  altKategori: string;
  /** Taslaktaki satır numarası (hata mesajları için). */
  satir: number;
}

export interface TaslakKategori {
  slug: string;
  ad: string;
  sira: number;
  altBasliklar: string[];
  satir: number;
}

export interface Taslak {
  kategoriler: TaslakKategori[];
  terimler: TaslakTerim[];
  /** Slug -> terim. Çakışma varsa `cakisanSluglar` dolu döner. */
  slugHaritasi: Map<string, TaslakTerim>;
  /** Aynı slug'a düşen terimler. Boş olmalı. */
  cakisanSluglar: Array<{ slug: string; terimler: TaslakTerim[] }>;
  /**
   * Gerçek anlam ayrımı grupları: aynı taban ada sahip, en az biri parantezli
   * iki ya da daha fazla terim. `Fork (Blockchain)` + `Fork (Git)` gibi.
   */
  anlamAyrimlari: Map<string, TaslakTerim[]>;
}

const KATEGORI_DESENI = /^##\s+(\d+)\.\s+(.+?)\s*\(slug:\s*([a-z0-9-]+)\s*\)\s*$/;
const ALT_KATEGORI_DESENI = /^###\s+(.+?)\s*$/;
const TERIM_DESENI = /^-\s+(.+?)\s*$/;
const SLUG_GECERSIZ_KILMA = /\s*\{slug:\s*([a-z0-9-]+)\s*\}\s*$/;

/** Taslak dosyasını okuyup ayrıştırır. */
export async function taslagiOku(yol: string = TASLAK_YOLU): Promise<Taslak> {
  const metin = await readFile(yol, 'utf8');
  return taslagiAyristir(metin);
}

/** Taslak metnini ayrıştırır (dosya okumadan; testten çağrılabilir). */
export function taslagiAyristir(metin: string): Taslak {
  const kategoriler: TaslakKategori[] = [];
  const terimler: TaslakTerim[] = [];

  let aktifKategori: TaslakKategori | undefined;
  let aktifAltKategori = '';

  const satirlar = metin.split(/\r?\n/);
  for (const [dizin, hamSatir] of satirlar.entries()) {
    const satirNo = dizin + 1;
    const satir = hamSatir.trim();
    if (satir.length === 0) continue;

    const kategoriEslesme = KATEGORI_DESENI.exec(satir);
    if (kategoriEslesme) {
      aktifKategori = {
        sira: Number(kategoriEslesme[1]),
        ad: kategoriEslesme[2]!,
        slug: kategoriEslesme[3]!,
        altBasliklar: [],
        satir: satirNo,
      };
      aktifAltKategori = '';
      kategoriler.push(aktifKategori);
      continue;
    }

    // İlk kategoriye gelene kadar her şey (kullanım kılavuzu) yok sayılır.
    if (!aktifKategori) continue;

    const altEslesme = ALT_KATEGORI_DESENI.exec(satir);
    if (altEslesme) {
      aktifAltKategori = altEslesme[1]!;
      aktifKategori.altBasliklar.push(aktifAltKategori);
      continue;
    }

    const terimEslesme = TERIM_DESENI.exec(satir);
    if (!terimEslesme) continue;

    let ad = terimEslesme[1]!;
    let slug: string;
    let slugElle = false;

    const gecersizKilma = SLUG_GECERSIZ_KILMA.exec(ad);
    if (gecersizKilma) {
      slug = gecersizKilma[1]!;
      slugElle = true;
      ad = ad.slice(0, gecersizKilma.index).trim();
    } else {
      slug = slugla(ad);
    }

    terimler.push({
      ad,
      slug,
      taban: tabanAd(ad),
      slugElle,
      kategori: aktifKategori.slug,
      altKategori: aktifAltKategori,
      satir: satirNo,
    });
  }

  return {
    kategoriler,
    terimler,
    ...sluglariCozumle(terimler),
    anlamAyrimlari: anlamAyrimlariniBul(terimler),
  };
}

function sluglariCozumle(terimler: TaslakTerim[]): {
  slugHaritasi: Map<string, TaslakTerim>;
  cakisanSluglar: Array<{ slug: string; terimler: TaslakTerim[] }>;
} {
  const gruplar = new Map<string, TaslakTerim[]>();
  for (const terim of terimler) {
    const grup = gruplar.get(terim.slug);
    if (grup) grup.push(terim);
    else gruplar.set(terim.slug, [terim]);
  }

  const slugHaritasi = new Map<string, TaslakTerim>();
  const cakisanSluglar: Array<{ slug: string; terimler: TaslakTerim[] }> = [];
  for (const [slug, grup] of gruplar) {
    slugHaritasi.set(slug, grup[0]!);
    if (grup.length > 1) cakisanSluglar.push({ slug, terimler: grup });
  }

  return { slugHaritasi, cakisanSluglar };
}

/**
 * Aynı taban ada sahip terimleri gruplar; bunlar gerçek anlam ayrımlarıdır.
 *
 * `Proof of Work (PoW)` gibi kısaltma parantezleri tek başına kaldığı için
 * gruba girmez: grup kurulması için tabanın en az iki terimde geçmesi ve
 * bunlardan en az birinin parantezli olması gerekir.
 *
 * Anahtar slug değil `normalize()` çıktısıdır: slug noktalama işaretlerini
 * düşürdüğü için `C (Dil)` ile `C++` aynı tabana inip yanlışlıkla eşleşirdi.
 */
function anlamAyrimlariniBul(terimler: TaslakTerim[]): Map<string, TaslakTerim[]> {
  const tabanGruplari = new Map<string, TaslakTerim[]>();
  for (const terim of terimler) {
    const anahtar = normalize(terim.taban);
    const grup = tabanGruplari.get(anahtar);
    if (grup) grup.push(terim);
    else tabanGruplari.set(anahtar, [terim]);
  }

  const sonuc = new Map<string, TaslakTerim[]>();
  for (const [anahtar, grup] of tabanGruplari) {
    if (grup.length < 2) continue;
    if (!grup.some((terim) => parantezliMi(terim.ad))) continue;
    sonuc.set(anahtar, grup);
  }
  return sonuc;
}

/** Bir terimin anlam ayrımı kardeşlerinin slug'ları (kendisi hariç). */
export function anlamAyrimiKardesleri(taslak: Taslak, terim: TaslakTerim): string[] {
  const grup = taslak.anlamAyrimlari.get(normalize(terim.taban));
  if (!grup) return [];
  return grup.filter((kardes) => kardes.slug !== terim.slug).map((kardes) => kardes.slug);
}
