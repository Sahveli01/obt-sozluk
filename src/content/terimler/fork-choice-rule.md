---
term: "Fork Choice Rule"
tr: "Dal seçim kuralı"
aliases: ["dal seçim kuralı", "fork tercih kuralı"]
category: konsensus
subcategory: "Mekanizmalar"
level: orta
short: "Bir node'un, aynı anda var olan birden fazla geçerli zincir ucundan hangisini takip edeceğini belirleyen kural."
related: [longest-chain-rule, ghost-protocol, fork-blockchain, chain-reorganization-reorg, consensus-mechanism, finality]
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

Dağıtık bir ağda aynı anda birden fazla geçerli zincir ucu bulunabilir; mesajlar her düğüme aynı sırayla ulaşmadığı için bu istisna değil, sıradan bir durumdur. **Dal seçim kuralı**, bir [[node|düğümün]] hangi ucu "zincirin şu anki hâli" sayacağını belirleyen kuraldır.

Kritik özelliği, herkeste aynı olmasıdır. Aynı verileri gören iki düğüm aynı sonuca varmak zorundadır; yoksa ağ ortak bir duruma yakınsayamaz.

Bunu geçerlilik kuralından ayırmak gerekir. Geçerlilik kuralı "bu blok kurallara uygun mu" sorusunu cevaplar ve cevap tek bir blok için tek başına verilebilir. Dal seçim kuralı ise "iki geçerli seçenekten hangisi" sorusunu cevaplar.

## Nasıl çalışır?

Kural her zaman bir ağırlık ölçer ve ağırlığı fazla olan dalı seçer. Ölçünün ne olduğu ağdan ağa değişir: biriken iş ([[longest-chain-rule|en uzun zincir kuralı]]), yan dallardaki blokları da sayan bir ölçü ([[ghost-protocol|GHOST]]) ya da doğrulayıcıların blok lehine attığı imzaların toplam teminat ağırlığı.

Pay ispatı kullanan ağlarda bu ölçü genellikle [[attestation|attestation]] toplamıdır ve kesinleşmiş bloklar tartışmanın büsbütün dışına çıkar: kural yalnızca son kesinleşen noktadan sonrasına karar verir, öncesine dokunmaz.

Bir düğüm daha ağır bir dal duyduğunda kendi ucundaki blokları geri alır ve yeni dalı benimser ([[chain-reorganization-reorg|reorg]]).

## Dikkat

Buradaki "fork" kelimesi kural değişikliğini değil, geçici dallanmayı anlatır; [[hard-fork|hard fork]] ile ilgisi yoktur.

Bir de şu: kural kendiliğinden kesinlik vermez. Düğüm bugün bir dalı seçtiyse, yarın daha ağır bir dal duyduğunda seçimini değiştirir. "Şu an seçilmiş olmak" ile "geri alınamaz olmak" ayrı şeylerdir; ikincisinin adı [[finality|kesinliktir]] ve onu dal seçim kuralı değil, ağın kesinlik kuralları belirler.
