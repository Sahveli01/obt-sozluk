---
term: "Evals"
tr: ""
aliases: ["eval", "evals", "model degerlendirmesi"]
category: yapay-zeka
subcategory: "Güvenlik ve değerlendirme"
level: orta
short: "Bir modelin belirli görevlerdeki davranışını tekrarlanabilir biçimde ölçen test setleri ve bunları yürütme pratiği."
related: [benchmark, ai-safety, hallucination, alignment, training-data]
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

Eval, bir modelin genel olarak ne kadar "iyi" olduğunu değil, belirli bir görevde ne yaptığını ölçen testtir. Üç parçadan oluşur: görev örneklerinden kurulu bir veri kümesi, modelin hep aynı koşullarda çalıştırılmasını sağlayan bir koşum düzeni ve bir puanlama yöntemi.

Türkçede karşılığı "değerlendirme" olsa da pratikte İngilizce kısaltmasıyla anılıyor; geliştiriciler "eval yazmak" diyor.

## Benzetme

Yeni bir araç modelinin çarpışma testi belirli bir hızda, belirli bir açıyla, belirli bir engele yapılır. Sonuç gerçektir ve modeller arasında karşılaştırılabilir. Ama yolda olabilecek her kazayı temsil etmez; test koşulunun dışına çıktığında elindeki sayı sana bir şey söylemez.

## Nasıl çalışır?

Puanlama yöntemi görevin türüne göre değişir: cevabın tek bir doğrusu varsa kesin eşleşme, biçim kuralı varsa otomatik kontrol, açık uçlu metinlerde insan değerlendirici ya da bir başka modelin hakemliği. Sonuncusu ucuzdur ama hakem modelin kendi eğilimlerini ölçüme taşır.

Setler de amaçlarına göre ayrılır: herkese açık genel [[benchmark|kıyas setleri]] modelleri karşılaştırmak için, kurumun kendi kullanım senaryosundan çıkarılmış özel setler ürünün gerçekten işe yarayıp yaramadığını görmek için, güvenlik setleri ise zararlı isteklerin reddedilmeye devam ettiğini ve [[red-teaming|red teaming]] bulgularının geri gelmediğini izlemek için kullanılır.

En büyük tehlike veri sızıntısıdır. Yaygın ve herkese açık bir test setinin soruları cevaplarıyla birlikte modelin [[training-data|eğitim verisine]] girmişse, model ölçülen şeyi çözmüyor, hatırlıyor olabilir: puan yükselir, gerçek kullanımda karşılığı çıkmaz. Yazıldığı tarih itibarıyla bu, açık kıyas setlerinin bilinen ve yaygın bir sorunu; ekipler bu yüzden yayımlamadıkları kendi setlerini tutuyor.

## Dikkat

Bir eval yalnızca ölçtüğü şeyi ölçer. Ölçüm hedefe dönüştüğünde ise ölçüm olmaktan çıkar: bir puanı yükseltmek için çalışıldığında puan yükselir, altındaki yetenek aynı kalabilir.

Yüksek puan ne [[hallucination|uydurmayı]] bitirir ne de modeli güvenli yapar. Eval sonucu, [[ai-safety|yapay zekâ güvenliği]] kararının girdilerinden yalnızca biridir; tek başına "bu model yeterli" demez.
