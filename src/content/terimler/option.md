---
term: "Option"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Değerin olmayabileceğini tipin içine yazan enum: ya `Some(değer)` ya `None`; derleyici iki ihtimali de ele almanı ister."
related: ["null", pattern-matching, result, unwrap, enum]
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

`Option<T>` iki varyantlı bir [[enum|enum]]'dur: `Some(değer)` ya da `None`. "Burada bir değer olmayabilir" bilgisini yoruma ya da belgeye değil, tipin kendisine yazar. Rust'ta ayrıca bir [[null|null]] yoktur; yokluğun tek ifadesi budur.

Bir tip adı olduğu için Türkçeleştirilmiyor; kodda `Option` diye geçer.

## Benzetme

Elindeki zarf gibi. İçinde belge olabilir, boş da gelmiş olabilir. Belgeyi okumak için önce zarfı açman gerekir ve açtığında iki ihtimale de hazır olmak zorundasın. Zarfın üstünde "içinde belge olmayabilir" yazıyor; bunu görmezden gelip elini içeri sokamıyorsun.

## Nasıl çalışır?

Python'da `None` her yerden gelebilir. Bir fonksiyonun imzasına bakıp `None` döndürüp döndürmeyeceğini anlayamazsın, anlamadığın için de kontrol yazmayı unutursun; sonucu çalışma anında bir `AttributeError` olarak görürsün.

Rust'ta `Option<char>` ile `char` ayrı tiplerdir. `Option<char>` içindeki karaktere doğrudan erişemezsin: ya [[pattern-matching|match]] ile iki dalı da yazarsın, ya `if let Some(h)` dersin, ya da `unwrap_or` gibi bir yardımcıyla yokluk durumuna bir cevap verirsin. Kontrolü unutmak mümkün değildir, çünkü kontrol etmeden değere ulaşmanın yolu yoktur.

Bu güvencenin bedeli yazım yüküdür — ama pratikte `map`, `and_then`, `unwrap_or_default` gibi metotlar sayesinde çoğu durum tek satıra iner.

## Örnek

```rust
fn ilk_harf(ad: &str) -> Option<char> {
    ad.chars().next()            // boş metinde None döner
}

fn main() {
    match ilk_harf("rust") {
        Some(h) => println!("ilk harf: {h}"),
        None => println!("metin boş"),
    }
    println!("{}", ilk_harf("").unwrap_or('-'));  // kısa yol: '-'
}
```

Aynı fonksiyonun Python hâlinde ise hata ancak çalışırken görünür:

```python
def ilk_harf(ad):
    return ad[0] if ad else None

print(ilk_harf("rust").upper())   # R
print(ilk_harf("").upper())       # AttributeError: 'NoneType' object has no attribute 'upper'
```

## Dikkat

`Option` "değer yok" der, "bir şey ters gitti" demez. Neyin ters gittiğini de anlatman gerekiyorsa aradığın tip [[result|`Result`]]'tır; `None` sana sebebi söylemez.

`Option`'ın içine ulaşmanın en kısa yolu [[unwrap|`unwrap()`]]'tır ve tam da bu yüzden en tehlikelisidir: `None` geldiğinde programı durdurur.
