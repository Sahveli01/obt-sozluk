---
term: "Attestation"
tr: ""
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: orta
short: "Bir doğrulayıcının, gördüğü blok ve zincirin başı hakkındaki görüşünü imzalayarak ağa bildirmesi."
related: [validator, committee, proposer, finality, signature-aggregation, slashing]
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

Attestation, bir doğrulayıcının "ben zinciri şu an böyle görüyorum" anlamına gelen imzalı beyanıdır. İçinde o tur önerilen bloğa dair görüşü ve zincirin başının neresi olduğuna dair kanaati bulunur. Blok önermek bir turda yalnızca bir kişinin işidir; oy vermek ise doğrulayıcıların asıl ve sürekli işidir.

Türkçede yerleşik bir karşılığı yok; "doğrulama oyu" diye anlatılır ama terim İngilizce kullanılır.

## Nasıl çalışır?

Her doğrulayıcıya, atandığı [[committee|komitede]] hangi tur için oy vereceği önceden bildirilir. Sırası gelince [[proposer|önerilen]] bloğu kurallara göre denetler, geçerli buluyorsa ona işaret eden bir oy imzalar ve ağa yayar.

Bu oylar iki işi birden görür. Kısa vadede [[fork-choice-rule|dal seçim kuralı]] hangi dalın izleneceğini oyların ağırlığına bakarak belirler. Uzun vadede aynı oylar birikerek [[finality|kesinliğe]] giden eşiği doldurur.

Aynı tur için binlerce neredeyse özdeş oy dolaşacağı için imzalar tek tek taşınmaz; [[signature-aggregation|birleştirilerek]] tek bir imzaya indirilir. Doğrulama maliyetinin doğrulayıcı sayısıyla birlikte patlamamasının sebebi budur.

## Dikkat

Attestation kullanıcı açısından bir onay belgesi değildir. Tek bir doğrulayıcının o andaki görüşünü anlatır ve tek başına hiçbir şeyi kesinleştirmez; anlamı ancak yeterli ağırlıkta oyla birleştiğinde doğar.

Doğrulayıcı tarafında ise iki hata birbirine hiç benzemez. Geç kalan ya da hiç gönderilmeyen oy yalnızca ödülü eksiltir. Aynı tur için birbiriyle çelişen iki oy imzalamak ise kanıtlanabilir bir ihlaldir ve [[slashing|kesintiye]] yol açar.
