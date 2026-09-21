---
term: "Double Spending"
tr: "Çift harcama"
aliases: ["cift harcama", "double spend"]
category: temeller
subcategory: "Temel kavramlar"
level: baslangic
short: "Aynı dijital parayı iki kez harcama girişimi; blockchain'in çözmek için doğduğu temel problem."
related: [blockchain, transaction, consensus-mechanism, confirmation, utxo]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Dijital bir dosya kopyalanabilir. Para dijital bir dosyaysa aynı parayı iki ayrı kişiye göndermeni engelleyen nedir? Bu soruya çift harcama problemi denir ve blockchain'den önce cevabı hep aynıydı: ortada bir banka durur, bakiyeni o tutar ve ikinci harcamayı reddeder.

[[blockchain|Blockchain]] aynı işi bankasız yapar. Bütün [[transaction|işlemler]] herkesin gördüğü ortak bir sıraya dizilir. Aynı parayı harcayan iki işlemden yalnızca sırada önce gelen geçerli sayılır, diğeri kurallara aykırı olduğu için düşer.

## Benzetme

Cebindeki 50 liralık banknotu düşün: aynı anda iki dükkâna veremezsin, çünkü kâğıt tek. Ama o 50 lira bir fotoğraf dosyası olsaydı kopyalayıp ikisine birden göndermek çocuk oyuncağı olurdu. Blockchain, dijital bir şeyi kâğıt banknot gibi "tek nüsha" davranmaya zorlamanın yoludur.

## Dikkat

Problem bir işlemi görür görmez bitmiş sayılmaz. İşlemin sıraya girmesi zaman alır ve çok yeni bir işlem, zincir başka bir yöne dallanırsa geri alınabilir. Bu yüzden ödeme alan taraf birkaç [[confirmation|onay]] bekler; beklenecek onay sayısı, alınan riskin büyüklüğüyle birlikte artar.
