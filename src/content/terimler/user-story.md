---
term: "User Story"
tr: "Kullanıcı hikâyesi"
aliases: []
category: hackathon
subcategory: "Ürün geliştirme"
level: orta
short: "Bir ihtiyacı kim, ne ve neden sorularına göre tek cümlede yazan kısa not."
related: [use-case, backlog, sprint, user-persona, problem-statement]
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

Kullanıcı hikâyesi, yapılacak bir işi kullanıcının ağzından tek cümlede anlatan kısa nottur. Amacı işi tarif etmek değil, işin neden yapıldığını kaybetmemektir. "Filtre ekranı yap" bir görevdir; kullanıcı hikâyesi bunun yerine kimin, neyi, niçin istediğini yazar.

## Nasıl çalışır?

Yaygın kalıp şudur: **"... olarak, ... yapabilmek istiyorum; çünkü ..."** Üç boşluk sırasıyla rolü, istenen davranışı ve sebebi doldurur. Sebep kısmı en çok atlanan ve en değerli olanıdır: bir işin neden yapıldığı bilinirse, o iş yetişmediğinde yerine daha ucuz bir çözüm konabilir.

Hikâyenin altına bir de "bitti sayılma ölçütü" yazılır. Bu, ekipteki iki kişinin aynı işi bitmiş sayması için gereken en kısa anlaşmadır.

Hikâyeler [[backlog|birikmiş işler listesinde]] durur; bir çalışma dönemi başlarken listeden birkaçı seçilir.

## Örnek

"Topluluğun sayman yardımcısı olarak, gelen bağışları tek bir sayfada görebilmek istiyorum; çünkü her ay elle tablo hazırlamak yarım günümü alıyor."

Bitti sayılma ölçütü: "Sayfa açıldığında son bağışlar tarih sırasıyla listeleniyor ve toplam tutar en üstte görünüyor."

## Dikkat

Hikâye, teknik görev listesi değildir. "Veritabanı şemasını kur" kullanıcı hikâyesi olamaz, çünkü bunu isteyen bir kullanıcı yoktur; o iş, bir hikâyenin altındaki adımlardan biridir.

Bir hikâye bir çalışma döneminde bitirilemeyecek kadar büyükse, küçük parçalara bölünür. Bölünemiyorsa muhtemelen bir hikâye değil, bütün bir [[use-case|kullanım senaryosudur]].
