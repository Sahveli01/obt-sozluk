---
term: "Bit"
tr: "Bit"
aliases: ["ikili basamak"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Bilgisayardaki en küçük bilgi birimi: yalnızca iki değer alabilen tek bir basamak, 0 ya da 1."
related: [byte, binary, boolean, hexadecimal, entropy]
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

Bit, bilgisayardaki en küçük bilgi birimidir ve yalnızca iki değer alabilir: 0 ya da 1. Adı "binary digit", yani ikili basamak sözünün kısaltmasıdır. Donanımda bu iki değer akımın geçip geçmemesi gibi fiziksel bir farka karşılık gelir.

Tek bir bit tek bir ayrımı taşır. İki bit yan yana geldiğinde dört farklı desen olur, üç bit sekiz desen. Her yeni bit olasılık sayısını ikiye katlar. Sekiz bitlik bir grubun özel bir adı vardır: bir [[byte|bayt]]. Bitlerin bir sayı oluşturacak şekilde dizilmesine ise [[binary|ikili sayı sistemi]] denir. Sözlükteki bit, bayt ve ikili maddeleri bu üçlü zincirin halkalarıdır.

## Benzetme

Yirmi soruluk tahmin oyunu gibi. Karşındaki bir şey tutar, sen yalnızca evet-hayır soruları sorarsın. Her cevap, olasılıkları tam yarıya indirir; işte o tek cevabın taşıdığı bilgi miktarı bir bittir. Yirmi iyi soruyla bir milyondan fazla seçenek arasından tek bir şeyi bulabilmenin sebebi de budur.

## Örnek

```python
print(2 ** 1)    # 2     -> 1 bit, 2 olasılık
print(2 ** 8)    # 256   -> 8 bit (1 bayt), 256 olasılık
print(2 ** 16)   # 65536 -> 16 bit, 65 binden fazla olasılık
```

## Dikkat

Bit ile baytı karıştırma; kısaltmalarda küçük "b" bit, büyük "B" bayt demektir. İnternet hızının 100 Mb/s olması saniyede 100 megabayt indirmek değil, yaklaşık sekizde biri kadarı demektir.

Kriptografide anahtar uzunlukları bit cinsinden konuşulur. "256 bitlik özel anahtar" ifadesi, anahtarın 2'nin 256'ncı kuvveti kadar farklı değerden biri olabileceği anlamına gelir; güvenliğin dayandığı sayı bu kadar büyük bir olasılık uzayıdır.
