---
term: "Parallelism"
tr: "Paralellik"
aliases: ["paralellik"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Birden çok işin gerçekten aynı anda, birden çok işlem birimi üzerinde yürütülmesi."
related: [concurrency, thread, parallel-execution, gpu]
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

Paralellik, birden çok işin gerçekten aynı anda yürütülmesidir. Bunun için birden çok işlem birimi gerekir: çok çekirdekli bir işlemci, birden çok makine ya da binlerce küçük çekirdeği olan bir [[gpu|GPU]].

[[concurrency|Eşzamanlılıkla]] farkı o maddede anlatılıyor; kısaca paralellik bir donanım imkânı, eşzamanlılık bir tasarım biçimidir. Paralel çalışan her program eşzamanlıdır; eşzamanlı her program paralel değildir.

## Nasıl çalışır?

Bir işi paralelleştirebilmek, onu birbirinden bağımsız parçalara bölebilmekle mümkündür. Bir milyon satırlık dosyada kelime saymak kolayca bölünür: her [[thread|iş parçacığı]] bir bölümü sayar, sonunda sayılar toplanır. Buna karşılık her adımı bir öncekinin sonucuna bağlı olan bir hesap bölünemez; ona ne kadar çekirdek verirsen ver, sırayla ilerlemek zorundadır.

İkinci gerçek şudur: hızlanma çekirdek sayısıyla orantılı gitmez. İşin bölünemeyen kısmı ne kadar büyükse eklenen her çekirdeğin katkısı o kadar küçülür. Üstüne parçaları dağıtmanın ve sonuçları birleştirmenin kendi maliyeti vardır; küçük işlerde bu maliyet kazancı yer, iş paralelleştirildiği hâlde daha yavaş biter.

## Dikkat

Blockchain tarafında paralellik doğrudan bir kapasite meselesidir. Bir bloktaki işlemler tek tek, sırayla çalıştırılırsa ağın hızı tek bir çekirdeğin hızına bağlı kalır. [[parallel-execution|Paralel yürütme]] yapan ağlar, birbirinin verisine dokunmayan işlemleri aynı anda çalıştırır; işin zor kısmı hangi işlemlerin gerçekten bağımsız olduğunu önceden bilmektir, çünkü çakışan iki işlemi aynı anda çalıştırmak sonucun sıraya bağlı hâle gelmesi demektir — bir zincirin asla kabul edemeyeceği şey de budur.

Günlük dilde "paralel" kelimesini "daha hızlı" ile eşitleme; paralellik bir imkândır, kazanç ancak iş gerçekten bölünebiliyorsa gelir.
