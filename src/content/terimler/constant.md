---
term: "Constant"
tr: "Sabit"
aliases: ["sabit"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Bir kez belirlendikten sonra program çalışırken değiştirilemeyen, ada bağlanmış değer."
related: [variable, mutability, data-type, clean-code]
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

Sabit, tıpkı bir [[variable|değişken]] gibi, bir değere verilmiş addır. Farkı, program çalışırken bu değerin değiştirilememesidir: bir kez belirlenir, sonuna kadar öyle kalır.

Sabit tanımlamanın iki sebebi var. Birincisi okunurluk: kodun ortasındaki `0.18` sayısı kimseye bir şey anlatmaz, `KDV_ORANI` anlatır. İkincisi güvenlik: bir değerin asla değişmemesi gerekiyorsa bunu yazıya dökersin ve ileride bir satır yanlışlıkla üzerine yazmaya kalkarsa dil seni uyarır.

Sabitin değerini değiştirmek elbette mümkündür. Kaynak koda döner, tanımın yazdığı tek satırı düzeltir, programı yeniden çalıştırırsın. Yasak olan, program çalışırken değiştirmektir.

## Benzetme

Maç öncesi boyanan saha çizgileri gibi. Çizgiler yerine oturduktan sonra kimse oyunun ortasında taca doğru bir metre kaydıramaz; herkesin aynı sınırlara güvenmesi oyunun işlemesini sağlar. Çizgiyi değiştirmenin tek yolu, maçı bitirip sahayı yeniden boyamaktır.

## Örnek

```python
SANIYE = 60
sure_dakika = 5
print(sure_dakika * SANIYE)   # 300
```

Python'da sabitler büyük harfle yazılır.

## Dikkat

Her dil sabitliği aynı sıkılıkta uygulamaz. Python'da büyük harfli ad yalnızca "buna dokunma" anlamına gelen bir anlaşmadır; dil seni gerçekten engellemez. JavaScript'teki `const` yeniden atamayı gerçekten engeller, ama bir listenin ya da nesnenin içeriğini değiştirmeni engellemez — orada işleyen kural [[mutability|değiştirilebilirlik]]tir.
