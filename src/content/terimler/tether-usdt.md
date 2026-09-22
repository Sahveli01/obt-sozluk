---
term: "Tether (USDT)"
tr: ""
aliases: ["usdt"]
category: aglar
subcategory: ""
level: orta
short: "Bir şirket tarafından ihraç edilen ve dolara sabit kalması, tutulduğu beyan edilen rezervlere dayandırılan stablecoin."
related: [stablecoin, fiat-backed-stablecoin, usd-coin-usdc, proof-of-reserves, peg, depeg]
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

Tether, bir şirket tarafından ihraç edilen ve değerinin ABD dolarına sabit kalması hedeflenen bir [[stablecoin|stablecoin]]'dir; sembolü USDT'dir. Sabitlemeyi bir algoritma ya da zincir üstü teminat değil, ihraççının elinde tuttuğunu beyan ettiği rezervler destekler. Bu yüzden [[fiat-backed-stablecoin|itibari parayla desteklenen stablecoin]] ailesine girer.

## Nasıl çalışır?

Mekanizma zincirin dışında başlar. İhraççıyla doğrudan çalışabilen müşteriler para yatırdığında yeni jeton basılır; jetonları iade ettiklerinde jeton yakılır ve para geri ödenir. Fiyatı hedefe yaklaştıran temel düzeltme budur: piyasa fiyatı sapınca bu kapıyı kullanabilen taraflar aradaki farkı kapatacak işlemi yapar. Sıradan kullanıcıların çoğu ihraççıyla hiç muhatap olmaz, jetonu borsalardan ya da zincir üstü havuzlardan alır.

Jeton tek bir zincire ait değildir. Aynı ad altında birçok ağda ayrı sözleşmeler olarak dolaşır ve bir ağdaki bakiye diğerine kendiliğinden geçmez.

## Dikkat

Taşıdığı en önemli güven varsayımı merkeziyettir. İhraççı sözleşme üzerinden adresleri dondurabilir ve jeton yakabilir; yani elindeki bakiye yalnızca zincirin kurallarına değil, bir şirketin kararına da tabidir. Bu yetki yasal taleplere uymak ya da çalınan fonları durdurmak için kullanılabilir, ama aynı yetki jetonu [[censorship-resistance|sansüre direnç]] açısından sıradan bir kripto varlığından farklı bir yere koyar.

İkinci varsayım rezervlerdir: jetonun değeri, ihraççının gerçekten karşılık tutmasına ve talep hâlinde ödeyebilmesine bağlıdır. Rezervlerin bileşimi ve raporlanma biçimi zaman içinde değişir; yazıldığı tarih itibarıyla güncel durum ihraççının kendi yayınlarından ve varsa bağımsız [[proof-of-reserves|rezerv kanıtı]] çalışmalarından takip edilir.
