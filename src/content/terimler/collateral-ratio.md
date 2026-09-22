---
term: "Collateral Ratio"
tr: "Teminat oranı"
aliases: ["teminat oranı"]
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Teminatın değerinin borcun değerine oranı; büyüdükçe pozisyon tasfiyeden uzaklaşır."
related: [loan-to-value-ltv, liquidation-threshold, health-factor, overcollateralization, collateral, collateralized-debt-position-cdp]
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

Teminat oranı, kilitlediğin [[collateral|teminatın]] değerinin borcunun değerine bölünmesiyle bulunur. Pozisyonun ne kadar bol dokunduğunu gösteren tek sayıdır: büyüdükçe rahatsın, 1'e yaklaştıkça teminat borcu ancak karşılıyor demektir.

Bu oran [[collateralized-debt-position-cdp|CDP]] tarzı sistemlerin alışık olduğu dildir; havuz tabanlı protokoller aynı ilişkiyi çoğunlukla ters yönden, [[loan-to-value-ltv|LTV]] olarak yazar.

## Nasıl çalışır?

```
teminat oranı = teminatın değeri / borcun değeri
```

İki değer de [[price-feed|fiyat beslemesinden]] okunur, yani oran sen hiçbir işlem yapmasan da her blokta değişebilir.

Varsayımsal bir örnek: diyelim ki 100 birim değerinde teminat kilitledin ve 50 birim borçlandın. Oranın 2, yani %200. Teminatının fiyatı düşüp değeri 60 birime inerse oran 1,2'ye geriler; sen hiçbir şey yapmadın, borcun da değişmedi.

Protokoller her teminat varlığı için bir asgari teminat oranı belirler. Oran bunun altına inen pozisyon [[liquidation|tasfiyeye]] açılır. Oranı yükseltmenin iki yolu vardır: teminat eklemek ya da borcun bir kısmını kapatmak.

## Dikkat

Dört ölçüyü birbirine karıştırmak çok kolay. Teminat oranı ile LTV aynı ilişkinin iki yönüdür — %200 teminat oranı ile %50 LTV aynı pozisyonu anlatır. [[liquidation-threshold|Tasfiye eşiği]] bunların bir değeri değil, tasfiyenin başladığı sınırdır. [[health-factor|Health factor]] ise pozisyonun o sınıra ne kadar uzak olduğunu tek sayıya indirir.
