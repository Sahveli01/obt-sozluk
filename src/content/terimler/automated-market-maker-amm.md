---
term: "Automated Market Maker (AMM)"
tr: "Otomatik piyasa yapıcı"
aliases: ["amm"]
category: defi
subcategory: "Takas ve likidite"
level: orta
short: "Alıcıyla satıcıyı eşleştirmek yerine fiyatı bir formülle belirleyen ve takası bir havuza karşı yaptıran sistem."
related: [liquidity-pool, constant-product-formula, decentralized-exchange-dex, market-maker, price-impact, order-book-dex]
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

Klasik bir borsada fiyat, alıcıların ve satıcıların emirlerinin buluşmasından çıkar. AMM'de karşında bir insan yoktur: bir [[liquidity-pool|havuz]] ve bir kural vardır.

Sezgisi şudur. Havuzda iki varlık yan yana durur. Birinden almak istiyorsan diğerinden havuza koymak zorundasın. Aldığın varlık havuzda azalır, koyduğun çoğalır. Havuz da azalan varlığı otomatik olarak pahalılaştırır, çoğalanı ucuzlatır. Yani fiyatı kimse elle yazmaz; fiyat, havuzdaki iki miktarın oranından çıkar ve her takas bir sonraki takasın fiyatını değiştirir.

## Nasıl çalışır?

Bu "azalanı pahalılaştır" kuralını yazan şey matematiksel bir eğridir. En yaygın hâli [[constant-product-formula|sabit çarpım formülüdür]]; fiyatları birbirine yakın seyreden varlıklar için [[stableswap|StableSwap]] gibi başka eğriler kullanılır.

Her takastan küçük bir ücret kesilir ve havuzda kalır; bu ücret havuza varlık yatıran [[liquidity-provider-lp|likidite sağlayıcıların]] payıdır. Böylece sistem kendi karşı tarafını maaşa bağlamadan çalışır: sermaye pasif olarak durur, kural sürekli fiyat üretir.

Havuzun fiyatı dış piyasadan saptığında ise havuz bunu kendi kendine fark etmez; farkı kapatan [[arbitrage|arbitraj]] işlemleridir.

## Dikkat

AMM "her zaman karşı taraf var" demektir, "her zaman iyi fiyat var" demez. Havuz sığsa küçük bir takas bile fiyatı ciddi biçimde oynatır — bunun ölçüsü [[price-impact|fiyat etkisidir]].
