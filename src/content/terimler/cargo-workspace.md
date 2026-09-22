---
term: "Cargo Workspace"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Birden çok Rust paketini tek bir kilit dosyası ve tek derleme klasörü altında birlikte yöneten Cargo yapısı."
related: [cargo, crate, cargo-toml, monorepo, crates-io]
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

Bir proje büyüdüğünde tek bir [[crate|crate]] yetmemeye başlar: çekirdek mantık ayrı, komut satırı arayüzü ayrı, zincir üstü sözleşme ayrı dursun istersin. Cargo workspace, bu paketleri aynı depoda ortak bir kök altında toplayan yapıdır.

"Workspace" için Türkçede yerleşmiş bir karşılık yok; Cargo belgelerinde geçtiği hâliyle kullanılıyor.

## Nasıl çalışır?

Depo köküne `[workspace]` bölümü içeren bir [[cargo-toml|Cargo.toml]] koyar, `members` listesine alt klasörleri yazarsın. Bundan sonra üç şey değişir.

Bağımlılıklar bir kez çözülür: workspace'in tamamı için tek bir `Cargo.lock` vardır, yani iki üye aynı kütüphanenin iki farklı sürümünü kazara çekemez. Derleme çıktısı tek bir `target/` klasöründe toplanır, ortak bağımlılıklar bir kez derlenir. Ve kökte çalıştırılan `cargo build` ya da `cargo test` bütün üyeleri kapsar; tek bir üyeyle çalışmak için `-p` ile adını verirsin.

Ortak sürümleri kökteki `[workspace.dependencies]` altında bir kez tanımlayıp üyelerde `serde = { workspace = true }` diye kullanabilirsin. Böylece bir kütüphanenin sürümünü yükseltmek için tek bir satır değiştirilir.

## Örnek

```toml
# depo kökündeki Cargo.toml
[workspace]
resolver = "3"
members = ["cekirdek", "cli"]

[workspace.dependencies]
serde = "1"
```

```bash
cargo build             # bütün üyeleri derler
cargo test -p cekirdek  # yalnızca tek bir üyeyi test eder
```

## Dikkat

Workspace ile [[monorepo|monorepo]] aynı şey değildir: monorepo bir depo düzeni tercihidir, workspace ise Cargo'nun bildiği somut bir yapıdır. Bir monorepo'nun içinde birden çok workspace olabilir.

Üyeler birbirine `path` ile bağlanır ve bu bağ yalnızca senin diskinde geçerlidir. Paketi [[crates-io|crates.io]]'ya yayımlayacaksan aynı bağımlılığa bir sürüm numarası da vermen gerekir; yoksa paketi indiren kişinin diskinde o klasör yoktur.
