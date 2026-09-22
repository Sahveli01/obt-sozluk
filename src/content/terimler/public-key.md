---
term: "Public Key"
tr: "Açık anahtar"
aliases: ["açık anahtar", "genel anahtar"]
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Özel anahtardan tek yönlü olarak hesaplanan, herkesle paylaşılabilen ve imza doğrulamaya yarayan değer."
related: [private-key, public-key-cryptography, digital-signature, wallet-address, secp256k1]
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

Açık anahtar, [[private-key|özel anahtardan]] hesaplanan ve gizli tutulması gerekmeyen eşidir. Adı yanıltmasın: bir şeyi açan anahtar değildir. Yaptığı iş, sahibinin ürettiği bir [[digital-signature|imzanın]] gerçekten o özel anahtardan çıktığını başkalarının kontrol edebilmesini sağlamaktır.

## Nasıl çalışır?

Özel anahtar rastgele seçilmiş büyük bir sayıdır. Açık anahtar bu sayıdan belirli bir hesapla üretilir — Bitcoin ve Ethereum'da [[secp256k1|secp256k1]] eğrisi üzerinde yapılan bir çarpma işlemiyle.

Bu hesabın kritik özelliği **tek yönlü** olmasıdır. Özelden açığa gitmek bir saniyeden kısa sürer; açıktan özele dönmek, bilinen yöntemlerle, kimsenin karşılayamayacağı bir maliyet gerektirir. Bu asimetri olmasa sistemin tamamı çöker.

Rollerin ayrılması da buradan gelir. **Üretmek** özel anahtarın işidir ve yalnızca sahibi yapabilir. **Doğrulamak** açık anahtarın işidir ve herkes yapabilir. Bir doğrulayıcı, imzayı kontrol ederken imzalayanın sırrını hiçbir aşamada görmez.

Açık anahtarı vermek zorunlu değildir; bazı zincirlerde imzanın kendisinden geri hesaplanabildiği için ayrıca taşınmaz.

## Dikkat

Açık anahtar ile [[wallet-address|cüzdan adresi]] aynı şey değildir. Adres çoğu zincirde açık anahtarın özetinden türetilir; yani adres açık anahtarın kısaltılmış ve kontrol basamağı eklenmiş hâlidir, kendisi değil. Bir adrese bakarak açık anahtarı bilemezsin, ama o adresten bir işlem imzalandığı anda açık anahtar ortaya çıkar.

Açık anahtarı paylaşmak bir risk değildir; zaten paylaşılmak için vardır.
