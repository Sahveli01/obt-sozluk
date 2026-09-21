---
term: "Label"
tr: "Etiket"
aliases: ["veri etiketi"]
category: yapay-zeka
subcategory: "Temeller"
level: baslangic
short: "Bir eğitim örneğine iliştirilen doğru cevap: fotoğrafta ne olduğu, mesajın hangi sınıfa girdiği."
related: [training-data, supervised-learning, classification, dataset]
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

Etiket, bir örneğin yanına yazılan doğru cevaptır. Bir fotoğrafın altında "kedi" yazması, bir mesajın "istenmeyen" işaretlenmesi, bir evin gerçekte kaça satıldığının kaydedilmesi birer etikettir.

Etiketler [[supervised-learning|denetimli öğrenmenin]] temelidir: model bir tahmin üretir, tahmin etiketle karşılaştırılır ve aradaki fark modeli düzeltir. Etiketi olmayan [[dataset|veri kümeleriyle]] de çalışılabilir, ama o zaman öğrenilen şey başkadır.

Etiketleri çoğunlukla insanlar koyar; bu yüzden etiketleme başlı başına bir iştir. Kılavuz yazmak, aynı örneği birden fazla kişiye verip tutarlılığa bakmak ve anlaşmazlıkları çözmek gerekir.

## Benzetme

Kavanozun kapağına elle yazılmış "vişne reçeli, geçen yaz" notu gibi. Kimse kavanozu tekrar açıp kontrol etmez; raftaki bütün düzen o yazıya güvenir. Yazan kişi acele ettiyse ya da iki kavanozu karıştırdıysa, hata bütün yıl orada durur.

## Dikkat

Etiket "gerçek" değil, birinin gerçek hakkındaki kararıdır. Belirsiz durumlarda iki kişi aynı örneği farklı etiketleyebilir ve bu belirsizlik doğrudan modele geçer.

Model etiketlerdeki sistematik hatayı da öğrenir. Yanlış etiketlenmiş [[training-data|eğitim verisi]], bir modelin sessizce yanlış davranmasının en yaygın sebeplerindendir.
