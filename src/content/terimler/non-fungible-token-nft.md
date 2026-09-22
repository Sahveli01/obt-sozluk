---
term: "Non-Fungible Token (NFT)"
tr: ""
aliases: []
category: nft
subcategory: ""
level: baslangic
short: "Her biri ayrı numarayla kaydedilen, birbirinin yerine geçmeyen ve bölünemeyen token türü."
related: [fungible-token, erc-721, nft-collection, token-uri, mint, provenance]
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

NFT, zincirde tek tek numaralanan ve her biri diğerinden ayrı tutulan bir varlık kaydıdır. [[fungible-token|Fungible token]]'da soru "kaç tane" iken burada soru "hangisi"dir: her kaydın kendi numarası ve tek bir sahibi vardır, yarısı devredilemez.

Zincirde duran şey çoğu zaman sanıldığından azdır. Sözleşme kimin hangi numaraya sahip olduğunu tutar; görsel, ad ve özellikler genellikle [[token-uri|token URI]]'nin gösterdiği yerdedir.

Ethereum tarafında bu kaydın ortak arayüzü [[erc-721|ERC-721]] standardıdır. NFT ise bir standardın adı değil, o standardın taşıdığı kavramın adıdır. Türkçede yerleşmiş bir karşılığı olmadığı için kısaltma olduğu gibi kullanılır.

## Benzetme

Bir pul koleksiyonunun kataloğu gibi. Katalog pulları saklamaz; her pulun numarasını ve o numaranın kimde olduğunu yazar. İki pul aynı seriden çıkmış ve gözle aynı görünüyor olabilir — katalogda yine iki ayrı satırdır ve bir satır ikiye bölünmez. Pulu devrettiğinde değişen şey pul değil, satırın karşısındaki addır.

## Dikkat

En yaygın yanılgı, "NFT aldım, görsel artık kalıcı olarak benim" cümlesinin ikinci yarısındadır. Kalıcı olan zincirdeki kayıttır, gösterdiği dosya değil. Bağlantının ucundaki içerik yerinden kalkarsa ya da değiştirilirse token yerinde durur ama ekranda bir şey görünmez; bunun neden böyle olduğunu [[off-chain-metadata|zincir dışı metadata]] anlatır.

Sahiplik ile haklar da ayrı meselelerdir — bu ayrımı [[provenance|provenance]] başlığında bulabilirsin.
