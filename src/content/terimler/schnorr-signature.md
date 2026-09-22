---
term: "Schnorr Signature"
tr: ""
aliases: []
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: ileri
short: "Yapısı sade olduğu için imzaların ve açık anahtarların birleştirilmesine izin veren dijital imza şeması."
related: [digital-signature, signature-aggregation, ecdsa, bls-signature, multisig, eddsa]
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

Schnorr imzası, [[ecdsa|ECDSA]] ile aynı eliptik eğri matematiğini kullanan ama çok daha sade kurulmuş bir [[digital-signature|imza]] şemasıdır. Adını onu tanımlayan araştırmacıdan alır.

Sadelik burada estetik bir tercih değil, doğrudan yeni bir yetenek doğurur: **Schnorr imzaları birbiriyle toplanabilir.** İki kişi ayrı ayrı imza atıp bunları birleştirebilir ve sonuç, tek bir kişinin attığı imzadan ayırt edilemeyen tek bir imza olur. Aynı şey açık anahtarlar için de geçerlidir: birkaç açık anahtar birleştirilip dışarıya tek bir anahtar gibi gösterilebilir.

## Nasıl çalışır?

ECDSA'da imzanın parçaları birbirine bölme ve tersine çevirme gibi işlemlerle bağlanır; iki imzayı toplayınca ortaya geçerli bir üçüncü imza çıkmaz. Schnorr'da ilişki doğrusaldır: imzaların toplamı, anahtarların toplamına karşılık gelen geçerli bir imzadır.

Pratikte bu, birkaç imzacının imza anında birbiriyle konuşarak ortak bir imza üretmesi demektir — kimsenin özel anahtarı ortaya çıkmadan. İşlem sonunda tek bir imza taşır ([[signature-aggregation|imza birleştirme]]).

Bitcoin'e Taproot güncellemesiyle Schnorr imzaları eklendi. Sonuç şu: zincirde bir [[multisig|çoklu imza]] kurulumuyla sıradan tek imzalı bir harcama birbirine benzeyebilir. Hem yer kazanılır hem de kurulumun ayrıntısı dışarıya görünmez.

## Dikkat

Schnorr imzası ECDSA'dan önce tanımlanmıştı; yıllarca patent kapsamında kaldığı için standartlar ECDSA'ya yöneldi. Yani bugünkü yaygınlık sırası teknik bir üstünlükten değil, tarihten geliyor.

"Toplanabilir" olmak, "herkes birbirinden habersiz imzalar, sonra biri toplar" demek değildir. İmzacıların imza anında koordine olması gerekir ve bu koordinasyon protokolü kendi başına hassas bir iştir: yanlış kurulmuş bir çok taraflı imzalama akışı, aynı gizli değerin farklı oturumlarda yeniden kullanılmasına ve anahtarın sızmasına yol açabilir. Koordinasyon gerektirmeyen toplama başka bir şemanın işidir ([[bls-signature|BLS]]).
