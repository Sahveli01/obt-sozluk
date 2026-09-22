---
term: "Authentication"
tr: "Kimlik doğrulama"
aliases: ["authn"]
category: web
subcategory: "Backend"
level: orta
short: "Bir isteğin gerçekten iddia edilen kişiden geldiğini kanıtlatma işi."
related: [authorization, jwt, session, oauth, sign-in-with-ethereum-siwe]
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

Kimlik doğrulama tek bir soruya cevap arar: sen kimsin? Sistem, "ben şu kişiyim" iddiasını değil, bu iddianın kanıtını kabul eder. Kanıt bildiğin bir şey (parola), sahip olduğun bir şey (telefon, güvenlik anahtarı) ya da ikisi birden olabilir.

## Benzetme

Banka gişesinde kimlik sorulması gibi. "Bu hesap benim" demen yeterli değildir; kimliğini uzatırsın, memur fotoğrafa ve numaraya bakar. Kimlik doğrulama tam olarak bu kontroldür — paranın çekilip çekilemeyeceği ise bundan sonra gelen, bambaşka bir sorudur.

## Nasıl çalışır?

Klasik yol kullanıcı adı ve paroladır. Parolanın kendisi saklanmaz, yalnızca [[hash|hash]]'i saklanır; böylece veritabanı sızsa bile parolalar doğrudan ele geçmez. Doğrulama başarılıysa sunucu ya bir [[session|oturum]] kaydı açar ya da imzalı bir [[jwt|token]] verir. Sonraki isteklerde parola değil, bu kanıt taşınır.

Zincir tarafında yöntem değişir. Bir hesabın sahibi olduğunu, sana gönderilen bir mesajı [[private-key|özel anahtarınla]] imzalayarak kanıtlarsın; [[sign-in-with-ethereum-siwe|SIWE]] bu akışı standartlaştırır. Fark şudur: klasik web'de senin kim olduğuna, elindeki kayda bakarak sunucu karar verir; zincirde kanıtı sen üretirsin, karşı taraf yalnızca imzayı doğrular.

## Dikkat

Kimlik doğrulama "kimsin" sorusunu kapatır ve orada durur; o kişinin ne yapmaya izinli olduğuna hiç karışmaz. O ayrı iştir ve adı [[authorization|yetkilendirmedir]].

Kod ve belgelerde ikisi de "auth" diye kısaltıldığı için karışır. Ayrıştırmak gerektiğinde authn (kimlik doğrulama) ve authz (yetkilendirme) yazılır.
