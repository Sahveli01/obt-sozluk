---
term: "Fine-tuning"
tr: "İnce ayar"
aliases: ["ince ayar"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Eğitilmiş bir modeli, daha küçük ve odaklı bir veri kümesiyle kısa bir eğitimden geçirerek belli bir işe uyarlama."
related: [pretraining, instruction-tuning, lora, base-model, retrieval-augmented-generation-rag]
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

İnce ayar, hazır bir modelin ağırlıklarını daha küçük ve odaklı bir veri kümesiyle kısa bir eğitimden geçirerek belli bir işe uyarlamaktır. [[pretraining|Ön eğitimin]] aksine sıfırdan başlamaz: var olan bilgiyi korur, yalnızca davranışı istenen yöne çeker.

## Benzetme

Genel eğitimini tamamlamış birini işe alıp kurumun kendi yazışma usulünü öğretmeye benzer. Kişiyi baştan okula göndermezsin; birkaç haftalık bir alıştırma yeter. Öğrendiği yeni usul eskisini silmez, üstüne biner — ama çok dar bir kalıba sokarsan başka işlerdeki esnekliğini kaybedebilir.

## Nasıl çalışır?

Girdi–çıktı çiftlerinden oluşan bir küme hazırlanır: modele ne verildiğinde ne üretmesini istediğin. Eğitim döngüsü ön eğitimdekiyle aynı mantıkta işler, ama çok daha küçük ölçekte ve genellikle çok daha düşük bir öğrenme hızıyla. Amaç modeli yeniden şekillendirmek değil, dürtmektir.

Bütün ağırlıkları güncellemek hâlâ pahalı olduğu için yaygın yol, modelin yanına küçük bir ek parça takıp yalnızca onu eğitmektir; [[lora]] bu yaklaşımın en bilinen biçimidir. Böylece tek bir ana modelin üstüne birçok farklı uyarlama takılıp çıkarılabilir.

## Dikkat

İnce ayar, bilgi eklemenin iyi bir yolu değildir. Modele güncel ya da değişken bilgi vermek istiyorsan doğru araç genelde [[retrieval-augmented-generation-rag|RAG]]'dir. İnce ayar biçim, üslup ve görev alışkanlığı öğretmekte iyidir; ansiklopedi olmakta değil.

İkinci risk: dar veriyle fazla eğitmek modelin başka alanlardaki becerisini bozabilir. Küçük bir veri kümesi ezberlenebilir de — eğitim verisinde geçen bir cümlenin çıktıda aynen belirmesi mümkündür, bu da gizli veriyle ince ayar yaparken ciddi bir sorundur.
