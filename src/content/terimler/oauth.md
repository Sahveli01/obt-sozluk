---
term: "OAuth"
tr: ""
aliases: []
category: web
subcategory: "Backend"
level: orta
short: "Kullanıcının parolasını vermeden, bir servisteki hesabına sınırlı erişim yetkisini başka bir uygulamaya devretmesini sağlayan protokol."
related: [authorization, authentication, api, jwt, api-key]
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

OAuth bir yetki devri protokolüdür. Bir uygulamanın senin adına başka bir serviste iş yapması gerektiğinde — takvimini okumak, depondaki dosyalara erişmek gibi — parolanı o uygulamaya vermek yerine servisin kendisinden sınırlı bir izin alınmasını sağlar. "Google ile giriş yap", "GitHub ile bağlan" düğmelerinin altında bu akış vardır.

## Nasıl çalışır?

Uygulama seni hesabının bulunduğu servise yönlendirir. Girişini orada yaparsın; parola uygulamaya hiç uğramaz. Servis sana hangi izinlerin istendiğini gösterir: yalnızca profil bilgisi, yalnızca okuma, belirli bir klasör.

Onaylarsan uygulamaya bu izinlerle sınırlı ve süreli bir erişim belgesi (access token) verilir. Uygulama artık servisin [[api|API]]'sine bu belgeyle gider. Verdiğin yetkiyi sonradan hesabının ayarlarından geri alabilirsin ve bunun için parola değiştirmen gerekmez — parolayı hiç paylaşmadığın için zaten gereksizdir.

## Dikkat

Adı yanıltmasın: OAuth bir [[authorization|yetkilendirme]] protokolüdür, [[authentication|kimlik doğrulama]] protokolü değil. "X ile giriş yap" akışının kimlik doğrulama olarak güvenli çalışması için üstüne ayrı bir katman konur; bu katmanın adı OpenID Connect'tir.

Asıl karar onay ekranındadır ve orası hızla geçilir. Bir not uygulamasının bütün e-postalarını okuma izni istemesi normal değildir; istenen izinlerin kapsamını okumak, sonradan bağlantıyı koparmaya çalışmaktan kolaydır.
