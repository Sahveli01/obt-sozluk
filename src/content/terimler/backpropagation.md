---
term: "Backpropagation"
tr: "Geri yayılım"
aliases: ["geri yayilim", "backprop"]
category: yapay-zeka
subcategory: "Temeller"
level: ileri
short: "Çıkıştaki hatanın sorumluluğunu ağdaki her ağırlığa sondan başa doğru dağıtarak hesaplayan yöntem."
related: [gradient-descent, loss-function, neural-network, weights, deep-learning]
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

Geri yayılım, bir [[neural-network|sinir ağında]] hata ölçüldükten sonra bu hatanın oluşmasında her [[weights|ağırlığın]] payının ne olduğunu hesaplayan yöntemdir. Ağ normalde önden arkaya çalışır: girdi katmanlardan geçer, çıktı üretilir. Geri yayılım ters yönde gider; çıktıdaki hatadan başlayıp girişe doğru katman katman yürür.

## Benzetme

Montaj hattının sonunda kusurlu bir ürün çıktığını düşün. Tek tek istasyonları rastgele denemek yerine hattı sondan başa yürür, her istasyonda "bu kusurun ne kadarı burada oluştu" diye sorarsın. Hatanın faturası böylece bütün istasyonlara tek bir turda paylaştırılır.

## Nasıl çalışır?

Her katman kendinden öncekinin çıktısını dönüştürür. Sondaki hata bir önceki katmana şu bilgiyle aktarılır: "senin çıktın şu yönde biraz farklı olsaydı hata şu kadar azalırdı." O katman aynı soruyu kendinden öncekine sorar ve aktarım girişe kadar tekrarlanır. Bu geri geçiş bittiğinde her ağırlık için, o ağırlığın hatayı hangi yönde etkilediği bilinir.

Bu bilgiyi kullanıp güncellemeyi yapmak geri yayılımın işi değildir; onu [[gradient-descent|gradyan inişi]] üstlenir. Geri yayılımın kıymeti verimliliğindedir: her ağırlığı tek tek değiştirip [[loss-function|kaybı]] yeniden ölçmek yerine, tek bir geri geçişte milyonlarca ağırlığın payını birden çıkarır. [[deep-learning|Derin ağların]] eğitilebilir olması buna dayanır.

## Dikkat

Geri yayılım bir öğrenme algoritması değil, hesabın verimli bir düzenlenişidir. "Ağ geri yayılımla öğreniyor" cümlesi yaygın ama eksiktir; öğrenmeyi sağlayan güncelleme adımıdır, geri yayılım ona gereken bilgiyi hazırlar.

Çok derin ağlarda bu bilgi geriye giderken ya sönüp kaybolur ya da katlanarak büyür; ilk katmanlar ya hiç öğrenemez ya da eğitim patlar. Mimari tasarımındaki birçok ayrıntı tam olarak bunu engellemek içindir.
