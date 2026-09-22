---
term: "Attribute"
tr: "Öznitelik"
aliases: []
category: programlama
subcategory: "Rust kavramları"
level: orta
short: "Bir kod parçasının üstüne iliştirilen ve derleyiciye o parça hakkında bir şey söyleyen `#[...]` etiketi."
related: [macro, derive, clippy, unit-test, rust]
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

Öznitelik, bir kod parçasının üstüne iliştirilen ve derleyiciye o parça hakkında bir şey söyleyen etikettir. Yazımı `#[...]` şeklindedir ve etiketlediği şeyin hemen üstüne konur: bir fonksiyon, bir struct, bir alan ya da bir modül.

Öznitelik kendi başına kod çalıştırmaz; derleyicinin davranışını değiştirir. Söylediği şey "bu fonksiyon bir testtir", "bu modülü yalnızca test derlemesinde derle", "bu uyarıyı burada gösterme" gibi cümlelerdir.

## Nasıl çalışır?

İki yazım biçimi vardır. `#[...]` kendisinden sonra gelen öğeye uygulanır. `#![...]` ise içinde bulunduğu dosyanın ya da [[crate|crate]]'in tamamına uygulanır — `no_std` bildiriminin dosyanın en üstünde `#![no_std]` diye yazılmasının sebebi budur.

Günlük hayatta en çok görülenler:

- `#[derive(...)]` — [[derive|otomatik trait üretimi]].
- `#[test]` ve `#[cfg(test)]` — [[unit-test|birim testleri]] ve yalnızca test derlemesinde var olan kod.
- `#[allow(...)]`, `#[deny(...)]` — derleyici ya da [[clippy|Clippy]] uyarılarını bu kapsamda aç ya da kapat.

Standart kütüphane dışındaki kütüphaneler de kendi özniteliklerini tanımlayabilir; bunlar arka planda birer [[macro|makro]]dur.

Python'daki `@dataclass` gibi dekoratörlerle aynı yere otururlar. Fark, dekoratörün nesneyi çalışma anında sarması, özniteliğin ise derleme anında kodu etkilemesidir.

## Örnek

```rust
#[derive(Debug)] // struct'a yazdırılabilirlik kazandırır
struct Sayac {
    deger: u32,
}

#[cfg(test)] // bu modül yalnızca `cargo test` sırasında derlenir
mod testler {
    use super::Sayac;

    #[test] // bu fonksiyon bir testtir
    fn baslangic_sifir() {
        assert_eq!(Sayac { deger: 0 }.deger, 0);
    }
}
```

## Dikkat

Bir uyarıyı `#[allow(...)]` ile susturmak meşru bir hamledir, ama etkisini olabildiğince küçük tut: dosyanın tamamını kapsayan `#![allow(...)]` yerine yalnızca ilgili fonksiyonun üstüne koy. Aksi hâlde aynı uyarı bir gün gerçekten önemli bir yerde çıkar ve kimsenin dikkatini çekmez.

`#[cfg(...)]` ile kapattığın kod ise derlenmez — yani orada bir yazım hatası varsa uzun süre fark edilmez.
