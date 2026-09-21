---
term: "Debugging"
tr: "Hata ayıklama"
aliases: ["hata ayıklama", "debug"]
category: programlama
subcategory: "Kod organizasyonu"
level: orta
short: "Bir hatanın nedenini şüpheli alanı adım adım daraltarak bulma ve düzeltme yöntemi."
related: [bug, debugger, stack-trace, logging, breakpoint, unit-test]
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

Hata ayıklama, bir [[bug|hatanın]] nedenini bulup düzeltme işidir. Burada anlatılan şey bir araç değil, bir yöntemdir; [[debugger]] bu yöntemde kullanılan araçlardan yalnızca biridir ve işin büyük kısmı kafanda geçer.

Özü daraltmadır. Başlangıçta "bir yerde bir şey yanlış" dersin, her adımda şüpheli alanı küçültürsün ve sonunda geriye tek bir satır kalır.

## Nasıl çalışır?

Alışılmış sıra şudur. Önce hatayı tekrar üretirsin: hangi girdiyle, hangi adımlarla her seferinde ortaya çıkıyor? Tekrar üretilemeyen bir hatanın düzeldiği de doğrulanamaz.

Sonra daraltırsın. [[stack-trace|Yığın izi]] nerede patladığını bedavaya söyler, [[logging|log kayıtları]] o ana kadar ne olduğunu anlatır, [[breakpoint|breakpoint]] ile programı şüpheli noktada durdurup değerlere bakarsın.

Sonra tek bir tahmin kurup onu sınarsın. Aynı anda üç şeyi birden değiştirirsen, sorun geçse bile hangisinin geçirdiğini bilemezsin.

En sonda düzeltmeyi yerine çivilersin: hatayı ortaya çıkaran durumu bir [[unit-test|birim teste]] çevirirsen, aynı hata geri döndüğünde sana kendisi haber verir.

## Benzetme

Duvardaki su kaçağını aramak gibi. Leke tavanda görünür ama kaynak nadiren orasıdır. İyi bir tesisatçı duvarı baştan sona kırmaz; vanaları tek tek kapatıp hangi hatta basınç düştüğüne bakar, alanı yarıya indire indire tek bir boruya varır. Duvar en sonda, en dar yerde kırılır.

## Dikkat

En sık yapılan hata, nedenini anlamadan bir şeyler değiştirip sorunun kaybolmasına sevinmektir. Kaybolmuş gibi görünen hata çoğu zaman yalnızca yer değiştirmiştir ve daha kötü bir günde geri gelir.

Bir de kendi varsayımlarına şüpheyle bak. "Burası kesin çalışıyor" dediğin yer, aramayı en çok geciktiren yerdir; hata çoğu zaman tam olarak doğru kabul ettiğin şeyin içindedir.
