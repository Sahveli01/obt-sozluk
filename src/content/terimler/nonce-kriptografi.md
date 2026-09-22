---
term: "Nonce (Kriptografi)"
tr: ""
aliases: ["kriptografik nonce"]
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Bir mesajın ya da oturumun yalnızca bir kez geçerli olmasını sağlamak için üretilen, tekrarlanmayan tek kullanımlık değer."
related: [signature-replay, sign-in-with-ethereum-siwe, randomness, digital-signature, nonce-islem]
disambiguation: [nonce-islem]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Nonce, bir kez kullanılıp bir daha kullanılmayan değerdir. Adı İngilizce "number used once" ifadesinin kısaltmasıdır ve Türkçeye çevrilmeden kullanılır.

Çözdüğü sorun şudur: kriptografi bir mesajın **gerçek** olduğunu gösterebilir, ama tek başına o mesajın **taze** olduğunu gösteremez. Geçerli bir imzalı mesajı yakalayan biri onu aynen bir daha gönderirse imza yine doğrulanır. Nonce, mesajın içine "bu yalnızca şu bir sefer için geçerli" bilgisini koymanın yoludur.

## Nasıl çalışır?

Doğrulayan taraf her istek ya da oturum için tahmin edilemez bir değer üretir ([[randomness|rastgelelik]]) ve imzalanacak mesajın içine koydurur. İmza geldiğinde iki şeye birden bakar: imza geçerli mi, ve bu nonce daha önce kullanıldı mı? İkincisi için kullanılmış değerlerin kaydını tutar.

Aynı fikir şifrelemede de vardır. Orada nonce gizli olmak zorunda değildir ama **tekrarlanmamak** zorundadır; aynı anahtarla aynı nonce'un iki kez kullanılması korumayı ciddi biçimde zayıflatır.

## Örnek

Bir siteye cüzdanınla giriş yaparken ([[sign-in-with-ethereum-siwe|SIWE]]) imzaladığın metnin içinde sunucunun o an ürettiği bir nonce bulunur. İmzayı ele geçiren biri onu başka bir oturumda kullanamaz, çünkü sunucu o nonce'u çoktan harcanmış olarak işaretlemiştir ([[signature-replay|imza tekrarı]]).

## Dikkat

Bu nonce ile [[nonce-islem|işlem nonce'u]] aynı şey değildir. İşlem nonce'u bir hesabın sırayla artan sayacıdır ve işlemlerin sırasını belirler; buradaki nonce ise sıra tutmaz, tek kullanımlık ve çoğunlukla rastgele bir değerdir. Ortak yanları yalnızca "bir kez kullanılır" fikridir.

[[proof-of-work-pow|Proof of Work]] madenciliğinde denenen sayıya da nonce denir; orada amaç tekrarı önlemek değil, uygun bir özet bulana kadar deneme yapmaktır.
