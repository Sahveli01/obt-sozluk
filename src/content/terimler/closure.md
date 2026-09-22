---
term: "Closure"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Tanımlandığı yerdeki değişkenleri yanında taşıyabilen isimsiz fonksiyon."
related: [function, callback, iterator, ownership, rust]
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

Closure, tanımlandığı yerdeki değişkenleri yanında taşıyabilen isimsiz [[function|fonksiyondur]]. Rust'ta `|x| x > esik` biçiminde yazılır: dikey çizgiler arasında parametreler, sonrasında gövde. Buradaki `esik` closure'ın kendi parametresi değildir, çevresinden yakaladığı bir değerdir.

Türkçede "kapanış" ya da "kapama" denen olsa da yerleşmiş değil; Türk geliştiriciler de "closure" diyor.

## Benzetme

Kendi bıçak takımıyla gelen aşçı gibi. Nerede çalışırsa çalışsın işini kendi takımıyla görür; takım mutfağın değil, onun yanındadır. Tek soru şudur: takımı ödünç mü aldı yoksa tamamen yanına mı aldı? Rust'ta bu sorunun cevabı önemlidir, çünkü aşçı mutfaktan çıktıktan sonra takımın kime ait olduğu belli olmalıdır.

## Nasıl çalışır?

Python'da `lambda` ve iç içe fonksiyonlar da çevrelerindeki değişkenleri yakalar, ama nasıl yakaladıkları tek bir yoldur: dış kapsamdaki isme bağlı kalırlar. Rust'ta yakalama biçimi closure'ın tipinin parçasıdır ve üç ihtimal vardır: değeri yalnızca okumak için [[borrowing-rust|ödünç alır]] (`Fn`), değiştirmek için ödünç alır (`FnMut`) ya da [[ownership|sahipliğini]] devralır (`FnOnce`). Hangisi olduğunu derleyici gövdeye bakıp kendi çıkarır.

`move` anahtar kelimesi yakalamayı zorla sahiplenmeye çevirir. Bu bir hız ayarı değil, ömür meselesidir: closure'ı başka bir iş parçacığına gönderiyorsan ya da fonksiyondan döndürüyorsan, yakaladığı değerlerin onunla birlikte gitmesi gerekir.

İkinci fark yazımda: Python'da `lambda` tek bir ifadeyle sınırlıdır, Rust closure'ı istediğin kadar uzun bir blok olabilir.

## Örnek

```rust
fn main() {
    let esik = 100;
    let buyuk_mu = |x: u64| x > esik;    // esik'i ödünç alır
    println!("{}", buyuk_mu(250));       // true

    let ad = String::from("ada");
    let selam = move || println!("merhaba {ad}"); // ad'ı sahiplenir
    selam();

    let mut sayac = 0;
    let mut artir = || { sayac += 1; };  // ortamı değiştirir
    artir(); artir();
    println!("{sayac}");                 // 2
}
```

## Dikkat

Closure'ı değiştiren bir closure'sa (`FnMut`) onu tutan değişkenin de `mut` olması gerekir — yukarıdaki `let mut artir` bunun için.

`move` yazmak her zaman doğru çözüm değildir. Sorunu susturmak için refleks hâline getirirsen değerleri gereksiz yere kopyalar ya da dışarıda kullanmak istediğin bir değişkeni farkında olmadan closure'a kaptırırsın.
