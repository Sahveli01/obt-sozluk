---
term: "Miner"
tr: "Madenci"
aliases: ["madenci"]
category: konsensus
subcategory: "Madencilik"
level: orta
short: "İş ispatı kullanan bir ağda blok arayan, bulduğunda ağa yayınlayan ve ödülünü alan katılımcı."
related: [mining, mining-pool, hashrate, proposer, block-reward, asic]
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

Madenci, [[mining|madencilik]] işini yapan kişi ya da şirkettir. Ağda özel bir yetkisi, kaydı ya da izni yoktur; herkes gibi bir istemci çalıştırır, farkı blok arayacak donanımı da çalıştırmasıdır. İzin almak diye bir şey olmadığı için madenci olmak da madencilikten çıkmak da her an mümkündür.

Madencinin ağdaki rolü iki katmanlıdır. Bir yandan sıradan bir katılımcı gibi işlemleri ve blokları kendi kural kitabına göre doğrular; öte yandan yeni blok üretmeye aday olur. Bu ikisi birbirinden bağımsızdır: kuralları çiğneyen bir bloğu, onu kendi bulmuş olsa bile ağdaki diğerleri kabul etmez.

## Nasıl çalışır?

Madencinin iki ayrı işi vardır. Birincisi **seçim**: hangi işlemler bloğa girecek ve hangi sırayla. Bu tercih madenciye aittir; çoğu madenci ücreti yüksek olanı öne alır ama protokol onu buna zorlamaz. İkincisi **arama**: kurduğu başlık için hedefin altına düşen çıktıyı bulmaya çalışmak.

Blok bulma ihtimali, madencinin ağın toplam [[hashrate|hash gücü]] içindeki payına eşittir. Payı küçük olan biri uzun süre hiç blok bulamayabilir; gelirin bu düzensizliği yüzünden madencilerin büyük bölümü bir [[mining-pool|havuza]] katılır.

## Dikkat

Her madenci bir [[node|node]] çalıştırır ama her node madenci değildir. Ağdaki düğümlerin büyük kısmı hiç blok üretmeden yalnızca doğrulama ve dağıtım yapar; ikisini eşitlemek, ağın kaç bağımsız katılımcıya dayandığı sorusunu yanlış hesaplatır.

Madenci ile [[proposer|öneren]] de aynı şey değildir: madenci iş ispatında bloğu **bularak** hak kazanır, öneren ise hisse ispatında o sıra için **seçilerek** belirlenir.

Son olarak, işlem seçme yetkisi göründüğünden büyük bir güçtür. Bir işlemi bloğa almamak ya da sırayı değiştirmek de madencinin elindedir; bu yetkiden doğan kazanca [[maximal-extractable-value-mev|MEV]] denir.
