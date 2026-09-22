---
term: "unwrap"
tr: ""
aliases: ["expect"]
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "`Option` ya da `Result` içindeki değeri doğrudan alan metot; değer yoksa programı panikle durdurur."
related: [option, result, error-handling, pattern-matching]
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

`unwrap()`, bir [[option|`Option`]] ya da [[result|`Result`]] içindeki değeri "kontrol etmeden" alan metottur. `Some(42)` üzerinde çağırırsan `42` verir. `None` ya da `Err` üzerinde çağırırsan programı panikle durdurur.

Bir metot adı olduğu için çevrilmiyor; "unwrap'lamak" diye fiil hâlinde bile kullanılıyor.

## Nasıl çalışır?

`unwrap()` aslında tek dalı yazılmış bir [[pattern-matching|match]]'tir: değer varsa döndürür, yoksa `panic!` çağırır. Panik, programın o iş parçacığını durdurur; ekrana dosya adı ve satır numarasıyla birlikte sebebi yazar.

`expect("mesaj")` de aynı işi yapar, tek farkı panik mesajını senin yazmandır. Bu küçük fark pratikte büyük: `called Option::unwrap() on a None value` satırı sana hiçbir şey anlatmazken, `expect("yapılandırma dosyası okunamadı")` seni doğrudan sebebe götürür.

Panikten kaçınmanın yolları hazırdır: `unwrap_or(varsayılan)`, `unwrap_or_default()`, `unwrap_or_else(...)` ya da hatayı yukarı taşıyan `?` işareti.

## Örnek

```rust
fn main() {
    let iyi: Option<i32> = "42".parse().ok();
    println!("{}", iyi.unwrap());        // 42

    let kotu: Option<i32> = "kırk iki".parse().ok();
    println!("{}", kotu.unwrap());       // panik
}
```

Program derlenir, çalışır ve ikinci satırda durur:

```text
thread 'main' (54572) panicked at ornek.rs:6:25:
called `Option::unwrap()` on a `None` value
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

## Dikkat

Dürüst olalım: `unwrap()` örnek kodlarda, testlerde ve prototiplerde her yerdedir, çünkü gürültüyü azaltır ve öğrenirken konuyu dağıtmaz. Sorun, o prototipin olduğu gibi üretime taşınmasıdır.

Üretim kodunda ölçü şudur: değerin orada olduğunu **ispatlayabiliyorsan** `expect` ile gerekçeni yaz, ispatlayamıyorsan `match` ya da `?` ile durumu gerçekten ele al. Dışarıdan gelen veride — kullanıcı girdisi, ağ cevabı, dosya içeriği — `unwrap()` neredeyse her zaman yanlış tercihtir; çünkü orada "olmaması" beklenen değil, olağan bir ihtimaldir.
