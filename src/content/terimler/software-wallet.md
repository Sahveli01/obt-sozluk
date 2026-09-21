---
term: "Software Wallet"
tr: "Yazılım cüzdanı"
aliases: ["yazilim cuzdani"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: orta
short: "Anahtarları telefon veya bilgisayar gibi genel amaçlı bir cihazda, şifreli olarak saklayan cüzdan uygulaması."
related: [hot-wallet, browser-extension-wallet, keystore-file, private-key, hardware-wallet]
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

Yazılım cüzdanı, anahtarları özel bir cihazda değil; telefon, bilgisayar ya da tarayıcı gibi genel amaçlı bir cihazda tutan cüzdandır. Masaüstü uygulamaları, mobil uygulamalar ve [[browser-extension-wallet|tarayıcı eklentisi cüzdanları]] bu başlığın altına girer. Kurulumu ücretsiz ve hızlı olduğu için çoğu kişinin ilk cüzdanı bir yazılım cüzdanıdır.

## Benzetme

Telefonundaki fotoğraflar gibi: onları koruyan şey albüm uygulamasından çok telefonun kilidi ve telefona ne yüklediğindir.

## Nasıl çalışır?

Uygulama [[private-key|özel anahtarı]] diske açık metin olarak yazmaz; belirlediğin paroladan türetilen bir anahtarla şifreler. Ethereum tarafında bu şifreli dosyanın adı [[keystore-file|keystore dosyasıdır]]. İmza gerektiğinde parolayı ya da cihazın biyometrik kilidini sorar, anahtarı yalnızca bellekte çözer ve imzayı üretir.

Buradan çıkan sonuç şudur: yazılım cüzdanının güvenliği, üzerinde çalıştığı cihazın güvenliğinden daha iyi olamaz. İşletim sistemi güncel değilse, cihaza zararlı bir yazılım bulaştıysa ya da parola zayıfsa şifreli dosya da risk altındadır.

## Dikkat

"Yazılım cüzdanı" ile [[hot-wallet|sıcak cüzdan]] eş anlamlı değildir: hiç internete bağlanmayan bir bilgisayarda çalışan bir yazılım cüzdanı soğuk kullanılabilir. Pratikte çoğu kurulum sıcaktır, ama ayrımı yapan şey yazılımın kendisi değil, çalıştığı ortamdır.

Parolayı unutmak şifreli dosyayı kullanılamaz hâle getirir; tek geri dönüş [[seed-phrase|kurtarma ifadesidir]]. Uygulamayı yalnızca resmî kaynağından kurmak, bu türde en sık rastlanan sahte kopya riskini azaltır.
