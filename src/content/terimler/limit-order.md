---
term: "Limit Order"
tr: "Limit Emri"
aliases: []
category: piyasa
subcategory: "Borsa ve alım satım"
level: baslangic
short: "Bir fiyat sınırı belirtilerek verilen, yalnızca o sınırdan ya da daha iyisinden gerçekleşen emir."
related: [market-order, order-book, maker-and-taker, spread, bid-and-ask]
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

Limit emrinde miktarın yanında bir de fiyat sınırı söylersin: "en fazla şu fiyattan alırım" ya da "en az şu fiyattan satarım". Emir bu sınırdan daha kötü bir fiyattan gerçekleşmez.

Sınırı karşılayan bir karşı emir o anda yoksa emir [[order-book|emir defterinde]] bekler. Kısmen gerçekleşip kalanı beklemeye devam edebilir; hiç gerçekleşmeden, iptal edilene kadar da durabilir.

## Benzetme

Bir arkadaşına "bu ürün şu seviyenin altına inerse benim için al, inmezse hiç alma" demek gibi. Fiyat oraya inerse alışveriş olur; inmezse arkadaşın eli boş döner ve ortada bir aksaklık yoktur — talimat zaten şartlıydı.

## Dikkat

Limit emri fiyatı belirler, gerçekleşmeyi belirlemez. [[market-order|Piyasa emrinin]] kurduğu dengenin tam tersidir: orada sonuç kesin, fiyat belirsizdir; burada fiyat belli, sonuç belirsizdir.

Defterde beklemeye başlayan limit emirleri borsanın sınıflandırmasında [[maker-and-taker|maker]] tarafında sayılır. Ama her limit emri beklemez: karşı tarafta sınırı zaten karşılayan bir emir varsa limit emri de anında gerçekleşir ve taker olur.

Defterin tepesindeki [[bid-and-ask|en iyi alış ve satış]] fiyatlarını oluşturan şey de bu bekleyen emirlerdir; aralarındaki boşluğa [[spread|makas]] denir.
