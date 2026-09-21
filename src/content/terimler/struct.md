---
term: "Struct"
tr: ""
aliases: ["yapı kaydı"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Birbirine ait değerleri adlandırılmış alanlar hâlinde tek bir tip altında toplayan veri kalıbı."
related: [enum, hash-map-dictionary, data-type, object, rust]
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

Struct, birbirine ait değerleri adlandırılmış alanlar hâlinde tek bir tip altında toplamanın yoludur. Bir kullanıcıyı temsil etmek için ad, yaş ve e-posta değişkenlerini ayrı ayrı taşımak yerine, içinde bu üç alanın bulunduğu tek bir `Kullanici` tipi tanımlarsın. Artık ortalıkta üç değişken değil bir değer dolaşır.

"Yapı" çevirisi bazı kaynaklarda geçse de sektörde yerleşmemiştir; terim `struct` anahtar kelimesiyle birlikte İngilizce kullanılır, bu yüzden burada çevrilmedi.

## Nasıl çalışır?

Struct bir kalıptır: tipi tanımlarken hangi alanların bulunacağını ve her alanın [[data-type|veri tipini]] belirtirsin. Sonra bu kalıptan istediğin kadar değer üretirsin; hepsinin şekli aynıdır, içerikleri farklıdır. Alanlara adlarıyla erişilir, sıra numarasıyla değil — bu da kodu okuyan kişinin `k.yas` yazısına bakıp ne olduğunu anlamasını sağlar.

Bir struct'ın alanları tanımlandığı anda kesinleşir. Çalışma zamanında yeni bir alan ekleyemezsin; eklemek istiyorsan tipi değiştirmen gerekir. Bu kısıtlama bir eksiklik değil, güvencedir: derleyici olmayan bir alana erişmeye çalıştığında kodu derlemez bile.

## Benzetme

Gıda ambalajındaki besin değerleri tablosu gibi. Hangi markayı alırsan al tablodaki satırlar aynıdır — enerji, protein, yağ, tuz — yalnızca karşılarındaki sayılar değişir. Bir üretici canı istedi diye o tabloya "raf ömrü" satırı ekleyemez; tablo herkes için aynı şekle sahiptir.

## Örnek

Burada Rust kullandım, çünkü Python'da bu işi sınıflar üstlenir ve struct'ın "davranış değil, yalnızca veri" hâli gözden kaybolur:

```rust
struct Kullanici {
    ad: String,
    yas: u8,
}

fn main() {
    let k = Kullanici { ad: String::from("Deniz"), yas: 22 };
    println!("{} / {}", k.ad, k.yas);
}
```

## Dikkat

Struct ile hash map'i karıştırma. Struct'ın alanları kodu yazarken bellidir ve sabittir; [[hash-map-dictionary|hash map'in]] anahtarları ise program çalışırken belirlenir. Şekli önceden bildiğin veride struct kullanmak, yazım hatalarını çalışma zamanından derleme zamanına çeker.

Struct her dilde aynı ağırlıkta değildir. Bazı dillerde struct ile sınıf arasında kopyalanma biçimi gibi ince ama önemli farklar vardır; yeni bir dile geçerken bu farkı ayrıca okumak gerekir.
