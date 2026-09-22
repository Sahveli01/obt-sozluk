---
term: "Money Market"
tr: "Para piyasası"
aliases: []
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Borç veren ile alanı tek tek eşleştirmeyip ortak havuzda buluşturan, faizi havuzun kullanım oranından hesaplayan model."
related: [lending-protocol, utilization-rate, interest-rate-model, liquidity-pool, borrowing-defi, apy]
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

Money market, [[lending-protocol|borç verme protokollerinin]] en yaygın kurulumudur: borç veren ile borç alan birbirini hiç görmez, ikisi de aynı havuza bağlanır. Ortada eşleşme, pazarlık ve vade yoktur; bir arz havuzu ve o havuzun ne kadarının dışarıda olduğunu gösteren bir sayı vardır.

Bu model borç vermeyi bir sözleşme yapmaktan çıkarıp bir bakiye tutmaya çevirir. Varlığını havuza koyarsın, karşılığında havuzdaki payını temsil eden bir bakiye alırsın ve o bakiye zamanla büyür.

## Nasıl çalışır?

Havuzun durumu tek bir sayıyla özetlenir: [[utilization-rate|kullanım oranı]], yani arzın ne kadarının borç olarak dışarıda olduğu. [[interest-rate-model|Faiz modeli]] bu oranı girdi alır ve hem borç faizini hem mevduat faizini ondan hesaplar.

Döngü kendi kendini dengeler. Borç talebi arttıkça kullanım oranı yükselir, faiz yükselir; yüksek faiz bir yandan yeni arzı havuza çeker, bir yandan borçluyu pozisyonunu kapatmaya iter. İkisi de oranı aşağı çeker.

Borç faizi her zaman mevduat faizinden yüksektir. Aradaki fark bir kâr marjı değil, bir tampondur: bir kısmı rezerv olarak ayrılır ve zarar anında ilk oradan karşılanır.

## Dikkat

Ad yanıltıcıdır. Geleneksel finansta "para piyasası" kısa vadeli borçlanma araçlarının alınıp satıldığı piyasayı anlatır; orada her enstrümanın bir vadesi vardır. DeFi'deki para piyasasında vade yoktur: borcun sen kapatana ya da [[liquidation|tasfiye]] edilene kadar açık kalır, faiz de bu süre boyunca her blokta işlemeye devam eder.
