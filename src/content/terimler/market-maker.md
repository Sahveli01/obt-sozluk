---
term: "Market Maker"
tr: "Piyasa Yapıcı"
aliases: []
category: piyasa
subcategory: "Borsa ve alım satım"
level: orta
short: "Bir varlıkta hem alış hem satış tarafına sürekli fiyat vererek karşı taraf olmayı üstlenen kişi ya da kurum."
related: [spread, liquidity, order-book, automated-market-maker-amm, maker-and-taker, volatility]
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

Piyasa yapıcı, bir varlıkta aynı anda hem alış hem satış emri bulunduran taraftır. Böylece o varlığı almak ya da satmak isteyen biri karşısında her an bir fiyat bulur. Bir kurum olabilir, bir yazılım olabilir; önemli olan iki tarafa da sürekli fiyat vermesidir.

Türkçede "piyasa yapıcı" karşılığı borsa mevzuatında yerleşiktir.

## Nasıl çalışır?

[[order-book|Deftere]] iki taraflı emir koyar: alış fiyatı satış fiyatından biraz düşüktür, aradaki boşluk [[spread|makastır]]. Aldığını biraz daha yüksekten satabildiği ölçüde bu farktan gelir elde eder.

Buna karşılık bir risk üstlenir. Fiyat hızla tek yöne giderse yalnızca bir tarafı doldurulur ve elinde istemediği bir pozisyon kalır. Bu yüzden [[volatility|volatilite]] arttığında piyasa yapıcılar fiyatlarını uzaklaştırır ya da emirlerini geri çeker.

Bazı borsalar bu rolü üstlenen kurumlarla resmi anlaşma yapar, bazılarında rol kendiliğinden doldurulur. DeFi tarafında ise aynı işlevi bir taraf değil bir formül görür: [[automated-market-maker-amm|otomatik piyasa yapıcı]] fiyatı havuzdaki miktarlardan hesaplar.

## Dikkat

Piyasa yapıcının varlığı fiyatın "tutulacağı" anlamına gelmez. Kimse sürekli fiyat vermek zorunda değildir; emirlerin çekildiği anlarda defter incelir, makas genişler ve işlem yapmak zorlaşır.

"Piyasa yapıcı" ile [[maker-and-taker|maker]] terimleri de karıştırılır: maker tek bir emrin ücretlendirme sınıfıdır, piyasa yapıcı ise süreklilik gerektiren bir roldür.
