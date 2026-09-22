---
term: "Visibility"
tr: "Görünürlük"
aliases: ["görünürlük", "visibility belirteci"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Bir fonksiyonun ya da değişkenin kim tarafından çağrılabileceğini belirleyen public, external, internal ve private belirteçleri."
related: [state-variable, access-control, access-control-vulnerability, encapsulation, inheritance, function]
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

Görünürlük, bir fonksiyonun ya da [[state-variable|state variable'ın]] kime açık olduğunu söyleyen belirteçtir. Solidity'de dört tanesi vardır:

- `public`: hem dışarıdan hem sözleşmenin kendi içinden çağrılabilir.
- `external`: yalnızca dışarıdan çağrılabilir.
- `internal`: yalnızca bu sözleşme ve ondan [[inheritance|miras alan]] sözleşmeler.
- `private`: yalnızca tanımlandığı sözleşme.

Solidity 0.5 sürümünden beri fonksiyonlarda belirteç yazmak zorunludur; unutursan derleyici hata verir.

## Nasıl çalışır?

`public` ve `external` olanlar sözleşmenin dış yüzünü oluşturur: derleyici bunların her biri için bir [[function-selector|fonksiyon seçicisi]] üretir ve bir işlem ancak bu fonksiyonlardan birine gidebilir. `internal` ve `private` fonksiyonların seçicisi yoktur; onlara yalnızca sözleşmenin kendi kodu içeriden atlar.

`public` bir state variable tanımladığında derleyici sana aynı adla bir okuma fonksiyonu yazar. Bu fonksiyon dışarıdan yazma izni vermez, yalnızca değeri okutur.

Pratik kural şudur: dışarıdan çağrılmayacak bir fonksiyonu `internal` yapmak sözleşmenin dış yüzünü küçültür ve "yanlışlıkla açık bırakılmış kapı" ihtimalini baştan ortadan kaldırır.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Kasa {
    uint256 private bakiye;      // yalnızca bu sözleşmenin kodu
    uint256 internal limit;      // bu sözleşme + miras alanlar

    function yatir(uint256 m) external { bakiye += m; }
    function oku() public view returns (uint256) { return bakiye; }
    function _ucret() internal pure returns (uint256) { return 5; }
}
```

## Dikkat

`private` bir gizlilik aracı değildir, bir erişim kuralıdır. `private` işaretli bir değerin zincirdeki [[storage-slot|slotu]] herkese açıktır; bir düğüme o slotu okutan herkes içeriği görür. Solidity yalnızca **başka sözleşmelerin koddan erişmesini** engeller, insanların okumasını değil. Parolayı, özel anahtarı ya da gizli kalması gereken bir sayıyı zincire yazmak, hangi belirteci koyarsan koy onu açığa çıkarmaktır.

Ters yön de en az o kadar tehlikeli: yetki isteyen bir fonksiyonu `public` bırakmak, [[access-control-vulnerability|erişim kontrolü açığının]] en sık görülen biçimidir. Görünürlük tek başına yetki denetimi değildir — kimin çağırabileceğine karar vermek [[access-control|erişim kontrolünün]] işidir, görünürlük yalnızca kapının var olup olmadığını söyler.
