---
term: "Blockspace"
tr: "Blok alanı"
aliases: ["blok alanı"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Bir blokta işlemlere ayrılan sınırlı yer; zincirin sattığı asıl kaynak ve ücretlerin oluştuğu pazar budur."
related: [block-size, transaction-fee, gas, mempool, base-fee, maximal-extractable-value-mev]
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

Blok alanı, bir blokta işlemler için ayrılmış sınırlı yerdir. Zincirin kullanıcıya sattığı asıl şey budur: bir işlemi zincire yazdırmak, o sınırlı alandan bir parça satın almak demektir.

Alan kıt olduğu için fiyatı vardır. [[transaction-fee|İşlem ücreti]] sabit bir liste fiyatı değil, aynı bloğa girmek isteyen işlemler arasındaki rekabetin sonucudur; talep arttığında yükselir, sakin saatlerde düşer.

## Nasıl çalışır?

Bekleyen işlemler önce [[mempool|mempool'da]] birikir. Blok üreticisi bunların hepsini alamaz, çünkü [[block-size|blok boyutu]] sınırlıdır; genellikle birim iş başına en çok ödeyenleri seçer. Bazı ağlarda bu pazarın tabanı protokol tarafından hesaplanır ([[base-fee|taban ücret]]) ve kullanıcı bunun üstüne bir öncelik payı ekler.

Satılan yalnızca yer değil, sıradır. Aynı blok içinde hangi işlemin önce geldiği kârı değiştirebildiği için blok alanının üstünde [[maximal-extractable-value-mev|MEV]] denen ayrı bir rekabet katmanı oluşur.

## Benzetme

Pazar yerindeki tezgâh sayısı gibi. Her pazar günü kurulabilecek tezgâh sayısı bellidir ve talep arttığında pazar büyümez, tezgâh kirası artar. Satıcı malını kendi getirir ama tezgâhı almadan satamaz; kalabalık günlerde de tezgâhı en çok ödeyen kapar.

## Dikkat

Blok alanını "boş yer" sanma; bloklar dolu olmadığı anlarda bile kıt bir kaynaktır, çünkü sınırı talep değil protokol koyar.

Yüksek ücret ödemek işlemin başarılı olacağını da garanti etmez; yalnızca bloğa alınma sırasını etkiler. Başarısız bir işlem de blok alanı harcar ve harcadığı [[gas|gas]] geri gelmez.
