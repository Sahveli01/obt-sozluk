---
term: "Immutable Variable"
tr: ""
aliases: ["immutable", "immutable değişken"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Kuruluş anında bir kez atanıp bir daha değiştirilemeyen, değeri sözleşmenin kodunun içine gömülen değişken."
related: [constant, constructor, state-variable, immutability, gas-optimization, storage-evm]
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

`immutable` işaretli bir değişkenin değeri [[constructor|kurucuda]] bir kez atanır ve o andan sonra hiçbir şekilde değiştirilemez. Sözleşmenin sahibi, bağlı olduğu token'ın adresi, kuruluşta belirlenen bir oran gibi "başta belli olup bir daha değişmeyecek" bilgiler için kullanılır.

[[constant]] ile karıştırılır. `constant`ın değeri derleme anında bilinmek zorundadır: kaynak kodda yazılıdır ve o sözleşmenin her kopyasında aynıdır. `immutable` ise her kopyada farklı olabilir; değeri ancak sözleşme zincire yüklenirken belli olur.

Türkçede yerleşik bir karşılığı yok — "değiştirilemez değişken" hem uzun hem kendi kendisiyle çelişiyor gibi duruyor — bu yüzden kodda olduğu gibi `immutable` denir.

## Benzetme

Mezuniyet yüzüğü gibi. Yüzüğün üstündeki okul amblemi kalıptan gelir, herkeste aynıdır: bu `constant`. İçine kazınan isim ise kişiye özeldir ama kazındıktan sonra değiştirilemez: bu da `immutable`.

## Nasıl çalışır?

Fark yalnızca kuralda değil, maliyette. Sıradan bir [[state-variable|state variable]] [[storage-evm|storage]]'ta durur ve her okunuşunda zincirden okunur; bu, bir sözleşmenin en pahalı işlerinden biridir. `immutable` bir değişken ise storage'ta hiç yer tutmaz: kuruluş sırasında değeri doğrudan sözleşmenin çalışma kodunun içine yazılır. Okumak artık zincirden veri çekmek değil, kodun içindeki bir sayıyı okumaktır — kıyaslanmayacak kadar ucuzdur.

Bu yüzden kuruluştan sonra değişmeyecek her adres ve sayı için `immutable` kullanmak, kolay kazanılmış bir [[gas-optimization|gas iyileştirmesidir]].

Kısıtı da var: `immutable` yalnızca değer türlerinde kullanılabilir — sayı, adres, `bool`, sabit boyutlu bayt dizisi. Dizi, `string` ve `mapping` için yazamazsın; denersen derleyici "değer türü olmayan değişkenler immutable olamaz" diyerek durur.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Kasa {
    uint256 public constant SURUM = 1;   // derleme anında belli
    address public immutable sahip;      // kuruluşta belli olur, sonra kilitlenir

    constructor(address _sahip) {
        sahip = _sahip;
    }
}
```

## Dikkat

`immutable`, sözleşmenin tamamını [[immutability|değiştirilemez]] yapmaz; yalnızca o değişkeni kilitler. Sözleşmenin geri kalanı hâlâ durum değiştirebilir.

Kuruluşta verdiğin değeri de iyi düşün. Yanlış bir adres yazarsan düzeltmenin bir yolu yoktur: sözleşmeyi baştan yükleyip onu kullanan her yeri yeni adrese taşımaktan başka çaren kalmaz.
