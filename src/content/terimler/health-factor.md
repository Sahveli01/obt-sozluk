---
term: "Health Factor"
tr: "Sağlık faktörü"
aliases: []
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Pozisyonun tasfiye eşiğine ne kadar uzak olduğunu tek sayıda özetleyen gösterge."
related: [liquidation-threshold, liquidation, loan-to-value-ltv, collateral-ratio, price-feed, bad-debt]
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

Health factor, birden fazla teminat ve birden fazla borcu olan bir pozisyonun tasfiyeye ne kadar yakın olduğunu tek bir sayıyla söyleyen göstergedir. Kullanan protokoller bu sayıyı 1 eşiğine göre ölçekler: 1'in altına inen pozisyon [[liquidation|tasfiyeye]] açılır.

Diğer oranlardan farkı, bir konumu değil bir **mesafeyi** anlatmasıdır. [[loan-to-value-ltv|LTV]] "neredesin" der, health factor "sınıra ne kaldı" der.

## Nasıl çalışır?

Payda toplam borcun değeri durur. Payda ise teminatların ham toplamı değil, her teminatın değerinin kendi [[liquidation-threshold|tasfiye eşiğiyle]] çarpılıp toplanmış hâli vardır:

```
health factor = Σ(teminat değeri × o teminatın tasfiye eşiği) / toplam borç
```

Bu çarpım sayesinde tek bir sayı, birbirinden farklı eşiklere sahip teminatları aynı ölçeğe indirir.

Sayı sürekli hareket eder. Fiyatlar [[price-feed|fiyat beslemesinden]] okunur; besleme güncellendiği anda health factor da güncellenir. İşlem yapmadığın günlerde bile değişir — hatta değişmesi için senin var olman gerekmez.

## Dikkat

Bu sayı bir güvence değil, anlık bir fotoğraftır. Sen uyurken düşebilir ve düştüğünde kimse seni uyandırmaz.

Eşiğin hemen üstünde durmak "sermayeyi verimli kullanmak" değildir; tek bir fiyat hareketine, tek bir besleme güncellemesine açık olmak demektir. Sert bir düşüşte sayı 1'in altına inmekle kalmaz, teminatın borcu karşılayamadığı yere kadar düşebilir; oradan çıkan şey [[bad-debt|kötü borçtur]] ve o noktada pozisyonu kurtarma şansın da kalmamıştır.

Ölçüleri de karıştırma: LTV ile [[collateral-ratio|teminat oranı]] borç ile teminat arasındaki ilişkiyi iki ayrı yönden yazar, tasfiye eşiği o ilişkinin tasfiyeyi başlatan değeridir, health factor ise yalnızca eşiğe kalan mesafeyi ölçer.
