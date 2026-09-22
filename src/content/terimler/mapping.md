---
term: "Mapping"
tr: "Eşleme"
aliases: ["eşleme", "mapping türü"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Bir anahtardan bir değere giden, akıllı sözleşmelerde adres–bakiye gibi tabloları tutmakta kullanılan veri yapısı."
related: [hash-map-dictionary, data-location, storage-evm, state-variable, struct, storage-slot]
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

`mapping`, bir anahtardan bir değere giden tablodur. `mapping(address => uint256)` her adres için bir sayı tutar; akıllı sözleşmelerde en çok kullanılan yapıdır, çünkü "kimin ne kadarı var" sorusunun doğal cevabı budur.

Python'daki `dict`e ya da JavaScript'teki nesneye benzer — ama benzerlik burada biter. Bir [[hash-map-dictionary|sözlükten]] üç önemli farkı vardır ve üçü de tasarımını doğrudan etkiler:

- **Dolaşılamaz.** Üzerinde döngü kuramazsın, içindeki anahtarları listeleyemezsin.
- **Uzunluğu yoktur.** "Kaç kayıt var" diye soramazsın.
- **Her anahtar zaten vardır.** Hiç dokunulmamış bir anahtarı okursan hata almazsın; türün varsayılan değerini alırsın — sayılarda `0`, adreslerde sıfır adresi, `bool`'da `false`.

## Nasıl çalışır?

`mapping` bir kap değil, bir hesaptır. Bir anahtarın değeri aranırken EVM, anahtarı ve mapping'in [[storage-slot|slot numarasını]] birlikte özetler ve çıkan sayıyı bir slot adresi olarak kullanır. Yani her olası anahtarın yeri baştan bellidir ve ayrıca hiçbir liste tutulmaz. Dolaşılamamasının ve uzunluğunun olmamasının sebebi de budur: dolaşılacak bir liste hiç yoktur.

Bunun bir faydası var — kaç kayıt olursa olsun tek bir kaydı okumak aynı maliyettedir. Bir kaydı `delete` ile silersen anahtar kalkmaz, değeri varsayılana döner; zaten ikisi aynı şeydir.

Anahtarları gerçekten gezmen gerekiyorsa mapping'in yanında ayrı bir dizi tutar ve iki yapıyı birlikte güncellersin.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BakiyeDefteri {
    mapping(address => uint256) public bakiye;

    function yatir() external payable {
        bakiye[msg.sender] += msg.value;
    }
}
```

## Dikkat

"Her anahtar var" kuralı sessiz hatalar doğurur. `bakiye[yanlisAdres]` sana `0` döndürür; kaydın olmadığını söylemez. Bir kaydın gerçekten var olup olmadığını ayırt etmen gerekiyorsa bunu kendin işaretlemelisin — örneğin bir [[struct]] içine `kayitli` diye bir alan koyarak.

Bir de `mapping` yalnızca [[storage-evm|storage]]'ta yaşar: fonksiyon içinde `memory` bir mapping oluşturamaz, mapping'i parametre olarak alamaz ve döndüremezsin. Ayrıntısı [[data-location|veri konumu]] maddesinde.
