---
term: "Overfitting"
tr: "Aşırı öğrenme"
aliases: ["asiri ogrenme"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Modelin eğitim verisini ezberleyip verideki tesadüfleri de kural sanması; yeni veride başarısı düşer."
related: [underfitting, training-data, dataset, model-ai, hyperparameter]
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

Overfitting, bir [[model-ai|modelin]] eğitildiği veriyi fazla iyi öğrenmesidir. Kulağa iyi geliyor ama değil: model, verideki gerçek örüntüyle o veriye özgü tesadüfleri birbirinden ayıramaz, ikisini de aynı ciddiyetle öğrenir. Sonuç, eğitim verisinde neredeyse kusursuz, daha önce görmediği veride vasat bir modeldir.

## Benzetme

Köpeğe "otur" komutunu hep aynı odada, hep aynı kişinin aynı ses tonuyla öğretmek gibi. Köpek komutu değil, o odayı ve o tonu öğrenmiştir. Sokakta başka biri seslendiğinde ortada öğrenilmiş hiçbir şey kalmaz.

## Nasıl çalışır?

Bir model ne kadar çok [[parameters|parametreye]] sahipse ve eğitim ne kadar uzun sürerse veriyi o kadar ince ayrıntısına kadar takip edebilir. Veri az ya da tek düzeyse takip edilecek ayrıntıların bir kısmı zaten gürültüdür; model onları da öğrenir.

Bunu fark etmenin yolu veriyi bölmektir: bir kısmıyla eğitilir, bir kısmı modele hiç gösterilmeden sınama için saklanır. Eğitim verisindeki hata düşmeye devam ederken saklanan veridekinin yükselmeye başladığı an, ezberin başladığı andır. Karşı tedbirler bellidir: daha çok ve daha çeşitli [[training-data|eğitim verisi]], daha küçük bir model, hata yükselmeye başlayınca eğitimi durdurmak ve eğitim sırasında modelin bir bölümünü rastgele devre dışı bırakmak gibi düzenlileştirme yöntemleri.

## Dikkat

Karşı kutbu [[underfitting]] yetersiz öğrenmedir. İkisi bir eksenin iki ucudur: model fazla basitse veriyi kaçırır, fazla esnekse ezberler. Aradaki dengeyi kuran ayarlar çoğunlukla [[hyperparameter|hiperparametrelerdir]] ve tek bir doğru değeri yoktur, aranır.

Bir de şu: yüksek eğitim başarısı tek başına hiçbir şey söylemez. Bir modelin tek anlamlı sınavı, hiç görmediği veridir.
