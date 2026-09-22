---
term: "Initial DEX Offering (IDO)"
tr: ""
aliases: ["ido"]
category: tokenlar
subcategory: "Dağıtım ve lansman"
level: orta
short: "Token satışının merkeziyetsiz bir borsadaki likidite havuzu üzerinden, herkese açık biçimde yapılması."
related: [initial-coin-offering-ico, initial-exchange-offering-ieo, decentralized-exchange-dex, liquidity-pool, launchpad, slippage]
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

IDO'da satış projenin sitesinde değil, bir [[decentralized-exchange-dex|merkeziyetsiz borsada]] yapılır. Ekip token'ı bir [[liquidity-pool|likidite havuzuna]] koyar, havuzu açar ve alım satım o havuzdan yürür. Satışın açıldığı an ile ilk işlem günü çoğu zaman aynıdır.

Üç modelin ayrıldığı yer satışın nerede durduğudur: doğrudan projede ([[initial-coin-offering-ico|ICO]]), zincirdeki bir havuzda (burada olduğu gibi) ya da bir şirketin platformunda ([[initial-exchange-offering-ieo|IEO]]). Üçünün de kısaltması Türkçeye çevrilmeden kullanılıyor.

## Nasıl çalışır?

Ekip token'ın bir bölümünü ve karşılık olarak bir miktar başka varlığı havuza yatırır. Fiyat ilan edilen bir liste değil, havuzdaki oranın sonucudur: alım geldikçe token'ın havuzdaki payı azalır, fiyatı yükselir. Kimse kuyrukta beklemez; işlemini ağa önce ulaştıran önce alır.

Buradan iki tanıdık sonuç çıkar. Aynı anda çok kişi alırsa gerçekleşen fiyat beklenenden uzaklaşır ([[slippage|kayma]]). Sıralamayı ağa erişim hızı belirlediği için de hazırlıklı botlar ilk işlemleri kapmaya çalışır ([[front-running|önden koşma]]).

Bunu yumuşatmak için bazı satışlar havuzu doğrudan açmak yerine sabit fiyatlı bir satış sözleşmesi ya da kota dağıtan bir [[launchpad|launchpad]] kullanır.

## Dikkat

"İzin gerektirmemek" bir kalite ölçüsü değildir. Havuz açmak herkesin yapabileceği bir işlem olduğu için aynı ada ve simgeye sahip sahte havuzlar da açılabilir; alacağın token'ın sözleşme adresi listeden değil projenin kendi kanalından doğrulanır.

Ayrıca havuza konan likiditenin kilitli olup olmadığı ayrı bir sorudur. Kilitli değilse ekip likiditeyi istediği an çekebilir ve elinde satılamayan bir token kalır ([[rug-pull|rug pull]]).
