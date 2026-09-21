---
term: "Precision and Recall"
tr: "Kesinlik ve duyarlılık"
aliases: ["precision", "recall", "duyarlilik"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "İki hata türünü ayıran ölçüler: işaretlediklerinin ne kadarı doğruydu, doğruların ne kadarını işaretleyebildin."
related: [accuracy, classification, label, benchmark]
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

Bir model bir şeyi "evet" diye işaretlediğinde iki ayrı soru sorulabilir. Kesinlik (precision): işaretlediklerinin ne kadarı gerçekten doğruydu? Duyarlılık (recall): gerçekte var olanların ne kadarını işaretleyebildi?

İkisi farklı hataları sayar. Kesinlik yanlış alarmları, duyarlılık ise kaçırılanları cezalandırır. Bir model bu iki hatadan birinde iyi, diğerinde berbat olabilir; tek bir ölçüye bakmak bu farkı görünmez kılar.

## Benzetme

Ormanda mantar toplamaya benzer. Sepetindeki mantarların ne kadarının gerçekten yenebilir olduğu kesinliktir; ormandaki yenebilir mantarların ne kadarını toplayabildiğin duyarlılıktır. Temkinli davranıp yalnızca kesin tanıdıklarını alırsan sepetin güvenlidir ama çoğu mantar ormanda kalır. Kuşkulu olanları da alırsan sepet dolar, riskin artar.

## Nasıl çalışır?

İkisi arasında bir ödünleşim vardır çünkü model genelde bir eşiğe göre karar verir: "evet" demek için ne kadar emin olması gerekiyor? Eşiği yükseltirsen kesinlik artar, duyarlılık düşer; alçaltırsan tersi olur. Model değişmez, yalnızca hangi hatayı göze aldığın değişir.

Hangisinin ağır basacağı probleme bağlıdır. Ciddi bir hastalığı kaçırmamak için duyarlılık öncelikli olabilir; kullanıcıya gösterilen bir öneri listesinde ise yanlış alarm daha pahalıdır. İkisini tek sayıda birleştiren ölçüler de kullanılır, ama birleştirmek kararın kendisini gizler.

## Dikkat

[[accuracy|Doğruluk]] bu ayrımı hiç yapmaz; nadir durumların peşindeyken bu yüzden yetersiz kalır.

Her iki ölçü de [[label|etiketlerin]] doğru olduğu varsayımına dayanır. Etiketler kusurluysa, ölçtüğün şey modelin başarısı değil, modelle kusurlu etiketlerin uyuşmasıdır.
