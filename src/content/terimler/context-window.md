---
term: "Context Window"
tr: "Bağlam penceresi"
aliases: ["bağlam penceresi", "context length"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: baslangic
short: "Modelin bir seferde görebildiği toplam token miktarı; talimatın, sohbetin ve cevabın birlikte sığması gereken alan."
related: [token-ai, large-language-model-llm, context-compaction, memory-ai, retrieval-augmented-generation-rag]
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

Bağlam penceresi, bir modelin tek seferde görebildiği metnin sınırıdır. Sistem talimatı, konuşmanın önceki mesajları, yapıştırdığın belge ve modelin üreteceği cevap — hepsi aynı pencereye sığmak zorundadır. Sınır [[token-ai|token]] cinsinden sayılır ve modelden modele değişir. Pencerenin dışında kalan hiçbir şey model için mevcut değildir.

## Benzetme

Ders anlatan birinin tahtası gibi. Tahtada ne yazıyorsa onu kullanabilir; silinen şey hafızasına geçmez, yok olur. Tahta dolduğunda yeni bir şey yazmak için en eskisini silmek gerekir ve silinen bilgi, yeniden yazılmadıkça geri gelmez.

## Dikkat

Pencere dolduğunda genellikle konuşmanın en eski kısmı düşer. Model "unuttum" demez; o kısım hiç olmamış gibi davranır. Uzun sohbetlerde başta verdiğin talimatın bir yerden sonra tutulmamasının sebebi çoğu zaman budur. [[context-compaction|Bağlam sıkıştırma]] gibi yöntemler tam da bunun için vardır.

Büyük pencere ile hafıza da aynı şey değildir. Kalıcı bilgi için verinin pencere dışında saklanıp gerektiğinde yeniden içeri konması gerekir; [[memory-ai|hafıza]] ve [[retrieval-augmented-generation-rag|RAG]] bu işi yapar. Pencereyi ağzına kadar doldurmak da her zaman iyi sonuç vermez: ilgisiz metin cevabın kalitesini düşürebilir.
