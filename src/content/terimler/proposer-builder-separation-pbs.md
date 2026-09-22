---
term: "Proposer-Builder Separation (PBS)"
tr: ""
aliases: ["pbs"]
category: defi
subcategory: "MEV ve işlem akışı"
level: ileri
short: "Bloğun içeriğini kuran tarafla onu zincire önerecek tarafı ayırarak sıralama gücünün tek elde toplanmasını engelleme tasarımı."
related: [block-builder, proposer, validator, maximal-extractable-value-mev, searcher]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Bir blok üretmek aslında iki ayrı iştir: içeriği seçip sıraya dizmek, ve o bloğu zincire önermek. Klasik tasarımda ikisini de aynı taraf yapar. **PBS**, bu iki işi iki ayrı role böler: içeriği [[block-builder|builder]] kurar, önerme hakkı ise sırası gelen [[proposer|proposer]]'da kalır.

Ayrımın sebebi ekonomiktir. Sıralama yetkisi [[maximal-extractable-value-mev|MEV]] yüzünden para eder ve bu para uzmanlaşma ister: akışa erişim, düşük gecikme, sürekli çalışan altyapı. İkisi aynı elde kalsaydı, blok önerme hakkı olan küçük [[validator|doğrulayıcılar]] bu yarışı kaybeder, ağ birkaç büyük oyuncuya doğru sıkışırdı. PBS küçük doğrulayıcının bloğu kendi kurmasını değil, **hazır kurulmuş bloğu satın almasını** mümkün kılar.

Türkçede yerleşik bir karşılığı yok; kısaltmasıyla kullanılır.

## Nasıl çalışır?

Builder'lar birer blok ve o bloğu alması karşılığında proposer'a ödeyecekleri bedeli sunar. Proposer en yüksek ödemeyi seçer.

Kritik ayrıntı şudur: proposer imzaladığı anda bloğun içini **görmez**. Yalnızca içeriğe bağlanan bir özeti ve ödeme miktarını imzalar; içerik ancak imza verildikten sonra açılır. Böylece proposer içeriği görüp kendi lehine değiştiremez, işlemleri ayıklayamaz.

Bu "gör ama alma" sorununu bir yerin çözmesi gerekir. Yazıldığı tarih itibarıyla yaygın uygulama, ayrımı protokolün dışında, builder ile proposer arasında duran güvenilir bir aracı üzerinden kurar; ayrımın protokolün kendi kurallarına gömülmesi üzerinde çalışılan bir yöndür.

## Dikkat

PBS merkezîleşmeyi çözmez, **yerini değiştirir**. Doğrulayıcı tarafındaki yoğunlaşma baskısını azaltırken, blok kurma tarafında yeni bir yoğunlaşma noktası açar: blokların çoğunu az sayıda builder kuruyorsa hangi işlemin zincire gireceğine fiilen onlar karar verir.

İkinci nokta: proposer'ın kolay yolu her zaman hazır bloğu almaktır, çünkü kendi kurduğu blok neredeyse hiçbir zaman daha fazla kazandırmaz. Bu, "isterse kendi kurar" güvencesini kâğıt üstünde bırakır. Ağın bu senaryoya dayanıklı olması, doğrulayıcıların dışarıdan blok alamadıkları anda da kendi bloklarını üretebiliyor olmasına bağlıdır.
