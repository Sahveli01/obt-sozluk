---
term: "Data Location"
tr: "Veri konumu"
aliases: ["veri konumu"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Bir değişkenin verisinin nerede durduğunu söyleyen storage, memory ve calldata belirteçleri."
related: [storage-evm, memory-evm, calldata, state-variable, gas, mapping]
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

Solidity'de dizi, `struct` ve `mapping` gibi bileşik türlerde verinin nerede durduğunu ayrıca yazarsın. Üç yer vardır:

- [[storage-evm|`storage`]]: zincirdeki kalıcı alan. [[state-variable|State variable'lar]] burada yaşar.
- [[memory-evm|`memory`]]: yalnızca çağrı sürerken var olan geçici alan; çağrı bitince silinir.
- [[calldata]]: gelen işlemin salt okunur veri alanı. Değiştirilemez, ama en ucuzudur.

## Benzetme

Sınıf panosundaki listeye kalem uzatmakla, listeyi bir kâğıda kopyalayıp o kâğıdın üstünü çizmek arasındaki fark gibi. İkisinde de aynı satırları görürsün, ikisine de yazabilirsin. Ama kâğıda ne yaparsan yap panodaki liste olduğu gibi kalır.

## Nasıl çalışır?

Belirteç aslında tek bir şeye karar verir: elindeki değişken asıl veriye bir işaret mi, yoksa onun kopyası mı. `storage` yazdığında yeni bir veri oluşmaz; zincirdeki asıl veriye işaret edersin ve üstünde yaptığın değişiklik doğrudan zincire yazılır. `memory` yazdığında veri kopyalanır ve kopyada yaptığın değişiklik hiçbir yere ulaşmaz.

Maliyet sıralaması da buradan gelir: `calldata` en ucuz, `memory` ortada, `storage` açık ara en pahalıdır — ayrıntısı [[gas]] tarafında. Dışarıdan gelen ve değiştirmeyeceğin bir dizi parametresini `calldata` olarak almak, gereksiz bir kopyalamadan kurtarır.

[[mapping|Mapping]]'ler yalnızca `storage`'ta yaşar; bir mapping'i `memory`'ye kopyalayamaz, parametre olarak alamaz ve döndüremezsin.

## Örnek

Yeni başlayanın en çok takıldığı yer, tek bir kelimenin sessizce her şeyi değiştirmesidir:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Liste {
    uint256[] public sayilar;
    function kalici(uint256 i) external {
        uint256[] storage s = sayilar;  // zincirdeki diziye işaret eder
        s[i] *= 2;                      // kalıcı olarak değişir
    }
    function gecici(uint256 i) external view returns (uint256) {
        uint256[] memory m = sayilar;   // kopya çıkarır
        m[i] *= 2;                      // zincirde değişen bir şey olmaz
        return m[i];
    }
}
```

## Dikkat

Bir `struct`'ı fonksiyon içinde `memory` olarak alıp alanlarını değiştirmek ve sonra "neden zincirde değişmedi?" diye şaşırmak, Solidity öğrenirken neredeyse herkesin bir kez düştüğü tuzaktır. Kod derlenir, işlem başarılı döner, hiçbir hata görmezsin — yalnızca hiçbir şey olmaz.

Derleyici çoğu yerde belirteci yazmanı zorunlu tutar. Tutmadığı yerlerde de varsayılanı ezberlemek yerine açıkça yazmak daha güvenlidir.
