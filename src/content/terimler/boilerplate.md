---
term: "Boilerplate"
tr: ""
aliases: ["boilerplate kod"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Her projede neredeyse aynı biçimde yazılan, kendi başına bir karar taşımayan tekrar kod."
related: [framework, openzeppelin, erc-20, dry, library-yazilim]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Boilerplate, her projede neredeyse aynı biçimde yazılan ve kendi başına bir karar taşımayan tekrar koddur. Proje kurulurken yazdığın ayar dosyaları, bir sınıfın bütün alanları için tek tek açılan okuma-yazma metotları, her dosyanın başındaki aynı `import` satırları bu tanıma girer.

Ayırt edici yanı şudur: kimse bu satırları düşünerek yazmaz, ama yazılmadığında hiçbir şey çalışmaz. Bu yüzden [[framework|framework]] ve şablonların ilk vaadi genelde "bu kısmı senin yerine biz yazıyoruz" olur.

Kelimenin yerleşik bir Türkçe karşılığı yok; "kalıp kod" dendiği oluyor ama sektörde İngilizcesi kullanılıyor.

## Benzetme

Hazır kira sözleşmesi metni gibi. Kimse her kirada "taraflar", "tebligat adresi", "yetkili mahkeme" maddelerini sıfırdan yazmaz; basılı metni alır, yalnızca ad, tutar ve süreyi doldurur. Kalıp maddeler olmadan sözleşme geçersizdir — ama üzerlerinde düşünülecek bir şey de yoktur.

## Nasıl çalışır?

Tekrar kodu azaltmanın birkaç yolu var ve hepsi aynı takası yapar: daha az yazım, daha çok gizli davranış.

- **Hazır bir temelden türemek.** Ortak mantık denenmiş bir sınıfın ya da sözleşmenin içindedir, sen yalnızca farkı yazarsın.
- **İskelet üretmek.** `npm create`, `cargo new`, `forge init` gibi komutlar dosya ağacını ve ayarları tek seferde kurar.
- **Dilin kendisi.** Bazı diller sık yazılan kalıbı doğrudan dile alır; Python'daki `@dataclass` ya da Rust'taki [[derive|derive]] gibi tek satırlık işaretler, onlarca satırı yazmaktan kurtarır.

## Örnek

Bunun en tanıdık hâli sözleşme şablonlarıdır. Bir [[erc-20|ERC-20]] jetonunun transfer ve onay mantığı her jetonda aynıdır; kimse yeniden yazmaz, denetlenmiş bir kütüphaneden [[inheritance|kalıtımla]] alır. Örnek Solidity ile, çünkü tekrar kodun en görünür olduğu yer burasıdır:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Jeton is ERC20 {
    constructor() ERC20("Jeton", "JTN") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}
```

Kurucudaki üç satır, projeye özgü olan tek yerdir. (Yazıldığı tarih itibarıyla geçerli sürümlere göre; kütüphane sürümü değiştiğinde yazım da değişebilir.)

## Dikkat

Boilerplate her zaman ayıklanacak bir şey değildir. Açıkça yazılmış tekrar, onu ortadan kaldıran sihirli bir mekanizmadan daha okunaklı olabilir: ne olduğu gözünün önündedir. [[dry|DRY]] kuralı burada dikkatli uygulanır — tekrar eden şey bilgi değil, yalnızca yazım biçimiyse kaldırmanın getirisi azdır.

Şablonla gelen kodun sorumluluğu ise sana aittir. Kopyalanan bir kurulum dosyasının ne yaptığını hiç okumamak, özellikle zincir üstünde çalışan kodda pahalı bir alışkanlıktır.
