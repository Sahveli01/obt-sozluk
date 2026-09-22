---
term: "Slot"
tr: ""
aliases: []
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: baslangic
short: "Sıradaki bloğu önerme hakkının belirli bir üreticiye ait olduğu zaman aralığı."
related: [epoch-blockchain, proposer, validator, leader-election, block-time]
disambiguation: [storage-slot]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

**Slot**, sıradaki bloğu önerme hakkının önceden belirlenmiş bir üreticiye ait olduğu zaman aralığıdır. Aralık açıldığında sırası gelen [[proposer|proposer]] bloğunu hazırlayıp yayar; aralık kapandığında hak düşer ve sıra bir sonrakine geçer.

Slot, zamanı herkesin aynı şekilde saydığı bir ızgaraya böler. Kimin ne zaman konuşacağı önceden belli olduğu için düğümler bir bloğun geç mi geldiğini, hiç mi gelmediğini kendi başlarına anlayabilir.

Türkçede "zaman dilimi" anlamına gelir ama protokollerde slot diye geçer.

## Benzetme

Halı saha rezervasyonu gibi. Sekiz–dokuz arası senin adına ayrılmıştır; o saatte sahaya başkası giremez. Gelmezsen saha o bir saat boş kalır ve dokuzda sıradaki grubun hakkı başlar. Kimse senin kaçırdığın saati sana telafi etmez, saatler de birbirine kaymaz.

## Dikkat

Her slot bir blok demek değildir. Sırası gelen üretici çevrimdışıysa ya da bloğunu zamanında yayamazsa slot boş geçer; zincir o aralıkta blok almaz ama ilerlemesi durmaz. Bu yüzden slot sayısı ile [[epoch-blockchain|dönem]] içindeki blok sayısı her zaman eşit olmaz.

Slot süresi ağa göre değişir ve ağ yükseltmeleriyle de değişebilir; sabit bir değer yoktur.

Karıştırma: akıllı sözleşmelerdeki [[storage-slot|depolama slotu]] bambaşka bir şeydir. Orada slot bir zaman aralığı değil, sözleşmenin kalıcı hafızasındaki numaralı bir gözdür.
