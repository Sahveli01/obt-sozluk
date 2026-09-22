---
term: "State Channel"
tr: ""
aliases: []
category: olceklenme
subcategory: "Diğer yaklaşımlar"
level: orta
short: "Tarafların aralarındaki durumu zincir dışında imzalayarak güncellediği, yalnızca açılışı ve kapanışı zincire yazılan yapı."
related: [payment-channel, lightning-network, challenge-period, multisig, off-chain, layer-2]
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

State channel, belirli birkaç tarafın aralarındaki bir durumu — bakiyeler, bir oyunun skoru, bir sayaç — zincire hiç dokunmadan defalarca güncellemesini sağlayan yapıdır. Zincire yalnızca iki işlem gider: kanalı açan ve kanalı kapatan işlem. Arada ne olduysa taraflar arasında kalır.

Türkçede yerleşmiş bir karşılığı yok; kaynaklarda İngilizce adıyla aranır.

## Nasıl çalışır?

Taraflar önce zincirdeki bir sözleşmeye teminat kilitler. Sonra her yeni durumu birlikte imzalar; her sürüm bir sıra numarası taşır ve numara her güncellemede artar.

Kapanışta zincire en son imzalı sürüm sunulur. Sözleşme "bu gerçekten en son sürüm mü" diye bilemez, çünkü aradaki hiçbir güncellemeyi görmemiştir. Bu yüzden kapanış anında bir [[challenge-period|itiraz penceresi]] açılır: karşı taraf daha yüksek numaralı, imzalı bir sürüm gösterirse eski sürümü sunan kişinin girişimi düşer ve genellikle teminatının bir kısmını kaybeder.

Bu mekanizma yalnızca biri izlerse işler. Kanalın tarafı olarak ya itiraz penceresi boyunca çevrimiçi kalman ya da zinciri senin adına izleyip itiraz edecek bir vekile bu işi devretmen gerekir.

## Dikkat

Kanal kapalı bir kulüptür: açılışta kimlerin taraf olduğu bellidir, sonradan içeri yeni biri giremez ve dışarıdan kimse kanaldaki durumu göremez. Bu yüzden herkese açık bir piyasa ya da paylaşılan bir havuz kanalla yapılamaz.

İkinci bedel sermayedir. Kilitlenen teminat kanal açık kaldığı sürece başka hiçbir işte kullanılamaz; kanal ne kadar uzun açık kalırsa bu atıl para o kadar uzun süre bağlı kalır. En çok ödemeye uyarlanmış hâli [[payment-channel|ödeme kanalıdır]].
