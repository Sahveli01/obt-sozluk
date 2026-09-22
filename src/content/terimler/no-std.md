---
term: "no_std"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: ileri
short: "Standart kütüphane olmadan derleme; işletim sistemi bulunmayan ortamlar ve zincir üstü sözleşmeler için kullanılır."
related: [crate, attribute, wasm-smart-contracts, memory-management, rust]
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

`#![no_std]`, bir [[crate|crate]]'in en üstüne yazılan ve "bu kod Rust'ın standart kütüphanesi olmadan derlensin" diyen bir [[attribute|özniteliktir]].

Standart kütüphane (`std`) bir işletim sistemi varsayar: dosya açar, iş parçacığı başlatır, ağ soketi kurar, yığından bellek ister. İşletim sisteminin bulunmadığı ya da bu hizmetlerin verilmediği bir ortamda bu varsayım çöker.

`no_std` ile derlendiğinde geriye `core` kalır: sayı türleri, dilimler, `Option` ve `Result`, yineleyiciler, kalıp eşleme — yani dilin işletim sistemi gerektirmeyen çekirdeği.

## Nasıl çalışır?

Rust'ın kütüphanesi üç katmanlıdır. `core` her yerde vardır ve hiçbir şey varsaymaz. `alloc` yığından bellek ayırmayı gerektiren türleri (`String`, `Vec`, `Box`) içerir ve kullanılabilmesi için projenin bir bellek ayırıcısı sağlaması gerekir. `std` ise ikisinin üstüne işletim sistemi hizmetlerini ekler.

İki büyük kullanım alanı var. Birincisi gömülü sistemler: mikrodenetleyicide işletim sistemi yoktur, bellek kilobayt ölçeğindedir, `no_std` orada zorunluluktur.

İkincisi zincir üstü sözleşmeler. Birçok ağ, sözleşmeleri [[webassembly-wasm|WebAssembly]] olarak çalıştırır ve sözleşme, dosya sistemi ya da ağ erişimi olmayan kapalı bir ortamdadır — [[wasm-smart-contracts|WASM sözleşmelerinde]] `std`'nin sunduğu şeylerin çoğunun karşılığı zaten yoktur. Üstelik sözleşmeyi zincire yüklemenin maliyeti üretilen ikili dosyanın boyutuyla ölçüldüğü için, gereksiz her kütüphane parçası doğrudan [[gas|gas]] maliyetine dönüşür. Rust tabanlı sözleşme çerçevelerinin `no_std` ile çalışmasının sebebi budur.

## Örnek

```rust
#![no_std]

/// std yok: dosya, iş parçacığı, yığın ayırma yok.
/// Dilin çekirdeği ve dilim işlemleri duruyor.
pub fn toplam(sayilar: &[u32]) -> u32 {
    sayilar.iter().sum()
}
```

İşletim sistemi olmayan bir hedef için derlemek:

```bash
cargo build --target wasm32v1-none
```

## Dikkat

`no_std` yazmak koddan satır silmez, altındaki zemini değiştirir. `String` ve `Vec` `std`'de değil `alloc`'tadır; `alloc`'u eklersen geri gelirler. `HashMap` ise `std`'de tanımlıdır ve `no_std` ortamında yerine başka bir crate kullanılır.

Bağımlılık zinciri de sessizce işi bozabilir: senin crate'in `no_std` olsa bile bağlandığın kütüphanelerden biri `std` gerektiriyorsa derleme yine `std`'ye düşer. Kütüphaneler bunu genellikle kapatılabilir bir özellik bayrağına bağlar; `default-features = false` yazmayı unutmak, "neden hâlâ std çekiyor" sorusunun en sık cevabıdır.
