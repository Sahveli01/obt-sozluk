---
term: "Cryptography"
tr: "Kriptografi"
aliases: ["kriptografi"]
category: kriptografi
subcategory: "Temeller"
level: baslangic
short: "Bilgiyi gizlemek, bozulmadığını göstermek ve kimin gönderdiğini kanıtlamak için kullanılan matematiksel yöntemler bütünü."
related: [encryption, public-key-cryptography, hash-function, digital-signature, private-key]
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

Kriptografi, bilgiyi korumak için kullanılan matematiksel yöntemlerin bütünüdür. Tek bir işi yoktur; dört ayrı soruya cevap verir.

**Gizlilik.** İçeriği yalnızca doğru kişi okuyabilir ([[encryption|şifreleme]]).

**Bütünlük.** İçerik yolda değiştirildiyse bu fark edilir ([[hash-function|hash fonksiyonu]]).

**Kimlik doğrulama.** Mesajın gerçekten kimden geldiği gösterilebilir ([[digital-signature|dijital imza]]).

**İnkâr edilemezlik.** Gönderen sonradan "ben göndermedim" diyemez.

Blockchain'in tamamı bu dördünün üstünde durur. Bir işlemi kimin gönderdiği bir kurumun kayıtlarından değil imzadan anlaşılır, bir kaydın değişip değişmediği de birinin sözünden değil hesaptan.

## Benzetme

Değerli bir şeyi korumanın iki yolu vardır. Birincisi başına birini dikmektir: bekçi tutulur, kayıt tutulur, denetim yapılır. Bu korumanın gücü insanların dikkatli ve dürüst kalmasına bağlıdır. İkincisi korumayı hesabın içine gömmektir: kuralı herkes bilir, isteyen herkes uygular, ama doğru anahtar olmadan işlemi tersine çevirmek kimsenin karşılayamayacağı kadar pahalıdır. Kriptografi ikinci yoldur. Bekçi uyuyabilir; maliyet uyumaz.

## Dikkat

**Kendi kripto algoritmanı yazma.** Yaygın kullanılan algoritmaların güvenliği kodun doğru görünmesinden değil, yıllarca süren açık incelemeden gelir. Denetlenmiş ve yaygın kullanılan bir kütüphaneyi çağır; kendi şifrelemeni, kendi imza doğrulamanı yazma.

"Kırılamaz" diye bir şey de yoktur. Her şema bir varsayıma dayanır ve doğru soru "kırılabilir mi" değil, "hangi varsayım altında, ne kadar maliyetle kırılır" sorusudur.
