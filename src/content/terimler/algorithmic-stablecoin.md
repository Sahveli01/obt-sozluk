---
term: "Algorithmic Stablecoin"
tr: ""
aliases: []
category: defi
subcategory: "Stablecoin'ler"
level: ileri
short: "Karşılığında bir varlık değil, arzı fiyata göre daraltıp genişleten bir mekanizma bulunan stablecoin tasarımı."
related: [stablecoin, peg, depeg, arbitrage, mint, token-burn]
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

Algoritmik stablecoin, hedef fiyatını bir karşılıkla değil bir kuralla korumaya çalışan [[stablecoin]] tasarımıdır. Diğer türlerde "arkasında ne var" sorusunun cevabı bir varlıktır: bir hesaptaki para ya da kilitli teminat. Burada cevap bir varlık değil, bir mekanizmadır.

Teminatın tamamen ortadan kalktığı anlamına gelmez; kısmen teminatlı melez tasarımlar da vardır. Ayırt edici olan, sabitliğin son çare olarak mekanizmaya bel bağlamasıdır. Türkçede terim İngilizce gövdesiyle, "algoritmik stablecoin" diye kullanılıyor.

## Nasıl çalışır?

En bilinen kurgu iki token üzerine kuruludur. Fiyat hedefin üstüne çıktığında sistem yeni stablecoin basar ([[mint]]) ve dolaşıma verir; arz artar, fiyat aşağı iner. Fiyat hedefin altına düştüğünde tersi gerekir, yani dolaşımdaki stablecoin azaltılmalıdır. Sistem bunu, stablecoin'i teslim edene karşılığında yeni basılmış ikinci token vererek yapar: stablecoin [[token-burn|yakılır]], ikinci token'ın arzı büyür.

İşin yürümesi bir varsayıma dayanır: bu takası yapacak birinin çıkması. Kâr beklentisi fiyatın hedefe döneceği inancından doğar. Yani [[peg|bağı]] tutan şey kasadaki bir varlık değil, [[arbitrage|arbitrajcıların]] mekanizmanın çalışmaya devam edeceğine dair beklentisidir.

## Dikkat

Kırılma noktası şurada. Fiyat düştüğünde mekanizma, stablecoin'i emmek için ikinci token'ı basmak zorundadır. Basılan her birim o token'ın arzını büyütür ve fiyatını aşağı çeker. Fiyatı düşen token'ı almak isteyen azalır; dolayısıyla aynı miktarda stablecoin'i emmek için daha da fazla basmak gerekir.

Bu noktadan sonra kaçış ile arz artışı birbirini besler: çıkmak isteyen çoğaldıkça arz hızlanır, arz hızlandıkça çıkmak isteyen çoğalır. Buna **ölüm sarmalı** denir. Mekanizma düşüş sırasında bozulmaz; tam da tasarlandığı gibi çalışarak düşüşü hızlandırır.

2022'de Terra ağının UST stablecoin'i bağını kaybetti ve sistem birkaç gün içinde çöktü.

Fark şurada: teminatlı bir tasarımda [[depeg]] sırasında ortada hâlâ satılabilir bir varlık vardır. Burada kurtarma kaynağı sistemin kendi ürettiği token'dır ve o token'ın değeri, tam olarak o an kaybolan şeyden — sisteme duyulan güvenden — gelir.
