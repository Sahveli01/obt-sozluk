---
term: "Base"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "Bir kripto para borsası tarafından başlatılan ve işletilen, hazır bir rollup yığını üzerine kurulu Ethereum katman 2 ağı."
related: [layer-2, optimistic-rollup, sequencer, rollup, forced-withdrawal-escape-hatch, ethereum]
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

Base, [[ethereum|Ethereum]] üzerinde çalışan bir [[layer-2|katman 2]] ağıdır. İki tercih onu tanımlar: sıfırdan bir mimari tasarlamak yerine hazır ve açık kaynak bir [[rollup|rollup]] yığınını kullanmak, ve bir kripto para borsası tarafından başlatılıp işletilmek. Çıkış amacı, borsanın kullanıcılarını ve uygulamaları, güvenliği Ethereum'a yaslanan ama yürütmesi ana zincirin dışında olan bir ortama taşımaktı.

## Nasıl çalışır?

İşlemler Base üzerinde yürütülür, verileri Ethereum'a yazılır ve sonuçlar [[optimistic-rollup|iyimser rollup]] mantığıyla doğru varsayılıp itiraza açık bırakılır. Sözleşmeler Ethereum'dakiyle aynı sanal makine için yazıldığından mevcut araçlar çoğunlukla değişmeden çalışır.

Yani teknik mekanizma, aynı yığını kullanan diğer zincirlerle ortaktır. Base'i ayrı bir başlık yapan şey mimarisi değil, kim tarafından işletildiğidir.

## Dikkat

Güven varsayımı açıkça söylenmelidir: yazıldığı tarih itibarıyla hem [[sequencer|sıralayıcıyı]] hem de sözleşmeleri yükseltebilecek anahtarları elinde tutan taraf, ağı başlatan şirkettir. Bu şirket işlem sırasını belirler, teorik olarak işlemleri geciktirebilir ya da dışarıda bırakabilir.

Buna karşılık işlem verisi ana zincire yazıldığı için durum dışarıdan yeniden kurulabilir ve [[forced-withdrawal-escape-hatch|zorunlu çekim]] yolları, sıralayıcı işbirliği yapmasa bile varlıkların Ethereum'a dönebilmesini hedefler.

Kurumsal bir tarafın işlettiği bir zincirde düzenleyici talepler ve şirket kararları ağın davranışını etkileyebilir. Bu, dağıtık bir doğrulayıcı kümesine sahip zincirlerdekinden farklı türde bir risktir; daha az ya da daha çok değil, başka cinsten.
