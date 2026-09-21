---
term: "Clustering"
tr: "Kümeleme"
aliases: ["kümeleme"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Etiket olmadan, birbirine benzeyen örnekleri aynı gruba toplama işi."
related: [unsupervised-learning, dataset, feature, embedding]
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

Kümeleme, elinde doğru cevap yokken örnekleri benzerliklerine göre gruplara ayırmaktır. En bilinen [[unsupervised-learning|denetimsiz öğrenme]] işidir. Çıktı, her örneğin hangi gruba düştüğüdür; grupların adı ya da anlamı çıktının parçası değildir.

## Benzetme

Tanımadığın insanlarla dolu bir salona girdiğini düşün. Kimse sana kimin kim olduğunu söylemiyor. Yine de kimin kiminle konuştuğuna ve nerede durduğuna bakarak "şurası bir grup, şurası başka bir grup" dersin. Gruplara adı sen koyarsın ve yanılabilirsin; üstelik salondakiler böyle bir ayrım yaptıklarının farkında bile değildir.

## Nasıl çalışır?

Her şey "benzerlik" tanımıyla başlar. Örnekler [[feature|özniteliklerden]] oluşan birer sayı listesine çevrilir ve iki örneğin yakınlığı bu listeler üzerinden ölçülür. Metin ya da görüntü söz konusuysa bu listeler genellikle [[embedding|gömme]] vektörleridir.

Yöntemler birbirinden hangi soruyu sorduklarıyla ayrılır. Bir kısmı önceden kaç grup istediğini sorar ve her örneği mutlaka bir gruba koyar. Bir kısmı yoğunluğa bakar; kalabalık bölgeleri grup sayar, seyrek bölgelerde kalan noktaları hiçbir gruba koymaz. Bir kısmı da grupları iç içe bir ağaç olarak çıkarır ve ağacı nereden keseceğini sana bırakır.

Hangi özniteliğin kullanıldığı ve ölçeklerin nasıl ayarlandığı sonucu baştan aşağı değiştirir. Aynı [[dataset|veri kümesi]], farklı seçimlerle farklı gruplar verir; bu bir hata değil, yöntemin doğasıdır.

## Dikkat

Kümeleme her zaman bir sonuç üretir; gerçekte grup yapısı olmayan veriden de grup çıkarır. Çıkan kümelerin anlamlı olup olmadığı, verinin dışından gelen bilgiyle kontrol edilmelidir.

Grup sayısını seçmek de teknik değil, çoğu zaman amaca bağlı bir karardır. "Doğru" sayı verinin içinde yazmaz.
