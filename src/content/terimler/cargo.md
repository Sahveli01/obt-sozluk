---
term: "Cargo"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Rust'ın resmî derleme ve paket aracı: proje kurar, bağımlılık indirir, derler, test çalıştırır, paket yayımlar."
related: [rust, cargo-toml, crate, crates-io, package-manager, cargo-workspace]
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

Cargo, [[rust|Rust]] ile birlikte gelen resmî derleme aracı ve [[package-manager|paket yöneticisidir]]. Rust'ı kurduğunda ayrıca kurman gerekmez; Rust yazan hemen herkes günlük işinin tamamını bu tek komutla yapar.

Python bilen biri için en açıklayıcı karşılaştırma şudur: Python tarafında bağımlılık kurmak için `pip`, projeleri birbirinden ayırmak için `venv`, testleri çalıştırmak için `pytest`, paketi derleyip yayımlamak için `setuptools` ya da benzeri bir araç kullanılır. Dördü ayrı projedir; ayrı öğrenilir, ayrı yapılandırılır. Cargo aynı dört işi tek komutun alt komutları hâline getirir: `cargo add`, `cargo build`, `cargo test`, `cargo publish`.

Bu bir üstünlük iddiası değil, farklı bir tasarım tercihidir — Rust ekosistemi araçları en baştan tek çatı altında topladı.

## Nasıl çalışır?

Cargo bir klasörü proje olarak tanımak için [[cargo-toml|Cargo.toml]] dosyasına bakar. Orada yazan bağımlılıkları [[crates-io|crates.io]] üzerinden indirir, indirdiklerinin kendi bağımlılıklarını çözer ve hepsini doğru sırayla [[compiler|derleyiciye]] verir. Üretilen her şey projenin içindeki `target/` klasörüne yazılır.

Ortam ayırma derdi bu yüzden hiç doğmaz: kurulan [[crate|crate]]'ler sisteme değil o projenin klasörüne iner, yani iki proje aynı kütüphanenin iki farklı sürümünü yan yana kullanabilir.

## Örnek

Aşağıdaki beş komut, boş bir klasörden çalışan bir programa kadar olan yolun tamamıdır:

```bash
cargo new merhaba   # proje klasörünü ve iskelet dosyaları oluşturur
cd merhaba
cargo add rand      # bağımlılığı indirir ve Cargo.toml'a yazar
cargo run           # derler ve çalıştırır
cargo test          # testleri derler ve çalıştırır
```

## Dikkat

İlk derleme uzun sürer, çünkü bütün bağımlılıklar sıfırdan derlenir. Sonraki derlemeler yalnızca değişen parçayı yeniden yapar; `cargo run` kod değişmediyse derleme adımını atlar.

`target/` klasörü sürüm kontrolüne girmez. İçindeki her şey kaynak koddan yeniden üretilebilir ve boyutu hızla gigabaytlara çıkar.
