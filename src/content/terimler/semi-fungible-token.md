---
term: "Semi-Fungible Token"
tr: ""
aliases: []
category: tokenlar
subcategory: "Token türleri"
level: orta
short: "Tek bir sözleşme içinde hem birbirinin aynısı hem de birbirinden farklı varlıkları taşıyabilen token; aynı tür fungible, farklı türler değildir."
related: [erc-1155, fungible-token, non-fungible-token-nft, erc-721, erc-20, token-standard]
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

Semi-fungible token, tek bir sözleşmenin numaralanmış birçok tür tuttuğu bir tasarımdır. Aynı numaraya ait birimler birbirinin aynısıdır, yani kendi içlerinde [[fungible-token|değiştirilebilirdir]]; farklı numaralar ise birbirinden ayrı nesnelerdir ve birinin yerine diğeri geçmez.

Ethereum tarafındaki karşılığı [[erc-1155]] standardıdır. Adı "yarı değiştirilebilir" diye çevrilebilir ama metinlerde İngilizcesi kullanılıyor.

## Benzetme

Aynı ayakkabının farklı numaraları gibi. Rafta duran on çift 42 numara birbirinin aynısıdır; hangisini alacağın fark etmez, birini diğeriyle değiştirsen kimse anlamaz. Ama 40 numara bambaşka bir şeydir. Aynı marka, aynı model, aynı kutu — numara değişince birini diğerinin yerine kullanamazsın.

## Nasıl çalışır?

[[erc-20]] bakiyesi tek bir sayıdır: "şu adreste 50 birim var". [[erc-721]]'de ise her token'ın benzersiz bir kimliği vardır ve tek bir sahibi olur. ERC-1155 ikisini birleştirir: bakiye iki anahtarla sorgulanır, adres ve tür numarası. "Şu adreste 3 numaralı türden 7 adet var" cümlesi hem kimlik hem sayı taşır.

Buradan şu çıkar: bir türün tek bir birimi varsa o tür pratikte [[non-fungible-token-nft|NFT]] gibi davranır, binlerce birimi varsa sıradan bir jeton gibi. İkisi aynı sözleşmede yan yana durabildiği için oyun eşyaları, biletler ve kuponlar gibi "çok sayıda ama çeşitli" varlıklarda tercih edilir.

## Dikkat

"Yarı" kelimesi tek bir birimin yarı yarıya benzersiz olduğu anlamına gelmez. Benzersizlik birim düzeyinde değil tür düzeyindedir: tür içinde tam fungible, türler arasında tam non-fungible. Arada kalan şey token değil, sözleşmenin tuttuğu envanterdir.
