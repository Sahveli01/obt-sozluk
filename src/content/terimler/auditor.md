---
term: "Auditor"
tr: "Denetçi"
aliases: ["denetçi"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Bir sözleşmeyi ya da sistemi açık bulmak amacıyla inceleyen kişi veya firma."
related: [smart-contract-audit, whitehat, bug-bounty, static-analysis, threat-model]
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

Denetçi, bir sistemi açık bulmak için inceleyen kişi ya da firmadır. Geliştiriciden farkı bakış açısıdır: geliştirici kodun çalıştığını göstermeye, denetçi çalışmadığı durumu bulmaya uğraşır. Bir [[smart-contract-audit|denetimin]] kalitesi büyük ölçüde bu bakışın ne kadar inatçı olduğuna bağlıdır.

## Nasıl çalışır?

Denetçi işe kodu okuyarak başlamaz. Önce sözleşmenin **ne yapması gerektiğini** anlar: kim hangi yetkiye sahip olmalı, hangi koşulda para çıkmalı, hangi sayı hiçbir zaman negatife düşmemeli. Bunlar belliyken kodu okur ve iki metni karşılaştırır. Belge yoksa ilk bulgu budur, çünkü "doğru davranış" tanımlanmadan "yanlış davranış" gösterilemez.

İnceleme sırasında araçlar ([[static-analysis|statik analiz]], [[fuzzing|fuzzing]], test koşuları) zemin taramasını yapar; denetçinin asıl katkısı iş mantığındaki yanlış varsayımlardır — aracın bulamayacağı şey tam olarak budur, çünkü araç neyin amaçlandığını bilmez.

Her bulgu ciddiyet derecesiyle ve düzeltme önerisiyle yazılır. Ekip düzeltir, denetçi düzeltmeyi tekrar okur; bazı bulgular düzeltilmeyip "risk kabul edildi" notuyla kapatılır ve bu da rapora geçer.

## Dikkat

Denetçi onay vermez, gördüğünü yazar. Rapordaki "bulunan açıklar düzeltilmiştir" cümlesi "başka açık yoktur" anlamına gelmez; kimse bunu söyleyemez.

Aynı kodu iki ayrı denetçi çoğu zaman farklı bulgularla çıkarır. Bu bir kusur değil, yöntemin doğasıdır: bu yüzden büyük protokoller birden çok denetim yaptırır ve üstüne sürekli açık olan bir [[bug-bounty|ödül programı]] çalıştırır.

Son olarak denetçi bağımsız olmalıdır. Kodu yazan ekibin kendi içinden biri aynı kör noktaları paylaşır; ödemenin "temiz rapor" şartına bağlanması ise işin doğasını bozar.
