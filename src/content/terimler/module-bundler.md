---
term: "Module Bundler"
tr: ""
aliases: ["paketleyici"]
category: web
subcategory: "Frontend"
level: orta
short: "Birbirine bağlı onlarca kaynak dosyayı tarayıcıya gidecek az sayıda optimize dosyada toplayan araç."
related: [vite, build, javascript, import, npm]
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

Bir web projesi onlarca, bazen binlerce dosyadan oluşur: kendi yazdığın modüller ve [[npm|npm]] üzerinden gelen paketler. Paketleyici, dosyaları birbirine bağlayan [[import|içe aktarma]] ifadelerini takip eder, hepsini tek bir bağımlılık ağacında toplar ve tarayıcıya gidecek az sayıda dosya üretir.

Yerleşmiş bir Türkçe karşılığı yoktur; "paketleyici" denmesine rağmen araçların belgelerinde bundler olarak geçer.

## Nasıl çalışır?

Giriş dosyasından başlar ve içe aktarmaları izleyerek neyin neye bağlı olduğunu çıkarır. Sonra dört iş yapar: hiç kullanılmayan kodu ağaçtan ayıklar, boşlukları ve uzun adları atarak dosyayı küçültür, çıktıyı parçalara bölerek yalnızca o an gereken parçanın indirilmesini sağlar ve dosya adına içeriğe bağlı bir damga koyar — içerik değişmediği sürece tarayıcı dosyayı yeniden indirmez, değiştiğinde ise eski sürüm ekranda kalmaz.

[[javascript|JavaScript]] dışındaki biçimler de bu aşamada dönüşür: TypeScript, JSX, stil dosyaları, hatta küçük görseller. [[build|Derlemenin]] web tarafındaki asıl işi budur.

## Dikkat

Modern tarayıcılar modülleri doğrudan yükleyebilir; dolayısıyla paketlemenin bugünkü faydası "her şeyi tek dosya yapmak" değildir. Asıl kazanç gereksiz kodu ayıklamak, çıktıyı küçültmek ve neyin ne zaman indirileceğine karar verebilmektir. [[vite|Vite]] gibi araçların geliştirirken paketlememesi, yayında paketlemesi de bu ayrımdan çıkar.

Bir de şu: paketleyici çıktısı insan için okunaklı değildir. Kaynak haritaları üretilmezse tarayıcıda gördüğün satır numaraları yazdığın koda karşılık gelmez ve hata ayıklamak zorlaşır.
