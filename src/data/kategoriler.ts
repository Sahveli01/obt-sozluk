/**
 * Sözlüğün 19 kategorisi.
 *
 * Kaynak gerçek `docs/terim-taslagi.md` dosyasıdır: buradaki `slug` değerleri
 * taslaktaki `## N. Ad (slug: ...)` başlıklarıyla birebir aynı olmak zorundadır
 * ve `altBasliklar` listesi o başlığın altındaki `###` alt başlıklarını
 * taslaktaki sırayla, harfi harfine tekrarlar. `npm run validate` bu eşleşmeyi
 * denetler; bu yüzden kesme işareti de taslaktaki gibi düz (') yazılır.
 *
 * Kategori slug'ları kalıcıdır; değiştirilmez.
 */

export interface Kategori {
  /** Kalıcı kategori kimliği (URL'de görünür). */
  slug: string;
  /** Türkçe görünen ad; taslaktaki `##` başlığıyla aynı. */
  ad: string;
  /** Taslaktaki sıra numarası (1-19). */
  sira: number;
  /** Kategori sayfasında başlığın altına yazılan tek cümlelik açıklama. */
  aciklama: string;
  /** Taslaktaki `###` alt başlıkları, taslaktaki sırayla. Düz kategorilerde boş. */
  altBasliklar: readonly string[];
}

export const KATEGORILER: readonly Kategori[] = [
  {
    slug: 'temeller',
    ad: 'Blockchain Temelleri',
    sira: 1,
    aciklama:
      'Zincirin ne olduğu, blokların ve işlemlerin nasıl kurulduğu, ağın kimlerden oluştuğu ve işlem ücretlerinin nasıl hesaplandığı.',
    altBasliklar: [
      'Temel kavramlar',
      'Bloklar ve işlemler',
      'Ağ ve node',
      'Para birimleri ve ücretler',
    ],
  },
  {
    slug: 'kriptografi',
    ad: 'Kriptografi',
    sira: 2,
    aciklama:
      "Blockchain'i ayakta tutan matematik: şifreleme, hash fonksiyonları, dijital imzalar, Merkle ağaçları ve sıfır bilgi ispatları.",
    altBasliklar: [
      'Temeller',
      'Hash fonksiyonları',
      'İmzalar ve eğriler',
      'Veri yapıları',
      'Sıfır bilgi (ZK) ve ileri kriptografi',
    ],
  },
  {
    slug: 'konsensus',
    ad: 'Konsensüs ve Ağ',
    sira: 3,
    aciklama:
      'Birbirini tanımayan binlerce bilgisayarın aynı defter üzerinde nasıl anlaştığı: konsensüs mekanizmaları, madencilik, staking ve kesinlik.',
    altBasliklar: [
      'Mekanizmalar',
      'Madencilik',
      "Staking ve validator'lar",
      'Kesinlik ve güvenlik özellikleri',
      'Ağ katmanı',
    ],
  },
  {
    slug: 'cuzdanlar',
    ad: 'Cüzdanlar ve Hesaplar',
    sira: 4,
    aciklama:
      'Anahtarların nerede durduğu, adreslerin nasıl türetildiği, cüzdan türleri ve hesap soyutlamasıyla gelen yeni imzalama biçimleri.',
    altBasliklar: [
      'Cüzdan türleri',
      'Anahtarlar ve adresler',
      'Hesap soyutlama',
      'Bağlanma ve imzalama',
    ],
  },
  {
    slug: 'akilli-sozlesmeler',
    ad: 'Akıllı Sözleşmeler ve Sanal Makineler',
    sira: 5,
    aciklama:
      'Zincir üstünde çalışan programlar: sanal makineler, dağıtım ve doğrulama, depolama modeli, düşük seviye çağrılar ve yerleşik tasarım kalıpları.',
    altBasliklar: [
      'Temeller',
      'Dağıtım ve arayüz',
      'Bellek ve depolama',
      'Düşük seviye çağrılar',
      'Tasarım kalıpları',
      'Dış dünya ve verimlilik',
    ],
  },
  {
    slug: 'tokenlar',
    ad: "Token'lar ve Tokenomi",
    sira: 6,
    aciklama:
      'Token standartları, token türleri, arz ve dağıtım tasarımı ile lansman biçimleri.',
    altBasliklar: ['Standartlar', 'Token türleri', 'Tokenomi', 'Dağıtım ve lansman'],
  },
  {
    slug: 'defi',
    ad: 'DeFi',
    sira: 7,
    aciklama:
      "Aracısız finans: borsalar ve likidite havuzları, getiri stratejileri, borç verme, stablecoin'ler, türevler ve MEV.",
    altBasliklar: [
      'Temeller',
      'Takas ve likidite',
      'Getiri',
      'Borç verme ve alma',
      "Stablecoin'ler",
      'Türevler',
      'MEV ve işlem akışı',
      'Gerçek dünya varlıkları',
    ],
  },
  {
    slug: 'nft',
    ad: 'NFT ve Dijital Varlıklar',
    sira: 8,
    aciklama:
      'Benzersiz zincir üstü varlıklar: metadata, koleksiyonlar, pazar yerleri, telif ve oyun/metaverse kesişimi.',
    altBasliklar: [],
  },
  {
    slug: 'olceklenme',
    ad: 'Ölçeklenme ve Birlikte Çalışabilirlik',
    sira: 9,
    aciklama:
      "Zincirlerin daha fazla işlem taşıması için geliştirilen yöntemler: rollup'lar, modüler mimari, kanallar ve zincirler arası köprüler.",
    altBasliklar: [
      'Temeller',
      "Rollup'lar",
      'Diğer yaklaşımlar',
      'Köprüler ve zincirler arası',
    ],
  },
  {
    slug: 'guvenlik',
    ad: 'Güvenlik ve Gizlilik',
    sira: 10,
    aciklama:
      'Açıklar, saldırı biçimleri, dolandırıcılık kalıpları, denetim ve test yöntemleri ile zincir üstünde gizlilik.',
    altBasliklar: [
      'Temel kavramlar',
      'Sözleşme açıkları',
      'Ekonomik ve protokol saldırıları',
      'Kullanıcıyı hedef alan dolandırıcılıklar',
      'Güvenlik test yöntemleri',
      'Gizlilik',
    ],
  },
  {
    slug: 'yonetisim',
    ad: 'DAO ve Yönetişim',
    sira: 11,
    aciklama:
      'Protokol kararlarının kim tarafından, hangi oylama ve hazine mekanizmalarıyla alındığı.',
    altBasliklar: [],
  },
  {
    slug: 'aglar',
    ad: 'Önemli Ağlar ve Protokoller',
    sira: 12,
    aciklama:
      'Sık karşılaşılan zincirler ve protokoller. Genel kültür bölümüdür; her ağ tek terim olarak kalır, taraf tutmaz.',
    altBasliklar: [],
  },
  {
    slug: 'programlama',
    ad: 'Programlama',
    sira: 13,
    aciklama:
      'Yazılımın ortak dili: temel kavramlar, paradigmalar, bellek ve çalışma zamanı, algoritmalar ve Solidity, Rust, Move gibi diller.',
    altBasliklar: [
      'Temel kavramlar',
      'Paradigmalar ve tasarım',
      'Çalışma zamanı ve bellek',
      'Algoritmalar',
      'Kod organizasyonu',
      'Diller ve formatlar',
      'Solidity kavramları',
      'Rust kavramları',
      'Move kavramları',
    ],
  },
  {
    slug: 'web',
    ad: 'Web Geliştirme',
    sira: 14,
    aciklama:
      "İnternetin çalışma biçimi, API'ler, frontend ve backend kavramları ile yayına alma.",
    altBasliklar: ['İnternet temelleri', "API'ler", 'Frontend', 'Backend', 'Yayınlama'],
  },
  {
    slug: 'araclar',
    ad: 'Geliştirici Araçları ve Süreçleri',
    sira: 15,
    aciklama:
      "Günlük iş akışı: editörler ve terminal, Git ve GitHub, test ve kalite, CI/CD ve blockchain'e özgü araç zinciri.",
    altBasliklar: [
      'Geliştirme ortamı',
      'Git ve GitHub',
      'Test ve kalite',
      'Derleme ve dağıtım süreci',
      'Blockchain geliştirici araçları',
      'Altyapı ve veri',
    ],
  },
  {
    slug: 'yapay-zeka',
    ad: 'Yapay Zekâ',
    sira: 16,
    aciklama:
      'Makine öğrenmesinin temelleri, büyük dil modelleri, prompt ve ajan kavramları, yapay zekâ güvenliği ve blockchain kesişimi.',
    altBasliklar: [
      'Temeller',
      'Büyük dil modelleri',
      'Güvenlik ve değerlendirme',
      'Prompt ve kullanım',
      'Ajanlar ve araçlar',
      'Yapay zekâ ve blockchain',
    ],
  },
  {
    slug: 'jargon',
    ad: 'Topluluk Kültürü ve Jargon',
    sira: 17,
    aciklama:
      "Kripto Twitter'da ve Discord'da her gün geçen, sözlükte bulamadığın kısaltmalar ve kalıplar.",
    altBasliklar: [],
  },
  {
    slug: 'hackathon',
    ad: 'Hackathon, Ürün ve Girişim',
    sira: 18,
    aciklama: 'Hackathon süreci, ürün geliştirme dili ve girişim/finansman terimleri.',
    altBasliklar: ['Hackathon', 'Ürün geliştirme', 'Girişim ve finansman'],
  },
  {
    slug: 'piyasa',
    ad: 'Piyasa, Borsa ve Regülasyon',
    sira: 19,
    aciklama:
      'Borsaların işleyişi, alım satım terimleri, saklama ve Türkiye dahil düzenleyici çerçeve. Yatırım tavsiyesi içermez.',
    altBasliklar: ['Borsa ve alım satım', 'Fiat ve saklama', 'Regülasyon'],
  },
] as const;

/** Kategori slug'larının dizisi. İçerik şemasındaki enum bundan üretilir. */
export const KATEGORI_SLUGLARI = KATEGORILER.map((k) => k.slug) as [string, ...string[]];

/** Slug -> kategori araması için hazır harita. */
export const KATEGORI_HARITASI: ReadonlyMap<string, Kategori> = new Map(
  KATEGORILER.map((k) => [k.slug, k]),
);

/** Slug'dan kategoriyi döndürür; bilinmeyen slug'da `undefined`. */
export function kategoriBul(slug: string): Kategori | undefined {
  return KATEGORI_HARITASI.get(slug);
}
