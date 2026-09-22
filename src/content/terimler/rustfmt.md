---
term: "rustfmt"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Rust kodunu topluluğun ortak biçim kurallarına göre yeniden yazan resmî formatter."
related: [formatter, clippy, cargo, ci-cd, rust]
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

rustfmt, Rust'ın resmî [[formatter|formatter]]'ıdır. `cargo fmt` komutuyla çalışır ve projedeki bütün `.rs` dosyalarını ortak biçim kurallarına göre yeniden yazar.

Rust tarafındaki ayırt edici nokta, varsayılan biçimin ekosistemde olduğu gibi benimsenmiş olmasıdır: açtığın çoğu Rust deposu aynı görünür, girinti ve satır bölme tartışması ekiplerin gündemine genellikle hiç gelmez.

## Nasıl çalışır?

`cargo fmt` dosyaları yerinde değiştirir. `cargo fmt --check` ise hiçbir şeye dokunmaz, yalnızca hangi dosyanın biçimsiz olduğunu ve nasıl görünmesi gerektiğini yazar; sıfırdan farklı bir çıkış kodu döndürdüğü için [[ci-cd|CI]] adımı tam olarak bunu kullanır.

Ayarlar kök klasördeki `rustfmt.toml` dosyasından yapılır: satır genişliği, `use` satırlarının nasıl gruplanacağı gibi. Ayarların bir kısmı yalnızca `nightly` [[toolchain|toolchain]]'de çalıştığı için çoğu proje varsayılanlarla kalır — ki bu da biçim tartışmasını en baştan kapatır.

Editörler `cargo fmt`'i kaydetme anında çalıştıracak şekilde ayarlanabilir; böyle kullanıldığında araç görünmez olur.

## Örnek

Yazarken bu hâle gelen bir dosya:

```rust
fn topla(a:u32,b:u32)->u32{a+b}

fn main(){
      let s=topla( 2,3 );
println!("{}",s);
}
```

`cargo fmt` çalıştırıldıktan sonra:

```rust
fn topla(a: u32, b: u32) -> u32 {
    a + b
}

fn main() {
    let s = topla(2, 3);
    println!("{}", s);
}
```

Program ikisinde de aynı işi yapar ve aynı sonucu basar.

## Dikkat

rustfmt kodun ne yaptığını değiştirmez, ama okunabilirliği tek başına da kurtarmaz: kötü adlandırılmış bir değişken biçimlendikten sonra da kötü adlandırılmış kalır. Biçim, düşünce düzeninin yerine geçmez.

Bir de araç her yere dokunmaz. [[macro|Makro]] gövdelerinin içi her zaman biçimlendirilemez, çünkü orada duran şey henüz geçerli Rust koduna açılmamış olabilir. Böyle yerlerde düzeni sen kurarsın.
