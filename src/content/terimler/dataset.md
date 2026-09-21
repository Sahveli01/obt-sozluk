---
term: "Dataset"
tr: "Veri kümesi"
aliases: ["veri kümesi", "veri seti"]
category: yapay-zeka
subcategory: "Temeller"
level: baslangic
short: "Bir amaç için toplanmış, aynı biçime getirilmiş örneklerden oluşan derli toplu veri yığını."
related: [training-data, label, feature, benchmark, ai-bias]
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

Veri kümesi, bir amaç için toplanmış ve aynı biçime getirilmiş örnekler topluluğudur: on bin fotoğraf, bir milyon cümle, beş yıllık ölçüm kaydı. Her örnek aynı alanları taşır; toplu işlenebilmesinin sebebi budur.

Bir veri kümesine bakarken üç şey sorulur: neyi içeriyor, nasıl toplandı, neyi dışarıda bıraktı. Üçüncüsü en çok atlanan ve sonucu en çok belirleyen sorudur.

Aynı küme genellikle bölünerek kullanılır: bir kısmı [[training-data|eğitim verisi]] olur, bir kısmı modele hiç gösterilmeden ölçüm için ayrılır.

## Benzetme

Bir müze koleksiyonu gibi. Vitrinde ne varsa onu görürsün. Ama koleksiyonun tamamı tek bir bölgeden ve tek bir dönemden bağışlanmışsa, o müze sana dünyayı değil o bölgeyi anlatır. Orada olmayan şeyin eksik olduğu hiçbir vitrinde yazmaz.

## Dikkat

"Daha çok veri her zaman daha iyi" doğru değildir. Kirli, tekrarlı ya da yanlış [[label|etiketlenmiş]] örnekler eklemek sonucu bozar; toplama biçimindeki bir eğilim de sonradan [[ai-bias|önyargı]] olarak ortaya çıkar.

Veri kümelerinin bir de kaynak ve izin tarafı vardır. Verinin nereden geldiği, hangi şartlarla kullanılabildiği ve kişisel bilgi içerip içermediği teknik bir ayrıntı değil, projenin temel sorularındandır.
