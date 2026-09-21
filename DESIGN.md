# Tasarım yönü — ODTÜ Blockchain Sözlüğü

Bu dosya **yalnızca tasarımı** sahiplenir: palet, tipografi, boşluk, yoğunluk,
okuma koşulları ve durum matrisi.

Ürün kimliği — kim için, hangi kapsam, hangi ton, hangi yazım kuralları —
[`CLAUDE.md`](CLAUDE.md) dosyasınındır ve burada tekrarlanmaz. İki dosya aynı
şeyi söylerse bir gün içinde birbirinden ayrışır; çakışan her konuda CLAUDE.md
kazanır.

`PRODUCT.md` bilinçli olarak yok: Impeccable kurulu ama `/impeccable init`
çalıştırılmadı, çünkü CLAUDE.md zaten o rolü oynuyor ve depoda duruyor.

---

## Kararlar

| Eksen         | Karar                                                          | Gerekçe                                                                                                                               |
| ------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Palet**     | Tek vurgu: koyu indigo (OKLCH hue 275). Nötrler aynı hue'ya boyalı. | Vurgu tek bir iş yapar: "buraya gidebilirsin". Kuruma bağlı değil — çalışma adı değişebilir ve proje tarafsız kalmak zorunda.            |
| **Tipografi** | IBM Plex Sans (arayüz) + Source Serif 4 (terim gövdesi) + IBM Plex Mono (kod). | Serif gövde "başvuru eseri" der ve 200–400 kelimelik Türkçe açıklamayı telefonda rahat okutur. Inter/Roboto/Open Sans bilerek elenmiştir. |
| **Boşluk**    | Tek birim 4px, dokuz basamaklı ölçek.                           | "Yamuk duran" düzenlerin çoğu tutarsız dolgudur, kötü renk değil.                                                                       |
| **Yoğunluk**  | **Okuma önce.** Terim sayfası ferah (66ch, 1.65 satır aralığı); kategori ve arama listeleri yoğun. | Sözlükte iki farklı iş var: bir tanımı okumak ve 176 terimlik bir listeyi taramak. Aynı yoğunluk ikisine birden hizmet etmez.            |

**Vurgu rengi nerede kullanılmaz:** bölüm süslemesinde, başlık arkasında,
gradient'te, kart zemininde. Sayfada tek bir dolu vurgu bloğu vardır (ana
sayfadaki arama girişi) çünkü sözlüğün birincil eylemi odur.

---

## Okuma koşulları

Bu bir hackathon demosu değil; yayına çıkacak bir başvuru sitesi. Skill'in
"projeksiyon" kısıtı burada iki gerçek koşula çevrildi ve ikisi de aynı yöne
itiyor:

1. **Birincil: telefon, tek elle, aydınlık ortamda.** Kitle 18–24 yaş
   öğrenciler; çoğu dersin ortasında, koridorda ya da otobüste bakacak.
2. **İkincil: projeksiyon.** Bu bir kulüp sözlüğü — er ya da geç bir
   atölyede duvara yansıtılacak.

Bunlardan çıkan kararlar:

- **Kontrast tabanı:** metin 4.5:1, anlam taşıyan çizgi ve kenarlık 3:1.
  `npm run contrast` bunu her iki temada mekanik olarak denetler ve
  tabanın altına düşen bir token varsa çıkış kodu 1 verir.
- **Minimum okunabilir boyut:** `--text-small` (≈16px). Bunun altındaki tek
  basamak `--text-micro` ve **bilgi taşımaz**.
- **Bilerek yalnızca iki metin tonu var.** Üçüncü, daha soluk bir ton
  tanımlamak kontrast tabanını delmenin en kolay yolu olurdu; bu yüzden
  token dosyasında öyle bir değer yok.
- **Renk tek başına anlam taşımaz.** Her rozetin yazılı etiketi, her
  uyarı/hata kutusunun ayrıca bir kenar şeridi var. Projeksiyon hue'ları
  kaydırır, satürasyonu ezer.
- **Taban düzen telefon içindir** ve 1024px'lik bir projeksiyonda da aynen
  sığar (`--layout-max: 68rem`). Tek kırılma noktası 48rem.
- **Yazı tipleri kendi sunucumuzdan**, CDN yok; `font-display: swap` ve
  Türkçeyi doğru gösteren yedek zincirler var. Salon wifi'si çökerse metin
  yine okunur.
- **Açık tema birincildir** — aydınlık odada ayakta kalan odur. Koyu tema
  gece telefonda okuyanlar için ve aynı kontrast tabanına uyar.

### latin-ext zorunludur

`ğ ş ı İ` karakterleri `latin` alt kümesinde **değil**, `latin-ext` içinde
(U+011E, U+015E, U+0131, U+0130). Yalnızca `latin` yüklenen bir font sitede
kendi dilinde bozuk glifler gösterir. `src/styles/fonts.css` her iki alt kümeyi
de açıkça bildirir; fontsource'un hazır giriş noktaları kullanılmadı çünkü
onlar kiril, yunan ve vietnamca alt kümelerini de derlemeye sokuyordu
(14 dosya yerine 6).

---

## Token dosyası

- **`src/styles/tokens.css`** — bütün değerler. Renk, tip ölçeği, boşluk,
  yarıçap, hareket, odak, dokunma hedefi, düzen ölçüleri.
- **`src/styles/fonts.css`** — `@font-face` bildirimleri.
- **`src/styles/global.css`** — element temelleri ve paylaşılan bileşenler;
  yalnızca token'lardan okur. `import '../styles/global.css'` ile
  `src/layouts/Temel.astro` üzerinden tüm sayfalara girer.

**Kural: token dosyasında olmayan hiçbir renk, boyut, süre ya da yazı tipi
değeri bileşenlerde yazılmaz. Sabit değer gören her yer hatadır.**

Bilinçli istisnalar, hepsi tokens.css sonunda listeli:

- 1px hairline çizgiler (dekoratif ayrım)
- `em` cinsinden optik düzeltmeler (alt çizgi mesafesi, satır içi kod dolgusu)
- `100dvh`
- `@media` kırılma noktası 48rem — medya sorgusu CSS değişkeni kabul etmez
- **Shiki sözdizimi renkleri.** Kod vurgulaması veri güdümlü bir palettir ve
  token'a indirgenemez. Çift tema kullanılır (`github-light` / `github-dark`);
  kod bloğunun *zemini* token'dan gelir, yalnızca sözdizimi renkleri temadan.

---

## Durum matrisi

Skill'in Web3 durum matrisi **bu projede tamamen geçersizdir**: cüzdan yok,
işlem yok, zincir yok, adres yok, imza yok. Olmayan yetenekler için durum
tasarlamak `/hack-audit`'in aradığı sahte arayüzün ta kendisi olurdu.

Yerine bu projenin gerçek durumları:

| Durum                       | Karar verilen işlem                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Terim yazılmadı (stub)**  | **Hata değil.** Nötr kutu, kırmızı yok, uyarı yok. "Bu terim henüz yazılmadı" der ve okuru kategoriye yönlendirir. |
| Terim taslak                | Vurgu tonunda rozet + yazılı "Taslak" etiketi.                                                           |
| Terim incelendi             | Başarı tonunda rozet + yazılı "İncelendi" etiketi.                                                       |
| **Kategoride hiç yazılı terim yok** | Listenin üstünde açıklayıcı kutu. Bugün okurun ilk gördüğü ekran bu; gerçek iş ister.             |
| Tarihe duyarlı içerik       | Uyarı tonunda kutu + kenar şeridi, güncelleme tarihi açıkça yazılı.                                      |
| Arama: indeks yükleniyor    | `role="status"` ile canlı duyurulan metin; boş alan bırakılmaz.                                          |
| Arama: sonuç yok            | Çıkmaz sokak değil — "İngilizcesini ya da kısaltmasını dene" der.                                        |
| **Arama: indeks yüklenemedi** | Ağ sorunu olduğu söylenir, okur suçlanmaz, yenileme önerilir. Hata tonunda kutu + kenar şeridi.       |
| JavaScript kapalı           | `<noscript>` 19 kategorinin tamamını bağlantı olarak listeler.                                           |
| Anlam ayrımı                | İki kardeş terim karşılıklı, kendi bölümünde, tek cümlelik tanımlarıyla listelenir.                      |
| Uzun Türkçe terim           | Başlıklarda `overflow-wrap: break-word`, listede `anywhere`. En uzun terim 37 karakter.                  |

**Taşınan tek kural:** "reddedilen işlem hata değildir" ilkesinin buradaki
karşılığı, **yazılmamış terim hata değildir**. Bugün 1338 terimin 1338'i
yazılmamış; bu durum okurun göreceği ilk şey ve dürüstçe anlatılmayı hak
ediyor. Kırmızı bir rozet sözlüğü bozuk gösterirdi.

**Rozet yerine bilgi:** kategori ve arama listelerinde yazılmamış terimler
rozetle işaretlenmez. Tek cümlelik tanımın *varlığı* zaten sinyaldir — tanım
yazılmışsa satırda görünür, yazılmamışsa satır yalnızca addan ibarettir. 1338
satırın tamamına "yazılmadı" rozeti takmak gürültüden başka bir şey olmazdı.

---

## İnşa edilen yüzeyler

Okur yolu baştan sona: **ana sayfa → arama → terim → kategori**. Dördü de
bitmiş standartta ve yukarıdaki durumlarıyla birlikte.

| Sayfa                       | Yoğunluk | Öne çıkan durum                            |
| --------------------------- | -------- | ------------------------------------------- |
| `src/pages/index.astro`     | Tarama   | Gerçek sayılarla ilerleme, birincil arama girişi |
| `src/pages/ara.astro`       | Tarama   | Yükleniyor / sonuç yok / indeks çöktü / JS kapalı |
| `src/pages/terim/[slug].astro` | **Okuma** | Stub, taslak, incelendi, tarihe duyarlı, anlam ayrımı |
| `src/pages/kategori/[slug].astro` | Tarama | Kategori hiç yazılmamış                     |

Gerçek veriyle kuruldu: 1338 terim, gerçek kategori sayıları, en uzun Türkçe
terimler dahil. Yer tutucu içerik kullanılmadı.

---

## Kapsanmayanlar

- **Öğrenme yolları** (`src/content/yollar/`). Koleksiyon ve şema hazır ama
  hiç yol yazılmadı, dolayısıyla tasarlanacak bir yüzey de yok. İlk yol
  yazıldığında bu token'ları devralır.
- **Terim gövdesi tipografisinin ince ayarı.** `.okuma` sınıfı başlık, liste,
  kod, tablo ve alıntı için kurallar içeriyor; ama bugün hiçbir terimin
  gövdesi yazılmadığı için gerçek metinle sınanmadı. İlk toplu yazımdan sonra
  gözden geçirilmeli.
- **Görsel doğrulama.** Chrome eklentisi bu oturumda kurulu olmadığı için
  sayfalara tarayıcıda bakılamadı. Aşağıdaki "Sıradaki kontroller"e bak.
- **Logo, favicon, sosyal medya görseli.** Ad kesinleşmeden yapılmamalı.
- **Kategori sayfalarında filtreleme/sıralama.** 176 terimlik listede işe
  yarar ama okur yolunun parçası değil; kendi adımında gelir.

---

## Sıradaki kontroller

Bunlar tarayıcı gerektirir ve henüz yapılmadı:

1. `npm run dev`, ardından terim ve kategori sayfasına **360px genişlikte**
   bak. Uzun terim adları (`Kripto Varlık Hizmet Sağlayıcı (KVHS)`,
   `Agent Instructions File (CLAUDE.md, AGENTS.md)`) taşıyor mu?
2. Aynı sayfalara **1024px** genişlikte bak — en dar makul projeksiyon.
3. İşletim sistemini koyu temaya al, kontrastı gözle doğrula.
4. Ağı "Slow 3G"ye al; yazı tipleri yüklenmeden önce metin okunabiliyor mu?
5. Sekme tuşuyla gez: odak halkası her yerde görünür mü?

Bulgular buraya not edilir ve düzeltme token'da yapılır, tek seferlik
geçersiz kılmayla değil.
