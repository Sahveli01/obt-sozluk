---
term: "Algorithm"
tr: "Algoritma"
aliases: ["algoritma"]
category: programlama
subcategory: "Algoritmalar"
level: baslangic
short: "Bir işi çözmek için izlenecek adımların sırası ve kuralları; aynı girdiye her seferinde aynı cevabı veren yöntem."
related: [data-structure, time-complexity, big-o-notation, loop, recursion]
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

Algoritma, bir işi çözmek için izlenecek adımların sırası ve kurallarıdır. Hangi adımın, hangi sırayla yapılacağını ve ne zaman durulacağını kesin olarak söyler; aynı girdiye her seferinde aynı cevabı verir. Kod ise bir algoritmanın belirli bir dildeki yazılışıdır: fikir aynı kalır, yazılışı dilden dile değişir.

Bir işi çözen tek bir algoritma olmaz; hangisinin daha az iş yaptığını [[time-complexity|zaman karmaşıklığı]] söyler. Algoritma yöntemdir, [[data-structure|veri yapısı]] ise üzerinde çalıştığı verinin düzenidir. İkisi birbirini belirler: veri kötü yerleştirilmişse iyi bir yöntem bile yavaş çalışır.

## Benzetme

Rubik küpünü çözen birinin ezberlediği hamle dizisi gibi. Küp her seferinde farklı karışmıştır ama kişi doğaçlama yapmaz: gördüğü duruma göre hangi hamle setini uygulayacağını bilir ve küp sonunda mutlaka çözülür. Aynı küpü çözen birden çok yöntem vardır; yeni başlayanın öğrendiği de çözer, yarışmacının kullandığı da. Aradaki fark, kaç hamlede çözüldüğüdür.

## Örnek

Bir listedeki en büyük sayıyı bulmanın algoritması: ilk sayıyı aklında tut, kalanları tek tek gez, daha büyüğünü gördükçe aklındakini değiştir.

```python
def en_buyuk(sayilar):
    enb = sayilar[0]
    for s in sayilar[1:]:
        if s > enb:
            enb = s
    return enb

print(en_buyuk([3, 9, 4, 7]))  # 9
```

## Dikkat

Günlük dilde "algoritma" çoğunlukla sosyal medyanın sana ne göstereceğine karar veren sistem anlamında kullanılıyor; o da bir algoritmadır ama kelime çok daha geniştir. Ayrıca adımların belirli olması, sonucun doğru olduğunu göstermez: yanlış kurulmuş bir algoritma da her seferinde aynı yanlış cevabı verir.
