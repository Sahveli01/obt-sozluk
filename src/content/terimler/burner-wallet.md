---
term: "Burner Wallet"
tr: ""
aliases: ["burner cuzdan"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: orta
short: "Riskli bir deneme için açılan, içinde az varlık tutulan ve gerektiğinde bırakılabilen geçici cüzdan."
related: [wallet, approve, wallet-drainer, airdrop-farming, hot-wallet]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Burner cüzdan, asıl varlıklarını riske atmamak için açılan ayrı bir cüzdandır. İçine yalnızca o iş için gereken kadar varlık konur: tanımadığın bir siteye bağlanmak, yeni bir mint'e girmek ya da bir [[airdrop-farming|airdrop denemesi]] yapmak gibi. Bir şey ters giderse kayıp o cüzdanla sınırlı kalır. Adı, tek kullanımlık telefon anlamındaki "burner"dan gelir; Türkçede yerleşik bir karşılığı yok.

## Benzetme

Tek kullanımlık eldiven gibi: riskli işe girerken takarsın, iş bitince çıkarırsın. Bulaşan şey eline değil eldivene bulaşır — ama eldiveni çıkarmadan yüzüne dokunursan faydası kalmaz.

## Nasıl çalışır?

Ayrı bir cüzdan açarsın, oraya küçük bir tutar gönderirsin, riskli işlemi orada yaparsın. Kritik nokta ayrımın gerçekten ayrı olmasıdır: aynı [[seed-phrase|kurtarma ifadesinden]] türetilmiş iki adres zincirde bağımsız görünse de aynı yedeğe ve çoğu zaman aynı cihaza bağlıdır. Cihaz ele geçirildiğinde ikisi birden gider.

Verdiğin harcama izinleri de ([[approve]]) o cüzdana yazılır ve sen iptal etmedikçe durur. Bu yüzden bir kez riskli iş yapılmış bir cüzdanı sonradan "temiz" varsaymak hatalıdır.

## Dikkat

Burner cüzdan gizlilik sağlamaz. Asıl cüzdanından burner'a para gönderdiğinde iki adres zincir üstünde birbirine bağlanır ve [[chain-analysis|zincir analiziyle]] ilişkilendirilebilir; gizlilik istiyorsan bu tek başına yeterli bir yöntem değildir.

Bir de adın yarattığı yanılsama var: "nasılsa burner" diyerek okunmadan atılan imzalar gerçek varlık ve gerçek izin devreder. Burner'ın işi zararı sınırlamaktır, dikkatin yerine geçmek değil ([[wallet-drainer|cüzdan boşaltıcı]]).
