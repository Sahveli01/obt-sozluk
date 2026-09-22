---
term: "Sybil Attack"
tr: "Sybil Saldırısı"
aliases: []
category: guvenlik
subcategory: "Ekonomik ve protokol saldırıları"
level: baslangic
short: "Tek bir kişinin çok sayıda sahte kimlikle davranıp sistemde kalabalık gibi görünmesi."
related: [proof-of-stake-pos, proof-of-work-pow, eclipse-attack, airdrop-farming, retroactive-airdrop, fair-launch]
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

İnternette kimlik üretmek bedavadır: yeni bir adres oluşturmak saniye sürer ve kimse sana kim olduğunu sormaz. **Sybil saldırısı**, tek bir kişinin bu kolaylığı kullanıp yüzlerce ayrı kişiymiş gibi davranmasıdır.

Sorun, "bir kişi bir oy" diye kurulmuş her sistemin sessizce şuna güvenmesidir: bir kimlik, bir insan demektir. Kimlik ucuzsa bu varsayım çöker. Ad, çoklu kişilik anlatılan 1973 tarihli *Sybil* kitabından gelir.

## Benzetme

Bir restoranın puanını düşün. Yüz kişi gidip beş yıldız verdiyse bu bir bilgidir. Ama yüz yorumu tek bir kişi, açtığı yüz ayrı hesapla yazdıysa ortada bilgi yoktur — tek bir cümlenin yüz kez tekrarı vardır.

Ekranda ikisi aynı görünür. Farkı yaratan, arkalarında kaç kişinin durduğudur.

## Dikkat

Savunma kimlikleri saymaktan değil, kimliği **pahalılaştırmaktan** geçer. Konsensüs tasarımları doğrudan buna cevaptır: [[proof-of-work-pow|iş ispatında]] söz hakkı harcanan enerjiye, [[proof-of-stake-pos|pay ispatında]] kilitlenen teminata bağlanır. İkisinde de bin adres açmak bin kat güç vermez; ölçülen şey adres sayısı değildir. Kimliğin doğrudan ölçülemediği yerlerde bir doğrulama adımı, bir itibar geçmişi ya da gerçekten yapılması gereken bir eylem aynı işi görür.

Sorun en görünür hâlini dağıtımlarda alır: yüzlerce cüzdanla aynı işlemleri tekrarlamak ([[airdrop-farming|airdrop çiftçiliği]]) bir [[retroactive-airdrop|geriye dönük dağıtımı]] ve [[fair-launch|adil lansman]] iddiasını içeriden boşaltır.

Karıştırma: [[eclipse-attack|eclipse saldırısı]] da sahte kimlik kullanır ama amacı kalabalık yaratmak değil, tek bir node'u yalnızlaştırmaktır.
