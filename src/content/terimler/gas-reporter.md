---
term: "Gas Reporter"
tr: ""
aliases: ["gas raporu"]
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Testler koşarken her işlevin ne kadar gas harcadığını tablo hâlinde çıkaran araç."
related: [gas, gas-optimization, gas-estimation, forge, unit-test]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Gas reporter, testlerin koşması sırasında her sözleşme işlevinin ne kadar [[gas|gas]] harcadığını ölçüp tablo hâlinde çıkaran araçtır. Türkçede "gas raporu" denir; "gas" kelimesi çevrilmediği için adın tamamı da İngilizce kalmıştır.

Faydası tek bir sayı değil, karşılaştırmadır. Bir işlevin 80 bin gas harcaması tek başına iyi ya da kötü değildir; asıl soru, dün ne harcadığı ve yaptığın değişikliğin bu sayıyı hangi yöne ittiğidir.

## Nasıl çalışır?

Araç testlerin içindeki her çağrıyı izler ve işlev bazında en düşük, en yüksek ve ortalama tüketimi biriktirir; sözleşmenin ağa gönderilme maliyetini de ayrı bir satır olarak gösterir. [[forge|Forge]] bunu kendi içinde bir bayrakla üretir, [[hardhat|Hardhat]] tarafında ise bir eklenti olarak eklenir.

İkinci kullanım biçimi daha değerlidir: ölçülen değerleri bir dosyaya yazıp sürüm kontrolünde tutmak. Sonraki koşumda değerler karşılaştırılır ve fark rapor edilir. Böylece bir kod değişikliğinin maliyeti sessizce artırması, gözden kaçmak yerine değişiklik listesinde görünür hâle gelir.

Bazı araçlar bu tüketimi bir para birimine de çevirir; bu çeviri, dışarıdan alınan bir fiyat ve bir gas fiyatı varsayımı gerektirir.

## Dikkat

Rakamlar testinin senaryosuna bağlıdır. Aynı işlev, depolama alanına o işlem içinde ilk kez mi yoksa ikinci kez mi dokunulduğuna göre farklı tüketir; bir değişkenin sıfırdan farklı bir değere mi yoksa sıfıra mı yazıldığı da sonucu değiştirir. Bu yüzden testteki ölçüm, gerçek kullanımdaki maliyetin tahmini olarak okunmalıdır — kesin değeri olarak değil.

Para birimine çevrilmiş tutarlar yazıldıkları andaki varsayıma aittir; birkaç gün sonra geçersizdir.

[[gas-optimization|Gas iyileştirmesi]] her zaman iyi bir yatırım değildir: okunurluğu bozan ya da güvenliği zorlayan bir kısaltmanın kazandırdığı birkaç bin gas, yol açtığı riski karşılamayabilir.
