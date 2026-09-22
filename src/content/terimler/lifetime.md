---
term: "Lifetime"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: ileri
short: "Bir referansın geçerli kaldığı süre; Rust bunu derleme anında izler, gerektiğinde `'a` gibi etiketlerle yazmanı ister."
related: [borrowing-rust, borrow-checker, reference, ownership, memory-safety]
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

Lifetime, bir [[reference|referansın]] geçerli kaldığı süredir. Rust'ın tek bir şartı vardır: referans, gösterdiği değerden daha uzun yaşayamaz. Değer düştükten sonra elde kalan referans, C'deki sarkan işaretçinin ta kendisi olurdu; derleyici bu durumu derleme anında yakalar.

Türkçede "yaşam süresi" diye anlatılıyor ama terim olarak `lifetime` yerleşmiş durumda; kodda zaten `'a` biçiminde yazıldığı için burada da İngilizce bırakıldı.

## Benzetme

Bir arkadaşının sana bıraktığı ev anahtarı gibi. Anahtar cebinde durur ama geçerliliği, arkadaşının o evde oturduğu süreyle sınırlıdır; o taşındıktan sonra elindeki metal parçası bir şey ifade etmez. Rust bu bağı yazıya döker: anahtarı verirken "ben burada olduğum sürece geçerli" notunu da birlikte taşır.

## Nasıl çalışır?

Çoğu zaman hiçbir şey yazmazsın: derleyici lifetime'ları kendi çıkarır (lifetime elision). Etiket yazman gereken yer, ilişkinin belirsizleştiği yerdir — tipik olarak bir fonksiyon birden fazla referans alıp geriye referans döndürdüğünde. `'a` etiketi "dönen referans, `'a` ile işaretlenen girdiler kadar yaşar" der.

Buradaki en yaygın yanlış anlama şudur: etiket ömrü **uzatmaz**. Hiçbir şeyi hayatta tutmaz, yalnızca hâlihazırdaki ilişkiyi derleyiciye bildirir. Derleyicinin iş yapabilmesi için gereken bilgi sensin, karar veren o.

## Örnek

```rust
// DERLENMEZ
fn main() {
    let disari;
    {
        let icerde = String::from("geçici");
        disari = &icerde;        // icerde birazdan düşecek
    }
    println!("{disari}");
}
```

```text
error[E0597]: `icerde` does not live long enough
 --> ornek.rs:6:18
  |
6 |         disari = &icerde;        // icerde birazdan düşecek
  |                  ^^^^^^^ borrowed value does not live long enough
7 |     }
  |     - `icerde` dropped here while still borrowed
```

```rust
// DERLENİR
// 'a: dönen referans, iki girdiden kısa ömürlü olanı kadar yaşar
fn uzun_olan<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() >= y.len() { x } else { y }
}

fn main() {
    let a = String::from("blockchain");
    let b = String::from("rust");
    println!("{}", uzun_olan(&a, &b));
}
```

## Dikkat

Python'da bu hata sınıfı yoktur: bir nesneye ulaşan referans kaldığı sürece nesne silinmez, [[garbage-collection|çöp toplayıcı]] onu toplamaz. Rust aynı güvenceyi çalışma anında bir bekçi tutarak değil, derleme anında ispat ederek verir — bedeli de bu etiketleri zaman zaman elle yazmaktır.

`'static` etiketi "programın sonuna kadar yaşar" demektir. Derleyici bir hatayı `'static` ekleyerek çözmeni önerdiğinde bu çoğu zaman doğru çözüm değildir; asıl soru, değerin gerçekten o kadar yaşaması gerekip gerekmediğidir.
