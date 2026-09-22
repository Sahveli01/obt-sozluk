---
term: "Constant Product Formula"
tr: "Sabit çarpım formülü"
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: orta
short: "Havuzdaki iki varlığın miktarlarının çarpımını takas boyunca sabit tutarak fiyat belirleyen AMM kuralı."
related: [automated-market-maker-amm, liquidity-pool, price-impact, slippage, stableswap, arbitrage]
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

Önce sezgi: havuzda iki varlık vardır, birinden çekersen diğerinden koymak zorundasın ve havuz azalan varlığı pahalılaştırır. Bu cümleyi tek satırlık bir kurala indirebilirsin:

`x * y = k`

`x` havuzdaki birinci varlığın miktarı, `y` ikincinin miktarı, `k` ise ikisinin çarpımıdır. Takas, bu çarpımı düşürmeyecek şekilde hesaplanır. Formül [[automated-market-maker-amm|AMM]] fikrini yaygınlaştıran Uniswap ile tanındı.

## Nasıl çalışır?

Havuzdan ne kadar çok çekmek istersen, çarpımı korumak için koyman gereken miktar o kadar orantısız büyür. Bunun iki sonucu var. Birincisi, büyük takaslarda fiyat hızla kötüleşir ([[price-impact|fiyat etkisi]]). İkincisi, havuz hiçbir zaman tamamen boşaltılamaz: `x` sıfıra yaklaşırken gereken `y` sonsuza gider.

Anlık fiyat, iki miktarın oranıdır. Havuzda bir varlık azaldıkça o varlığın fiyatı diğerine göre yükselir.

`k` sabit bir sayı değil, **takas sırasında** sabit tutulan bir büyüklüktür. Üç şey onu değiştirir: takastan kesilen ücret havuzda kaldığı için her işlemden sonra `k` hafifçe büyür; havuza likidite eklenince büyür; likidite çekilince küçülür. Bu son iki durumda fiyat değişmez, yalnızca havuzun derinliği değişir.

## Dikkat

Formül dışarıdaki fiyatı bilmez, yalnızca kendi içindeki iki sayıya bakar. Piyasa hareket ettiğinde havuz kendiliğinden güncellenmez; geride kalan fiyatı [[arbitrage|arbitraj]] işlemleri hizalar.
