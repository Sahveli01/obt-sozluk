---
term: "Knowledge Cutoff"
tr: "Bilgi kesim tarihi"
aliases: ["cutoff"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: baslangic
short: "Bir modelin eğitim verisinin bittiği an; o günden sonra olanları kendiliğinden bilmez."
related: [pretraining, training-data, hallucination, grounding, retrieval-augmented-generation-rag]
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

Bilgi kesim tarihi, bir modelin [[pretraining|ön eğitiminde]] kullanılan verinin bittiği andır. Model o güne kadar yazılmış metinlerden öğrenir; sonrasında olan hiçbir şeyi kendiliğinden bilmez. Yeni bir olayı, yeni bir sürümü ya da değişmiş bir kuralı ancak sen anlatırsan veya bir araç getirirse bilir.

## Benzetme

Aylarca bağlantısız bir araştırma istasyonunda kalıp dönen biri gibi. Gittiği güne kadar olanları bilir, döndüğünde aradaki boşluğun farkında değildir. Kendisine sorulan güncel bir soruya, ayrıldığı günün bilgisiyle gayet emin biçimde cevap verir.

## Dikkat

Kesim tarihi keskin bir çizgi değildir. Bir olay yaşandıktan sonra hakkında yazılan metinler zamanla birikir, bu yüzden [[training-data|eğitim verisinde]] son aylar seyrek kalır: model kesime yakın dönemi daha zayıf bilir.

Modelin kendi kesim tarihini doğru söylemesi de garanti değildir; o bilgi de metinlerden gelir ve yanlış olabilir.

En önemlisi: bilmemek sessiz kalmak değildir. Model boşluğu fark etmeden makul görünen bir cevap üretebilir; buna [[hallucination|halüsinasyon]] denir. Güncel bilgi gerektiren işlerde kaynağı modele sen vermelisin — [[retrieval-augmented-generation-rag|RAG]] tam olarak bunu yapar.
