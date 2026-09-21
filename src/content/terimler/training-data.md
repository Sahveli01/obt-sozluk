---
term: "Training Data"
tr: "Eğitim verisi"
aliases: ["eğitim verisi"]
category: yapay-zeka
subcategory: "Temeller"
level: baslangic
short: "Bir veri kümesinin, modelin parametrelerini ayarlamak için fiilen gösterilen kısmı."
related: [dataset, training, label, overfitting, ai-bias]
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

Eğitim verisi, bir [[dataset|veri kümesinin]] modele fiilen gösterilen kısmıdır. Küme genellikle üçe ayrılır: [[training|eğitimde]] kullanılan bölüm, ayar kararlarını denemek için kullanılan bölüm ve sonuna kadar kapalı tutulup yalnızca ölçüm için açılan bölüm.

Bu ayrımın tek bir sebebi vardır: bir modelin daha önce gördüğü örnekte başarılı olması hiçbir şey kanıtlamaz. Ne kadar iyi olduğunu yalnızca hiç görmediği örnekler söyler. Saklanan bölümden eğitime tek bir örnek sızarsa ölçüm olduğundan iyi çıkar ve bu dışarıdan fark edilmez.

## Benzetme

Arının hangi tarlaya konduğu balın tadını belirler. Kovanı lavantanın yanına koyarsan bal lavanta kokar; etrafta yalnızca kekik varsa kekikten başka bir şey bekleyemezsin. Model de kendisine ne gösterildiyse onun tadını taşır — eksikleriyle birlikte.

## Dikkat

Eğitim verisinin içeriği modelin davranışını doğrudan belirler. Buradaki bir eğilim çıktılara [[ai-bias|önyargı]] olarak yansır ve sonradan "modeli biraz düzeltelim" diyerek temizlenmesi zordur.

Aynı örnekleri tekrar tekrar göstermek de modeli onları ezberlemeye iter ([[overfitting|aşırı uyum]]). Miktar kadar çeşitlilik ve [[label|etiket]] kalitesi de belirleyicidir.
