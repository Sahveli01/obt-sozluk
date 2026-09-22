---
term: "Collision Resistance"
tr: "Çarpışma direnci"
aliases: ["çarpışma direnci"]
category: kriptografi
subcategory: "Hash fonksiyonları"
level: orta
short: "Aynı hash değerini veren iki farklı girdi bulmanın pratikte mümkün olmaması."
related: [hash-function, preimage-resistance, sha-256, digital-signature, merkle-tree]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Çarpışma, aynı hash değerini veren iki farklı girdi demektir. Çarpışma direnci de böyle bir çifti bulmanın pratikte mümkün olmaması.

Önce şunu kabul etmek gerekiyor: çarpışmalar **vardır**. Bir [[hash-function|hash fonksiyonunun]] çıktısı sabit uzunluktadır, girdisi ise sınırsız; sonsuz sayıda girdiyi sonlu sayıda çıktıya sıkıştırıyorsan bazılarının aynı yere düşmesi kaçınılmazdır. Çarpışma direnci "yok" demek değildir, "kimse bir tanesini bulamıyor" demektir.

## Benzetme

Yeni yazıldığın 23 kişilik bir kursu düşün. "Burada benimle aynı gün doğan biri var mı?" diye sorarsan cevap büyük ihtimalle hayır olur. Ama soruyu değiştirip "burada doğum günü birbiriyle aynı olan herhangi iki kişi var mı?" dersen, cevap neredeyse yarı yarıya evettir.

İki soru aynı odaya bakıyor ama ikincisi çok daha fazla ikiliyi tarıyor: sen ve diğer 22 kişi değil, herkesin herkesle eşleşmesi. Aynı sebeple, bir hash fonksiyonunda çarpışma aramak, belirli bir özete uyan girdi aramaktan kökten daha kolaydır. Bu yüzden bir fonksiyonun çarpışma direnci, diğer dirençlerinden önce çöker.

## Nasıl çalışır?

Çarpışma direncinin neden bu kadar önemli olduğu [[digital-signature|dijital imzada]] görünür. İmza atarken belgenin kendisi değil, özeti imzalanır. Aynı özeti veren iki belge üretebilen biri, sana zararsız olanı imzalatıp elinde diğerini tutabilir — imza matematiksel olarak ikisine de uyar.

Bu soyut bir korku değil. MD5 için çarpışma üretmek sıradan bir dizüstü bilgisayarın işi hâline geldi ve bu, gerçek sertifikaların sahtesinin üretilmesine yol açtı. MD5 bugün imza ve sertifika üretiminde kullanılmaz.

Aynı mantık [[merkle-tree|Merkle ağacı]] için de geçerlidir: kökün tek bir değer olarak altındaki her şeyi temsil edebilmesi, çarpışma bulunamamasına dayanır.

## Dikkat

Çarpışma direnci ile [[preimage-resistance|preimage direncini]] karıştırma: preimage'de elinde bir **özet** vardır ve ona uyan bir girdi ararsın; çarpışmada elinde hiçbir şey yoktur, aynı özeti veren **herhangi iki girdiyi** sen seçersin.

Bu ikisi birbirinden bağımsız çöker. MD5'in çarpışma direnci yıllar önce bitti ama elindeki bir MD5 özetinden girdiyi geri bulmak hâlâ yapılabilir bir iş değil. "Şu fonksiyon kırıldı" cümlesi tek başına bir şey söylemez; hangi özelliğinin, ne maliyetle kırıldığını sormak gerekir.

[[sha-256|SHA-256]] için, yazıldığı tarih itibarıyla bilinen pratik bir çarpışma saldırısı yok.
