---
term: "Large Language Model (LLM)"
tr: "Büyük dil modeli"
aliases: ["llm", "büyük dil modeli"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: baslangic
short: "Çok büyük miktarda metinle eğitilmiş, önündeki metnin devamını tahmin ederek çalışan yapay zekâ modeli."
related: [transformer, token-ai, context-window, pretraining, small-language-model-slm, hallucination]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Büyük dil modeli (LLM), çok büyük miktarda metinle eğitilmiş ve aslında tek bir iş yapan bir programdır: önündeki metnin devamında hangi parçanın geleceğini tahmin etmek. Soru yanıtlamak, kod yazmak, özetlemek — hepsi bu tek yeteneğin üstüne kurulur. Model metni [[token-ai|token]] denen parçalara böler, bir sonraki parçayı seçer, seçtiğini girdisine ekler ve devam eder. Yazıldığı tarih itibarıyla yaygın kullanılan dil modelleri [[transformer]] mimarisine dayanır.

## Benzetme

Çok okumuş bir arkadaşına bir cümlenin yarısını söyleyip devamını istediğini düşün. Hiçbir yere bakmaz, hiçbir şey hatırlamaya çalışmaz; sadece böyle cümlelerin genelde nasıl sürdüğüne dair güçlü bir sezgisi vardır. Kulağa doğru gelen devam ise her zaman doğru değildir.

## Dikkat

Model bir veritabanı değildir: cevabı bir yerden çekip getirmez, üretir. Bu yüzden emin bir dille yanlış bilgi verebilir; buna [[hallucination|halüsinasyon]] denir.

Bir seferde ancak belli bir miktar metni görebilir; bu sınır [[context-window|bağlam penceresi]] olarak geçer. Büyük olmak da her işte iyi olmak demek değildir; dar bir iş için odaklı bir [[small-language-model-slm|küçük dil modeli]] çoğu zaman yeter.
