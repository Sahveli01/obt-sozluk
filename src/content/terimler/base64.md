---
term: "Base64"
tr: ""
aliases: []
category: kriptografi
subcategory: "Temeller"
level: orta
short: "İkili veriyi 64 karakterlik bir alfabeyle metne çeviren, yalnızca metin taşıyabilen kanallar için kullanılan kodlama."
related: [encoding, hexadecimal, base58, byte, json]
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

Base64, herhangi bir [[byte|bayt]] dizisini harf, rakam ve iki işaretten oluşan 64 karakterlik bir alfabeyle yazan [[encoding|kodlamadır]]. İçeriği değiştirmez, gizlemez; yalnızca metin olarak taşınabilir hâle getirir.

Neden gerektiğini eski bir sorundan anlarsın: e-posta gövdesi, [[json|JSON]] alanları ve bağlantı adresleri metin taşımak üzere tasarlanmıştır. Bir resmin baytlarını oraya olduğu gibi koyarsan bazı baytlar yolda bozulur ya da kanalı karıştırır. Base64 bu baytları "zararsız" karakterlere çevirir.

## Nasıl çalışır?

Veri üçer bayt alınır ve dörder karakter olarak yazılır. Üç bayt 24 bit eder; bunlar altışar bitlik dört parçaya bölünür ve her parça alfabedeki bir karaktere karşılık gelir.

Bunun iki görünür sonucu vardır. Birincisi, metin orijinalinden yaklaşık üçte bir daha uzundur. İkincisi, veri üçe tam bölünmediğinde sonuna `=` işareti eklenir; bir dizenin sonundaki bir iki eşittir işareti çoğu zaman onun Base64 olduğunu ele verir.

## Örnek

`Merhaba` kelimesi Base64 ile `TWVyaGFiYQ==` olarak yazılır. Bu dizeyi bir çeviriciye yapıştıran herkes kelimeyi geri okur — hiçbir anahtar, parola ya da izin gerekmeden.

## Dikkat

"Base64 ile şifreledim" cümlesi yanlıştır ve pratikte tehlikelidir. Base64 anahtarsızdır; kuralı standarttır, araçlar her yerde vardır ve geri çevirmek saniyeler sürer.

Bir API anahtarını, parolayı ya da kişisel veriyi Base64'e çevirip veritabanına ya da koda yazmak veriyi korumaz. Korunması gereken veri şifrelenir ([[encryption|şifreleme]]); Base64 en fazla şifrelenmiş sonucu taşımak için kullanılır.

Adreslerde ise [[base58|Base58]] tercih edilir, çünkü Base64'ün alfabesinde birbirine benzeyen karakterler vardır ve [[hexadecimal|onaltılık]] yazımdan farklı olarak elle okunmaya elverişli değildir.
