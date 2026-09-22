---
term: "Iterator"
tr: "Yineleyici"
aliases: ["yineleyici"]
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Öğeleri tek tek, istendikçe üreten yapı; `next()` çağrılmadığı sürece hiçbir şey hesaplanmaz."
related: [loop, closure, zero-cost-abstraction, list, rust]
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

Iterator, bir dizi öğeyi tek tek, istendikçe üreten yapıdır. Rust'ta tek bir metodu olan bir [[trait-rust|trait]]'tir: `next()`. Her çağrıda ya sıradaki öğeyi ya da "bitti" bilgisini döndürür; [[loop|döngüler]], `for` dâhil, arka planda bunu çağırır.

## Nasıl çalışır?

Python'da generator ne yapıyorsa Rust'ta iterator zinciri de onu yapar: tembeldir. `filter` ve `map` yazdığın anda hiçbir hesap yapılmaz, yalnızca "yapılacak iş" tarif edilmiş olur. İş, `sum()`, `collect()` ya da bir `for` döngüsü gibi bir tüketici geldiğinde başlar ve öğeler baştan sona **tek geçişte** işlenir; ara listeler oluşmaz.

İki fark var. Birincisi, Rust'ta iterator bir trait olduğu için kendi tipine de uygulayabilirsin; kendi yapını yazdığında `map`, `filter`, `take` gibi onlarca hazır metot bedavaya gelir. İkincisi maliyet: Python'da her `next()` çağrısı çalışma anında gerçek bir çağrıdır, Rust'ta zincir derleme sırasında eritilir ([[zero-cost-abstraction|sıfır maliyetli soyutlama]]).

## Örnek

```rust
fn main() {
    let tutarlar = vec![10u64, 250, 7, 400];
    let toplam: u64 = tutarlar
        .iter()
        .filter(|t| **t > 100)     // henüz hiçbir şey hesaplanmadı
        .map(|t| t * 2)
        .sum();                    // zincir ancak burada çalışır
    println!("{toplam}");          // 1300

    let mut adimlar = tutarlar.iter();
    println!("{:?} {:?}", adimlar.next(), adimlar.next()); // Some(10) Some(250)
}
```

Python'daki karşılığı da aynı tembellikte çalışır:

```python
tutarlar = [10, 250, 7, 400]
zincir = (t * 2 for t in tutarlar if t > 100)  # tembel generator
print(sum(zincir))                              # 1300
```

## Dikkat

Tembellik en sık buradan ısırır: sonlandırıcı bir metot çağırmazsan zincir hiç çalışmaz. Yan etki için `map` yazmak yaygın bir hatadır ve derleyici bu durumda `iterators are lazy and do nothing unless consumed` diye uyarır; yan etki istiyorsan `for` döngüsü ya da `for_each` kullanılır.

`iter()`, `iter_mut()` ve `into_iter()` farklıdır: birincisi öğeleri [[borrowing-rust|ödünç alır]], ikincisi değiştirmek üzere ödünç alır, üçüncüsü [[ownership|sahipliği]] devralır ve koleksiyonu tüketir.
