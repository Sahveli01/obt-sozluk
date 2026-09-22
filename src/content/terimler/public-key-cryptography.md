---
term: "Public-Key Cryptography"
tr: "Açık anahtarlı kriptografi"
aliases: ["asimetrik şifreleme", "açık anahtarlı kriptografi"]
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Biri herkese açık biri gizli olan iki anahtarın birlikte çalıştığı, önceden sır paylaşmayı gerektirmeyen kriptografi ailesi."
related: [public-key, private-key, digital-signature, symmetric-encryption, elliptic-curve-cryptography-ecc]
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

Açık anahtarlı kriptografide anahtar tektir ama iki parçaya ayrılmıştır. [[private-key|Özel anahtar]] yalnızca sahibinde kalır; [[public-key|açık anahtar]] herkese verilebilir. İkisi matematiksel olarak eşleşir: biriyle yapılanı yalnızca diğeri tamamlar.

Çözdüğü sorun şudur: daha önce hiç karşılaşmamış, aralarında gizli bir kanal bulunmayan iki taraf güvenli iletişim kurabilir. [[symmetric-encryption|Simetrik şifrelemenin]] takıldığı yer tam olarak burasıydı.

## Benzetme

Açık bir asma kilit dağıtmak gibi. Kilidi açık hâlde herkese verirsin; isteyen kutusuna koyar, kapatır ve sana yollar. Kilitlemek için anahtar gerekmez, kapağı bastırmak yeter. Açan anahtar ise hiç dolaşıma çıkmamıştır, baştan beri sendedir. Kilidi eline alan biri onu inceleyerek anahtarı yapamaz.

## Nasıl çalışır?

İki yönde kullanılır ve bu iki yön karıştırılır.

**Şifreleme yönü.** Gönderen, alıcının açık anahtarıyla veriyi kapatır. Yalnızca özel anahtarın sahibi açabilir.

**İmza yönü.** Sahibi, özel anahtarıyla bir mesaja [[digital-signature|imza]] üretir. Açık anahtarı olan herkes imzanın gerçekten o anahtardan çıktığını doğrular — üstelik özel anahtar hiç ortaya çıkmadan.

Güvenlik, açık anahtardan özel anahtara geri gitmenin karşılanamayacak kadar pahalı olduğu varsayımına dayanır. Blockchain'de bu varsayım çoğunlukla [[elliptic-curve-cryptography-ecc|eliptik eğri]] problemlerine bağlanır.

## Dikkat

Blockchain'de kullanılan yön neredeyse her zaman imza yönüdür, şifreleme yönü değil. Zincire yazdığın veri şifreli değildir; açık anahtarlı kriptografi orada gizliliği değil, işlemi gönderenin gerçekten o hesabın sahibi olduğunu sağlar.
