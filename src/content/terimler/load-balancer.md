---
term: "Load Balancer"
tr: "Yük dengeleyici"
aliases: []
category: web
subcategory: "Yayınlama"
level: orta
short: "Gelen istekleri aynı işi yapan birden fazla sunucuya dağıtarak hiçbirinin tek başına boğulmamasını sağlayan katman."
related: [server, scalability, hosting, latency, rate-limiting]
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

Yük dengeleyici, gelen istekleri aynı işi yapan birden çok [[server|sunucuya]] dağıtan katmandır. Kullanıcı tek bir adrese bağlanır ve arkada kaç makine olduğunu hiç bilmez.

Tek makine yetmediğinde iki yol vardır: makineyi büyütmek ya da makine sayısını artırmak. İkincisi ([[scalability|yatay ölçeklenme]]) ancak önde istekleri paylaştıran bir dengeleyici varsa mümkün olur.

## Nasıl çalışır?

Dengeleyici, her isteği bir kurala göre bir makineye yollar. Kural sırayla dağıtmak kadar basit olabileceği gibi, o anda en az açık bağlantısı olanı ya da en hızlı cevap vereni seçmek de olabilir.

İkinci ve daha kritik işi sağlık kontrolüdür: belirli aralıklarla her sunucuya küçük bir istek gönderir, cevap vermeyeni havuzdan çıkarır ve düzeldiğinde geri alır. Bir makine çöktüğünde kullanıcı bunu fark etmez, çünkü isteği zaten ayakta olanlardan birine düşer.

Aynı mekanizma yayına almayı da yumuşatır: sunucular teker teker havuzdan çıkarılıp yeni sürümle geri konabildiği için site hiç kapanmadan güncellenir.

Bu yapının bir bedeli vardır. Aynı kullanıcının iki isteği farklı makinelere düşebileceğinden, oturum bilgisini tek bir makinenin belleğinde tutan uygulamalar bozulur; böyle bilgilerin hepsinin ortak bir yerde durması gerekir.

## Dikkat

Dengeleyicinin kendisi tek hata noktasına dönüşebilir: arkadaki bütün sunucular sağlamken o düşerse site erişilemez olur. Bu yüzden ciddi kurulumlarda dengeleyici de çoğaltılır.

İkinci tuzak, sorunu çözdüğünü sanmaktır. Dengeleyici uygulama sunucularını çoğaltır ama hepsi aynı veritabanına bağlıysa darboğaz oraya kayar; yük dağıtmak, sistemin en dar halkasını genişletmenin yerine geçmez.
