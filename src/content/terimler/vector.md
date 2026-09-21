---
term: "Vector"
tr: "Vektör"
aliases: ["vektör"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: baslangic
short: "Belli bir sırayla dizilmiş sayılar topluluğu; yapay zekâda bir şeyin sayısal temsili bu biçimde tutulur."
related: [embedding, vector-database, semantic-search, tensor, parameters]
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

Vektör, belli bir sırayla dizilmiş sayılar topluluğudur. Sıranın kendisi anlam taşır: birinci sayı hep aynı şeyi ölçer, ikinci sayı hep başka bir şeyi. Yapay zekâda bir kelimenin, bir görselin ya da bir kullanıcının temsili bu biçimde tutulur. Matematikteki vektörle aynı kavramdır; burada yalnızca çok daha uzun olur.

## Benzetme

Bir futbolcunun istatistik satırı gibi: oynadığı dakika, attığı gol, yaptığı asist, koştuğu mesafe. Her oyuncu için aynı sütunlar, aynı sırayla doldurulur. Vektör de bir şeyi böyle tek bir satıra indirger.

## Dikkat

Vektör bir saklama biçimidir, anlamın kendisi değil. Tek tek sayıların okunabilir bir karşılığı çoğu zaman yoktur: istatistik satırında "gol" sütununun ne olduğunu bilirsin, bir [[embedding]] vektöründe ise sayılar eğitimle ortaya çıkmıştır ve hiçbiri etiketlenmiş değildir.

Anlamı bu biçime çevirme işi embedding'in konusudur; vektörlerin birbirine göre konumundan sonuç çıkarmak ise [[semantic-search|anlamsal aramanın]].
