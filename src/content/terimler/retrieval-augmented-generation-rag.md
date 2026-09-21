---
term: "Retrieval-Augmented Generation (RAG)"
tr: ""
aliases: ["rag"]
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Soruyla ilgili belgeleri arayıp prompt'a ekleyerek modelin cevabını kendi verine dayandırma."
related: [chunking, reranking, knowledge-base, embedding, vector-database, semantic-search]
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

Bir model yalnızca eğitildiği veriyi bilir ve o verinin bir [[knowledge-cutoff|kesme tarihi]] vardır; senin şirket içi belgelerini, dünkü kararlarını, kendi ürün dokümanını hiç görmemiştir. RAG bu boşluğu yeniden eğitmeden kapatır: soru geldiğinde önce senin kaynaklarında arama yapılır, bulunan parçalar [[prompt]]'a eklenir ve modelden cevabı bu parçalara dayandırarak yazması istenir. Kısaltma İngilizce olduğu için terim de İngilizce kullanılır.

## Benzetme

Duruşmadaki avukat gibi: hafızasından konuşmaz, dosyadan alıntılar. Cevabın gücü hatırlama kapasitesine değil, dosyanın doğru sayfasını açabilmesine bağlıdır.

## Nasıl çalışır?

İki ayrı aşaması var. **Hazırlık** aşamasında belgeler toplanır ([[knowledge-base|bilgi tabanı]]), yönetilebilir parçalara bölünür ([[chunking]]), her parça için anlamını sayıya çeviren bir [[embedding]] hesaplanır ve bunlar bir [[vector-database|vektör veri tabanında]] saklanır.

**Sorgu** aşamasında soru da aynı yöntemle vektöre çevrilir, anlamca en yakın parçalar getirilir ([[semantic-search|anlamsal arama]]), gerekirse daha dikkatli bir modelle yeniden sıralanır ([[reranking]]) ve en iyi birkaçı prompt'a konur. Modelden genellikle hem cevap hem de hangi parçaya dayandığı istenir; kaynak göstermek RAG'in en değerli yan ürünüdür.

## Dikkat

RAG halüsinasyonu bitirmez, azaltır. Getirilen parça alakasızsa ya da soru belgelerde hiç cevaplanmıyorsa model yine uydurabilir ([[hallucination]]); "bilmiyorum" demesine açıkça izin vermek gerekir.

Kurulan sistemlerdeki hataların çoğu modelde değil, getirme adımındadır. Bir RAG sistemi kötü cevap veriyorsa önce şunu ölç: doğru parça hiç getirildi mi? Getirilmediyse sorun prompt'ta değil, aramadadır.
