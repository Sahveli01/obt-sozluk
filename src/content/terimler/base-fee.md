---
term: "Base Fee"
tr: "Taban ücret"
aliases: ["taban ucret"]
category: temeller
subcategory: "Para birimleri ve ücretler"
level: orta
short: "Protokolün blok doluluğuna göre kendisi hesapladığı, ödenmesi zorunlu ve yakılan birim gas ücreti."
related: [eip-1559, priority-fee, gas, token-burn, gas-price, blockspace]
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

Base fee, [[eip-1559|EIP-1559]] ücret modelini kullanan ağlarda her blok için protokolün kendi hesapladığı, birim [[gas]] başına ödenmesi zorunlu ücrettir. Gönderen bu rakamı pazarlık edemez, yalnızca kabul edebileceği bir tavan yazar. Ödenen taban ücret kimsenin cebine girmez; [[token-burn|yakılır]].

## Benzetme

Yoğunluğa göre kendini ayarlayan bir köprü geçiş ücreti gibidir. Köprü sabah tıklım tıklımsa tarife bir sonraki dilimde biraz artar, boşsa biraz azalır. Tarifeyi gişedeki memur değil, trafiğin kendisi belirler; kimse pazarlık edemez ve o an geçen herkes aynı ücreti öder.

## Nasıl çalışır?

Her bloğun bir hedef doluluğu vardır ve protokol bir önceki bloğa bakarak karar verir:

- Blok hedeften doluysa bir sonraki bloğun taban ücreti yükselir.
- Hedeften boşsa düşer.

Değişim oranı protokolde sabittir ve blok başına sınırlıdır; yani ücret bir anda katlanmaz, birkaç blok boyunca kademeli olarak tırmanır ya da geri çekilir. Bunun faydası tahmin edilebilirliktir: bir sonraki bloğun taban ücretini önceden kesin olarak hesaplayabilirsin, çünkü formülün bütün girdileri zaten zincirde yazılıdır.

## Dikkat

Taban ücret ödediğin tek kalem değildir; blok üreticisine giden kısım [[priority-fee|öncelik ücretidir]]. Taban ücret yakıldığı için üreticinin onu yapay olarak yükseltmekte doğrudan bir çıkarı yoktur, tasarımın amacı da budur.

Bir de cüzdanda gördüğün "max fee" taban ücret değildir: ödemeyi kabul ettiğin tavandır. Gerçek taban ücret daha düşük çıkarsa aradaki fark sana iade edilir.
