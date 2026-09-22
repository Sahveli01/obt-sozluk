---
term: "Rust"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "Bellek güvenliğini çöp toplayıcı olmadan, derleme anındaki sahiplik kurallarıyla sağlamayı hedefleyen sistem programlama dili."
related: [ownership, borrow-checker, memory-safety, cargo, trait-rust, c-dil]
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

Rust, hız ve bellek denetimi gerektiren yazılımlar için tasarlanmış bir dildir: işletim sistemi bileşenleri, tarayıcı motorları, oyun altyapıları, blockchain düğüm yazılımları ve zincir üstü programlar. [[c-dil|C]] ve C++ ile aynı alanı hedefler, ama o dillerde çalışma anında ortaya çıkan bellek hatalarını derleme anında yakalamayı amaçlar.

Bunu [[ownership|sahiplik]] kurallarıyla yapar. Her verinin tek bir sahibi vardır; sahip kapsamdan çıkınca veri serbest bırakılır; veriyi ödünç alanlar [[borrow-checker|ödünç denetleyicisinin]] kurallarına uymak zorundadır. Böylece serbest bırakılmış belleğe erişmek ya da aynı veriyi iki iş parçacığının aynı anda değiştirmesi gibi hata sınıfları program derlenmeden reddedilir ve [[garbage-collection|çöp toplayıcıya]] gerek kalmaz.

## Nasıl çalışır?

Derleyici katıdır ve hata mesajları uzundur; buna karşılık genellikle neyin yanlış olduğunu ve nasıl düzeltileceğini birlikte söyler. Günlük işleri [[cargo|Cargo]] toplar: derleme, bağımlılık indirme, test çalıştırma ve biçimlendirme tek bir araçtan geçer. Ortak davranışlar sınıf kalıtımıyla değil [[trait-rust|trait]] adı verilen yapılarla tanımlanır.

## Örnek

```rust
fn main() {
    let ad = String::from("merhaba");
    let yeni = ad;
    println!("{yeni}");
}
```

Program `merhaba` yazar. Üçüncü satırda metin `yeni`ye taşındı, artık sahibi odur. Son satırda `yeni` yerine `ad` yazsaydın program çalışmazdı: derleyici "value borrowed here after move" diyerek derlemeyi durdururdu.

## Dikkat

Rust'ın öğrenme eğrisi başta diktir ve bu dürüstçe söylenmeli. Başka dillerde düşünmeden yazdığın bir kod burada derleyiciyle tartışmaya dönüşebilir; asıl zorlayan şey sözdizimi değil, verinin kime ait olduğunu her an bilmek zorunda olmandır. Bu alışkanlık oturduğunda derleyicinin reddettiği şeylerin çoğunun gerçekten hata olduğu görülür — fakat ilk haftalarda yavaşlatır. Kısa bir betik için bu maliyet çoğu zaman gereksizdir; [[memory-safety|bellek güvenliği]] ve performansın birlikte önem taşıdığı yerlerde anlam kazanır.
