---
term: "Borrow Checker"
tr: ""
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Rust derleyicisinin ödünç alma ve yaşam süresi kurallarını denetleyen, uymayan programı derlemeyi reddeden parçası."
related: [borrowing-rust, ownership, lifetime, compiler, memory-safety, rust]
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

Borrow checker, Rust [[compiler|derleyicisinin]], [[borrowing-rust|ödünç alma]] ve [[lifetime|yaşam süresi]] kurallarına uyulup uyulmadığını denetleyen parçasıdır. Kuralları o koymaz, uygular: uymayan programı derlemeyi reddeder ve nerede takıldığını satır satır anlatır.

Türkçede yerleşmiş bir karşılığı yok; Türk geliştiriciler de "borrow checker" diyor, o yüzden burada da İngilizce bırakıldı.

## Nasıl çalışır?

Denetim çalışma anında değil, derleme sırasında yapılır. Derleyici her referansın nerede doğduğunu ve **en son nerede kullanıldığını** izler; ödünç, kapsamın sonunda değil son kullanımında biter. Bu davranışın adı non-lexical lifetimes'tır ve çok kişinin "burada hata vermesi gerekmez miydi" dediği durumların cevabıdır.

Karşılığında denetçi ihtiyatlıdır: kanıtlayamadığı her programı reddeder. Yani "borrow checker kabul etti" demek program güvenli demektir, ama "reddetti" demek program yanlış demek değildir — yalnızca güvenliği o biçimde ispatlanamamıştır.

## Örnek

```rust
// DERLENİR
fn main() {
    let mut sayilar = vec![1, 2, 3];
    let ilk = &sayilar[0];       // okuma ödüncü başlar
    println!("{ilk}");           // ve son kullanımıyla burada biter
    sayilar.push(4);             // bu yüzden bu satır sorun değil
    println!("{sayilar:?}");     // [1, 2, 3, 4]
}
```

Son iki satırın yerini değiştirmek yeter: `println!("{ilk}")` aşağı inerse ödünç `push` çağrısının üstünden atlamak zorunda kalır ve derleyici `error[E0502]` verir.

## Dikkat

Ödünç alma ile borrow checker'ı ayırmak kolaylaştırır: biri kuraldır, diğeri kuralı uygulayan mekanizma. "Ödünç alma nedir" sorusunun cevabı dilin tasarımında, "neden derlenmiyor" sorusunun cevabı denetçinin mesajındadır.

İkinci nokta: denetçiyi susturmanın yolu [[unsafe-rust|`unsafe`]] yazmak değildir. `unsafe` yalnızca ham [[pointer|işaretçilerle]] çalışmak gibi birkaç işlemi açar; ödünç kuralları o blokların içinde de geçerlidir, sorumluluk sana geçer.
