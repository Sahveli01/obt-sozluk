/**
 * `docs/terim-taslagi.md` içinde olup `src/content/terimler/` altında dosyası
 * olmayan terimler için `status: stub` dosyaları üretir.
 *
 * Kurallar:
 * - Var olan bir dosyaya **asla** dokunmaz; ne frontmatter'ı ne gövdesi.
 * - Hiçbir alanı uydurmaz: `tr`, `short`, `related` boş bırakılır, insan doldurur.
 * - Anlam ayrımlı terimlerde (`Fork (Blockchain)` / `Fork (Git)`) `disambiguation`
 *   alanını kardeş slug'larla doldurur; bu bilgi taslaktan doğrudan okunur.
 *
 * Kullanım: npm run seed
 */

import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import {
  anlamAyrimiKardesleri,
  TASLAK_YOLU,
  TERIMLER_KLASORU,
  taslagiOku,
  type TaslakTerim,
} from '../src/lib/taslak.ts';

/** Stub'ların varsayılan seviyesi. Terim yazılırken insan tarafından düzeltilir. */
const VARSAYILAN_SEVIYE = 'orta';

function bugun(): string {
  const simdi = new Date();
  const ay = String(simdi.getMonth() + 1).padStart(2, '0');
  const gun = String(simdi.getDate()).padStart(2, '0');
  return `${simdi.getFullYear()}-${ay}-${gun}`;
}

/** YAML'de tırnak içine alınmış dize. */
function yamlDize(deger: string): string {
  return `"${deger.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

/** YAML akış dizisi: `[a, b]` ya da `[]`. */
function yamlDizi(degerler: readonly string[]): string {
  if (degerler.length === 0) return '[]';
  return `[${degerler.join(', ')}]`;
}

function stubIcerigi(terim: TaslakTerim, disambiguation: string[], tarih: string): string {
  return `---
term: ${yamlDize(terim.ad)}
tr: ""
aliases: []
category: ${terim.kategori}
subcategory: ${yamlDize(terim.altKategori)}
level: ${VARSAYILAN_SEVIYE}
short: ""
related: []
disambiguation: ${yamlDizi(disambiguation)}
tags: []
status: stub
reviewedBy: []
dateSensitive: false
sources: []
added: ${tarih}
updated: ${tarih}
---

<!-- Bu terim henüz yazılmadı.
     Gövde başlıkları ve yazım kuralları için CLAUDE.md'ye bak.
     Yazarken: tr, short, related, level alanlarını da doldur ve
     status değerini taslak yap. -->
`;
}

async function varOlanSluglar(): Promise<Set<string>> {
  await mkdir(TERIMLER_KLASORU, { recursive: true });
  const girdiler = await readdir(TERIMLER_KLASORU, { withFileTypes: true });
  return new Set(
    girdiler
      .filter((girdi) => girdi.isFile() && girdi.name.endsWith('.md'))
      .map((girdi) => girdi.name.slice(0, -'.md'.length)),
  );
}

async function main(): Promise<void> {
  const taslak = await taslagiOku();

  if (taslak.cakisanSluglar.length > 0) {
    console.error(`HATA: ${TASLAK_YOLU} içinde aynı slug'a düşen terimler var.\n`);
    for (const { slug, terimler } of taslak.cakisanSluglar) {
      const nerede = terimler.map((t) => `"${t.ad}" (satır ${t.satir})`).join(' ve ');
      console.error(`  ${slug}: ${nerede}`);
    }
    console.error(
      '\nAyrım için terim adına parantez ekle (ör. "Fork (Git)") ya da ' +
        'satır sonuna {slug: ...} yaz. Hiçbir dosya yazılmadı.',
    );
    process.exitCode = 1;
    return;
  }

  const mevcut = await varOlanSluglar();
  const tarih = bugun();

  const yeniler: TaslakTerim[] = [];
  const zaten: TaslakTerim[] = [];

  for (const terim of taslak.terimler) {
    if (mevcut.has(terim.slug)) {
      zaten.push(terim);
      continue;
    }
    const disambiguation = anlamAyrimiKardesleri(taslak, terim);
    const yol = path.join(TERIMLER_KLASORU, `${terim.slug}.md`);
    await writeFile(yol, stubIcerigi(terim, disambiguation, tarih), 'utf8');
    yeniler.push(terim);
  }

  const fazlalik = [...mevcut].filter((slug) => !taslak.slugHaritasi.has(slug));

  console.log(`Taslak: ${path.relative(process.cwd(), TASLAK_YOLU)}`);
  console.log(
    `${taslak.kategoriler.length} kategori, ${taslak.terimler.length} terim okundu.`,
  );
  console.log('');
  console.log(`${yeniler.length} yeni, ${zaten.length} zaten var.`);

  const anlamAyrimliYeni = yeniler.filter(
    (terim) => anlamAyrimiKardesleri(taslak, terim).length > 0,
  );
  if (anlamAyrimliYeni.length > 0) {
    console.log(
      `${anlamAyrimliYeni.length} yeni dosyada disambiguation alanı otomatik dolduruldu ` +
        `(${taslak.anlamAyrimlari.size} anlam ayrımı grubu).`,
    );
  }

  if (fazlalik.length > 0) {
    console.log('');
    console.log(
      `Uyarı: taslakta karşılığı olmayan ${fazlalik.length} dosya var (silinmedi):`,
    );
    for (const slug of fazlalik.sort()) console.log(`  ${slug}.md`);
  }
}

await main();
