---
term: "ECDSA"
tr: ""
aliases: []
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: orta
short: "Eliptik eğri üzerinde çalışan, Bitcoin ve Ethereum işlemlerinin imzalanmasında kullanılan yaygın dijital imza şeması."
related: [digital-signature, secp256k1, elliptic-curve-cryptography-ecc, signature-verification-ecrecover, signature-malleability, eddsa]
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

ECDSA, [[elliptic-curve-cryptography-ecc|eliptik eğri]] üzerinde çalışan bir [[digital-signature|dijital imza]] şemasıdır. Adı, tanımlandığı standardın kısaltmasıdır; Türkçeye çevrilmez.

Yaygınlığı tarihseldir: 1990'ların sonunda standartlaştı, internet altyapısından bankacılığa kadar her yere girdi, Bitcoin de onu devraldı. Bugün Bitcoin ve Ethereum işlemlerinin altındaki imza bu şemayla, [[secp256k1|secp256k1]] eğrisi üzerinde üretilir.

## Nasıl çalışır?

İmza atarken üç girdi vardır: imzalanacak mesajın özeti, özel anahtar ve **her imza için yeniden üretilen tek seferlik gizli bir sayı**.

Sonuç `r` ve `s` adlı iki sayıdır. Ethereum bunlara küçük bir `v` değeri ekler; bu değer sayesinde imzadan imzalayanın adresi geri hesaplanabilir ([[signature-verification-ecrecover|ecrecover]]). Doğrulayan taraf `r`, `s`, mesaj özeti ve açık anahtarı birlikte bir hesaba sokar ve sonucun tutarlı olup olmadığına bakar.

Şemanın en kırılgan yeri o tek seferlik sayıdır.

## Dikkat

**Aynı tek seferlik sayıyı iki farklı mesaj için kullanmak özel anahtarı ele verir.** Bu iki imzayı eline geçiren biri, aradaki matematiksel ilişkiden anahtarı çıkarabilir. Teorik bir uyarı değil: geçmişte bir oyun konsolunun imza sistemi ve bazı Android cüzdanları, rastgelelik kaynağındaki hata yüzünden tam olarak böyle çöktü.

Savunma, o sayıyı rastgeleliğe bırakmamaktır. Yerleşik yaklaşım, sayıyı özel anahtar ile mesajdan deterministik biçimde türetmektir (RFC 6979): aynı mesaj her zaman aynı imzayı üretir ve bozuk bir rastgelelik kaynağı imzayı zehirleyemez. [[eddsa|EdDSA]] bu yaklaşımı şemanın içine gömer.

İkinci tuzak: aynı imzadan geçerli kalan ikinci bir biçim türetilebilir ([[signature-malleability|imza esnekliği]]). Üçüncüsü: geçerli bir imza, ikinci kez kullanılmasını kendi başına engellemez ([[signature-replay|imza tekrarı]]).

Ve değişmeyen kural: imza üretimini ya da doğrulamasını elle yazma, denetlenmiş bir kütüphane kullan. Bu şemaların güvenliği yılların açık incelemesinden gelir, kodun doğru görünmesinden değil.
