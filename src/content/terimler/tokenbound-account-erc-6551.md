---
term: "Tokenbound Account (ERC-6551)"
tr: ""
aliases: ["erc-6551"]
category: nft
subcategory: ""
level: ileri
short: "Her ERC-721 token'ına, yetkisi o token'ın güncel sahibine bağlı olan bir akıllı sözleşme hesabı veren standart."
related: [erc-721, smart-contract-wallet, contract-account, non-fungible-token-nft, token-standard]
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

ERC-6551, bir [[non-fungible-token-nft|NFT]]'ye kendi hesabını veren bir standarttır. Normalde bir NFT bir hesapta *durur*; bu standartla NFT'nin kendisi de bir hesap *sahibi* olur. Böylece bir NFT token tutabilir, başka NFT'ler tutabilir, işlem imzalayabilir — ve el değiştirdiğinde bütün bunlar onunla birlikte gider.

## Benzetme

Oyundaki bir karakterin sırt çantası gibi. Eşyalar oyuncunun hesabına değil, karakterin üstüne yazılıdır. Karakteri başkasına devrettiğinde çantadakileri ayrıca taşımak gerekmez; zaten karakterin üstünde oldukları için onunla birlikte geçerler.

## Nasıl çalışır?

Standart bir kayıt (registry) sözleşmesi tanımlar. Bu sözleşme üç bilgiden — zincir kimliği, NFT sözleşmesinin adresi ve token numarası — deterministik bir adres hesaplar. Adres [[create2|CREATE2]] mantığıyla üretildiği için hesap daha dağıtılmadan bilinir; sözleşme ancak ilk kez kullanılacağı anda oluşturulur.

Oluşan şey bir [[smart-contract-wallet|akıllı sözleşme cüzdanıdır]]: zincirde kendi adresi ve kendi durumu olan bir [[contract-account|sözleşme hesabı]]. Kimin adına iş yapacağı sorusuna sabit bir cevabı yoktur; her seferinde bağlı olduğu NFT'nin o anki sahibine bakar. NFT satıldığında yeni sahip, aynı hesabın yetkilisi hâline gelir.

Standardın pratik yanı geriye dönük çalışmasıdır: mevcut [[erc-721|ERC-721]] koleksiyonlarının sözleşmelerinde hiçbir değişiklik gerekmez.

## Dikkat

Bir NFT satın alırken içindeki hesabın boş olduğunu varsayma — tersi de geçerlidir: satıcı, satış işleminden hemen önce hesabın içini boşaltabilir. İçeriğine güvenerek yapılan alışverişlerde "ne zaman bakıldığı" ile "ne zaman devredildiği" arasındaki boşluk gerçek bir risktir.

İkinci nokta iç içe geçmedir: bir NFT'nin hesabı başka bir NFT'yi, onun hesabı bir başkasını tutabilir. Zincir derinleştikçe bir varlığın gerçekte kimin denetiminde olduğunu takip etmek zorlaşır.
