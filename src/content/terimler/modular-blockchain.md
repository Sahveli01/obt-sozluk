---
term: "Modular Blockchain"
tr: "Modüler blok zinciri"
aliases: []
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Bir zincirin işlerini tek yazılıma yığmak yerine yürütme, konsensüs, mutabakat ve veri diye ayrı katmanlara dağıtan tasarım."
related: [monolithic-blockchain, execution-layer, consensus-layer, settlement-layer, data-availability-layer, rollup]
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

Modüler blok zinciri, bir zincirin yapması gereken işleri tek bir sistemde toplamak yerine ayrı katmanlara dağıtan tasarımdır. İşler dörde ayrılır: [[execution-layer|yürütme]] işlemleri çalıştırır, [[consensus-layer|konsensüs]] sıraya karar verir, [[settlement-layer|mutabakat]] sonucu kesinleştirip anlaşmazlığı bitirir, [[data-availability-layer|veri erişilebilirliği]] ise verinin gerçekten yayımlandığını güvence altına alır.

Bir proje bu dördünü aynı yerden almak zorunda değildir. Yürütmeyi kendi üstlenip sırayı, mutabakatı ve veriyi başka zincirlerden almak mümkündür — "modüler" derken kastedilen bu seçim serbestliğidir.

## Benzetme

Bir inşaatı düşün: kaba yapıyı bir ekip, elektriği başka bir ekip, sıhhi tesisatı bir başkası yapar. Her ekip kendi işinde uzmanlaşır ve biri değiştiğinde bina baştan yapılmaz. Karşılığında biri geciktiğinde diğerleri bekler, üstelik ekipler arasındaki koordinasyon başlı başına bir iş hâline gelir.

## Nasıl çalışır?

Bugün en yaygın modüler yapı [[rollup|rollup]]'tır: yürütmeyi kendisi yapar, verisini ve mutabakatını başka bir zincire bırakır. Daha ileri giden kurulumlar veriyi mutabakattan da ayırır ve her rolü ayrı bir ağdan alır.

Kazanç uzmanlaşmadır. Yürütme katmanı hızlanmak için donanım beklentisini yükseltebilirken, veri katmanı aynı anda olabildiğince çok node'un katılabilmesine odaklanabilir; tek katmanda bu iki hedef birbirini sıkıştırır.

[[monolithic-blockchain|Monolitik]] tasarımla arasındaki fark keskin bir çizgi değil, bir yelpazedir: üstünde üst katmanlar çalışan bir zincir, kendi rolünü bırakmasa bile modüler bir yığının parçası hâline gelir.

## Dikkat

Modüler olmak kendiliğinden daha iyi değildir. Katman sayısı arttıkça "bu bozulursa ne olur" sorusunun cevabı da çoğalır: veri katmanı veriyi vermezse, mutabakat katmanı durursa, aradaki mesajlaşma kesilirse ne olacağını ayrı ayrı sormak gerekir.

Kazanç esneklik ve uzmanlaşma, bedel ise bağımlılıkların gözden kaybolmasıdır. Kullanıcı tek bir arayüz görür; oysa arkada birbirine güvenen birkaç ayrı sistem vardır.
