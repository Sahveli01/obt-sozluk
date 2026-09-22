---
term: "Liquidation Threshold"
tr: "Tasfiye eşiği"
aliases: ["tasfiye eşiği"]
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Bir teminatın taşıyabileceği borcun sınırı; aşıldığı anda pozisyon tasfiyeye açılır."
related: [liquidation, health-factor, loan-to-value-ltv, collateral-ratio, price-feed, bad-debt]
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

Tasfiye eşiği, bir teminat varlığının değerinin en fazla ne kadarının borç olarak taşınabileceğini söyleyen sınırdır. Bu sınır aşıldığı anda pozisyon [[liquidation|tasfiyeye]] açılır.

Eşik her teminat varlığı için ayrı belirlenir. Fiyatı sert hareket eden bir varlıkta aşağı çekilir, fiyatının dar bir bantta kalması beklenen bir varlıkta yukarı bırakılır. Mantık basit: eşik, tasfiyenin tamamlanması için gereken payı bırakacak kadar aşağıda olmalıdır.

## Nasıl çalışır?

Eşik, borç alırken izin verilen azami [[loan-to-value-ltv|LTV]] tavanının üstünde durur. Aradaki boşluk kasıtlı bırakılmış bir tampondur: borç aldığın anda sınırın dibinde olmazsın, fiyat oynadığında tepki verecek bir aralığın olur.

Pozisyonun eşiği aşıp aşmadığı her blokta yeniden hesaplanabilir, çünkü hesabın girdisi olan fiyat [[price-feed|fiyat beslemesinden]] gelir. Birden fazla teminatın varsa her biri kendi eşiğiyle çarpılıp toplanır; sonuç tek bir sayıya, [[health-factor|health factor]]'a indirgenir.

Eşik bir yönetişim parametresidir. [[governance|Yönetişim]] oylamasıyla aşağı çekilebilir ve bu, senin pozisyonunda hiçbir şey değişmeden pozisyonunun tasfiyeye yaklaşması anlamına gelir.

## Dikkat

Eşik aşıldığında kimse sana haber vermez. Bildirim, mühlet ya da onay adımı yoktur; şart sağlanır sağlanmaz işlem herkese açılır ve genellikle saniyeler içinde bir bot tarafından çalıştırılır.

Eşiğin bir adım altına düşmenin bedeli yalnızca borcunun kapanması da değildir: tasfiye edene prim ödenir, yani kaybının bir kısmı doğrudan bir başkasının kazancı olur.

İki durumda mekanizma tutmaz. Fiyat tek harekette eşiği aşıp teminatı borcun altına indirirse ya da ağ tıkanıp tasfiye işlemleri zamanında geçmezse tasfiye geç kalır ve [[bad-debt|kötü borç]] doğar. Eşiğin dayandığı fiyat yanlışsa da sağlam bir pozisyon haksız yere tasfiye edilebilir; [[oracle-manipulation|oracle manipülasyonu]] bu kapıyı zorlar.

Son olarak eşiği komşu ölçülerle karıştırma: LTV ile [[collateral-ratio|teminat oranı]] pozisyonun o anki konumunu, eşik tasfiyenin başladığı sınırı, health factor ise o sınıra kalan mesafeyi gösterir.
