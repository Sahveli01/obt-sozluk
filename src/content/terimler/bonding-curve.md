---
term: "Bonding Curve"
tr: ""
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: ileri
short: "Bir token'ın fiyatını dolaşımdaki arza bağlayan ve alım satımı doğrudan bu formülle yaptıran eğri."
related: [liquidity-pool, automated-market-maker-amm, mint, token-burn, rug-pull, memecoin]
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

Bonding curve'de token'ı sana bir başkası satmaz; sözleşmenin kendisi satar ve geri alır. Fiyatı önceden yazılmış bir eğri belirler: arz arttıkça fiyat yükselir, token geri verilip yakıldıkça düşer.

Yani alım demek [[mint|basım]], satım demek [[token-burn|yakım]] demektir. Havuzda bekleyen bir karşı taraf ya da eşleşmeyi bekleyen bir emir yoktur; eğrinin o noktadaki değeri neyse fiyat odur.

"Bonding curve" bir formülün adıdır ve Türkçede İngilizcesiyle kullanılır.

## Nasıl çalışır?

Ödediğin para sözleşmedeki rezervde birikir. Satmak istediğinde eğrinin o noktadaki değeri kadarı rezervden sana ödenir ve token'ın yakılır. Kural kamuya açıktır, pazarlık yoktur: aynı anda aynı büyüklükte alım yapan herkes aynı fiyatı öder.

Bu yüzden yeni bir token, kimse [[liquidity-pool|havuza]] likidite koymadan ilk günden alınıp satılabilir hâle gelir. Lansman araçlarında ve özellikle [[memecoin|memecoin]] ihraç eden platformlarda bu sebeple kullanılır.

## Dikkat

Erken girenin geç girenden düşük fiyat ödemesi bir aksaklık değil, tasarımın kendisidir: eğri zaten "arz arttıkça pahalılaşsın" diye yazılmıştır. Bunu gizli bir kusur olarak da, bir fırsat olarak da okuma; kuralın açık hâli budur. Buradan çıkan ikinci sonuç da şudur: eğri üzerindeki fiyatın yükselmesi yalnızca yeni alım geldiği sürece sürer, eğrinin kendisi bir değer üretmez.

Daha ağır olan nokta ise rezervdir. Geri alım sözü, ancak rezerv yerinde durduğu sürece geçerlidir. Sözleşme rezervi bir yöneticinin çekebileceği biçimde yazılmışsa, eğri sonradan değiştirilebiliyorsa ya da satış tek taraflı kapatılabiliyorsa elinde satılamayan bir token kalır. [[rug-pull|Rug pull]] denen şeyin en doğrudan hâli budur; eğrinin matematiği kusursuz olsa bile bu riski kapatmaz.
