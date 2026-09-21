# Proje: Blockchain ve Yazılım Sözlüğü

Çalışma adı: **ODTÜ Blockchain Sözlüğü** (değişebilir; ad tek yerde, `src/config.ts` içinde tutulur).

## Amaç
Blockchain topluluğuna yeni katılan kişilerin (çoğu 18–24 yaş üniversite öğrencisi, çoğu telefondan okur) bir terimi saniyeler içinde bulup **gerçekten anlayabildiği**, topluluk tarafından sürekli büyütülen yaşayan bir kütüphane.
Kapsam: blockchain, kriptografi, DeFi, güvenlik, programlama (Rust, Solidity…), web, geliştirici araçları, yapay zekâ (LLM, vibecoding, ajanlar), topluluk jargonu, hackathon ve girişim dili.
Tek bir ekosisteme odaklanmaz; genel ve tarafsızdır.

## Rolüm ve çalışma şeklim
- Proje sahibi (Şahveli) denetleyicidir. Büyük kararlarda ve her aşamanın sonunda durup özet ver, onay bekle.
- Ana terim listesi `docs/terim-taslagi.md` dosyasıdır. Terim eklemek/silmek/yeniden adlandırmak **sadece** bu dosya üzerinden yapılır.
- Slug'lar kalıcıdır. Yayına girmiş bir slug'ı asla değiştirme (dış linkler kırılır). Değişmesi şartsa eski slug'dan yönlendirme ekle.

## Teknoloji
- **Astro** (statik site), TypeScript, içerik koleksiyonları + Zod şeması.
- Arama: **MiniSearch**, derleme sırasında üretilen `search-index.json` üzerinden, tamamen istemci tarafında.
- Stil: tasarım token'ları `src/styles/tokens.css` içinde CSS değişkenleri olarak (/hack-design çıktısı). Token dışında sabit renk/boyut yazma.
- Yayın: GitHub Pages (GitHub Actions ile).
- Script'ler **Node/TypeScript** ile yazılır (`tsx` ile çalışır). Python kullanma: geliştirici Windows'ta çalışıyor ve `python3` orada Microsoft Store kısayoluna düşüyor.
- Komutlar hem Windows (PowerShell) hem macOS/Linux'ta çalışmalı; yol birleştirmede `path` modülünü kullan.

## Klasör yapısı
```
docs/terim-taslagi.md        ana terim listesi (kaynak gerçek)
src/content/terimler/*.md    her terim bir dosya, dosya adı = slug
src/content/yollar/*.md      öğrenme yolları (sıralı slug listeleri)
src/data/kategoriler.ts      kategori ve alt kategori tanımları
src/lib/normalize.ts         Türkçe arama normalizasyonu
scripts/seed.ts              taslaktan eksik stub dosyalarını üretir
scripts/validate.ts          tutarlılık kontrolleri
scripts/stats.ts             kategori ve durum bazında ilerleme raporu
```

## Terim dosyası şeması
```yaml
---
term: "Reentrancy Attack"          # İngilizce kanonik ad (taslaktaki gibi)
tr: "Yeniden Giriş Saldırısı"      # yerleşik karşılık yoksa boş bırak (aşağıdaki ölçüte bak)
aliases: ["reentrancy", "re-entrancy"]
category: guvenlik                 # kategori slug'ı
subcategory: "Sözleşme açıkları"   # taslaktaki alt başlık
level: orta                        # baslangic | orta | ileri
short: "Tek cümlelik tanım, en fazla 160 karakter."
related: [checks-effects-interactions, reentrancy-guard]  # 2–6 slug
disambiguation: []                 # aynı kelimenin diğer anlamlarının slug'ları
tags: []
status: taslak                     # stub | taslak | incelendi
reviewedBy: []                     # sadece insanlar yazar
dateSensitive: false               # zamanla yanlışlanabilecek iddia varsa true
sources: []                        # isteğe bağlı güvenilir URL'ler
added: 2026-09-21
updated: 2026-09-21
---
```
Gövde başlıkları (bu sırayla, bu adlarla):
1. `## Nedir?` — her terimde zorunlu.
2. `## Benzetme` — başlangıç seviyesinde zorunlu, diğerlerinde işe yarıyorsa.
   İstisna: **özel isimlerde** (kişi, ağ, proje, ürün) ve **açıklanacak bir mekanizması
   olmayan kalıp ifadelerde / argoda** (`gm`, `wen`, `DYOR`, `LFG` gibi) başlangıç
   seviyesinde de isteğe bağlıdır. Bir kavram benzetmeyle açılır; bir isim ya da bir
   kalıp açılmaz — zorlarsan benzetme tanımın yeniden ifadesine dönüşür ve yapay durur.
3. `## Nasıl çalışır?` — orta ve ileri seviyede.
4. `## Örnek` — kod veya somut senaryo gerçekten açıklıyorsa.
5. `## Dikkat` — yaygın yanlış anlama, risk veya karıştırılan terim varsa.

## Yazım kuralları
- Dil: sade, samimi ama ciddi Türkçe. Okur, konuyu ilk kez duyan zeki bir öğrenci.
- Teknik terimler sektörde İngilizce kullanılıyorsa İngilizce kalır; ilk geçtiği yerde kısa Türkçe açıklama eklenir.
- Metinde başka bir terim geçiyorsa ilk kullanımında `[[slug]]` şeklinde bağla (ör. `[[gas]]`, `[[smart-contract|akıllı sözleşme]]`). Sadece `docs/terim-taslagi.md` içinde var olan slug'lara bağla.
- Uzunluk: `short` ≤ 160 karakter; gövde başlangıçta 90–200, orta/ileride 150–320 kelime.
  Bu aralıklar Türkçeye göre ayarlıdır: Türkçe sondan eklemeli olduğu için bir kelime
  çoğu zaman iki üç İngilizce kelimenin işini görür. İngilizce metinlerden alınmış
  kelime hedeflerini doğrudan uygulama.
- **Uydurma yok.** Emin olmadığın bilgiyi yazma.
- `dateSensitive: true` **yalnızca zamanla yanlışlanabilecek iddialar için**: güncel
  durum ("şu anda", "henüz", "bilinmiyor"), sıralama ("en büyük", "ilk"), sürüm
  numarası, değişken rakam. Böyle bir iddia varsa "yazıldığı tarih itibarıyla"
  ifadesini de kullan.
  Sabit tarihsel olgular `false` kalır: "1982'de yayımlanan makale" ya da
  "2008'de duyuruldu" bayatlamaz, dolayısıyla uyarı gerektirmez.
- `tr` alanı: TDK'da, resmî bir metinde (TCMB, SPK vb.) ya da Türk teknoloji
  topluluklarında yaygın kullanım varsa yaz. Yoksa boş bırak **ve gövdede neden
  çevrilmediğini bir cümleyle belirt** — okur karşılığı aramasın diye.
  Açıklama zorunluluğu özel isimlerde geçerli değildir (`## Benzetme` ile aynı istisna):
  `Satoshi Nakamoto` ya da `Web3` için "çevrilmiyor" demek gereksizdir.
- Yatırım tavsiyesi, fiyat tahmini, belirli bir projeyi övme/yerme yok.
- **Benchmark puanı ve model sıralaması yazılmaz; hızla eskir.** Bunun yerine ölçütün
  neyi ölçtüğünü, neyi ölçemediğini ve sonucun nasıl okunması gerektiğini anlat.
- Anlam ayrımlı terimlerde (`Fork (Blockchain)` / `Fork (Git)`) her iki dosyanın `disambiguation` alanı birbirini göstersin ve `## Dikkat` bölümünde farkı bir cümleyle belirt.
- Kod örnekleri kısa (≤ 15 satır), çalışır ve dilinin güncel sözdizimiyle yazılır.
- `status: incelendi` değerini **asla** sen koyma. Sen en fazla `taslak` yazarsın; insan inceleyince değiştirir.

## Kalite kontrol listesi (her toplu yazımdan sonra)
- `npm run validate` hatasız.
- Rastgele 3 terimi yüksek sesle okunuyormuş gibi kontrol et: yeni başlayan biri anlar mı?
- Aynı benzetmeyi farklı terimlerde tekrarlama.
- Değiştirilen dosya sayısını ve kategori ilerlemesini (`npm run stats`) özetle.

## Komutlar
```
npm run dev        geliştirme sunucusu
npm run build      üretim derlemesi
npm run seed       taslaktaki eksik terimler için stub oluşturur (var olanlara dokunmaz)
npm run validate   şema, bağlantı ve taslak/dosya uyumu kontrolü
npm run stats      ilerleme raporu
```
