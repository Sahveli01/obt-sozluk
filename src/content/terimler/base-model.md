---
term: "Base Model"
tr: ""
aliases: ["ham model"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Ön eğitimden çıkmış, talimat ve geri bildirim aşamalarından henüz geçmemiş ham model."
related: [pretraining, instruction-tuning, foundation-model, fine-tuning, open-weight-model]
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

Base model, [[pretraining|ön eğitimden]] çıkmış ama sonraki ayar aşamalarından geçmemiş hâldir. Yapabildiği tek şey metni sürdürmektir; ona soru sorarsan cevap vermek yerine benzer sorular yazmaya devam edebilir, çünkü henüz kimse ona "sorulana cevap verilir" dememiştir. Türkçede "temel model" karşılığı foundation model için kullanıldığından, karışmasın diye base model İngilizce bırakılır.

## Nasıl çalışır?

Base model, üstüne bir şey kurulmak üzere yayımlanır. [[instruction-tuning|Instruction tuning]] ve geri bildirim aşamalarından geçirilmiş hâline genelde "instruct" ya da "chat" sürümü denir; ikisi aynı ailenin iki ucudur ve aynı isimle, farklı eklerle dağıtılır.

Base model'ler ayarlanmış sürümlere göre daha az filtrelidir ve istenen kalıba daha kolay sokulur. Kendi verisiyle özgün bir davranış üretmek isteyen ekipler bu yüzden çoğu zaman ayarlanmış sürümü değil, ham hâli alıp üstünde [[fine-tuning|ince ayar]] yapar. Buna karşılık base model'i doğrudan kullanıcıya açmak uygun değildir: ne biçime ne içeriğe dair bir güvence taşır.

## Dikkat

Farkı net koymakta fayda var. "[[foundation-model|Foundation model]]" modelin rolünü anlatır: üstüne çok sayıda iş kurulabilen genel amaçlı model. "Base model" ise eğitim zincirindeki konumu anlatır: henüz ayarlanmamış hâl. Bir model ikisi birden olabilir; ama bir foundation model'in ayarlanmış sürümü artık base model değildir, foundation model olmaya devam eder.

"Base" küçük demek de değildir. Ailenin en büyük modeli de base hâlde yayımlanabilir; sıfat boyutla değil, eğitimin hangi aşamasında durulduğuyla ilgilidir.
