# Katkı rehberi

Bu sözlük topluluk tarafından büyütülüyor. Katkı için yazılım geliştirici olman
gerekmiyor: bir yazım hatası bildirmek de, eksik bir terim önermek de, bir tanımı
baştan yazmak da aynı ölçüde değerli.

Bu dosya **ne yapacağını** anlatır. **Nasıl yazılacağının** kuralları
[`CLAUDE.md`](CLAUDE.md) içindedir; bir terim yazmadan önce oradaki "Yazım
kuralları" bölümünü okumanı rica ediyoruz.

---

## Hızlı yol: hiç kurulum yapmadan katkı

### 1. Bir şey bildirmek istiyorum (en kolay)

GitHub'daki **Issues** sekmesine git, **New issue**'ya bas ve iki şablondan
birini seç:

- **Terim öner** — sözlükte olmayan bir terim için.
- **Hata bildir** — yanlış bilgi, bozuk bağlantı, yazım hatası, anlaşılmayan
  bir tanım için.

Formu doldurup gönder. Git bilmene gerek yok.

### 2. Bir metni kendim düzeltmek istiyorum (GitHub web arayüzünden)

Bilgisayarına hiçbir şey kurmadan, tarayıcıdan düzenleyebilirsin:

1. Sözlükte düzeltmek istediğin terimin sayfasını aç ve slug'ını not et
   (adresin sonundaki kısım — örneğin `.../terim/gas` için `gas`).
2. Bu depoda `src/content/terimler/` klasörüne gir ve `gas.md` dosyasını aç.
3. Dosyanın sağ üstündeki **kalem simgesine** (Edit this file) tıkla.
   - GitHub hesabın yoksa önce ücretsiz bir hesap açman gerekir.
   - İlk kez düzenliyorsan GitHub senin için deponun bir kopyasını (fork)
     otomatik oluşturur; "Fork this repository" çıkarsa onayla.
4. Metni düzelt. Markdown yazıyorsun; başlıkları ve `---` ile başlayan üstteki
   bloğu (frontmatter) bozmamaya dikkat et.
5. Sayfanın altındaki **Commit changes** kutusuna ne değiştirdiğini bir cümleyle
   yaz (örneğin `gas: yazım hatası düzeltildi`).
6. **Create a new branch for this commit and start a pull request** seçeneğini
   işaretle ve **Propose changes**'e bas.
7. Açılan sayfada **Create pull request**'e bas. Şablon karşına çıkacak;
   kutuları işaretleyip gönder.

Hepsi bu. Otomatik kontroller (aşağıda) çalışacak ve bir insan incelemesi
yapacak.

> **Not:** Yeni bir terim **eklemek** istiyorsan doğrudan dosya oluşturma; önce
> "Terim öner" issue'su aç. Sebebi aşağıda.

---

## Terim eklemek: neden önce taslak dosyası?

Sözlüğün terim listesinin tek kaynağı
[`docs/terim-taslagi.md`](docs/terim-taslagi.md) dosyasıdır. Bir terim önce
orada yer alır, sonra dosyası üretilir. `npm run validate` bu iki tarafın
uyuşmasını denetler; taslakta olmayan bir dosya ya da dosyası olmayan bir taslak
satırı hata verir.

Bu yüzden akış şöyle:

1. **Terim öner** issue'su aç: terimin İngilizce kanonik adı, hangi kategoriye
   ait olduğu ve neden gerektiği.
2. Kabul edilirse terim `docs/terim-taslagi.md` içindeki ilgili kategori ve alt
   başlığın altına eklenir.
3. `npm run seed` o terim için boş bir stub dosyası üretir.
4. Stub'ı sen ya da başka biri doldurur.

Kendi PR'ında hem taslağa satır ekleyip hem stub'ı doldurmak da olur — o zaman
`npm run validate` çıktısını PR açıklamasına ekle.

---

## Slug'lar kalıcıdır

Yayına girmiş bir terimin dosya adı (slug) **asla değiştirilmez**. Dışarıdan
verilen bağlantılar kırılır. Bir adın yanlış olduğunu düşünüyorsan issue aç;
gerekirse eski slug'dan yönlendirme eklenir.

---

## Bir terim yazarken

Tam kurallar [`CLAUDE.md`](CLAUDE.md) içinde. Özet:

- **Uydurma yok.** Emin olmadığın bilgiyi yazma; yazmamak yanlış yazmaktan iyidir.
- **Yatırım tavsiyesi, fiyat tahmini, proje övme/yerme yok.** Piyasa ve
  regülasyon terimlerinde bu kural özellikle katıdır: yöntemi anlat, ne
  yapılacağını söyleme.
- **Hukuki tavsiye yok.** Düzenleme terimlerinde çerçeveyi anlat, kesin hüküm
  kurma, resmî kaynağa yönlendir.
- **Dil:** sade, samimi ama ciddi Türkçe. Okur, konuyu ilk kez duyan zeki bir
  üniversite öğrencisi.
- **Uzunluk:** `short` en fazla 160 karakter; gövde başlangıç seviyesinde
  90–200, orta/ileri seviyede 150–320 kelime.
- **Bağlantı:** metinde geçen başka bir terimi ilk geçtiği yerde `[[slug]]`
  şeklinde bağla. Aynı slug'a bir dosyada iki kez bağlanma.
- **Benzetme:** başlangıç seviyesinde zorunlu (özel isimler ve kalıp ifadeler
  hariç). **Sözlükte kullanılmış bir imgeyi tekrar etme** — aynı kategoride
  hiç, farklı kategoride ancak mekanizma gerçekten farklıysa.
- **`tr` alanı:** yerleşik bir Türkçe karşılık yoksa boş bırak ve gövdede neden
  çevrilmediğini bir cümleyle söyle. Karşılık uydurma.
- **`dateSensitive: true`** yalnızca zamanla yanlışlanabilecek iddialar için
  (güncel durum, sıralama, sürüm numarası, değişken rakam). O zaman metinde
  "yazıldığı tarih itibarıyla" ifadesini de kullan.
- **`status` alanına `incelendi` yazma.** En fazla `taslak` yazarsın; aşağıya bak.

---

## İnceleme akışı: `status` ve `reviewedBy`

Her terim dosyasının frontmatter'ında iki alan bu işi yürütür:

| `status`     | Anlamı                                                                 |
| ------------ | ---------------------------------------------------------------------- |
| `stub`       | Dosya var, içi boş. `npm run seed` böyle üretir.                        |
| `taslak`     | Yazılmış ama henüz bir insan tarafından incelenmemiş.                   |
| `incelendi`  | Konuyu bilen bir insan okudu, doğruluğunu ve tonunu onayladı.           |

Kurallar:

- Bir terimi **yazan** kişi `status: taslak` bırakır. Kendi yazdığın metni
  `incelendi` yapamazsın.
- `incelendi` değerini yalnızca **inceleyen kişi** koyar ve aynı commit'te
  `reviewedBy` listesine kendi GitHub kullanıcı adını ekler:

```yaml
status: incelendi
reviewedBy: ["kullanici-adi"]
```

- `reviewedBy` alanını script'ler doldurmaz; yalnızca insanlar yazar.
- İncelendi olan bir terim sonradan esaslı biçimde değişirse `status` tekrar
  `taslak`a düşer ve yeniden incelenir. Yazım hatası düzeltmesi bunu gerektirmez.
- Bir incelemede bakılanlar: bilgi doğru mu, uydurma var mı, ton kurallara uygun
  mu, benzetme başka bir terimle çakışıyor mu, `dateSensitive` doğru
  işaretlenmiş mi, bağlantılar anlamlı mı.

`npm run stats` hangi kategoride kaç terimin hangi durumda olduğunu gösterir.

---

## Geliştirici kurulumu

Node 22.12+ gerekir (`.nvmrc` içinde sabit sürüm var).

```bash
npm install
npm run dev        # geliştirme sunucusu
```

Göndermeden önce:

```bash
npm run validate   # şema, bağlantı ve taslak/dosya uyumu
npm run build      # üretim derlemesi
```

Diğer komutlar için [`README.md`](README.md).

### Yeni stub üretmek

```bash
npm run seed       # taslaktaki eksik terimler için stub açar, var olanlara dokunmaz
```

---

## Otomatik kontroller

Her pull request'te GitHub Actions şunları çalıştırır:

1. `npm ci` — bağımlılıkları kilit dosyasından kurar.
2. `npm run validate` — şema, bağlantı hedefleri, taslak/dosya uyumu, alias
   çakışması, anlam ayrımının çift yönlülüğü.
3. `npm run contrast` — tasarım token'larının kontrast tabanını delmediğini
   denetler.
4. `npm run build` — sitenin gerçekten derlendiğini doğrular.

Dördü de geçmeden birleştirme yapılmaz. Kırmızı bir kontrol gördüğünde panikleme;
çıktıdaki hata satırı hangi dosyada ne olduğunu açıkça söyler.

---

## Pull request açarken

- Bir PR tek bir işe odaklansın. "Üç terim yazdım" iyi; "üç terim yazdım, bir de
  tasarımı değiştirdim" kötü.
- Başlığı kısa ve açıklayıcı yaz: `gas: örnek eklendi`, `feat: DAO kategorisine
  quorum terimi`.
- PR şablonundaki kutuları doldur.
- Bir issue'yu kapatıyorsa açıklamaya `Closes #123` yaz.

---

## Davranış

Sorular aptalca değildir. Bu sözlük tam olarak "herkesin bildiği varsayılan"
şeyleri açıklamak için var. Katkı verenlere ve soru soranlara buna göre davran.
