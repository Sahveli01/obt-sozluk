---
term: "Liquid Staking Token (LST)"
tr: ""
aliases: ["LST"]
category: defi
subcategory: "Getiri"
level: orta
short: "Liquid staking'te yatırılan varlığın karşılığında verilen, stake edilmiş havuzdan pay isteme hakkı taşıyan token."
related: [liquid-staking, wrapped-token, depeg, rebase-token, collateral, liquid-restaking-token-lrt]
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

LST, [[liquid-staking]] protokolüne varlık yatırdığında elinde kalan token'dır. Kendi başına bir varlık değil, stake edilmiş havuzdan belirli bir payı geri isteme hakkıdır. Devredilebilir olduğu için başka protokollerde [[collateral|teminat]] gösterilebilir, havuzlara konabilir, satılabilir.

Türkçede yerleşik bir karşılığı yok; kısaltmasıyla anılır.

## Nasıl çalışır?

İki muhasebe biçimi yaygındır. Birincisinde bakiyen kendiliğinden artar ve token dayanak varlıkla bire bir sayılır ([[rebase-token|rebase]] modeli). İkincisinde bakiye sabit kalır, ödüller biriktikçe token'ın dayanak karşısındaki oranı yükselir.

Fark pratik bir sebeple önemlidir: bakiyesi kendiliğinden değişen bir token'ı birçok sözleşme doğru işleyemez, çünkü çoğu sözleşme bakiyeyi kendi defterine bir kez yazar. Bu yüzden rebase eden token'ların sarılmış sürümleri kullanılır — [[wrapped-token]] maddesine bak.

Karşılık oranını protokolün kendi muhasebesi hesaplar: havuzdaki stake ile biriken ödüller toplanır, kesintiler düşülür, dolaşımdaki LST sayısına bölünür.

## Dikkat

Burada iki ayrı fiyat vardır ve sürekli karıştırılır. Biri protokolün defterindeki karşılık oranı, diğeri ikincil piyasadaki fiyat. İkincisi birincisinin altına inebilir: çekim kuyruğu uzadığında ya da çok kişi aynı anda çıkmak istediğinde LST dayanağından ucuza işlem görür. Bu ayrışmaya [[depeg|bağın kopması]] denir ve bir arıza olması gerekmez — çıkışın anında olmamasının fiyata yansımasıdır.

Ayrışmanın zararsız kalmadığı yer, LST'nin teminat olarak kullanıldığı pozisyonlardır. Teminatın piyasa fiyatı düşünce borç aynı kalır; pozisyon, dayanak varlıkta hiçbir şey olmadan [[liquidation|tasfiye]] eşiğine gelebilir.

Son olarak token'ı elinde tutmak alttaki riski silmez. Operatörün cezası, protokolün sözleşme hatası ve ağın kendi riski aynen senin üstündedir. Bir de ihraççının yönetişimi vardır: operatörleri seçen ve karşılık oranını hesaplayan kuralları değiştirebilen mekanizma, elindeki token'ın dayanağını da değiştirebilir.
