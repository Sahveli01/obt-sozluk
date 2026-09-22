---
term: "Forced Withdrawal (Escape Hatch)"
tr: ""
aliases: ["escape hatch"]
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "Sıralayıcı işlemini almasa bile kullanıcının ana zincir üzerinden çıkışını zorlayabilmesi; rollup'ı sansüre karşı koruyan acil kapı."
related: [sequencer, rollup, censorship-resistance, challenge-period, layer-2]
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

Bir rollup'ta işlemlerini normalde [[sequencer|sıralayıcıya]] gönderirsin. Sıralayıcı seni görmezden gelirse ne olur? Zorunlu çıkış bu sorunun cevabıdır: kullanıcı, işlemini doğrudan ana zincirdeki sözleşmeye yazdırabilir ve sıralayıcı onu dâhil etmezse çıkışını kendi başına tamamlayabilir. Terim çevrilmeden kullanılır; "acil kapı" ancak açıklama olarak geçer.

## Benzetme

Dilekçeni almayan bir memurla tartışmak sonuçsuzdur. Ama aynı dilekçeyi o memurun bağlı olduğu üst makama verebiliyorsan, işin artık onun keyfine kalmaz: kayıt yukarıda açılmıştır ve memur dosyayı elinde tutamaz. Memur seni yine oyalayabilir, sıraya en sona koyabilir — ama tamamen dışarıda bırakamaz.

## Nasıl çalışır?

Ana zincirdeki rollup sözleşmesinde herkese açık bir işlem kuyruğu bulunur. Buraya yazılan işlem rollup'ın resmî girdisi sayılır.

Sıralayıcının bu işlemi belirli bir süre içinde sıraya alma zorunluluğu vardır. Almazsa, süre dolduğunda kullanıcı ana zincir üzerinden doğrudan ilerleyebilir: işlemin zorla dâhil edilmesini sağlar ya da bakiyesini ispatlayıp çıkışını açar. Çıkışın kesinleşmesi yine rollup'ın normal kurallarına — [[challenge-period|itiraz süresine]] ya da kanıt yayımlanmasına — tabidir.

## Dikkat

Bu mekanizma, "sıralayıcı merkezi ama paran güvende" cümlesinin dayanağıdır. O cümle ancak üç şey birlikte doğruysa geçerlidir: zorunlu çıkış yolu gerçekten açık, ana zincire işlem gönderecek kadar gazın var ve rollup'ın verisi erişilebilir durumda.

Üçüncüsü sık atlanır: bakiyeni ispatlamak için zincirin durumunu yeniden kurabilmen gerekir. Veri yayımlanmıyorsa acil kapı kilitli kalır.

Bir de yükseltme yetkisi vardır. Sözleşmeyi bir yönetici tek başına ve beklemesiz değiştirebiliyorsa, o kapı kâğıt üstünde kalmış olabilir. Bir rollup'ı değerlendirirken sorulacak ilk sorulardan biri budur.
