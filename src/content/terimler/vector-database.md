---
term: "Vector Database"
tr: "Vektör veritabanı"
aliases: ["vektör veritabanı", "vector db"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Vektörleri saklayan ve bir vektöre en çok benzeyen kayıtları hızlıca bulmak için tasarlanmış veritabanı."
related: [vector, embedding, semantic-search, retrieval-augmented-generation-rag, reranking]
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

Vektör veritabanı, [[embedding]] ile üretilmiş sayı dizilerini saklayan ve "şuna en çok benzeyen kayıtlar hangileri" sorusunu hızlı yanıtlayan bir veri deposudur. Klasik bir veritabanına eşitlik sorarsın: adı şu olan, tarihi şu olan kayıtlar. Vektör veritabanına ise yakınlık sorarsın: bu [[vector|vektöre]] en yakın on kayıt.

## Nasıl çalışır?

Kayıt eklenirken her biri için bir vektör ve yanında asıl içerik saklanır. Sorgu geldiğinde sorgu da aynı modelle vektöre çevrilir ve depoda en yakın komşular aranır.

Bütün kayıtları tek tek karşılaştırmak büyük koleksiyonlarda pahalıya patlar. Bu yüzden vektör veritabanları yaklaşık arama kullanır: vektörleri önceden kümelere ya da katmanlı bir komşuluk yapısına yerleştirir, sorguda yalnızca umut veren bölgeye bakar. Karşılığında küçük bir doğruluk kaybı kabul edilir — en yakın on kayıttan biri gözden kaçabilir.

Vektörlerin yanına genellikle etiketler de yazılır: kaynak, tarih, erişim izni. Böylece "yalnızca bu klasördeki belgeler içinde ara" gibi süzmeler yapılabilir. Erişim izni olmadan kurulan depolar, kullanıcının görmemesi gereken içeriği cevaba taşıyabilir.

## Dikkat

Vektör veritabanı ayrı bir ürün olmak zorunda değildir; yaygın veritabanlarının çoğu benzerlik araması yapabilen eklentiler sunar. Küçük koleksiyonlar için ayrı bir sistem kurmak gereksiz karmaşıklık yaratır.

Bir de şu: benzerlik alakayı garanti etmez. En yakın kayıt yine de işe yaramaz olabilir; bu yüzden sonuçlar çoğu zaman bir [[reranking|yeniden sıralama]] adımından geçirilir.
