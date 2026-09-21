---
term: "Main Branch"
tr: "Ana dal"
aliases: ["ana dal", "master branch"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Bir deponun varsayılan dalı; projenin herkesçe kabul edilen güncel hâlinin durduğu yer."
related: [branch, merge, release, pull-request-pr, tag]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Ana dal, bir deponun varsayılan [[branch|dalıdır]]: depoyu klonlayan kişinin karşısına çıkan, ekibin "projenin şu anki hâli budur" dediği hat. Yazıldığı tarih itibarıyla yeni depolarda bu dalın adı genellikle `main`'dir; daha eski depolarda aynı rolü `master` üstlenir.

## Nasıl çalışır?

Ana dalın Git açısından özel bir ayrıcalığı yoktur; farkı, ekibin ona yüklediği anlamdan ve etrafına konan kurallardan gelir. Yaygın düzen şudur: ana dala doğrudan [[push|push]] kapatılır, her değişiklik bir dalda hazırlanır ve [[pull-request-pr|pull request]] ile önerilir, testler geçmeden ve en az bir kişi [[code-review|incelemeden]] birleşme yapılamaz.

Bu kurallar ana dalın her an çalışır durumda kalmasını hedefler. Yayına çıkacak sürümler de genelde buradan [[tag|etiketlenir]]; böylece hangi kodun yayınlandığı tek bir noktadan izlenebilir.

## Örnek

```
git switch main
git pull origin main
git merge giris-formu
```

## Dikkat

`main` sadece bir isimdir. Adını değiştirmek Git'in davranışını değiştirmez ama sunucudaki varsayılan dal ayarını, otomasyon dosyalarını ve ekipteki herkesin yerel kopyasını da güncellemek gerekir; bu yüzden yaşayan bir depoda gelişigüzel yapılacak bir iş değildir.

Ana dalın "korumalı" olması kodun doğru olduğunu garanti etmez; yalnızca oraya girenin bir süzgeçten geçtiğini gösterir.
