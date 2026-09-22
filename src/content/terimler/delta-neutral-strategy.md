---
term: "Delta-Neutral Strategy"
tr: ""
aliases: []
category: defi
subcategory: "Türevler"
level: ileri
short: "Bir varlıktaki fiyat riskinin ters yönlü ikinci bir pozisyonla götürüldüğü, net yön duyarlılığı sıfıra yakın tutulan düzen."
related: [hedging, funding-rate, perpetual-futures-perps, short-position, liquidation, options]
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

Delta, bir pozisyonun değerinin dayanak varlığın fiyatındaki birim değişime ne kadar duyarlı olduğudur. Varlığı doğrudan tutmak tam duyarlılıktır; aynı büyüklükte ters bir pozisyon bunun işaretini çevirir. İkisi bir arada tutulduğunda net duyarlılık sıfıra yaklaşır — delta nötr denen durum budur.

Amaç kazanmak değil, bir riski devre dışı bırakmaktır. Elinde tutmak istediğin bir şey varsa (bir getiri kaynağı, bir varlık) ama fiyatının yönüne bağlı kalmak istemiyorsan, fiyat bacağı ayrıştırılır. "Delta" opsiyon fiyatlamasından gelen bir terimdir ve Türkçeye çevrilmeden kullanılır.

## Nasıl çalışır?

Düzen iki bacaklıdır: bir tarafta varlık tutulur, diğer tarafta aynı büyüklükte [[short-position|kısa pozisyon]] taşınır. Fiyat yukarı giderse birinci bacak kazanır, ikincisi aynı kadar kaybeder; aşağı giderse tersi olur. Net etki yaklaşık sıfırdır.

"Yaklaşık" kelimesi önemlidir. Delta sabit kalmaz: fiyat hareket ettikçe, bacaklardan biri büyüdükçe ya da [[options|opsiyon]] içeren düzenlerde vade yaklaştıkça duyarlılık kayar. Nötrlüğü korumak, pozisyonları düzenli olarak yeniden dengelemeyi gerektirir. Her dengeleme de bir işlem, yani bir maliyettir.

## Dikkat

"Nötr" kelimesi **fiyat riskinin azaltıldığı** anlamına gelir; **risksiz** anlamına gelmez. Ortadan kalkan tek risk fiyat yönüdür, geri kalanı yerinde durur:

- **Taşıma maliyeti:** kısa bacak süresiz sözleşmeyle taşınıyorsa [[funding-rate|funding]] ödemeleri birikir ve yön doğru olsa bile bu maliyet işler.
- **Akıllı sözleşme riski:** iki bacak farklı protokollerde duruyorsa ikisinin de kodu riskin parçasıdır.
- **Karşı taraf riski:** kısa bacağı taşıyan borsa ya da protokol yükümlülüğünü yerine getiremezse hedge tarafı boşa düşer.
- **Eşzamanlılık:** bacaklar aynı anda kapanamayabilir. Biri [[liquidation|tasfiye]] olur ya da bir bacağın likiditesi kurursa geriye tek taraflı, tamamen açık bir pozisyon kalır — üstelik bunu en çok istemeyeceğin anda.

Dengesi bozulmuş bir "nötr" düzen, kurulduğunda kaldırılmış sayılan riski sessizce geri getirir.
