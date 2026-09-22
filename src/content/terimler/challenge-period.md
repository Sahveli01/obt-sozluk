---
term: "Challenge Period"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "Bir rollup sonucunun kesinleşmeden önce itiraza açık kaldığı süre; süre dolduğunda sonuç ana zincirde kesinleşir."
related: [optimistic-rollup, fraud-proof, withdrawal-period, forced-withdrawal-escape-hatch, finality]
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

[[optimistic-rollup|Optimistic rollup]] yayımladığı sonucu doğru varsayar. Bu varsayımın bir anlamı olması için, yanlışsa çürütülebileceği bir zaman aralığı tanımlanır. İtiraz süresi budur: sonucun askıda kaldığı, herkesin [[fraud-proof|hile kanıtı]] sunabildiği pencere. Türkçede "itiraz süresi" açıklama olarak kullanılır, ama terimin yerleşik karşılığı yoktur; sektörde İngilizcesi geçer.

## Nasıl çalışır?

Sonuç ana zincire gönderildiği anda süre başlar. Pencere kapanana kadar kimse o sonuca dayanan bir çıkışı tamamlayamaz. İtiraz gelirse tartışma çözülene kadar sonuç kesinleşmez; gelmezse süre dolduğunda zincir sonucu kesin kabul eder.

Sürenin uzunluğu bir hız tercihi değil, bir güvenlik bütçesidir. İçine şunların hepsi sığmalıdır: bağımsız bir tarafın sonucu yeniden hesaplayıp yanlışı fark etmesi, kanıtı hazırlaması ve ana zincir tıkanıkken bile işlemini oraya sokabilmesi. Çoğu tasarımda bu yüzden saatlerle değil günlerle ölçülür.

## Dikkat

Süreyi kısaltmak kullanıcıyı sevindirir ama saldırıyı ucuzlatır. Pencere ne kadar darsa, itirazcıyı o süre boyunca sansürlemek — ana zincirdeki blok alanını doldurarak ya da işlemini dışarıda bırakarak — o kadar az maliyetlidir. Bu yüzden "çıkışlar neden bu kadar uzun sürüyor" sorusunun cevabı yavaşlık değil, itirazcıya tanınan hareket alanıdır.

Bu süre boyunca paran kayıp değildir; rollup üzerinde kullanılabilir durumdadır. Askıda olan şey, ana zincirdeki [[finality|kesinliktir]].

Geçerlilik kanıtı kullanan tasarımlarda böyle bir pencere yoktur: orada beklenen şey itiraz değil, kanıtın üretilip yayımlanmasıdır.
