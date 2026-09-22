---
term: "Market Order"
tr: "Piyasa Emri"
aliases: []
category: piyasa
subcategory: "Borsa ve alım satım"
level: baslangic
short: "Fiyat belirtmeden verilen, defterdeki mevcut en iyi karşı emirlerle hemen eşleşen emir."
related: [limit-order, order-book, bid-and-ask, slippage, market-depth]
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

Piyasa emrinde tek bir şey söylersin: ne kadar almak ya da satmak istediğini. Fiyat söylemezsin. Emir [[order-book|emir defterine]] ulaştığı anda karşı taraftaki en iyi fiyattan başlayarak eşleşir ve istenen miktar tamamlanana kadar bir sonraki fiyat seviyesine doğru ilerler.

Sonuçta piyasa emrinin gerçekleşmesi neredeyse kesindir, ama gerçekleştiği ortalama fiyat önceden belli değildir.

## Benzetme

Yağmur aniden bastırdığında ilk gördüğün satıcıdan şemsiye almak gibi. Fiyat listesine bakmaz, iki dükkân daha dolaşmazsın; o an önemli olan şemsiyenin elinde olmasıdır. Ne ödediğini ancak iş bittikten sonra hesaplarsın.

## Dikkat

Emri verirken ekranda gördüğün fiyatla işlemin gerçekleştiği fiyat aynı olmayabilir. Aradaki farka [[slippage|kayma]] denir ve [[market-depth|defter ince]] olduğunda bu fark büyür, çünkü emir tek bir fiyat seviyesinde tükenmez.

Piyasa emri ile [[limit-order|limit emri]] arasında iyi-kötü ayrımı yoktur. Piyasa emri gerçekleşmeyi garanti eder, fiyatı etmez; limit emri fiyatı garanti eder, gerçekleşmeyi etmez. İkisini aynı anda garanti eden bir emir türü yoktur. Büyük bir piyasa emri de defterin tepesindeki [[bid-and-ask|en iyi fiyattan]] tek başına karşılanamaz; birkaç seviyenin ortalamasına düşer.
