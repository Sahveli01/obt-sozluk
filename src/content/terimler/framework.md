---
term: "Framework"
tr: ""
aliases: ["çatı", "çerçeve"]
category: programlama
subcategory: "Kod organizasyonu"
level: orta
short: "Bir uygulamanın iskeletini ve akışını hazır veren, senin de bırakılan boşlukları doldurduğun kod bütünü."
related: [library-yazilim, sdk, boilerplate, react, next-js]
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

Framework, bir uygulamanın iskeletini hazır veren koddur. Dosyaların nerede duracağı, gelen isteğin hangi sırayla işleneceği, ekranın ne zaman yeniden çizileceği gibi kararlar onunla birlikte gelir; sana düşen, bırakılan boşlukları kendi işinle doldurmaktır. [[react]] ve [[next-js]] web tarafının yaygın örnekleridir.

En bilinen ayrım şudur: [[library-yazilim|kütüphaneyi]] sen çağırırsın, framework seni çağırır. Kütüphanede akış senin elindedir, istediğin satırda fonksiyonu çağırırsın. Framework'te akış onundur; sen belirli yerlere kendi fonksiyonlarını bırakırsın, sırası gelince o çağırır.

Türkçede "çatı" ya da "çerçeve" dendiği olur ama hiçbiri yerleşmedi; sektörde framework denir.

## Nasıl çalışır?

Framework, doldurulacak yerleri önceden tanımlar: belirli adlarda dosyalar, belirli klasörler, belirli biçimde yazılmış fonksiyonlar. Bu sessiz sözleşmeye uyduğun sürece gerisini o halleder. Çoğu framework işe başlarken hazır bir dosya iskeleti de üretir ([[boilerplate]]).

Bu yüzden framework seçmek kütüphane seçmekten daha bağlayıcıdır: bir kütüphaneyi bir günde çıkarıp yerine başkasını koyabilirsin, framework'ü çıkarmak çoğu zaman projeyi baştan yazmak demeye gelir.

## Benzetme

Yarışma programı formatını satın almış bir kanal gibi. Bölümün akışı bellidir: jenerik, ilk tur, reklam arası, final sorusu. Sunucuyu, soruları ve dekoru sen koyarsın ama reklamın ne zaman gireceğine sen karar vermezsin. Format karar verir; sen sırası geldiğinde sahnedesin.

## Dikkat

Sınır her zaman keskin değildir. Bazı araçlar kütüphane olarak başlar, etrafına yönlendirmeler ve kurallar birikince framework gibi davranmaya başlar. Etiketi tartışmak yerine tek bir soruyu sor: akışı kim yönetiyor, sen mi o mu?
