---
term: "Transformer"
tr: ""
aliases: ["transformer mimarisi"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Metnin bütün parçalarına aynı anda bakıp birbirlerine ne kadar dikkat edeceklerini hesaplayan sinir ağı mimarisi."
related: [attention-mechanism, self-attention, large-language-model-llm, token-ai, neural-network, embedding]
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

Transformer, bugünkü dil modellerinin altında yatan sinir ağı mimarisidir. Temel fikri şudur: metni baştan sona tek tek okumak yerine, parçaların tamamına aynı anda bakıp her parçanın diğerlerinden hangilerine ne kadar önem vereceğini hesaplamak. Bu önem verme işini [[attention-mechanism|dikkat mekanizması]] yapar; mekanizma bir dizinin kendi parçaları arasında çalıştırıldığında [[self-attention]] adını alır. Transformer da self-attention katmanlarını üst üste yığarak kurulur. Bir mimarinin özel adı olduğu için Türkçeye çevrilmeden kullanılır.

## Benzetme

Otomobil üreticilerinin ortak platformları gibi. Aynı şasinin üstüne sedan da kurulur, arazi aracı da, ticari araç da; gövde değişir, altyapı aynı kalır. Transformer da metin, görüntü ve ses için kurulan farklı modellere aynı altyapıyı sağlar.

## Nasıl çalışır?

Girdi önce [[token-ai|token]] parçalarına ayrılır, her parça sayı dizisine — [[embedding|anlam temsiline]] — çevrilir. Sıra bilgisi ayrıca eklenir, çünkü mimari kendiliğinden "önce–sonra" bilmez.

Sonra aynı yapı defalarca tekrarlanır: her katmanda parçalar birbirine bakar, topladıkları bilgiyi kendi temsillerine katar ve bir sonraki katmana verir. Katmanlar ilerledikçe temsiller "hangi kelime" olmaktan çıkıp "bu cümlede ne iş görüyor"a yaklaşır. En sonda model, sıradaki parça için bir olasılık dağılımı üretir.

Bütün parçalara aynı anda bakılabildiği için eğitim paralelleştirilebilir; mimarinin yaygınlaşmasının başlıca sebebi budur.

## Dikkat

Transformer bir model değil, model kurmakta kullanılan bir şablondur. İki modelin aynı mimariyi kullanması aynı davranacakları anlamına gelmez; sonucu veri, ölçek ve eğitim aşamaları belirler.

Mimarinin adının geçtiği her yerde aynı şey kastedilmez de: kodlayıcı ve kod çözücü bölümlerinden yalnızca birini kullanan çeşitleri vardır ve bunlar farklı işlere uygundur.
