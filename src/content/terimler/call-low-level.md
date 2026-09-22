---
term: "Call (Low-level)"
tr: ""
aliases: ["düşük seviye çağrı"]
category: akilli-sozlesmeler
subcategory: "Düşük seviye çağrılar"
level: orta
short: "Bir adrese, arayüzünü bilmeden ham veri ve ETH gönderen düşük seviye çağrı; sonucu dönüş değeriyle bildirir."
related: [cross-contract-call, delegatecall, unchecked-external-call, reentrancy-attack, receive-function, checks-effects-interactions]
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

`call`, bir adrese doğrudan ham veri gönderen düşük seviye çağrıdır. Karşı tarafın hangi fonksiyonlara sahip olduğunu bilmek zorunda değilsin: bir adres, bir bayt dizisi ve istersen bir miktar ETH verirsin, [[ethereum-virtual-machine-evm|EVM]] bunu olduğu gibi iletir.

Normal bir [[cross-contract-call|sözleşmeler arası çağrı]] yazdığında derleyici senin için tür kontrolü yapar, veriyi kodlar ve karşı taraf hata verirse işlemi geri sarar. `call` bunların hiçbirini yapmaz. Hem daha esnektir hem de sorumluluğun tamamı sende kalır.

`call` bir dil öğesidir, kodda hep İngilizce yazılır; yerleşik bir Türkçe karşılığı yoktur.

## Nasıl çalışır?

`call` iki şey döndürür: işin başarılı olup olmadığını söyleyen bir `bool` ve karşı tarafın geri verdiği ham baytlar.

Kritik nokta şu: çağırdığın kod geri sarsa bile **senin işlemin geri sarmaz**. Yalnızca birinci değer `false` olur.

Gönderdiğin bayt dizisi genelde [[application-binary-interface-abi|ABI]] kurallarına göre hazırlanır: ilk dört bayt çağrılacak fonksiyonun [[function-selector|seçicisi]], kalanı parametrelerdir. Boş bir bayt dizisi gönderirsen karşı sözleşmenin [[receive-function|`receive`]] fonksiyonu çalışır — düz ETH göndermenin yolu budur.

Bir de [[gas]] tarafı var: `call`, aksini yazmazsan elindeki bütçenin neredeyse tamamını karşı tarafa devreder.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Kasa {
    function gonder(address payable alici, uint256 miktar) external {
        (bool ok, ) = alici.call{value: miktar}("");
        require(ok, "transfer basarisiz");
    }
}
```

## Dikkat

İki klasik hata var.

Birincisi dönüş değerini kontrol etmemek. Derleyici uyarır ama kod yine derlenir; transfer başarısız olsa bile sözleşmen "gönderdim" diye yoluna devam eder ([[unchecked-external-call|kontrol edilmeyen dış çağrı]]).

İkincisi, çağırdığın kodun sana geri dönebileceğini unutmak. `call` karşı tarafa bol bütçe bırakır; o kod da daha sen işini bitirmeden senin bir fonksiyonunu yeniden çağırabilir ([[reentrancy-attack|yeniden giriş saldırısı]]). Korunma yolu durumu dış çağrıdan önce güncellemektir ([[checks-effects-interactions]]).

Son olarak: ETH göndermek için bugün önerilen yol `call`'dır. `transfer` ve `send` alıcıya yalnızca 2300 birimlik sabit bir bütçe bırakır; alıcı sözleşme kendi tarafında ufak bir iş yapıyorsa bu sınır transferi kırar. Maliyetler protokol güncellemeleriyle değiştiği için sabit bir bütçeye yaslanmak kırılgan bir tercihtir.
