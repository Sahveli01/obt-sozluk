---
term: "Cross-contract Call"
tr: "Sözleşmeler arası çağrı"
aliases: []
category: akilli-sozlesmeler
subcategory: "Temeller"
level: orta
short: "Bir sözleşmenin, aynı işlemin içinde başka bir sözleşmenin fonksiyonunu çağırması."
related: [composability, call-low-level, delegatecall, msg-sender, reentrancy-attack, application-binary-interface-abi]
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

Sözleşmeler arası çağrı, çalışmakta olan bir sözleşmenin başka bir adresteki sözleşmeye iş yaptırmasıdır. Kullanıcı tek bir işlem gönderir; o işlem içeride birkaç sözleşmeyi arka arkaya çalıştırabilir. [[composability|Birleştirilebilirliğin]] teknik karşılığı budur.

## Nasıl çalışır?

Çağıran sözleşme, hedefin adresini ve çağrılacak fonksiyonu tanımlayan veriyi hazırlar; verinin başındaki [[function-selector|fonksiyon seçicisi]] hedefin hangi fonksiyonunun çalışacağını belirler.

Çağrı yeni bir yürütme bağlamı açar. En sık gözden kaçan sonuç şudur: hedef sözleşmenin içinde [[msg-sender|msg.sender]] artık kullanıcı değil, **çağıran sözleşmedir**. Yetkilendirmesini bu değere bakarak yapan bir sözleşme beklenmedik biçimde davranabilir.

Hedefe o an kalan gasın tamamı değil, 63/64'ü aktarılır; geriye bırakılan pay, hedef başarısız olsa bile çağıranın toparlanabilmesi içindir. Yüksek seviyeli bir çağrıda hedef hata verirse hata yukarı taşınır ve bütün işlem geri alınır.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IKasa {
    function yatir(uint256 miktar) external;
}

contract Yonlendirici {
    function gonder(address kasa, uint256 miktar) external {
        IKasa(kasa).yatir(miktar);
    }
}
```

`Yonlendirici`, kasanın kodunu bilmez. Bildiği tek şey hangi fonksiyonun hangi imzayla çağrılacağıdır; gerisi karşı tarafın sorumluluğundadır.

## Dikkat

Başka bir sözleşmeyi çağırdığın anda kontrolü ona devretmiş olursun. Hedef, sana geri dönüp senin fonksiyonunu yeniden çağırabilir; [[reentrancy-attack|yeniden giriş saldırısı]] tam olarak böyle işler. Bu yüzden dış çağrıyı en sona bırakmak ve kendi durumunu ondan önce güncellemek yerleşik bir kuraldır.

[[delegatecall|Delegatecall]] ile karıştırma: orada başkasının kodu senin deponun üstünde çalışır, burada hedef sözleşme kendi deposunda çalışır.
