---
term: "Constitutional AI"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Modelin, yazılı bir ilkeler metnine bakarak kendi çıktılarını eleştirip düzeltmesine dayanan eğitim yaklaşımı."
related: [rlhf, alignment, ai-safety, instruction-tuning, anthropic]
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

Constitutional AI, bir modelin davranışını yazılı bir ilkeler metnine dayandıran eğitim yaklaşımıdır. Yöntemi [[anthropic]] geliştirmiştir; "anayasa" (constitution) dediği şey, modele neyin kabul edilebilir olduğunu anlatan, açıkça yazılmış kurallar listesidir. Bir yöntemin özel adı olduğu için Türkçeye çevrilmeden kullanılır.

## Nasıl çalışır?

İki aşaması vardır. Birincisinde model bir isteğe cevap verir, sonra kendi cevabını anayasadaki ilkelere göre eleştirmesi ve bu eleştiriye göre yeniden yazması istenir. Ortaya çıkan düzeltilmiş cevaplarla model yeniden eğitilir.

İkinci aşamada model aynı isteğe birden çok cevap üretir ve hangisinin ilkelere daha uygun olduğunu yine bir model seçer. Bu seçimler, [[rlhf|RLHF]]'te insanların yaptığı karşılaştırmaların yerine geçer; eğitim döngüsünün geri kalanı benzer biçimde işler.

İnsan bütünüyle devre dışı kalmaz: ilkeleri insanlar yazar, sonucu insanlar ölçer. Değişen şey, tek tek örneklerin insan eliyle karşılaştırılması yükünün azalmasıdır.

## Dikkat

Yaklaşımın öne sürdüğü şey daha iyi bir model üretmek değil, davranışın dayanağını okunabilir kılmaktır: ilkeler yazılı olduğu için tartışılabilir ve değiştirilebilir. Buna karşılık ilkelerin kendisi bir tercihtir; kimin yazdığı ve nasıl yorumlandığı sonucu belirler.

İnsan geri bildirimine dayanan yöntemlerle rakip değil, birlikte kullanılabilen yaklaşımlardır; kurumlar genellikle ikisini karıştırarak çalışır. Hiçbiri modelin ilkelere her durumda uyacağını garanti etmez — bu yüzden bağımsız [[evals|değerlendirmeler]] ve [[red-teaming|kırmızı takım]] çalışmaları ayrıca gerekir.
