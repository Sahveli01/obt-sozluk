---
term: "Yield Farming"
tr: ""
aliases: []
category: defi
subcategory: "Getiri"
level: orta
short: "Varlıkları getiri üreten protokollere yatırıp dağıtılan teşvikler arasında dolaşarak ödül toplama pratiği."
related: [liquidity-mining, liquidity-provider-lp, impermanent-loss, apy, yield-aggregator, token-inflation]
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

Yield farming, elindeki varlıkları getiri üreten protokollere yatırıp dağıtılan ödülleri toplama pratiğidir. Tek bir yere bağlı kalmak gerekmez: bir programın teşviki azalınca pozisyon kapatılır, ödül veren başka bir yere taşınılır. Adı buradan gelir — ekilen tarla sürekli değişir.

Türkçede yerleşik bir karşılığı yok; "getiri çiftçiliği" gibi çeviriler denense de sektörde İngilizcesiyle kullanılır.

## Benzetme

Hoş geldin kampanyası bitince bankasını değiştiren kişi gibi. Kampanya boyunca hesabında bir avantaj vardır; süre dolunca koşullar herkesinkine döner ve kişi bir sonraki kampanyayı arar. Ama her taşınmanın kendi masrafı vardır: evrak, bekleme, aradaki boşluk. Yalnızca kampanyanın büyüklüğüne bakıp bu masrafı hesaba katmayan kişi, kâğıt üstünde kazanırken eline daha az geçmiş olabilir.

## Nasıl çalışır?

Tipik döngü şöyledir: varlık bir [[liquidity-pool|likidite havuzuna]] yatırılır, karşılığında pozisyonu temsil eden [[lp-token]] alınır, bu token protokolün ödül sözleşmesine kilitlenir ve ödül token'ı zamanla birikir. Kullanıcı ödülü toplar; ya elinde tutar, ya satar, ya da geri yatırarak bileşik hâle getirir.

Bu adımların her biri ayrı bir işlemdir, yani ayrı bir [[gas|işlem ücreti]] demektir. Küçük tutarlarda ücretler toplanan ödülü yiyebilir. Aynı döngüyü otomatik çeviren üst katman [[yield-aggregator|getiri toplayıcılarıdır]].

## Dikkat

Görünen oran bir vaat değil, anlık bir hesaptır. İlan edilen [[apy]] çoğu zaman ödül token'ının o andaki fiyatı ve o andaki dağıtım hızı üzerinden hesaplanır; ikisi de gün içinde değişebilir. Havuza yeni giren her kişi de payı küçültür.

Ödülün nereden geldiği ayrı bir sorudur. Çoğu programda ödül protokolün yeni bastığı token'dır; yani getirinin bir kısmını, aynı token'ı tutan herkes [[token-inflation|arz artışı]] olarak öder. Bu dağıtım mekanizmasının adı [[liquidity-mining]] ve programın süresi bellidir; teşvik kesildiğinde havuzdaki likiditenin büyük kısmı da gider.

Asıl risk ödülün büyüklüğünde değil, altındaki pozisyondadır. İki varlıklı bir havuzda fiyatlar ayrıştığında [[impermanent-loss|kalıcı olmayan kayıp]] ortaya çıkar ve toplanan ödülden büyük olabilir. Ayrıca yatırdığın varlık bir sözleşmenin içinde durur: oradaki bir açık ya da kötüye kullanılan bir yönetici yetkisi, getiriden bağımsız olarak anaparanın tamamını götürebilir.
