# ODTÜ Blockchain Sözlüğü

Blockchain, kriptografi, yazılım ve yapay zekâ terimlerinin Türkçe açıklandığı,
topluluk tarafından büyütülen bir sözlük. Astro ile üretilen statik site.

Projenin kuralları (yazım kılavuzu, terim dosyası şeması, rol dağılımı)
[`CLAUDE.md`](CLAUDE.md) içindedir. Buradaki metin yalnızca çalıştırma
talimatıdır.

## Kurulum

Node 22.12+ gerekir (`.nvmrc` içinde sabit sürüm var).

```
npm install
```

## Komutlar

| Komut              | Ne yapar                                                       |
| ------------------ | -------------------------------------------------------------- |
| `npm run dev`      | Geliştirme sunucusu                                             |
| `npm run build`    | Üretim derlemesi (`dist/`)                                      |
| `npm run seed`     | Taslaktaki eksik terimler için stub oluşturur                   |
| `npm run validate` | Şema, bağlantı ve taslak/dosya uyumu kontrolü                   |
| `npm run stats`    | Kategori × durum ilerleme raporu                                |
| `npm run typecheck`| TypeScript denetimi                                             |

## Terim eklemek

1. Terimi [`docs/terim-taslagi.md`](docs/terim-taslagi.md) içinde ilgili alt
   başlığın altına ekle. **Ana liste odur**; terim ekleme/silme/yeniden
   adlandırma yalnızca oradan yapılır.
2. `npm run seed` — yalnızca eksik dosyalar oluşturulur, var olanlara
   dokunulmaz.
3. `src/content/terimler/<slug>.md` dosyasını CLAUDE.md'deki şemaya göre yaz.
4. `npm run validate` hatasız olmalı.

Slug'lar kalıcıdır. Yayına girmiş bir slug değiştirilmez; değişmesi şartsa eski
slug'dan yönlendirme eklenir.

## Klasör yapısı

```
docs/terim-taslagi.md        ana terim listesi (kaynak gerçek)
src/config.ts                site adı ve yayın ayarları
src/content.config.ts        içerik koleksiyonları + Zod şeması
src/content/terimler/*.md    her terim bir dosya, dosya adı = slug
src/content/yollar/*.md      öğrenme yolları (sıralı slug listeleri)
src/data/kategoriler.ts      19 kategori ve alt başlıkları
src/lib/normalize.ts         Türkçe arama normalizasyonu
src/lib/slug.ts              terim adından kalıcı slug üretimi
src/lib/taslak.ts            taslak ayrıştırıcısı (seed/validate/stats ortak)
src/lib/remark-wiki-link.ts  [[slug]] -> /terim/slug remark eklentisi
src/lib/arama.ts             MiniSearch ayarları (derleme + tarayıcı ortak)
src/pages/                   sayfalar ve search-index.json uç noktası
scripts/seed.ts              taslaktan eksik stub dosyalarını üretir
scripts/validate.ts          tutarlılık kontrolleri
scripts/stats.ts             ilerleme raporu
```

## Yayın

`main` dalına her push'ta GitHub Actions `validate` + `build` çalıştırıp
GitHub Pages'e yayımlar. Depo adı netleştiğinde `src/config.ts` içindeki
`site` ve `base` değerleri güncellenmelidir.
