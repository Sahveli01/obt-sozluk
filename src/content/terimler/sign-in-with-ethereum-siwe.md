---
term: "Sign-In with Ethereum (SIWE)"
tr: ""
aliases: ["siwe", "sign in with ethereum", "erc-4361"]
category: cuzdanlar
subcategory: "Bağlanma ve imzalama"
level: orta
short: "Siteye parola yerine cüzdanla girmeyi sağlayan, alanları standartlaşmış ve zincir dışında imzalanan bir giriş mesajı yöntemi."
related: [signing-request, authentication, session, jwt, nonce-kriptografi, wallet]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Sign-In with Ethereum, bir siteye e-posta ve parola yerine cüzdanınla giriş yapmanın standartlaştırılmış yoludur; kısaca SIWE denir ve ERC-4361 belgesinde tanımlanmıştır.

Site sana belirli alanlardan oluşan, düz metin hâlinde okunabilir bir mesaj verir. Sen bunu cüzdanında imzalarsın, site imzanın gerçekten o adrese ait olduğunu doğrular ve oturumunu açar. Ortada bir [[transaction|işlem]] yoktur: zincire hiçbir şey yazılmaz, ücret ödenmez.

## Nasıl çalışır?

Mesajın alanları standarttır: giriş yapılan alan adı, adresin, hangi ağ olduğu, mesajın ne zaman üretildiği, isteğe bağlı bir açıklama cümlesi ve sunucunun o an ürettiği tek kullanımlık bir [[nonce-kriptografi|nonce]].

Nonce, aynı imzanın sonradan yeniden kullanılmasını engeller; sunucu her nonce'u bir kez kabul eder, bu da [[replay-attack|yeniden oynatma saldırısına]] karşı alınmış bir önlemdir. Alan adı satırı ise mesajı tek bir siteye bağlar: başka bir sitenin topladığı imza, o sitenin adını taşımadığı için burada işe yaramaz.

Doğrulama başarılıysa sunucu bundan sonrası için sıradan bir [[session|oturum]] açar; arkada bir [[jwt|JWT]] ya da oturum çerezi çalışır. Yani cüzdan yalnızca kimlik kanıtını üretir, girişin devamı klasik web yöntemleriyle yürür.

## Dikkat

Giriş imzası harcama yetkisi değildir. Düzgün bir SIWE mesajı okunabilir bir metindir; içinde miktar, jeton adı ya da yetki geçmez. Karşına çıkan pencere "giriş yap" diyor ama sana okunamayan bir veri gösteriyorsa, o adım SIWE değildir.

Bu yüzden en ucuz kontrol, mesajdaki alan adı satırını tarayıcının adres çubuğundaki siteyle karşılaştırmaktır.
