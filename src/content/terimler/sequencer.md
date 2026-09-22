---
term: "Sequencer"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "Bir rollup'a gelen işlemleri toplayıp sıraya dizen ve çalıştıran taraf; sırayı belirler, kuralları değiştiremez."
related: [rollup, decentralized-sequencer, forced-withdrawal-escape-hatch, maximal-extractable-value-mev, mempool]
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

Bir [[rollup|rollup'ta]] işlemler ana zincire tek tek gitmez. Önce sıralayıcıya gider: işlemleri toplayan, hangisinin hangi sırayla çalışacağına karar veren ve çalıştırıp yeni durumu üreten taraftır. Çoğu rollup işe tek bir sıralayıcıyla başlar. Terim Türkçeye çevrilmeden kullanılır; "sıralayıcı" karşılığı açıklama olarak yaygındır.

## Benzetme

Bir kurumun girişinde sıra numarası dağıtan görevli. Kimin önce, kimin sonra gireceğini o belirler; istersen seni bekletir, isterse birini öne alır, hatta numaranı hiç çağırmayabilir. Ama içerideki memurun vereceği kararı değiştiremez: mevzuata aykırı bir işlemi "sıraya koydum" diye geçerli kılamaz.

## Nasıl çalışır?

Kullanıcı işlemini sıralayıcıya gönderir. Sıralayıcı onu saniyeler içinde sıraya alır ve sana bir ön onay verir — hızlı hissettiren şey budur. Ardından işlemleri yığınlar hâlinde ana zincire yayımlar ve yeni durumun doğruluğu ya bir kanıtla ya da itiraz süresiyle güvenceye alınır.

Sıra üzerindeki yetki bir gelir kaynağıdır: işlem ücretleri ve sıralamadan doğan [[maximal-extractable-value-mev|MEV]] sıralayıcıya akar.

## Dikkat

Merkezi bir sıralayıcı **yapabilir:** sırayı kendi lehine kurmak, senin işlemini bekletmek ya da hiç almamak, ağı tamamen durdurmak. Bunlar küçük riskler değildir; ön onay verdiği hâlde işlemi yığına koymadan fikir değiştirebileceği pencereler de buna dâhildir.

**Yapamadığı** tek bir şey vardır, ama can alıcıdır: geçersiz bir durumu kabul ettirmek. Senin imzan olmadan paranı harcayamaz, bakiyeleri keyfine göre değiştiremez. Çünkü sonucu ana zincirde bir kanıt ya da bir itiraz mekanizması denetler.

Bu ayrım, sansür riskini ortadan kaldırmaz — yalnızca hırsızlık riskinden ayırır. Sansüre karşı çare ayrı bir mekanizmadır: [[forced-withdrawal-escape-hatch|zorunlu çıkış]].
