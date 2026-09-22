---
term: "Session"
tr: "Oturum"
aliases: []
category: web
subcategory: "İnternet temelleri"
level: orta
short: "Bir kullanıcının siteyle sürdürdüğü ve art arda gelen istekler boyunca hatırlanan ilişki."
related: [cookie, http, authentication, jwt, sign-in-with-ethereum-siwe]
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

Oturum, bir kullanıcının siteyle kurduğu ve art arda gelen istekler boyunca sürdürülen ilişkidir. [[http|HTTP]] durumsuz olduğu için "giriş yapmış olmak" diye bir hâl protokolün kendisinde yoktur; oturum, uygulamanın bu hâli kendi eliyle kurmasıdır.

## Nasıl çalışır?

Klasik yolu şudur: giriş başarılı olunca [[server|sunucu]], yani isteği karşılayan uzak bilgisayar, kendi tarafında bir kayıt açar, bu kayda rastgele üretilmiş bir oturum kimliği verir ve kimliği bir [[cookie|çerezle]] tarayıcıya gönderir. Sonraki her istekte çerez geri gelir, sunucu kimliğe karşılık gelen kaydı bulur ve kullanıcıyı tanır. Çıkış yapmak, o kaydı silmektir.

İkinci yol durumu sunucuda hiç tutmaz: kullanıcı bilgisi imzalı bir jetona yazılır ([[jwt|JWT]]) ve her istekte o jeton gönderilir. Sunucu hatırlamaz, imzayı doğrular. Bu yaklaşım ölçeklenmeyi kolaylaştırır ama bir oturumu anında sonlandırmayı zorlaştırır: ortada silinecek bir kayıt yoktur.

## Dikkat

Cüzdanla giriş bu tabloyu değiştirir. Sunucuda saklanan bir parola yoktur; kullanıcı, sitenin verdiği tek kullanımlık bir mesajı özel anahtarıyla imzalar, sunucu da imzanın o adrese ait olduğunu doğrular ([[sign-in-with-ethereum-siwe|SIWE]]). Ama iş orada bitmez: imza yalnızca kimliği kanıtlar, ardından yine sıradan bir oturum açılır. Yani oturumu ayakta tutan şey hâlâ bir çerez ya da jetondur ve onun çalınması aynı sonucu doğurur.
