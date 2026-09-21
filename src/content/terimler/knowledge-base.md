---
term: "Knowledge Base"
tr: "Bilgi tabanı"
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: baslangic
short: "Bir sistemin cevaplarını dayandırdığı, derlenip güncel tutulan kendi kaynak koleksiyonu."
related: [retrieval-augmented-generation-rag, chunking, vector-database, semantic-search, database]
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

Bilgi tabanı, bir uygulamanın "doğrusu burada yazıyor" diyebildiği belge topluluğudur: ürün dokümanları, sık sorulan sorular, iç yönergeler, geçmiş destek kayıtları. Kavram yapay zekâdan eskidir; yeni olan, artık cevapları bir insanın değil bir modelin buradan okuması.

Yapay zekâ tarafındaki önemi şuradan gelir: model genel bilgiyi eğitiminden getirir, ama sana özel bilgiyi ancak bir bilgi tabanından okuyarak öğrenebilir ([[retrieval-augmented-generation-rag|RAG]]).

## Benzetme

Tamirhanenin kendi not defteri gibidir: "bu modelde şu ses şu parçadan gelir" diye yıllarca biriktirilmiş notlar. Usta gelen her arabayı sıfırdan çözmez, önce deftere bakar. Defter ne kadar düzenliyse tamir o kadar hızlıdır.

## Dikkat

Bilgi tabanının kalitesi, üstüne kurulan her şeyin tavanıdır. Çelişen iki belge varsa sistem hangisini getirdiğine göre farklı cevap verir; eskimiş bir belge de kendinden emin bir yanlışa dönüşür. Bu yüzden her bilgi tabanının bir sahibi, bir güncelleme ritmi ve bir silme kuralı olmalı.

Bir [[database|veri tabanı]] ile aynı şey değildir: veri tabanı verinin nasıl saklandığını anlatır, bilgi tabanı hangi içeriğin doğru kabul edildiğini. Aynı bilgi tabanı bir dosya klasöründe de durabilir, bir [[vector-database|vektör veri tabanında]] da.
