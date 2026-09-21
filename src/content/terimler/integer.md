---
term: "Integer"
tr: "Tam sayı"
aliases: ["tam sayı", "int"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Ondalık kısmı olmayan sayı tipi: -2, 0, 47 gibi."
related: [data-type, floating-point, integer-overflow-and-underflow, bit]
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

Tam sayı, ondalık kısmı olmayan sayıdır: `-2`, `0`, `47`. Ölçülen değil, sayılan şeyler için kullanılır — kaç kişi, kaç deneme, kaçıncı satır. Bilgisayarın en rahat çalıştığı [[data-type|veri tipi]]dir, çünkü yuvarlama diye bir sorunu yoktur.

Çoğu dilde bir tam sayı belirli sayıda [[bit|bit]] ile saklanır ve bu, alabileceği en büyük ve en küçük değeri baştan sınırlar. Sekiz bitlik işaretsiz bir tam sayı 0 ile 255 arasını tutar, daha fazlasını değil. Bu sınırın üstüne çıkıldığında sayı büyümeye devam etmez.

[[python|Python]] bu konuda alışılmadık davranır ve tam sayıları gerektiği kadar büyütür. Ama [[solidity|Solidity]], [[rust|Rust]] ve C gibi dillerde genişlik tipin adında yazılıdır (`uint256`, `i32`) ve sınır gerçektir.

## Benzetme

Eski arabaların mekanik kilometre sayacı gibi. Yalnızca tam sayıları sayar, yarım kilometre diye bir şey göstermez. Üstelik basamak sayısı sınırlıdır: `999999`'dan sonraki kilometrede tabloda `000000` belirir. Araba yeni değildir, sayacın yeri bitmiştir.

## Örnek

```python
print(7 // 2)   # 3
print(7 / 2)    # 3.5
```

`//` bölmenin tam kısmını verir ve tam sayı üretir.

## Dikkat

Sabit genişlikli tam sayılarda sınırın aşılması bazı dillerde sessizce yanlış sonuç doğurur; buna [[integer-overflow-and-underflow|taşma]] denir ve akıllı sözleşmelerde bakiye hesaplarını bozabildiği için ciddi bir güvenlik konusudur.

Bölme de şaşırtır. Python'da `/` her zaman ondalıklı sonuç verir, ama C, Java ve Rust gibi dillerde iki tam sayının bölümü yine tam sayıdır: `7 / 2` sonucu `3` olur, `3.5` değil.
