---
term: "SDK"
tr: ""
aliases: ["software development kit", "yazılım geliştirme kiti"]
category: programlama
subcategory: "Kod organizasyonu"
level: orta
short: "Belirli bir platformla çalışmak için gereken kütüphane, araç ve belgelerin bir arada sunulan takımı."
related: [library-yazilim, framework, api, documentation, package]
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

SDK, "software development kit" kısaltmasıdır: belirli bir platformla çalışmak için gereken parçaların tek elden toplanmış hâli. İçinde genelde bir ya da birkaç kütüphane, bir komut satırı aracı, örnek proje, tip tanımları ve [[documentation|belgeler]] birlikte bulunur.

Farkı şurada: bir [[library-yazilim|kütüphane]] tek bir işi çözer, bir [[framework]] uygulamanın iskeletini kurar; SDK ise başka birinin platformuna bağlanmak için gereken takımdır. Platform bir işletim sistemi, bir cüzdan, bir ödeme sağlayıcı ya da bir zincir olabilir.

Zincirle konuşan uygulamalarda SDK genelde [[json-rpc|RPC]] çağrılarını, işlem imzalamayı ve veri kodlamayı bir arada getirir. Bunları elle yazmak mümkündür; SDK'nın yaptığı, onları platformun beklediği biçimde yapmaktır.

## Nasıl çalışır?

SDK'yı projene çoğunlukla bir [[package|paket]] olarak eklersin, ama tek başına bir paketten fazlasıdır: yanında gelen komut satırı aracı proje iskeleti kurar, örnekler ilk isteği atmanı sağlar, belgeler de hangi çağrının ne döndüğünü yazar.

Sürümü platforma bağlıdır. Platform arayüzünü ([[api]]) değiştirdiğinde SDK'nın da güncellenmesi gerekir; bu yüzden SDK'lar genelde platformu işleten ekip tarafından yayımlanır ve platformun belgeleriyle birlikte yürür.

## Benzetme

Bir markanın bayilik paketi gibi. Bayi olduğunda sana tabelayı, ürün kataloğunu, sipariş formlarını ve kurulumu anlatan eğitimi birlikte verirler. Hepsi o markayla çalışmak içindir; aynı formlarla başka markadan ürün isteyemezsin.

## Dikkat

"SDK" adı gevşek kullanılır: içinde tek bir kütüphane olan şeye de SDK denebilir. Ada değil, kutunun içindekine bak.

Asıl dikkat edilecek nokta bağlılıktır. SDK kullanmak, o platformun kararlarını da kabul etmek demektir; platform bir özelliği kaldırdığında ya da arayüzünü değiştirdiğinde senin uygulaman da etkilenir. Bu, SDK'nın kusuru değil doğasıdır — ama projeyi kurarken bilinerek seçilmesi gereken bir bağdır.
