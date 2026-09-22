---
term: "Java"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "Kaynak kodu bir sanal makinenin çalıştırdığı bayt koda derlenen, statik tipli ve nesne yönelimli dil."
related: [object-oriented-programming-oop, static-typing, garbage-collection, runtime, compiler, javascript]
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

Java, kaynak kodun doğrudan makine koduna değil, bir sanal makinenin çalıştırdığı ara bir bayt koda derlendiği dildir. Derlenmiş dosya, üstünde Java sanal makinesi (JVM) bulunan her işletim sisteminde aynı şekilde çalışır; "bir kez yaz, her yerde çalıştır" fikri buradan gelir.

Dil [[object-oriented-programming-oop|nesne yönelimlidir]] ve [[static-typing|statik tiplidir]]: her değişkenin tipi derleme anında bellidir ve uyuşmazlıklar program çalışmadan yakalanır. Sözdizimi ayrıntılıdır — küçük bir iş için bile sınıf ve metot iskeleti yazarsın. Bu, kısa betiklerde fazladan yük gibi görünür; yıllarca birden çok ekip tarafından sürdürülen büyük sistemlerde ise kodun ne yaptığının açıkça yazılı olmasını sağlar. Kurumsal sunucu yazılımlarında ve Android uygulamalarında sık görülmesinin bir sebebi budur.

## Nasıl çalışır?

JVM bayt kodu önce yorumlayarak çalıştırır, sık çalışan bölümleri ise çalışma anında makine koduna çevirir. Bunun görünür sonucu şudur: bir Java programı ilk saniyelerde görece yavaştır, ısındıkça hızlanır. Belleği [[garbage-collection|çöp toplayıcı]] yönetir, yani bellek bırakma işini programcı yapmaz; karşılığında toplayıcının ne zaman devreye gireceği üzerinde tam denetimin olmaz.

Aynı sanal makine üstünde Java'dan başka diller de çalışır. Bunlar farklı sözdizimlerine sahiptir ama aynı bayt kod hedefini ve aynı kütüphaneleri paylaşır.

## Dikkat

Java ile [[javascript|JavaScript]], isim benzerliği dışında akraba iki dil değildir: ortamları, tip yaklaşımları ve kullanım alanları ayrıdır. Bu karışıklık o kadar yaygındır ki iş ilanlarında bile görülür.
