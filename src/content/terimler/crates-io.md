---
term: "crates.io"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Rust paketlerinin yayımlandığı resmî kayıt defteri; Cargo bağımlılıkları varsayılan olarak buradan indirir."
related: [cargo, crate, package-manager, semantic-versioning, cargo-toml]
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

crates.io, Rust ekosisteminin resmî paket kayıt defteridir. [[cargo|Cargo]] bir bağımlılık indireceğinde başka bir şey söylenmediği sürece buraya bakar. Python tarafındaki karşılığı PyPI, JavaScript tarafındaki [[npm|npm]] kayıt defteridir.

Kayıt defteri, paket yöneticisinin kendisi değildir: Cargo aracı, crates.io ise arkasındaki depodur. İkisi ayrı şeylerdir ama günlük konuşmada sık sık yer değiştirir.

## Nasıl çalışır?

Bir [[crate|crate]]'i yayımlamak için `cargo publish` çalıştırılır. Cargo paketi derleyip sıkıştırır, [[cargo-toml|Cargo.toml]] içindeki ad, sürüm, lisans ve açıklama alanlarını denetler ve yükler. Adlar ilk gelene verilir; sürüm numaraları [[semantic-versioning|semantik sürümleme]] kuralına göre yorumlanır.

Yazıldığı tarih itibarıyla yayımlanan bir sürüm kayıt defterinden silinemiyor. Bir sürümde ciddi bir sorun bulunursa `cargo yank` ile "yeni projeler bunu seçmesin" işareti konur; ama o sürümü kilit dosyasında sabitlemiş projeler çalışmaya devam eder. Amaç, bir paketin bir gün ortadan kaybolup ona bağlı binlerce derlemeyi bozmasını engellemektir.

## Örnek

Bir crate'i projene almadan önce kayıt defterine terminalden soru sorabilirsin:

```bash
cargo search rand --limit 3  # ada göre arar
cargo info rand              # lisans, sürüm ve depo adresini yazar
```

## Dikkat

Kayıt defterinde olmak bir kalite ya da güvenlik belgesi değildir; crates.io yayımlanan kodu incelemez. Bir crate'i projene almadan önce ne kadar kullanıldığına, en son ne zaman güncellendiğine ve kaç [[dependency|bağımlılık]] getirdiğine bakmak — [[package-manager|paket yöneticisi]] maddesinde anlatılan alışkanlığın Rust'taki karşılığıdır.

Bir de şu: `cargo add` ile eklediğin bir ad ile aramada gördüğün ad birbirine çok benziyorsa dur ve iki kez bak. Ad benzerliği bütün kayıt defterlerinin ortak zayıf noktasıdır.
