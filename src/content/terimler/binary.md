---
term: "Binary"
tr: "İkili"
aliases: ["ikili sayi sistemi", "taban 2"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Sayıları yalnızca 0 ve 1 rakamlarıyla, her basamağın değeri ikinin katı olacak şekilde yazan sayı sistemi."
related: [bit, byte, hexadecimal, integer, encoding]
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

İkili sayı sistemi, sayıları yalnızca 0 ve 1 rakamlarıyla yazma biçimidir. Günlük hayatta kullandığımız onluk sistemde basamaklar 1, 10, 100 diye ilerler; ikili sistemde ise 1, 2, 4, 8, 16 diye ilerler. `1011` yazısı bu yüzden 8 + 2 + 1, yani 11 eder.

Bilgisayarların bu sistemi kullanmasının sebebi, donanımın iki durumu ayırt etmekte güvenilir olmasıdır. Bir [[bit]] tam olarak bir ikili basamaktır; sekizi bir araya gelip bir [[byte|bayt]] oluşturur. Yani ikili sistem, bitlerin bir sayıya nasıl dönüştüğünü anlatan kuraldır.

## Benzetme

Eski bir kefeli terazinin yanındaki ağırlık takımı gibi. Takımda 1, 2, 4, 8 ve 16 gramlık birer ağırlık vardır. Her ağırlık ya kefeye konur ya konmaz — arası yoktur. 11 gramı tartmak istersen tek bir yol vardır: 8, 2 ve 1. Hangi ağırlıkların konduğunu soldan sağa yazdığında elinde o sayının ikili yazımı kalır.

## Örnek

```python
print(bin(11))         # 0b1011
print(0b1011)          # 11
print(int("1011", 2))  # 11
```

## Dikkat

"Binary" kelimesinin yazılımda ikinci bir anlamı daha var ve ikisi sık karıştırılır: derlenmiş, doğrudan çalıştırılabilen dosyalara da "binary" denir. Kaynak kodun okunabildiği yerde binary okunamaz, çünkü içi metin değil ham baytlardır.

İkili yazım insan için uzundur; 32 baytlık bir değer 256 basamak eder. Bu yüzden ekranda neredeyse hiç ikili görmezsin, onun yerine her dört biti tek karaktere sıkıştıran [[hexadecimal|onaltılık]] yazım kullanılır. İkisi aynı sayının farklı gösterimidir, farklı sayılar değil.
