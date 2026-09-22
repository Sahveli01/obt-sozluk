---
term: "Request for Quote (RFQ)"
tr: "Fiyat teklifi talebi"
aliases: ["rfq"]
category: defi
subcategory: "MEV ve işlem akışı"
level: orta
short: "Fiyatı bir havuzdan hesaplamak yerine doğrudan bir karşı taraftan istemek; teklifi kabul edersen işlem o fiyattan olur."
related: [intent, solver, market-maker, automated-market-maker-amm, slippage]
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

RFQ'da fiyat hesaplanmaz, **sorulur**. Bir [[automated-market-maker-amm|AMM]]'de fiyatı havuzun içindeki miktarlar belirler ve ne alacağını ancak işlem çalıştığı anda kesin olarak öğrenirsin. RFQ'da ise "şu varlıktan şu kadar almak istiyorum" diye sorarsın; karşı taraf — genelde bir [[market-maker|piyasa yapıcı]] — sana bir fiyat ve bir geçerlilik süresi verir. Kabul edersen işlem o fiyattan olur.

Terim borsalardan gelir ve Türkçede "fiyat teklifi talebi" karşılığıyla kullanılır, ama zincir üstünde çoğunlukla kısaltmasıyla anılır.

## Benzetme

Evini boyatacakken internetteki "metrekare fiyatı" ile ustayı çağırıp keşif yaptırdığında aldığın fiyat arasındaki fark gibi. İnternetteki sayı herkese aynı şeyi söyler, senin evini hiç görmemiştir ve yarın değişebilir. Usta ise duvarlara bakar, sana özel bir rakam verir ve "bu fiyat bu hafta geçerli" der. Bağlayıcıdır ama süresi vardır.

## Nasıl çalışır?

Teklif imzalıdır ve bir son kullanma anı taşır. Kullanıcı imzalı teklifi zincire taşıdığında sözleşme imzayı doğrular ve takası o fiyattan yapar; süre dolmuşsa işlem geçmez.

Fiyat baştan sabitlendiği için kullanıcı tarafında [[slippage|kayma]] ortadan kalkar. Ama risk yok olmaz, yalnızca yer değiştirir: teklifi veren taraf, teklifi verdiği anla işlemin gerçekleştiği an arasında piyasanın aleyhine dönme ihtimalini üstlenir. Bu riski hesaplayıp verdiği fiyata katar — yani sabit fiyatın bir bedeli vardır, sadece görünmez.

## Dikkat

Teklifin nasıl oluştuğunu göremezsin. Ortada karşılaştıracağın bir emir defteri ya da içine bakabileceğin bir havuz yoktur; tek bir tarafın söylediği tek bir rakam vardır. Bu yüzden RFQ kanalları genelde tek başına değil, havuzlardan gelen fiyatlarla birlikte değerlendirilir.

İkinci nokta daha önemlidir: teklif veren tarafın teklif **vermeme** hakkı da vardır. Piyasa sertleştiğinde bu kanallar fiyat vermeyi kesebilir; havuzlar ise kötü fiyatla da olsa çalışmaya devam eder. Yani RFQ'nun iyi fiyatı, tam olarak ona en çok ihtiyaç duyulan anda ortadan kalkabilir.
