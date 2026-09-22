---
term: "Liquidity Provider (LP)"
tr: "Likidite sağlayıcı"
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: orta
short: "Bir havuza takasların karşılanması için varlık yatıran ve karşılığında işlem ücretlerinden pay alan kişi."
related: [liquidity-pool, lp-token, impermanent-loss, liquidity-mining, concentrated-liquidity, yield-farming]
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

Likidite sağlayıcı, bir [[liquidity-pool|havuzu]] dolduran kişidir. Havuzda varlık olmasaydı takas edecek bir şey de olmazdı; sağlayıcılar sermayelerini oraya bırakarak takasların karşı tarafı olur ve bunun karşılığında her işlemden kesilen ücretin payını alır.

Kimse tek tek fiyat vermez, emir yazmaz, ekran başında beklemez. Sermaye havuzda durur, fiyatı formül üretir.

## Nasıl çalışır?

Havuza girerken iki varlığı da havuzun o anki oranında yatırırsın. Karşılığında payını temsil eden bir [[lp-token|LP token]] alırsın.

Takaslardan kesilen ücretler havuzda birikir ve havuzu büyütür; payın sabit kaldığı için payının karşılığı büyür. Çıkarken LP token'ını geri verirsin ve **o andaki** orana göre iki varlığı çekersin.

Pek çok protokol havuzları doldurmak için ücrete ek olarak kendi token'ını dağıtır; bu ek teşvikin adı [[liquidity-mining|likidite madenciliğidir]].

## Dikkat

Çektiğin miktarlar yatırdığın miktarlar değildir. Fiyat oranı değiştiyse havuz senin adına yükselen varlığı satmış, düşeni almış olur; sonuç [[impermanent-loss|geçici kayıptır]] ve ücret geliri bunu telafi **edebilir**, garanti etmez.

Üstüne iki risk daha biner: havuz sözleşmesindeki bir açık yatırdığın her şeyi boşaltabilir; teşvik olarak aldığın token'ın fiyatı, sen elinde tutarken düşebilir. Ekranda gördüğün oranlar bu üç şeyi birden hesaba katmaz.
