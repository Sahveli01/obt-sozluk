---
term: "Mutable Reference"
tr: "Değiştirilebilir referans"
aliases: ["değiştirilebilir referans"]
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "`&mut` ile alınan, değeri yerinde değiştirmeye izin veren ödünç; bir değerin aynı anda yalnızca bir tanesi olabilir."
related: [borrowing-rust, reference, mutability, borrow-checker, concurrency]
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

Değiştirilebilir referans, bir değeri kopyalamadan ve sahibini değiştirmeden **yerinde değiştirme** yetkisi veren [[borrowing-rust|ödünçtür]]. `&mut` ile alınır ve tek bir kuralı vardır: bir değerin aynı anda yalnızca bir tane değiştirilebilir referansı olabilir, o sırada okuma referansı da bulunamaz.

## Nasıl çalışır?

Python'da bir sözlüğü iki ayrı fonksiyona verirsen ikisi de içine yazabilir; hangisinin ne zaman yazdığını takip etmek senin işindir. Rust bu ihtimali baştan keser: yazma yetkisi tektir ve derleyici bunu kanıtlar.

Kuralın asıl kazancı [[concurrency|eşzamanlılıkta]] görünür. İki iş parçacığının aynı veriye aynı anda yazması veri yarışıdır ve bulunması en zor hata sınıflarından biridir; tek yazıcı kuralı bunu derleme anında imkânsız hâle getirir. Rust topluluğunda "fearless concurrency" denen şey büyük ölçüde bu kuraldır.

`&mut` ile aldığın şey bir kopya değildir: `*puan += 1` yazdığında değiştirdiğin, sahibin elindeki değerin ta kendisidir.

## Örnek

```rust
// DERLENMEZ
fn main() {
    let mut puan = 10;
    let a = &mut puan;           // tek yazıcı
    let b = &mut puan;           // ikincisi olmaz
    *a += 1;
    *b += 1;
}
```

```text
error[E0499]: cannot borrow `puan` as mutable more than once at a time
 --> ornek.rs:5:13
  |
4 |     let a = &mut puan;           // tek yazıcı
  |             --------- first mutable borrow occurs here
5 |     let b = &mut puan;           // ikincisi olmaz
  |             ^^^^^^^^^ second mutable borrow occurs here
```

```rust
// DERLENİR
fn zam_yap(puan: &mut i32) {
    *puan += 1;                  // ödünç alınan değeri yerinde değiştirir
}

fn main() {
    let mut puan = 10;
    zam_yap(&mut puan);          // ödünç bitince puan yine serbest
    zam_yap(&mut puan);
    println!("{puan}");          // 12
}
```

## Dikkat

`mut puan` ile `&mut puan` aynı şey değildir. Birincisi "bu değişkenin değeri [[mutability|değiştirilebilir]]" demektir, ikincisi "bu referans üzerinden değiştirmeye yetkilisin". `&mut` alabilmen için değişkenin zaten `mut` olması gerekir.

Adına bakıp "değiştirilebilir referans" kuralını yalnızca yazma iznine indirgemek yanıltır; bu ödüncün asıl anlamı **tekliktir**. O yüzden Rust belgelerinde sık sık "exclusive reference" da denir.
