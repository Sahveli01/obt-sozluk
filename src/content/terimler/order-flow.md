---
term: "Order Flow"
tr: "Emir akışı"
aliases: ["emir akışı"]
category: defi
subcategory: "MEV ve işlem akışı"
level: orta
short: "Kullanıcılardan gelen işlem emirlerinin bütünü; bu akışın nereye yönlendirildiği başlı başına değer taşır."
related: [private-mempool, block-builder, maximal-extractable-value-mev, solver, dex-aggregator]
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

Order flow, kullanıcıların göndermek üzere olduğu işlemlerin akışıdır. Tek bir işlem sıradan bir şeydir; ama bu akışı toplu hâlde ilk gören taraf, birazdan ne olacağını herkesten önce bilir.

Bu bilgi para eder. Bu yüzden akış yalnızca "olan bir şey" değil, alınıp satılabilen, yönlendirilebilen bir kaynaktır: bir cüzdan, bir arayüz ya da bir RPC sağlayıcısı, kullanıcılarının işlemlerini belirli bir tarafa iletmek karşılığında pay alabilir. Geleneksel finansta aynı düzenin adı "emir akışı için ödeme"dir.

## Benzetme

Otel resepsiyonuna "akşam nerede yemek yiyelim" diye sormak gibi. Cevap ücretsizdir ama bedelsiz değildir: bazı restoranlar resepsiyona gönderdiği müşteri başına pay verir. Yönlendirme senin için gerçekten iyi bir yere de olabilir, en çok pay verene de — masaya oturduğunda ikisi de aynı görünür.

## Nasıl çalışır?

Akış bir dizi duraktan geçer: cüzdan, uygulamanın arayüzü, işlemi ağa ileten uç nokta, herkese açık havuz ya da [[private-mempool|özel bir kanal]], en sonunda [[block-builder|builder]]. Her durakta akışın bir sonraki adımda nereye gideceğine karar verilir ve her karar noktası bir pazarlık noktasıdır.

Ödeme her zaman tek yönlü değildir. Akışı yönlendiren taraf aldığı payın bir kısmını kullanıcıya daha iyi fiyat ya da ücret iadesi olarak geri verebilir; [[solver|solver]] yarışması ve [[dex-aggregator|toplayıcılar]] bu geri dönüşü kuralın parçası hâline getirmeye çalışır.

## Dikkat

Akışı yönlendiren taraf senin çıkarına da çalışabilir, aleyhine de — ve sen çoğu zaman hangisinin olduğunu göremezsin. Elindeki tek veri aldığın sonuçtur; alabileceğin en iyi sonucu görmediğin için karşılaştıracak bir şeyin yoktur.

Pratik karşılığı şudur: bir uygulamanın "şu ağ adresini ekle" dediği kurulum adımı, aynı zamanda işlemlerinin kimin eline gideceğini de belirler. Bu, gizlenen bir şey değildir; sadece kimse sormaz.
