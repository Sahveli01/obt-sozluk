---
term: "USD Coin (USDC)"
tr: ""
aliases: ["usdc"]
category: aglar
subcategory: ""
level: orta
short: "Bir şirket tarafından ihraç edilen, dolara sabitlenmesi zincir dışında tutulan rezervlere dayandırılan stablecoin."
related: [stablecoin, fiat-backed-stablecoin, tether-usdt, proof-of-reserves, depeg, peg]
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

USD Coin — kısaca USDC — bir şirket tarafından ihraç edilen ve ABD dolarına sabit kalması hedeflenen bir [[stablecoin|stablecoin]]'dir. [[fiat-backed-stablecoin|İtibari parayla desteklenen]] modelde çalışır: dolaşımdaki her jetonun karşılığında ihraççının tuttuğunu beyan ettiği bir varlık bulunur. Sabitlemeyi ayakta tutan şey zincir üstü bir mekanizma değil, zincirin dışındaki bir bilançodur.

## Nasıl çalışır?

İhraç ve iade doğrudan ihraççıyla yapılır: müşteri para yatırır, karşılığında jeton basılır; jetonu iade ettiğinde jeton yakılır ve parası geri ödenir. Kullanıcıların çoğu bu kapıyı hiç kullanmaz, jetonu borsalardan ya da zincir üstü havuzlardan alır. Fiyatın hedefe yakın kalmasını sağlayan şey, kapıyı kullanabilen tarafların aradaki farkta [[arbitrage|arbitraj]] yapabilmesidir.

Jeton birden çok ağda dolaşır. Aynı sembolü taşıyan bakiyeler farklı zincirlerde farklı sözleşmelerde durur; bir ağdan diğerine geçiş ya bir köprü ya da ihraççının kendi aktarım yolu üzerinden yapılır. Hangi yolu kullandığın, karşı taraftaki jetonun neye dayandığını değiştirir.

## Dikkat

Merkezî ihraççı bu jetonun en belirleyici özelliğidir. Sözleşme, belirli adresleri kara listeye alıp transferlerini engelleyebilecek ve jeton yakabilecek biçimde tasarlanmıştır; bu yetki ihraççıdadır. Elindeki bakiye bu yüzden [[permissionless|izinsiz]] bir varlığınki gibi davranmaz.

Sabitlemenin dayanağı ise rezervlerin gerçekten var olması ve gerektiğinde nakde çevrilebilmesidir; rezervi tutan kurumlarla ilgili bir sorun jetonun piyasa fiyatına [[depeg|sapma]] olarak yansıyabilir. Rezervlerin bileşimi ve raporlanma biçimi zaman içinde değişir; yazıldığı tarih itibarıyla güncel durum ihraççının kendi yayınlarından takip edilmelidir.
