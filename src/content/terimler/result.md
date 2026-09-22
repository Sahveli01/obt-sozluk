---
term: "Result"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Sonucu ya `Ok(değer)` ya `Err(hata)` olarak döndüren enum; hata, akışı kesen bir olay değil, dönüş değerinin parçasıdır."
related: [error-handling, exception, option, unwrap, pattern-matching]
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

`Result<T, E>` iki varyantlı bir [[enum|enum]]'dur: `Ok(değer)` ya da `Err(hata)`. Rust'ta başarısız olabilecek bir işlem, hata fırlatmak yerine bu tipi döndürür. Böylece "bu iş ters gidebilir" bilgisi fonksiyonun imzasında, herkesin gördüğü yerde durur.

`Option` gibi bir tip adıdır, Türkçeleştirilmiyor.

## Nasıl çalışır?

Python'da hata ayrı bir kanaldan gelir: `raise` normal akışı keser, `try/except` onu bir yerlerde yakalar. Kazancı, ana akışın kontrol satırlarıyla dolmamasıdır; bedeli, bir fonksiyonun hangi hataları üretebileceğinin imzasından anlaşılmamasıdır.

Rust'ta hata dönüş değerinin parçasıdır. `iki_kati("21")` çağrısının sonucu doğrudan sayı değil, sayıyı içerebilecek bir `Result`'tır; içindekine ulaşmak için hangi varyant olduğuna bakman gerekir.

Her çağrıda dört satır kontrol yazmayı `?` işareti önler: `let sayi: i64 = metin.parse()?;` satırı "başarılıysa değeri al, hatalıysa bu fonksiyondan `Err` ile hemen çık" demektir. Kod böylece `try/except` kadar sade kalır ama çıkış noktaları görünür olur — `?` gördüğün her satır, oradan dönülebileceğini söyler.

Ayrıca `Result` göz ardı edilirse derleyici uyarır; sessizce yutulan hata, Rust'ta fark edilmeden geçmez.

## Örnek

```rust
use std::num::ParseIntError;

fn iki_kati(metin: &str) -> Result<i64, ParseIntError> {
    let sayi: i64 = metin.parse()?;   // hata olursa buradan çıkar
    Ok(sayi * 2)
}

fn main() {
    println!("{:?}", iki_kati("21"));    // Ok(42)
    match iki_kati("kırk bir") {
        Ok(s) => println!("sonuç: {s}"),
        Err(e) => println!("hata: {e}"), // hata: invalid digit found in string
    }
}
```

## Dikkat

`Result` ile [[option|`Option`]] karıştırılır: `Option` "değer yok" der, `Result` "neden olmadığını" da söyler. Yokluk normal bir durumsa `Option`, bir şeyin ters gitmesiyse `Result` kullanılır.

Rust'ta [[exception|istisna]] yoktur ama panik vardır. `Result` beklenen, ele alınabilir hataları taşır; panik ise programın devam etmesinin anlamsız olduğu durumlar içindir ve [[unwrap|`unwrap()`]] gibi metotlarla tetiklenir. [[error-handling|Hata yönetiminde]] asıl karar, bir durumun hangisine girdiğine karar vermektir.
