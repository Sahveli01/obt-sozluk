---
term: "Withdrawal Period"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "Bir rollup'tan ana zincire para çekerken beklenen süre; sebebi ağın yavaşlığı değil, çıkışın dayandığı sonucun henüz kesinleşmemiş olmasıdır."
related: [challenge-period, optimistic-rollup, zk-rollup, canonical-bridge, liquidity-network-bridge]
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

Rollup'a para yatırmak hızlıdır; çıkarmak değildir. Çıkış, ana zincirdeki köprü sözleşmesine "bu kişinin şu kadar bakiyesi vardı ve onu yaktı" demek anlamına gelir. Sözleşme bunu ancak dayandığı sonuç kesinleştiğinde kabul edebilir. Bekleme süresi bu kesinleşmenin süresidir. Terimin Türkçe karşılığı yerleşmemiştir; "çekim süresi" açıklama olarak kullanılır.

## Nasıl çalışır?

Süreyi belirleyen şey rollup'ın doğruluk mekanizmasıdır.

İtiraza dayanan tasarımlarda çıkış, [[challenge-period|itiraz süresinin]] dolmasını bekler; pencere kapanmadan çıkış tamamlanamaz, çünkü sonuç hâlâ geri alınabilir durumdadır.

Kanıta dayanan tasarımlarda beklenen şey itiraz değil, yığının kanıtının üretilip ana zincire gönderilmesidir. Kanıt yayımlandığı anda sonuç kesinleşir; bekleme, kanıt üretiminin ve yayımlama sıklığının aldığı zamandır.

Her iki durumda da bir de ana zincir işleminin kendisi vardır: çıkışı tamamlayan işlem için gaz ödenir.

## Dikkat

Beklemek istemeyenler için üçüncü taraf köprüler vardır: biri senin çıkış alacağını bir ücret karşılığında devralır ve parayı ana zincirde hemen verir. Bu hızlı yol hoş görünür, ama güven modelini değiştirir — artık [[canonical-bridge|kanonik köprünün]] kurallarına değil, o üçüncü tarafın ödeme gücüne ve dürüstlüğüne güvenirsin.

Beklerken paranın "kaybolduğu" hissi yanıltıcıdır. Para, çıkış süresi boyunca köprü sözleşmesinde kilitlidir ve kesinleşme gerçekleştiğinde talep edilebilir. Kesinleşmeyi hızlandırmanın güvenli bir yolu yoktur; hızlandırdığını söyleyen her yöntem, aslında araya bir aracı koymaktadır.
