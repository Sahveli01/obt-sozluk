---
term: "Epoch (ML)"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Temeller"
level: baslangic
short: "Eğitim verisinin tamamının modele bir kez baştan sona gösterilmesi; eğitim boyunca bu tur defalarca tekrarlanır."
related: [batch, learning-rate, training, dataset, overfitting]
disambiguation: [epoch-blockchain]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Eğitim verisinin tamamı modele baştan sona bir kez gösterildiğinde bir epoch tamamlanmış olur. [[training|Eğitim]] tek turda bitmez: aynı veri tekrar tekrar gösterilir ve model her turda ayarlarını biraz daha düzeltir. "Kaç epoch eğitildi" sorusu, "veriyi kaç kez gördü" demektir. Türkçede "tur" ya da "devir" denenmiş ama yerleşmemiştir; terim İngilizce kullanılır.

## Benzetme

Bir şarkı listesini baştan sona bir kez dinlemek bir turdur. Liste bitince başa döner, aynı parçaları tekrar dinlersin. Parçalar değişmez; değişen, her dinleyişte biraz daha fazlasını fark etmendir.

## Dikkat

Bir epoch tek bir güncelleme demek değildir. Veri tur içinde [[batch|öbeklere]] bölünür ve model her öbekten sonra ayarlarını günceller; yani bir tur, yüzlerce küçük düzeltme barındırır.

Tur sayısı da kendiliğinden gelmez, seçilir; yani bir [[hyperparameter|hiperparametredir]]. Az tur modelin veriyi yeterince öğrenememesi, çok tur ise [[overfitting|ezberlemesi]] demektir.

[[epoch-blockchain|Blockchain'deki epoch]] ile aynı kelimeyi paylaşırlar ama ilgileri yoktur: orada epoch, ağın zamanı böldüğü sabit uzunlukta bir dilimdir; burada verinin kaç kez gezildiğidir.
