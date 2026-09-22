---
term: "Symmetric Encryption"
tr: "Simetrik şifreleme"
aliases: ["simetrik şifreleme"]
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Şifreleyen ve çözen tarafın aynı gizli anahtarı paylaştığı şifreleme türü."
related: [encryption, decryption, public-key-cryptography, key-derivation, keystore-file]
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

Simetrik şifrelemede tek bir gizli anahtar vardır ve aynı anahtar hem kapatır hem açar. Adındaki simetri buradan gelir: iki taraf da aynı sırrı bilir.

Bu ailenin güçlü yanı hızıdır. Büyük dosyaları, disk bölümlerini, bir bağlantıdan akan trafiğin tamamını şifreleyen şey neredeyse her zaman simetrik bir algoritmadır; AES bunların en bilinen adıdır.

## Nasıl çalışır?

Anahtar, belirli uzunlukta rastgele bir sayıdır. Algoritma veriyi bu anahtarla bloklar hâlinde dönüştürür; aynı anahtar geriye doğru uygulandığında veri ilk hâline döner ([[decryption|şifre çözme]]).

Asıl zor kısım şifrelemenin kendisi değil, **anahtarın karşı tarafa nasıl ulaştığıdır**. Anahtarı aynı kanaldan gönderirsen, kanalı dinleyen kişi hem şifreli veriyi hem anahtarı alır. Birbirini hiç görmemiş iki tarafın ortak bir sır üzerinde anlaşması, tek başına simetrik şifrelemenin çözemediği bir sorundur.

Bu boşluğu [[public-key-cryptography|açık anahtarlı kriptografi]] doldurur. Pratikte ikisi birlikte çalışır: taraflar açık anahtarlı yöntemlerle ortak bir simetrik anahtar üzerinde anlaşır, sonra asıl veriyi o anahtarla şifreler. İnternette bir siteye bağlandığında olan tam olarak budur.

Parolayla şifrelenen dosyalarda anahtar doğrudan paroladan alınmaz; parola önce bir [[key-derivation|anahtar türetme]] fonksiyonundan geçirilir ([[keystore-file|keystore dosyası]] böyle çalışır).

## Dikkat

Kendi simetrik şifreleme uygulamanı yazma. Bu algoritmaların güvenliği yıllarca süren açık incelemeden gelir ve doğru algoritmayı yanlış kullanmak — aynı yardımcı değeri iki mesajda tekrarlamak gibi — tek başına korumayı bitirebilir. Denetlenmiş bir kütüphaneyi, önerdiği ayarlarla çağır.
