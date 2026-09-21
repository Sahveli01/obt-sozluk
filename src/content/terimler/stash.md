---
term: "Stash"
tr: ""
aliases: []
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Yarım kalmış değişiklikleri commit'lemeden bir kenara alıp çalışma klasörünü temiz hâle getiren geçici raf."
related: [commit, branch, head, merge-conflict, git]
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

Stash, elindeki yarım işi kaydetmeye hazır olmadığın ama şu an başka bir şeye bakman gerektiği durumlar içindir. Değişikliklerini geçici bir rafa alır, klasörünü son [[commit|commit'teki]] hâline döndürür; işin bitince rafa koyduğunu geri alırsın. Türkçede yerleşik karşılığı yok, "stash'e almak" diye kullanılıyor.

## Benzetme

Misafir gelirken masadaki dağınıklığı bir çekmeceye süpürmek gibi. Hiçbir şey atılmaz, sadece görünürden çekilir; misafir gidince çekmeceyi açıp kaldığın yerden devam edersin.

## Nasıl çalışır?

Stash, takip edilen dosyalardaki değişiklikleri alıp bir yığına koyar. Yığın olduğu için birden fazla stash biriktirebilirsin; en son koyduğun en üsttedir.

Geri alırken iki seçenek vardır: uygulayıp yığından silmek ya da uygulayıp yığında bırakmak. Henüz hiç kaydedilmemiş, Git'in takip etmediği yeni dosyalar varsayılan olarak alınmaz; onları da almak için ayrı bir bayrak gerekir.

## Örnek

```
git stash push -u -m "yarim kalan giris formu"
git switch main
git stash list
git stash pop
```

`-u` takip edilmeyen dosyaları da dahil eder, `pop` en üsttekini geri uygular ve yığından siler.

## Dikkat

Stash adsız ve geçici bir depodur, uzun vadeli saklama yeri değildir. Haftalarca bekleyen stash'ler unutulur; başka bir [[branch|dalda]] geri uygulandığında da [[merge-conflict|çakışma]] çıkarır.

Birkaç saatten uzun sürecek işler için geçici bir commit almak ve gerekirse sonradan düzeltmek daha güvenlidir.
