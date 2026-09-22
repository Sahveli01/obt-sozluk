---
term: "CREATE2"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Düşük seviye çağrılar"
level: ileri
short: "Bir sözleşmenin adresini, dağıtılmadan önce hesaplanabilecek biçimde sabit girdilerden üreten oluşturma komutu."
related: [contract-address, contract-deployment, factory-pattern, minimal-proxy-clone, keccak-256, selfdestruct]
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

Normalde bir sözleşmenin [[contract-address|adresi]], onu kuran hesabın adresi ile o hesabın [[nonce-islem|nonce]]'undan üretilir. Nonce her işlemde arttığı için adres önceden kestirilemez; kaçıncı sırada dağıtım yapacağını bilmen gerekir.

`CREATE2` bu bağı koparır. Adresi sıraya değil, senin seçtiğin sabit girdilere bağlar. Böylece sözleşme daha zincire hiç çıkmamışken adresi hesaplanabilir.

Bir EVM komutunun adıdır; kodda olduğu gibi yazılır, çevrilmez.

## Benzetme

Telefonlarınız kapalıyken buluşmak gibi. Önceden bir kural belirlersiniz: "akşamüstü, hava açıksa çeşme başı, yağmurluysa üstü kapalı durak." Kural ikinizde de aynı olduğu için kimse kimseye haber vermeden aynı noktaya varırsınız. Üstelik arkadaşın oraya sen gelmeden bir paket bırakabilir — noktayı bilmek için orada bir şeyin olması gerekmez.

## Nasıl çalışır?

Adres dört şeyin birleştirilip [[keccak-256|Keccak-256]] ile özetlenmesinden çıkar: sabit `0xff` baytı, çağıranın adresi, senin seçtiğin 32 baytlık bir `salt` değeri ve dağıtılacak sözleşmenin init kodunun özeti. Sonucun son 20 baytı adrestir.

Dördü de belliyse adres de bellidir ve bu iki işe yarar. Birincisi: bir kullanıcı için ayrılmış sözleşmenin adresini, o sözleşme daha [[contract-deployment|dağıtılmadan]] hesaplayıp kullanıcıya verebilirsin. Gelen para adreste birikir, sözleşme gerçekten gerektiğinde kurulur. İkincisi: `salt` değerini oynatarak aynı koddan yüzlerce kopyayı düzenli adreslerde üretebilirsin — [[factory-pattern|fabrika]] kurgularında ve [[minimal-proxy-clone|klon]] üretiminde sık kullanılır.

Solidity'de komutu elle yazmana gerek yok; `new Kontrat{salt: ...}()` yazdığında derleyici `CREATE2` üretir.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Cuzdan { address public sahip; constructor(address s) { sahip = s; } }

contract Fabrika {
    function adresHesapla(bytes32 salt, address sahip) public view returns (address) {
        bytes32 initHash = keccak256(abi.encodePacked(type(Cuzdan).creationCode, abi.encode(sahip)));
        bytes32 h = keccak256(abi.encodePacked(bytes1(0xff), address(this), salt, initHash));
        return address(uint160(uint256(h)));
    }
    function dagit(bytes32 salt, address sahip) external returns (address) {
        return address(new Cuzdan{salt: salt}(sahip));
    }
}
```

## Dikkat

Hesaplanmış bir adres, "burada sonsuza dek şu kod duracak" anlamına gelmez. Formüldeki girdi init kodunun özetidir — yerleşecek kodun kendisi değil. Init kod, çalışırken başka bir yerden kod kopyalayacak biçimde yazılmışsa aynı `salt` ile aynı adrese başka bir kod yerleştirilebilir. Bunun için sözleşmenin önce silinmesi gerekir ve [[selfdestruct]] davranışını daraltan protokol değişikliği bu yolu büyük ölçüde kapatmıştır; yine de bir adresin kodunu peşinen değişmez kabul etmek doğru bir varsayım değildir.

Pratik sonucu şu: bir adrese güveniyorsan orada beklediğin kodun durduğunu kontrol et — [[contract-verification|doğrulanmış kaynak koduna]] bak ya da yerleşik kodun özetini kendi hesabınla karşılaştır.
