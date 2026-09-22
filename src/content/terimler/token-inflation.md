---
term: "Token Inflation"
tr: "Token enflasyonu"
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: orta
short: "Yeni token basıldıkça toplam arzın büyümesi ve mevcut her token'ın toplam içindeki payının oransal olarak küçülmesi."
related: [emission-schedule, token-deflation, mint, block-reward, total-supply, staking]
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

Token inflation, arzın yeni basımlarla büyümesidir. Cüzdanındaki miktar hiç değişmese bile, [[total-supply|toplam arz]] büyüdükçe senin payının toplam içindeki oranı küçülür. Buna **seyrelme** denir.

## Nasıl çalışır?

Yeni token birkaç yerden doğar: bloğu üretene verilen [[block-reward|blok ödülü]], [[staking]] karşılığı dağıtılan ödüller, kullanıcı çekmek için açılan teşvik havuzları ve takvimi gelen ekip payları. Hepsinin ortak noktası bir [[mint|basım]] işlemidir.

Oran genellikle yıllık yüzde olarak ifade edilir: bir yıl boyunca basılan yeni token'ın, yıl başındaki arza bölümü. Bu oranın zaman içinde nasıl seyredeceği [[emission-schedule|emisyon takvimine]] yazılıdır.

Ödül alıyor olman seni seyrelmeden otomatik olarak korumaz. Belirleyici olan, aldığın payın basılan toplam içindeki oranıdır: bu oran senin mevcut payından küçükse arzdaki ağırlığın yine de azalır.

## Dikkat

Token enflasyonunu, günlük dildeki fiyat enflasyonuyla karıştırma. Buradaki enflasyon yalnızca **arz tarafını** anlatır: kaç tane var ve ne hızla artıyor. Alım gücü ya da fiyat hakkında tek başına bir şey söylemez; onun için talebin ne yaptığını da bilmek gerekir.

İkinci nokta: enflasyon kendiliğinden kötü, [[token-deflation|deflasyon]] kendiliğinden iyi değildir. Yeni basım çoğu ağda ödülü finanse eden şeydir — ağı güvence altına alan tarafa ödeme yapmanın bir yolu. Anlamlı soru "enflasyon var mı" değil, "basılan token ne karşılığında kime gidiyor" sorusudur.
