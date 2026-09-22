---
term: "Yield Tokenization"
tr: ""
aliases: []
category: defi
subcategory: "Getiri"
level: ileri
short: "Getiri üreten bir varlığın anapara hakkı ile vadeye kadarki getiri hakkının ayrı token'lara bölünmesi."
related: [liquid-staking-token-lst, vault, derivatives, real-yield, apy]
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

Yield tokenization, getiri üreten bir varlığı iki ayrı token'a bölmektir: biri vade sonunda anaparayı geri alma hakkını, diğeri vadeye kadar üretilecek getiriyi temsil eder. Yaygın adları principal token (PT) ve yield token (YT)'dir ve ikisi ayrı ayrı alınıp satılabilir.

Böylece "varlığa sahip olmak" ile "o varlığın getirisine sahip olmak" ilk kez birbirinden ayrı iki şey hâline gelir. Türkçede yerleşik bir karşılığı yok.

## Benzetme

Bir meyve ağacının kendisiyle o mevsimin ürününü ayrı ayrı satmaya benzer. Ağacı alan kişi bahçedeki ağaca sahip olur. Ürünü alan kişi yalnızca bu yaz toplanacak meyveyi alır: yaz bittiğinde elinde hiçbir şey kalmaz, ağaç ise yerinde durur. Ürünü alan kişi parasını verirken ağacın o yaz ne kadar vereceğine dair bir tahminde bulunmuştur — az verirse verdiği parayı çıkaramaz, çok verirse fazlası onun olur.

## Nasıl çalışır?

Getiri üreten bir varlık — bir [[liquid-staking-token-lst|LST]], bir [[vault|kasa]] payı ya da faiz üreten bir mevduat pozisyonu — protokole yatırılır ve karşılığında aynı vadeye sahip iki token basılır. Vade geldiğinde PT sahibi dayanak varlığın anaparasını geri alır, YT sahibi ise vade boyunca biriken getiriyi toplamış olur.

Fiyatlar bu yapıdan çıkar. PT vadeden önce dayanağının altında işlem görür; aradaki fark, vadeye kadar beklemenin karşılığıdır. YT'nin fiyatı ise piyasanın vade boyunca ne kadar getiri beklediğine bağlıdır — yani değişken bir [[apy]] beklentisinin bugünden fiyatlanmış hâlidir. Vadesi ve dayanağı farklı olan PT'ler birbirinin yerine geçmez.

## Dikkat

YT'nin değeri vade sonunda sıfıra gider. Bu bir arıza ya da saldırı değil, tasarımın kendisidir: YT yalnızca vadeye kadarki getiriyi temsil eder, vade dolduğunda temsil edecek bir şey kalmaz. Fiyat grafiğine bakıp "sürekli düşüyor" diyen kişi yanlış yere bakıyordur; YT'yi tutanın eline geçen şey, o düşüş sürerken toplanan getiridir.

PT tarafı da "garantili anapara" demek değildir. Vade sonunda anaparayı geri almak, dayanak varlığın hâlâ ayakta olmasına bağlıdır: dayanak bir LST ise kesilen ceza, bir kasa payı ise stratejinin zararı doğrudan anaparayı azaltır. Vadeden önce çıkmak istersen aradaki iskontoyu da piyasa belirler, protokol değil.
