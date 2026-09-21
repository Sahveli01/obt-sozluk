---
term: "Learning Rate"
tr: "Öğrenme oranı"
aliases: ["ogrenme orani"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Modelin her güncellemede ayarlarını ne kadar büyük bir adımla değiştireceğini belirleyen sayı."
related: [gradient-descent, hyperparameter, epoch-ml, loss-function]
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

Öğrenme oranı, [[gradient-descent|gradyan inişinin]] bulduğu yönde ne kadar büyük bir adım atılacağını belirler. Yönü bulmak ayrı iştir, ne kadar ilerleneceği ayrı; öğrenme oranı yalnızca ikincisini ayarlar. Değerini model öğrenmez, eğitimden önce insan seçer.

## Benzetme

Duşta sıcak suyu ayarlamak gibi. Musluğu her seferinde bol bol çevirirsen önce haşlanır, sonra geri çevirip üşürsün; istediğin sıcaklığın etrafında sürekli gidip gelirsin, hiç oturmazsın. Milimetrik çevirirsen doğru sıcaklığa belki varırsın ama suyun altında uzun süre beklemeyi göze almalısın.

## Nasıl çalışır?

Çok yüksek bir değerde [[loss-function|kayıp]] düşmek yerine zıplar, hatta büyür. Çok düşük bir değerde eğitim bitmek bilmez ve model kötü bir noktada takılı kalabilir. İkisinin arası deneyerek bulunur.

Pratikte oran sabit tutulmaz. Sık kullanılan bir yaklaşım, eğitimin başında büyük adımlarla hızlıca yaklaşıp [[epoch-ml|turlar]] ilerledikçe adımı kademeli küçültmektir; böylece önce kabaca doğru bölgeye gidilir, sonra ince ayar yapılır. İlk birkaç adımda oranın yavaşça yükseltildiği başlangıç dönemleri de yaygındır. Bazı yöntemler her ayar için adımı kendiliğinden ölçekler, ama bu durumda bile bir başlangıç değeri seçmen gerekir.

## Dikkat

Öğrenme oranı en çok denenen [[hyperparameter|hiperparametredir]]; eğitim hiç ilerlemiyorsa ya da hata saçmalıyorsa ilk bakılacak yer burasıdır. [[batch|Öbek büyüklüğüyle]] birlikte düşünülmesi gerekir, çünkü ikisi adımın gerçek etkisini birlikte belirler.

Yaygın bir yanlış anlama da şu: yüksek öğrenme oranı "model daha hızlı öğrenir" demek değildir. Belli bir noktadan sonra model hızlı öğrenmez, hiç öğrenmez.
