---
term: "Uniswap"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "Emir defteri yerine likidite havuzları ve sabit çarpım kuralıyla çalışan, otomatik piyasa yapıcı fikrini yaygınlaştıran takas protokolü."
related: [automated-market-maker-amm, constant-product-formula, liquidity-pool, impermanent-loss, concentrated-liquidity, decentralized-exchange-dex]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Uniswap, [[ethereum|Ethereum]] üzerinde çalışan bir takas protokolüdür ve [[automated-market-maker-amm|otomatik piyasa yapıcı]] fikrini yaygınlaştıran tasarımdır. Ortada bir [[order-book|emir defteri]] yoktur: alıcıyla satıcı eşleştirilmez, takasını iki varlığın durduğu bir havuzla yaparsın.

## Nasıl çalışır?

İlk tasarımın kuralı tek satırdır: havuzdaki iki varlığın miktarlarının çarpımı sabit kalır ([[constant-product-formula|sabit çarpım formülü]]). Havuzdan bir varlığı çekip diğerini koyduğunda oran değişir, fiyat da bu oranla birlikte kayar. Fiyat protokol tarafından ilan edilmez; havuzun bileşiminden okunur.

Havuzları [[liquidity-provider-lp|likidite sağlayıcıları]] doldurur ve karşılığında havuzdaki paylarını temsil eden bir kayıt alır. Yeni bir çift için havuz açmak izne bağlı değildir. Sonraki tasarım kuşaklarında sağlayıcının parasını belirli bir fiyat aralığına toplamasına izin veren [[concentrated-liquidity|yoğunlaştırılmış likidite]] eklendi.

## Dikkat

Havuz açmanın izinsiz olması, bir jetonun havuzda görünmesinin o jeton hakkında hiçbir şey söylemediği anlamına gelir; tanınmış bir jetonun adını taşıyan sahtesi için de havuz açılabilir.

Likidite sağlamak risksiz değildir. Havuzdaki oran değiştikçe elindeki bileşim de değişir; varlıkları havuza koymak yerine öylece elde tutmuş olmaya göre oluşan farka [[impermanent-loss|kalıcı olmayan kayıp]] denir. Büyük takaslarda fiyatın hareket etmesi ([[price-impact|fiyat etkisi]]) ve işlemin sırada beklerken başkalarınca çevrelenmesi ([[sandwich-attack|sandviç saldırısı]]) de bu tasarımın doğal sonuçlarıdır.

Son olarak yazıldığı tarih itibarıyla protokolün farklı tasarım kuşakları aynı anda kullanımdadır; "Uniswap üzerinden geçti" denen bir işlemin hangi kuşaktan geçtiği davranışını değiştirir.
