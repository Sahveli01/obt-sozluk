---
term: "Reranking"
tr: "Yeniden sıralama"
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: ileri
short: "Aramanın getirdiği aday parçaları, ikinci ve daha dikkatli bir modelle yeniden sıralama."
related: [retrieval-augmented-generation-rag, chunking, semantic-search, embedding, evals]
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

Vektör araması hızlıdır ama kabadır: soruya benzeyen parçaları getirir, sorunun cevabını içeren parçaları değil. İkisi çoğu zaman aynı şey olmaz. Reranking, arama ile cevap üretimi arasına ikinci bir süzgeç koyar: ilk aramadan gelen aday listesi daha ağır ve daha dikkatli bir modelden geçirilir, alaka sırasına göre yeniden dizilir ve [[prompt]]'a yalnızca en üsttekiler konur.

## Benzetme

Ev ararken önce filtreyle daraltıp sonra birkaçını gezmek gibi. Filtre ucuzdur ve kabadır: fiyat, oda sayısı, semt. Gezmek pahalıdır ama asıl kararı o verdirir — ışık nasıl giriyor, sokak ne kadar gürültülü. Yüzlerce ilanı tek tek gezemezsin; filtreden geçen beşini gezersin.

## Nasıl çalışır?

İki aşamalı aramanın mantığı şudur. Birinci aşama **geri çağırma** için ayarlanır: geniş getir, doğru parçayı kaçırma, gereksizleri getirmiş olmak sorun değil. İkinci aşama **kesinlik** için çalışır: soru ile aday metni aynı anda okuyup ikisi arasındaki alakaya puan veren bir model kullanılır.

Aradaki teknik fark önemli. [[semantic-search|Anlamsal arama]] soruyu ve belgeleri birbirinden bağımsız olarak vektöre çevirir ([[embedding]]) — bu yüzden çok hızlıdır, milyonlarca parçada çalışır. Reranker ise her aday için soruyla birlikte baştan çalışır; çok daha isabetlidir ama çok daha pahalıdır. Bu yüzden binlerce değil, onlarca aday üzerinde kullanılır.

## Dikkat

Reranking bir kurtarma operasyonu değildir. Kötü bir [[chunking|parçalamayı]] düzeltmez, eksik bir bilgi tabanını tamamlamaz: aday listesinde olmayan parçayı yukarı taşıyamaz. Önce getirmenin doğru parçayı hiç bulup bulmadığına bak.

Her istek için ekstra bir model çalıştığından gecikme ve maliyet ekler. Faydasını varsayma, ölç: aynı soru kümesinde reranker'lı ve reranker'sız isabet oranını karşılaştır ([[evals|eval]]).
