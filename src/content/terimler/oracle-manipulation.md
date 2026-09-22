---
term: "Oracle Manipulation"
tr: ""
aliases: []
category: guvenlik
subcategory: "Ekonomik ve protokol saldırıları"
level: orta
short: "Bir sözleşmenin karar verirken baktığı veriyi kısa süreliğine bozup onu yanlış davranmaya zorlama."
related: [oracle, price-feed, time-weighted-average-price-twap, flash-loan-attack, liquidation, circuit-breaker]
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

[[oracle|Oracle]], bir sözleşmenin dış dünyaya açılan tek penceresidir ve sözleşme o pencereden geleni sorgulamaz. **Oracle manipülasyonu**, pencereden görüneni kısa bir süreliğine bozup sözleşmeyi yanlış ama kurallara tamamen uygun bir karar vermeye zorlamaktır.

Bu bir kod hatası değil, kaynak seçimi hatasıdır. Kökeninde neredeyse her zaman aynı varsayım durur: "tek bir piyasanın o anki fiyatı, doğru fiyattır."

Terim İngilizce kullanılır; "oracle" kelimesinin kendisi çevrilmediği için bütünü de çevrilmiyor.

## Benzetme

Bir binanın kaloriferini termostat yönetiyor. Termostat dürüsttür, yalnızca ucundaki sensöre bakar. Sensörün dibinde bir dakikalığına buzlu su tutarsan sistem "bina dondu" der ve kazanı sonuna kadar açar.

Kimse termostatı kırmadı, ayarını değiştirmedi. Yalnızca ölçtüğü yeri bir anlığına bozdu — ve termostat, kendisine verilen kuralı kusursuz biçimde uyguladı.

## Nasıl çalışır?

Zayıf nokta, verinin nereden ve hangi anda okunduğudur. Fiyatı tek bir havuzun o anki oranından okuyan bir sözleşme, aslında "bu havuzun dengesi bozulamaz" varsayımına güvenmektedir. Oysa havuzun dengesi tek bir büyük işlemle, hatta tek bir blok içinde bozulup yine aynı blokta düzeltilebilir. [[flash-loan-attack|Flash loan saldırısı]] bu adımın sermaye şartını da ortadan kaldırır.

Yanlış değer zincire yazıldığı anda sonuç, fiyatın kendisinde değil ona bağlı kararlarda çıkar: sağlam bir pozisyon haksız yere [[liquidation|tasfiye]] edilir, teminatı yetersiz bir borç onaylanır, bir varlık olması gerekenin çok altında ya da üstünde değerlenir. Sözleşme bunların hiçbirini hata saymaz; kendi kurallarını uygulamıştır.

## Dikkat

Savunma tek bir cümlede toplanır: kritik bir karar, tek bir kaynağın anlık değerine bağlanmaz.

- Veriyi birbirinden bağımsız birden çok kaynaktan al ve birleştir ([[price-feed|fiyat beslemesi]] bunun için vardır).
- Anlık değer yerine belli bir süreye yayılmış ortalamayı kullan ([[time-weighted-average-price-twap|TWAP]]); bir anı bozmak ucuzdur, bir süreyi bozuk tutmak pahalıdır.
- Gelen verinin ne zaman güncellendiğini kontrol et. Bayat veri de yanlış veridir ve sessizce yanlıştır.
- Makul olmayan sapmalarda işlemi durduran bir eşik koy ([[circuit-breaker|devre kesici]]).

Ortalama almak manipülasyonu imkânsız kılmaz, pahalı kılar. Sığ bir piyasadan alınan ya da penceresi kısa tutulan bir ortalama hâlâ bozulabilir. Doğru soru "bu savunma var mı" değil, "bu savunmayı aşmanın maliyeti ele geçecek tutardan büyük mü" sorusudur.
