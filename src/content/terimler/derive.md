---
term: "Derive"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Bir struct ya da enum için yaygın trait'lerin kodunu derleyiciye otomatik yazdıran öznitelik."
related: [attribute, trait-rust, macro, boilerplate, rust]
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

`#[derive(...)]`, bir veri yapısının üstüne yazdığında derleyicinin senin yerine belirli [[trait-rust|trait]]'lerin kodunu üretmesini sağlayan bir [[attribute|özniteliktir]]. `#[derive(Debug, Clone, PartialEq)]` yazarsın; o yapının nasıl yazdırılacağı, nasıl kopyalanacağı ve iki örneğinin nasıl karşılaştırılacağı kendiliğinden doğar.

Python'da `@dataclass` neredeyse aynı işi yapar: sınıfın alanlarına bakıp `__init__`, `__repr__` ve `__eq__` metotlarını üretir. Aradaki fark, `@dataclass`'ın bu metotları sınıf tanımlanırken, yani program çalışırken oluşturması; `derive`'ın ise derleme anında üretmesidir. Üretilen kod diğer kodlar gibi denetlenir ve en iyileştirilir.

`derive` bir öznitelik adıdır, kodda İngilizce hâliyle yazılır; Türkçe metinde çoğunlukla "türetmek" fiiliyle anılır.

## Nasıl çalışır?

`derive` yalnızca bunu destekleyen trait'lerle çalışır. Standart kütüphanede en sık kullanılanlar: `Debug` (`{:?}` ile yazdırma), `Clone` ve `Copy` (kopyalama), `PartialEq` ile `Eq` (eşitlik), `PartialOrd` ile `Ord` (sıralama), `Hash` ve `Default`.

Üretilen kod alan alan çalışır: `PartialEq` türettiğinde iki değer ancak bütün alanları eşitse eşit sayılır. İstediğin anlam bu değilse — diyelim ki bir alanın karşılaştırmaya girmemesi gerekiyor — `derive` yazmaz, trait'i elle uygularsın.

Kütüphaneler kendi türetilebilir trait'lerini de tanımlayabilir; bunlar arka planda birer yordamsal [[macro|makro]]dur. Serileştirme kütüphanelerinin `#[derive(Serialize, Deserialize)]` satırı bunun en bilinen örneğidir.

## Örnek

```rust
#[derive(Debug, Clone, PartialEq)]
struct Kullanici {
    ad: String,
    puan: u32,
}

fn main() {
    let a = Kullanici { ad: "Ada".to_string(), puan: 10 };
    let b = a.clone();
    println!("{a:?}");            // Kullanici { ad: "Ada", puan: 10 }
    println!("{}", a == b);       // true
}
```

## Dikkat

Her trait türetilemez ve her trait türetilmemelidir. Bir yapının alanlarından biri o trait'i desteklemiyorsa derleme hata verir; [[boilerplate|kalıp kodu]] kısaltma isteğiyle listeye hepsini yazmak bu yüzden iyi bir alışkanlık değildir.

Daha ince bir tuzak: `Debug` türetmek yapının bütün alanlarını yazdırılabilir hâle getirir. İçinde özel anahtar, parola ya da kişisel veri tutan bir yapıya düşünmeden `Debug` koyarsan, o değerler bir gün günlük kayıtlarında ya da bir hata mesajında görünür.
