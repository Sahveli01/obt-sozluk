---
term: "Execution Client"
tr: "Yürütme İstemcisi"
aliases: []
category: konsensus
subcategory: "Ağ katmanı"
level: orta
short: "İşlemleri çalıştırıp zincirin durumunu güncelleyen istemci katmanı; blokların sırasına kendisi karar vermez."
related: [consensus-client, client-blockchain, state-blockchain, mempool, client-diversity]
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

Bazı ağlarda node yazılımı iki parçaya ayrılmıştır; bu ayrımın en bilinen örneği Ethereum'dur. Yürütme istemcisi bu ikilinin işlem tarafıdır: [[transaction|işlemleri]] alır, sırası geldiğinde çalıştırır, akıllı sözleşme kodunu işletir ve zincirin [[state-blockchain|durumunu]] günceller. Hesap bakiyeleri, sözleşme verileri ve bekleyen işlem havuzu ([[mempool|mempool]]) bu tarafta tutulur.

Kısaca "bu blokta ne oldu" sorusunun cevabını yürütme istemcisi hesaplar. "Bu blok zincire girecek mi" sorusu ise [[consensus-client|konsensüs istemcisine]] aittir.

## Nasıl çalışır?

İki istemci aynı makinede yan yana çalışır ve aralarında tanımlı bir arayüzle konuşur. Konsensüs tarafı "şu bloğun içeriğini çalıştır ve sonucu söyle" der; yürütme tarafı bloğu baştan sona işler, ortaya çıkan durumu hesaplar ve bloğun geçerli olup olmadığını bildirir.

Blok üretme sırası node'a geldiğinde akış tersine döner: konsensüs tarafı bir blok gövdesi ister, yürütme tarafı havuzundaki işlemler arasından seçim yapıp gövdeyi kurar ve geri verir.

Yürütme kısmının kuralları katıdır: aynı blok, hangi yürütme istemcisinde çalıştırılırsa çalıştırılsın aynı sonucu vermek zorundadır ([[deterministic-execution|deterministik yürütme]]). Aksi hâlde node'lar farklı durumlara varır ve ağ ikiye bölünür.

## Dikkat

"Yürütme istemcisi" bir rol adıdır, bir ürün adı değil. Aynı rolü dolduran, birbirinden bağımsız yazılmış birkaç yazılım vardır ([[client-diversity|istemci çeşitliliği]]).

Bu ayrım her ağda yoktur; pek çok zincirde iki iş tek bir yazılımın içinde durur. Ayrımın kendisi bir tasarım tercihidir: katmanları ayırmak her birinin bağımsız geliştirilmesini ve değiştirilmesini kolaylaştırır, karşılığında aradaki arayüzün de bakımını gerektirir.
