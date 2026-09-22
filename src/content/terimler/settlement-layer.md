---
term: "Settlement Layer"
tr: "Mutabakat Katmanı"
aliases: []
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Üst katmanların sonuçlarının kesinleştiği ve anlaşmazlıkların nihai olarak çözüldüğü katman."
related: [layer-1, execution-layer, data-availability-layer, finality, fraud-proof, validity-proof]
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

Mutabakat katmanı, üst katmanların sonucunu kesinleştiren ve anlaşmazlıkları nihai olarak karara bağlayan roldür. Bir [[rollup|rollup]] işlemlerini kendi içinde çalıştırır, ama "bu gerçekten oldu" diyebilmesi için durumunun özetini aşağıya yazması gerekir. O özetin kaydedildiği ve itirazların sonuçlandığı yer mutabakat katmanıdır.

## Nasıl çalışır?

Üç iş yapar.

**Kayıt.** Üst katmanın durum özetini saklar. Bu özet, üst katmanın o ana kadar olan bütün geçmişini temsil eder; kaydedildiği andan itibaren o katmanın tarihi tek bir yerde sabitlenmiş olur.

**Hakemlik.** Bir özetin doğruluğu tartışmaya açıldığında karar burada verilir: [[fraud-proof|hile ispatı]] kabul edilirse geçersiz özet reddedilir, [[validity-proof|geçerlilik ispatı]] doğrulanırsa sonuç tartışmasız geçerli sayılır. Üst katmanın "hakemi" kendi işleticisi değil, bu katmandaki kurallardır.

**Ortak zemin.** Farklı üst katmanlar birbirini tanımaz, ama hepsi aynı mutabakat katmanına yazdığı için aralarındaki varlık transferi ortak bir referansa dayanabilir.

Bu yüzden bir mutabakat katmanından beklenen nitelik hız değildir: tarafsızlık, sansüre direnç ve [[finality|kesinliğin]] güvenilirliğidir. Ucuz ve hızlı ama kolayca durdurulabilen bir katman bu işe yaramaz.

## Dikkat

Mutabakat, işin yapıldığı yer değil, itirazın bittiği yerdir. Bir üst katmanda işlemin "onaylandı" görünmesi, aşağıda kesinleştiği anlamına gelmez; kullanıcı açısından geri dönülmez nokta genellikle aşağıda oluşur.

İkincisi, her zincir kendi mutabakatını zaten kendisi yapar. [[monolithic-blockchain|Monolitik]] bir ağda bu rol ayrı bir katman gibi görünmez; yürütmeyle aynı bloğun içindedir. Rolü ayrı bir adla anmak ancak katmanlar birbirinden ayrılabildiğinde anlam kazanır.
