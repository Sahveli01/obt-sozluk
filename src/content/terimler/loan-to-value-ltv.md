---
term: "Loan-to-Value (LTV)"
tr: "Kredi/değer oranı"
aliases: ["LTV"]
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Borcun teminat değerine oranı; borç alırken aşamayacağın tavanı ve pozisyonun o anki durumunu aynı sayıyla anlatır."
related: [collateral-ratio, liquidation-threshold, health-factor, collateral, borrowing-defi, overcollateralization]
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

LTV, borcun değerinin [[collateral|teminatın]] değerine bölünmesiyle bulunan yüzdedir. Havuz tabanlı protokollerin varsayılan dilidir; aynı ilişkiye ters yönden bakan ölçü [[collateral-ratio|teminat oranıdır]].

Terim iki ayrı yerde kullanılır ve bu ikisi karıştırılır. Biri **senin o anki LTV'ndir**: pozisyonunun bugünkü hâli. Diğeri **azami LTV'dir**: protokolün borç alırken aşmana izin vermediği tavan.

## Nasıl çalışır?

```
LTV = borcun değeri / teminatın değeri
```

Azami LTV her teminat varlığı için ayrı belirlenir ve varlığın oynaklığına bakar: fiyatı sert hareket eden bir varlıkta tavan daha aşağıdadır. Birden fazla teminat kilitlediysen tavan, her varlığın kendi tavanının değerine göre ağırlıklı ortalamasıdır.

Bu tavan yalnızca borç alırken kontrol edilir. İşlem geçtikten sonra fiyatlar oynadıkça LTV'n tavanın üstüne de çıkabilir — bu tek başına tasfiye sebebi değildir; sadece yeni borç alamaz, teminat çekemez hâle gelirsin.

Yükselen LTV'yi düşürmenin yolu borcu azaltmak ya da teminat eklemektir.

## Dikkat

Azami LTV ile [[liquidation-threshold|tasfiye eşiği]] aynı sayı değildir. Eşik her zaman tavanın üstündedir ve aradaki boşluk kasıtlıdır: borç aldığın anda tasfiyenin kıyısında olmayasın, fiyat dalgalanmasına bir pay kalsın diye.

Tasfiye eşiğine ne kadar yaklaştığını LTV'den çıkarmak zahmetlidir, çünkü her teminatın kendi eşiği vardır; [[health-factor|health factor]] tam olarak bu hesabı tek sayıya indirmek için vardır.
