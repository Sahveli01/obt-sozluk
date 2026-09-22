---
term: "Modifier"
tr: ""
aliases: ["fonksiyon değiştirici"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Bir fonksiyonun gövdesini ortak bir denetimle sarmalayan, tekrar eden kodu tek yerde toplayan Solidity yapısı."
related: [access-control, ownable, require, reentrancy-guard, function, dry]
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

`modifier`, bir fonksiyonun gövdesini sarmalayan küçük bir kod parçasıdır. Fonksiyonun adının yanına yazılır ve fonksiyon çalışmadan önce — istersen sonra da — bir şeyler yapar. En yaygın kullanımı denetimdir: "bunu yalnızca sahip çağırabilir", "sözleşme duraklatılmışsa çalışma", "bu fonksiyona yeniden girilemesin".

Türkçede yerleşmiş bir karşılığı yok. "Değiştirici" denince fonksiyonun verisini değiştirdiği sanılıyor, oysa yaptığı iş sarmalamak; bu yüzden kodda olduğu gibi `modifier` diye anılıyor.

## Nasıl çalışır?

Modifier'ın gövdesinde `_;` diye bir satır bulunur. Derleme sırasında fonksiyonun asıl gövdesi tam olarak o satırın yerine yerleştirilir. Yani `_;` öncesindeki kod fonksiyondan önce, sonrasındaki kod fonksiyondan sonra çalışır.

Bunun iki sonucu var. Birincisi, `_;` yazmayı unutursan fonksiyonun gövdesi hiç çalışmaz ve derleyici bunu hata saymaz — elinde sessizce hiçbir şey yapmayan bir fonksiyon kalır. İkincisi, bir fonksiyona birden çok modifier verebilirsin; yazdığın sırayla, iç içe uygulanırlar.

Modifier aynı denetimi tekrar tekrar yazmaktan kurtarır ([[dry|DRY]]) ama kendisi her kullanıldığı yere kopyalandığı için sözleşmenin boyutunu büyütür. Uzun denetimleri `internal` bir fonksiyona taşıyıp modifier'ın içinden çağırmak bu yüzden yaygın bir alışkanlıktır.

Pratikte en çok göreceğin modifier, [[access-control|erişim kontrolünde]] kullanılan `onlyOwner`'dır; [[ownable|Ownable]] bunu hazır verir. [[reentrancy-guard|Yeniden giriş kilidi]] de bir modifier olarak yazılır.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Kasa {
    address public sahip = msg.sender;

    modifier yalnizcaSahip() {
        require(msg.sender == sahip, "yetkisiz");
        _;                  // fonksiyonun gövdesi buraya gelir
    }

    function sahipDegistir(address yeni) external yalnizcaSahip {
        sahip = yeni;
    }
}
```

## Dikkat

Modifier bir denetim yeridir, iş yapma yeri değil. İçinde durum değiştirmek ya da başka bir sözleşmeye çağrı yapmak hem okunması zor hem güvenlik açısından riskli bir yapı doğurur: fonksiyona bakan kişi kodun bir kısmının başka bir yerde çalıştığını görmez. Denetimini [[require|`require`]] ya da bir hata fırlatmayla kısa tut, işi fonksiyonun kendisine bırak.
