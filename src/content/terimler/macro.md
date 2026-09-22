---
term: "Macro"
tr: "Makro"
aliases: ["macro_rules"]
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Derleme sırasında kendi yerine kod üreten yapı; Rust'ta çağrısının sonundaki ünlem işaretinden tanınır."
related: [attribute, derive, compilation, boilerplate, rust]
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

Makro, derleme sırasında kendi yerine kod üreten bir yapıdır. Rust'ta çağrıldığı yerden tanınır: `println!`, `vec!`, `assert_eq!` — sonundaki ünlem işareti "bu bir fonksiyon değil, makro" demektir.

Python bilen için asıl fark burada. Python'un dekoratörü program çalışırken devreye girer: fonksiyonu alır, onu saran yeni bir fonksiyon döndürür ve o sarmalayıcı çalışma boyunca ortada durur. Rust makrosu ise program çalışmaya başlamadan çok önce, [[compilation|derleme]] aşamasında çalışır; yazdığın kaynağın o noktasına gerçek Rust kodu yerleştirir. Derleyici sonunda yalnızca açılmış hâli görür ve çalışma anında makrodan geriye hiçbir iz kalmaz.

## Nasıl çalışır?

İki tür makro vardır.

Bildirimsel makrolar `macro_rules!` ile yazılır ve kalıp eşlemeye dayanır: "girdi şu şekle benziyorsa, yerine şu kodu koy". Değişken sayıda argüman alabilmelerinin sebebi de budur — `println!` bir fonksiyon olsaydı argüman sayısı sabit olmak zorundaydı.

Yordamsal makrolar ise ayrı bir [[crate|crate]] içinde, Rust'ın kendisiyle yazılır: girdi olarak kodun parçalarını alır, çıktı olarak kod üretirler. `#[derive(...)]` ve birçok [[attribute|öznitelik]] makrosu bu türdendir.

## Örnek

Değişken sayıda argüman alan, kendi kendini çağıran küçük bir bildirimsel makro:

```rust
macro_rules! en_buyuk {
    ($ilk:expr) => { $ilk };
    ($ilk:expr, $($kalan:expr),+) => {
        { let k = en_buyuk!($($kalan),+); if $ilk > k { $ilk } else { k } }
    };
}

fn main() {
    println!("{}", en_buyuk!(3, 17, 8)); // 17
}
```

## Dikkat

Makro güçlüdür ama okuması zordur ve hata mesajları senin yazdığın satırı değil, üretilen kodu işaret edebilir. Bir makronun neye açıldığını göremediğin sürece hata ayıklaması yorucudur.

Genel kural şu: aynı işi bir fonksiyon ya da bir [[trait-rust|trait]] ile yapabiliyorsan onu tercih et. Makro, [[boilerplate|kalıp kodu]] azaltmanın son adımıdır — ilk adımı değil.
