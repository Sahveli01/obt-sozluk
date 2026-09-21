---
term: "Method"
tr: "Metot"
aliases: ["metot", "metod"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: baslangic
short: "Bir nesneye ait olan ve çağrıldığında o nesnenin verisi üstünde çalışan fonksiyon."
related: [function, class, object, argument]
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

Metot, bir nesneye ait olan ve çağrıldığında o nesnenin kendi verisi üstünde çalışan [[function|fonksiyondur]]. Sıradan bir fonksiyon işleyeceği veriyi dışarıdan alır; metot ise hangi veriyle çalışacağını zaten bilir, çünkü çağrıldığı [[object|nesnenin]] içindedir.

Python'da bu bağ, metodun ilk parametresi olan `self` ile kurulur. `sepet.ekle("kitap")` yazdığında dile söylediğin şey şudur: "ekle işlemini, `sepet` nesnesinin üstünde çalıştır." Aynı ada sahip metot başka bir nesnede çağrıldığında o nesnenin verisine dokunur.

## Benzetme

Telefon rehberinde bir kişinin kartını açıp "ara" demek gibi. Numarayı sen yazmazsın; tuş hangi numarayı arayacağını bulunduğu karttan bilir. Aynı tuş başka bir kartta bambaşka bir numarayı arar. Tuş takımı ise bunun tersidir: ne yapacağı bellidir ama kimi arayacağını rakam rakam senin söylemen gerekir.

## Örnek

```python
class Sepet:
    def __init__(self):
        self.urunler = []

    def ekle(self, urun):          # metot: veriyi self'ten bulur
        self.urunler.append(urun)

def listeye_ekle(liste, urun):     # fonksiyon: veriyi dışarıdan alır
    liste.append(urun)

s = Sepet()
s.ekle("kitap")
print(s.urunler)                   # ['kitap']
```

## Dikkat

Her dil bu ayrımı yapmaz. Solidity'de bir sözleşmenin içindeki işlevlere de fonksiyon denir; "metot" kelimesi orada pek kullanılmaz. Java gibi dillerde ise sınıf dışında kod yazılamadığı için neredeyse her şey metottur.

Bir de metodun nesnenin verisini **değiştirmesi** ile yalnızca **okuyup** bir değer döndürmesi çok farklı iki durumdur. İkisini ad vererek ayırmak (`ekle` ile `adet` gibi) okuyan kişinin işini hatırı sayılır ölçüde kolaylaştırır.
