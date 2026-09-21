---
term: "Pretraining"
tr: "Ön eğitim"
aliases: ["ön eğitim"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Modelin, etiketlenmemiş devasa bir metin yığını üzerinde dilin genel örüntülerini öğrendiği ilk ve en pahalı eğitim aşaması."
related: [fine-tuning, base-model, foundation-model, training-data, large-language-model-llm, knowledge-cutoff]
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

Ön eğitim, bir dil modelinin ilk ve en pahalı aşamasıdır: model, insan eliyle etiketlenmemiş devasa bir metin yığınını baştan sona işleyerek dilin genel örüntülerini öğrenir. Bu aşamanın çıktısı sohbet eden bir asistan değil, metnin devamını tahmin eden bir [[base-model|base model]]dir.

Bir dil modelinin yolu genelde şu sırayı izler: önce ön eğitim; sonra dar bir alana uyarlayan [[fine-tuning|ince ayar]]; ardından isteklere yanıt verme biçimini öğreten [[instruction-tuning|instruction tuning]]; en sonda tercihleri şekillendiren [[rlhf|RLHF]] gibi geri bildirim aşamaları. Her adım bir öncekinin üstüne kurulur ve her biri bir öncekinden kat kat ucuzdur.

## Benzetme

Bir çocuğun dili ders almadan, çevresinde konuşulanları duya duya öğrenmesine benzer. Kimse ona tek tek "bu cümle doğru, şu yanlış" demez; sadece çok fazla örneğe maruz kalır ve örüntüyü kendisi çıkarır. Sorulana cevap verme âdeti, nezaket kuralları ise sonradan ayrıca öğretilir.

## Nasıl çalışır?

Yöntem şaşırtıcı biçimde basittir: metnin bir kısmı gizlenir, modelden gizlenen parçayı tahmin etmesi istenir, tahmin tutmazsa iç ağırlıkları biraz düzeltilir. Bu döngü akıl almaz sayıda tekrarlanır. Ayrı bir etiket gerekmez, çünkü doğru cevap metnin kendisinde zaten vardır.

Maliyetin büyük kısmı buradadır: çok sayıda hızlandırıcı, haftalara yayılan hesap ve özenle derlenmiş, temizlenmiş bir [[training-data|eğitim verisi]]. Bu yüzden ön eğitim çoğu kurum için erişilebilir değildir; ekiplerin büyük bölümü hazır bir modelin üstüne çalışır.

## Dikkat

Modelin bilgisi bu aşamada toplanan veriyle sınırlıdır; verinin bittiği tarihten sonrasını bilmez. Buna [[knowledge-cutoff|bilgi kesim tarihi]] denir.

Verideki hatalar, boşluklar ve önyargılar da modele geçer. Sonraki aşamalar bunları bastırabilir ama kökünden silemez; "modeli eğitirken şunu öğretiriz" demek, ön eğitimde öğrenilmiş bir eğilimi geri almak anlamına gelmez.
