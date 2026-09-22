---
term: "Bug Bounty"
tr: "Hata Ödül Programı"
aliases: ["hata ödül programı"]
category: guvenlik
subcategory: "Temel kavramlar"
level: baslangic
short: "Bir projenin, açık bulup kendisine bildiren kişilere önceden ilan edilmiş kurallarla ödül ödediği program."
related: [responsible-disclosure, whitehat, vulnerability, smart-contract-audit, auditor]
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

Bug bounty, bir projenin "açığımı bulana para veriyorum" demesidir. Program sayfasında hangi sistemlerin kapsama girdiği, neyin geçerli bir bulgu sayıldığı, nasıl bildirileceği ve ciddiyet derecesine göre ne kadar ödeneceği yazar. Bulguyu bildirme biçimi [[responsible-disclosure|sorumlu açıklamanın]] kendisidir; ödül, o davranışı sürdürülebilir kılan kısımdır.

## Benzetme

Bazı marketlerin "raf etiketiyle kasa fiyatı tutmuyorsa ürün sizden" kuralı gibi. Market bu kuralla binlerce müşteriyi kendi hata denetçisine çevirir. Hatayı bulan kişi susup gitmek yerine kasaya söyler, çünkü söylemek ona daha çok kazandırır.

## Dikkat

**Kapsam belgedir.** Program sayfasında yazan sözleşmeler, alanlar ve test yöntemleri dışına çıkmak, programın sağladığı korumayı ortadan kaldırır. Gerçek kullanıcıların parasına dokunmak, canlı sistemi yavaşlatmak ve başkasının hesabına girmek hemen her programda yasaktır.

Ödül programı olması [[smart-contract-audit|denetimin]] yerine geçmez. Denetim yayına girmeden önce planlı bir incelemedir; ödül programı yayından sonra sürekli açık duran bir kapıdır. İkisi farklı anları korur.

Bir de ödülün büyüklüğü meselesi var: kasadaki tutarın yanında küçük kalan bir ödül, bulan kişiye "bildirmek mi daha kârlı, kullanmak mı" sorusunu sordurur. Programın caydırıcılığı tam olarak bu karşılaştırmada belli olur.
