---
term: "Threat Model"
tr: "Tehdit Modeli"
aliases: ["tehdit modeli"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Neyi, kime karşı, hangi maliyete kadar koruduğunu önceden yazıya dökmek."
related: [attack-vector, defense-in-depth, principle-of-least-privilege, smart-contract-audit, red-teaming]
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

Tehdit modeli, bir sistemi korumaya başlamadan önce yanıtlanan soruların yazılı hâlidir: burada değerli olan ne, onu kim almak ister, neyi yapabilecek güçtedir ve hangi riski kabul ediyoruz. Güvenlik kararları ancak bu cevaplar belliyken anlam kazanır; yoksa "daha güvenli" ifadesi ölçüsüz bir temenni olarak kalır.

## Benzetme

Kafede otururken çantanı nereye koyduğun gibi. Boş bir kütüphanede sandalyenin arkasına asarsın, kalabalık bir otogarda dizinin üstünde tutarsın. Çanta aynı çantadır; değişen, o ortamda kimin ne yapabileceğine dair kurduğun tahmindir. Kimse bu tahmini yazmaz ama herkes ona göre davranır — ekip hâlinde çalışırken yazılmadığında sorun çıkar, çünkü herkesin kafasındaki otogar başka bir yerdir.

## Nasıl çalışır?

Dört soru sırayla cevaplanır.

**Ne korunuyor?** Kasadaki fon mu, yönetim yetkisi mi, kullanıcıların gizliliği mi, hizmetin ayakta kalması mı? Hepsi aynı anda korunamaz; öncelik yazılır.

**Kim saldırır ve neye gücü yeter?** Meraklı bir kullanıcı, kâr peşinde bir bot, sermayesi büyük bir ekip, ya da yetkili bir çalışan. Beklenen saldırganın gücü, alınacak önlemin ölçüsünü belirler.

**Hangi yoldan gelir?** Sözleşmeden mi, ön yüzden mi, bir çalışanın bilgisayarından mı ([[attack-vector|saldırı vektörü]]).

**Saldırı ona ne kazandırır, kaça mal olur?** Elde edilecek tutar saldırının maliyetinden büyükse, o saldırı er geç denenir.

## Dikkat

Tehdit modeli bir kalkan değil, bir kapsam belgesidir. Modelin dışında bıraktığın senaryo, sınanmamış senaryodur — [[red-teaming|red teaming]] çalışmaları da denetimler de bu kapsamın içini tarar. Bu yüzden asıl tehlikeli cümle "bunu düşünmedik" değil, "bunu düşünmediğimizi de fark etmedik"tir.

Model bir kere yazılıp rafa kalkmaz. Yeni bir entegrasyon, yeni bir yetkili adres ya da kasadaki tutarın büyümesi saldırganın hesabını değiştirir; model de o gün güncellenir.
