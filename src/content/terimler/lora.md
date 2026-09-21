---
term: "LoRA"
tr: ""
aliases: ["Low-Rank Adaptation"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Modelin tamamını yeniden eğitmeden, yanına eklenen küçük bir parçayla onu belirli bir işe uyarlama yöntemi."
related: [fine-tuning, training, weights, quantization, grounding]
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

LoRA (Low-Rank Adaptation), bir modeli yeni bir işe uyarlarken bütün [[weights|ağırlıklarını]] değiştirmek yerine yanına küçük bir ek parça eğitme yöntemidir. Asıl model donmuş hâlde kalır; eğitim sırasında yalnızca bu ek parçanın sayıları güncellenir. Böylece uyarlama için gereken bellek ve süre, klasik [[fine-tuning|ince ayara]] göre çok azalır. Türkçe bir karşılığı yerleşmedi; kısaltmasıyla kullanılır.

## Benzetme

Bir oyuna kurulan mod paketi gibi. Oyunu baştan yazmazsın, üstüne küçük bir dosya eklersin; kaldırdığında oyun eski hâline döner, istersen farklı modlar arasında geçiş yaparsın. Asıl oyun hep aynı yerde durur.

## Nasıl çalışır?

Katmanlardaki büyük ağırlık tablolarının yanına, çok daha az sayı içeren iki küçük tablo eklenir. Model çalışırken bu küçük tabloların ürettiği fark, asıl tablonun çıktısına eklenir. [[training|Eğitim]] yalnızca bu küçük tabloları değiştirir.

Ortaya çıkan dosya asıl modelin yanında çok küçük kalır. Aynı ana modelin üstüne farklı işler için ayrı ayrı LoRA dosyaları takılabilir, biri çıkarılıp öteki takılabilir. Yöntemin en çok kullanılan tarafı bu esnekliktir.

## Dikkat

LoRA, modele yeni bilgi yüklemenin kestirme yolu değildir. Üslup, biçim ve alana özgü alışkanlıklar öğretmekte iyi çalışır; modelin bilmediği güncel olguları öğretmek için uygun araç değildir. Bunun için cevabın dayanacağı metni doğrudan vermek, yani [[grounding]] uygulamak daha güvenlidir.

Küçük eğitim kümeleriyle çalışıldığı için aşırı uyum riski yüksektir: model verdiğin birkaç örneği ezberleyip başka durumlarda bozulabilir. Eğitilen dosya küçük olsa da eğitim sırasında asıl modelin belleğe sığması gerekir; sığdırmak için genellikle [[quantization]] ile birlikte kullanılır.
