---
term: "Quantization"
tr: ""
aliases: ["nicemleme"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Modelin içindeki sayıları daha az basamakla saklayarak yer ve işlem gücü kazanma yöntemi."
related: [local-llm, distillation, weights, parameters, inference]
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

Quantization, bir modelin içindeki sayıları daha az basamakla saklama işlemidir. Modelin öğrendiği her şey [[weights|ağırlık]] denen sayılarda durur; bu sayılar yüksek hassasiyetle tutulabileceği gibi daha kaba bir ölçekle de tutulabilir. Kabalaştırınca model daha az yer kaplar ve daha hızlı çalışır, karşılığında bir miktar doğruluk kaybedilir. Türkçede "nicemleme" karşılığı sinyal işlemede kullanılır, ama yapay zekâ konuşulurken terim İngilizce hâliyle geçer.

## Benzetme

Sıcaklığı tam sayı gösteren bir termometre gibi. 21,4 ile 21,6 dereceyi ikisini de "21" diye gösterir; ekran sadeleşir, kayıt küçülür ve günlük hayatta hiçbir şey değişmez. Ama hassas bir ölçüm yapman gerektiğinde bu yuvarlamanın bedelini ödersin.

## Nasıl çalışır?

Ağırlıklar eğitimden çıktığında görece geniş sayı biçimleriyle saklanır. Quantization bunları 8 bit, 4 bit gibi daha dar biçimlere indirir: sayı aralığı ölçeklenir ve her ağırlık o aralıktaki en yakın basamağa yuvarlanır.

Ne kadar aşağı inilirse kazanç da kayıp da büyür. Bu yüzden modelin her parçasına aynı davranılmaz; bazı katmanlar daha hassas tutulur. Kazanç yalnızca disk yeri değildir: daha küçük sayılar bellekten daha hızlı okunur ve hızın asıl kaynağı budur.

## Dikkat

Kayıp her işte aynı ölçüde görünmez. Sohbet gibi esnek işlerde fark edilmeyebilir; uzun akıl yürütme, kod üretme ve nadir bilgi gerektiren işlerde daha erken ortaya çıkar.

Quantization modeli küçültmez, sıkıştırır: [[parameters|parametre]] sayısı aynı kalır, her parametrenin kapladığı yer azalır. Modelin kendisini küçültmek istiyorsan [[distillation|damıtma]] ayrı bir yoldur. Bu yöntem, bir modeli kendi makinende çalıştırmanın — yani [[local-llm|yerel LLM]] kurmanın — en yaygın şartıdır.
