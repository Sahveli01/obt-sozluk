---
term: "Circuit Breaker"
tr: "Devre kesici"
aliases: ["devre kesici"]
category: defi
subcategory: "MEV ve işlem akışı"
level: orta
short: "Belirlenen bir eşik aşıldığında insan kararı beklemeden kendiliğinden devreye girip işlemleri durduran koruma."
related: [pausable, price-feed, liquidation, bad-debt, volatility]
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

Circuit breaker, protokolün içine gömülmüş **otomatik** durdurmadır. Sözleşme bir ölçüyü izler — fiyatın kısa sürede ne kadar oynadığı, bir zaman aralığında ne kadar varlığın çekildiği, bir fiyat kaynağının beklenenden ne kadar saptığı gibi — ve ölçü belirlenen eşiği aşarsa ilgili işlemler kendiliğinden durur.

[[pausable|Duraklatma]] kalıbından farkı kararı kimin verdiğidir: orada yetkili bir adres anahtarı çevirir, burada eşiğin aşılması yeterlidir. Adı elektrik panosundaki devre kesiciden gelir; borsalarda da aynı adla ve aynı mantıkla kullanılır.

## Nasıl çalışır?

Tasarım üç karardan oluşur. Birincisi **ne izleniyor**: fiyat sapması, çıkış hacmi, teminat oranındaki ani değişim. İkincisi **eşik**: hangi değeri aşınca normal dışı sayılacağı. Üçüncüsü **ne yapılacağı**: bazı tasarımlar her şeyi durdurur, bazıları yalnızca riskli yolu kapatır ve çekme yolunu açık bırakır.

Dönüş kuralı da tasarımın parçasıdır: kimi devre kesici belli bir süre sonra kendiliğinden açılır, kimi açılmak için insan onayı bekler.

Otomatik olmasının sebebi hız farkıdır. Bir saldırı ya da ani çöküş dakikalar içinde biter; ekibin fark etmesi, toplanması ve bir [[multisig|çoklu imza]] işlemini imzalaması bundan uzun sürer.

## Örnek

Bir borç verme protokolü, kullandığı [[price-feed|fiyat kaynağı]] tek bir blokta beklenenin çok ötesinde saparsa yeni borçlanmayı durdurabilir. Böyle bir sapma ya gerçek bir çöküştür ya da bir [[oracle-manipulation|oracle manipülasyonu]]; ikisinde de en güvenli davranış aynıdır: bu fiyat üzerinden yeni pozisyon açtırmamak.

## Dikkat

Yanlış tetiklenen bir durdurma, kullanıcıyı tam ihtiyaç duyduğu anda dışarıda bırakır. Sert ama gerçek bir fiyat hareketi de eşiği aşar; devre kesici devreye girdiğinde teminat ekleyemeyen kullanıcı pozisyonunu koruyamaz, durdurma kalktığında ise daha kötü bir fiyatla karşılaşır. Eşiği dar tutmak yanlış alarmları, geniş tutmak korumayı azaltır; bedava bir ayar yoktur.

İkincisi, durdurma riski ortadan kaldırmaz, yerini değiştirir. [[liquidation|Tasfiyeler]] durdurulduğu sırada fiyat düşmeye devam ederse, kapatılamayan pozisyonların açığı protokole [[bad-debt|kötü borç]] olarak kalır.
