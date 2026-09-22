---
term: "Custody"
tr: "Saklama"
aliases: ["saklama"]
category: piyasa
subcategory: "Fiat ve saklama"
level: orta
short: "Bir varlığın anahtarının kimde durduğu; yani kimin onu hareket ettirebileceğini belirleyen saklama biçimi."
related: [custodian, self-custody, custodial-wallet, non-custodial-wallet, key-management, proof-of-reserves]
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

Custody, bir varlığın fiilen kimin elinde durduğu sorusudur. Kripto tarafında bu soru tek bir şeye indirgenir: [[private-key|özel anahtar]] kimde? Zincir, sahipliği bir isim kaydıyla değil, geçerli imza üretebilme yetisiyle tanır. Bu yüzden "benim" demek ile "taşıyabiliyorum" demek aynı şey değildir, ve önemli olan ikincisidir.

## Nasıl çalışır?

İki uç vardır. Bir uçta anahtar baştan sona sende durur ([[self-custody|kendi saklaman]], [[non-custodial-wallet|non-custodial cüzdan]]): kimse bakiyeni donduramaz, ama kaybettiğinde de geri getirebilecek kimse yoktur.

Diğer uçta anahtarı bir kurum tutar ([[custodial-wallet|custodial cüzdan]]). Orada "bakiyem" dediğin şey zincirdeki bir adres değil, kurumun kendi defterindeki bir kayıttır; varlık zincir üstünde çoğu zaman diğer müşterilerinkiyle birlikte ortak adreslerde durur. Yani elindeki şey varlığın kendisi değil, kuruma karşı bir alacaktır.

Arada karma biçimler var. İmza yetkisini birden fazla tarafa bölen düzenekler ([[multisig|çoklu imza]], [[mpc-wallet|MPC]]) ya da anahtarın bir parçasını kullanıcıda, bir parçasını hizmet sağlayıcıda tutan kurulumlar. Ortak amaçları aynıdır: tek bir kişinin ya da tek bir sunucunun tek başına varlığı taşıyamaması.

## Dikkat

Saklama biçimi bir güvenlik derecesi değil, bir yetki dağılımıdır. Sorulacak doğru soru "hangisi daha güvenli" değil, "bu düzende kime güvenmek zorundayım ve bir şey ters giderse kimden hesap sorabilirim" sorusudur. Cevap kişiye göre değişir; ikisinin de kaybetme yolu vardır, ama yolları farklıdır.

Kurumsal saklama birçok yerde ayrı bir düzenlemeye tabidir ve beraberinde yükümlülükler getirir. Hangi ülkede hangi kuralın geçerli olduğu değişir; bu tarafın ayrıntısı [[custodian|saklamacı]] yazısında.
