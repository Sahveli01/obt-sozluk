---
term: "Abstract Contract"
tr: "Soyut sözleşme"
aliases: ["soyut sözleşme"]
category: programlama
subcategory: "Solidity kavramları"
level: ileri
short: "En az bir fonksiyonu gövdesiz bırakıldığı için tek başına zincire yüklenemeyen, miras alınmak üzere yazılan sözleşme."
related: [interface, inheritance, smart-contract, abstraction, modifier, constructor]
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

Abstract contract, bazı fonksiyonlarının gövdesi yazılmış, bazılarının yalnızca imzası bırakılmış bir sözleşmedir. `abstract contract` diye tanımlanır ve tek başına zincire yüklenemez; birinin ondan [[inheritance|miras alıp]] eksikleri doldurması gerekir.

Amacı ortak iskeleti bir kez yazmaktır: değişmeyen mantık, ortak durum ve ortak denetimler üstte durur, her çocuk sözleşme yalnızca kendine özgü kısmı yazar.

## Nasıl çalışır?

Gövdesi olmayan fonksiyonu `virtual` diye işaretlersin, dolduran sözleşmeye de `override` yazdırırsın. Derleyici hesabı tutar: eksik kalmış bir `virtual` fonksiyon varsa o sözleşmeyi yüklemene izin vermez.

[[interface|Interface]] ile farkı şudur. Interface yalnızca bir imza listesidir: durumu, kurucusu ya da gövdeli fonksiyonu olamaz ve bütün fonksiyonları dışarıya açıktır. Abstract contract ise arada durur — [[state-variable|state variable]] tutabilir, [[constructor|kurucu]] yazabilir, [[modifier]] tanımlayabilir ve fonksiyonlarının bir kısmını gerçekten uygulayabilir. Kabaca: interface bir sözleşmenin dış yüzünü tarif eder, abstract contract yarısı yazılmış bir sözleşmedir.

Abstract olmak için gövdesiz fonksiyon şart da değildir. `abstract` yazdığın an sözleşme yüklenemez hâle gelir; yalnızca miras alınsın diye yazdığın bir temel sözleşmeyi kazara zincire göndermeyi böyle engellersin.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

abstract contract Odeme {
    uint256 public toplam;                                   // ortak durum
    function ucret() public view virtual returns (uint256);  // gövdesi yok
    function ode() external {
        toplam += ucret();
    }
}
contract SabitUcret is Odeme {
    function ucret() public pure override returns (uint256) { return 10; }
}
```

## Dikkat

Soyutlamanın bedeli okunabilirliktir. Üç kat miras alınmış bir sözleşmede bir fonksiyonun hangi katmandan geldiğini izlemek zorlaşır; denetçinin de, kodu ilk kez okuyanın da işi ağırlaşır.

[[abstraction|Soyutlama]], gerçekten tekrar eden bir mantığı topluyorsa kazançtır. "İleride lazım olur" diye kurulduğunda ise elinde yalnızca fazladan bir katman kalır — üstelik akıllı sözleşmede o katmanı sonradan sökmek, sıradan bir yazılımdakinden çok daha zordur.
