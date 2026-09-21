---
term: "Timestamp"
tr: "Zaman damgası"
aliases: ["zaman damgası"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Bloğu üreten katılımcının bloğa yazdığı zaman bilgisi; kaba bir zaman ölçüsüdür, güvenilir bir saat değil."
related: [block-header, block, block-timestamp, timestamp-dependence, difficulty-adjustment]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Zaman damgası, bir bloğun ne zaman üretildiğini söyleyen ve [[block-header|blok başlığına]] yazılan alandır. Değer ağın ortak bir saatinden gelmez; bloğu üreten katılımcı tarafından beyan edilir.

## Nasıl çalışır?

Dağıtık bir ağda herkesin saati aynı değildir, olamaz da. Bu yüzden protokoller zaman damgasını doğrulamaya çalışmak yerine bir aralığa hapseder. Tipik kurallar şöyledir: damga, önceki blokların damgalarına göre geriye gitmemeli ve düğümün kendi saatine göre makul bir pencerenin ilerisinde olmamalıdır. Bu aralığın dışındaki bir [[block|blok]] reddedilir.

Kaba olmasına rağmen işe yarar. İş ispatı kullanan ağlarda [[difficulty-adjustment|zorluk ayarı]], blokların beklenenden hızlı mı yavaş mı geldiğini bu damgalardan okur. Kullanıcı tarafında da bir işlemin "ne zaman oldu" sorusu bu alandan cevaplanır.

## Dikkat

Zaman damgası oynanabilir bir alandır: üretici onu kuralların izin verdiği pencere içinde birkaç saniye kaydırabilir. Akıllı sözleşmelerde kritik kararları [[block-timestamp|blok zaman damgasına]] dayandırmak bu yüzden risklidir; bu hataya [[timestamp-dependence|zaman damgası bağımlılığı]] denir ve özellikle rastgelelik üretmek için hiç uygun değildir.

Bir de zaman damgası sıra demek değildir. İşlemlerin birbirine göre sırasını damgalar değil, [[block-height|blok yüksekliği]] ve işlemin blok içindeki konumu belirler.
