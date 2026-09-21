---
term: "Inference"
tr: "Çıkarım"
aliases: ["model çıkarımı"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Eğitimi bitmiş bir modeli çalıştırıp yeni bir girdiye cevap üretme aşaması; model bu sırada değişmez."
related: [training, model-ai, gpu, quantization]
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

Çıkarım, eğitilmiş bir [[model-ai|modelin]] çalıştırılıp yeni bir girdiye cevap ürettiği andır. [[training|Eğitimin]] karşıtı değil devamıdır: eğitimde parametreler değişir, çıkarımda değişmez. Bir modele soru sorduğun her an yapılan iş çıkarımdır.

## Nasıl çalışır?

Girdi önce modelin işleyebileceği sayılara çevrilir, katmanlardan geçirilir ve çıktı üretilir. Parametrelere dokunulmaz; dolayısıyla model o etkileşimden hiçbir şey öğrenmez. Bir sohbette önceki mesajları "hatırlıyor" gibi görünmesinin sebebi öğrenmesi değil, o mesajların girdinin içine geri konmasıdır.

Maliyet tarafı eğitimden farklıdır. Eğitim bir kez yapılır ve pahalıdır; çıkarım her kullanımda yeniden yapılır, dolayısıyla toplam maliyeti kullanım sayısıyla büyür. Bu yüzden çıkarımı ucuzlatmak ayrı bir mühendislik alanıdır: sayıları daha kaba tutmak ([[quantization|niceleme]]), istekleri toplu işlemek, işe uygun [[gpu|GPU]] seçmek gibi yöntemler kullanılır. Hız ile kalite arasında çoğu zaman bir denge kurulur.

## Dikkat

"Model beni hatırlıyor" ile "model öğreniyor" aynı şey değildir. Hafıza, girdiye eklenen geçmişten gelir ve o geçmiş temizlendiğinde kaybolur. Bir modelin davranışını kalıcı olarak değiştirmek için yeniden eğitim ya da [[fine-tuning|ince ayar]] gerekir.
