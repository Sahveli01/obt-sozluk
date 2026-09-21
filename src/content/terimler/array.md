---
term: "Array"
tr: "Dizi"
aliases: ["dizi"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Birden çok değeri tek bir isim altında, numaralı sıralarda ve sabit bir boyutla tutan en temel veri yapısı."
related: [data-structure, list, tuple, memory-management, integer]
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

Dizi, birden çok değeri tek bir isim altında, numaralı sıralarda tutmanın en temel yoludur. Her değerin bir sıra numarası vardır ve bu numaralandırma neredeyse her dilde sıfırdan başlar: ilk eleman sıfırıncıdır, üçüncü eleman ikincidir. Buna "index" denir.

Klasik anlamıyla bir dizinin iki belirleyici özelliği vardır: boyutu baştan bellidir ve elemanları [[memory-management|bellekte]] arka arkaya durur. Bu ikisi diziyi çok hızlı yapar; beş yüzüncü elemanı istediğinde program baştan sayarak yürümez, o elemanın yerini tek bir çarpma işlemiyle hesaplar.

## Benzetme

Atletizm pistinin kulvarları gibi. Pist döşenirken kaç kulvar olacağına karar verilir; yarış başladıktan sonra araya bir kulvar daha sıkıştıramazsın. Buna karşılık "beş numaralı kulvar" dendiğinde kimse birinciden başlayıp saymaz, doğrudan oraya bakar.

## Örnek

Burada Rust seçtim, çünkü dizinin sabit boyutu Rust'ta tipin bir parçasıdır ve gözle görülür:

```rust
fn main() {
    let sicakliklar: [i32; 3] = [21, 19, 24];
    println!("{}", sicakliklar[0]);     // 21
    println!("{}", sicakliklar.len());  // 3
}
```

## Dikkat

"Dizi" kelimesi her dilde aynı şeyi anlatmaz. C ve Rust'ta dizi sabit boyutludur; JavaScript'in `Array`'i ise sonradan büyüyebilen bir [[list|listeye]] daha çok benzer, Python'da ise günlük işlerde dizi yerine `list` kullanılır. Bir dilde okuduğun "array" cümlesini başka bir dile olduğu gibi taşıma.

Bir de sınır aşımı var. Var olmayan bir sıra numarası istemek çoğu dilde temiz bir hata verir; bazı düşük seviyeli dillerde ise sessizce komşu belleği okumaya dönüşür ve asıl bela orada başlar.
