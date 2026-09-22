---
term: "impl Block"
tr: ""
aliases: ["impl bloğu"]
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Bir tipin metotlarının ve ilişkili fonksiyonlarının yazıldığı blok; Rust'ta veri ile davranış ayrı yerlerde durur."
related: [struct, method, trait-rust, class, rust]
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

`impl` bloğu, bir tipe ait metotların yazıldığı yerdir. Rust'ta verinin şekli [[struct|struct]] ya da [[enum|enum]] ile tanımlanır; o veriyle ne yapılabileceği ayrı bir `impl` bloğunda durur.

Türkçede tam bir karşılığı yok; konuşurken "impl bloğu" deniyor, çünkü `impl` anahtar kelimenin kendisidir.

## Nasıl çalışır?

Python'da metotlar `class` gövdesinin içine yazılır ve ilk parametre `self`'tir. Rust'ta ayrım biraz daha keskin: `self`'i nasıl aldığın, metodun ne yapmaya yetkili olduğunu belirler.

- `&self` — yalnızca okur ([[borrowing-rust|ödünç alır]]).
- `&mut self` — nesneyi yerinde değiştirir.
- `self` — nesnenin [[ownership|sahipliğini]] alır, çağrıdan sonra eski değişken kullanılamaz.

`self` parametresi olmayan fonksiyonlar da yazılabilir; bunlara ilişkili fonksiyon denir ve `Tip::fonksiyon()` biçiminde çağrılır. Kurucu işini gören `new` böyle yazılır — Rust'ta ayrı bir kurucu sözdizimi yoktur, `new` yalnızca yerleşmiş bir isimdir.

`impl Ozet for Cuzdan` yazarsan aynı blok bu sefer bir [[trait-rust|trait]] uygular; aynı tip için birden fazla `impl` bloğu açmakta sakınca yoktur.

## Örnek

```rust
struct Cuzdan { bakiye: u64 }

impl Cuzdan {
    fn yeni(bakiye: u64) -> Self { Cuzdan { bakiye } }        // ilişkili fonksiyon
    fn bakiye(&self) -> u64 { self.bakiye }                   // okuyan metot
    fn yatir(&mut self, tutar: u64) { self.bakiye += tutar; } // değiştiren metot
}

fn main() {
    let mut c = Cuzdan::yeni(100);
    c.yatir(50);
    println!("{}", c.bakiye());  // 150
}
```

## Dikkat

`Self` (büyük harfle) tipin kendisini, `self` (küçük harfle) o anki nesneyi gösterir. İkisi farklı şeylerdir ve karıştırıldığında hata mesajı ilk bakışta anlaşılmaz görünür.

Veri ile davranışın ayrı durması bir üslup tercihi değil: bu ayrım sayesinde davranışı [[class|sınıf]] ağacına bağlamadan, tipe sonradan da ekleyebilirsin.
