---
term: "Hyperparameter"
tr: "Hiperparametre"
aliases: ["hiperparametre"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Eğitim başlamadan önce insanın seçtiği, modelin kendisinin öğrenmediği ayarlar."
related: [parameters, learning-rate, batch, training, overfitting]
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

Hiperparametreler, öğrenmenin nasıl yapılacağını belirleyen ve eğitim başlamadan önce insan tarafından seçilen ayarlardır: [[learning-rate|öğrenme oranı]], [[batch|öbek büyüklüğü]], kaç [[epoch-ml|tur]] eğitileceği, ağın kaç katmandan oluşacağı ve benzerleri. Model bunları öğrenmez; bunlar öğrenmenin koşullarıdır.

## Benzetme

Bir antrenman programı gibi. Haftada kaç gün, hangi yoğunlukta, ne kadar süre çalışılacağını antrenör önceden belirler. Sporcunun kasları antrenman boyunca değişir, program değişmez; programı değiştirmek ancak yeni bir sezona baştan başlamakla olur.

## Nasıl çalışır?

Doğru değerler hesaplanmaz, aranır. Farklı kombinasyonlarla eğitim tekrarlanır ve modele hiç gösterilmemiş sınama verisindeki sonuçlar karşılaştırılır. Arama düzenli bir ızgara üzerinde, rastgele ya da önceki denemelerin sonucunu kullanan daha seçici yöntemlerle yapılabilir.

Ortak maliyet şudur: her deneme baştan bir [[training|eğitim]] demektir. Büyük modellerde bu, aramayı başlı başına pahalı bir işe dönüştürür; bu yüzden denemeler çoğu zaman küçük ölçekte yapılır ve çıkan değerler büyük eğitime taşınır.

## Dikkat

Ayrım net tutulmalı: [[parameters|parametreleri]] model öğrenir, hiperparametreleri insan seçer. [[weights|Ağırlıklar]] birinci gruba girer; öğrenme oranı ikinciye. "Model şunu öğrendi" denebilen şeyle "biz şunu seçtik" denen şeyi karıştırmak, sonuçların neden öyle çıktığını anlamayı imkânsızlaştırır.

Bir tuzak daha var: sınama verisine bakarak hiperparametreleri çok fazla kurcalarsan o veri de dolaylı yoldan eğitime karışır ve ölçüm iyimserleşir; bu da bir tür [[overfitting|ezberdir]]. Bu yüzden nihai ölçüm için hiç dokunulmamış, ayrı tutulmuş bir veri saklanır.
