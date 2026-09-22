---
term: "Fuzzing"
tr: ""
aliases: []
category: guvenlik
subcategory: "Güvenlik test yöntemleri"
level: orta
short: "Programı çok sayıda rastgele üretilmiş girdiyle çalıştırıp onu bozan bir örnek arama yöntemi."
related: [echidna, invariant-testing, static-analysis, unit-test, forge]
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

Fuzzing, programa binlerce ya da milyonlarca uydurma girdi verip onu bozacak birini aramaktır. [[static-analysis|Statik analizin]] aksine kod gerçekten çalışır; senaryoyu sen değil makine üretir.

Bulduğu şeyin en değerli tarafı somut olmasıdır: "burada bir sorun olabilir" demez, kodun bozulduğu girdiyi eline verir. O girdiyle hatayı tekrar üretir, düzeltir ve girdiyi kalıcı bir [[unit-test|birim teste]] çevirirsin.

Terimin Türkçe karşılığı yok; sektörde "fuzzing" olarak kullanılıyor.

## Benzetme

Kumandayı eline alan bir çocuk gibi. Tuşlara sırasız ve anlamsız basar; yarım saat sonra televizyon, evdeki kimsenin varlığından haberi olmadığı bir servis menüsünde takılı kalır. Kılavuzu yazan kişi o tuş sırasını hiç düşünmemiştir; çocuk da düşünmemiştir, sadece denemiştir.

## Nasıl çalışır?

Üç parça vardır: girdiyi üreten kısım, programı o girdiyle çalıştıran kısım ve "bozuldu" kararını veren kısım. Bozulma ölçütü genellikle çökme, beklenmedik bir hata ya da senin yazdığın bir koşulun ihlalidir.

Üretim tamamen rastgele değildir. Modern araçlar hangi girdinin kodun daha önce hiç uğranmamış bir bölgesine ulaştığını izler, o girdiyi saklayıp üzerinde küçük oynamalar yaparak aramayı oraya yoğunlaştırır. Sıfır, bir, tipin en büyük değeri gibi uçlar da bilerek sık denenir; hatalar oralarda kümelenir.

Bir karşı örnek bulunduğunda araç onu küçültür: aynı bozulmayı üreten en kısa ve en basit girdiye indirger. Sözleşme tarafında [[echidna|Echidna]] ve [[forge|Forge]] bu işi dışa açık işlevleri çağırarak yapar.

## Örnek

Yatırılan parayı paya çeviren bir işlev düşün. Elle yazılan testlerde binlerce birimlik yatırımlar denenir, hepsi doğru çalışır. Fuzzer ise havuz çok büyükken 1 birimlik yatırımı dener: bölme tam sayıda sıfıra yuvarlanır, kullanıcı parayı yatırır ve karşılığında sıfır pay alır.

## Dikkat

Fuzzing "hata yok" demez. Verdiğin bütçe — süre, koşu sayısı, girdi aralığı — dolduğunda elinde yalnızca "bu bütçede bir karşı örnek bulamadım" cümlesi kalır; bütçe büyüdüğünde yeni bir hata çıkması sık görülür. Bu yüzden sonuç raporlanırken bütçe de raporlanır: "fuzz testleri geçti" cümlesi, kaç koşu yapıldığı yazılmadan bir şey ifade etmez.

İkinci sınır şudur: araç yalnızca bozulma ölçütü olarak tanımladığın şeyi görür. Sözleşme çökmeden, hata vermeden ama yanlış bakiye yazarak da bozulabilir; bunu yakalamak için ne aradığını ayrıca yazman gerekir ([[invariant-testing|değişmez testleri]]).
