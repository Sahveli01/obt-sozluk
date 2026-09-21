---
term: "Data Type"
tr: "Veri tipi"
aliases: ["veri tipi", "veri türü"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Bir değerin ne cinsten olduğunu ve onunla hangi işlemlerin yapılabileceğini belirleyen sınıflandırma."
related: [variable, integer, string, boolean, static-typing, type-safety]
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

Veri tipi, bir değerin ne cinsten olduğunu söyler: sayı mı, metin mi, doğru/yanlış mı. Bu süs bir bilgi değildir, o değerle ne yapabileceğini belirler. İki sayıyı toplayabilirsin, iki metni uç uca ekleyebilirsin, ama bir metinden bir sayı çıkaramazsın.

Tipin ikinci işi, değerin bellekte nasıl saklanacağına karar vermektir. [[integer|Tam sayı]], [[floating-point|kayan noktalı sayı]], [[string|metin]] ve [[boolean|mantıksal değer]] hemen her dilde bulunan temel tiplerdir; diller bunların üstüne kendi tiplerini ekler.

Tipin ne zaman denetlendiği dilden dile değişir: bazı diller kodu çalıştırmadan önce bakar ([[static-typing|statik tipleme]]), bazıları çalışırken ([[dynamic-typing|dinamik tipleme]]).

## Benzetme

Bilgisayarındaki dosya uzantıları gibi. Bir `.mp3` ile bir `.txt` aynı diskte, aynı biçimde saklanır; ama uzantı hangisinin çalınabileceğini, hangisinin okunabileceğini söyler. `.mp3` dosyasını metin düzenleyicide açarsan karakter çöplüğü görürsün — dosya bozulmamıştır, yanlış cinsten muamele görmüştür.

## Örnek

```python
print(type(7))       # <class 'int'>
print(type("7"))     # <class 'str'>
print(7 + 7)         # 14
print("7" + "7")     # 77
```

Son iki satır aynı `+` işaretini kullanır ama farklı iş yapar: sayılarda toplar, metinlerde uç uca ekler.

## Dikkat

`7` ile `"7"` farklı şeylerdir. Klavyeden ya da bir formdan gelen her şey önce metin olarak gelir; kullanıcının yazdığı yaşı sayıya çevirmeden karşılaştırmaya kalkmak, yeni başlayanların en sık düştüğü tuzaklardandır.
