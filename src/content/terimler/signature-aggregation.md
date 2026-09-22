---
term: "Signature Aggregation"
tr: ""
aliases: []
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: orta
short: "Çok sayıda imzanın, ayrı ayrı doğrulanmak yerine tek bir imza gibi doğrulanabilecek biçimde birleştirilmesi."
related: [bls-signature, schnorr-signature, digital-signature, attestation, multisig, threshold-signature-tss]
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

İmza birleştirme, aynı mesajı imzalayan çok sayıda imzanın tek bir imzaya indirilmesidir. Doğrulayan taraf o tek imzayı ve imzacıların açık anahtar listesini alır, tek bir kontrol yapar ve "bu listedekiler gerçekten imzaladı" sonucuna varır.

İki kazanç vardır: **yer** ve **zaman**. Bin imza yerine bir imza taşınır; bin doğrulama yerine bir doğrulama yapılır.

Türkçede yerleşik bir karşılığı yok; anlatırken "imza birleştirme" denir.

## Nasıl çalışır?

Her şema buna izin vermez. Birleştirilebilmesi için imzaların birbiriyle toplanabilir bir yapıda olması gerekir, bu yüzden pratikte iki isim geçer.

[[schnorr-signature|Schnorr]] imzalarında imzacılar imza anında birbiriyle koordine olur. Sonuç tek kişinin attığı imzadan ayırt edilemez; kaç kişi olduğu bile dışarıya görünmez.

[[bls-signature|BLS]] imzalarında koordinasyon gerekmez. Herkes ayrı ayrı imzalar, üçüncü bir taraf imzaları sonradan toplar. Binlerce imzacılı sistemlerde bu yüzden tercih edilir.

## Örnek

Bir [[proof-of-stake-pos|proof of stake]] ağında her turda binlerce validator aynı blok hakkında aynı görüşü imzalar ([[attestation|attestation]]). Bu imzalar tek tek taşınsaydı blok verisinin büyük kısmı imzalardan ibaret olurdu. Birleştirildiğinde geriye tek bir imza ve kimlerin imzaladığını gösteren kısa bir işaret listesi kalır.

## Dikkat

Birleştirme imzacıların sayısını ya da kim olduklarını gizlemez; o bilgi ayrıca taşınır. Gizlenen tek şey imzaların kendisidir. Schnorr'daki anahtar birleştirme ayrı bir konudur: orada dışarıya gerçekten tek bir anahtar görünür.

Ayrıca birleştirilmiş imza "hepsi imzaladı" der, "hepsi haklı" demez. Kaç imzanın yeterli sayılacağı, hangi mesajın imzalandığı ve imzacıların kim olduğu protokolün kurallarına kalmıştır.

[[multisig|Çoklu imzayla]] karıştırma: orada her imza zincire ayrı ayrı yazılır ve kural sözleşmenin içindedir. Birleştirme ise imzaların taşınma ve doğrulanma biçimiyle ilgilidir; kaç kişinin imzalaması gerektiğine karar veren bir mekanizma değildir ([[threshold-signature-tss|eşik imza]] o işi yapar).
