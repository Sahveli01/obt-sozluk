---
term: "NFT Metadata"
tr: "NFT üstverisi"
aliases: []
category: nft
subcategory: ""
level: orta
short: "Bir NFT'nin adını, açıklamasını, görsel bağlantısını ve özellik listesini tutan JSON belgesi."
related: [token-uri, on-chain-metadata, off-chain-metadata, trait-nft, non-fungible-token-nft, ipfs]
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

Metadata, bir [[non-fungible-token-nft|NFT]]'nin insana görünen kısmını tarif eden belgedir: adı, açıklaması, görselin nerede olduğu ve varsa özellik listesi. Sözleşmenin bunların hiçbirini bilmesi gerekmez; onun tuttuğu asıl bilgi kimin hangi numaraya sahip olduğudur. Ekranda gördüğün her şey bu belgeden gelir.

Belge neredeyse her zaman JSON'dur ve [[token-uri|token URI]]'nin ucunda durur. `name`, `description` ve `image` alanları [[erc-721|ERC-721]] metninin kendi önerisinden gelir; özellikleri taşıyan `attributes` alanı ise standardın parçası değildir, piyasada yerleşmiş ortak kullanımdır. Cüzdanların ve arayüzlerin okuduğu alanlar bunlardır — başka adlarla yazarsan bir şey görünmez.

## Nasıl çalışır?

Bir arayüz NFT'yi göstereceği zaman sırayla şunu yapar: sözleşmeye `tokenURI(tokenId)` sorar, dönen adresi açar, gelen JSON'u okur, içindeki `image` alanındaki adresi açar ve görseli indirir. Yani tek bir kare görselin ekrana gelmesi için en az iki ayrı adresin o anda çalışıyor olması gerekir.

Buradan iki kırılma noktası çıkar: belgenin durduğu yer ve görselin durduğu yer. İkisinin de zincirle ilgisi yoktur; biri [[ipfs|IPFS]] üstünde, diğeri sıradan bir sunucuda olabilir. Belgenin nerede durduğu ve sonradan değişip değişemeyeceği, [[on-chain-metadata|zincir üstü]] ile [[off-chain-metadata|zincir dışı]] yaklaşımın ayrıldığı yerdir.

## Örnek

```json
{
  "name": "Kayıt #128",
  "description": "Koleksiyonun 128 numaralı parçası.",
  "image": "ipfs://bafybe.../128.png",
  "attributes": [
    { "trait_type": "Arka plan", "value": "Mavi" },
    { "trait_type": "Gözlük", "value": "Yok" }
  ]
}
```

`attributes` içindeki her satır bir [[trait-nft|trait]]'tir; [[rarity|nadirlik]] hesapları da bütün parçaların bu listeleri sayılarak çıkarılır.

## Dikkat

Metadata'yı değiştirmek çoğu koleksiyonda sözleşmeye dokunmayı gerektirmez. Adres aynı kalır, ucundaki dosyanın içeriği değişir ve parçanın görüntüsü sessizce başka bir şeye dönüşür.

Token'ın devredilemez biçimde senin olması, gösterdiği şeyin sabit kalacağı anlamına gelmez. Bunlar iki ayrı garanti ve zincir yalnızca birincisini veriyor.
