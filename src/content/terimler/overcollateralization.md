---
term: "Overcollateralization"
tr: "Aşırı teminatlandırma"
aliases: ["aşırı teminatlandırma"]
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Borcun her zaman teminattan küçük tutulması; zincirde kimlik ve icra olmadığı için tek güvence teminatın kendisidir."
related: [collateral, collateral-ratio, loan-to-value-ltv, liquidation, crypto-backed-stablecoin, bad-debt]
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

Aşırı teminatlandırma, kilitlediğin [[collateral|teminatın]] her zaman aldığın borçtan büyük olması kuralıdır. Kulağa ters gelir: neden elinde daha fazlası varken daha azını ödünç alasın?

Cevap, zincirin ne bilmediğinde saklı. Bir adresin kim olduğu bilinmez. Ödemeyen birinin geliri haczedilemez, kredi notu düşürülemez, hakkında dava açılamaz. Geleneksel kredinin arkasındaki bütün zorlama araçları yoktur. Geriye tek bir güvence kalır: borç verilmeden önce ele geçirilmiş, gerektiğinde satılabilen bir varlık.

## Nasıl çalışır?

Fazlalık keyfi değildir, iki işi görür.

**Zaman kazandırır.** Fiyat düşmeye başladığında teminatın hâlâ borcu karşıladığı bir aralık vardır; [[liquidation|tasfiyenin]] gerçekleşmesi için gereken süre bu aralıktan çıkar.

**Masrafı karşılar.** Tasfiye bedavaya olmaz: işlem ücreti ödenir ve tasfiye edene prim verilir. İkisi de teminattan çıkar.

Fazlalığın büyüklüğünü varlığın oynaklığı belirler. Fiyatı sert hareket eden bir varlıkta izin verilen [[loan-to-value-ltv|LTV]] tavanı daha aşağıdadır, yani aynı teminatla daha az borçlanabilirsin.

## Dikkat

Bu modelin bedeli sermaye verimsizliğidir. Elindeki değerin ancak bir kısmını kullanıma alabilirsin, gerisi hareketsiz durur.

Teminatsız borçlanmanın DeFi'de zor olmasının sebebi de budur: borçlunun kim olduğu, geçmişte ne yaptığı ve ödemediğinde ne kaybedeceği bilinmeden verilen borcun arkasında hiçbir şey kalmaz. Zincir üstü kimlik ve itibar sistemlerinin çözmeye çalıştığı boşluk tam olarak burasıdır.
