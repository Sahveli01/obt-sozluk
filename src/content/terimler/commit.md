---
term: "Commit"
tr: ""
aliases: []
category: araclar
subcategory: "Git ve GitHub"
level: baslangic
short: "Projenin belirli bir andaki hâlini, yazarı ve gerekçesiyle birlikte geçmişe kalıcı olarak ekleyen kayıt birimi."
related: [commit-message, repository, branch, diff, push]
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

Commit, projenin bir andaki hâlinin geçmişe eklenmiş kaydıdır. İçinde dosyaların o anki içeriği, kaydı alan kişi, tarih, bir [[commit-message|commit mesajı]] ve kendinden önceki commit'e bağlantı bulunur. Her commit'in kendine ait bir kimliği vardır; geçmişte bir noktayı göstermek istediğinde bu kimliği kullanırsın.

Kayıt iki adımlıdır: önce hangi değişikliklerin bu kayda gireceğini seçersin, sonra kaydı alırsın. Türkçede yerleşik bir karşılığı yok; "commit atmak" diye kullanılır.

## Benzetme

Satranç maçında her hamleden sonra hamleyi kâğıda yazmak gibi. Maçın sonunda kâğıda bakıp istediğin hamleye dönebilir, tahtayı tam o andaki hâliyle yeniden kurabilirsin.

## Örnek

```
git add giris.js
git commit -m "bos sifre kabul edilmesi engellendi"
```

## Dikkat

Commit yerel bir işlemdir. Kaydı aldığın an değişiklik yalnızca senin bilgisayarındadır; başkasının görmesi için ayrıca [[push|push]] etmen gerekir.

Bir de commit'i "kaydet" tuşu gibi düşünmemek gerekir. Her commit tek bir işi anlatmalı; on ayrı konuyu tek kayda doldurursan sonradan sadece birini geri almak ya da [[diff|farkı]] okumak zorlaşır.
