---
term: "Custom Error"
tr: "Özel hata"
aliases: ["özel hata"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Uzun hata mesajı yazmak yerine adlandırılmış ve parametre alabilen bir hata tipi tanımlayıp revert ile fırlatma yöntemi."
related: [revert, require, error-handling, gas-optimization, application-binary-interface-abi, assert]
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

Custom error, bir hatayı metin yerine adlandırılmış bir tip olarak tanımlamaktır. Önce `error YetersizBakiye(uint256 istenen, uint256 mevcut);` diye bildirirsin, sonra gerektiğinde `revert YetersizBakiye(100, 40);` diye fırlatırsın.

Eskiden alışılmış yol `require(kosul, "yetersiz bakiye")` yazmaktı. Metin yolu hâlâ çalışır ama iki sıkıntısı var: mesaj bütün uzunluğuyla sözleşmenin koduna gömülür ve hatayı alan uygulamanın elinde düz bir cümleden başka bir şey kalmaz.

## Benzetme

Bir başvuru reddedilirken sayfalarca gerekçe yazmakla "Ret kodu 14 — istenen 100, mevcut 40" yazmak arasındaki fark gibi. İkincisi hem çok daha az yer kaplar hem de kod tablosunu bilen bir yazılım onu okuyup kendi cümlesini kurabilir.

## Nasıl çalışır?

Hata fırlatıldığında geriye dönen şey hata adının dört baytlık özeti ve parametrelerdir; tıpkı bir fonksiyon çağrısı gibi kodlanır ve [[application-binary-interface-abi|ABI]]'de yer alır. Metin mesajında ise bütün cümle karakter karakter taşınır.

Bunun iki faydası var. Birincisi maliyet: uzun mesaj hem sözleşmenin boyutunu büyütür hem de hata anında daha fazla veri üretir; custom error ise dört bayt ve birkaç sayıyla iş görür. Kazanç, mesaj ne kadar uzunsa o kadar belirginleşir ([[gas-optimization|gas iyileştirmesi]]).

İkincisi bilgi. "Yetersiz bakiye" cümlesi ne istendiğini ve ne olduğunu söylemez; `YetersizBakiye(100, 40)` söyler. Arayüz bu sayıları alıp kullanıcıya gerçekten işine yarayan bir uyarı gösterebilir.

Custom error [[revert]] ile fırlatılır. Solidity 0.8.26 ile birlikte [[require|`require`]] de bir custom error alabilir hâle geldi, ama yaygın yazım hâlâ `if (!kosul) revert Hata();` biçimindedir.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

error YetersizBakiye(uint256 istenen, uint256 mevcut);

contract Kasa {
    mapping(address => uint256) public bakiye;
    function cek(uint256 miktar) external {
        uint256 m = bakiye[msg.sender];
        if (miktar > m) revert YetersizBakiye(miktar, m);
        bakiye[msg.sender] = m - miktar;
    }
}
```

## Dikkat

Custom error hata ayıklamayı zorlaştırabilir: geriye dönen şey dört baytlık bir seçicidir ve tanımını bilmeyen bir araç bunu okunur bir cümleye çeviremez. Sözleşmenin ABI'si elinde olanlar sorun yaşamaz, log'a çıplak gözle bakan herkes yaşar.

Bir de her hata custom error olmak zorunda değil. [[assert]] ile anlatılan "buraya hiç gelinmemeli" durumu başka bir şeydir; custom error, kullanıcının yapabileceği bir yanlışı anlatmak içindir.
