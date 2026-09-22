---
term: "Token Generation Event (TGE)"
tr: ""
aliases: ["tge"]
category: tokenlar
subcategory: "Dağıtım ve lansman"
level: orta
short: "Bir projenin token'ının zincirde ilk kez yaratıldığı ve ilk sahiplerine yazıldığı an."
related: [mint, token-unlock, vesting, allocation, presale, initial-dex-offering-ido]
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

TGE, bir token'ın zincirde ilk kez var edildiği andır. O ana kadar token bir belgede, bir tabloda ve bir takvimde durur; TGE ile birlikte gerçek bir sözleşme, gerçek bakiyeler ve gerçek bir arz haline gelir.

TGE bir satış değildir. Satış daha önce yapılmış olabilir ([[presale|ön satış]]), TGE ile aynı güne denk getirilebilir ya da hiç yapılmamış olabilir. TGE yalnızca doğum anını işaret eder: arz bu anda yaratılır ve ilk sahiplerine yazılır.

Terim Türkçeye çevrilmeden kullanılıyor; "token yaratım olayı" sektörde yerleşmedi.

## Nasıl çalışır?

Teknik olarak TGE, arzın [[mint|basılması]] demektir. Sözleşme zincire dağıtılır ve toplam arz ya tek seferde yaratılır ya da programlanmış bir takvime bağlanır. Aynı anda arzın nasıl bölüneceği de uygulanır: ekip, erken katılanlar, topluluk, hazine ([[allocation|pay dağılımı]]).

Payların hepsi o gün harcanabilir olmaz. Çoğu plan ekibin ve erken alanların payını bir takvimle serbest bırakır ([[vesting|hak ediş]]); takvimdeki her serbest bırakma anı bir [[token-unlock|kilit açılışı]]dır. İlk işlem günü de çoğu zaman TGE'nin hemen ardına konur; token bir havuza ya da bir borsaya o gün girer ([[initial-dex-offering-ido|IDO]]).

## Dikkat

"TGE oldu" cümlesi "token dağıtıldı" demek değildir. Doğum anı ile dağıtım takvimi ayrı şeylerdir: TGE'de yaratılan arzın büyük kısmı genellikle kilitlidir ve aylar, bazen yıllar boyunca takvime göre açılır.

Bu yüzden bir token'a bakarken "kaç tane var" sorusunun yanına "bugün kaçı serbest" sorusu da konur. İkisi arasındaki fark, ilerideki her kilit açılışında dolaşıma girecek miktardır.
