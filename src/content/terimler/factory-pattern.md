---
term: "Factory Pattern"
tr: "Fabrika kalıbı"
aliases: ["fabrika kalıbı"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: orta
short: "Sözleşmeleri elle tek tek dağıtmak yerine, onları üreten ve kaydını tutan bir sözleşme kullanma kalıbı."
related: [minimal-proxy-clone, create2, contract-deployment, contract-address, composability]
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

Fabrika, başka sözleşmeler üreten bir sözleşmedir. Bir uygulamada aynı şablondan çok sayıda örnek gerekiyorsa — her kullanıcı için bir kasa, her token çifti için bir havuz, her kampanya için bir kilit sözleşmesi — bunları geliştiricinin tek tek dağıtması gerekmez. Kullanıcı fabrikanın bir fonksiyonunu çağırır, yeni sözleşme o işlemin içinde doğar.

Solidity'de bunu sağlayan şey `new` anahtar sözcüğüdür: bir sözleşme, çalışma anında başka bir sözleşmeyi zincire yazabilir.

## Nasıl çalışır?

Fabrikanın iki işi vardır. Birincisi üretmek: örneği dağıtır, kurucu parametrelerini verir, sahibini `msg.sender` olarak işaretler. İkincisi — ve asıl değerli olanı — **kaydını tutmaktır**: üretilen her adresi bir listeye ya da eşlemeye yazar ve bir olay yayar.

Bu kayıt olmadan, dışarıdan bakan biri bir adresin gerçekten o uygulamaya ait olup olmadığını anlayamaz. Herkes aynı arayüze sahip sahte bir sözleşme dağıtabilir. "Bu adresi resmî fabrika mı üretti?" sorusunun cevabı zincirden okunabildiği için fabrika, [[composability|bileşebilirliğin]] dayandığı güven noktalarından biri olur.

[[create2]] kullanıldığında üretilecek [[contract-address|sözleşme adresi]] önceden hesaplanabilir; arayüz, sözleşme henüz [[contract-deployment|dağıtılmadan]] adresini gösterebilir.

## Örnek

```solidity
contract Kasa { address public sahip; constructor(address s) { sahip = s; } }

contract KasaFabrikasi {
    address[] public kasalar;
    event KasaOlusturuldu(address kasa, address sahip);

    function olustur() external returns (address) {
        Kasa k = new Kasa(msg.sender);
        kasalar.push(address(k));
        emit KasaOlusturuldu(address(k), msg.sender);
        return address(k);
    }
}
```

## Dikkat

`new` ile dağıtım, sözleşmenin tüm bayt kodunu zincire yazar ve pahalıdır. Aynı şablondan çok sayıda örnek üretiyorsan [[minimal-proxy-clone|minimal proxy]] ile klon dağıtmak çok daha ucuza gelir.

Fabrikanın kendisi de bir yetki noktasıdır. Üretilen örneklerin şablonunu değiştirebilen bir fabrika, yarın ürettiği sözleşmelerin davranışını da değiştirebilir; daha önce üretilmiş olanlar ise ilk hâlleriyle kalır.
