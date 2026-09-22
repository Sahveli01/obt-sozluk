---
term: "Delegator"
tr: ""
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: orta
short: "Kendi doğrulayıcısını çalıştırmadan stake'ini seçtiği bir doğrulayıcıya yönlendiren ve ödüllerden pay alan katılımcı."
related: [validator, staking, delegated-proof-of-stake-dpos, slashing, staking-pool, unbonding-period]
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

Delegator, stake'ini kendisi işletmeyen katılımcıdır. Varlığını seçtiği bir [[validator|doğrulayıcıya]] yönlendirir; o doğrulayıcının ağdaki ağırlığı bu miktar kadar artar ve kazanılan [[staking-rewards|ödüllerden]] payını alır. Delegasyonu protokolün kendi kuralı hâline getiren ağlar da vardır ([[delegated-proof-of-stake-dpos|DPoS]] ailesi).

Türkçede yerleşik bir karşılığı yok; "delege eden" demek anlaşılır olmadığı için terim olduğu gibi kullanılıyor.

## Nasıl çalışır?

Devredilen şey dar ve nettir. Varlığın mülkiyeti sende kalır: doğrulayıcı onu harcayamaz, başka bir adrese gönderemez. Devredilen şey o varlığın ağdaki oy ağırlığı ve onu çalıştırma işidir — donanım, kesintisiz çalışma, güncelleme ve anahtar bakımı artık senin derdin değildir.

Doğrulayıcı kazandığı ödülden kendi payını ayırır, kalanı delegatörlere dağıtır. Başka bir doğrulayıcıya geçmek ya da tamamen çıkmak mümkündür, ama bu çoğu ağda bir [[unbonding-period|bekleme süresiyle]] birlikte gelir.

## Dikkat

Mülkiyetin sende kalması, riskin de sende kalmadığı anlamına gelmez. Doğrulayıcı çevrimdışı kalırsa ödülün düşer; kanıtlanabilir bir ihlal yaparsa birçok ağda [[slashing|kesinti]] delege edilmiş stake'e de uygulanır. Kimi seçtiğin bu yüzden bir tercih değil, bir risk kararıdır. Sorulacak soru "hangisi daha çok veriyor" değil, "kaç zamandır kesintisiz çalışıyor, komisyonunu nasıl değiştiriyor" olmalıdır.

İkinci nokta ağ ölçeğindedir. Herkes listede en üstte duran ya da en yüksek getiriyi gösteren doğrulayıcıyı seçtiğinde stake az sayıda elde toplanır; delegasyonun kolaylığı, farkında olmadan bir yoğunlaşma yaratır.
