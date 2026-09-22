---
term: "Liquidity Pool"
tr: "Likidite havuzu"
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: baslangic
short: "Takasların karşısına geçmesi için bir sözleşmede toplanmış, birçok kişiye ait iki varlıktan oluşan ortak fon."
related: [liquidity-provider-lp, automated-market-maker-amm, lp-token, swap, impermanent-loss, trading-pair]
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

Likidite havuzu, bir akıllı sözleşmenin içinde yan yana duran iki varlıktan oluşur. Takas yapmak isteyen kişi kendisine bir satıcı aramaz; havuza birinden bırakır, diğerinden alır. Karşı taraf hep havuzdur.

Havuzdaki miktarlar aynı zamanda fiyatı belirler: hangi varlık azalırsa havuz onu pahalılaştırır ([[automated-market-maker-amm|AMM]]). Havuzu dolduranlar [[liquidity-provider-lp|likidite sağlayıcılardır]] ve her takastan kesilen küçük ücret onların payına yazılır.

## Benzetme

Köy kooperatifinin ortak ambarı gibi. Herkes buğdayını ve arpasını aynı ambara boşaltır; kim ne kadar koyduysa ambarda o kadar payı olur. Köye gelen biri arpa bırakıp buğday alabilir, çünkü ambarda ikisi de vardır — kimsenin kapıda birebir takas edecek birini bulması gerekmez. Alan kişi çıkarken küçük bir pay bırakır, o da ambarı dolduranların olur.

## Dikkat

Havuza varlık koymak faize para yatırmaya benzemez. Ücret geliri sabit değildir, işlem oldukça birikir; daha önemlisi çektiğinde elindeki iki varlığın miktarları yatırdığın miktarlarla aynı olmayabilir. Bunun adı [[impermanent-loss|geçici kayıptır]] ve havuza girmeden önce anlaşılması gereken asıl konudur.
