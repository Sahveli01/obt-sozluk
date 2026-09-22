---
term: "Ownership"
tr: "Sahiplik"
aliases: ["sahiplik"]
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Rust'ta her değerin tek bir sahibi olması ve sahip kapsamdan çıkınca değerin belleğinin geri verilmesi kuralı."
related: [borrowing-rust, borrow-checker, garbage-collection, memory-management, rust, stack-and-heap]
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

Sahiplik, [[rust|Rust]]'ın belleği yönetme biçimidir ve üç kurala sığar: her değerin bir sahibi vardır, aynı anda yalnızca bir sahibi olur, sahip kapsamdan çıkınca değer düşer (`drop`) ve belleği geri verilir.

Farkı [[python|Python]] üzerinden görmek en kolayı. Python'da bir nesneyi kimin sileceği çalışma anında belli olur: ona ulaşan kimse kalmadığında [[garbage-collection|çöp toplayıcı]] devreye girer ve ne zaman gireceğine sen karar vermezsin. Rust'ta silme anı derleme anında bellidir; kapsamı kapatan süslü parantez, aynı zamanda belleğin geri verildiği noktadır. İki dil de seni elle bellek boşaltmaktan kurtarır — biri bunu çalışırken bir bekçiyle, diğeri derlerken bir muhasebeyle yapar.

## Benzetme

Atölyedeki alet zimmeti gibi. Her alet tek bir kişiye zimmetlidir; devredebilirsin ama devrettiğin anda senden düşer, ikinci bir nüsha yoktur. Vardiya bitince zimmetindeki alet dolaba geri girer; kimsenin koridorları dolaşıp "bu alet hâlâ kullanılıyor mu" diye bakmasına gerek kalmaz.

## Nasıl çalışır?

Bir değeri başka bir değişkene atadığında ya da bir fonksiyona verdiğinde sahiplik taşınır: eski isim o andan itibaren geçersizdir. Gerçekten iki nüsha istiyorsan `clone()` yazarsın, böylece kopyanın bedeli kodda görünür olur. Sabit boyutlu küçük tipler (tamsayılar, `bool`) istisnadır; onlar taşınmak yerine kopyalanır.

Sahipliği hiç devretmek istemiyorsan değeri [[borrowing-rust|ödünç verirsin]]: sahip yerinde kalır, karşı taraf yalnızca bakar ya da geçici olarak değiştirir.

## Örnek

```rust
// DERLENMEZ
fn main() {
    let ad = String::from("ada");
    let baska = ad;              // sahiplik taşındı
    println!("{ad}");            // ad artık geçersiz
    println!("{baska}");
}
```

Derleyicinin cevabı:

```text
error[E0382]: borrow of moved value: `ad`
 --> ornek.rs:5:16
  |
4 |     let baska = ad;              // sahiplik taşındı
  |                 -- value moved here
5 |     println!("{ad}");            // ad artık geçersiz
  |                ^^ value borrowed here after move
```

```rust
// DERLENİR
fn main() {
    let ad = String::from("ada");
    let baska = ad.clone();      // kopya: iki ayrı sahip
    println!("{ad} {baska}");
    {
        let gecici = String::from("kapsam içi");
        println!("{gecici}");
    }                            // gecici burada düşer
}
```

Aynı satırlar Python'da sorunsuz çalışır, çünkü orada `baska = ad` iki isim tek nesne demektir.

## Dikkat

Sahiplik Rust'ın en çok takılınan yeridir; ilk haftalarda derleyiciyle tartıştığın hissi normaldir. Bu bir kusur değil, yapılan takasın bedelidir: [[memory-management|bellek yönetimi]] hatalarının koca bir sınıfı karşılığında üretime hiç ulaşamaz.

Sık karıştırılan nokta: sahipliğin devredilmesi kopyalama değildir. Veri yerinde durur, değişen tek şey ondan kimin sorumlu olduğudur.
