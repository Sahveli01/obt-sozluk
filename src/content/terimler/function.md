---
term: "Function"
tr: "Fonksiyon"
aliases: ["fonksiyon"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Bir işi yapan, ad verilmiş kod parçası; çağrıldığında çalışır ve istenirse bir sonuç döndürür."
related: [parameter, argument, return-value, scope-programlama, method]
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

Fonksiyon, bir işi yapan ve ad verilmiş kod parçasıdır. Bir kez tanımlanır, sonra adını yazarak istediğin kadar çalıştırırsın; buna "çağırmak" denir.

İki faydası var. Birincisi tekrardan kurtarır: aynı on satırı beş yere kopyalamak yerine bir kere yazıp beş yerden çağırırsın ve düzeltme gerektiğinde tek yeri düzeltirsin. İkincisi kodu parçalara ayırır; her parçanın bir adı olunca program baştan sona okunabilir hâle gelir.

Bir fonksiyon dışarıdan değer alabilir ve dışarıya değer verebilir. Tanımda yazan adlara [[parameter|parametre]], çağrı sırasında verdiğin gerçek değerlere [[argument|argüman]], geri verdiği sonuca [[return-value|dönüş değeri]] denir.

## Benzetme

Vesikalık fotoğraf kabini gibi. Perdeyi çeker, oturur, parayı atarsın; birkaç dakika sonra fotoğrafın çıkar. İçeride hangi lambanın yandığını bilmene gerek yoktur ve kabin senin için özel kurulmamıştır — aynı kabin sıradaki herkese aynı işi yapar. Her seferinde veren de sensin, alan da.

## Örnek

```python
def alan(en, boy):
    return en * boy

print(alan(3, 4))   # 12
```

İlk iki satır fonksiyonu tanımlar, son satır onu çağırır. Tanım tek başına hiçbir şey çalıştırmaz.

## Dikkat

Tanımlamak ile çağırmak farklı şeylerdir. `alan` yazmak fonksiyonun kendisine işaret eder, `alan(3, 4)` onu çalıştırır. Parantezi unutmak hata bile vermeyebilir; program sessizce yanlış çalışır.

Bir de fonksiyonu kısa tut: adını tek cümleyle söyleyemiyorsan içinde muhtemelen birden fazla iş vardır.
