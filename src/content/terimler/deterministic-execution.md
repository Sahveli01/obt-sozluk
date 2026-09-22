---
term: "Deterministic Execution"
tr: "Deterministik yürütme"
aliases: []
category: akilli-sozlesmeler
subcategory: "Temeller"
level: orta
short: "Aynı girdi ve aynı zincir durumu verildiğinde, kodu çalıştıran her düğümün istisnasız aynı sonuca varması."
related: [virtual-machine-blockchain, consensus-mechanism, randomness, block-timestamp, client-diversity, turing-completeness]
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

Deterministik yürütme, bir kodun aynı girdiyle her zaman ve her yerde aynı sonucu üretmesidir. Blockchain için bu bir tercih değil, var olma şartıdır: ağdaki her düğüm aynı işlemi kendi başına çalıştırır ve çıkan sonuçlar birbirini tutmazsa üzerinde anlaşılacak tek bir zincir kalmaz. Farklı ekiplerin farklı dillerde yazdığı istemciler bile ([[client-diversity|istemci çeşitliliği]]) aynı baytlara aynı cevabı vermek zorundadır.

## Benzetme

Paketin üstündeki hazırlama talimatı gibi. "Bir litre suda dört dakika kaynat" yazıyorsa sonuç kimin elinde olursa olsun aynıdır: süre de, miktar da yazılıdır. Talimatta "göz kararı tuz at, kıvamına bakarak indir" yazsaydı iki ayrı yerden iki ayrı sonuç çıkardı. Sözleşme ortamı, yalnızca birinci türden talimatların yazılabildiği bir yerdir.

## Nasıl çalışır?

Determinizm, ortamın yeteneklerinin bilerek kısılmasıyla sağlanır. Sözleşme kodu:

- çalıştığı makinenin saatine bakamaz; yalnızca bloğun taşıdığı [[block-timestamp|zaman damgasını]] görür,
- ağa istek atamaz, dosya okuyamaz,
- kendi başına [[randomness|rastgele]] sayı üretemez,
- düğümden düğüme farklı yuvarlanabilen [[floating-point|kayan nokta]] aritmetiği yerine tam sayılarla çalışır.

İşlemlerin hangi sırayla yürüyeceği de bloğun içinde sabittir. Sıra değişirse sonuç da değişeceği için bu sıralama, ağın üzerinde anlaştığı verinin parçasıdır.

## Dikkat

Determinizm "sonuç tahmin edilebilir" demek değildir. Zincirde rastgelelik kurmak mümkündür; yalnızca rastgeleliğin kaynağı dışarıdan gelmek ve herkesçe doğrulanabilmek zorundadır.

Bir de [[turing-completeness|Turing tamlığıyla]] karıştırma. O, ortamda ne kadar şeyin hesaplanabildiğiyle ilgilidir; determinizm ise aynı girdide herkesin aynı sonuca varıp varmadığıyla. İki ayrı soru, iki ayrı cevap.
