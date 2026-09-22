---
term: "User Flow"
tr: "Kullanıcı akışı"
aliases: []
category: hackathon
subcategory: "Ürün geliştirme"
level: orta
short: "Bir kullanıcının belirli bir amaca ulaşmak için attığı adımların, dallanmalarıyla birlikte sıralanmış hâli."
related: [user-experience-ux, use-case, onboarding, wireframe, signing-request]
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

Kullanıcı akışı, bir kişinin belirli bir amaca ulaşmak için attığı adımların sırasıdır. Ekranların nasıl göründüğüyle değil, hangi sırayla geldikleriyle ilgilenir.

Yazmak ucuzdur: bir kâğıda adımları alt alta dizmek yeterlidir. Faydası da orantısız biçimde büyüktür, çünkü fazladan her adım, kullanıcıların bir kısmını kaybettiğin yerdir.

## Nasıl çalışır?

Her adım ikiye bölünerek yazılır: kullanıcı ne yapar, ekranda ne olur. Ardından dallanmalar eklenir — bir adım başarısız olursa nereye gidilir, kullanıcı vazgeçerse ne kalır.

Zincir üstü uygulamalarda akışa çoğu ekibin plana yazmayı unuttuğu adımlar girer: cüzdanın bağlanması, doğru ağda olunup olunmadığının denetlenmesi, [[signing-request|imza isteğinin]] cüzdan penceresinde onaylanması ve işlem ağda onaylanana kadar geçen bekleme. Bunlar senin kodunun dışında geçer ama kullanıcı açısından akışın parçasıdır; akışta yoklarsa arayüzde de karşılıkları olmaz.

## Örnek

Bağış gönderme akışı: siteyi aç → cüzdanı bağla → tutarı gir → "Gönder"e bas → cüzdanın imza penceresinde onayla → işlem onayını bekle → başarı ekranını ve işlem bağlantısını gör.

Yedi adımın yalnızca üçü senin ekranında geçer; geri kalanı kullanıcının başka bir pencerede yaşadığı şeydir.

## Dikkat

Akışı yalnızca "her şey yolunda giderse" hâliyle yazmak en sık yapılan hatadır. Kullanıcı imzayı reddederse, yanlış ağdaysa, bakiyesi yetmezse ya da işlem başarısız olursa ne göreceği de akışa yazılmalıdır — demoda bozulan şey genellikle tam olarak burasıdır.
