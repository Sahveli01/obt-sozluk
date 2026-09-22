---
term: "Network Upgrade"
tr: "Ağ Yükseltmesi"
aliases: ["ag yukseltmesi"]
category: konsensus
subcategory: "Ağ katmanı"
level: orta
short: "Protokol kurallarının değişmesi ve bu değişikliğin bütün düğümlerde önceden belirlenmiş bir anda birlikte yürürlüğe girmesi."
related: [hard-fork, soft-fork, improvement-proposal-eip-bip, client-blockchain, node, block-height]
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

Ağ yükseltmesi, bir zincirin protokol kurallarının değişmesi ve yeni kuralın ağın tamamında yürürlüğe girmesidir. Sıradan bir yazılım güncellemesinden farkı şudur: telefonundaki uygulamayı güncellemezsen yalnızca sen eski sürümde kalırsın. Burada kural ortaktır — kimin hangi sürümde olduğu, bir bloğun geçerli sayılıp sayılmayacağını belirler.

Yol genellikle aynıdır: değişiklik bir [[improvement-proposal-eip-bip|iyileştirme önerisi]] olarak yazılır, açıkça tartışılır, sonra her [[client-blockchain|istemci]] ekibi onu kendi yazılımına ayrı ayrı uygular ve yeni bir sürüm yayımlar.

## Benzetme

Yaz saati uygulamasına geçiş gibi. Gün ve saat önceden ilan edilir, o gece herkes saatini birlikte ileri alır. Almayı unutanın saati bozulmaz; doğru çalışmaya devam eder, ama artık kendi zamanındadır. Randevulara erken gider, otobüsü kaçırır, "saat kaç" sorusuna herkesten farklı cevap verir. Sorun saatinde değil, herkesle aynı anda değişmemiş olmasındadır.

## Nasıl çalışır?

Değişiklik bir takvim gününe değil, zincirin kendi sayacına bağlanır: genellikle bir [[block-height|blok yüksekliğine]]. O yüksekliğe kadar bütün [[node|node]]'lar eski kuralı uygular; o noktadan sonra güncellenmiş yazılımlar yeni kurala geçer. Herkesin aynı anda geçmesini sağlayan şey budur.

Bu yüzden yükseltmeler önceden duyurulur ve devreye alınmadan önce test ağlarında çalıştırılır. Yazılımı güncellemek kısa sürer; asıl iş, node işletenlerin, borsaların, cüzdanların ve veri servislerinin aynı takvimde buluşmasıdır.

Değişikliğin eski kurallarla uyumlu olup olmaması, yükseltmenin bir [[hard-fork|hard fork]] mı yoksa [[soft-fork|soft fork]] mu olarak yürüyeceğini belirler.

## Dikkat

Yükseltmeye geçmeyen node'lar susmaz. Kendi kurallarına göre çalışmaya devam eder, uyumsuz bir değişiklikte yeni blokları geçersiz sayar ve kendi zincirinde kalır. Tehlikeli olan, bunun sessizce olmasıdır: node ayakta görünür, blok işler görünür, ama baktığı zincir artık ağın zinciri değildir.

Pratik karşılığı: node çalıştırıyorsan yükseltme duyurularını takip et ve güncellemeyi yükseltme anından önce yap, sonra değil.
