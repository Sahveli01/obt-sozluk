---
term: "Boolean"
tr: ""
aliases: ["bool", "mantıksal değer"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Yalnızca iki değer alabilen tip: doğru ya da yanlış."
related: [data-type, conditional-statement, "null", integer]
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

Boolean, yalnızca iki değer alabilen [[data-type|veri tipi]]dir: doğru (`True`) ya da yanlış (`False`). Arası yoktur.

Programlardaki kararların tamamı bu tipe dayanır. "Kullanıcı giriş yapmış mı?", "sepet boş mu?", "sayı 18'den büyük mü?" — hepsinin cevabı tek bir boolean'dır ve [[conditional-statement|koşul ifadesi]] bu cevaba bakarak hangi kodun çalışacağına karar verir. Karşılaştırmalar da boolean üretir: `5 > 3` bir soru değil, sonucu `True` olan bir ifadedir.

Adı, mantığı cebirsel biçimde yazan matematikçi George Boole'dan gelir. Bir kişi adından türediği için Türkçeye çevrilmez; "mantıksal değer" denildiğine rastlarsın ama kodda yazdığın kelime `bool`'dur.

## Benzetme

Maçta VAR incelemesinden sonra verilen karar gibi. Hakem ekrana bakar ve tek bir şey söyler: penaltı var ya da yok. "Yüzde yetmiş penaltı" diye bir sonuç yoktur ve maçın devamı bu tek kelimeye göre şekillenir.

## Örnek

```python
yas = 20
yetiskin = yas >= 18
print(yetiskin)        # True
if yetiskin:
    print("giris serbest")
```

İkinci satır karşılaştırmanın sonucunu bir [[variable|değişkene]] koyar, `if` satırı da yalnızca ona bakar.

## Dikkat

Birçok dil, boolean olmayan değerleri de koşulda kullanmana izin verir: Python'da boş bir metin, `0` ve boş bir liste "yanlış" sayılır. Kolaylık gibi görünür ama karıştırır, çünkü `0` ile "değer yok" aynı şey değildir. Ne sorduğunu açıkça yazmak okunurluğu artırır.

Bir de `=` ile `==` karışır: birincisi atama yapar, ikincisi eşitlik sorar ve boolean üretir.
