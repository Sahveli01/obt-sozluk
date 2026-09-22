---
term: "rustup"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Rust sürümlerini kuran, güncelleyen ve aralarında geçiş yapmanı sağlayan resmî kurulum aracı."
related: [toolchain, rust, cargo, clippy, rustfmt]
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

rustup, Rust'ın resmî kurulum ve sürüm yöneticisidir. Rust'ı kurarken aslında rustup'ı kurarsın; derleyiciyi, [[cargo|Cargo]]'yu ve yan araçları sonra o indirir.

Python'da birden çok Python sürümünü yan yana tutup proje başına seçmek için `pyenv` benzeri araçlar kullanılır. rustup aynı işi Rust için yapar, üstüne bir de her sürümün yanında gelen yardımcı araçları ve hedef platformları yönetir.

## Nasıl çalışır?

rustup'ın yönettiği birime [[toolchain|toolchain]] denir ve toolchain'ler üç kanaldan gelir:

- **stable** — günlük iş için kullanılan kararlı sürüm.
- **beta** — bir sonraki kararlı sürümün adayı; ekipler kendi kodlarını erkenden denemek için kullanır.
- **nightly** — her gün üretilen, henüz kararlı sayılmayan dil özelliklerinin açık olduğu sürüm.

rustup ayrıca bileşen ekler ([[clippy|Clippy]], [[rustfmt|rustfmt]]) ve başka platformlar için derleme yapabilmeni sağlayan hedefler indirir — örneğin WebAssembly çıktısı üretmek için.

İşin ilk bakışta görünmeyen kısmı şu: `cargo` yazdığında çalışan program aslında rustup'ın koyduğu ince bir ara katmandır. O katman hangi klasörde olduğuna bakar ve o klasör için hangi toolchain seçiliyse gerçek `cargo`'yu ona göre çağırır. Komut adı hep aynı kalır, arkasındaki sürüm değişir.

## Örnek

Aşağıdaki komutlar hangi sürümlerin kurulu olduğunu gösterir ve yenisini ekler:

```bash
rustup show                       # kurulu toolchain'ler ve etkin olan
rustup update                     # kurulu toolchain'leri günceller
rustup toolchain install nightly  # yeni bir kanal kurar
rustup component add clippy rustfmt
cargo +nightly build              # tek seferlik başka bir toolchain ile derle
```

## Dikkat

`cargo +nightly` gibi `+` ile verilen ad yalnızca o komut için geçerlidir; varsayılanı değiştirmez. Kalıcı geçiş için `rustup default`, yalnızca bir klasör için kalıcı geçiş için `rustup override set` ya da projeye konan bir ayar dosyası kullanılır.

Bir sorunu ararken ilk bakılacak yer çoğu zaman `rustup show` çıktısıdır: "bende çalışıyor, sende çalışmıyor" durumlarının büyük kısmı iki bilgisayarda farklı toolchain'lerin etkin olmasından çıkar.
