---
term: "Distillation"
tr: "Damıtma"
aliases: ["knowledge distillation", "bilgi damıtma"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Büyük bir modelin verdiği cevapları öğreterek daha küçük bir modeli yetiştirme yöntemi."
related: [training, fine-tuning, small-language-model-slm, quantization, inference]
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

Damıtma, büyük ve pahalı bir modelin davranışını daha küçük bir modele öğretme yöntemidir. Küçük model ham veriden sıfırdan öğrenmek yerine, büyük modelin aynı sorulara verdiği cevapları hedef alarak [[training|eğitilir]]. Amaç, küçük modelin kendi boyutunda sıfırdan eğitilmiş bir modele göre daha iyi iş çıkarmasıdır. Büyük model "öğretmen", küçük model "öğrenci" diye anılır.

## Benzetme

Müzede yeni başlayan rehber gibi. Yeni rehber bütün arşivi okuyup uzmanlaşmaz; kıdemli rehberin turlarını izler ve ziyaretçilerden gelen sorulara onun verdiği cevapları öğrenir. Sık sorulan her şeyi akıcı biçimde anlatır, ama alışılmadık bir soru geldiğinde kıdemlinin indiği derinliğe inemez.

## Nasıl çalışır?

Önce öğretmen modele geniş bir soru kümesi verilir ve cevapları toplanır. Ardından öğrenci model bu soru–cevap çiftleriyle eğitilir. Bazı yöntemlerde yalnızca son cevap değil, öğretmenin her adımda hangi seçeneklere ne kadar ağırlık verdiği de aktarılır; bu, tek bir doğru cevaptan daha fazla bilgi taşır.

Ortaya çıkan model daha az yer kaplar, daha hızlı cevap verir ve [[inference|çıkarım]] maliyeti düşer. Bu yüzden damıtma, [[small-language-model-slm|küçük dil modelleri]] üretmenin yaygın yollarından biridir.

## Dikkat

Damıtma ile [[quantization]] karıştırılır. Damıtmada yeni ve daha küçük bir model eğitilir; quantization'da var olan modelin sayıları daha kaba biçimde saklanır. İkisi aynı amaca farklı yollardan gider ve birlikte de kullanılabilir.

Öğrenci, öğretmenin hatalarını da öğrenir. Öğretmenin yanlış ama kendinden emin cevapları öğrencinin içine de yerleşir; küçük model "daha temiz" değildir.
