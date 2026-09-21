---
term: "Block Time"
tr: "Blok süresi"
aliases: ["blok süresi"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: baslangic
short: "İki blok arasında geçen ortalama süre; ağın işlemleri ne sıklıkta kayda geçirdiğini belirleyen ritim."
related: [block, block-height, confirmation, difficulty-adjustment, finality]
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

Blok süresi, ağın iki blok arasında geçirdiği ortalama zamandır. Bir [[block|bloğun]] tam olarak ne zaman çıkacağı önceden bilinmez, ama protokol uzun vadede bu ortalamayı belirli bir hedefin etrafında tutmaya çalışır.

Bu ritim kullanıcı tarafında doğrudan hissedilir: işleminin zincire ilk kez girmesi için en az bir blok beklemen gerekir. Süre kısaldıkça işlemler daha çabuk görünür; buna karşılık iki üreticinin aynı anda blok yayınlama ihtimali artar ve ağın bu çakışmaları temizlemesi gerekir.

## Benzetme

Ağın nabzı gibi düşün. Nabız dakikada ortalama belli bir sayıdadır ama atışlar milimetrik olarak eşit aralıklı değildir; bazen biraz erken, bazen biraz geç gelir. Önemli olan tek bir atışın zamanı değil, ortalamanın sabit kalmasıdır.

## Dikkat

Blok süresi zincirden zincire değişir ve aynı zincirde bile blok blok dalgalanır; ezberlenecek evrensel bir sayı yoktur. İş ispatı kullanan ağlarda bu ortalamayı koruyan mekanizma [[difficulty-adjustment|zorluk ayarıdır]].

Kısa blok süresi hızlı kesinlik demek de değildir. Blokların sık gelmesi işlemin geri alınamaz olduğu anlamına gelmez; asıl ölçü üstüne kaç [[confirmation|onay]] biriktiği ve ağın ne zaman [[finality|kesinlik]] ilan ettiğidir.
