---
term: "StableSwap"
tr: ""
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: ileri
short: "Fiyatlarının birbirine yakın kalması beklenen varlıklar için denge çevresinde düşük fiyat etkisi veren AMM eğrisi."
related: [automated-market-maker-amm, constant-product-formula, stablecoin, peg, price-impact, liquidity-provider-lp]
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

İki [[stablecoin|stablecoin]] ya da bir varlıkla onun sarmalanmış hâli gibi, oranının bire bir civarında kalması beklenen çiftlerde [[constant-product-formula|sabit çarpım formülü]] israftır: likiditenin büyük kısmı, fiyatın hiç gitmeyeceği bölgelerde bekler.

StableSwap, bu durum için tasarlanmış bir eğridir. Denge noktasının çevresinde neredeyse düzdür; orada yapılan büyük takaslar bile fiyatı çok az oynatır. Havuz iyice dengesizleştiğinde ise eğri hızla dikleşir ve sabit çarpım gibi davranmaya başlar. Bu eğriyi yaygınlaştıran protokol Curve'dür.

"StableSwap" bir formülün özel adıdır; Türkçeye çevrilmez.

## Nasıl çalışır?

Tek bir formül iki davranışı birden içerir ve aralarında yumuşak geçiş yapar. Bir parametre eğrinin ne kadar "düz" olacağını, yani sabit çarpıma ne zaman dönüşeceğini belirler. Bu sayede aynı sermaye, dar bir bölgeye yığılmış gibi davranır ve orada [[price-impact|fiyat etkisi]] çok küçük kalır. Havuzlar ikiden fazla varlık da içerebilir.

## Dikkat

Düz bölge, varlıkların gerçekten eşdeğer kalacağı varsayımına dayanır. Formül bu varsayımı sorgulamaz.

Varlıklardan biri bağını kaybederse ([[depeg|depeg]]) eğri bunu fark etmez; sağlam varlığı alıp değeri düşeni havuza bırakmak kârlı hâle gelir ve havuz hızla o varlıkla dolar. [[liquidity-provider-lp|Likidite sağlayıcılar]] da havuzdan neredeyse tamamen değerini yitiren varlıkla çıkar. Düşük fiyat etkisi burada koruma değil, hızlandırıcıdır: boşalma da aynı kolaylıkla olur.
