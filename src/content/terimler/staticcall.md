---
term: "Staticcall"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Düşük seviye çağrılar"
level: ileri
short: "Çağrılan kodun zincirde hiçbir şeyi değiştirmesine EVM düzeyinde izin vermeyen, salt okunur düşük seviye çağrı."
related: [call-low-level, view-function, pure-function, delegatecall, cross-contract-call, oracle]
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

`staticcall`, başka bir sözleşmeden veri okumak için kullanılan düşük seviye çağrıdır. [[call-low-level|`call`]]'dan tek farkı şudur: çağrılan kod zincirde hiçbir şeyi değiştiremez. Denerse çağrı orada geri sarar.

Önemli olan, bu yasağın karşı sözleşmenin iyi niyetine bırakılmaması. Kuralı [[ethereum-virtual-machine-evm|EVM]]'in kendisi uygular; hedef kodun nasıl yazıldığı ya da nasıl derlendiği hiç sorulmaz.

Bir anahtar kelime olduğu için çevrilmez.

## Benzetme

Arşiv odasına girerken kalemini girişte teslim etmen gibi. İçeride bütün dosyaları okuyabilir, istediğin kadar not alıp çıkabilirsin. Ama yazacak bir şeyin yoktur; kuralı senin dikkatine emanet etmezler, aleti elinden alırlar.

## Nasıl çalışır?

Bunu çoğu geliştirici hiç elle yazmadan kullanır: [[view-function|`view`]] ya da [[pure-function|`pure`]] işaretli bir fonksiyonu başka bir sözleşme üzerinden çağırdığında derleyici çağrıyı senin için `staticcall` olarak üretir.

Yasak listesi nettir: depolamaya yazmak, [[event-smart-contract|olay]] yayımlamak, yeni sözleşme oluşturmak, sözleşme yok etmek ve sıfırdan farklı miktarda ETH taşıyan bir çağrı yapmak. Bunlardan biri denenirse çalışma orada durur.

Kısıt çağrı zincirinin devamına da geçer. `staticcall` içinden yapılan çağrılar da aynı kuralla bağlıdır; araya bir [[delegatecall]] girse bile okuma kipinden çıkılmaz.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IToken {
    function balanceOf(address sahip) external view returns (uint256);
}

contract Okuyucu {
    function bakiye(address token, address sahip) external view returns (uint256) {
        return IToken(token).balanceOf(sahip);   // derleyici STATICCALL üretir
    }
}
```

## Dikkat

`staticcall`'ı bir güvenlik kalkanı sanma. Doğru olan şu: çağırdığın kod senin durumunu değiştiremez, dolayısıyla klasik biçimiyle [[reentrancy-attack|yeniden giriş]] yapamaz. Ama okuduğun **verinin doğru olduğunu** garanti etmez. Karşı sözleşme sana istediği sayıyı döndürebilir; hesabı aynı işlem içinde biraz önce oynanmış bir değeri okuyor da olabilirsin. Fiyat gibi kritik verilerde tek bir okumaya yaslanmak ([[oracle]] tasarımının klasik sorunu) yine risklidir.

İkinci nokta bir ayrım: `view` işareti derleyicinin verdiği bir sözdür — o fonksiyonun gövdesinde yazma işlemi üretilmemesini sağlar. `staticcall` ise aynı güvenceyi çağrı tarafında, zincir üzerinde kurar. Birine bakıp diğerini varsayma; okuduğun sözleşmenin kaynak kodunu görmüyorsan seni koruyan şey ikincisidir.
