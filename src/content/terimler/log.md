---
term: "Log"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Dağıtım ve arayüz"
level: ileri
short: "EVM'in ürettiği, topic ve data alanlarından oluşan kayıt; bir sözleşmenin dışarıya bıraktığı iz."
related: [event-smart-contract, keccak-256, indexer, opcode, block-explorer, storage-evm]
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

Log, bir işlem çalışırken EVM'in ürettiği kayıttır. Sözleşme tarafındaki karşılığı [[event-smart-contract|event]]'tir: sen `emit` yazarsın, derleyici bunu bir `LOG` [[opcode|opcode]]'una çevirir ve işlemin makbuzuna bir satır eklenir.

Bir kaydın üç parçası vardır: onu üreten sözleşmenin adresi, **topic**'ler ve **data**. Terim Türkçeye çevrilmeden kullanılır.

## Nasıl çalışır?

Topic'ler 32 baytlık sabit alanlardır ve bir kayıtta en fazla dört tane bulunur. Sıradan bir event'te birincisi baştan doludur: event imzasının — `Transfer(address,address,uint256)` gibi — [[keccak-256|keccak-256]] özeti oraya yazılır. Geriye üç yer kalır ve bunlar `indexed` işaretlenmiş parametrelere ayrılır. Bir event'te en çok üç parametrenin `indexed` olabilmesinin sebebi budur. `anonymous` işaretlenen event'lerde imza özeti hiç yazılmaz, dört topic'in dördü de parametrelere kalır.

`indexed` olmayan parametreler data bölümüne yazılır. Data'nın uzunluğu sabit değildir, içindekiler ABI kurallarına göre paketlenir.

Bu ayrımın tek sebebi aramadır. Düğümler topic'lere göre filtre kurar: "şu adresin ürettiği, birinci topic'i şu olan kayıtları getir" diyebilirsin. Data üzerinde böyle bir arama yoktur; onu ancak kaydı bulduktan sonra çözersin. [[indexer|İndeksleyicilerin]] işi de budur: kayıtları baştan tarayıp sorgulanabilir hâle getirmek.

## Dikkat

Log'ları sözleşmeler **okuyamaz**. EVM'de log yazan opcode vardır, log okuyan opcode yoktur. Log tek yönlü bir kapıdır: dışarı çıkar, içeri dönmez. "Şu kayıt düşmüş müydü?" diye bakan bir sözleşme yazamazsın; sözleşmenin karar verirken ihtiyaç duyduğu her şeyin [[storage-evm|depolamada]] tutulması gerekir. Log, arayüzlere, [[block-explorer|blok gezginlerine]] ve indeksleyicilere yöneliktir.

İkincisi: log'lar zincirin durumunun parçası değildir, işlem makbuzlarında dururlar. Eski kayıtları sorgulamak, o aralığı hâlâ saklayan bir düğüme bağlı olmanı gerektirir — her düğüm geçmişin tamamını tutmaz.
