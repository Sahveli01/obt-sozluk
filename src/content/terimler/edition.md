---
term: "Edition"
tr: ""
aliases: []
category: nft
subcategory: ""
level: baslangic
short: "Aynı eserin, sayısı baştan belirlenmiş özdeş kopyalar hâlinde numaralanarak basılması."
related: [one-of-one-1-1, erc-1155, semi-fungible-token, max-supply, nft-collection, mint]
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

Edition, bir eserin tek parça olarak değil, sayısı baştan belirlenmiş özdeş kopyalar hâlinde basılmasıdır. Elli kopyalık bir edition'da elli kişi aynı görselin birer nüshasına sahip olur; nüshaları birbirinden yalnızca sıra numarası ayırır, bazen o bile ayırmaz.

Sanat dünyasında bunun karşılığı "tiraj" ya da "baskı adedi"dir; NFT tarafında yerleşen kullanım İngilizcesidir.

## Benzetme

Sınırlı sayıda basılan bir gravür gibi. Elli kopya basılır, her birinin altına kaçıncı olduğu yazılır — 12/50 gibi — ve sayı dolunca baskı durur. Elindeki kâğıt komşununkinin aynısıdır; aradaki tek fark, kaç tane basıldığının baştan söylenmiş ve sonradan artırılmayacak olmasıdır.

## Dikkat

Burada seyreklik özelliklerden değil sayıdan gelir, dolayısıyla tek soru şudur: kaç tane basılabiliyor ve bu sınır gerçekten kodda mı duruyor? Sözleşme yeni basıma izin veriyorsa "sınırlı" sözünün bir karşılığı yoktur; sınırı duyuru değil, [[max-supply|üst sınır]] koyar.

Numaranın kendisi de bir garanti taşımaz: 1/50 ile 37/50 aynı görseli gösterir, aralarındaki fark yalnızca sıradır.

Teknik tarafta edition'lar çoğunlukla [[erc-1155|ERC-1155]] ile kurulur — o standart "tek bir kimliğin altında çok sayıda özdeş birim" fikrini doğrudan taşır ve ortaya çıkan davranış [[semi-fungible-token|yarı değiştirilebilir]] olandır.
