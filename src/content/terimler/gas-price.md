---
term: "Gas Price"
tr: "Gas fiyatı"
aliases: ["gas fiyati"]
category: temeller
subcategory: "Para birimleri ve ücretler"
level: orta
short: "Harcanan gas'ın birim fiyatı; işlem ücreti bu fiyatla harcanan gas miktarının çarpımıdır."
related: [gas, gas-limit, gwei, transaction-fee, base-fee, priority-fee]
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

Gas price, bir birim [[gas]] için ödemeyi kabul ettiğin fiyattır ve genellikle [[gwei]] cinsinden yazılır. İşlem ücreti basit bir çarpımdır: harcanan gas × gas fiyatı. Miktarı işin kendisi belirler, fiyatı ise piyasa.

## Nasıl çalışır?

Bir bloğa sığan iş miktarı sınırlıdır, dolayısıyla her blokta bir seçim yapılır. Blok üreticisi kendisine daha çok ödeyen işlemleri öne alır; düşük fiyat veren işlem [[mempool|bekleme havuzunda]] kalır. Ağ yoğunlaştığında fiyatlar yükselir, boşaldığında düşer. Yani gas fiyatı sabit bir tarife değil, sürekli yer değiştiren bir denge noktasıdır.

Fiyatın nasıl belirlendiği ağın ücret tasarımına bağlıdır. Eski modelde gönderen tek bir rakam yazardı ve bu, kapalı zarf usulü bir açık artırmaya benzerdi. [[eip-1559|EIP-1559]] sonrasında Ethereum'da fiyat ikiye ayrıldı: protokolün hesapladığı [[base-fee|taban ücret]] ve gönderenin eklediği [[priority-fee|öncelik ücreti]]. Arayüzler ikisinin toplamını hâlâ tek bir "gas fiyatı" gibi gösterebilir, bu yüzden bir rakam gördüğünde neyin toplamı olduğunu sormak gerekir.

## Dikkat

Gas fiyatını düşürmek ücreti düşürür ama işlemin ne zaman — bazen de hiç — işleneceğini belirsizleştirir. Kalıcı kazanç çoğunlukla fiyat tarafında değil, miktar tarafındadır: zincire daha az iş yaptırmak. Bunun adı [[gas-optimization|gas optimizasyonudur]] ve fiyatın aksine senin kontrolündedir.
