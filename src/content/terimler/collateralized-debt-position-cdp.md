---
term: "Collateralized Debt Position (CDP)"
tr: "Teminatlı borç pozisyonu"
aliases: ["CDP"]
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Teminatı kilitleyip karşılığında yeni stablecoin bastığın, borcu kapatınca o stablecoin'in yakıldığı pozisyon."
related: [crypto-backed-stablecoin, stability-fee, collateral, liquidation, overcollateralization, collateral-ratio]
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

CDP, [[collateral|teminatını]] bir sözleşmeye kilitleyip karşılığında yeni basılmış stablecoin aldığın pozisyondur. Bu modeli yaygınlaştıran, MakerDAO'nun Dai'sidir; [[crypto-backed-stablecoin|kripto teminatlı stablecoin'lerin]] çalışma biçimi budur.

Havuz tabanlı borçlanmadan farkı önemlidir: aldığın stablecoin başka birinin mevduatı değildir. Sen borçlandığın anda yaratılır, borcunu kapattığında yok edilir. Yani karşı tarafta bir borç veren yoktur; karşı taraf, kilitlediğin teminatın kendisidir.

## Nasıl çalışır?

Dört adım:

**Kilitle.** Teminatını pozisyona yatırırsın. Borç limitin, o teminat için belirlenmiş asgari [[collateral-ratio|teminat oranından]] çıkar.

**Bas.** Limitin içinde kaldığın sürece stablecoin basarsın. Bu basım arzı gerçekten artırır.

**Taşı.** Borç açık kaldığı sürece üstüne [[stability-fee|istikrar ücreti]] işler.

**Kapat.** Anapara ve ücreti ödersin, ödediğin stablecoin yakılır, teminatın çözülür.

Teminat oranı asgarinin altına inerse pozisyon [[liquidation|tasfiye]] edilir; teminatın bir kısmı satılıp borç kapatılır.

## Dikkat

Bu stablecoin'in arzını bir merkez belirlemez. Dolaşımdaki miktar, kullanıcıların açtığı bütün pozisyonların toplamıdır: insanlar borçlandıkça arz büyür, kapattıkça küçülür.

Bunun sonucu, riskin de ortak olmasıdır. Senin pozisyonun sağlamken sistemin geri kalanı sağlam olmayabilir. Stablecoin'in arkasındaki güvence senin teminatın değil, herkesin teminatının toplamıdır — ve o toplam toplam borcun altına inerse sorun tek tek pozisyonların değil, paranın kendisinin sorunu olur.
