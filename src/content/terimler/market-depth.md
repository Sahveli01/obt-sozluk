---
term: "Market Depth"
tr: "Piyasa Derinliği"
aliases: []
category: piyasa
subcategory: "Borsa ve alım satım"
level: orta
short: "Emir defterindeki fiyat seviyelerinde ne kadar miktar beklediği; defterin kalın mı ince mi olduğu."
related: [order-book, liquidity, slippage, price-impact, bid-and-ask]
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

Derinlik, [[order-book|emir defterinin]] her fiyat seviyesinde ne kadar miktar beklediğini anlatır. Defter "kalın" dendiğinde her seviyede bol miktarda emir vardır; "ince" dendiğinde seviyeler seyrektir ve aralarında boşluklar bulunur.

[[bid-and-ask|En iyi alış ve satış]] fiyatı defterin yalnızca ilk satırını gösterir. Derinlik ise arkada ne olduğunu gösterir: o fiyatın ardında sıranın devamı var mı, yok mu.

## Nasıl çalışır?

Bir alım emri karşı taraftaki en iyi fiyattan başlar ve miktarı tamamlanana kadar seviyeleri yukarı doğru tüketir. Kalın bir defterde büyük bir emir ilk bir iki seviyede biter, fiyat pek kıpırdamaz. İnce bir defterde aynı büyüklükteki emir birçok seviyeyi süpürür ve son parçaları başlangıç noktasından epey uzak bir fiyattan gerçekleşir.

Fiyatın bu şekilde itilmesine [[price-impact|fiyat etkisi]], beklenen fiyatla gerçekleşen ortalama fiyat arasındaki farka ise [[slippage|kayma]] denir. Borsalar derinliği genelde bir grafikle gösterir: iki tarafta fiyat uzaklaştıkça biriken toplam miktar.

## Dikkat

Derinlik anlık bir fotoğraftır. Defterdeki emirler her an iptal edilebilir; hızlı hareket eden bir piyasada kalın görünen bir seviye, emir oraya varmadan boşalmış olabilir.

Derinlik ile [[liquidity|likidite]] birbirine yakın kavramlardır ama aynı şey değildir: derinlik tek bir borsanın defterindeki ölçülebilir görüntüdür, likidite ise varlığın genel olarak ne kadar kolay alınıp satıldığıdır.
