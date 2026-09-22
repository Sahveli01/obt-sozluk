---
term: "Calldata"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Bellek ve depolama"
level: orta
short: "Çağrıyla birlikte sözleşmeye gelen, değiştirilemeyen ve okuması en ucuz olan veri alanı."
related: [memory-evm, function-selector, application-binary-interface-abi, fallback-function, data-location, gas]
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

Calldata, bir çağrıyla birlikte sözleşmeye gelen veri alanıdır. Hangi fonksiyonun çalıştırılmak istendiği ve o fonksiyona hangi argümanların verildiği buradadır; [[application-binary-interface-abi|ABI]] kurallarına göre kodlanmış bir bayt dizisidir.

Üç veri alanı içinde salt okunur olan tek alan budur. Sözleşme calldata'yı okur, ona bakarak karar verir, ama içine tek bir bayt yazamaz.

Terimin yerleşmiş bir Türkçe karşılığı yok; Solidity'de `calldata` anahtar sözcük olarak geçtiği için İngilizcesiyle kullanılıyor.

## Benzetme

Eline tutuşturulan resmî bir evrak gibi. Okursun, üstünde ne yazdığını görürsün, işini ona göre yaparsın — ama üstünde bir kelimeyi bile değiştiremezsin; değiştirdiğin anda o artık aynı belge olmaz. Hesap yapman, bir şeyler karalaman gerekiyorsa fotokopisini çekip onun üstünde çalışırsın. Fotokopi işini görür ama parası cebinden çıkar.

## Nasıl çalışır?

EVM'de calldata'ya yazan bir komut yoktur; yalnızca "şuradan şu kadarını oku" diyen okuma komutları vardır. Bunun iyi bir gerekçesi var: kullanıcıdan gelen bir işlemde calldata, kullanıcının imzaladığı içeriğin ta kendisidir. Sözleşme onu değiştirebilseydi imzanın neye verildiği belirsizleşirdi.

İlk dört bayt çağrılmak istenen fonksiyonun [[function-selector|seçicisidir]]; hiçbir fonksiyonla eşleşmediğinde ne olduğu [[fallback-function|fallback]] tarafında anlatılıyor.

Ucuzluğu şuradan gelir: `external` bir fonksiyonun dizi ya da `string` parametresini `memory` olarak alırsan derleyici gelen veriyi [[memory-evm|memory]]'ye kopyalar ve sen hem kopyalamanın hem de açılan alanın parasını ödersin. `calldata` olarak alırsan kopya hiç çıkmaz; veri geldiği yerde durur, yalnızca ihtiyaç duyulan baytlar okunur. Bir diziyi baştan sona gezip toplamını almak gibi işlerde bu fark tek başına gözle görülür bir [[gas|gas]] farkıdır.

Calldata'nın kendisi de bedava değildir: işlemin taşıdığı her baytın bir ücreti vardır ve sıfır olmayan baytlar sıfırlardan pahalıdır.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Toplayici {
    // dizi kopyalanmaz, doğrudan gelen veriden okunur
    function topla(uint256[] calldata sayilar) external pure returns (uint256 t) {
        for (uint256 i; i < sayilar.length; i++) {
            t += sayilar[i];
        }
    }
}
```

## Dikkat

"Calldata ucuzmuş" diye her parametreyi calldata yapamazsın. Salt okunur olduğu için değeri değiştirmen gereken ilk anda veriyi kopyalamak zorunda kalırsın; hangi durumda hangisini seçeceğin [[data-location|veri konumu]] maddesinde.

Daha ciddi olan yanılgı ise şu: calldata gizli değildir. Bir fonksiyona gönderdiğin argümanlar işlemin içinde zincirde durur ve herkes okuyabilir. Onları `private` bir değişkene yazmak da bir şeyi değiştirmez — veri zaten yola çıkarken açıktaydı.
