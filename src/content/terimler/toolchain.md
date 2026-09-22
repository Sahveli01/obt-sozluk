---
term: "Toolchain"
tr: "Araç zinciri"
aliases: ["araç zinciri"]
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Bir dilin derleyicisi, standart kütüphanesi ve yardımcı araçlarından oluşan, birlikte sürümlenen takım."
related: [rustup, compiler, rust, cargo, build]
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

Toolchain, kaynak koddan çalışır programa giden yolda kullanılan araçların tamamıdır. Rust'ta bir toolchain şunları kapsar: `rustc` [[compiler|derleyicisi]], [[cargo|Cargo]], standart kütüphane ve seçtiğin bileşenler ([[clippy|Clippy]], [[rustfmt|rustfmt]] gibi).

Önemli olan, bunların tek tek değil birlikte sürümlenmesidir. "Rust'ın şu sürümü" dediğinde aslında bu takımın tamamının belirli bir anını kastedersin.

Türkçede "araç zinciri" karşılığı kullanılıyor; yazılı metinlerde İngilizcesi de sık geçer.

## Nasıl çalışır?

Bir toolchain üç şeyle adlandırılır: kanal (`stable`, `beta`, `nightly` ya da sabitlenmiş bir sürüm numarası), hedef platform üçlüsü (işlemci mimarisi, işletim sistemi ve derleyici ortamı; örneğin `x86_64-pc-windows-msvc`) ve isteğe bağlı bileşenler.

Yazıldığı tarih itibarıyla kararlı Rust sürümleri altı haftada bir yayımlanıyor, yani `stable` sabit bir nokta değil düzenli ilerleyen bir hat. Eski sürümde derlenen kodun yeni sürümde de derlenmesi hedeflenir; dili geriye dönük uyumluluğu bozacak şekilde değiştiren kararlar ise "edition" adı verilen ve proje başına seçilen bir ayara bağlanır.

Projeler hangi toolchain ile derleneceğini depoya yazabilir. Kök klasöre `rust-toolchain.toml` koyarsın; [[rustup|rustup]] o klasöre girildiğinde ilgili toolchain'e geçer, kurulu değilse indirir. Yeni katılan biri depoyu klonlayıp derlediğinde doğru sürümü kendiliğinden kullanır.

## Örnek

```toml
# rust-toolchain.toml — depo kökünde durur
[toolchain]
channel = "stable"
components = ["rustfmt", "clippy"]
targets = ["wasm32-unknown-unknown"]
```

Bu klasörde hangi toolchain'in etkin olduğunu sormak için:

```bash
rustup show active-toolchain
```

## Dikkat

`nightly` gerektiren bir kütüphaneye bağlanmak, projeni kararlılığı güvence altına alınmamış bir hatta bağlar: bugün derlenen kod, bir sonraki gecelik sürümde derlenmeyebilir. Bazı alanlarda (gömülü sistemler, bazı zincir araçları) bu kaçınılmazdır; kaçınılabiliyorsa `stable` kalmak daha az bakım demektir.
