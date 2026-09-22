---
term: "State Variable"
tr: "Durum değişkeni"
aliases: ["durum değişkeni", "state değişkeni"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Sözleşme gövdesinde tanımlanan, değeri zincirde kalıcı olarak saklanan değişken."
related: [storage-evm, variable, gas, visibility, storage-slot, immutable-variable]
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

State variable, bir [[smart-contract|akıllı sözleşmenin]] gövdesinde, fonksiyonların dışında tanımlanan [[variable|değişkendir]]. Değeri [[storage-evm|storage]] alanında tutulur, yani zincirde kalıcıdır: işlem bitince silinmez, sözleşmeyi bir sonraki çağıran kişi aynı değeri görür.

Fonksiyonun içinde tanımlanan yerel değişken böyle değildir. O yalnızca çağrı sürerken yaşar, çağrı bitince yok olur ve zincirde hiçbir iz bırakmaz.

## Benzetme

Duvara çivi çakmakla duvara yapışkan not yapıştırmak arasındaki fark gibi. Not akşama düşer, kimsenin umurunda olmaz. Çivi yıllarca durur — ama çakması emek ister ve duvarda kalıcı bir delik bırakır.

## Nasıl çalışır?

Her state variable derleme sırasında bir [[storage-slot|storage slotuna]] yerleştirilir; zincirde okunup yazılan şey aslında o slottur. Okumak ucuz değildir, yazmak ise bir sözleşmenin yapabileceği en pahalı işlerden biridir. Daha önce sıfır olan bir slota ilk kez değer yazmak, var olan bir değeri güncellemekten kat kat fazla [[gas|gas]] harcar.

Bu yüzden sözleşme yazarken "bu bilgiyi gerçekten zincirde tutmam gerekiyor mu?" sorusu sürekli sorulur. Bir fonksiyonun ortasında birkaç kez kullanılacak ara toplam, state variable değil yerel değişken olmalıdır. Aynı slotu bir döngü içinde tekrar tekrar güncellemek yerine sonucu yerel bir değişkende biriktirip en sonda tek seferde yazmak, en bilinen [[gas-optimization|gas iyileştirmelerinden]] biridir.

Bir state variable'a [[visibility|görünürlük]] de verirsin. `public` yazarsan derleyici, değeri dışarıdan okumaya yarayan fonksiyonu senin yerine üretir.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Sayac {
    uint256 public toplam;              // zincirde kalır

    function ekle(uint256 miktar) external {
        uint256 yeni = toplam + miktar; // çağrı bitince yok olur
        toplam = yeni;
    }
}
```

## Dikkat

"Zincirde kalıcı" ile "gizli" aynı şey değildir. Bir state variable'ı `private` işaretlesen bile değeri zincirde durur ve bir düğüme o slotu okutan herkes görebilir. Zincirde sır saklanmaz; `private` yalnızca başka sözleşmelerin koddan erişmesini engeller.
