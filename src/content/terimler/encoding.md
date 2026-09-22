---
term: "Encoding"
tr: "Kodlama"
aliases: ["kodlama"]
category: kriptografi
subcategory: "Temeller"
level: baslangic
short: "Veriyi içeriğini gizlemeden başka bir yazım biçimine çevirme; kuralı bilen herkes geri çevirebilir."
related: [base64, hexadecimal, base58, encryption, byte]
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

Kodlama, aynı bilgiyi başka bir yazım biçiminde göstermektir. İçerik değişmez, gizlenmez, korunmaz — yalnızca farklı karakterlerle yazılır.

Neden gerek duyulur? Çünkü her kanal her şeyi taşıyamaz. Bir [[byte|bayt]] dizisini ekrana basamazsın, e-postanın gövdesine koyamazsın, bir adres çubuğuna sığdıramazsın. Kodlama, veriyi o kanalın kabul ettiği karakterlere çevirir: [[hexadecimal|onaltılık]], [[base64|Base64]] ve [[base58|Base58]] hep bu işi yapar.

## Benzetme

Mors alfabesi gibi. "SOS" mesajını nokta ve çizgiyle göndermek onu gizlemez; tablo herkeste vardır, duyan herkes okur. Mors'un işi mesajı saklamak değil, telgraf telinden geçebilecek hâle getirmektir.

## Dikkat

Kodlama şifreleme değildir. Bu, yeni başlayanların en sık yaptığı karıştırmadır ve pahalıya mal olur.

Farkı tek cümlede ayırt edebilirsin: kodlamanın anahtarı yoktur. Kuralı herkes bilir, dolayısıyla geri çevirmeyi de herkes yapar. [[encryption|Şifreleme]] ise bir anahtar ister ve anahtarı olmayan için sonuç kullanılamaz kalır.

Bu yüzden bir parolayı, özel anahtarı ya da kişisel veriyi Base64'e çevirip "gizledim" saymak, üstüne başka bir yazıyla yazıp saklandığını sanmaktır.
