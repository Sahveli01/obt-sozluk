---
term: "Reference"
tr: "Referans"
aliases: ["referans"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Bir değere, kopyasını çıkarmadan erişmeni sağlayan bağ; altında adres vardır ama adresle sen uğraşmazsın."
related: [pointer, memory-management, borrowing-rust, garbage-collection, stack-and-heap]
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

Referans, bir değere kopyasını çıkarmadan erişmeni sağlayan bağdır. Altında yine bir adres durur, ama adresle sen uğraşmazsın: dil onu senden gizler ve karşılığında bazı sözler verir.

Türkçede "referans" zaten kullanılıyor; "başvuru" karşılığı günlük dilde var ama programlamada tutmamıştır.

## Nasıl çalışır?

Asıl soru şu: bir değeri fonksiyona verdiğinde ne gidiyor? Ya değerin kopyası gider ya da değere bir referans. İkincisinde fonksiyon içinde yapılan değişiklik dışarıdan da görünür, çünkü ortada tek bir nesne vardır.

Python, Java ve JavaScript'te nesneler hep böyle taşınır. Bu yüzden bir listeyi fonksiyona verip içinde değiştirdiğinde, çağıran taraf da değişmiş listeyi görür — ve yeni başlayanların en çok şaşırdığı hatalardan biri buradan çıkar.

Dilin verdiği sözler değişir. Python ve Java'da bir nesneye ulaşan referans kaldığı sürece o nesne [[garbage-collection|toplanmaz]]; yani referansın işaret ettiği yerin boşalmış olması mümkün değildir. Rust'ta ise derleyici, referansın ömrünün gösterdiği değerin ömründen uzun olamayacağını derleme anında kanıtlar ([[borrowing-rust|ödünç alma]]).

## Örnek

```python
def ekle(liste):
    liste.append(4)      # kopyaya değil, aynı listeye dokunuyor

sayilar = [1, 2, 3]
ekle(sayilar)
print(sayilar)           # [1, 2, 3, 4]
```

## Dikkat

[[pointer|İşaretçi]] ile referans sık karıştırılır. İşaretçi bir değerdir: üstünde aritmetik yapabilir, hiçbir yeri göstermeyen hâle getirebilir, istediğin adrese çevirebilirsin. Referans bir bağdır: aritmetiği yoktur, çoğu dilde boş olamaz ve dil onun geçerli bir şeyi gösterdiğini garanti etmeye çalışır.

Kabaca: işaretçi sana adresi verir, referans adresi senden saklar. İkisinin de ortak noktası, veriyi kopyalamadan paylaşmak ve bu yüzden aynı veriye birden çok yerden dokunulabilmesidir — [[memory-management|bellek yönetiminin]] zorluğu da çoğunlukla buradan doğar.
