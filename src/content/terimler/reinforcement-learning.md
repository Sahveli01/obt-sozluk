---
term: "Reinforcement Learning"
tr: "Pekiştirmeli öğrenme"
aliases: ["pekiştirmeli öğrenme", "takviyeli öğrenme"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Doğru cevap yerine davranışa puan verilen, modelin deneyerek toplam ödülü artırmayı öğrendiği yaklaşım."
related: [supervised-learning, unsupervised-learning, rlhf, alignment]
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

Pekiştirmeli öğrenmede doğru cevap listesi yoktur. Bir ortam, bir dizi seçenek ve seçimlerin sonucunda gelen bir puan vardır. Öğrenen tarafa ajan denir: bir şey yapar, ortam değişir, bir ödül ya da ceza gelir. Amaç tek bir adımda doğruyu bulmak değil, uzun vadede toplanan puanı büyütmektir.

Üç öğrenme biçiminin karşılaştırması [[supervised-learning|denetimli öğrenme]] sayfasında toplandı; kısaca söylemek gerekirse buradaki fark, geri bildirimin "doğru cevap" değil "sonuç" olmasıdır.

## Nasıl çalışır?

Birinci zorluk şudur: bir hamlenin iyi mi kötü mü olduğu çoğu zaman hemen belli olmaz. Puan onlarca adım sonra gelir ve o puanı hangi hamlenin hak ettiği belirsizdir. Yöntemler bu payı geriye doğru dağıtmaya çalışır.

İkinci zorluk dengedir: bilinen iyi seçeneği tekrarlamak mı, yeni bir şey denemek mi? Yalnızca bildiğini yapan ajan daha iyisini hiç bulamaz; sürekli yeni şey deneyen ajan ise elindekini kullanamaz.

Üçüncüsü ve en can alıcısı, ödülün nasıl tanımlandığıdır. Kötü tanımlanmış bir ödül, hedefi değil puanı kovalayan bir davranış üretir: ajan kuralların açığını bulur, sayaç artar, asıl iş yapılmaz.

## Örnek

Dil modellerinin insan tercihine göre ayarlanmasında da bu fikir kullanılır. İnsanlar iki cevaptan hangisini yeğlediğini işaretler, bu tercihlerden bir puanlama çıkarılır ve model bu puanı artıracak şekilde eğitilir; yaygın adı [[rlhf|RLHF]]dir.

## Dikkat

Ödülü tanımlamak, doğru cevabı vermekten kolay değildir; yalnızca zorluğu başka yere taşır. [[alignment|Hizalama]] tartışmalarının bir kısmı doğrudan bu noktadan çıkar: ölçtüğün şey ile istediğin şey aynı olmadığında, sistem ölçtüğünü optimize eder.
