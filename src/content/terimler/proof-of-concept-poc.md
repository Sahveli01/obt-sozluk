---
term: "Proof of Concept (PoC)"
tr: "Kavram kanıtı"
aliases: ["poc"]
category: hackathon
subcategory: "Ürün geliştirme"
level: orta
short: "Bir fikrin teknik olarak mümkün olup olmadığını gösteren, sonrasında atılabilir en kısa çalışma."
related: [minimum-viable-product-mvp, prototype, hackathon, demo, testnet]
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

PoC, "bu teknik olarak mümkün mü" sorusunu cevaplayan en kısa çalışmadır. Amacı ürün üretmek değil, belirsizliği ortadan kaldırmaktır. Cevap alındıktan sonra yazılan kodun atılması bir başarısızlık değildir; kodun görevi zaten cevabı getirmekti.

## Nasıl çalışır?

Önce fikrin en riskli varsayımı tek cümleyle yazılır: "iki farklı kaynaktan gelen veriyi aynı işlemde doğrulayabilir miyiz", "bu hesaplama zincir üstünde makul bir ücrete sığar mı" gibi. Sonra yalnızca o varsayımı sınayan en kısa yol kurulur.

PoC'ta arayüz yoktur, hata yönetimi yoktur, tasarım yoktur, çoğu zaman düzgün bir isimlendirme bile yoktur. Sabit değerler koda gömülür, sonuç terminale yazılır. Denemeler genellikle [[testnet|test ağında]] yapılır, çünkü amaç para hareket ettirmek değil, mekanizmanın yürüyüp yürümediğini görmektir.

Bir hackathon'un ilk saatleri çoğunlukla PoC'tur: ekip, üstüne bina kuracağı parçanın gerçekten çalıştığını görmeden ilerlememelidir.

## Dikkat

PoC ile [[minimum-viable-product-mvp|MVP]] sık karıştırılır ve bu, hackathon'larda en yaygın yanlış adlandırmadır. Hafta sonunda çıkan işin çoğu PoC'tur: çalıştığı gösterilir ama kimse onu kullanmaz. Projeyi MVP diye sunmak, olmayan bir kullanıcı kitlesi ima eder.

PoC kodunun olduğu gibi üretime taşınması da ayrı bir risktir. "Nasılsa çalışıyor" diye bırakılan geçici çözümler, sonradan [[technical-debt|teknik borç]] olarak geri döner.
