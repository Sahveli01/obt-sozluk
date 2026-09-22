---
term: "Order Book DEX"
tr: ""
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: orta
short: "Fiyatı bir formülle değil, kullanıcıların alım ve satım emirlerinin eşleşmesiyle belirleyen merkeziyetsiz borsa."
related: [order-book, decentralized-exchange-dex, automated-market-maker-amm, limit-order, market-maker, spread]
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

Bu tasarımda fiyat bir havuzdan değil, [[order-book|emir defterinden]] çıkar. Alıcılar ve satıcılar "şu fiyattan şu kadar" diyen emirler bırakır; fiyatları örtüşen iki emir eşleştiğinde işlem olur. Yani karşı tarafta bir formül değil, başka bir kullanıcı vardır.

Terim İngilizce kullanılır; "emir defteri" Türkçede yerleşmiştir ama bu birleşik ad çevrilmez.

## Nasıl çalışır?

Zincirde her emrin yazılması ve iptali birer işlemdir, dolayısıyla ücret ve gecikme demektir. Aktif bir defter saniyede çok sayıda güncelleme gördüğü için bu maliyet hızla ağırlaşır.

İki yol izlenir. Birincisinde defter ve eşleştirme zincir dışında çalışır, yalnızca sonuç ve varlık devri zincire yazılır; kullanıcının varlıkları bu süre boyunca kendi kontrolünde kalır. İkincisinde defterin tamamı, blokları hızlı ve ücretleri düşük bir zincirde tutulur.

[[automated-market-maker-amm|AMM]] ile farkı nettir: AMM'de fiyatı formül üretir, karşı taraf her zaman havuzdur ve sermaye pasif durur. Emir defterinde fiyatı emir verenler belirler, karşı taraf çıkmazsa emrin bekler ve [[limit-order|limit emri]] gibi araçlar doğal olarak vardır. Hangisinin üstün olduğu tek başına söylenemez; ikisi farklı maliyetleri farklı yerlere koyar.

## Dikkat

"Merkeziyetsiz" her parçanın zincirde olduğu anlamına gelmez. Eşleştirme zincir dışındaysa o bileşeni işleten taraf emirleri görme ve sıralama gücüne sahiptir. Varlıkların senin kontrolünde kalması ile eşleştirmenin merkeziyetsiz olması ayrı sorulardır; bir borsa birincisini sağlayıp ikincisini sağlamayabilir.
