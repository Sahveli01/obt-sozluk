---
term: "Slippage"
tr: "Kayma"
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: baslangic
short: "İşlemi gönderdiğin andaki beklenen fiyatla, işlem gerçekten işlendiğindeki fiyat arasındaki fark."
related: [price-impact, swap, sandwich-attack, mempool, dex-aggregator, liquidity-pool]
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

Takası imzalayıp ağa gönderdiğinde fiyat bir yerdedir. İşlemin [[mempool|bekleme havuzunda]] sırasını beklerken başkalarının işlemleri aynı havuzda takas yapar ve fiyatı oynatır. Seninki işlendiğinde fiyat artık başka bir yerdedir. Aradaki farkın adı kaymadır.

Bu yüzden arayüzler bir **tolerans** sorar: "fiyat şu orandan fazla kötüleşirse işlemi hiç yapma." Tolerans aşılırsa işlem geri alınır; ücretini ödersin ama takas olmaz.

## Benzetme

Kalabalık bir balık tezgâhında sıraya girmek gibi. Tezgâha ilk baktığında gördüğün fiyatla sıra sana geldiğinde ödediğin fiyat aynı olmayabilir; arada senden önceki müşteriler alışveriş yaptı, tezgâhta kalan da değişti.

## Dikkat

Kayma ile [[price-impact|fiyat etkisi]] aynı şey değildir. Fiyat etkisi senin işleminin kendi büyüklüğüyle havuzun fiyatını oynatmasıdır; önceden hesaplanabilir ve işlemin doğal sonucudur. Kayma ise gönderme ile işlenme anı arasında, ağın durumu ve başkalarının işlemleri yüzünden oluşur.

Toleransı yüksek ayarlamak işlemin iptal olmasını engeller ama seni [[sandwich-attack|sandviç saldırısına]] açık hâle getirir: izin verdiğin kötü fiyat, birilerinin kasten oraya kadar itebileceği bir sınırdır.
