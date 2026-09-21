---
term: "TPU"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Sinir ağı hesapları için özel olarak tasarlanmış, genel amaçlı olmayan işlemci ailesi."
related: [gpu, cuda, tensor, training, inference]
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

TPU (Tensor Processing Unit), sinir ağlarında en çok tekrarlanan hesaplar için özel olarak tasarlanmış bir işlemci ailesidir. Google tarafından geliştirilmiştir ve yazıldığı tarih itibarıyla esas olarak o şirketin bulut hizmetleri üzerinden kullanılır. Bir ürün adı olduğu için çevrilmez.

Aradaki fark şudur: [[gpu|GPU]] genel amaçlı paralel hesap yapar, geniş bir iş yelpazesini idare eder. TPU ise [[tensor|tensör]] işlemlerinin dar bir kümesine göre kurulmuştur ve o kümenin dışına çıkıldığında esnek değildir.

## Nasıl çalışır?

Bir yongayı tek bir iş türüne göre tasarlamak donanım dünyasının klasik ödünleşimidir: ne kadar özelleşirse birim enerji ve birim alan başına o kadar çok iş çıkarır, karşılığında o kadar dar bir alanda çalışır. TPU'lar bu mantıkla, sinir ağı [[training|eğitiminin]] ve [[inference|çıkarımının]] omurgasını oluşturan büyük çarpma-toplama yığınlarını akıtacak biçimde düzenlenmiştir.

Kullanmak yazılım tarafında da uyum ister. Kodun o donanımı destekleyen kütüphanelerle yazılmış olması gerekir; farklı donanım hedefleri arasında taşınabilirlik hâlâ ek iş çıkarır ve bu, donanım seçiminin teknik olduğu kadar pratik bir karar olmasının sebebidir.

## Dikkat

"TPU mu GPU mu daha iyi" sorusunun genel bir cevabı yoktur. Erişim, maliyet, elindeki kod tabanının uyumu ve iş yükünün şekli belirleyicidir; biri diğerinin yerine geçen bir ürün değildir.

Bu alan hızlı değişiyor. Farklı şirketlerin yapay zekâ için ürettiği özel yongalar var ve tablo yıldan yıla oturmuş değil; donanım kararlarını bu maddeyle değil, güncel bilgiyle vermek gerekir.
