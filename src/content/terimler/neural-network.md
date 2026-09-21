---
term: "Neural Network"
tr: "Sinir ağı"
aliases: ["sinir ağı", "yapay sinir ağı"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Girdiyi katman katman işleyen, her bağlantısının ağırlığı eğitimle ayarlanan hesap yapısı."
related: [perceptron, deep-learning, weights, training, backpropagation]
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

Yapay sinir ağı, bir girdiyi birbirine bağlı küçük hesap birimlerinden geçirerek çıktıya çeviren bir yapıdır. Birimler katmanlar hâlinde dizilir; her bağlantının bir [[weights|ağırlığı]] vardır ve bu ağırlıklar [[training|eğitim]] sırasında ayarlanır.

Ad beyinden esinlenmiştir ama benzetmeden ibarettir. Biyolojik nöronun yaptığı iş ile buradaki hesap birimi arasında yapısal bir eşitlik yoktur; ağ, beynin bir modeli değil, ayarlanabilir bir matematiksel dönüşümdür.

## Benzetme

Kademeli bir ayıklama hattı düşün. Ürün önce iri gözlü bir elekten, sonra daha incelerinden geçer. Hiçbir elek tek başına "bu iyi" demez, yalnızca bir kısmını eler; karar hattın tamamından çıkar. Eleklerin göz genişlikleri de sabit değildir: hat yanlış ürün geçirdikçe biri gidip her eleği azıcık kısar. Bir ağın eğitiminde ayarlanan şey tam olarak budur.

## Nasıl çalışır?

Her birim kendisine gelen sayıları ağırlıklarıyla çarpıp toplar ve sonucu düz olmayan bir eğriden geçirip tek bir sayı üretir. Bu birimin en yalın hâline [[perceptron]] denir. Eğriden geçirme adımı olmadan üst üste dizilmiş bütün katmanlar tek bir basit işleme çökerdi; ağın karmaşık ilişkileri temsil edebilmesi bu adıma bağlıdır.

Eğitimde ağın çıktısı beklenen sonuçla karşılaştırılır. Aradaki fark, her ağırlığın bu farka ne kadar katkı verdiğine göre geriye doğru dağıtılır ([[backpropagation|geri yayılım]]) ve bütün ağırlıklar küçük adımlarla güncellenir. Süreç, ağın hatası kabul edilebilir düzeye inene kadar sürer.

## Dikkat

"Ağ öğreniyor" dendiğinde değişen tek şey ağırlıklardır. Kaç katman ve her katmanda kaç birim olacağı eğitimden önce insan tarafından seçilir; bu seçimler eğitim sırasında kendiliğinden düzelmez.
