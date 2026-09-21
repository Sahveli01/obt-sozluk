---
term: "Block Size"
tr: "Blok boyutu"
aliases: ["blok boyutu"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Bir bloğa en fazla ne kadar veri sığabileceğini belirleyen üst sınır; ağın kapasitesini ve ücretlerini doğrudan etkiler."
related: [block, blockspace, transaction-fee, gas-limit, scalability, blockchain-trilemma]
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

Blok boyutu, tek bir [[block|bloğa]] en fazla ne kadar veri konabileceğini belirleyen üst sınırdır. Sınır bazı zincirlerde bayt cinsinden, bazılarında işlemlerin harcadığı iş miktarı üzerinden ([[gas-limit|gas limiti]]) tanımlanır; ikisi de aynı işi görür, bir bloğun büyüyebileceği yeri sabitler.

## Nasıl çalışır?

Bu sınır keyfî bir sayı değil, bilinçli bir denge noktasıdır. Bloklar büyürse her blokta daha çok işlem taşınır ve [[transaction-fee|ücretler]] düşer; buna karşılık her düğümün indirmesi, doğrulaması ve saklaması gereken veri artar. Yeterince büyüdüğünde sıradan bir bilgisayarla [[full-node|tam düğüm]] çalıştırmak imkânsızlaşır ve ağı bağımsız olarak doğrulayanların sayısı azalır.

Sınır küçük kalırsa tersi olur: doğrulama herkes için ucuz kalır ama blok içindeki yer kıtlaşır ve [[blockspace|blok alanı]] pahalanır. Bu yüzden blok boyutu tartışmaları teknik bir ayrıntı değil, [[blockchain-trilemma|blockchain trilemmasının]] en görünür hâlidir; bazı ağların tarihinde bu tartışma kalıcı ayrılmalara yol açmıştır.

## Benzetme

Bir uçağın ağırlık limiti gibi. Limiti yükseltirsen daha çok yolcu ve bagaj taşırsın, bilet ucuzlar; ama o uçak artık her piste inemez. Limiti düşürürsen en küçük havaalanı bile onu kaldırır, ama koltuklar için kıyasıya bir rekabet başlar.

## Dikkat

Blok boyutunu büyütmek [[scalability|ölçeklenmenin]] kestirme yolu değildir. Kapasiteyi artırır ama doğrulama ve saklama maliyetini de aynı oranda artırır. Bu yüzden birçok ağ kapasiteyi bloğu şişirerek değil, işin bir kısmını zincir dışına taşıyarak çözmeye çalışır.
