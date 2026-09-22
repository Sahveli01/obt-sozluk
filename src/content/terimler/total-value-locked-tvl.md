---
term: "Total Value Locked (TVL)"
tr: "Toplam kilitli değer"
aliases: ["tvl", "toplam kilitli değer"]
category: defi
subcategory: "Temeller"
level: orta
short: "Bir protokolün sözleşmelerinde o an duran varlıkların toplam değeri; büyüklük göstergesi olarak kullanılır."
related: [decentralized-finance-defi, liquidity-pool, liquid-staking, restaking, lending-protocol, protocol-revenue]
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

TVL, bir protokolün sözleşmelerinde o an duran varlıkların toplam değeridir. Protokolün büyüklüğünü tek bir sayıyla anlatmak için kullanılır: havuzlardaki likidite, [[lending-protocol|borç verme protokolüne]] yatırılmış teminatlar, kasalarda kilitli varlıklar.

Türkçede "toplam kilitli değer" karşılığı kullanılır, ama kısaltma çoğunlukla İngilizce hâliyle geçer.

## Nasıl çalışır?

Hesap basittir: her varlığın protokoldeki miktarı o varlığın fiyatıyla çarpılır ve hepsi toplanır. Fiyat genellikle piyasa verisinden ya da bir [[oracle|oracle]] üzerinden alınır.

Bu yüzden TVL birikmiş bir toplam değil, o anın fotoğrafıdır. Paranın ne kadar süredir orada durduğunu, kime ait olduğunu ve neden geldiğini içinde taşımaz.

## Örnek

Aynı paranın birden çok kez sayılması TVL'nin en bilinen sorunudur. Varlığını [[liquid-staking|likit staking]] ile stake edersin ve karşılığında bir token alırsın. O token'ı bir [[restaking|restaking]] protokolüne yatırırsın, oradan aldığın token'ı da bir [[liquidity-pool|likidite havuzuna]] koyarsın. Tek bir varlık zincirin üç ayrı yerinde iş görür ve üçünün de TVL'sinde ayrı ayrı sayılır.

## Dikkat

TVL'nin ölçmediği üç şey var.

**Mülkiyet.** "Kilitli" kelimesi yanıltıcıdır; varlıklar kullanıcılarındır ve çoğu her an çekilebilir. TVL protokolün kasasını değil, ona emanet edilmiş toplamı gösterir.

**Kalıcılık.** Bir teşvik programı süresince gelen paranın program bitince gitmesi olağandır. TVL o farkı ayırt etmez.

**Fiyattan bağımsızlık.** Yatırılan varlıkların fiyatı yükseldiğinde tek bir yeni kullanıcı gelmeden TVL büyür; düştüğünde kimse çıkmadan küçülür.
