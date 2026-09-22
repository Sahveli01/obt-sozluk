---
term: "Arbitrage"
tr: "Arbitraj"
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: orta
short: "Aynı varlığın iki yerde farklı fiyatlanmasından yararlanan ve bunu yaparken fiyatları birbirine yaklaştıran işlem."
related: [maximal-extractable-value-mev, automated-market-maker-amm, price-impact, liquidity-provider-lp, flash-loan, impermanent-loss]
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

Bir [[automated-market-maker-amm|AMM]] havuzu dışarıda ne olup bittiğini bilmez; fiyatını yalnızca kendi içindeki miktarlardan üretir. Piyasa hareket ettiğinde havuzun fiyatı geride kalır.

Arbitraj bu farkı kapatan işlemdir: ucuz kalan yerden alınır, pahalı kalan yerde satılır. Kimse fiyatları düzeltmek için yapmaz bunu, ama yapıldıkça iki fiyat birbirine yaklaşır. Bu yüzden arbitraj DeFi'de bir kenar faaliyeti değil, havuzların fiyatını dış piyasaya bağlayan asıl mekanizmadır. Havuza "yeni fiyat şudur" diye yazan kimse yoktur; hizalamayı bu işlemler yapar.

## Benzetme

Aynı sebzenin toptancı halinde ucuz, mahalle manavında pahalı olması gibi. Fark yeterince büyüdüğünde birileri halden alıp manava taşır. Taşıdıkça halde talep artıp fiyat yükselir, manavda mal çoğalıp fiyat düşer. Fark kapandığında taşımak da anlamsızlaşır.

## Nasıl çalışır?

Zincirde iki bacak çoğu zaman tek bir işlemin içine konur: biri tutmazsa işlemin tamamı geri alınır, dolayısıyla "aldım ama satamadım" durumu oluşmaz. Sermayenin bir kısmı aynı işlem içinde ödünç alınıp geri ödenebilir ([[flash-loan|flash loan]]).

Bu yüzden rekabet fiyat bulmaktan çok işlem sıralamasına kayar ve kârın önemli bir bölümü bloğa girmek için ödenen tekliflere gider. [[maximal-extractable-value-mev|MEV]] başlığının merkezinde bu vardır.

## Dikkat

Arbitraj bedava para değildir ve kalıcı bir gelir kapısı hiç değildir: fark kapandığı anda işlem de anlamını yitirir.

Daha az konuşulan tarafı şudur: havuz eski fiyattan alışveriş yaptığı için bu farkın bedelini bir yere yazmak gerekir ve o yer [[liquidity-provider-lp|likidite sağlayıcılardır]]. [[impermanent-loss|Geçici kayıp]] ile arbitraj kârı aynı madalyonun iki yüzüdür.
