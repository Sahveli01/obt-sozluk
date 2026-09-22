---
term: "Payment Channel"
tr: "Ödeme kanalı"
aliases: []
category: olceklenme
subcategory: "Diğer yaklaşımlar"
level: orta
short: "İki tarafın aralarındaki bakiye dağılımını zincir dışında imzalayarak güncellediği, yalnızca ödeme için kurulan kanal."
related: [state-channel, lightning-network, challenge-period, multisig, off-chain]
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

Payment channel, iki tarafın birbirine defalarca ödeme yapabilmesi için kurulan bir [[state-channel|durum kanalıdır]]. Kanalda güncellenen tek şey vardır: kilitli paranın taraflar arasındaki dağılımı. Zincire yalnızca kanalı açan ve kapatan işlem yazılır; arada yüzlerce ödeme olabilir.

## Benzetme

Bardaki açık hesap gibi. Her içecekte kasaya gidip ayrı ayrı ödeme yapmazsın; garson adisyona yazar, sen kalkarken bir kez ödersin. Adisyonun her satırı iki tarafın da kabul ettiği yeni bir toplamdır. Kalkarken dikkat edeceğin tek şey, ödemeye esas alınan kâğıdın gerçekten en son hâli olmasıdır.

## Nasıl çalışır?

İki taraf ortak bir sözleşmeye para kilitler; diyelim ki biri tamamını koydu. Her ödemede yeni dağılımı ikisi birlikte imzalar: önce "90'a 10", sonra "80'e 20"... Her sürümün sıra numarası bir öncekinden büyüktür.

Kapanışta zincire son imzalı dağılım sunulur ve sözleşme parayı ona göre dağıtır. Karşı taraf işine gelen eski bir dağılımı sunmayı denerse, [[challenge-period|itiraz penceresi]] içinde daha yeni ve imzalı sürümü göstererek bunu bozarsın — bunun için pencere boyunca zinciri izliyor olman ya da izlemeyi bir vekile bırakman gerekir.

## Dikkat

Kanalın kapasitesi yönlüdür. Kilitli paranın senin tarafındaki kısmı bitince, kanal açık olsa bile o yöne ödeme yapamazsın; karşı taraftan sana doğru bir akış olması ya da kanalın yeniden kurulması gerekir.

İkincisi maliyettir: kilitlenen para kanal boyunca başka hiçbir yerde kullanılamaz. Bu yüzden ödeme kanalları, seyrek ve büyük transferler için değil, aynı taraflar arasındaki sık ve küçük ödemeler için anlamlıdır.
