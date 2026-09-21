---
term: "Supervised Learning"
tr: "Denetimli öğrenme"
aliases: ["denetimli öğrenme", "gözetimli öğrenme"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Her örneğin doğru cevabının verildiği, modelin tahminini bu cevapla karşılaştırarak düzeldiği öğrenme biçimi."
related: [unsupervised-learning, reinforcement-learning, label, classification, regression, training-data]
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

Denetimli öğrenme, her eğitim örneğinin yanında doğru cevabın — yani bir [[label|etiketin]] — bulunduğu öğrenme biçimidir. Model bir tahmin üretir, tahmin etiketle karşılaştırılır, aradaki fark kadar düzeltilir.

Pratikte en yaygın kullanılan yaklaşım budur, çünkü ölçmesi kolaydır: doğru cevap elinde olduğu için modelin ne kadar yanıldığını doğrudan görürsün. Bedeli de bellidir; etiketli veri toplamak yavaş ve pahalıdır.

İki temel işe ayrılır: cevap sınırlı seçeneklerden biriyse [[classification|sınıflandırma]], bir ölçek üzerindeki sayıysa [[regression|regresyon]].

## Benzetme

Bir bahçeye üç farklı şekilde başlayabilirsin; aşağıda sıralanan üç öğrenme biçimi kabaca bunlara denk düşer. Fide kutularının üstünde hangisinin domates hangisinin biber olduğu yazıyorsa ayırmak kolaydır ve yanlış yaptığında bunu sana söyleyen bir şey vardır. Kutuda karışık, isimsiz filizler varsa yapabileceğin tek şey yaprak şekline bakıp benzerleri aynı kenara toplamaktır; hangi grubun adının ne olduğunu kimse söylemez. Üçüncü durumda ise kimse konuşmaz: ne kadar su vereceğini denersin, bitki solarsa azaltır, canlanırsa aynı yoldan devam edersin.

## Nasıl çalışır?

Üç büyük öğrenme biçimi, modele ne verildiğine göre ayrılır:

- **Denetimli öğrenme:** örnekler ve doğru cevapları verilir. Hata doğrudan ölçülebilir; maliyet etiketlemededir.
- **[[unsupervised-learning|Denetimsiz öğrenme]]:** yalnızca örnekler verilir, doğru cevap yoktur. Model verinin içindeki yapıyı kendisi arar. Sonucun doğru olup olmadığını söyleyecek bir ölçüt de yoktur; yorum insana kalır.
- **[[reinforcement-learning|Pekiştirmeli öğrenme]]:** doğru cevap değil, yapılan şeye verilen bir puan vardır. Model deneyerek ilerler ve uzun vadede toplam puanı artıran davranışları öğrenir.

Bu ayrım keskin bir duvar değildir; uygulamada birkaçı bir arada kullanılır. Örneğin [[training-data|eğitim verisinin]] küçük bir kısmı etiketli, geri kalanı etiketsiz olabilir.

## Dikkat

Buradaki "denetim" birinin süreci izlemesi değil, verinin doğru cevabı taşıması demektir.

Sonucun üst sınırını etiketler belirler. Etiketler tutarsızsa model o tutarsızlığı öğrenir; hiçbir model, kendisine gösterilen cevaplardan daha isabetli olamaz.
