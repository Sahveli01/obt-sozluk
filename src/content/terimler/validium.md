---
term: "Validium"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: ileri
short: "Geçerlilik kanıtını zincire gönderen ama işlem verisini zincir dışında tutan tasarım; ucuzdur, karşılığında veri erişimi bir gruba bağlanır."
related: [zk-rollup, validity-proof, data-availability, volition, rollup]
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

Bir [[zk-rollup|ZK rollup]] iki şeyi birden ana zincire yazar: durumun doğru hesaplandığını gösteren kanıtı ve işlemlerin ham verisini. Validium ikincisinden vazgeçer. Kanıt yine zincire gider, veri ise dışarıda — bir komitede ya da ayrı bir veri ağında — tutulur. Maliyetin büyük kısmı veri yayımlamaktan geldiği için işlem başına ücret çok düşer. Terim bir tasarım adıdır ve çevrilmeden kullanılır.

## Nasıl çalışır?

İşlemler her zamanki gibi çalıştırılır ve bir [[validity-proof|geçerlilik kanıtı]] üretilir. Zincirdeki sözleşme yalnızca kanıtı ve yeni durum özetini görür; içeride hangi hesabın ne kadarı var, bunu bilmez.

Veriyi saklama görevi, kendilerini imzalarıyla taahhüt eden bir gruba verilir. Bir yığın kabul edilmeden önce bu grup "bu verinin kopyası bende" der.

## Dikkat

Kullanıcı için değişen şey tam olarak şudur: **paran çalınamaz, ama erişilemez hâle gelebilir.**

Çalınamaz, çünkü kanıt zincirdedir; işletmeci senin imzan olmadan bakiyeni değiştiremez, geçersiz bir durum üretemez.

Erişilemez olabilir, çünkü ana zincirdeki köprüden çıkmak için bakiyeni ispatlaman gerekir ve bunun için zincirin güncel durumunu bilmen şarttır. Veriyi tutan grup dağılır, hacklenir ya da vermeyi reddederse, kimse hırsızlık yapmadığı hâlde herkesin parası yerinde donar.

Yani güven varsayımı "işletmeci dürüst olmalı"dan "veriyi tutanlar veriyi vermeye devam etmeli"ye kayar. Bu, küçük tutarlı ve yüksek hacimli işler için kabul edilebilir bir takas sayılabilir; büyük bakiyeleri uzun süre tutmak için aynı şey söylenemez. Seçimi kullanıcıya işlem işlem bırakan melez tasarıma [[volition|volition]] denir.
