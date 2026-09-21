---
term: "Version Control"
tr: "Sürüm kontrolü"
aliases: ["surum kontrolu", "versiyon kontrolu"]
category: araclar
subcategory: "Git ve GitHub"
level: baslangic
short: "Bir projedeki her değişikliği kim, ne zaman ve neden yaptı bilgisiyle saklayan, istenen ana geri dönmeyi sağlayan sistem."
related: [git, commit, repository, branch, diff]
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

Sürüm kontrolü, bir projenin dosyalarının zaman içindeki her hâlini saklayan ve istediğin ana geri dönmeni sağlayan sistemdir. Değişiklikler tek tek kaydedilir; her kayıtta kimin, ne zaman, neyi ve neden değiştirdiği yazar.

En yaygın sürüm kontrol programı [[git|Git]]'tir. Kayıt birimine [[commit]], projenin tutulduğu yere [[repository|depo]], paralel çalışma hattına [[branch|dal]] denir.

## Benzetme

Bir ödevi `odev.docx`, `odev_son.docx`, `odev_gercek_son.docx` diye çoğalta çoğalta ilerlemek gibi düşün. Dosyalar duruyor ama hangisinin hangisinden türediğini, aralarında tam olarak ne değiştiğini ve iki arkadaşın kopyalarının nasıl tek dosyada birleşeceğini kimse bilmiyor. Sürüm kontrolü tam olarak bu üç sorunun cevabını tutar.

## Dikkat

Sürüm kontrolü yedekleme değildir. Yedek, dosyanın son hâlini korur; sürüm kontrolü ara hâlleri ve gerekçeleri korur. İkisi birbirinin yerine geçmez.

Bir de metin dosyaları için tasarlanmıştır: kod, yazı, ayar dosyaları. Video, büyük görsel ya da derlenmiş dosyalarda satır satır [[diff|fark]] çıkarılamadığı için depo hızla şişer.
