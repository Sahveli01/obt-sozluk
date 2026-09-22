---
term: "Pattern Matching"
tr: "Örüntü eşleme"
aliases: ["örüntü eşleme"]
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Bir değerin şeklini kontrol edip içindeki parçaları aynı hamlede çıkarma; Rust'ta bütün ihtimalleri ele almak zorunludur."
related: [enum, option, result, conditional-statement, rust]
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

Örüntü eşleme, bir değerin hangi şekle uyduğuna bakıp içindeki parçaları aynı hamlede çıkarmaktır. Rust'ta `match` ile yapılır ve iki iş bir arada görülür: hangi durumda olduğunu anlarsın, o durumun taşıdığı veriyi de elde edersin.

## Nasıl çalışır?

Python 3.10'dan beri `match` var, ama önemli bir fark taşır: Python'da hiçbir dal tutmazsa `match` sessizce geçer. Rust'ta bu mümkün değildir — `match` **tüketici** olmak zorundadır, yani her ihtimale karşılık gelen bir dal bulunmalıdır. Bir [[enum|enum]]'a yeni bir varyant eklediğinde, onu ele almayan bütün `match` blokları derlenmez. Bu, "yeni durumu eklemeyi unuttum" hatasını ortadan kaldırır.

Dalların içinde parçalara isim verirsin (`Islem::Cagri(ad)`), koşul ekleyebilirsin (`if *tutar > 100` — buna guard denir) ve yapıların içine inebilirsin. Dallar yukarıdan aşağıya denenir; ilk uyan kazanır, bu yüzden özel durum genel durumun üstüne yazılır.

Tek bir ihtimalle ilgileniyorsan `if let` kısa yolunu kullanırsın; `match` yazmadan tek dalı ele alır.

## Örnek

```rust
enum Islem { Transfer { tutar: u64 }, Cagri(String) }

fn anlat(i: &Islem) -> String {
    match i {
        Islem::Transfer { tutar } if *tutar > 100 => format!("büyük transfer: {tutar}"),
        Islem::Transfer { tutar } => format!("transfer: {tutar}"),
        Islem::Cagri(ad) => format!("çağrı: {ad}"),
    }
}

fn main() {
    println!("{}", anlat(&Islem::Transfer { tutar: 250 }));
    println!("{}", anlat(&Islem::Cagri("mint".into())));
}
```

## Dikkat

`_` dalı "geri kalan her şey" demektir ve tüketicilik şartını her zaman sağlar — ama bunu yazdığın anda derleyicinin sana yeni varyantları hatırlatma imkânını da kapatmış olursun. Gerçekten umursamadığın durumlarda kullan, tembellikten değil.

`match` bir ifadedir, deyim değil: bir değer üretir ve doğrudan bir değişkene atanabilir. Bu yüzden Rust kodunda `if/else` merdivenlerine Python'dakinden daha az rastlarsın.
