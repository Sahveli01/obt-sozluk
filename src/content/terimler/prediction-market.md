---
term: "Prediction Market"
tr: "Tahmin piyasası"
aliases: []
category: defi
subcategory: "Türevler"
level: orta
short: "Bir olayın sonucuna bağlı sözleşmelerin alınıp satıldığı, fiyatın olasılık gibi okunduğu piyasa."
related: [oracle, derivatives, liquidity-pool, market-maker, arbitrage]
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

Tahmin piyasası, bir olayın sonucuna bağlı sözleşmelerin alınıp satıldığı bir piyasadır. Olay net bir soruya bağlanır — bir seçimin sonucu, bir ölçümün belirli bir eşiği aşıp aşmadığı gibi — ve sonuç belli olduğunda sözleşmeler ona göre kapanır.

Buradaki fikir, fiyatın kendisinin bir bilgi taşımasıdır. Doğru çıktığında sabit bir tutar ödeyen bir sözleşmeye insanlar ne kadar ödemeye razıysa, piyasanın o sonuca verdiği ağırlık da o kadardır. Bu yüzden fiyat doğrudan bir olasılık gibi okunur.

## Nasıl çalışır?

Her olası sonuç için ayrı bir token çıkarılır. Sonuç açıklandığında doğru çıkan token sabit bir tutara çözülür, diğerleri sıfıra düşer. Bütün sonuçların fiyatları toplandığında o sabit tutara yaklaşır; aksi hâlde [[arbitrage|arbitraj]] yapan biri aradaki farkı kapatır.

Alım satım ya bir emir defteriyle ya da bir [[liquidity-pool|likidite havuzu]] üzerinden yürür. Sonucun ne olduğunu piyasanın kendisi bilemez; bunu dışarıdan bir çözümleme mekanizması bildirir. Bu iş bir veri kaynağına ([[oracle]]), bir komiteye ya da itiraza açık bir oylamaya bırakılabilir.

## Dikkat

Fiyat bir tahmindir, kehanet değildir. Katılımcıların o anda bildiğinin ve bu bilgiye ne kadar para bağladığının özetidir; hepsi birden yanılabilir. Az sayıda katılımcının olduğu ince bir piyasada birkaç işlem fiyatı ciddi biçimde oynatabilir, dolayısıyla "piyasa şunu söylüyor" cümlesi her piyasa için aynı ağırlıkta değildir.

Sistemin en kırılgan yeri çözümlemedir. Sonucu kimin, hangi kaynağa bakarak ilan ettiği ve itiraz edilip edilemeyeceği, piyasanın çalışıp çalışmadığını belirler. Muğlak yazılmış bir soru — "önemli bir gelişme yaşanırsa" gibi — sonucu tartışmaya açar ve ödemeyi kilitleyebilir.

Bu piyasaların hukuki durumu ülkeden ülkeye değişir; bazı ülkelerde kumar düzenlemesi kapsamında değerlendirilir. Kendi bulunduğun yerdeki durumu kontrol etmek gerekir.
