---
term: "Use Case"
tr: "Kullanım senaryosu"
aliases: []
category: hackathon
subcategory: "Ürün geliştirme"
level: orta
short: "Bir sistemin hangi kullanıcının hangi ihtiyacını, hangi adımlarla karşıladığını anlatan somut senaryo."
related: [user-story, problem-statement, target-user, user-flow, minimum-viable-product-mvp]
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

Use case, bir sistemin gerçek hayatta ne işe yaradığını anlatan somut senaryodur: kim, ne yapmak istiyor, sistem bunu hangi adımlarla karşılıyor, sonunda ne elde ediliyor.

Projeni anlatırken "blokzincir üzerinde bir platform" demek dinleyene hiçbir şey söylemez. Kullanım senaryosu bu boşluğu doldurur, çünkü teknolojiyi değil, teknolojinin işe yaradığı anı tarif eder.

## Nasıl çalışır?

Bir senaryo üç parçadan oluşur: bir aktör (kullanıcı ya da başka bir sistem), bir amaç ve amaca götüren adımlar. Adımlar yazılırken teknik ayrıntıya girilmez; "imza isteniyor" yazılır, imzanın hangi kütüphaneyle atıldığı yazılmaz.

Bir projenin birden fazla senaryosu olabilir, ama hackathon süresinde genellikle yalnızca biri baştan sona çalışır hâle gelir. Senaryoları listeleyip birini "demoda gösterilecek olan" diye işaretlemek, kapsam kararlarının çoğunu kendiliğinden verdirir: o senaryoya girmeyen her iş beklemeye alınır.

## Örnek

Bir öğrenci topluluğunun ortak kasası: "Üç yetkiliden biri ödeme talebini oluşturur, diğer ikisi kendi cüzdanından onaylar, ikinci onaydan sonra transfer gerçekleşir." Bu senaryo [[multisig|çok imzalı]] bir yapıyı, tek bir teknik kelime kullanmadan anlatır.

## Dikkat

Kullanım senaryosu ile [[user-story|kullanıcı hikâyesi]] karıştırılır: senaryo adımların tamamını anlatır, hikâye aynı ihtiyacı tek cümlelik bir kalıba sıkıştırır.

Senaryonun gerçekten var olan bir ihtiyaca dayanması gerekir. Ürünü haklı çıkarmak için sonradan uydurulan senaryolar kolay tanınır: içlerinde kullanıcının neden böyle davranacağını açıklayan hiçbir sebep bulunmaz.
