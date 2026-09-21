---
term: "String"
tr: "Karakter dizisi"
aliases: ["karakter dizisi"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Harf, rakam ve işaretlerden oluşan, sırası anlamlı metin değeri."
related: [data-type, integer, byte, array, regular-expression-regex]
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

String, metin tutmak için kullanılan [[data-type|veri tipi]]dir. İçinde ne varsa — harf, rakam, boşluk, noktalama — hepsi karakter olarak, yazıldığı sırayla saklanır. Kodda tırnak içine alınarak yazılır: `"merhaba"`.

Sıranın anlamlı olması stringin en belirleyici özelliğidir. `"ali"` ile `"ila"` aynı harfleri taşır ama bunlar farklı iki değerdir. Aynı sebeple her karakterin bir sırası vardır ve dillerin çoğu "üçüncü karakteri ver" ya da "ilk beş karakteri al" demene izin verir.

Türkçede "karakter dizisi" denir, ama hem konuşurken hem kodda herkes string der.

## Benzetme

İpe dizilmiş boncuklar gibi. Boncukların tek tek kendileri kadar hangi sırayla dizildikleri de önemlidir; sırayı değiştirirsen desen değişir. İpin bir başı, bir sonu vardır ve her boncuğun kaçıncı olduğu bellidir.

## Örnek

```python
ad = "Ayse"
print(len(ad))         # 4
print(ad[0])           # A
print(ad + " Yilmaz")  # Ayse Yilmaz
```

`len` karakter sayısını verir, `[0]` ilk karakteri. Sayma sıfırdan başlar.

## Dikkat

Metin hâlindeki bir sayı, sayı değildir. Telefon numaraları bu yüzden bilerek metin olarak saklanır: sayıya çevirirsen baştaki sıfır kaybolur ve numara bozulur.

İkinci incelik: karakter sayısı ile kapladığı yer aynı şey değildir. `ğ` ya da bir emoji tek karakterdir ama bellekte birden fazla [[byte|bayt]] tutar. Metin uzunluğuyla dosya boyutunu karıştıran kod, Türkçe karakterlerde tökezler.
