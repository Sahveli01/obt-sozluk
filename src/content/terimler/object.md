---
term: "Object"
tr: "Nesne"
aliases: ["nesne", "instance"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: baslangic
short: "Bir sınıfın tarifinden üretilmiş, kendi verisini taşıyan tek bir örnek."
related: [class, method, attribute, object-oriented-programming-oop]
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

Nesne, bir [[class|sınıfın]] tarifinden üretilmiş tek bir örnektir. Sınıf "kullanıcının bir adı ve bir bakiyesi olur" der; nesne ise "adı Ayşe, bakiyesi 50" diyendir. Bellekte gerçekten yer kaplayan, çalışma sırasında değişen şey nesnedir.

Aynı sınıftan üretilen iki nesne, içlerindeki bütün değerler aynı olsa bile ayrı iki şeydir. Birine yaptığın işlem diğerini etkilemez. Programın çalışması sırasında olup biten şeylerin çoğu, nesnelerin birbirinden bir şey istemesidir; bu isteklerin adı [[method|metottur]].

## Benzetme

Kütüphanedeki aynı kitabın üç nüshası gibi. Üçü de aynı baskı, aynı sayfa sayısı, aynı kapak. Ama her nüshanın kendi barkodu, kendi yıpranma durumu ve kendi ödünç geçmişi vardır. Birinin sayfası yırtıldığında diğer ikisi sağlam kalır. "Bu kitap" demek bazen baskıyı, bazen elindeki nüshayı anlatır — programlamada bu iki anlamı ayırmak zorundasın.

## Örnek

```python
class Sayac:
    def __init__(self):
        self.deger = 0

a = Sayac()
b = Sayac()
a.deger += 1
print(a.deger, b.deger)   # 1 0
print(a is b)             # False
```

## Dikkat

Python'da neredeyse her şey nesnedir: sayılar, metinler, listeler, hatta fonksiyonlar. Yani "nesne kullanmak" ile "nesne yönelimli kod yazmak" aynı şey değildir; birincisi zaten oluyordur.

İki nesnenin "eşit" olması ile "aynı" olması da farklıdır. `==` genelde içeriğe bakar, `is` ise ikisinin bellekteki aynı nesne olup olmadığına bakar. Yukarıdaki `a` ile `b` boş bir sayaç olarak birbirine benzer ama aynı değildir.
