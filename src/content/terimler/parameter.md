---
term: "Parameter"
tr: "Parametre"
aliases: ["parametre"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Fonksiyon tanımında yer alan, çağrı sırasında gelecek değeri temsil eden ad."
related: [function, argument, return-value, data-type]
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

Parametre, bir [[function|fonksiyon]] tanımlanırken parantezin içine yazılan addır. Fonksiyonun dışarıdan hangi bilgilere ihtiyaç duyduğunu, kaç tane ve hangi sırayla beklediğini söyler.

Parametre tanım anında bir değer taşımaz; yalnızca gelecek değerin yerini tutar ve fonksiyonun gövdesinde o değere hangi adla seslenileceğini belirler. Fonksiyon çalışmaya başladığında bu ad, o çağrıda verilen değeri gösterir.

Sıra önemlidir: ilk parametreye ilk verilen değer gider, ikinciye ikincisi. Birçok dilde parametrelere varsayılan değer de verilebilir; o zaman çağırırken o değeri yazmak zorunda kalmazsın.

## Benzetme

Matbaadan toplu basılmış davetiyeler gibi. Kartın üstünde "Sayın ............" yazar. O boşluk kimsenin adı değildir; adın geleceği yerdir, boyu bellidir ve orada bir isim beklendiğini herkes anlar. Kartı verirken boşluğa yazdığın isim ise artık yalnızca o kişiye aittir.

## Örnek

```python
def selamla(ad, sehir="Ankara"):
    print("Merhaba " + ad + ", " + sehir)

selamla("Ayse")            # Merhaba Ayse, Ankara
selamla("Ayse", "Izmir")   # Merhaba Ayse, Izmir
```

`ad` ve `sehir` parametredir; `sehir`'in varsayılan değeri vardır.

## Dikkat

Parametre ile [[argument|argüman]] en sık karıştırılan ikilidir. Ayrım tek cümleye sığar: **parametre tanımdaki addır, argüman çağrıdaki değerdir.** Yukarıdaki örnekte `ad` parametre, `"Ayse"` argümandır. Aynı fonksiyon binlerce kez farklı argümanlarla çağrılır ama parametreleri hep aynı kalır.

Günlük konuşmada ikisine de "parametre" denip geçilir. Ayrımı bilmek yine de işe yarar, çünkü hata mesajları ikisini ayrı adlandırır.
