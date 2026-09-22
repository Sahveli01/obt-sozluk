---
term: "Liquidity Mining"
tr: ""
aliases: []
category: defi
subcategory: "Getiri"
level: orta
short: "Bir protokolün kendi token'ını basıp dağıtarak havuzlarına likidite çekmesi."
related: [yield-farming, liquidity-provider-lp, token-inflation, protocol-owned-liquidity, governance-token, emission-schedule]
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

Liquidity mining, bir protokolün kendi token'ını basıp dağıtarak havuzlarına likidite çekmesidir. Protokolün ihtiyacı olan şey derinliktir: havuzda ne kadar çok varlık varsa işlemler o kadar az kayıpla geçer. Bunu sağlayan kullanıcıya, işlem ücretlerinden gelen payın üstüne bir de protokolün yeni bastığı token verilir.

Adındaki "madencilik", [[mining|madencilikle]] kurulan bir benzerlikten gelir: orada da katkı karşılığında yeni token basılır. Fark, katkının hesap gücü değil likidite olmasıdır. Türkçede yerleşik karşılığı yok.

## Benzetme

Yeni açılan bir dükkânın, vitrini dolu görünsün diye komşu esnaftan ödünç mal almasına benzer. Mal dükkânın değildir; ödünç verenlere karşılığında dükkânın hissesinden verilir. Vitrin dolu olduğu için müşteri girer, müşteri girdiği için başkası da girer. Ama mal ödünçtür: hisse vermek kesildiği gün komşular mallarını toplar ve vitrin bir günde boşalır. Bu arada dükkânın hissesi de her ödünç mal için biraz daha bölünmüştür.

## Nasıl çalışır?

Protokol önce bir [[emission-schedule|emisyon takvimi]] belirler: hangi havuza, hangi hızda, ne kadar süre ödül verilecek. Kullanıcı [[liquidity-provider-lp|likidite sağlayıcı]] olarak havuza girer ve pozisyonunu ödül sözleşmesine kilitler; ödül havuzdaki payı oranında birikir.

Dağıtılan token çoğu zaman aynı zamanda bir [[governance-token|yönetişim token'ıdır]]. Amaç yalnızca likidite kiralamak değil, protokolü kullanan kişileri karar mekanizmasına sokmaktır. Kullanıcı tarafından bakıldığında aynı programa katılmanın adı [[yield-farming]].

## Dikkat

Bu bir dağıtım değil, bir satın almadır: protokol bugün token basarak yarının likiditesini kiralar. Bedelini ödeyen taraf da belirlidir — yeni basılan her token mevcut sahiplerin payını seyreltir, yani teşvik [[token-inflation|arz artışı]] olarak faturalanır.

Kiralanan likidite kalıcı değildir. Programın hızı düştüğü ya da süresi dolduğu anda sağlayıcıların büyük kısmı çıkar; havuz derinliği bir ilan kadar hızlı erir. Protokollerin kendi likiditesine sahip olmayı ([[protocol-owned-liquidity]]) tartışmasının sebebi budur.

İlan edilen oran da bir getiri sözü değildir: çoğunlukla o anki emisyon hızının ve ödül token'ının o anki fiyatının çarpımıdır, ikisi de değişir. Programa katılan taraf için ödül, altındaki pozisyonun riskini ortadan kaldırmaz; [[impermanent-loss|kalıcı olmayan kayıp]] ve sözleşme riski aynen yerinde durur.
