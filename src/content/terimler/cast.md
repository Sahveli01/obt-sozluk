---
term: "Cast"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Foundry'nin komut satırı aracı; terminalden zincire soru sorar, işlem gönderir ve veri biçimlerini çevirir."
related: [foundry, rpc-provider, application-binary-interface-abi, json-rpc, block-explorer]
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

Cast, [[foundry|Foundry]] takımının zincirle konuşan aracıdır. Bir sözleşmeyi derlemez, test etmez; senin adına tek seferlik sorular sorar ve işlem gönderir. Bir bakiyeyi öğrenmek, bir sözleşmenin `view` işlevini çağırmak, bir işlemin makbuzuna bakmak ya da bir işlem yollamak için ayrı bir betik yazmak yerine tek satırlık komut yazarsın.

İkinci işi çeviridir: zincirin konuştuğu ham biçimlerle insanın okuduğu biçimler arasında gidip gelir — onaltılıktan ondalığa, metinden [[application-binary-interface-abi|ABI]] kodlamasına, bir işlev imzasından onun seçicisine.

## Nasıl çalışır?

Cast arka planda bir [[rpc-provider|RPC uç noktasına]] [[json-rpc|JSON-RPC]] çağrısı yapar; hangi ağa bağlanacağını komutta verdiğin adresten ya da ortam değişkeninden okur. Okuma komutları yalnızca sorgu yapar ve ücret gerektirmez. Yazma komutları bir imza gerektirir; anahtarı nereden aldığını sen söylersin.

Çağıracağın işlevi [[solidity|Solidity]] imzasıyla yazarsın; cast bu imzadan veriyi kodlar, dönen yanıtı da aynı imzaya bakarak çözer. Bu yüzden ABI dosyası elinde olmadan da bilinen bir işlevi çağırabilirsin.

## Örnek

Bir adresin bir ERC-20 sözleşmesindeki bakiyesini okumak:

```bash
cast call <sozlesme> "balanceOf(address)(uint256)" <adres> --rpc-url <url>
```

## Dikkat

Okuma komutları zararsızdır ama yazma komutları gerçek işlem gönderir ve gerçek ücret öder. Komutu çalıştırmadan önce hangi ağa bağlı olduğunu ve hangi anahtarın kullanıldığını iki kez kontrol et; terminalde geri alma yoktur.

Özel anahtarı komut satırına doğrudan yazmak onu kabuk geçmişine düşürür; anahtar yönetimini buna göre kur.
