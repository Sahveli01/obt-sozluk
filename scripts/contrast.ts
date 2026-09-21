/**
 * Kontrast tabanı denetimi.
 *
 * `src/styles/tokens.css` içindeki OKLCH değerlerini okur, açık ve koyu
 * temada yük taşıyan her renk çiftinin WCAG kontrast oranını hesaplar.
 * Metin için 4.5:1, anlam taşıyan çizgi ve kenarlıklar için 3:1.
 *
 * Neden var: bu sözlük telefonda, aydınlık ortamda ve zaman zaman
 * projeksiyonda okunacak. Kontrast tabanı DESIGN.md'nin merkezî kararı;
 * elle doğrulanan bir kural ilk değişiklikte sessizce çürür.
 *
 * Kullanım: npm run contrast
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

type RGB = [number, number, number];

const PROJE_KOKU = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TOKEN_YOLU = path.join(PROJE_KOKU, 'src', 'styles', 'tokens.css');

const METIN_TABANI = 4.5;
const CIZGI_TABANI = 3;

/** OKLCH -> lineer sRGB (Björn Ottosson'un dönüşümü). */
function oklchToLinearSrgb(L: number, C: number, hDeg: number): RGB {
  const h = (hDeg * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);

  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;

  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

/**
 * WCAG 2.x göreli parlaklık. Girdi zaten lineer sRGB olduğu için ayrıca
 * doğrusallaştırma yapılmaz; yalnızca gamut dışına taşanlar kırpılır.
 */
function parlaklik([r, g, b]: RGB): number {
  const kirp = (v: number) => Math.min(Math.max(v, 0), 1);
  return 0.2126 * kirp(r) + 0.7152 * kirp(g) + 0.0722 * kirp(b);
}

function kontrast(a: RGB, b: RGB): number {
  const [yuksek, dusuk] = [parlaklik(a), parlaklik(b)].sort((x, y) => y - x) as [
    number,
    number,
  ];
  return (yuksek + 0.05) / (dusuk + 0.05);
}

const HUE: Record<string, number> = {
  '--hue-accent': 275,
  '--hue-danger': 25,
  '--hue-warning': 75,
  '--hue-success': 155,
};

const TOKEN_DESENI =
  /(--color-[a-z-]+):\s*oklch\(\s*([\d.]+)\s+([\d.]+)\s+(var\(--hue-[a-z]+\)|[\d.]+)\s*\)/g;

function tokenlariTopla(blok: string): Map<string, RGB> {
  const harita = new Map<string, RGB>();
  TOKEN_DESENI.lastIndex = 0;
  let eslesme: RegExpExecArray | null;
  while ((eslesme = TOKEN_DESENI.exec(blok)) !== null) {
    const hamHue = eslesme[4]!;
    const hue = hamHue.startsWith('var(') ? HUE[hamHue.slice(4, -1)] : Number(hamHue);
    if (hue === undefined) continue;
    harita.set(
      eslesme[1]!,
      oklchToLinearSrgb(Number(eslesme[2]), Number(eslesme[3]), hue),
    );
  }
  return harita;
}

/** Yük taşıyan çiftler. Dekoratif `--color-line` bilerek listede değil. */
const CIFTLER: ReadonlyArray<readonly [string, string, number, string]> = [
  ['--color-text', '--color-bg', METIN_TABANI, 'gövde metni'],
  ['--color-text', '--color-surface', METIN_TABANI, 'kart üstü metin'],
  ['--color-text-muted', '--color-bg', METIN_TABANI, 'ikincil metin'],
  ['--color-text-muted', '--color-surface', METIN_TABANI, 'ikincil (kart)'],
  ['--color-text-muted', '--color-surface-sunken', METIN_TABANI, 'ikincil (çukur)'],
  ['--color-accent', '--color-bg', METIN_TABANI, 'bağlantı'],
  ['--color-accent', '--color-surface', METIN_TABANI, 'bağlantı (kart)'],
  ['--color-accent-hover', '--color-surface', METIN_TABANI, 'bağlantı:hover'],
  ['--color-text-on-accent', '--color-accent', METIN_TABANI, 'vurgu üstü metin'],
  ['--color-text-on-accent', '--color-accent-hover', METIN_TABANI, 'vurgu:hover metni'],
  ['--color-accent', '--color-accent-subtle', METIN_TABANI, 'taslak rozeti'],
  ['--color-success', '--color-success-subtle', METIN_TABANI, 'incelendi rozeti'],
  ['--color-warning', '--color-warning-subtle', METIN_TABANI, 'uyarı rozeti'],
  ['--color-danger', '--color-danger-subtle', METIN_TABANI, 'hata rozeti'],
  ['--color-text', '--color-warning-subtle', METIN_TABANI, 'uyarı kutusu metni'],
  ['--color-text', '--color-danger-subtle', METIN_TABANI, 'hata kutusu metni'],
  ['--color-line-strong', '--color-bg', CIZGI_TABANI, 'girdi kenarlığı'],
  ['--color-line-strong', '--color-surface', CIZGI_TABANI, 'girdi kenarlığı (kart)'],
  ['--color-accent', '--color-bg', CIZGI_TABANI, 'odak halkası'],
  ['--color-warning', '--color-warning-subtle', CIZGI_TABANI, 'uyarı şeridi'],
  ['--color-danger', '--color-danger-subtle', CIZGI_TABANI, 'hata şeridi'],
];

async function main(): Promise<void> {
  const css = await readFile(TOKEN_YOLU, 'utf8');
  const koyuBaslangic = css.indexOf('@media (prefers-color-scheme: dark)');
  if (koyuBaslangic === -1) {
    console.error('HATA: tokens.css içinde koyu tema bloğu bulunamadı.');
    process.exitCode = 1;
    return;
  }

  const acik = tokenlariTopla(css.slice(0, koyuBaslangic));
  // Koyu tema yalnızca bazı token'ları ezer; kalanlar açık temadan gelir.
  const koyu = new Map([...acik, ...tokenlariTopla(css.slice(koyuBaslangic))]);

  let dusen = 0;

  for (const [temaAdi, tema] of [
    ['Açık tema', acik],
    ['Koyu tema', koyu],
  ] as const) {
    console.log(`\n${temaAdi}`);
    console.log('-'.repeat(52));
    for (const [on, arka, taban, etiket] of CIFTLER) {
      const a = tema.get(on);
      const b = tema.get(arka);
      if (!a || !b) {
        console.log(`  ?  ${etiket.padEnd(24)} token yok (${on} / ${arka})`);
        dusen += 1;
        continue;
      }
      const oran = kontrast(a, b);
      const gecti = oran >= taban;
      if (!gecti) dusen += 1;
      console.log(
        `  ${gecti ? 'ok' : 'X '} ${etiket.padEnd(24)} ${oran.toFixed(2).padStart(6)}:1` +
          `   taban ${taban}`,
      );
    }
  }

  console.log('');
  if (dusen > 0) {
    console.error(`${dusen} çift kontrast tabanının altında.`);
    process.exitCode = 1;
    return;
  }
  console.log('Tüm çiftler kontrast tabanını geçiyor.');
}

await main();
