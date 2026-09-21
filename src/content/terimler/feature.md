---
term: "Feature"
tr: "Öznitelik"
aliases: ["öznitelik"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Modelin girdi olarak kullandığı tek bir ölçülebilir nitelik: bir evin metrekaresi, bir metnin uzunluğu."
related: [dataset, label, machine-learning-ml, regression, classification]
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

Öznitelik, bir örneğin modele verilen tek bir ölçülebilir yanıdır. Bir ev için metrekare, oda sayısı ve semt; bir metin için uzunluk ya da belirli kelimelerin geçip geçmediği. Her örnek, özniteliklerinden oluşan bir sayı listesine çevrilir ve model yalnızca bu listeyi görür — evin kendisini değil.

Bu yüzden hangi özniteliklerin seçildiği, hangi modelin kullanıldığı kadar belirleyicidir. Klasik [[machine-learning-ml|makine öğrenmesinde]] bu seçim açıkça insanın işiydi. [[deep-learning|Derin öğrenmede]] ham veri doğrudan verilir ve ara temsiller eğitim sırasında oluşur; seçim ortadan kalkmaz, veri hazırlığına ve model tasarımına kayar.

## Nasıl çalışır?

Ham veriyi sayıya çevirirken bir dizi karar verilir: metin parçalara bölünür, kategoriler sayılarla temsil edilir, çok farklı ölçeklerdeki değerler karşılaştırılabilir hâle getirilir. Bu kararlar sonucun bir parçasıdır.

Bir özniteliğin işe yaraması, sonuçla gerçek bir ilişkisinin olmasına bağlıdır. İlgisiz öznitelikler yalnızca gürültü ekler. Asıl tehlikeli olan, cevabı gizlice içinde taşıyan özniteliklerdir: bir hastalık tahmininde "hastanın hangi serviste yattığı" bilgisini vermek, cevabı soruya karıştırmaktır. Eğitimde kusursuz görünen model gerçek kullanımda çuvallar; buna veri sızıntısı denir.

## Örnek

Yarınki sıcaklığı tahmin etmek için bugünkü sıcaklık, nem ve basınç birer özniteliktir. Ölçümü yapan istasyonun kod numarası da bir sayıdır ama hava hakkında bilgi taşımaz. Modele verilirse öğrenilecek bir şey eklemez, yalnızca yanlış bir bağ kurma ihtimali yaratır.

## Dikkat

Öznitelik ile [[label|etiket]] karıştırılmamalı: öznitelik soruya ait bilgidir, etiket cevabın kendisidir. Bir alanın hangisi olduğuna emin değilsen, o bilginin tahmin anında elinde olup olmayacağını sor.
