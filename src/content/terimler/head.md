---
term: "HEAD"
tr: ""
aliases: []
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Şu anda hangi commit'in üzerinde çalıştığını gösteren, normalde bir dalı işaret eden Git işaretçisi."
related: [commit, branch, diff, stash, git]
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

HEAD, Git'in "şu an buradasın" dediği yerdir. Çalışma klasöründeki dosyalar HEAD'in gösterdiği [[commit|commit'e]] göre düzenlenir, yeni aldığın kayıt da onun üzerine eklenir. Bir işaretçinin adı olduğu için büyük harfle yazılır ve çevrilmez.

## Benzetme

Kitapta kaldığın yeri tutan ayraç gibi. Ayraç kitabı değiştirmez, sadece hangi sayfada olduğunu söyler; okudukça onu bir sonraki sayfaya sen taşırsın.

## Nasıl çalışır?

Normal durumda HEAD doğrudan bir commit'i değil, bir [[branch|dal]] adını gösterir. Commit aldıkça dal ilerler, HEAD de dalı göstermeye devam ettiği için seninle birlikte ilerlemiş olur.

Geçmişte bir noktayı göstermek için HEAD'i başlangıç kabul eden kısayollar vardır: `HEAD~1` bir önceki commit, `HEAD~3` üç öncesi demektir.

Bir dal yerine doğrudan bir commit'e geçersen HEAD bir dalı değil o commit'i gösterir; buna "detached HEAD" denir. Bu durumda aldığın commit'ler hiçbir dala bağlı olmaz.

## Örnek

```
git log --oneline -1 HEAD
git diff HEAD~1
git switch -
```

Son komut bir önceki dala geri döner.

## Dikkat

Detached HEAD uyarısı korkutucu görünür ama tek başına veri kaybı değildir. Orada iş yaptıysan ayrılmadan önce `git switch -c yeni-dal` ile commit'lerini bir dala bağla; bağlamadan başka bir dala geçersen o commit'leri bulmak zorlaşır.

HEAD ile `origin/main` gibi uzak takip dallarını karıştırma: biri senin nerede olduğunu, diğeri sunucuda en son ne gördüğünü söyler.
