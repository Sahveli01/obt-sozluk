---
term: "Gwei"
tr: ""
aliases: ["giga wei"]
category: temeller
subcategory: "Para birimleri ve ücretler"
level: orta
short: "Bir milyar wei'ye eşit ara birim; işlem ücretleri pratikte bu birimle konuşulur."
related: [wei, gas-price, ethereum, transaction-fee, base-fee, priority-fee]
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

Gwei ("giga-wei"), ether'in ara ölçek birimidir: 1 gwei = 1.000.000.000 [[wei]], yani bir ether'in milyarda biri. Ayrı bir para ya da token değildir; ether'i insan gözünün okuyabileceği büyüklükte yazmanın bir yoludur. Birim adı olduğu için Türkçeye çevrilmez.

## Nasıl çalışır?

[[gas-price|Gas fiyatlarının]] düştüğü aralık, wei ile yazıldığında on haneli sayılara, ether ile yazıldığında sıfırla başlayan uzun ondalıklara dönüşür. İkisi de insanın bakıp karşılaştırabileceği sayılar değildir. Gwei bu aralığı bir ya da iki haneye indirir; "25 gwei" yazmak "25.000.000.000 wei" yazmaktan hem kısa hem de yanılma payı düşüktür.

Bu yüzden cüzdanlar, blok tarayıcıları ve [[gas-estimation|ücret tahmini]] araçları [[base-fee|taban ücreti]] ile [[priority-fee|öncelik ücretini]] gwei cinsinden gösterir. Zincirin kendisi bu birimi bilmez; protokolün bütün hesapları yine wei ile yapılır, gwei sadece arayüz katmanında yaşar.

## Dikkat

Gwei'yi bir varlık sanma: cüzdanında "gwei bakiyesi" diye bir kalem yoktur, sadece ether vardır. Bir de ücret hesaplarken birimleri karıştırmamak gerekir. [[gas-limit|Gas limiti]] bir adet, gas fiyatı ise gwei'dir; ikisini çarpınca sonuç gwei cinsinden çıkar ve ether'e çevirmek için bir milyara bölmen gerekir.
