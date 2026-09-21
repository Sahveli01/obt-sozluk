---
term: "Gradient Descent"
tr: "Gradyan inişi"
aliases: ["gradyan inisi"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Model ayarlarını, hatayı en çok azaltan yönde küçük adımlarla tekrar tekrar değiştirerek öğrenmeyi sağlayan yöntem."
related: [loss-function, backpropagation, learning-rate, weights, training]
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

Gradyan inişi, bir modelin içindeki sayıları rastgele değil, hatayı azaltan yönde değiştirme yöntemidir. Her ayar için tek bir soru sorulur: bu sayıyı azıcık artırsam hata artar mı, azalır mı? Cevap bir yön verir; ayar o yönün tersine, yani hatanın azaldığı tarafa doğru küçük bir adım kaydırılır. Sonra aynı soru baştan sorulur.

Eğitimin üç parçası burada birleşir: [[loss-function|kayıp fonksiyonu]] ne kadar yanıldığını ölçer, gradyan inişi hangi yöne gidileceğine karar verir, [[backpropagation|geri yayılım]] bu yön bilgisini ağın bütün katmanlarına dağıtır.

## Benzetme

Sisli bir dağda aşağı inmeye benzer. Vadinin nerede olduğunu göremezsin; yapabileceğin tek şey ayağının altındaki eğime bakıp en dik inişin olduğu yöne bir adım atmak, sonra durup tekrar bakmak. Tek seferde doğru yolu bulmazsın, ama yeterince adımdan sonra aşağıdasındır.

## Nasıl çalışır?

Adımın büyüklüğünü [[learning-rate|öğrenme oranı]] belirler. Her adımda bütün veriye bakmak çok pahalı olduğu için yön genelde [[batch|küçük veri öbekleriyle]] hesaplanır: tahmin edilen yön biraz gürültülüdür ama adımlar kat kat sık atılır. Milyonlarca [[weights|ağırlık]] aynı anda, aynı mantıkla güncellenir. Süreç kayıp kayda değer biçimde azalmaz olana kadar sürer.

## Dikkat

Bu yöntem en düşük noktaya varmayı garanti etmez. Yerel bir çukurda ya da eğimin neredeyse kaybolduğu bir düzlükte takılabilir. Pratikte bu çoğu zaman sorun olmaz: yeterince iyi bir nokta iş görür, kimse gerçek en düşük noktayı görmüş değildir.

Adım büyüklüğü de kritiktir. Çok büyük adımlarla inen biri vadiyi aşıp karşı yamaca tırmanır ve hata azalmak yerine salınır. "Hata düşmüyor" denen durumların önemli bir kısmı yöntemin değil, adım boyunun sorunudur.
