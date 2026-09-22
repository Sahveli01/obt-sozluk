---
term: "Library (Solidity)"
tr: ""
aliases: ["solidity library", "using for"]
category: programlama
subcategory: "Solidity kavramları"
level: ileri
short: "Zincire bir kez yüklenip birçok sözleşmenin ortak kullanabildiği, kendi durumu olmayan özel sözleşme türü."
related: [library-yazilim, delegatecall, openzeppelin, smart-contract, contract-size-limit, gas-optimization]
disambiguation: [library-yazilim]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Solidity'de `library`, tıpkı `contract` gibi bir anahtar kelimedir ve özel bir sözleşme türü tanımlar. Kendi [[state-variable|durumu]] olmaz, bakiye tutamaz, miras alınamaz ve doğrudan kullanıcıya hizmet vermez. Tek işi, birden çok sözleşmenin ortak kullandığı fonksiyonları tek bir yerde toplamaktır.

Kelime burada çevrilmez: bir anahtar kelimedir ve kodda olduğu gibi yazılır.

## Nasıl çalışır?

İki kullanım biçimi vardır ve aradaki fark önemlidir.

Kütüphanenin bütün fonksiyonları `internal` ise ayrı bir adrese yüklenmez; derleyici kodu onu kullanan sözleşmenin içine kopyalar. Yaygın durum budur ve faydası düzenli koddur, ucuzluk değil.

En az bir fonksiyon `public` ya da `external` ise kütüphane zincire kendi adresine yüklenir ve onu kullanan sözleşmeler oraya [[delegatecall]] ile gider. Delegatecall, kütüphanenin kodunu *çağıran sözleşmenin* depolama alanı ve kimliği üzerinde çalıştırır; yani kütüphane çağıranın verisiyle iş görür ama veriyi kendi üstünde tutmaz. Birçok sözleşme aynı kodu paylaştığı için hem yükleme maliyeti hem de [[contract-size-limit|sözleşme boyutu sınırı]] baskısı azalır ([[gas-optimization|gas iyileştirmesi]]).

`using Matematik for uint256;` satırı ise yalnızca yazım kolaylığıdır: kütüphanenin fonksiyonlarını o türün metoduymuş gibi çağırabilirsin ve derleyici `x.karesi()` yazdığını `Matematik.karesi(x)` hâline getirir.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library Matematik {
    function karesi(uint256 x) internal pure returns (uint256) {
        return x * x;
    }
}
contract Hesap {
    using Matematik for uint256;
    function dene(uint256 x) external pure returns (uint256) {
        return x.karesi();   // Matematik.karesi(x) ile birebir aynı
    }
}
```

## Dikkat

Aynı kelime yazılımın geri kalanında bambaşka bir şeydir: orada kütüphane, projene eklediğin hazır bir kod paketidir ([[library-yazilim]]). Solidity'deki `library` ise bir dil yapısıdır — paket değil, durumu olmayan bir sözleşme türü.

Bir de yüklenmiş bir kütüphaneye `delegatecall` ile gitmek, o kodun senin deponda çalışmasına izin vermek demektir. Kütüphane bozuksa ya da adresi yanlışsa hasar senin sözleşmende olur; [[openzeppelin]] gibi yaygın kullanılan ve denetlenmiş kütüphanelerin tercih edilmesinin sebebi budur.
