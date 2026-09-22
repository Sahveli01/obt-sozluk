---
term: "Constructor"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Dağıtım ve arayüz"
level: orta
short: "Sözleşme dağıtılırken yalnızca bir kez çalışan ve zincire yazılan kodun içinde yer almayan başlangıç fonksiyonu."
related: [contract-deployment, immutable-variable, proxy-contract, uninitialized-proxy, ownable, state-variable]
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

`constructor`, bir sözleşme dağıtılırken yalnızca bir kez çalışan özel fonksiyondur. İşi sözleşmeyi kullanılabilir hâle getirmektir: sahibini belirler, token'ın adını yazar, başlangıç [[state-variable|değerlerini]] kurar.

Türkçede yerleşmiş bir karşılığı yok; kodda anahtar sözcük olarak geçtiği için `constructor` diye anılır.

## Benzetme

İnşaat iskelesi gibi. İskele olmadan bina yükselmez: ustalar oradan çalışır, kalıplar ona tutunur. Ama bina bittiğinde iskele sökülür ve yapının bir parçası olmaz. Sonradan gelen birinin "şu iskeleye çıkayım" deme şansı yoktur; o iş bitti, ortada yalnızca bina var.

## Nasıl çalışır?

Constructor'ın kodu [[contract-deployment|dağıtım]] işleminin verisi içinde gelir ve orada çalışır. Çalışması bittiğinde geriye zincire yazılacak runtime kodunu döndürür — ve constructor'ın kendisi o kodun içinde **yer almaz**. Bu yüzden dağıtımdan sonra onu çağıramazsın: [[function-selector|seçicisi]] yoktur, ona açılan bir kapı yoktur.

Bunun pratik sonuçları var. Constructor içinde atanan [[immutable-variable|immutable değişkenler]] depolamaya değil doğrudan kodun içine gömülür, okunmaları bu yüzden ucuzdur. Constructor `payable` işaretlenebilir, yani sözleşme doğarken ETH alabilir. Argümanları ise oluşturma kodunun sonuna eklenerek gönderilir.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Kasa {
    address public immutable sahip;
    uint256 public limit;

    constructor(uint256 baslangicLimiti) payable {
        sahip = msg.sender;
        limit = baslangicLimiti;
    }
}
```

## Dikkat

[[proxy-contract|Proxy]] kurgularında constructor bir tuzaktır. Kullanıcı proxy'ye çağrı yapar, kod ise mantık sözleşmesindedir; ama mantık sözleşmesinin constructor'ı kendi dağıtımında, kendi depolamasında çalışmıştır. Proxy'nin depolamasına hiçbir şey yazmamıştır. Yani proxy'nin arkasındaki sözleşmenin sahibi belirlenmemiş, sayaçları sıfır kalmıştır.

Bu yüzden proxy'lerde başlangıç işini `initialize` adlı sıradan bir fonksiyon yapar ve bu fonksiyon yalnızca bir kez çalışacak şekilde kilitlenir. Kilit konmazsa ya da dağıtımdan hemen sonra çağrılmazsa sözleşmeyi ilk kuran kişi sahibi olur — [[uninitialized-proxy|kurulmamış proxy]] açığı tam olarak budur.
