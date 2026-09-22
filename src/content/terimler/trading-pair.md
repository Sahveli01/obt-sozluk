---
term: "Trading Pair"
tr: "İşlem çifti"
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: baslangic
short: "Bir varlığın fiyatının hangi varlık cinsinden ölçüldüğünü gösteren ikili; örneğin ETH/USDC."
related: [swap, liquidity-pool, order-book, spread, dex-aggregator, stablecoin]
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

İşlem çifti, alınıp satılan iki varlığın birlikte yazılmış hâlidir. Soldaki varlık alınıp satılan şeydir, sağdaki ise ölçü birimi: `ETH/USDC` yazıyorsa bir ETH'nin kaç USDC ettiğini okursun.

Bunun sebebi basit: fiyat tek bir şeyin kendi başına özelliği değildir. Bir varlığın fiyatı her zaman başka bir varlık cinsindendir ve ölçüyü değiştirince sayı da değişir.

## Benzetme

Döviz bürosunun tabelası gibi. Tabelada tek başına "euro fiyatı" yazmaz, `EUR/TRY` yazar. Aynı euronun sterlin cinsinden fiyatı bambaşka bir sayıdır ve ikisi de doğrudur; değişen tek şey neyle ölçtüğündür.

## Dikkat

Merkeziyetsiz borsalarda her çift ayrı bir [[liquidity-pool|havuzdur]]. Aynı token'ın iki farklı çiftteki fiyatı birbirinden biraz farklı olabilir ve havuzların derinliği de bambaşka olabilir: bir çiftte rahatça yaptığın takas, diğerinde çok kötü bir fiyata denk gelebilir.

Doğrudan havuzu olmayan iki token arasında takas yapmak da mümkündür; işlem araya bir ya da birkaç token daha koyarak yönlendirilir. Bu yolu bulma işini [[dex-aggregator|toplayıcılar]] üstlenir.
