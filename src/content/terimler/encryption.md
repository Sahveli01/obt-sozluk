---
term: "Encryption"
tr: "Şifreleme"
aliases: ["şifreleme"]
category: kriptografi
subcategory: "Temeller"
level: baslangic
short: "Bir veriyi, yalnızca doğru anahtarı olanın geri çevirebileceği okunmaz bir biçime dönüştürme."
related: [decryption, symmetric-encryption, public-key-cryptography, encoding, key-derivation]
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

Şifreleme, bir veriyi doğru anahtarı olmayan herkes için anlamsız hâle getirmektir. Veri yok olmaz, eksilmez; yalnızca okunamaz bir biçime girer. Doğru anahtarla geri çevrildiğinde ilk hâline birebir döner ([[decryption|şifre çözme]]).

İki aile vardır: iki tarafın aynı gizli anahtarı paylaştığı [[symmetric-encryption|simetrik şifreleme]] ve anahtarın açık ve özel diye ikiye ayrıldığı [[public-key-cryptography|açık anahtarlı kriptografi]].

Her gün kullanıyorsun: bir siteye [[ssl-tls|TLS]] üzerinden bağlandığında aradan geçen trafik şifrelidir.

## Benzetme

Bir plağı yanlış devirde çalmak gibi. Şarkı kaybolmaz, plağın üstünde aynen durur; yalnızca kimsenin tanıyamayacağı bir cıvıltıya dönüşür. Doğru devre getirdiğin anda ses geri gelir. Aradaki tek fark ölçüdür: plakta ayar iki üç ihtimalden ibarettir, şifrelemede ise tek tek denenerek bulunamayacak kadar çok ihtimalli bir sayıdır.

## Dikkat

Şifreleme ile [[encoding|kodlama]] karıştırılır. Kodlama biçim değiştirir, anahtarı yoktur ve kuralı bilen herkes geri çevirir. Şifreleme gizler ve anahtar ister. Bir parolayı Base64'e çevirmek onu gizlemez.

Kendi şifreleme algoritmanı da yazma. Bu algoritmaların güvenliği yıllarca süren açık incelemeden gelir; denetlenmiş bir kütüphaneyi çağır.
