/**
 * Kategori aileleri.
 *
 * 19 kategori ana sayfada eşit ağırlıklı 19 kart olarak durduğunda okur
 * hiçbir şey öğrenmiyordu — hepsi aynı şekildeydi ve hiçbiri terim
 * göstermiyordu. Aileler o listeyi taranabilir hâle getirir.
 *
 * Aileler gezinme içindir, sınıflandırma değil: kaynak gerçek hâlâ
 * `docs/terim-taslagi.md` ve `src/data/kategoriler.ts`. Buradaki gruplama
 * kategori slug'larına atıf yapar, onları yeniden tanımlamaz.
 */

import { KATEGORI_HARITASI, KATEGORILER } from './kategoriler.ts';

export interface Aile {
  /** Kalıcı kimlik; şimdilik yalnızca `id` olarak kullanılıyor. */
  slug: string;
  ad: string;
  /** Aile başlığının altına giren tek cümle. */
  aciklama: string;
  /** Bu ailedeki kategori slug'ları, gösterilecek sırayla. */
  kategoriler: readonly string[];
}

export const AILELER: readonly Aile[] = [
  {
    slug: 'blockchain',
    ad: 'Blockchain',
    aciklama:
      'Zincirin nasıl çalıştığından akıllı sözleşmelere, DeFi’den güvenliğe kadar teknolojinin kendisi.',
    kategoriler: [
      'temeller',
      'kriptografi',
      'konsensus',
      'cuzdanlar',
      'akilli-sozlesmeler',
      'tokenlar',
      'defi',
      'nft',
      'olceklenme',
      'guvenlik',
      'yonetisim',
      'aglar',
    ],
  },
  {
    slug: 'gelistirme',
    ad: 'Geliştirme',
    aciklama:
      'Blockchain’e özgü olmayan ama onsuz hiçbir şey yazılamayan ortak yazılım dili.',
    kategoriler: ['programlama', 'web', 'araclar'],
  },
  {
    slug: 'yapay-zeka',
    ad: 'Yapay Zekâ',
    aciklama:
      'Modellerin temelinden ajanlara ve vibecoding’e; artık her hackathon masasında olan kelimeler.',
    kategoriler: ['yapay-zeka'],
  },
  {
    slug: 'urun-topluluk',
    ad: 'Ürün ve Topluluk',
    aciklama:
      'Hackathon süreci, ürün ve girişim dili, bir de Discord’da her gün geçen jargon.',
    kategoriler: ['hackathon', 'jargon'],
  },
  {
    slug: 'piyasa',
    ad: 'Piyasa',
    aciklama:
      'Borsaların işleyişi, saklama ve Türkiye dahil düzenleyici çerçeve. Yatırım tavsiyesi yok.',
    kategoriler: ['piyasa'],
  },
] as const;

/**
 * Kapsama denetimi. Her kategori tam olarak bir ailede geçmek zorundadır;
 * aksi hâlde derleme burada durur. Taslağa yeni kategori eklenip buraya
 * eklenmediğinde ana sayfadan sessizce düşmesini engeller.
 */
function kapsamiDenetle(): void {
  const gorulen = new Map<string, number>();
  for (const aile of AILELER) {
    for (const slug of aile.kategoriler) {
      if (!KATEGORI_HARITASI.has(slug)) {
        throw new Error(
          `aileler.ts: "${aile.slug}" ailesi tanımsız kategoriye atıf yapıyor: "${slug}".`,
        );
      }
      gorulen.set(slug, (gorulen.get(slug) ?? 0) + 1);
    }
  }

  const eksik = KATEGORILER.filter((k) => !gorulen.has(k.slug)).map((k) => k.slug);
  if (eksik.length > 0) {
    throw new Error(`aileler.ts: hiçbir ailede geçmeyen kategori: ${eksik.join(', ')}.`);
  }

  const tekrar = [...gorulen].filter(([, n]) => n > 1).map(([slug]) => slug);
  if (tekrar.length > 0) {
    throw new Error(`aileler.ts: birden fazla ailede geçen kategori: ${tekrar.join(', ')}.`);
  }
}

kapsamiDenetle();
