---
term: "Liquidation"
tr: "Tasfiye"
aliases: ["likidasyon"]
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Teminatın bir kısmının, sahibinin onayı alınmadan satılarak borcun kapatılması."
related: [liquidation-threshold, health-factor, collateral, bad-debt, price-feed, borrowing-defi]
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

Tasfiye, bir pozisyon [[liquidation-threshold|tasfiye eşiğinin]] ötesine geçtiğinde teminatın bir kısmının satılıp borcun kapatılmasıdır. Kararı veren sen değilsin, bir yetkili de değil; koşul sağlandığı anda sözleşme bu kapıyı herkese açar.

Bunun amacı seni cezalandırmak değil, havuzu korumaktır. Borcun arkasındaki teminat erimeden borcun kapanması gerekir; yoksa açık, borç veren tarafın üstünde kalır.

## Nasıl çalışır?

Teminatın ve borcun değeri [[price-feed|fiyat beslemesinden]] okunur. Pozisyon eşiği geçtiği anda tasfiye çağrısı çağrılabilir hâle gelir.

Çağrıyı çoğunlukla bu iş için yazılmış botlar yapar. Tasfiye eden, borcun bir kısmını kendi parasıyla kapatır ve karşılığında teminattan piyasa fiyatının altında bir fiyatla alır. Aradaki indirime **tasfiye primi** denir; protokolün bu işi hızlı yaptırmak için ödediği bedeldir.

Varsayımsal bir örnek: diyelim ki 100 birim teminatın, 75 birim borcun var ve bu varlık için eşik %80. Teminatın değeri 90'a inerse borcun teminata oranı eşiği aşar. Bir bot gelir, borcunun bir kısmını kapatır, karşılığında teminatından o kısmın karşılığı artı primi alır. Borcun azalır, teminatın azalır, pozisyonun eşiğin altına geri döner.

## Dikkat

Tasfiye senin onayına bağlı değildir. Bildirim gelmez, süre tanınmaz, "yarına kadar toparlarım" seçeneği yoktur.

Tasfiye primi de bir ceza kalemi değil, doğrudan bir aktarımdır: kaybettiğin teminatın bir kısmı tasfiye eden tarafın kazancı olarak cebine girer.

Mekanizmanın iki kırılma noktası var. Birincisi hız: fiyat tek harekette çok düşerse ya da ağ tıkalıysa işlemler zamanında geçmez, teminat borcun altına iner ve [[bad-debt|kötü borç]] doğar. İkincisi veri: fiyatı besleme söyler. Besleme yanlış ya da bayat bir değer verirse pozisyonun gerçekte sağlamken tasfiye edilebilir — [[oracle-manipulation|oracle manipülasyonunun]] hedefi tam olarak budur.
