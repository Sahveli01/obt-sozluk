---
term: "Nothing-at-Stake Problem"
tr: ""
aliases: ["nothing at stake"]
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: ileri
short: "Çatal durumunda her dalı birden imzalamanın doğrulayıcıya hiçbir şeye mal olmaması sorunu."
related: [slashing, proof-of-stake-pos, proof-of-work-pow, fork-choice-rule, long-range-attack, validator]
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

Zincir ikiye ayrıldığında her üreticinin bir seçim yapması beklenir: hangi dalın üstüne inşa edeceksin? **Nothing-at-stake problemi**, bu seçimi yapmamanın bedava olduğu durumlara verilen addır. Bir [[validator|doğrulayıcı]] iki dalı da imzalarsa hangisi kazanırsa kazansın ödülü alır; imzalamak ona neredeyse hiçbir şeye mal olmaz.

Sonucu şudur: herkes her dalı desteklerse hiçbir dal diğerinin önüne geçemez ve [[fork-choice-rule|dal seçim kuralı]] çalışmaz hâle gelir.

Terimin yerleşmiş bir Türkçe karşılığı yoktur; İngilizce hâliyle kullanılır.

## Nasıl çalışır?

Farkı yaratan şey, üretimin neye dayandığıdır.

[[proof-of-work-pow|İş ispatında]] her blok gerçek bir kaynak harcar. İki dalı birden desteklemek elindeki gücü ikiye bölmek demektir; her iki dalda da yarı hızla ilerlersin. Seçim yapmak zorunda kalmanın sebebi ahlak değil, fizik.

[[proof-of-stake-pos|Pay ispatında]] ise blok imzalamak bir hesaplama maliyeti taşımaz. Aynı anahtar iki dalı da imzalayabilir ve imzalar birbirini yavaşlatmaz. Dolayısıyla seçimi zorunlu kılan bir engelin protokole ayrıca konması gerekir.

Konan engel, çelişkili imzayı cezalandırmaktır ([[slashing|slashing]]). "Aynı yükseklikte iki farklı bloğu imzalamak" gibi kurallar, ihlali yan yana konan iki imzayla ispatlanır hâle getirir; kanıtı ağa sunan herkes cezayı tetikleyebilir. Bedava olan eylem böylece en pahalı eyleme dönüşür.

## Dikkat

Bu bir kusur ilanı değil, çözülmüş bir tasarım sorusudur. Sorun, pay ispatının ilk tartışıldığı yıllarda ortaya atıldı ve bugünkü tasarımlar cezayı protokolün merkezine koyarak cevabını verdi. "Pay ispatında kimsenin kaybedecek bir şeyi yok" cümlesi, cezanın olmadığı varsayımsal bir tasarımı anlatır.

Cezanın işleyebilmesi için teminatın hâlâ kilitli olması gerekir. Teminatını çoktan çekmiş eski bir doğrulayıcı kümesi için aynı engel yoktur; oradan doğan ayrı sorun [[long-range-attack|long-range attack]] başlığında ele alınır.
