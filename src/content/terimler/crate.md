---
term: "Crate"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Rust derleyicisinin tek parça hâlinde derlediği birim; ya başkasının kullanacağı bir kütüphane ya da çalıştırılabilir bir programdır."
related: [cargo, crates-io, module, package, cargo-toml]
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

Crate, Rust [[compiler|derleyicisinin]] tek parça hâlinde işlediği birimdir. İki türü vardır: `src/lib.rs` ile başlayan kütüphane crate'i (başkasının kullanacağı kod) ve `src/main.rs` ile başlayan ikili crate (çalıştırılabilir program).

"Crate" Türkçeye çevrilmiyor. Kelime anlamı "sandık" olsa da Rust'taki anlamıyla örtüşmediği için İngilizce hâli kullanılıyor.

Python bilen için ayrımı şöyle kurabiliriz: Python'da bir `.py` dosyası modül, içinde `__init__.py` bulunan klasör pakettir. Rust'ta [[module|modül]] `mod` ile tanımlanır ve tek bir dosyayla sınırlı değildir; crate ise birçok modülü içine alan ve bir bütün hâlinde derlenen dış kabuktur.

## Nasıl çalışır?

Crate ile [[package|paket]] ayrı şeylerdir ve en sık karıştırılan ikili budur. İçinde [[cargo-toml|Cargo.toml]] bulunan klasöre paket denir; bir paket en çok bir kütüphane crate'i, ama istediği kadar ikili crate içerebilir — `src/bin/` altındaki her dosya ayrı bir program olur.

Bir crate'in dışa açık yüzü `pub` ile işaretlenmiş öğelerden ibarettir. `pub` yazmadığın her şey crate'in içinde kalır. Bu, Python'daki alt çizgi geleneğinin aksine derleyicinin gerçekten zorladığı bir sınırdır: gizli tuttuğun bir fonksiyonu dışarıdan çağırmaya çalışan kod derlenmez.

## Örnek

```rust
// src/lib.rs — kütüphane crate'inin kökü
pub mod hash; // src/hash.rs dosyasındaki modülü crate'e bağlar

pub mod imza {
    pub fn dogrula(ozet: u32, beklenen: u32) -> bool {
        ozet == beklenen
    }
}
```

## Dikkat

Başkasının crate'ini kullanmak iki ayrı adımdır: önce [[cargo|Cargo]] ile bağımlılık olarak eklersin (crate diske iner), sonra kodda `use` ile içinden neyi alacağını yazarsın (ad o dosyada görünür olur). Yalnızca birini yapmak işe yaramaz ve derleyicinin verdiği iki hata birbirine benzediği için başta kafa karıştırır.
