---
term: "User Interface (UI)"
tr: "Kullanıcı arayüzü"
aliases: ["ui"]
category: hackathon
subcategory: "Ürün geliştirme"
level: orta
short: "Kullanıcının gördüğü ve dokunduğu her şey: düğmeler, yazılar, formlar, renkler ve ekrandaki yerleşim."
related: [user-experience-ux, mockup, wireframe, frontend, design-system, accessibility-a11y]
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

Kullanıcı arayüzü, bir sistemin insana bakan yüzüdür: ekrandaki düğmeler, yazılar, formlar, ikonlar, renkler ve bunların yerleşimi. Bir uygulamanın arayüzü değiştiğinde altında çalışan kod aynı kalabilir; kullanıcının deneyimi ise tamamen değişir.

## Nasıl çalışır?

Bir arayüzün işi iki yönlüdür. Birincisi sistemin durumunu göstermek: ne oldu, şu an ne oluyor, bir şey beklenip beklenmediği. İkincisi kullanıcının niyetini sisteme iletmek: hangi düğmenin ne yapacağı, hangi alanın ne beklediği.

Bu iki iş, ekrandaki her nesnenin iki soruya cevap vermesi anlamına gelir: "bu ne" ve "buna dokunursam ne olur". Cevabı belirsiz kalan her nesne, kullanıcının duraksadığı bir yerdir.

Zincir üstü uygulamalarda arayüzün ayrıca anlatması gereken durumlar vardır: cüzdanın bağlı olup olmadığı, hangi ağda bulunulduğu, gönderilen bir işlemin onay beklediği ve sonunda başarılı olup olmadığı. Bu durumlar ekranda gösterilmezse kullanıcı boşluğu kendi tahminiyle doldurur; genellikle de düğmeye ikinci kez basar.

## Örnek

Bekleme durumu göstermeyen bir "Gönder" düğmesi, işlem onaylanana kadar hiçbir şey söylemez. Aynı düğme "imza bekleniyor" ve ardından "ağ onayı bekleniyor" yazsaydı, kullanıcı hiçbir şey öğrenmeden sabretmek yerine ne olduğunu bilerek beklerdi.

## Dikkat

Arayüz ile [[user-experience-ux|UX]] aynı şey değildir: UI ekrandaki nesnelerin kendisidir, UX o nesnelerle uğraşırken ortaya çıkan sonuçtur. Güzel görünen bir arayüz, kötü bir deneyim üretebilir.

Arayüzün yalnızca fareyle ve iyi gören gözlerle kullanılacağını varsaymak da yaygın bir hatadır; [[accessibility-a11y|erişilebilirlik]] sonradan eklenen bir özellik değil, baştan alınan bir karardır.
