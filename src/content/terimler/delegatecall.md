---
term: "Delegatecall"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Düşük seviye çağrılar"
level: ileri
short: "Başka bir adresteki kodu, çağıran sözleşmenin depolama alanı ve kimliği üzerinde çalıştıran düşük seviye çağrı."
related: [call-low-level, proxy-contract, delegatecall-vulnerability, storage-collision, upgradeable-contract, library-solidity]
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

`delegatecall`, başka bir adresteki kodu **kendi sözleşmenin içinde** çalıştıran düşük seviye çağrıdır. [[call-low-level|`call`]] ile farkı tek cümlede özetlenir: `call`'da kod karşı tarafın evinde çalışır, `delegatecall`'da senin evinde.

Kod hedef adresten okunur, ama çalışırken dokunduğu her şey çağıranındır: [[storage-evm|depolama alanı]], bakiye ve `address(this)` senin sözleşmene aittir.

Bir anahtar kelime olduğu için çevrilmez.

## Benzetme

Bir yemeği ustanın kendi lokantasında yaptırmakla, ustayı kendi mutfağına çağırmak arasındaki fark gibi. Tarif ikisinde de aynıdır. Ama usta senin mutfağına girdiğinde senin dolabındaki malzemeyi harcar, senin raflarının yerini değiştirir ve çıkan yemek senin adına servis edilir. Tarife güvenmen yetmez; o mutfağa kimi soktuğuna da güvenmen gerekir.

## Nasıl çalışır?

EVM hedef adresteki [[bytecode|bayt kodunu]] alır ama çalışma bağlamını değiştirmez. Kod depolamaya yazdığında yazdığı yer senin sözleşmenin slotudur; bakiyeyi okuduğunda senin bakiyeni görür.

[[msg-sender|`msg.sender`]] ve [[msg-value|`msg.value`]] de korunur: hedef kod, çağrıyı sana kimin yaptığını ve ne kadar ETH geldiğini olduğu gibi görür, araya bir halka girmemiş gibi davranır. [[proxy-contract|Proxy]] kurguları tam olarak bunun üzerine oturur — kullanıcı proxy'ye çağrı yapar, proxy çağrıyı mantık sözleşmesine devreder, mantık sözleşmesi de kullanıcıyı doğrudan kendisi görür. Veri proxy'de kaldığı için mantık adresi sonradan değiştirilebilir; [[upgradeable-contract|yükseltilebilir sözleşmelerin]] temeli budur.

Bir de değişken düzeni meselesi var. Hedef kod, değişkenleri kendi kaynak dosyasındaki sıraya göre numaralanmış [[storage-slot|slotlara]] yazar. Çağıran sözleşmede aynı numaralı slotta başka bir değişken duruyorsa kod onu ezer.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Sayac {
    uint256 public deger;                     // slot 0
    function artir() external { deger += 1; }
}

contract Kabuk {
    uint256 public deger;                     // slot 0 — aynı hizada olmalı
    function artirVekaleten(address mantik) external {
        (bool ok, ) = mantik.delegatecall(abi.encodeWithSignature("artir()"));
        require(ok, "cagri basarisiz");       // Sayac'in kodu Kabuk'un slot 0'ini artirir
    }
}
```

## Dikkat

Riski tek cümlede: hedef adrese güvenmek, ona sözleşmenin tamamını teslim etmektir. Çağırdığın kod senin depolama alanında, senin adresinle ve senin bakiyenle çalışır; isterse bütün değişkenlerini değiştirir, isterse bütün parayı dışarı yollar ([[delegatecall-vulnerability|delegatecall açığı]]). Hedef adresi kullanıcıdan parametre olarak alan bir fonksiyon, sözleşmeyi herkese açık bir kumanda koluna çevirir.

İkinci risk daha sinsi: iki tarafın değişken düzeni birebir uyuşmazsa kod yanlış slota yazar ve kimse bunu hata olarak bildirmez, değer sessizce bozulur ([[storage-collision|depolama çakışması]]). Proxy kurgularında yönetim değişkenlerinin sabit ve rastgele seçilmiş slotlara konmasının sebebi budur.

Üçüncüsü: hedef adreste hiç kod yoksa `delegatecall` başarısız olmaz, `true` döndürür. Boş bir adrese vekalet verip "çalıştı" sanmak mümkündür.
