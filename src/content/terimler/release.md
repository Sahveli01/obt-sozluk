---
term: "Release"
tr: "Sürüm"
aliases: ["surum yayini"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Bir etiketle işaretlenmiş kodun, sürüm notları ve indirilebilir dosyalarıyla birlikte kullanıcıya duyurulması."
related: [tag, semantic-versioning, github, ci-cd, build-artifact]
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

Release, projenin belirli bir hâlinin "kullanabilirsiniz" diye dışarıya duyurulmasıdır. İçinde üç şey vardır: hangi kodun yayınlandığı, o sürümde ne değiştiği ve kullanıcının indireceği dosyalar.

## Nasıl çalışır?

Temelde bir [[tag|etiketin]] üzerine kurulur. Önce yayınlanacak commit etiketlenir, sonra o etiketin etrafına sürüm notları ve derlenmiş dosyalar ([[build-artifact|build artifact]]) eklenir. Sürüm numarası genelde [[semantic-versioning|semantic versioning]] kurallarına göre verilir; böylece kullanıcı yükseltmenin kendi kodunu bozup bozmayacağını numaraya bakarak tahmin edebilir.

Bu adımların çoğu elle yapılmaz. [[ci-cd|CI/CD]] boru hattı, depoya bir etiket gönderildiğini görünce testleri çalıştırır, dosyaları derler ve yayını kendisi oluşturur. Sürüm notları da commit geçmişinden üretilebilir.

## Dikkat

Etiket ile release aynı şey değildir. Etiket Git'in kendi kavramıdır ve depoyla birlikte her yere gider; release ise [[github|GitHub]] gibi servislerin bunun üzerine eklediği bir üründür. Depoyu başka bir servise taşırsan etiketler seninle gelir, release sayfaları gelmez.

Bir de yayınlanmış sürüm geri alınmaz. Yanlış bir sürüm çıktıysa yapılacak şey onu silmek değil, düzeltmeyi içeren yeni bir sürüm yayınlamaktır; çünkü eski sürümü indirmiş olanlar zaten indirmiştir.
