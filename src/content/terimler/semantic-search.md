---
term: "Semantic Search"
tr: "Anlamsal arama"
aliases: ["anlamsal arama", "semantik arama"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Kelime eşleşmesi yerine anlam yakınlığına göre sonuç bulan arama yöntemi."
related: [embedding, vector-database, retrieval-augmented-generation-rag, reranking, vector]
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

Anlamsal arama, sorguyu kelime kelime eşleştirmek yerine anlamına göre karşılaştıran arama biçimidir. Klasik arama "bu kelimeyi içeren belgeleri" getirir; anlamsal arama "bunu kasteden belgeleri" getirir. Aradaki fark, sorgudaki kelimelerin belgede hiç geçmediği durumlarda ortaya çıkar.

## Benzetme

Adını bilmediğin bir nesneyi tarif ederek istemek gibi: "ucu kıvrık, kâğıtları bir arada tutan küçük metal şey." Karşındaki kişi o an "ataş" kelimesini duymamıştır bile, yine de ne istediğini anlar. Kelime eşleştiren bir arama bu cümleyle hiçbir şey bulamazdı.

## Nasıl çalışır?

Aranacak metinler önceden parçalara bölünür, her parça [[embedding|anlam temsiline]] çevrilir ve bir [[vector-database|vektör veritabanına]] yazılır. Sorgu geldiğinde o da aynı modelle temsile çevrilir; sistem en yakın parçaları döndürür.

Uygulamada çoğu sistem iki aramayı birden kullanır: kelime eşleştiren klasik aramanın ve anlamsal aramanın sonuçları birleştirilir. Sebebi basit — özel isim, ürün kodu, hata mesajı gibi birebir eşleşmesi gereken şeylerde kelime araması daha güvenilirdir. Birleştirilen sonuçlar genelde bir [[reranking|yeniden sıralama]] adımıyla elenir.

Bulunan parçalar kullanıcıya doğrudan gösterilebileceği gibi, bir modele bağlam olarak da verilebilir; [[retrieval-augmented-generation-rag|RAG]] mimarisinin arama adımı tam olarak budur.

## Dikkat

Anlamsal arama her durumda üstün değildir. "Benzer" ile "doğru" aynı şey olmadığı için, sorguya benzeyen ama işe yaramayan sonuçlar üst sıraya çıkabilir; hiç sonuç bulamamak yerine alakasız bir sonuç döndürmesi bundandır.

Metni parçalara bölme biçimi de sonucu doğrudan etkiler: cümlenin ortasından kesilmiş bir parça tek başına anlamını kaybeder ve hiçbir sorguya düzgün eşleşmez.
