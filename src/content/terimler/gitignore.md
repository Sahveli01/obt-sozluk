---
term: ".gitignore"
tr: ""
aliases: ["gitignore"]
category: araclar
subcategory: "Git ve GitHub"
level: baslangic
short: "Git'in takip etmemesi gereken dosya ve klasörleri satır satır listeleyen ayar dosyası."
related: [git, repository, commit, secrets-management, environment-variable]
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

`.gitignore`, [[git|Git]]'e "bu dosyaları hiç görme" demenin yoludur. Deponun kökünde durur, her satırı bir dosya adı ya da desendir.

Üç şey genelde bu listeye girer: makinende üretilen ve tekrar üretilebilen dosyalar (derleme çıktıları, indirilen paketler), yalnızca sana ait ayarlar, ve asla paylaşılmaması gereken sırlar — API anahtarları, parolalar, `.env` dosyaları. Dosya adının kendisi olduğu için çevrilmez.

## Benzetme

Valiz hazırlarken kenara ayırdığın "bunlar gelmiyor" yığını gibi: kirli çamaşır, ıslak havlu ve gittiğin yerde zaten bulunan şeyler. Hepsi senin evinde durmaya devam eder, sadece valize girmez.

## Örnek

```
node_modules/
dist/
.env
*.log
```

## Dikkat

`.gitignore` yalnızca **henüz takip edilmeyen** dosyalara etki eder. Bir dosya bir kez [[commit]]'lendiyse sonradan listeye eklemek onu geçmişten çıkarmaz; takipten düşürmen ve geçmişte kaldığını bilmen gerekir.

Bu yüzden sır barındıran dosyaları [[environment-variable|ortam değişkeni]] olarak tutmak ve `.gitignore`'u projenin ilk gününde yazmak, sonradan temizlik yapmaktan çok daha ucuzdur ([[secrets-management|sır yönetimi]]).
