---
term: "Base58"
tr: ""
aliases: []
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Karıştırılması kolay karakterlerin çıkarıldığı, elle okunan ve kopyalanan tanımlayıcılar için tasarlanmış metin kodlaması."
related: [encoding, checksum, wallet-address, base64, bitcoin]
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

Base58, ikili veriyi 58 karakterlik bir alfabeyle yazan bir [[encoding|kodlamadır]]. [[bitcoin|Bitcoin]] adreslerinde kullanılmak üzere tasarlanmıştır ve tasarım amacı teknik değil, tamamen insanidir: bu dizeleri insanlar okuyor, elle yazıyor, telefonda söylüyor ve kâğıda not ediyor.

## Nasıl çalışır?

[[base64|Base64]]'ün altmış dört karakterlik alfabesinden altı karakter çıkarılır.

Dördü **birbirine benzediği için** atılır: `0` (sıfır) ile `O` (büyük o), `I` (büyük i) ile `l` (küçük L). Çoğu yazı tipinde bu çiftler neredeyse aynı görünür; bir adresi elle kopyalarken yapılan hataların önemli bir kısmı tam olarak buradan çıkar.

İkisi de **metnin içinde sorun çıkardığı için** atılır: `+` ve `/`. Bu karakterler bağlantı adreslerinde ve dosya isimlerinde özel anlam taşır, çift tıklamayla seçilmeyi de bozar.

Geriye kalan 58 karakter, Base58 alfabesidir.

Adreslerde tek başına kullanılmaz. Veriye önce bir [[checksum|sağlama]] eklenir, sonra tamamı Base58 ile yazılır; bu birleşime Base58Check denir. Böylece yanlış yazılan bir [[wallet-address|adres]] gönderim yapılmadan önce reddedilir. İkisi birlikte çalışır: alfabe hatanın olma ihtimalini düşürür, sağlama olanı yakalar.

## Dikkat

Base58 bir kodlamadır, şifreleme değildir. Anahtarı yoktur; kuralı bilen herkes geri çevirir ve zaten çevirmesi beklenir.

Tek tip de değildir. Farklı zincirler ve farklı veri türleri aynı fikri farklı ön eklerle kullanır; bir zincirin Base58 adresini başka bir zincire yapıştırmak, karakterler tanıdık göründüğü için doğruymuş gibi durabilir.
