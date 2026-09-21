---
term: "Fixture"
tr: ""
aliases: ["test fixture", "fixtures"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Bir test çalışmadan önce hazırlanan, bilinen ve her seferinde aynı olan başlangıç verisi."
related: [mock, unit-test, integration-test, software-testing, test-coverage]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Fixture, bir test çalışmadan önce hazırlanan, bilinen ve sabit başlangıç durumudur: örnek bir kullanıcı kaydı, önceden doldurulmuş bir veritabanı tablosu, diskte duran örnek bir JSON dosyası. Test bu bilinen zeminin üstünde çalışır.

Amaç tekrarlanabilirliktir. Aynı test aynı fixture ile her çalıştığında aynı sonucu vermelidir. Veri her seferinde değişiyorsa testin kırmızı yanması sana kod hakkında hiçbir şey söylemez; kodun mu bozuldu, verinin mi değişti, ayırt edemezsin.

Kelimenin yerleşik bir Türkçe karşılığı yok; Türkçe konuşurken de "fixture" deniyor.

## Benzetme

Laboratuvarda deneye başlamadan önce tezgâha dizilen numuneler gibi. Her deney aynı hacimde, aynı derişimdeki çözeltiyle başlar. Sebebi titizlik merakı değil: sonuç farklı çıktığında bunun deneyden mi yoksa malzemenin farkından mı geldiğini bilmek gerekir.

## Nasıl çalışır?

Fixture çoğu zaman üç adımlıdır: kur, kullan, temizle. Test kütüphaneleri bunun için kancalar verir — Vitest ve Jest'te `beforeEach` ile hazırlık, `afterEach` ile temizlik yapılır.

Küçük fixture'lar doğrudan testin içinde bir nesne olarak yazılır. Büyükler ya da birden fazla testin paylaştığı veriler ayrı bir dosyada tutulur ve testler oradan içe aktarır. [[integration-test|Entegrasyon testlerinde]] fixture genelde veritabanına yazılan satırlardır.

Temizlik en çok unutulan adımdır. Bir testin bıraktığı kayıt bir sonrakinin sonucunu değiştiriyorsa testler tek tek geçip topluca kalmaya başlar — üstelik çalışma sırası değiştikçe sonuç da değişir, ki bu hatayı bulmayı iyice zorlaştırır.

## Örnek

Paylaşılan bir fixture dosyası (düz JavaScript):

```js
// test/fixtures/kullanici.js
export const ornekKullanici = {
  id: 1,
  ad: 'Ayşe',
  eposta: 'ayse@ornek.test',
  bakiye: 100,
};
```

Testler bu nesneyi içe aktarıp kullanır; böylece her test aynı kullanıcıyla başlar.

## Dikkat

Fixture hazır **veridir**, [[mock|mock]] ise sahte **davranıştır**. Fixture çağrılmaz, bir şey döndürmez, öylece durur; mock çağrılır ve kendisine ne olduğunu hatırlar. İkisi aynı testte birlikte kullanılabilir ve sık sık kullanılır.

İkinci dikkat noktası: bütün testleri tek bir dev fixture'a bağlamak zamanla yük olur. O veriye dokunan her değişiklik ilgisiz onlarca testi kırar ve testi okuyan kişi "bu testin hangi alana ihtiyacı vardı" sorusunun cevabını göremez. Her testin kendi ihtiyacına yakın, küçük fixture'lar daha kolay yaşar.
