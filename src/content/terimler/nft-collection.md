---
term: "NFT Collection"
tr: "NFT koleksiyonu"
aliases: []
category: nft
subcategory: ""
level: baslangic
short: "Tek bir sözleşme altında, ortak bir ad ve tasarımla basılan numaralı NFT'lerin tamamı."
related: [non-fungible-token-nft, erc-721, contract-address, trait-nft, rarity, mint]
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

Bir NFT koleksiyonu, tek bir akıllı sözleşme altında toplanan numaralı parçaların tamamıdır. Sözleşmenin kendisi koleksiyondur: adı, sembolü ve kaç parça basılabileceği oradadır, içindeki her parça bir numarayla (`tokenId`) ayrılır.

Bu yüzden bir [[non-fungible-token-nft|NFT]]'yi tam olarak tarif etmek için iki bilgi gerekir: hangi [[contract-address|sözleşme adresi]] ve hangi numara. Tek başına "3 numara" hiçbir şey söylemez, çünkü aynı numara binlerce koleksiyonda vardır. [[erc-721|ERC-721]] standardı da kimliği tam olarak bu ikiliden kurar.

## Benzetme

Bir kitap dizisi gibi. Dizinin adı, kapak düzeni ve yayınevi ortaktır; kitapları birbirinden ayıran şey sırttaki numaradır. "Yedinci kitap" demek tek başına yetmez — önce hangi dizi olduğunu söylemen gerekir, yoksa karşındaki kitabı bulamaz.

## Dikkat

Aynı adla, aynı görsellerle ikinci bir sözleşme basmak kimseyi engellemez; taklit koleksiyonlar bu yüzden kolayca üretilir. Bir parçanın hangi koleksiyondan olduğunu belirleyen şey ad ya da görsel değil, sözleşme adresidir. Önce adrese, sonra görsele bakmak buradan çıkan alışkanlıktır.
