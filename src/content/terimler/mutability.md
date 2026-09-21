---
term: "Mutability"
tr: "Değiştirilebilirlik"
aliases: ["degistirilebilirlik", "mutable"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Bir değerin oluşturulduktan sonra yerinde değiştirilip değiştirilemeyeceği; değiştirilebilen değerlere mutable denir."
related: [immutability, variable, constant, tuple, ownership]
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

Değiştirilebilirlik, bir değerin oluşturulduktan sonra yerinde değiştirilip değiştirilemeyeceğini anlatır. Değiştirilebilen değerlere mutable, değiştirilemeyenlere immutable denir. Bir listeye eleman eklemek mutable bir işlemdir: liste aynı listedir, içeriği değişmiştir. Bir metne harf eklemek çoğu dilde öyle değildir: eski metin olduğu gibi durur, elinde yeni bir metin vardır.

Bu ayrım küçük görünür ama programın davranışını belirler, çünkü bir değere aynı anda birden fazla yerden bakılıyor olabilir.

## Nasıl çalışır?

Bir değeri ikinci bir [[variable|değişkene]] atadığında çoğu dilde kopya üretilmez; iki isim aynı nesneyi gösterir. Nesne mutable ise birinin üzerinden yapılan değişiklik diğerinde de görünür. Fonksiyona verdiğin bir listenin fonksiyon içinde değiştirilip dışarıya öyle dönmesi bundandır ve yeni başlayanların en çok şaşırdığı davranış budur.

Immutable değerlerde böyle bir sürpriz olmaz. "Değiştirdim" dediğin her an aslında yeni bir değer üretmişsindir; başkasının elindeki eski değer sağlam kalır. Bedeli bellek ve kopyalamadır, karşılığı ise güvenle paylaşılabilmesidir.

Diller bu konuda farklı duruşlar alır. Python'da liste değiştirilebilir, [[tuple]] değiştirilemez. Rust'ta ise varsayılan değiştirilemezliktir; bir değeri değiştirebilmek için `mut` diye ayrıca belirtmen gerekir.

## Benzetme

Heykeltıraşın ıslak kili ile dökülmüş bronzu gibi. Kil masadayken burnunu düzeltir, kolu uzatırsın — elindeki hâlâ aynı heykeldir. Bronz döküldükten sonra "şurayı biraz değiştireyim" diye bir seçenek yoktur; başka bir şekil istiyorsan yeni bir döküm yaparsın ve eski heykel olduğu gibi durmaya devam eder.

## Örnek

```python
a = [1, 2]
b = a           # kopya değil, aynı listeye ikinci bir ad
b.append(3)
print(a)        # [1, 2, 3]   -> a da değişti

x = (1, 2)
y = x + (3,)    # yeni bir tuple üretildi
print(x)        # (1, 2)      -> x olduğu gibi duruyor
```

## Dikkat

Bir adın sabit olması, gösterdiği şeyin sabit olduğu anlamına gelmez. JavaScript'te `const` ile tanımladığın bir listeye eleman eklemek serbesttir; sabit olan yalnızca o adın başka bir değere bağlanamamasıdır. Aynı ayrım [[constant|sabit]] kavramında da geçerlidir.

Değiştirilebilirlik bir kusur da değildir. Büyük veriyi her dokunuşta kopyalamak pahalıdır; kural şudur: değeri paylaşıyorsan immutable tercih et, tek sahibi sen isen mutable kullanmakta sakınca yok.
