---
term: "Trait (Rust)"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Bir tipin hangi davranışları sunduğunu tanımlayan sözleşme; Rust'ta ortak davranış kalıtımla değil trait'lerle paylaşılır."
related: [interface, impl-block, generics, polymorphism, rust]
disambiguation: [trait-nft]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Trait, bir tipin hangi davranışları sunacağını tanımlayan sözleşmedir: metot imzalarını sayar, isterse bazılarına varsayılan gövde de verir. Bir tip o metotları yazdığında trait'i "uygulamış" olur ve trait'i isteyen her yerde kullanılabilir.

Türkçede yerleşik bir karşılığı yok; [[interface|arayüz]] demek yakın düşer ama tam örtüşmez, bu yüzden Türk geliştiriciler de "trait" diyor.

## Nasıl çalışır?

Python'da iki yaklaşım vardır. Duck typing'de kimse bir şey ilan etmez: nesnenin `ozet()` metodu varsa çalışır, yoksa hata çalışma anında patlar. `abc` modülüyle soyut sınıf yazarsan sözleşme belgelenir ama kontrol yine büyük ölçüde çalışma anındadır. Rust'ta sözleşme tipin bir parçasıdır: `T: Ozet` yazan bir fonksiyona uygun olmayan bir tip verirsen program derlenmez.

İkinci fark, sözleşmenin sonradan da kurulabilmesidir. Bir trait'i, sen yazmamış olsan bile kendi tipine uygulayabilirsin; kendi trait'ini de başkasının tipine uygulayabilirsin. [[inheritance|Kalıtımdaki]] gibi bir tipi baştan doğru ağaca yerleştirmek zorunda değilsin.

Trait'leri iki biçimde kullanırsın: `T: Ozet` ile derleme anında çözülen (her tip için ayrı kod üretilir) ya da `dyn Ozet` ile çalışma anında çözülen çağrı.

## Örnek

```rust
trait Ozet {
    fn ozet(&self) -> String;
    fn etiket(&self) -> String { format!("[{}]", self.ozet()) } // varsayılan
}

struct Blok { yukseklik: u64 }
impl Ozet for Blok {
    fn ozet(&self) -> String { format!("blok #{}", self.yukseklik) }
}

fn yazdir<T: Ozet>(oge: &T) { println!("{}", oge.etiket()); }

fn main() {
    yazdir(&Blok { yukseklik: 21 });   // [blok #21]
}
```

## Dikkat

NFT dünyasındaki [[trait-nft|trait]] bambaşka bir şeydir: orada bir görselin özelliğini (arka plan rengi, şapka) anlatır, burada bir tipin davranış sözleşmesini.

Trait bir sınıf değildir: veri tutmaz, alan tanımlamaz. Veri [[struct|struct]]'ta durur, davranış [[impl-block|impl bloğunda]] yazılır, trait ise o davranışın adını ve şartını koyar.
