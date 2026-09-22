---
term: "Synthetic Asset"
tr: "Sentetik varlık"
aliases: []
category: defi
subcategory: "Türevler"
level: orta
short: "Dayanak varlığı gerçekten elinde tutmadan onun fiyatını izleyen, teminat ve fiyat beslemesiyle ayakta duran token."
related: [oracle, oracle-manipulation, collateral, derivatives, liquidation, crypto-backed-stablecoin]
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

Sentetik varlık, başka bir şeyin fiyatını izleyen bir token'dır. Altının, bir hissenin ya da bir döviz kurunun fiyatını izleyebilir. İzlediği şeye sahip değildir: kasada altın, aracı kurumda hisse yoktur. Ortada olan, "bu token'ın değeri şu fiyata eşittir" diyen bir sözleşme ve o sözü destekleyen teminattır.

Amacı erişimdir. Zincir üstünde bir varlığın kendisini taşımak çoğu zaman mümkün değildir; fiyatını taşımak mümkündür.

## Nasıl çalışır?

Mekanizma teminatlı basıma dayanır. Bir kullanıcı protokole teminat kilitler ([[collateral]]) ve karşılığında sentetik token basar. Teminat, izlenen fiyattaki hareketleri karşılayabilmek için borcun üstünde tutulur.

Token'ın kaç para ettiğini protokol kendisi bilemez; dışarıdan bir fiyat beslemesi okur ([[oracle]]). Teminatın değeri borcu karşılayamayacak seviyeye inerse pozisyon tasfiye edilir ([[liquidation]]) — aynı düzen [[crypto-backed-stablecoin|kripto teminatlı stablecoin'lerde]] de kullanılır. Token'ı geri yakan kullanıcı teminatını geri alır.

## Dikkat

Elindeki şey varlığın kendisi değil, bir sözleşmenin ona dair sözüdür. Bunun üç somut sonucu var.

Birincisi: fiyatı sana bir veri kaynağı söyler. O kaynak yanlış ya da geç bir fiyat verirse protokol yanlış fiyattan basım, işlem ve tasfiye yapar. Beslemenin kasten bozulması ayrı bir saldırı türüdür ([[oracle-manipulation]]).

İkincisi: söz teminatla ayakta durur. Fiyat çok hızlı hareket eder ve tasfiyeler yetişemezse teminat borcun altına düşer; bu durumda token izlediği fiyatı tutamaz.

Üçüncüsü: dayanak varlığın getirdiği haklar sende değildir. Bir hisseyi izleyen sentetik token sana temettü, oy hakkı ya da o hisse üzerinde hukuki bir alacak vermez.
