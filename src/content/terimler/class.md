---
term: "Class"
tr: "Sınıf"
aliases: ["sınıf"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Bir tür nesnenin hangi veriyi taşıyacağını ve hangi işlemleri yapabileceğini tarif eden yapı."
related: [object, method, attribute, constructor, object-oriented-programming-oop, struct]
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

Sınıf, bir tür nesnenin hangi veriyi taşıyacağını ve hangi işlemleri yapabileceğini tarif eden yapıdır. Kendisi çalışan bir şey değildir; tarif olduğu için içinde gerçek bir bakiye, gerçek bir kullanıcı adı yoktur.

Üçlü zincir şöyle kurulur: **sınıf** tariftir, [[object|nesne]] o tariften üretilmiş tek bir örnektir, [[method|metot]] ise o örneğin üstünde çalışan işlevdir. Aynı sınıftan bin nesne üretebilirsin; tarif tektir, nesneler ayrı ayrı vardır ve her birinin kendi verisi olur.

## Benzetme

Boş bir anket formu gibi. Formda hangi soruların sorulacağı, hangi seçeneklerin bulunduğu ve hangi alanın boş bırakılamayacağı yazar — ama formun kendisinin bir yaşı ya da bir cevabı yoktur. Bin kişiye dağıtırsın, bin dolu kâğıt geri gelir; her biri ayrı bir insandır ve kendi cevaplarını taşır. Formu değiştirmek bütün doldurucuları birden ilgilendirir, tek bir kâğıda yazılan cevap ise yalnızca o kişiyi.

## Nasıl çalışır?

Sınıfın içinde iki tür şey bulunur: veriyi tutan [[attribute|nitelikler]] ve iş yapan metotlar. Nesne üretildiği anda [[constructor|kurucu]] çalışır ve başlangıç değerlerini yerleştirir. Python'da kurucunun adı `__init__`, ilk parametresi ise üretilmekte olan nesnenin kendisini gösteren `self`'tir.

Sınıf kavramı her dilde yoktur. Rust ve Go gibi dillerde `class` anahtar kelimesi bulunmaz; veri bir [[struct|struct]] içinde tutulur, işlemler ona ayrıca bağlanır. Sonuç benzer, kelime dağarcığı farklıdır.

## Örnek

```python
class Cuzdan:
    def __init__(self, sahip, bakiye=0):
        self.sahip = sahip
        self.bakiye = bakiye

    def yatir(self, miktar):
        self.bakiye += miktar
        return self.bakiye

hesap = Cuzdan("Ayse")
hesap.yatir(50)
print(hesap.sahip, hesap.bakiye)   # Ayse 50
```

## Dikkat

Sınıf ile nesneyi karıştırmak en yaygın başlangıç hatasıdır. `Cuzdan` bir sınıftır ve onda bakiye yoktur; `hesap` bir nesnedir ve bakiyesi 50'dir. "Cüzdanın bakiyesi" demek, boş anket formuna bakıp "bu kişi kaç yaşında" diye sormak gibidir.

Bir de sınıf sayısı kalite ölçüsü değildir. Tek bir işi olan kısa bir betikte her şeyi sınıflara bölmek kodu uzatmaktan başka bir işe yaramayabilir.
