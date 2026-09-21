---
term: "Inheritance"
tr: "Kalıtım"
aliases: ["kalıtım", "miras alma"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Bir sınıfın, başka bir sınıfın niteliklerini ve metotlarını devralıp üstüne ekleme yapması."
related: [class, polymorphism, interface, abstract-contract, object-oriented-programming-oop]
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

Kalıtım, bir [[class|sınıfın]] başka bir sınıfın tarifini olduğu gibi devralıp üstüne ekleme ya da değişiklik yapmasıdır. Devralan sınıfa alt sınıf, devredilene üst sınıf denir. Alt sınıf, üst sınıfta yazılmış her şeye kendi yazmış gibi sahiptir.

Amaç iki türlüdür: aynı kodu iki yere yazmaktan kurtulmak ve "bunların hepsi aynı çeşit şeydir" bilgisini dile söylemek. İkinci amaç genelde daha önemlidir, çünkü [[polymorphism|çok biçimliliğin]] dayandığı bilgi budur.

## Benzetme

Üniversitenin genel yönetmeliği ile bölüm yönergesi gibi. Yönerge sıfırdan yazılmaz: devamsızlık, not, itiraz kuralları genel yönetmelikten olduğu gibi gelir. Bölüm yalnızca kendini ilgilendiren maddeleri ekler — bitirme projesi gibi. Bir maddeyi kendine göre yeniden yazarsa, o bölümde artık yönergedeki hüküm geçerlidir. Genel yönetmelik değişirse bütün bölümler etkilenir; işte kalıtımın hem gücü hem riski buradadır.

## Nasıl çalışır?

Alt sınıfta bir metot çağırdığında dil önce o sınıfa bakar; bulamazsa üst sınıfa, orada da yoksa onun üstüne çıkar. İlk bulduğu tanımı çalıştırır. Alt sınıf aynı adla kendi metodunu yazarsa üsttekinin yerine geçer; buna **override** (ezme) denir. Üstteki hâli de çalıştırmak istersen Python'da `super()` ile çağırırsın.

Solidity'de aynı mekanizma sözleşmeler için vardır: bir sözleşme başka bir sözleşmeden türetilir, [[abstract-contract|soyut sözleşmeler]] ve hazır kütüphaneler bu yolla kullanılır.

## Örnek

```python
class Kullanici:
    def __init__(self, ad):
        self.ad = ad

    def yetki(self):
        return "okuma"

class Yonetici(Kullanici):
    def yetki(self):                  # üsttekini ezer
        return "okuma + yazma"

print(Kullanici("Ayse").yetki())      # okuma
print(Yonetici("Can").yetki())        # okuma + yazma
print(Yonetici("Can").ad)             # Can  (kurucu üst sınıftan geldi)
```

## Dikkat

Kalıtım zinciri uzadıkça bir metodun nerede tanımlandığını bulmak zorlaşır; üç dört katlı zincirlerde "bu satır nereden geliyor" sorusu gerçek bir zaman kaybına dönüşebilir. Bu yüzden yaygın pratik zinciri sığ tutmaktır.

Seçimi kolaylaştıran soru şudur: ilişki gerçekten "bir çeşididir" mi (yönetici bir kullanıcıdır), yoksa "içinde bir tane vardır" mı (siparişin içinde bir adres vardır)? İkincisinde nesneyi içeride tutmak, yani kompozisyon, genelde daha az sürprizli olur. Kalıtımın yanlış olduğu anlamına gelmez — yalnızca hangi durumda hangisinin seçildiği bellidir.
