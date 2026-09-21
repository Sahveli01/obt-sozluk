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

Vektör, belli bir sırayla dizilmiş sayılar topluluğudur. Sıranın kendisi anlam taşır: birinci sayı hep aynı şeyi, ikinci sayı hep başka bir şeyi ölçer. Yapay zekâda bir kelimenin, bir görselin ya da bir kullanıcının temsili bu biçimde tutulur; iki şeyin ne kadar benzediği de yine bu sayılar karşılaştırılarak hesaplanır. Matematikteki vektörle aynı kavramdır, burada yalnızca çok daha uzun olur.

## Benzetme

Bir futbolcunun istatistik satırı gibi: oynadığı dakika, attığı gol, yaptığı asist, koştuğu mesafe. Her oyuncu için aynı sütunlar, aynı sırayla doldurulur. Böylece ikisini izlemene gerek kalmadan, satırlarına bakarak "bu ikisi benzer tipte oyuncu" diyebilirsin. Vektör de bir şeyi böyle bir satıra indirger.

## Dikkat

Vektördeki tek tek sayıların okunabilir bir karşılığı çoğu zaman yoktur. İstatistik satırında "gol" sütununun ne olduğunu bilirsin; bir [[embedding]] vektöründe ise sayılar eğitimle ortaya çıkmıştır ve hiçbiri "bu sütun duyguyu ölçer" diye etiketlenmiş değildir. Anlam tek tek sayılarda değil, vektörlerin birbirine göre konumunda saklıdır.

Terimleri de karıştırmamak gerekir: vektör bir saklama biçimidir, embedding ise anlamı o biçime çevirme işidir.
