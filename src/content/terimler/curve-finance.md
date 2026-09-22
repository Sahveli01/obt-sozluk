---
term: "Curve Finance"
tr: ""
aliases: ["curve"]
category: aglar
subcategory: ""
level: ileri
short: "Birbirine yakın fiyatta işlem görmesi beklenen varlıklar için eğrisi ayarlanmış, bu varsayımın üzerine kurulu bir otomatik piyasa yapıcı."
related: [stableswap, automated-market-maker-amm, depeg, liquidity-provider-lp, vote-escrowed-token-vetoken, peg]
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

Curve Finance, [[automated-market-maker-amm|otomatik piyasa yapıcı]] mantığıyla çalışan bir takas protokolüdür; ayırt edici yanı hangi varlıklar için tasarlandığıdır. Birbirine yakın fiyatta durması beklenen çiftler için kurulmuştur: farklı [[stablecoin|stablecoin]]'ler ya da bir varlıkla onun stake edilmiş temsili gibi.

## Nasıl çalışır?

Sabit çarpım eğrisi likiditeyi her fiyat seviyesine yayar. Oysa iki varlığın bire bire yakın kalması bekleniyorsa likiditenin işe yarayan kısmı o dar bölgededir, geri kalanı boşta bekler.

Curve'ün kullandığı değişmez ([[stableswap|stableswap]] eğrisi) bu yüzden melezdir. Havuz dengeye yakınken eğri neredeyse düzdür: görece büyük takaslarda bile fiyat az kayar. Havuz bir tarafa ciddi biçimde yattığında ise eğri sertleşip sabit çarpım davranışına yaklaşır ve fiyat hızla bozulur. Protokol ayrıca hangi havuzların teşvik alacağını, jetonunu uzun süreliğine kilitleyenlerin oylamasına bağlayan bir [[vote-escrowed-token-vetoken|oy kilitleme]] modeliyle bilinir.

## Dikkat

Tasarımın tamamı tek bir varsayıma yaslanır: varlıklar birbirine yakın kalacak. Bu varsayım bozulduğunda ([[depeg|depeg]]) havuz kendiliğinden tek taraflı dolar — herkes değerini koruyan varlığı çeker, [[liquidity-provider-lp|likidite sağlayıcılarının]] elinde değer kaybeden varlık kalır. Yani yakın fiyat varsayımı sağlayıcı açısından bedava değil, üstlenilmiş bir risktir.

İkinci nokta yönetişimdir. Teşviklerin nereye gideceğini belirleyen oy gücü el değiştirebilen bir şeye dönüştüğünde, bir havuzun derinliği gerçek talebi değil oy dağılımını yansıtabilir. Yazıldığı tarih itibarıyla bu model başka protokoller tarafından da benimsenmiş durumdadır.
