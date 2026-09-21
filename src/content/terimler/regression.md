---
term: "Regression"
tr: "Regresyon"
aliases: ["regresyon"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Kategori değil sayısal bir değer tahmin eden denetimli öğrenme işi: fiyat, süre, sıcaklık."
related: [classification, supervised-learning, loss-function, feature]
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

Regresyon, çıktısı bir sayı olan tahmin işidir: bir evin fiyatı, bir teslimatın kaç dakika süreceği, yarının sıcaklığı. [[classification|Sınıflandırmadan]] tek farkı budur — orada cevap sınırlı seçeneklerden biri, burada bir ölçek üzerindeki herhangi bir değerdir. İkisi de [[supervised-learning|denetimli öğrenmedir]] ve ikisinde de doğru cevap eğitim verisinde bulunur.

## Nasıl çalışır?

Model, girdi [[feature|özniteliklerinden]] bir sayı üretir ve bu sayı gerçek değerle karşılaştırılır. Hata artık "doğru mu yanlış mı" değil, "ne kadar uzak" sorusudur; eğitim bu uzaklığı küçültmeye çalışır ([[loss-function|kayıp fonksiyonu]]).

Uzaklığı nasıl ölçtüğün sonucu değiştirir. Büyük sapmaları ağır cezalandıran bir ölçüt, tek bir uç örnek yüzünden modelin tamamını kaydırabilir; daha yumuşak bir ölçüt ise uçları fazla önemsemez. Hangisinin doğru olduğu problemin kendisine bağlıdır: bir tahmin on birim şaşırdığında zarar iki kat mı, yüz kat mı artıyor?

Sonucu tek bir sayı olarak okumak da çoğu zaman eksiktir. "Bu ev şu kadar eder" ile "bu ev şu aralıkta bir yerdedir" farklı iddialardır; ikincisi belirsizliği de söyler ve karar verirken daha dürüsttür.

## Dikkat

Model eğitimde gördüğü aralığın dışına çıkınca güvenilmez olur. Belirli büyüklükteki evlerle eğitilmiş bir model, çok daha büyük bir ev için yine bir sayı üretir; o sayının arkasında hiçbir örnek yoktur.

Bir de kelimenin ikinci anlamı var: yazılımda "regresyon", çalışan bir özelliğin yeni bir değişiklikle bozulmasını anlatır. Aynı kelime, birbiriyle ilgisiz iki konu.
