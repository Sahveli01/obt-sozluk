---
term: "Small Language Model (SLM)"
tr: "Küçük dil modeli"
aliases: ["slm", "küçük dil modeli"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Aynı mantıkla çalışan ama çok daha az parametre taşıyan, az kaynakla ve yerelde çalışabilen dil modeli."
related: [large-language-model-llm, local-llm, distillation, quantization, inference, parameters]
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

Küçük dil modeli (SLM), bir [[large-language-model-llm|büyük dil modelinin]] küçültülmüş akrabasıdır: aynı mantıkla çalışır, ama çok daha az [[parameters|parametre]] taşır. Karşılığında daha az bellek ister, daha hızlı cevap verir ve çoğu zaman tek bir bilgisayarda, hatta telefonda çalışabilir. "Küçük" için herkesin kabul ettiği bir sınır yoktur; terim, karşılaştırıldığı modellere göre anlam kazanır.

## Benzetme

Dereyi geçmek için yük gemisi çağırmazsın; kayık işini görür, üstelik daha hızlı ve daha ucuzdur. Karşıya on ton yük taşıman gerektiğinde ise kayık yetmez. Model seçimi de böyle bir ölçü meselesidir: soru "hangisi daha iyi" değil, "bu iş için hangisi yeter"dir.

## Nasıl çalışır?

Küçük modeller genelde sıfırdan icat edilmez. Büyük bir modelin davranışını küçüğe aktaran [[distillation|damıtma]], ağırlıkları daha kaba sayılarla saklayarak yer kazandıran [[quantization|niceleme]] ve dar bir alana odaklanmış eğitim verisi birlikte kullanılır. Sonuçta geniş genel kültürü olmayan ama belli bir işi düzgün yapan bir model çıkar.

Bunun pratikteki karşılığı [[inference|çıkarım]] maliyetidir. Sınıflandırma, biçim düzeltme, etiketleme, kısa özet gibi kalıplaşmış işlerde küçük bir model hem zaman hem para tasarrufu sağlar. Veri cihazdan çıkmadığı için gizlilik gereken yerlerde [[local-llm|yerel çalıştırma]] da kolaylaşır.

## Dikkat

Küçük model "ucuz büyük model" değildir. Uzun ve çok adımlı akıl yürütme, geniş genel kültür ya da nadir konular istendiğinde sınırları hızla görünür.

Ölçüyü baştan seçmek de şart değildir: yaygın bir tasarım, işlerin çoğunu küçük modele yaptırıp yalnızca zorlananları büyük modele yönlendirmektir.
