---
term: "Swap"
tr: "Takas"
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: baslangic
short: "Bir token'ı tek bir işlemin içinde doğrudan başka bir token'la değiştirme."
related: [decentralized-exchange-dex, liquidity-pool, slippage, trading-pair, dex-aggregator, approve]
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

Swap, elindeki token'ı başka bir token'la değiştirmektir. Zincirde bu iş tek bir [[transaction|işlemin]] içinde olur: gönderdiğin token çıkar, aldığın token gelir, ikisi aynı işleme bağlıdır.

Bu yüzden takasta "karşı taraf parayı alıp kaçar mı" diye bir soru yoktur. İşlem başarısız olursa ikisi de olmaz. Çoğu zaman karşı tarafta bir insan da yoktur; bir [[liquidity-pool|likidite havuzu]] vardır.

## Benzetme

Maç sonunda iki futbolcunun forma değiştirmesi gibi. İkisi de aynı anda verir ve aynı anda alır. Biri son anda vazgeçerse değişim hiç olmamış sayılır; kimse formasını verip elleri boş kalmaz.

## Dikkat

Takas ücretsiz değildir: işlem ücreti ([[gas]]) ve havuzun takas ücreti hep vardır, ayrıca gördüğün çıktı bir tahmindir ([[slippage|kayma]]).

Asıl gözden kaçan şey şudur: bir token'ı takas edebilmek için önce o token'ın sözleşmesine "şu uygulama benim adıma harcayabilir" iznini verirsin ([[approve|approve]]). Takas bittikten sonra bu izin kendiliğinden kalkmaz. Verdiğin izinleri arada bir gözden geçirmek, takasın kendisi kadar rutin bir iş olmalı.
