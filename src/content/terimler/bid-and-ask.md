---
term: "Bid and Ask"
tr: "Alış ve Satış"
aliases: []
category: piyasa
subcategory: "Borsa ve alım satım"
level: orta
short: "Emir defterindeki en yüksek alım teklifi ile en düşük satım isteği; piyasanın o anki iki ucu."
related: [order-book, spread, market-order, market-depth, liquidity]
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

Bid, bir varlık için o an verilmiş en yüksek alım teklifidir. Ask ise istenen en düşük satış fiyatıdır. Türkçe finans dilinde "alış" ve "satış" karşılıkları yerleşiktir; ikisi birlikte "alış-satış" diye anılır.

Bir borsada fiyat diye tek bir rakam görünür, ama gerçekte her an iki rakam vardır: hemen satabileceğin fiyat ve hemen alabileceğin fiyat. Ask her zaman bid'den yüksektir; aksi olsaydı iki emir çoktan eşleşmiş olurdu.

## Nasıl çalışır?

Bu iki rakam [[order-book|emir defterinin]] iki tarafının en tepesindeki satırlardır. Bir [[market-order|piyasa emri]] verildiğinde işlem karşı tarafın en iyi fiyatından başlar: alan taraf ask'ten alır, satan taraf bid'e satar.

Rakamlar sürekli değişir, çünkü defterde her an yeni emir eklenir, bazıları gerçekleşir, bazıları iptal edilir. İkisi arasındaki farka [[spread|makas]] denir ve bu fark [[liquidity|likidite]] hakkında fikir verir.

Tepedeki iki fiyatın arkasında ne kadar miktar beklediği ise [[market-depth|derinlik]] meselesidir; bid ve ask yalnızca sıranın en önündeki fiyatı söyler, arkasında ne kadar mal olduğunu söylemez.

## Dikkat

Uygulamalarda büyük puntoyla gösterilen "fiyat" genellikle son gerçekleşen işlemin fiyatıdır; bu rakam bid de olabilir, ask da, ikisinin arasında bir yerde de kalabilir.

Aynı anda ekrana bakan alıcı ile satıcı aslında aynı fiyatla karşılaşmaz: biri ask'e, diğeri bid'e denk gelir. Bir varlığı alıp saniyeler sonra satsan bile aradaki fark kadar geride başlarsın.
