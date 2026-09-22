---
term: "Cross-chain"
tr: "Zincirler arası"
aliases: ["crosschain"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: baslangic
short: "Tek bir zincirde bitmeyen, iki ayrı zinciri birden kapsayan işlem ya da uygulamalar için kullanılan sıfat."
related: [blockchain-bridge, interoperability, wrapped-token, cross-chain-messaging, chain-id]
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

Cross-chain, bir işin tek bir zincirde bitmediğini anlatan sıfattır: varlığı bir zincirden diğerine geçirmek, bir zincirdeki işlemle diğerinde bir şey tetiklemek bu kapsama girer.

Önemli olan nokta şu: böyle bir iş tek bir işlem değildir. Kaynak zincirde bir şey olur, hedef zincirde ayrı bir şey olur ve ikisini birbirine bağlayan üçüncü bir düzenek vardır — çoğu zaman bir [[blockchain-bridge|köprü]]. Riskin büyük bölümü zincirlerde değil, o üçüncü düzenektedir.

## Benzetme

Her zincir, kendi limanı olan ayrı bir ada gibidir. Adanın içinde her şey hızlıdır ve kurallar nettir; ama bir mal öbür adada ancak biri onu taşırsa ve karşı taraf taşındığına ikna olursa var sayılır. Adalar arasında kendiliğinden işleyen bir yol yoktur.

## Dikkat

Cross-chain ile "multichain" aynı şey değildir. Bir uygulamanın birden fazla zincire ayrı ayrı kurulması multichain'dir; kurulumlar birbirinden habersizdir. Cross-chain ise aralarında gerçekten varlık ya da bilgi akmasıdır.

Bir varlığı köprüden geçirdiysen hedef zincirde tuttuğun şey çoğu zaman aslın kendisi değil, onu temsil eden bir [[wrapped-token|sarmalanmış token]]dır.
