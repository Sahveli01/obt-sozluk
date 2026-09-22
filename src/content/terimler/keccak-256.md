---
term: "Keccak-256"
tr: ""
aliases: ["keccak256", "keccak"]
category: kriptografi
subcategory: "Hash fonksiyonları"
level: orta
short: "Ethereum'un adres, seçici ve slot hesaplarında kullandığı 256 bitlik hash fonksiyonu; NIST'in SHA3-256'sı ile aynı değildir."
related: [hash-function, sha-256, function-selector, contract-address, storage-slot, log]
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

Keccak, NIST'in 2007'de açtığı SHA-3 yarışmasını 2012'de kazanan hash fonksiyonu tasarımıdır. Keccak-256, bu tasarımın 256 bitlik çıktı veren ayarıdır ve Ethereum'un her yerinde karşına çıkar.

Ethereum'da bir şeyin adı ya da yeri hesaplanacaksa iş buradan geçer: bir hesabın adresi açık anahtarın Keccak-256 özetinin son 20 baytıdır. [[contract-address|Sözleşme adresi]], [[function-selector|fonksiyon seçicisi]], bir [[log|event]] kaydının konu alanı ve bir mapping'in [[storage-slot|storage slotu]] — hepsi bir şeylerin Keccak-256 özetinden çıkar.

## Nasıl çalışır?

SHA-2 ailesinin aksine Keccak, **sünger (sponge)** denen bir yapı kullanır. Adı işi iyi anlatıyor: geniş bir iç durum vardır, girdi parça parça bu duruma "emdirilir" (absorb), sonra durum karıştırılıp istenen kadar bayt "sıkılır" (squeeze).

Bu yapının pratik bir sonucu var: çıktı uzunluğu tasarımın dışarıdan ayarlanan bir parametresidir, fonksiyonun sabiti değil. Aynı çekirdekten 256 bit de sıkabilirsin 512 bit de. Bir sonucu daha var: SHA-2'yi etkileyen uzunluk uzatma tuzağı sünger yapısında geçerli değildir, çünkü çıktı iç durumun tamamı değil bir bölümüdür.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Taahhut {
    mapping(address => bytes32) public taahhutler;

    function taahhutVer(uint8 secim, bytes32 gizli) external {
        taahhutler[msg.sender] = keccak256(abi.encodePacked(secim, gizli));
    }
}
```

Seçimi açıkça yazmak yerine özetini yazarsın; sonradan `secim` ve `gizli` değerlerini gösterdiğinde herkes aynı hesabı yapıp doğrulayabilir.

## Dikkat

**Keccak-256 ile SHA3-256 aynı şey değildir.** NIST, Keccak'ı 2015'te SHA-3 adıyla standartlaştırırken dolgu (padding) adımına fazladan birkaç bit ekledi. Çekirdek aynı kaldı, dolgu değişti — ve dolgu değişince çıktı da değişti. Aynı girdiyi verirsen iki fonksiyon iki farklı değer döndürür.

Ethereum, standart kesinleşmeden önce özgün Keccak dolgusuyla yola çıkmıştı ve uyumu bozmamak için orada kaldı. Yani Solidity'deki `keccak256` fonksiyonu SHA3-256 **değildir**. Solidity'nin eski sürümlerinde bu yerleşik fonksiyon `sha3()` adıyla duruyordu; isim SHA-3 olduğu için değil, olmadığı için değiştirildi.

Bunun pratik bedeli şudur: zincir dışındaki bir servisin, zincirdekiyle aynı değeri üretmesi gerekiyorsa kütüphanenin `sha3_256` değil `keccak_256` çağrısını kullanması gerekir. Yanlış olanı seçersen hata almazsın — sessizce yanlış bir değer alırsın, ki bu daha kötüsüdür. [[sha-256|SHA-256]] ise bambaşka bir ailedir, ikisini de karıştırma.
