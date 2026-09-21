---
term: "Block"
tr: "Blok"
aliases: ["blok"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: baslangic
short: "Ağın kabul ettiği işlemleri tek paket hâlinde toplayan ve bir öncekine kriptografiyle bağlanan kayıt birimi."
related: [blockchain, block-header, transaction, block-height, mempool, confirmation]
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

Blok, bir grup [[transaction|işlemin]] tek bir paket hâlinde toplanıp zincire eklenen hâlidir. [[blockchain|Blok zinciri]] işlemleri tek tek değil topluca yazar: ağdaki bir üretici bekleyen işlemlerden bir kısmını seçer, sıraya dizer ve blok olarak yayınlar.

Her blok iki parçadan oluşur. [[block-header|Başlık]] bloğun künyesini taşır: bir önceki bloğun özeti, işlemlerin özeti, üretim zamanı. Gövde ise işlemlerin kendisidir. Bir önceki bloğun özetini taşıması blokları tek yönlü bir diziye çevirir; zincir adı buradan gelir.

## Benzetme

Blokları bir trenin vagonları gibi düşün. İşlemler yolculardır; vagon dolduğunda ya da kalkış vakti geldiğinde kapılar kapanır ve vagon bir öncekine kenetlenir. Kenetlenmeyi bozmadan ortadaki bir vagonun içindekileri değiştiremezsin; değiştirmeye kalkarsan arkasındaki bütün vagonları yeniden dizmen gerekir.

## Dikkat

"Blok" bir zaman dilimi değil, bir veri paketidir. Ağın ortalama bir [[block-time|blok süresi]] olması blokların saat gibi düzenli geldiği anlamına gelmez; aralıklar dalgalanır.

Bir de bloğun yayınlanmış olması sonsuza kadar kalacağı anlamına gelmez. Aynı [[block-height|yükseklikte]] üretilmiş rakip bir blok kazanırsa seninki zincirin dışında kalabilir. Bu yüzden bir işlemin güvencesi bloğa girmesiyle değil, üstüne biriken [[confirmation|onaylarla]] ölçülür.
