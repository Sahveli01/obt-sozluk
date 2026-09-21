---
term: "Enum"
tr: ""
aliases: ["enumeration"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Bir değerin alabileceği bütün halleri önceden sayan ve bu listenin dışına çıkılmasına izin vermeyen tip."
related: [struct, pattern-matching, boolean, option, result]
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

Enum, bir değerin alabileceği bütün halleri önceden sayan tiptir. Bir başvurunun durumu yalnızca "bekliyor", "onaylandı" veya "reddedildi" olabiliyorsa, bu üçünü tek bir tip altında listelersin. Artık o değere dördüncü bir şey yazılamaz.

`enum` kelimesi "enumeration", yani sayıp dökme anlamına gelir. Türkçede "numaralandırma" gibi karşılıklar önerilse de yerleşmemiştir; sektörde terim `enum` olarak kullanılır, bu yüzden burada çevrilmedi.

## Nasıl çalışır?

Enum tanımladığın anda derleyici o listeyi bilir. Bu iki şey kazandırır. Birincisi, listenin dışına çıkan bir atama derleme zamanında hata verir — yazım hatası programı çalıştırmadan önce yakalanır. İkincisi, [[pattern-matching]] ile değeri ele alırken derleyici "bu hali unuttun" diye uyarabilir; yeni bir hal eklediğinde onu işlemeyi atladığın her yer anında ortaya çıkar.

Bazı dillerde enum bundan fazlasını yapar: her hale ayrıca veri iliştirilebilir. Rust'ta reddedilme halinin yanında sebebi de taşımak mümkündür. Dilin en çok kullanılan iki tipi, [[option|Option]] ve [[result|Result]], işte böyle enum'lardır.

## Benzetme

Trafik lambası gibi. Lambanın üç hali vardır ve hepsi baştan bellidir. "Turuncuya çalan bir yeşil" diye bir hal icat edemezsin; direğin içinde öyle bir ampul yoktur. Yolu geçmeye karar veren kişi de üç halden hangisinde ne yapacağını tek tek bilmek zorundadır.

## Örnek

Rust seçtim, çünkü hale veri iliştirme ve derleyicinin bütün halleri denetlemesi en net orada görünür:

```rust
enum Durum {
    Bekliyor,
    Onaylandi,
    Reddedildi { sebep: String },
}

fn main() {
    let d = Durum::Reddedildi { sebep: String::from("imza yok") };
    match d {
        Durum::Bekliyor => println!("bekliyor"),
        Durum::Onaylandi => println!("onaylandı"),
        Durum::Reddedildi { sebep } => println!("reddedildi: {sebep}"),
    }
}
```

## Dikkat

Enum yerine düz metin kullanmak yaygın bir kestirmedir ve pahalıya patlar. `"onaylandi"` yerine yanlışlıkla `"onaylandı"` yazdığında hiçbir derleyici seni uyarmaz; hata aylar sonra, tek bir kullanıcıda ortaya çıkar. [[boolean|Boolean]] ile de karıştırma: iki halden fazlası varsa doğru araç enum'dır.

Enum değerleri arka planda çoğunlukla küçük tam sayılarla temsil edilir. Bu yüzden listeye ortadan yeni bir hal eklemek, kaydedilmiş eski verinin anlamını kaydırabilir; sıraya bağlı veri saklıyorsan yeni halleri sona ekle.
