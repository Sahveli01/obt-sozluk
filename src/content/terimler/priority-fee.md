---
term: "Priority Fee"
tr: "Öncelik ücreti"
aliases: ["tip", "miner tip"]
category: temeller
subcategory: "Para birimleri ve ücretler"
level: orta
short: "Taban ücretin üstüne gönüllü eklenen ve doğrudan blok üreticisine giden, işlemi öne almak için verilen ek ücret."
related: [base-fee, eip-1559, gas-price, mempool, maximal-extractable-value-mev, transaction-fee]
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

Priority fee, [[eip-1559|EIP-1559]] ücret modelinde [[base-fee|taban ücretin]] üzerine kendi isteğinle eklediğin, birim gas başına ek ödemedir. Yakılan taban ücretin aksine bu kısım doğrudan bloğu üreten tarafa gider. İngilizcede kısaca "tip", yani bahşiş denir.

## Nasıl çalışır?

Taban ücret bir bloktaki bütün işlemler için aynıdır; dolayısıyla kimin önce gireceğini belirleyen şey o olamaz. Ayrımı öncelik ücreti yapar. Blok üreticisi [[mempool|bekleyen işlemlere]] bakar ve kendisine en çok bırakanları öne alır. Ağ sakinken sembolik bir miktar yeterlidir; herkesin aynı anda aynı şeye koştuğu anlarda ise aynı bloğa girmek isteyenler birbirini yukarı iter.

Gönderen tarafta iki rakam yazarsın: kabul ettiğin en yüksek toplam ücret ve bunun içinden üreticiye ayırdığın öncelik ücreti. Gerçek taban ücret düşük çıkarsa fazlası iade edilir, yani yüksek bir tavan yazmak kendiliğinden yüksek ödeme anlamına gelmez.

## Dikkat

Öncelik ücreti sıraya girmeyi garanti etmez, yalnızca olasılığı artırır. Blok üreticileri işlemleri başka gerekçelerle de sıralayabilir ya da araya kendi işlemlerini sokabilir; bu alanın adı [[maximal-extractable-value-mev|MEV]]'dir.

Ayrıca her zincirde böyle bir ayrım yoktur. Ücreti tek parça alan ağlarda "öncelik ücreti" diye ayrı bir alan bulunmaz; orada sıralama doğrudan [[gas-price|gas fiyatına]] bakılarak yapılır.
