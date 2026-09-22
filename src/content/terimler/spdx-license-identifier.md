---
term: "SPDX License Identifier"
tr: ""
aliases: ["spdx", "license identifier"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Kaynak dosyanın en üstünde, kodun hangi lisansla paylaşıldığını standart bir kısaltmayla bildiren yorum satırı."
related: [pragma, open-source-license, solidity-compiler-solc, open-source, contract-verification]
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

Bir Solidity dosyasının ilk satırı genellikle şudur: `// SPDX-License-Identifier: MIT`. Bu bir [[comment-kod|yorum]] satırıdır, kod değildir; kodun hangi [[open-source-license|açık kaynak lisansıyla]] paylaşıldığını söyler. `MIT`, `GPL-3.0`, `Apache-2.0` gibi kısaltmalar SPDX adlı ortak bir listeden gelir; böylece aynı lisans her projede tıpatıp aynı biçimde yazılır ve makineyle okunabilir.

Solidity derleyicisi bu satırı özellikle arar. Yoksa derleme durmaz ama uyarı alırsın. Sebebi basit: akıllı sözleşme kaynağı çoğunlukla [[block-explorer|zincir gezgininde]] herkese açık yayımlanır, okuyan kişinin de o kodu kullanıp kullanamayacağını bilmesi gerekir.

SPDX bir girişimin adıdır, çevrilmez.

## Benzetme

Plastik ambalajın altındaki geri dönüşüm üçgeninin içindeki numara gibi. Numara malzemenin ne olduğunu anlatmaz, yalnızca hangi sınıfa girdiğini söyler. Ama herkes aynı tabloyu kullandığı için hem bakan insan hem ayırma makinesi tek bakışta ne yapacağını bilir.

## Nasıl çalışır?

Derleyici satırı okur ve ürettiği üstveriye (metadata) işler; yani lisans bilgisi kaynağın yanında değil, derleme çıktısının içinde de taşınır. Kodun bir kısmı başka bir lisanstan geliyorsa `AND` ve `OR` ile birleşik ifadeler yazılabilir: `// SPDX-License-Identifier: MIT AND GPL-3.0`.

Hiç lisans vermek istemiyorsan yazılan değer `UNLICENSED` olur — "lisanssız", yani kimseye kullanma izni verilmiyor demektir. Buna çok benzeyen `Unlicense` (sonunda `d` yok) ise tam tersidir: kodu kamuya bırakan gerçek bir lisanstır. İki kelimeyi karıştırmak sık yapılan bir hatadır.

## Örnek

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract OzelKasa {
    address public sahip;
}
```

## Dikkat

Bu satır bir yorumdur ve tek başına hiçbir şeyi zorlamaz. Zincire yüklenmiş kodun kopyalanmasını engellemez; [[contract-verification|kaynağı doğrulanmış]] bir sözleşmenin Solidity kodu herkesin karşısındadır ve teknik olarak kopyalanabilir. Satırın tek işi, kopyalayan kişinin hangi hakka sahip olduğunu yazılı hâle getirmektir. Yaptırımı hukuk tarafındadır, zincir tarafında değil.
