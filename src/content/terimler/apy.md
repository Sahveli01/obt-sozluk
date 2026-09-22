---
term: "APY"
tr: ""
aliases: ["annual percentage yield"]
category: defi
subcategory: "Temeller"
level: orta
short: "Kazancın yeniden yatırılması, yani bileşiklenme hesaba katılarak bulunan yıllık getiri oranı."
related: [apr, vault, yield-aggregator, staking-rewards, interest-rate-model]
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

APY, *Annual Percentage Yield* kısaltmasıdır: kazancın yeniden yatırıldığı varsayılarak bulunan yıllık getiri oranı. Kazandığın tutar anaparaya eklenirse bir sonraki dönem daha büyük bir anapara üzerinden işler; bu tekrara bileşiklenme denir.

Kısaltma Türkçeye çevrilmeden kullanılır.

## Nasıl çalışır?

Formül şudur: `APY = (1 + r/n)^n - 1`. Buradaki `r` yıllık nominal oran, `n` ise bir yıl içinde kaç kez bileşiklendiğidir. `n` büyüdükçe APY de büyür, `r` hiç değişmese bile. "Günlük bileşiklenir" ile "yılda bir bileşiklenir", aynı [[apr|APR]] üzerinden farklı bir APY doğurur.

Zincir üstünde bileşiklenme kendiliğinden olmaz: kazancı toplayıp geri yatıran bir işlem gerekir ve o işlemin [[gas|gas]] maliyeti vardır. [[vault|Vault]] ve [[yield-aggregator|getiri toplayıcı]] denen ürünlerin işi tam olarak bunu kullanıcılar adına toplu hâlde yapmaktır.

## Örnek

Varsayalım bir protokol kazancı her gün hesabına yazıyor. Parayı çekmeyip aynı yere geri koyarsan ertesi günün kazancı biraz daha büyük bir anapara üzerinden işler ve bu her gün tekrarlanır. APY bu tekrarın yıl sonundaki toplam etkisini tek bir sayıda gösterir; APR ise aynı kazancı hiç geri yatırılmamış gibi sayar.

## Dikkat

APR ile farkı tek cümlede: APR bileşiklenmeyi saymaz, APY sayar.

İlan edilen APY bir tahmindir, taahhüt değil. İki varsayıma dayanır: oranın yıl boyunca aynı kalacağı ve bileşiklemenin gerçekten yapılacağı. DeFi'de oranlar anlıktır ve değişkendir; ikisi de garanti değildir.

Ödül protokolün kendi token'ıyla ödeniyorsa APY, o token'ın hesaplama anındaki fiyatıyla bulunur. Token'ın fiyatı değiştiğinde sen hiçbir şey yapmasan da elindeki getirinin karşılığı değişir. [[staking-rewards|Staking ödüllerinde]] de aynı ayrım geçerlidir.
