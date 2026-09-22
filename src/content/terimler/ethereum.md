---
term: "Ethereum"
tr: ""
aliases: ["ETH"]
category: aglar
subcategory: ""
level: baslangic
short: "Para transferinin yanında genel amaçlı program da çalıştırabilen, akıllı sözleşme fikrini yaygınlaştıran blockchain ağı."
related: [smart-contract, ethereum-virtual-machine-evm, account-model, proof-of-stake-pos, rollup, bitcoin]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Ethereum, para transferinin yanında program da çalıştırabilen bir blockchain olarak tasarlandı. Amaç, kuralları koda yazılmış ve herkesin aynı sonucu doğrulayabildiği uygulamalar yazabilmekti; bunun aracı [[smart-contract|akıllı sözleşmelerdir]].

Bütün düğümler sözleşmeleri aynı ortak ortamda, [[ethereum-virtual-machine-evm|EVM]] üzerinde çalıştırır. Defter [[account-model|hesap modeliyle]] tutulur: her adresin bir bakiyesi, her sözleşmenin kendi durumu vardır. Blokları kimin ekleyeceğine [[proof-of-stake-pos|proof of stake]] karar verir.

## Dikkat

Her düğümün her işlemi yeniden çalıştırması hem güvenliğin kaynağı hem de sınırıdır: blok alanı kıttır, talep arttıkça ücret yükselir. Ethereum bu sorunu ana zinciri büyüterek değil, işlemleri [[rollup|rollup]] denen üst katmanlara taşıyıp ana zinciri bir doğrulama ve uzlaşma yeri olarak kullanarak çözmeyi seçti.

Bunun bedeli parçalılıktır. Yazıldığı tarih itibarıyla kullanıcının varlıkları birden çok ağa dağılır, aynı uygulamanın farklı katmanlardaki kopyaları birbirinden habersiz olabilir ve katmanlar arası geçiş ayrı bir adım olarak kullanıcının önüne çıkar.
