---
term: "Receive Function"
tr: ""
aliases: ["receive", "receive fonksiyonu"]
category: programlama
subcategory: "Solidity kavramları"
level: ileri
short: "Bir sözleşmeye hiç veri gönderilmeden düz ETH transferi yapıldığında çalışan özel fonksiyon."
related: [fallback-function, payable, smart-contract, msg-value, gas, call-low-level]
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

`receive`, bir sözleşmeye düz ETH transferi yapıldığında — yani çağrıda hiç veri yokken — çalışan özel fonksiyondur. Adı yoktur, parametre almaz, değer döndürmez ve her zaman `external payable` yazılır.

Sözleşmede `receive` yoksa ve [[fallback-function|`fallback`]] de [[payable|`payable`]] değilse, sözleşmeye gönderilen düz ETH transferi geri çevrilir. Yani bir sözleşmenin ETH kabul etmesini istiyorsan bunu açıkça yazman gerekir.

`receive` burada bir anahtar kelimedir, Türkçeye çevrilmez.

## Nasıl çalışır?

EVM gelen çağrıya bakar ve şu sırayı izler:

1. Çağrıda veri **yoksa**: `receive` varsa o çalışır. Yoksa `fallback` `payable` ise o çalışır. İkisi de yoksa işlem geri çevrilir.
2. Çağrıda veri **varsa**: `receive` hiç devreye girmez. Veri var olan bir fonksiyonla eşleşiyorsa o fonksiyon, eşleşmiyorsa `fallback` çalışır.

Ayrımın ETH gönderilip gönderilmediğiyle değil, çağrıda veri olup olmadığıyla belirlendiğine dikkat et. "Cüzdanımdan sözleşmeye 0.1 ETH yolladım" dediğinde çalışan şey `receive`'dir.

Bir de gas tarafı var. `transfer` ve `send` ile gönderilen ETH, alıcıya yalnızca 2300 [[gas]] bırakır; bu, bir olay yayımlamaya bile zor yeten bir bütçedir. `receive` içine ağır iş koyarsan bu yolla sana para göndermeye çalışan herkesin işlemi başarısız olur. Bugün önerilen yol, gas sınırı dayatmayan [[call-low-level|`call`]] ile göndermektir.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Kasa {
    event Geldi(string yol, uint256 miktar);

    receive() external payable {
        emit Geldi("receive", msg.value);    // calldata boşsa burası çalışır
    }

    fallback() external payable {
        emit Geldi("fallback", msg.value);   // eşleşmeyen çağrı buraya düşer
    }
}
```

## Dikkat

`receive`, sözleşme bakiyesinin tek giriş kapısı değildir. `selfdestruct` ile gönderilen ETH ve bir bloğun ödül adresi olarak seçilmek, hiçbir kod çalıştırmadan bakiyeni artırabilir. Bu yüzden "bakiyem tam olarak `receive` içinde saydığım kadardır" varsayımına dayanan sözleşmeler kırılgandır; bakiyeyi ayrı bir sayaçta tutmak daha sağlamdır.

Bir de `receive` içine koyduğun her satır, sana ETH gönderen herkesin ödeyeceği maliyeti artırır. Burayı mümkün olduğunca boş tutmak yerleşik bir alışkanlıktır.
