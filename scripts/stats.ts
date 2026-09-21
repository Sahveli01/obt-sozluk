/**
 * Kategori x durum ilerleme tablosu.
 *
 * Her toplu yazımdan sonra çalıştırılır; hangi kategorinin ne kadar
 * yazıldığını gösterir. Sadece okur, hiçbir dosyayı değiştirmez.
 *
 * Kullanım: npm run stats
 */

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

import { parse as parseYaml } from 'yaml';

import { KATEGORILER } from '../src/data/kategoriler.ts';
import { TERIMLER_KLASORU, taslagiOku } from '../src/lib/taslak.ts';

const DURUMLAR = ['stub', 'taslak', 'incelendi'] as const;
type Durum = (typeof DURUMLAR)[number];

const FRONTMATTER_DESENI = /^---\r?\n([\s\S]*?)\r?\n---/;

interface Satir {
  kategori: string;
  ad: string;
  taslakta: number;
  sayilar: Record<Durum, number>;
  eksik: number;
}

function bosSayaclar(): Record<Durum, number> {
  return { stub: 0, taslak: 0, incelendi: 0 };
}

/** Terimin `status` alanını okur; okunamıyorsa stub sayar. */
async function durumOku(dosyaYolu: string): Promise<Durum> {
  const metin = await readFile(dosyaYolu, 'utf8');
  const eslesme = FRONTMATTER_DESENI.exec(metin);
  if (!eslesme) return 'stub';
  try {
    const fm = parseYaml(eslesme[1]!) as Record<string, unknown> | null;
    const status = fm?.['status'];
    if (typeof status === 'string' && (DURUMLAR as readonly string[]).includes(status)) {
      return status as Durum;
    }
  } catch {
    // Bozuk frontmatter'ı validate raporlar; burada sayım aksamasın.
  }
  return 'stub';
}

/** Sabit genişlikli hücre. */
function hucre(deger: string | number, genislik: number, saga = false): string {
  const metin = String(deger);
  // Türkçe harfler tek genişliktedir; basit padding yeterli.
  return saga ? metin.padStart(genislik) : metin.padEnd(genislik);
}

function yuzde(pay: number, payda: number): string {
  if (payda === 0) return '  - ';
  return `${String(Math.round((pay / payda) * 100)).padStart(3)}%`;
}

async function main(): Promise<void> {
  const taslak = await taslagiOku();

  const satirlar = new Map<string, Satir>(
    KATEGORILER.map((k) => [
      k.slug,
      { kategori: k.slug, ad: k.ad, taslakta: 0, sayilar: bosSayaclar(), eksik: 0 },
    ]),
  );

  for (const terim of taslak.terimler) {
    const satir = satirlar.get(terim.kategori);
    if (satir) satir.taslakta += 1;
  }

  let dosyaAdlari: string[] = [];
  try {
    const girdiler = await readdir(TERIMLER_KLASORU, { withFileTypes: true });
    dosyaAdlari = girdiler
      .filter((girdi) => girdi.isFile() && girdi.name.endsWith('.md'))
      .map((girdi) => girdi.name);
  } catch (sebep) {
    if ((sebep as NodeJS.ErrnoException).code !== 'ENOENT') throw sebep;
  }

  let taslaktaOlmayan = 0;
  for (const dosyaAdi of dosyaAdlari) {
    const slug = dosyaAdi.slice(0, -'.md'.length);
    const taslakTerim = taslak.slugHaritasi.get(slug);
    if (!taslakTerim) {
      taslaktaOlmayan += 1;
      continue;
    }
    const satir = satirlar.get(taslakTerim.kategori);
    if (!satir) continue;
    satir.sayilar[await durumOku(path.join(TERIMLER_KLASORU, dosyaAdi))] += 1;
  }

  for (const satir of satirlar.values()) {
    const dosyaSayisi = satir.sayilar.stub + satir.sayilar.taslak + satir.sayilar.incelendi;
    satir.eksik = satir.taslakta - dosyaSayisi;
  }

  const adGenisligi = Math.max(
    ...KATEGORILER.map((k) => k.ad.length),
    'TOPLAM'.length,
  );

  const basliklar = [
    hucre('Kategori', adGenisligi),
    hucre('Terim', 6, true),
    hucre('stub', 6, true),
    hucre('taslak', 7, true),
    hucre('incelendi', 10, true),
    hucre('eksik', 6, true),
    hucre('yazıldı', 8, true),
  ].join('  ');

  console.log('');
  console.log(basliklar);
  console.log('-'.repeat(basliklar.length));

  const toplam: Satir = {
    kategori: '',
    ad: 'TOPLAM',
    taslakta: 0,
    sayilar: bosSayaclar(),
    eksik: 0,
  };

  for (const kategori of KATEGORILER) {
    const satir = satirlar.get(kategori.slug)!;
    const yazilan = satir.sayilar.taslak + satir.sayilar.incelendi;
    console.log(
      [
        hucre(satir.ad, adGenisligi),
        hucre(satir.taslakta, 6, true),
        hucre(satir.sayilar.stub, 6, true),
        hucre(satir.sayilar.taslak, 7, true),
        hucre(satir.sayilar.incelendi, 10, true),
        hucre(satir.eksik, 6, true),
        hucre(yuzde(yazilan, satir.taslakta), 8, true),
      ].join('  '),
    );

    toplam.taslakta += satir.taslakta;
    toplam.eksik += satir.eksik;
    for (const durum of DURUMLAR) toplam.sayilar[durum] += satir.sayilar[durum];
  }

  const toplamYazilan = toplam.sayilar.taslak + toplam.sayilar.incelendi;
  console.log('-'.repeat(basliklar.length));
  console.log(
    [
      hucre(toplam.ad, adGenisligi),
      hucre(toplam.taslakta, 6, true),
      hucre(toplam.sayilar.stub, 6, true),
      hucre(toplam.sayilar.taslak, 7, true),
      hucre(toplam.sayilar.incelendi, 10, true),
      hucre(toplam.eksik, 6, true),
      hucre(yuzde(toplamYazilan, toplam.taslakta), 8, true),
    ].join('  '),
  );

  console.log('');
  console.log(
    `"eksik" = taslakta olup dosyası olmayan terim sayısı; "npm run seed" kapatır.`,
  );
  if (taslaktaOlmayan > 0) {
    console.log(
      `Uyarı: ${taslaktaOlmayan} dosyanın taslakta karşılığı yok, tabloya dahil edilmedi.`,
    );
  }
  console.log('');
}

await main();
