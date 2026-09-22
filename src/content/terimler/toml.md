---
term: "TOML"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "Yapılandırma dosyaları için tasarlanmış, anahtar = değer satırlarından ve köşeli parantezli tablolardan oluşan biçim."
related: [yaml, json, cargo-toml, foundry, serialization]
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

TOML, yapılandırma dosyaları için tasarlanmış bir veri biçimidir. Tek okumada ne olduğu anlaşılsın diye tasarlanmıştır: her satır `anahtar = değer` biçimindedir, köşeli parantez içindeki başlıklar dosyayı tablolara böler.

Karşına çıktığı yerlerin çoğu araç ayarlarıdır: Rust projelerinin [[cargo-toml|Cargo.toml]] dosyası, [[foundry|Foundry]]'nin `foundry.toml` dosyası ve pek çok Python aracının ayar dosyası TOML ile yazılır.

## Nasıl çalışır?

`[sunucu]` satırından sonra gelen anahtarlar `sunucu` tablosunun içine girer; bir sonraki köşeli parantezli başlığa kadar bu böyle sürer. Yani bağlam girintiyle değil başlıklarla belirlenir ve satırın kaç boşlukla başladığı hiçbir şey değiştirmez — [[yaml|YAML]]'dan en belirgin farkı budur.

Tipler biçimin kendisinde tanımlıdır: tırnaklı olan metindir, `true` ve `false` mantıksal değerdir, tırnaksız sayı sayıdır, tarih ve saat için ayrı bir yazım vardır. Tahmin yoktur, dolayısıyla bir değerin ne olarak okunacağı ayrıştırıcıya göre değişmez. [[json|JSON]]'dan farkı ise yorum satırı yazabilmen ve süslü parantez yükünün olmamasıdır.

## Örnek

```toml
ad = "cuzdan"
aktif = true

[sunucu]
adres = "localhost"
port = 8545
```

`ad` ve `aktif` dosyanın kökündedir. `adres` ile `port` ise `sunucu` tablosunun altındadır; onlara erişirken iki aşamalı bir ad kullanılır.

## Dikkat

TOML'un rahat ettiği yer, birkaç bölüme ayrılmış düz ayar listeleridir. Derin iç içe yapılarda ise sözdizimi çabuk hantallaşır: her seviye için yeni bir başlık yazmak ya da uzun noktalı adlar kurmak gerekir. Veri yapısı ağaç gibi derinleşiyorsa biçimin kendisi sana bunun yanlış yerde olduğunu söylüyordur.
