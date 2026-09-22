---
term: "Checksum"
tr: "Sağlama toplamı"
aliases: ["sağlama toplamı"]
category: kriptografi
subcategory: "Temeller"
level: baslangic
short: "Bir veriden hesaplanan küçük doğrulama değeri; verinin yazım ya da aktarım sırasında bozulup bozulmadığını yakalar."
related: [wallet-address, base58, hash-function, encoding, bip-39]
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

Checksum, bir verinin kendisinden hesaplanan ve onunla birlikte taşınan küçük bir kontrol değeridir. Veriyi alan taraf hesabı yeniden yapar; tutmuyorsa bir şeyin bozulduğunu anlar.

Blockchain'de en çok [[wallet-address|cüzdan adreslerinde]] karşına çıkar. Adresin içine gömülü sağlama, bir karakteri yanlış yazdığında ya da eksik kopyaladığında cüzdanın "bu adres geçersiz" demesini sağlar. Aynı fikir [[bip-39|BIP-39]] kelimelerinde de vardır.

## Benzetme

Kimlik numarasının son hanesi gibi. O hane keyfî değildir, önceki hanelerden hesaplanır. Bir rakamı yanlış yazdığında sistem numarayı kime ait olduğunu bilmeden reddeder — yalnızca "bu numara kendi içinde tutmuyor" der.

## Dikkat

Checksum kazayı yakalar, saldırıyı yakalamaz. Veriyi kasten değiştiren biri sağlamayı da yeniden hesaplar ve sonuç yine tutarlı görünür. Kasıtlı değişikliğe karşı koruma için gizli anahtarla üretilen bir değer ([[hmac|HMAC]]) ya da bir imza gerekir.

Bir adresin sağlamadan geçmesi de doğru adres olduğu anlamına gelmez. Sağlama yalnızca adresin bozulmadığını söyler; geçerli ama başkasına ait bir adrese yapılan gönderiyi hiçbir sağlama durdurmaz.
