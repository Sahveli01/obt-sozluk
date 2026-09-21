---
term: "Block Reward"
tr: "Blok ödülü"
aliases: ["blok ödülü"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Yeni bir blok üreten katılımcıya protokolün verdiği karşılık: yeni yaratılan birimler artı bloktaki işlem ücretleri."
related: [block, mining, transaction-fee, emission-schedule, halving, staking-rewards]
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

Blok ödülü, yeni bir [[block|blok]] üreten katılımcının protokolden aldığı karşılıktır. Genellikle iki parçadan oluşur: protokolün o blokta yeni yarattığı birimler ve blok içindeki işlemlerden toplanan [[transaction-fee|işlem ücretleri]].

Ödülün amacı ikramiye değil güvenliktir. Blok üretmek donanım, elektrik ya da kilitlenmiş sermaye gerektirir; ödül bu masrafı karşıladığı sürece kurallara uymak kârlı, ağa saldırmak masraflı kalır.

## Nasıl çalışır?

Yeni birimlerin ne zaman ve ne kadar yaratılacağını protokolün [[emission-schedule|arz takvimi]] belirler; bu takvim kodun parçasıdır, üreticinin keyfine bağlı değildir. Bazı zincirlerde miktar belirli aralıklarla yarıya iner ([[halving|halving]]), bazılarında kilitlenmiş toplam sermayeye göre hesaplanır, bazılarında ücretlerin bir bölümü yakılarak arz ters yönde etkilenir.

Ödülü kimin alacağını uzlaşı mekanizması belirler: [[mining|madencilikte]] geçerli bloğu ilk bulan, hisse ispatında o sıra için seçilen üretici. Her durumda ödül bloğun içine yazılır ve ancak blok ana zincirde kalırsa geçerli olur; terk edilen bir dalda kalan blok ödülü de terk edilir.

## Dikkat

Blok ödülünün miktarı zincirden zincire ve zamanla değişir. Ezbere bir rakam taşımak yerine ilgili zincirin güncel kurallarına bak.

Blok ödülü ile [[staking-rewards|stake ödülü]] aynı şey değildir: blok ödülü tek bir bloğu üretene o an ödenen tutardır, stake ödülü ise katılımcının zaman içinde biriken getirisidir ve blok ödülü bunun yalnızca bir kaynağıdır.
