---
term: "Borrowing (Rust)"
tr: "Ödünç alma"
aliases: ["ödünç alma"]
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Bir değeri sahipliğini devretmeden referansla kullanmak; aynı anda ya çok sayıda okuyucuya ya tek bir yazıcıya izin verilir."
related: [ownership, borrow-checker, mutable-reference, reference, lifetime]
disambiguation: [borrowing-defi]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Ödünç alma, bir değeri [[ownership|sahipliğini]] devretmeden kullanmaktır. Değerin önüne `&` koyarsın ve elindeki şey değerin kendisi değil, ona açılmış geçici bir [[reference|referans]] olur. Sahip yerinde kalır; ödünç bitince hiçbir şey silinmez, yalnızca izin sona erer.

Kuralın tamamı tek cümle: bir değer aynı anda ya istediğin kadar çok okuyucu tarafından (`&T`) ya da tek bir yazıcı tarafından (`&mut T`) ödünç alınabilir; ikisi bir arada olmaz.

## Benzetme

Müzedeki bir tablo gibi. Sergideyken kaç ziyaretçi isterse aynı anda bakar, kimse kimsenin görüntüsünü bozmaz. Restoratör müdahale edecekse salon kapatılır: o sırada içeride tek kişi vardır. Tablonun sahibi hiç değişmez; değişen, o an kimin ne yapmaya yetkili olduğudur.

## Nasıl çalışır?

Python'da bir listeyi fonksiyona verdiğinde fonksiyon onu yerinde değiştirebilir ve bunu denetleyen bir şey yoktur; çağıran taraf değişmiş listeyle kalır. Rust aynı paylaşımı yapar ama bir şart koyar: değiştirme yetkisi aynı anda tek bir yerde olabilir.

Bu kural yalnızca düzen meselesi değildir. Bir yer okurken başka bir yerin aynı veriyi değiştirmesi, tek iş parçacığında bozuk veri, çok iş parçacığında veri yarışı demektir. Rust bu ihtimali [[concurrency|eşzamanlılık]] kütüphanesiyle değil, tipin kendisiyle kapatır.

## Örnek

```rust
// DERLENMEZ
fn main() {
    let mut sayilar = vec![1, 2, 3];
    let ilk = &sayilar[0];       // okuma ödüncü
    sayilar.push(4);             // yazma ödüncü: ikisi bir arada olmaz
    println!("{ilk}");
}
```

```text
error[E0502]: cannot borrow `sayilar` as mutable because it is also borrowed as immutable
 --> ornek.rs:5:5
  |
4 |     let ilk = &sayilar[0];       // okuma ödüncü
  |                ------- immutable borrow occurs here
5 |     sayilar.push(4);             // yazma ödüncü: ikisi bir arada olmaz
  |     ^^^^^^^^^^^^^^^ mutable borrow occurs here
```

```rust
// DERLENİR
fn topla(dilim: &[i32]) -> i32 {
    dilim.iter().sum()           // yalnızca okur
}

fn main() {
    let mut sayilar = vec![1, 2, 3];
    println!("{}", topla(&sayilar));
    sayilar.push(4);             // okuma ödüncü bitti, değiştirebiliriz
    println!("{}", topla(&sayilar));
}
```

## Dikkat

DeFi'deki [[borrowing-defi|borç alma]] ile aynı kelime olması tesadüftür: orada teminat karşılığı varlık çekersin, burada bir değere geçici erişim izni alırsın.

Kuralı koyan şey dilin tasarımı, uygulayan şey derleyicinin bir parçası olan [[borrow-checker|borrow checker]]'dır. "Ödünç alma" kuralın adıdır; hata mesajını sana getiren denetçi ayrı bir konudur.
