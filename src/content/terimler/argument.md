---
term: "Argument"
tr: "Argüman"
aliases: ["argüman"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Bir fonksiyon çağrılırken ona verilen gerçek değer."
related: [function, parameter, return-value, variable]
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

Argüman, bir [[function|fonksiyonu]] çağırırken parantezin içine yazdığın gerçek değerdir. `alan(3, 4)` çağrısında `3` ve `4` argümandır.

Fonksiyon çalışmaya başladığında her argüman, tanımdaki karşılık gelen [[parameter|parametrenin]] adına bağlanır. Yani argüman o çağrıya özeldir: aynı fonksiyonu bir satır sonra başka değerlerle çağırırsan, aynı kod bu sefer başka bir sonuç üretir.

Argümanın sabit bir sayı olması gerekmez. Bir [[variable|değişken]], bir hesabın sonucu, hatta başka bir fonksiyon çağrısı olabilir. Önemli olan, çağrı anında elde somut bir değerin bulunmasıdır.

Türkçede "argüman" yerleşmiştir; tartışmadaki "argüman" ile bir ilgisi yoktur.

## Benzetme

Fırına yazdığın pişirme süresi gibi. Fırının işi bellidir: içine koyduğun şeyi ısıtmak. Kaç dakika olduğunu her seferinde sen yazarsın ve yazdığın şey yalnızca o pişirmeye aittir. Fırın değişmez, girdiğin sayı değişir.

## Örnek

```python
def kare(sayi):
    return sayi * sayi

x = 5
print(kare(x))       # 25
print(kare(x + 1))   # 36
```

İkinci çağrıda argüman `x + 1` ifadesinin sonucudur, yani `6`. Fonksiyona giden şey ifadenin kendisi değil, hesaplanmış değeridir.

## Dikkat

Argüman sayısı ve sırası tanımla uyuşmak zorundadır. Eksik ya da fazla argüman verirsen program çalışmadan durur ve hata mesajı kaç tane beklendiğini yazar.

Sırayı karıştırmak daha sinsidir. Kendi yazdığın `bol(pay, payda)` fonksiyonunu düşün: `bol(10, 2)` ile `bol(2, 10)` ikisi de sorunsuz çalışır, biri yanlış sonuç verir ve kimse seni uyarmaz. Birçok dil buna çare olarak argümanı adıyla vermene izin verir; Python'da `bol(pay=10, payda=2)` yazabilirsin.
