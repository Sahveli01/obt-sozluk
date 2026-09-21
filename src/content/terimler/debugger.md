---
term: "Debugger"
tr: "Hata ayıklayıcı"
aliases: ["hata ayıklayıcı", "debug aracı"]
category: araclar
subcategory: "Test ve kalite"
level: baslangic
short: "Çalışan bir programı istediğin noktada durdurup içindeki değerlere bakmanı sağlayan araç."
related: [breakpoint, stack-trace, bug, debugging, logging]
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

Debugger, çalışan bir programı istediğin noktada durdurup içine bakmanı sağlayan araçtır. Program durduğu anda hangi satırda olduğun, değişkenlerin o andaki değerleri ve oraya hangi fonksiyonlar üzerinden geldiğin görünür hâle gelir.

Sonra programı adım adım ilerletebilirsin: bir satır çalıştır, sonucu gör, bir satır daha. Nerede duracağını [[breakpoint|breakpoint]] koyarak sen seçersin.

Çoğu editör ve her modern tarayıcı kendi debugger'ıyla gelir; ayrıca bir program kurman gerekmez.

## Benzetme

Kol saatinin arka kapağını açmak gibi. Dışarıdan yalnızca akrebin yanlış yerde durduğunu görürsün; neden orada olduğu hakkında tahmin yürütürsün. Kapağı açıp çarkları yavaşça elle çevirdiğinde hangi dişlinin kaydığını gözünle görürsün — sorun artık tahmin değil, bakılabilir bir şeydir.

## Dikkat

Debugger, araya bastırma satırları serpiştirmenin yerini büyük ölçüde tutar ama tamamen değil. Sunucuda çalışan ya da uzun süre ayakta kalan bir programı durdurup beklemek çoğu zaman mümkün değildir; orada [[logging|log kaydı]] daha işe yarar.

Bir de sıralamayı karıştırma: bir hata ortaya çıktığında ilk bakılacak şey genelde [[stack-trace|yığın izidir]], çünkü nerede patladığını bedavaya söyler. Debugger asıl olarak "neden" sorusuna geçtiğinde, yani değerlerin ne zaman bozulduğunu görmen gerektiğinde işe yarar.
