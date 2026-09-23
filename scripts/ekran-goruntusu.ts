/**
 * Ekran görüntüsü yakalayıcı.
 *
 * Tasarım değişikliği yaparken çıktıya bakmak zorunludur; hayal etmek
 * yeterli değildir. Bu script siteyi derler, geçici bir sunucuda yayınlar
 * ve verilen sayfaları iki genişlik (masaüstü + telefon) × iki temada
 * yakalayıp `.screenshots/` altına yazar.
 *
 * Kullanım:
 *   npm run shot                      -> varsayılan sayfa kümesi, "now" etiketi
 *   npm run shot -- once              -> aynı küme, "once" etiketiyle
 *   npm run shot -- sonra /yollar     -> yalnızca verilen yolları yakala
 *   npm run shot -- yakin --gorunum   -> tam sayfa yerine yalnızca ilk ekran
 *
 * `--gorunum` detay incelemek içindir: tam sayfa görüntüsü uzun sayfalarda
 * okunamayacak kadar küçülüyor, bu mod sayfanın ilk ekranını 1:1 ölçekte
 * verir.
 *
 * Çıktı adı: .screenshots/<etiket>__<sayfa>__<genislik>__<tema>.png
 *
 * Derlemeyi kendisi yapmaz; `npm run build` çıktısını (`dist/`) kullanır.
 * Böylece aynı derlemeden hem "önce" hem "sonra" alınmaz.
 */

import { createReadStream } from 'node:fs';
import { mkdir, rm, stat } from 'node:fs/promises';
import { createServer, type Server } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { chromium, type Browser } from 'playwright';

const PROJE_KOKU = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(PROJE_KOKU, 'dist');
const CIKTI = path.join(PROJE_KOKU, '.screenshots');

/** `astro.config.ts` içindeki `base` ile aynı olmak zorunda. */
const { SITE } = await import('../src/config.ts');
const TABAN = SITE.base.replace(/\/+$/, '');

/** Varsayılan küme: tasarımın yük taşıyan dört sayfası. */
const VARSAYILAN_SAYFALAR = [
  '/',
  '/kategori/temeller',
  '/terim/gas',
  '/yollar',
] as const;

/** Masaüstü ve telefon. Aradaki kırılma noktası 48rem = 768px. */
const GENISLIKLER = [
  { ad: '1280', width: 1280, height: 1600 },
  { ad: '390', width: 390, height: 1400 },
] as const;

const TEMALAR = ['light', 'dark'] as const;

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

/** `dist/` klasörünü olduğu gibi servis eden en küçük statik sunucu. */
function sunucuAc(kok: string): Promise<{ server: Server; port: number }> {
  const server = createServer(async (istek, cevap) => {
    try {
      const url = new URL(istek.url ?? '/', 'http://localhost');
      let yol = decodeURIComponent(url.pathname);
      if (TABAN !== '' && yol.startsWith(TABAN)) yol = yol.slice(TABAN.length);
      if (yol === '' || yol.endsWith('/')) yol += 'index.html';

      let dosya = path.join(kok, yol);
      // `trailingSlash: 'ignore'` yüzünden /yollar gibi yollar klasördür.
      if (!path.extname(dosya)) {
        try {
          if ((await stat(dosya)).isDirectory()) dosya = path.join(dosya, 'index.html');
        } catch {
          dosya = `${dosya}.html`;
        }
      }

      const bilgi = await stat(dosya);
      if (!bilgi.isFile()) throw new Error('dosya değil');

      cevap.writeHead(200, {
        'content-type': MIME[path.extname(dosya)] ?? 'application/octet-stream',
        'cache-control': 'no-store',
      });
      createReadStream(dosya).pipe(cevap);
    } catch {
      cevap.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      cevap.end('bulunamadı');
    }
  });

  return new Promise((coz) => {
    server.listen(0, '127.0.0.1', () => {
      const adres = server.address();
      const port = typeof adres === 'object' && adres !== null ? adres.port : 0;
      coz({ server, port });
    });
  });
}

/** `/kategori/temeller` -> `kategori-temeller`; kök için `anasayfa`. */
function dosyaAdi(sayfa: string): string {
  const temiz = sayfa.replace(/^\/+|\/+$/g, '');
  return temiz === '' ? 'anasayfa' : temiz.replace(/\//g, '-');
}

async function yakala(
  tarayici: Browser,
  temelUrl: string,
  sayfalar: readonly string[],
  etiket: string,
  yalnizGorunum: boolean,
): Promise<number> {
  let sayac = 0;

  for (const { ad, width, height } of GENISLIKLER) {
    for (const tema of TEMALAR) {
      const baglam = await tarayici.newContext({
        viewport: { width, height },
        // Görünüm modunda 1:1 ölçek: görüntü küçültülmeden okunabilsin.
        deviceScaleFactor: yalnizGorunum ? 1 : 2,
        colorScheme: tema,
        locale: 'tr-TR',
        // Hareket, ekran görüntüsünde yalnızca gürültü üretir.
        reducedMotion: 'reduce',
      });

      const sekme = await baglam.newPage();

      for (const sayfa of sayfalar) {
        await sekme.goto(`${temelUrl}${TABAN}${sayfa}`, { waitUntil: 'networkidle' });
        // Tema seçimi localStorage'a bakar; sistem tercihi zaten colorScheme
        // ile verildi, burada yalnızca yazı tiplerinin yerleşmesini bekliyoruz.
        await sekme.evaluate(() => document.fonts.ready);

        const hedef = path.join(
          CIKTI,
          `${etiket}__${dosyaAdi(sayfa)}__${ad}__${tema}.png`,
        );
        await sekme.screenshot({ path: hedef, fullPage: !yalnizGorunum });
        sayac += 1;
        console.log(`  ${path.relative(PROJE_KOKU, hedef)}`);
      }

      await baglam.close();
    }
  }

  return sayac;
}

async function main(): Promise<void> {
  const hepsi = process.argv.slice(2);
  const yalnizGorunum = hepsi.includes('--gorunum');
  const argumanlar = hepsi.filter((a) => !a.startsWith('--'));
  const etiket = argumanlar[0] && !argumanlar[0].startsWith('/') ? argumanlar[0] : 'now';
  const verilen = argumanlar.filter((a) => a.startsWith('/'));
  const sayfalar = verilen.length > 0 ? verilen : VARSAYILAN_SAYFALAR;

  try {
    if (!(await stat(DIST)).isDirectory()) throw new Error();
  } catch {
    console.error('HATA: dist/ yok. Önce `npm run build` çalıştır.');
    process.exitCode = 1;
    return;
  }

  // Aynı etiketle yeniden çekilirse eskiler kalmasın.
  await mkdir(CIKTI, { recursive: true });
  for (const { ad } of GENISLIKLER) {
    for (const tema of TEMALAR) {
      for (const sayfa of sayfalar) {
        await rm(path.join(CIKTI, `${etiket}__${dosyaAdi(sayfa)}__${ad}__${tema}.png`), {
          force: true,
        });
      }
    }
  }

  const { server, port } = await sunucuAc(DIST);
  const tarayici = await chromium.launch();

  console.log(
    `Etiket: ${etiket} · ${sayfalar.length} sayfa × 2 genişlik × 2 tema` +
      (yalnizGorunum ? ' · yalnızca ilk ekran' : ' · tam sayfa'),
  );
  try {
    const sayac = await yakala(
      tarayici,
      `http://127.0.0.1:${port}`,
      sayfalar,
      etiket,
      yalnizGorunum,
    );
    console.log(`\n${sayac} görüntü yazıldı: ${path.relative(PROJE_KOKU, CIKTI)}/`);
  } finally {
    await tarayici.close();
    server.close();
  }
}

await main();
