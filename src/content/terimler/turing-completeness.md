---
term: "Turing Completeness"
tr: "Turing tamlığı"
aliases: ["turing tamlığı"]
category: akilli-sozlesmeler
subcategory: "Temeller"
level: ileri
short: "Bir hesaplama ortamının, yeterli zaman ve bellek verildiğinde hesaplanabilir her işlemi ifade edebilmesi."
related: [ethereum-virtual-machine-evm, gas-limit, loop, deterministic-execution, bitcoin, smart-contract]
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

Bir hesaplama ortamı, yeterli zaman ve bellek verildiğinde hesaplanabilir her işlemi ifade edebiliyorsa Turing tamdır. Ölçüt hızla ya da kullanışlılıkla ilgili değildir; "bu ortamda şu hesabı yazmanın herhangi bir yolu var mı" sorusuna verilen cevaptır.

Pratikte reçete kısadır: koşullu dallanma, [[loop|döngü]] (ya da özyineleme) ve ihtiyaç kadar büyüyebilen bir bellek. Üçü bir aradaysa ortam Turing tamdır.

## Nasıl çalışır?

Bunun bir bedeli vardır ve adı **durma problemidir**: Turing tam bir ortamda, verilen herhangi bir programın bir gün durup durmayacağını önceden söyleyebilen genel bir yöntem yoktur.

Binlerce düğümün aynı kodu çalıştırdığı bir ağ için bu doğrudan bir tehdittir. Kimse "şu sözleşme sonsuz döngüye girer mi" sorusunu çalıştırmadan cevaplayamaz. [[ethereum-virtual-machine-evm|EVM]] sorunu teoriyle değil muhasebeyle çözer: her adım [[gas]] harcar ve her işlemin bir [[gas-limit|gas limiti]] vardır. Bütçe bittiği anda yürütme durur, yapılan değişiklikler geri alınır, ücret yanar.

Bu yüzden EVM'e çoğu zaman "yarı Turing tam" denir. Sınırsız olan dildir; bütçe değildir.

## Dikkat

İki karışıklık yaygındır.

Birincisi, Turing tamlığı bir erdem değil bir tercihtir. [[bitcoin|Bitcoin]]'in betik dili döngü içermez; bu bir eksiklik değil, her betiğin ne kadar süreceğinin baştan bilinmesi için verilmiş bilinçli bir karardır. Daha az ifade gücü, daha kolay öngörülen bir sistem demektir.

İkincisi, Turing tamlığı ile [[deterministic-execution|deterministik yürütme]] aynı şey değildir. Birincisi "bu ortamda ne kadar şey hesaplanabilir" sorusunun cevabıdır; ikincisi "aynı girdiyi veren herkes aynı sonucu bulur mu" sorusunun. Bir ortam Turing tam olup deterministik olmayabilir; tersi de mümkündür.
