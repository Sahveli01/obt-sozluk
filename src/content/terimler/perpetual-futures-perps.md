---
term: "Perpetual Futures (Perps)"
tr: ""
aliases: ["perps"]
category: defi
subcategory: "Türevler"
level: orta
short: "Vade tarihi olmayan vadeli işlem sözleşmesi; sen kapatana kadar açık kalır, fiyatı spota funding ödemeleriyle bağlanır."
related: [funding-rate, futures, leverage, margin, liquidation, long-position]
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

Klasik bir vadeli işlem sözleşmesinin ([[futures]]) bir bitiş tarihi vardır: o gün gelince sözleşme kapanır ve fiyatı dayanak varlığın fiyatına oturur. Süresiz sözleşmede böyle bir gün yoktur. Pozisyon sen kapatana ya da teminatın eriyip tasfiye edilene kadar açık kalır.

Bu kolaylığın bir bedeli var. Vade, sözleşme fiyatını gerçek fiyata çeken şeydi; vadeyi kaldırınca yerine başka bir bağ koymak gerekir. O bağ [[funding-rate|funding]] ödemeleridir. Adı Türkçeye çevrilmeden kullanılır; topluluk dilinde kısaca "perp" denir.

## Nasıl çalışır?

Pozisyon açmak için teminat yatırırsın ([[margin]]). Kâr ve zarar, yatırdığın teminatın değil, açtığın pozisyonun büyüklüğü üzerinden hesaplanır ve teminatından işlenir ([[leverage]]). Protokol, dayanak varlığın fiyatını bir dış kaynaktan okur; sözleşmenin kendi fiyatı ise alıcı ve satıcıların dengesiyle oluşur.

İki fiyat ayrıldığında funding devreye girer ve pahalı tarafta duranlar ucuz tarafta duranlara ödeme yapar. Bu ödeme, pozisyonları fiyatı geri çeken yöne doğru teşvik eder. Teminat sürdürme eşiğinin altına inerse pozisyon otomatik kapatılır ([[liquidation]]).

## Dikkat

Süresiz sözleşmede "bekleyip düzelmesini beklemek" bedava değildir. Pozisyon açık kaldığı sürece funding ödemeleri birikir; yön hakkında haklı çıksan bile bu taşıma maliyetini kazancından düşmen gerekir. Uzun süre kalabalık tarafta duran bir pozisyon, fiyat hiç hareket etmese bile teminatını yavaşça eritebilir.

İkinci nokta: vade olmadığı için pozisyonu kapatmanın doğal bir anı da yoktur. Kapanış kararını ya sen verirsin ya da teminatın bittiğinde protokol verir.
