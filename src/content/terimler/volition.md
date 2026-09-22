---
term: "Volition"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "Kullanıcının her işlem için verinin ana zincire mi yoksa zincir dışına mı yazılacağını kendisinin seçtiği melez tasarım."
related: [validium, zk-rollup, data-availability, rollup, transaction-fee]
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

[[zk-rollup|ZK rollup]] verisini ana zincire yayımlar: pahalıdır, güvencesi yüksektir. [[validium|Validium]] veriyi dışarıda tutar: ucuzdur, veriyi saklayan gruba bağımlıdır. Volition bu ikisi arasında baştan seçim yapmak yerine, seçimi tek tek işlemlere bırakır. Aynı sistem her iki modu birlikte yürütür. Terim bir tasarım adıdır ve Türkçeye çevrilmez.

## Benzetme

Postaneye gittiğinde önüne iki seçenek konur: adi posta ucuzdur, gönderin gider ama elinde hiçbir şey kalmaz; iadeli taahhütlü pahalıdır, buna karşılık gönderinin teslim edildiğini kanıtlayan bir belge alırsın. Hangisini seçeceğin zarfın içindekine bağlıdır — tebrik kartı ile mahkemeye verilecek evrak aynı yoldan gitmez. Volition da bu seçimi her gönderide yeniden sorar.

## Nasıl çalışır?

Yürütme ve kanıt tarafı iki modda da aynıdır: işlemler çalıştırılır ve bir geçerlilik kanıtı ana zincire gönderilir. Değişen tek şey verinin nereye yazıldığıdır.

Kullanıcı işlemini gönderirken modunu belirtir. Zincire yazılan mod daha yüksek bir [[transaction-fee|işlem ücreti]] taşır, çünkü ana zincirin blok alanını kullanır. Dışarıda tutulan mod ucuzdur ve verinin saklanmasını bir gruba bırakır.

## Dikkat

Seçim, o işlemin güvenlik profilini kalıcı olarak belirler. Ucuz modda yapılmış bir transferin verisi kaybolursa, o bakiyeyi ana zincirde ispatlayamazsın — sonradan pahalı moda geçmek geriye dönük bir koruma sağlamaz.

Pratik kural basittir: taşınan değer arttıkça ve bekleme süresi uzadıkça, [[data-availability|verinin]] ana zincire yazıldığı mod daha makul hâle gelir. Günlük, küçük ve hızlı akışlarda ucuz mod anlamlıdır.

Bir de eksik bilgi sorunu vardır: karşı tarafın hangi modu seçtiğini bilmezsen, elindeki bakiyenin hangi güvenceye dayandığını da tam bilemezsin. İyi bir arayüz bunu gizlemez, gösterir.
