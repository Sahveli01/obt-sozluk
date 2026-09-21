---
term: "Full Node"
tr: ""
aliases: ["tam dugum", "tam node"]
category: temeller
subcategory: "Ağ ve node"
level: orta
short: "Zincirin bütün bloklarını indirip her kuralı kendisi doğrulayan ve güncel durumu elinde tutan node."
related: [node, light-node, archive-node, node-synchronization, pruning]
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

Full node, zincirin blok geçmişini baştan sona indirip her bloğu ve her işlemi protokol kurallarına göre kendi doğrulayan [[node|node'dur]]. Hiç kimseye "bu blok geçerli mi?" diye sormaz; cevabı kendi hesaplar. Ağın kuralları da asıl burada yaşar: bir blok full node'ların kabul ettiği kurallara uymuyorsa, onu kim ürettiyse üretsin zincire giremez. Türkçede yerleşik bir karşılığı yok, topluluk "full node" der.

## Nasıl çalışır?

Node ilk açıldığında [[genesis-block|genesis bloğundan]] başlayarak blokları sırayla alır; her blokta imzaları, [[hash|hash]] bağlarını ve kural ihlallerini kontrol eder. Bu aşamaya [[node-synchronization|senkronizasyon]] denir ve ağın geçmişi uzadıkça uzar.

Senkron bittiğinde elinde iki şey vardır: doğrulanmış blok geçmişi ve zincirin güncel durumu, yani [[state-blockchain|state]] — hangi adreste ne olduğu, hangi sözleşmenin hafızasında ne yazdığı. Sonraki her blokta aynı kontroller tekrarlanır, blok geçerliyse durum güncellenir ve blok komşulara iletilir.

Disk yükünü azaltmak için çoğu yazılım [[pruning|budama]] yapabilir: doğrulaması çoktan bitmiş eski blokların ham verisi silinir, güncel durum korunur. Budanmış bir node hâlâ tam doğrulama yapar.

## Dikkat

Full node olmak blok üretmek demek değildir; doğrulamak ve üretmek ayrı rollerdir. Bir de her full node arşiv değildir: budanmış bir node "binlerce blok önce bu adreste ne vardı?" sorusuna cevap veremez, onun için [[archive-node|archive node]] gerekir.
