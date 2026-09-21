---
term: "Deep Learning"
tr: "Derin öğrenme"
aliases: ["derin öğrenme"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Çok katmanlı sinir ağlarıyla, ham veriden hangi özelliklerin önemli olduğunu da öğrenen makine öğrenmesi yaklaşımı."
related: [neural-network, machine-learning-ml, training, gpu, backpropagation, feature]
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

Derin öğrenme, üst üste dizilmiş çok sayıda katmandan oluşan [[neural-network|sinir ağlarını]] kullanan [[machine-learning-ml|makine öğrenmesi]] yaklaşımıdır. "Derin" sıfatı yalnızca katman sayısının çokluğunu anlatır; gizemli bir şeye işaret etmez.

Asıl farkı şudur: klasik yöntemlerde modele hangi [[feature|özniteliklerin]] verileceğini insan seçerdi. Derin öğrenmede ham veri doğrudan verilir ve hangi özelliklerin işe yaradığını ağ [[training|eğitim]] sırasında kendisi bulur. Metin, ses ve görüntü gibi elle tarif edilmesi zor verilerde yaygınlaşmasının sebebi budur.

## Nasıl çalışır?

Katmanlar sırayla çalışır. İlk katmanlar basit örüntüleri yakalar — bir görüntüde kenarlar ve ton geçişleri gibi. Sonraki katmanlar bunların birleşimlerini, daha sonrakiler o birleşimlerin birleşimlerini temsil eder. Hiçbir katman tek başına cevabı bilmez; cevap katmanların birikiminden çıkar.

Çıktı beklenenden uzaksa hata geriye doğru dağıtılır ([[backpropagation|geri yayılım]]) ve her katmandaki sayılar azıcık düzeltilir. Bu döngü çok sayıda örnek üzerinde tekrarlanır.

Yaklaşımın yaygınlaşması tek bir buluşa değil, üç şeyin bir araya gelmesine bağlıdır: büyük veri kümeleri, paralel hesaba uygun [[gpu|GPU]] gibi donanımlar ve eğitim yöntemlerindeki iyileşmeler.

## Dikkat

Derin öğrenme her problemin cevabı değildir. Az sayıda örnek ve düzenli tablo verisi olan işlerde daha basit yöntemler çoğu zaman hem daha isabetli hem daha ucuzdur.

İkinci nokta: katmanların ne öğrendiğini dışarıdan okumak zordur. Model doğru cevabı verdiğinde bile bunu hangi ipucuna dayanarak verdiği çoğu zaman belirsizdir.
