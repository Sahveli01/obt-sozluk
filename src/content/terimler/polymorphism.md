---
term: "Polymorphism"
tr: "Çok biçimlilik"
aliases: ["çok biçimlilik"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Aynı çağrının, karşısındaki nesnenin türüne göre farklı bir kod çalıştırması."
related: [inheritance, interface, method, class, object-oriented-programming-oop]
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

Çok biçimlilik, aynı çağrının karşısındaki nesnenin türüne göre farklı bir kod çalıştırmasıdır. Sen `alan()` dersin; hangi hesabın yapılacağına nesnenin kendisi karar verir.

Kazancı, çağıran tarafın sadeleşmesidir. Çok biçimlilik olmadan kodun her yerinde "eğer kare ise şunu yap, eğer dikdörtgen ise bunu yap" diye uzayan bir dallanma bulunur ve yeni bir şekil eklendiğinde bu dallanmaların hepsi tek tek güncellenir. Çok biçimlilikte yeni şekil kendi hesabını yanında getirir, çağıran kod hiç açılmaz.

## Benzetme

Türkçedeki "açmak" fiili gibi. Kapıyı açarsın, radyoyu açarsın, hesabı açarsın, konuyu açarsın. Fiil tek, yapılan iş her seferinde bambaşka — ama kimse karışıklık yaşamaz, çünkü işi belirleyen şey fiil değil, yanındaki nesnedir. "Aç" demek için nesnenin nasıl açıldığını bilmek zorunda değilsin.

## Nasıl çalışır?

İki yaygın yolu vardır. Birincisi [[inheritance|kalıtım]] yoluyladır: alt sınıf üst sınıfın metodunu kendine göre yeniden yazar, çağrı yapıldığında nesnenin gerçek türüne ait tanım bulunur.

İkincisi akrabalık gerektirmez. Python gibi dillerde bir nesnenin hangi sınıftan geldiğine bakılmaz; istenen [[method|metodu]] taşıyorsa çağrı çalışır. Buna ördek tiplemesi (duck typing) denir. Statik tipli dillerde bu gevşeklik yoktur, aynı işi [[interface|arayüz]] uygulayarak elde edersin: arayüz, "bu tipler birbirinin yerine geçebilir" sözünü derleme anında verir.

## Örnek

```python
class Kare:
    def __init__(self, kenar):
        self.kenar = kenar
    def alan(self):
        return self.kenar ** 2

class Dikdortgen:
    def __init__(self, en, boy):
        self.en, self.boy = en, boy
    def alan(self):
        return self.en * self.boy

for sekil in (Kare(3), Dikdortgen(2, 5)):
    print(sekil.alan())      # önce 9, sonra 10
```

## Dikkat

Örnekteki iki sınıf birbirinden türemiyor; çok biçimlilik için kalıtım şart değildir. Bu üçlüyü ayırmak işe yarar: kalıtım kodun paylaşılmasıdır, arayüz verilen sözdür, çok biçimlilik ise çalışma anında ortaya çıkan davranıştır.

Bedeli okunabilirliktedir. `sekil.alan()` satırına bakarak hangi kodun çalıştığını göremezsin; cevap, o an oraya hangi nesnenin geldiğine bağlıdır. Az sayıda ve birbirine gerçekten benzeyen türde bu takas kârlıdır; on beş farklı davranışın tek bir çağrının arkasına gizlendiği yerlerde hata aramak zorlaşır.
