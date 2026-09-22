---
term: "Impermanent Loss"
tr: "Geçici kayıp"
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: ileri
short: "Havuza yatırdığın varlıkların fiyat oranı değiştiğinde, aynı varlıkları cüzdanda tutmaya kıyasla oluşan değer farkı."
related: [liquidity-provider-lp, liquidity-pool, concentrated-liquidity, automated-market-maker-amm, arbitrage, stableswap]
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

Bir [[liquidity-pool|havuza]] iki varlık koyarsın. Dışarıda bu iki varlığın fiyat oranı değişir. Havuz bunu kendiliğinden öğrenmez; farkı [[arbitrage|arbitrajcılar]] kapatır ve kapatırken havuzdan pahalılaşan varlığı çekip ucuzlayanı bırakır.

Sonuç şudur: havuz senin adına yükseleni satmış, düşeni almış olur. Çektiğinde elindeki bileşim yatırdığın bileşim değildir ve toplam değer, aynı varlıkları hiç dokunmadan cüzdanda tutmana göre düşük kalabilir. Bu farkın adı geçici kayıptır.

## Nasıl çalışır?

Fark, iki varlığın fiyat oranındaki ayrışmaya bağlıdır; tek bir varlığın yükselmesine ya da düşmesine değil. Oran ne kadar ayrışırsa fark o kadar büyür. Oran hiç değişmezse fark da olmaz. Bu yüzden fiyatları birbirine bağlı varlıklardan kurulu havuzlarda, örneğin [[stableswap|StableSwap]] havuzlarında, çok daha küçüktür.

Varsayımsal bir örnek: eşit değerde iki varlık yatırdın ve sonra birinin fiyatı diğerine göre iki katına çıktı. Çektiğinde elinde yükselen varlıktan daha az, düşenden daha çok olur. Sayı uydurmuyorum, yalnızca yönü gösteriyorum.

## Dikkat

Adı yanıltıcıdır. "Geçici" olması, fiyat oranı eski yerine dönerse farkın kapanmasından gelir. Oran dönmezse ve sen pozisyonu kapatırsan fark orada kalıcılaşır; kayıp defterine o an yazılır.

İkincisi, ücret geliri bu farkı telafi **edebilir**, etmeyebilir de. Hangisinin ağır basacağı önceden bilinemez; işlem hacmine ve fiyatın ne kadar ayrıştığına bağlıdır. "Ücretler nasılsa kapatır" bir varsayımdır, kural değil.

Üçüncüsü, pozisyondan çıkmamak farkı ortadan kaldırmaz. Fark kâğıt üstünde duruyor olabilir ama [[liquidity-provider-lp|likidite sağlayıcı]] olarak aldığın risk tam olarak budur.
