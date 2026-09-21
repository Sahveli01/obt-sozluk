---
term: "Fetch"
tr: ""
aliases: []
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Uzak depodaki yenilikleri indirip yerel kayda geçiren, ama çalıştığın dala hiçbir şey uygulamayan işlem."
related: [pull, remote, merge, push, diff]
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

Fetch, [[remote|uzak depoda]] ne olup bittiğini indirmektir — ve sadece indirmektir. Yeni [[commit|commit'ler]], dallar ve etiketler bilgisayarına gelir, ama senin üzerinde çalıştığın dal ve klasördeki dosyalar olduğu gibi kalır. Türkçede karşılığı yerleşmediği için "fetch etmek" denir.

## Nasıl çalışır?

Fetch, indirdiklerini uzak takip dallarına yazar. Örneğin sunucudaki `main` dalının son hâli sende `origin/main` olarak güncellenir; kendi `main` dalın kıpırdamaz. Böylece iki hâl aynı anda elinde durur ve ne geldiğini uygulamadan önce okuyabilirsin.

**Fetch ile [[pull|pull]] arasındaki fark tam olarak budur:** pull, fetch'in yaptığı işi yapar ve üstüne indirdiklerini hemen dalına [[merge|birleştirir]]. Yani `pull = fetch + birleştirme`. Fetch her zaman güvenlidir, hiçbir şeyi bozmaz ve çakışma çıkarmaz; pull ise dosyalarını o anda değiştirir ve çakışma çıkarabilir.

Karar sende kalsın istiyorsan sıra şudur: fetch et, gelenleri incele, sonra birleştir.

## Örnek

```
git fetch origin
git log --oneline main..origin/main
git merge origin/main
```

Ortadaki komut "sunucuda olup bende olmayan commit'ler" listesini verir.

## Dikkat

`git fetch` çoğu zaman hiçbir şey yazmadan biter; bu hata değil, "yeni bir şey yok" demektir.

Sunucuda silinmiş dallar sende görünmeye devam eder. `git fetch --prune` bu ölü kayıtları temizler.
