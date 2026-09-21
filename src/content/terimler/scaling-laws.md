---
term: "Scaling Laws"
tr: "Ölçekleme yasaları"
aliases: ["ölçeklenme yasaları"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: ileri
short: "Model boyutu, veri miktarı ve işlem gücü arttıkça hatanın düzenli biçimde azalmasını tarif eden gözlemler."
related: [pretraining, training, parameters, training-data, emergent-abilities]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Ölçekleme yasaları, bir modelin büyüklüğü, eğitildiği veri miktarı ve eğitime harcanan işlem gücü artarken hatanın nasıl düştüğünü tarif eden gözlemlerdir. Temel bulgu şudur: bu üç büyüklük dengeli biçimde birlikte artırıldığında modelin hatası düzenli bir eğriyle azalır. Yani daha büyük bir eğitimin ne kadar iyi sonuç vereceği, o eğitim yapılmadan önce kabaca kestirilebilir.

## Nasıl çalışır?

Uygulamada küçük ölçekte bir dizi model eğitilir, her birinin hatası ölçülür ve bu noktaların çizdiği eğri daha büyük ölçeklere uzatılır. Elde edilen ilişki, sabit bir bütçenin nasıl bölüşüleceğine karar vermekte kullanılır: aynı işlem gücüyle daha büyük bir model mi eğitmeli, yoksa daha çok [[training-data|veriyle]] daha küçük bir model mi?

Bu sorunun cevabı zaman içinde değişmiştir. Erken dönem çalışmalarda ağırlık [[parameters|parametre]] sayısına verilirken, sonraki çalışmalar aynı bütçede veri miktarının hafife alındığını göstermiştir. [[pretraining|Ön eğitim]] planları bu bulgularla birlikte değişti.

## Dikkat

Bunlar fizik yasası değil, gözlenmiş eğilimlerdir. Belirli bir model ailesi, belirli bir veri havuzu ve belirli bir eğitim düzeni için ölçülürler; koşullar değişince eğri de değişir. "Yasa" kelimesi terimin en yanıltıcı tarafıdır.

İkincisi, ölçülen şey genellikle modelin eğitim hedefindeki hatasıdır — insanın önemsediği bir yetenek değil. Hatanın düzgün düşmesi, belirli bir işteki kullanışlılığın aynı düzgünlükte arttığı anlamına gelmez. Bu ayrım [[emergent-abilities|ortaya çıkan yetenekler]] tartışmasının tam merkezindedir.

Üçüncüsü, eğrinin nereye kadar uzatılabileceği açık bir sorudur. Veri, enerji ve donanım sınırları ile azalan getiri, yazıldığı tarih itibarıyla tartışmalıdır: ölçeklemeye devam etmenin ne getireceği konusunda alanda görüş birliği yoktur ve bu maddenin tek bir doğru tarafı olduğunu varsaymamak gerekir.
