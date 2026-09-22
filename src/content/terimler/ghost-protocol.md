---
term: "GHOST Protocol"
tr: ""
aliases: ["ghost"]
category: konsensus
subcategory: "Mekanizmalar"
level: ileri
short: "Dal seçerken yalnızca ana zinciri değil, terk edilmiş yan dallardaki blokları da ağırlığa katan dal seçim kuralı ailesi."
related: [fork-choice-rule, longest-chain-rule, uncle-block, orphan-block, block-time, chain-reorganization-reorg]
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

GHOST, "Greedy Heaviest Observed Sub-Tree" ifadesinin kısaltmasıdır ve bir [[fork-choice-rule|dal seçim kuralıdır]]. Klasik kural yalnızca ana zincirin üstünde biriken işi sayar; GHOST, bir dalın altındaki alt ağacın tamamını — yani terk edilmiş yan blokları da — ağırlığa katar. Adı protokol gibi dursa da tek başına çalışan bir ağ protokolü değil, bir seçim kuralıdır; özel ad olduğu için Türkçeye çevrilmez.

## Nasıl çalışır?

Çözdüğü sorun blokların sıklaşmasıyla ortaya çıkar. [[block-time|Blok aralığı]] kısaldıkça iki üreticinin neredeyse aynı anda blok yayınlaması sıradanlaşır ve her çakışmada bir blok terk edilir ([[orphan-block|öksüz blok]]). Bu emek hiç sayılmazsa iki şey olur: ağın güvenliğine harcanan işin bir kısmı hesaba girmez, ve bloğunu ağa daha hızlı yayabilen büyük üreticiler daha az blok kaybederek küçüklere karşı sistematik bir avantaj kazanır.

GHOST, kökten başlayarak her adımda altındaki alt ağaç en ağır olan çocuğu seçer. Böylece yan dala düşmüş bloklar da, bağlı oldukları dalın ağırlığını artırarak hesaba katılmış olur.

Kuralın ödül tarafındaki karşılığı [[uncle-block|amca bloklardır]]: terk edilmiş bir bloğa referans veren blok ek ödül alır, referans verilen bloğun üreticisi de payının bir kısmını alır.

## Dikkat

GHOST'un tek bir hâli yoktur. Ağlar kuralın sadeleştirilmiş sürümlerini uygular; pay ispatına geçmiş ağlarda ise aynı fikir, doğrulayıcı imzalarının ağırlığıyla birleşerek çalışır. Bu yüzden "şu ağ GHOST kullanıyor" cümlesi, o ağın bugünkü dal seçim kuralını tam olarak anlatmaz — protokolün güncel belgesine bakmak gerekir.

İkincisi: GHOST çakışmayı ortadan kaldırmaz, yalnızca çakışmanın maliyetini düşürür. Kısa süreli [[chain-reorganization-reorg|yeniden düzenlemeler]] yaşanmaya devam eder.
