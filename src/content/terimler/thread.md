---
term: "Thread"
tr: "İş parçacığı"
aliases: ["iş parçacığı"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Bir programın içinde, aynı belleği paylaşarak bağımsız ilerleyen yürütme hattı."
related: [concurrency, parallelism, async-await, operating-system, memory-management]
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

İş parçacığı, bir programın içinde bağımsız ilerleyen bir yürütme hattıdır. Program başladığında bir tane vardır; ihtiyaç oldukça yenileri açılır. Aynı programın iş parçacıkları aynı belleği paylaşır — asıl güç de asıl tehlike de buradan gelir.

## Nasıl çalışır?

İş parçacıklarını [[operating-system|işletim sistemi]] yönetir. Hangisinin ne kadar çalışacağına o karar verir; birini ortasında durdurup ötekine geçebilir. Çekirdek sayısı yeterliyse bunlar gerçekten [[parallelism|paralel]] çalışır, yeterli değilse sırayla ve iç içe ([[concurrency|eşzamanlılık]]).

Paylaşılan [[memory-management|bellek]], iki iş parçacığının aynı veriyi aynı anda değiştirmesi ihtimalini doğurur. Klasik örnek bir sayaçtır: ikisi de değeri okur, bir artırır, geri yazar. İkisi de eski değeri okuduysa sayaç iki değil bir artar. Bu tür hatalar her çalıştırmada ortaya çıkmadığı için bulunması zordur; çözüm, paylaşılan veriye erişimi kilitlerle sıraya sokmak ya da veriyi hiç paylaşmamaktır.

İş parçacığı bedava da değildir. Her birinin kendi yığını ve işletim sistemi tarafında bir kaydı vardır; on binlerce eşzamanlı isteği iş parçacığıyla karşılamak pahalıya gelir. Bu yüzden pek çok dil daha hafif alternatifler sunar: [[async-await|async/await]] ile yürüyen görevler, Go'daki goroutine'ler gibi.

## Dikkat

İş parçacığı ile süreç (process) aynı şey değildir. Süreçler belleği paylaşmaz; bu yüzden birbirlerini bozmaları zordur ama haberleşmeleri pahalıdır. İş parçacıkları paylaşır; haberleşmeleri bedavadır ama birbirlerinin verisini bozabilirler. Hangi bölünmeyi seçeceğin, işlerin ne kadar veri paylaştığına bakar.

Bir de kelimenin ikinci hayatını unutma: sosyal medyada arka arkaya gönderilen ileti dizisine de "thread" denir. Burada anlatılan o değil.
