---
term: "Mempool"
tr: ""
aliases: ["bellek havuzu", "işlem havuzu"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Ağa gönderilmiş ama henüz bir bloğa alınmamış işlemlerin her düğümde ayrı ayrı tutulduğu bekleme havuzu."
related: [transaction, block, transaction-fee, node, maximal-extractable-value-mev, private-mempool]
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

Mempool, bir düğümün duyduğu ama henüz bir [[block|bloğa]] girmemiş [[transaction|işlemleri]] tuttuğu bekleme alanıdır. Zincirin parçası değildir: geçici, yerel ve her düğümde biraz farklı bir bellek alanıdır. "Bellek havuzu" çevirisi kullanılmaz; terim İngilizce hâliyle geçer.

## Benzetme

Bir polikliniğin bekleme salonu gibi. Sıra numarası almak muayene olmak değildir; ayrıca her katın kendi bekleme salonu ve kendi listesi vardır, bu yüzden "sıradaki kim" sorusunun cevabı bulunduğun yere göre değişir.

## Nasıl çalışır?

İmzalanan işlem önce bir [[node|düğüme]] ulaşır. Düğüm onu temel kurallara göre sınar — imza doğru mu, bakiye yetiyor mu, ücret kabul edilebilir mi — ve geçerse hem kendi havuzuna koyar hem de komşularına yayar. Böylece işlem kısa sürede ağın büyük kısmına dağılır.

Sıra bir blok üreticisine geldiğinde üretici kendi havuzundan bir seçki yapar; genellikle birim iş başına en çok [[transaction-fee|ücret]] ödeyenleri alır. Bloğa girenler havuzdan düşer, girmeyenler beklemeye devam eder; çok uzun bekleyenleri düğümler kendiliğinden atabilir.

Havuzun herkese açık olması bekleyen işlemlerin okunabilmesi demektir. Bu okunabilirlik [[maximal-extractable-value-mev|MEV]] arayanların ham maddesidir; bundan kaçınmak isteyenler işlemlerini [[private-mempool|özel havuzlar]] üzerinden gönderir.

## Dikkat

Tek bir "mempool" yoktur. Bir gezginde gördüğün bekleyen işlem listesi, o hizmetin kendi düğümünün gördüğüdür; ağın tamamının değil.

Havuzda görünmek bir söz de değildir. İşlem oradan hiç bloğa geçmeden düşebilir.
