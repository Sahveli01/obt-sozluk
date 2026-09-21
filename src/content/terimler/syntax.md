---
term: "Syntax"
tr: "Söz dizimi"
aliases: ["söz dizimi", "sözdizimi"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Bir programlama dilinde kelimelerin ve işaretlerin hangi sırayla, hangi biçimde yazılacağını belirleyen kurallar."
related: [programming-language, source-code, compiler, bug, linter]
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

Söz dizimi, bir [[programming-language|programlama dilinde]] yazdıklarının hangi biçimde olması gerektiğini söyleyen kurallar bütünüdür: parantez nereye konur, satır nerede biter, girinti kaç boşluktur, kelimeler hangi sırayla dizilir.

Bu kurallar anlamla değil, yalnızca biçimle ilgilenir. Söz dizimi kusursuz olan bir program tamamen yanlış iş yapabilir; söz dizimi bozuk bir program ise hiç çalışmaz. [[compiler|Derleyici]] ya da [[interpreter|yorumlayıcı]] kodu okurken ilk baktığı şey budur ve bir uyuşmazlık görürse durup "syntax error" der.

Yeni başlarken hataların çoğu buradan çıkar: kapatılmamış bir tırnak, unutulmuş iki nokta, yanlış hizalanmış bir satır. İyi haber şu — bilgisayar sana kaçıncı satırda takıldığını söyler.

## Benzetme

Markette ürünün üstündeki barkod gibi. Sen kutuya bakıp "bu süt" dersin, kasa diyemez. Çizgilerden biri silinmişse ürün okutulamaz ve "ama ortada, bu süt" demek hiçbir işe yaramaz. Anlamın apaçık olması, biçimin bozukluğunu kurtarmaz.

## Örnek

Python'da bir koşul satırı iki nokta üst üste ile biter:

```python
yas = 20
if yas >= 18:
    print("giris serbest")
```

İkinci satırdaki `:` işaretini silersen program tek satır bile çalışmadan `SyntaxError` verir.

## Dikkat

Söz dizimi hatası ile mantık hatası karıştırılır. Birincisinde program hiç başlamaz ve bilgisayar seni açıkça uyarır. İkincisinde program sorunsuz çalışır ama yanlış sonuç üretir; bunu kimse söylemez, [[bug|hatayı]] kendin bulmak zorundasın. Yeni başlayanlar birincisinden korkar, deneyimliler ikincisinden.
