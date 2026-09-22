---
term: "Wrapped Token"
tr: "Sarmalanmış token"
aliases: []
category: tokenlar
subcategory: "Token türleri"
level: orta
short: "Bir yerde kilitlenmiş varlığı bire bir temsil etmek üzere basılan token; aslı değil, aslını geri isteme hakkıdır."
related: [blockchain-bridge, bridge-exploit, native-token, erc-20, cross-chain, custodian]
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

Wrapped token, başka bir varlığı bire bir temsil etmek için çıkarılmış token'dır. Elinde tuttuğun şey varlığın kendisi değil, bir yerde kilitli duran varlığın karşılığıdır.

İki nedenle gerekir. Birincisi biçim: bir zincirin [[native-token|yerli parası]] çoğu zaman token standardına uymaz. Ethereum'da ETH'nin kendisi bir [[erc-20]] token'ı değildir, bu yüzden ERC-20 bekleyen sözleşmelerle doğrudan çalışmaz; sarmalanmış hâli bu boşluğu kapatır. İkincisi yer: bir zincirdeki varlığı başka bir zincirde kullanmak istersin. Varlık aslında yerinden kıpırdamaz; diğer zincirde onu temsil eden yeni bir token basılır.

## Benzetme

Otogarın emanetine bıraktığın valiz gibi. Elinde valiz yoktur, elinde makbuz vardır. Makbuz valizin kendisi değil, valizi geri isteme hakkıdır; makbuzu birine verirsen valiz de ona geçmiş olur, kimse rafa dokunmamış olsa bile. Ama emanetçi kepenk indirirse elinde kalan şey yalnızca bir kâğıttır.

## Nasıl çalışır?

Süreç iki yönlüdür. Bir taraf varlığı alıp kilitler ve aynı miktarda sarmalanmış token basar; geri dönüşte token yakılır, kilitli varlık serbest bırakılır. Düzgün işleyen bir sistemde dolaşımdaki sarmalanmış token miktarı her an kilitli varlık miktarına eşittir.

Kilidi kimin tuttuğu modele göre değişir. Aynı zincirde kalıyorsan bunu basit bir sözleşme yapabilir; ETH'yi WETH'e çevirmek budur, sözleşme ETH'yi tutar ve karşılığında token verir. Zincirler arasında geçiyorsan kilidi bir [[blockchain-bridge|köprü]] ya da bir saklayıcı kurum tutar.

## Dikkat

Sarmalanmış token'ın değeri kendi kodundan gelmez, arkasındaki kilidin sağlamlığından gelir. Kilidi tutan taraf varlığı kaybeder, kötüye kullanır ya da sözleşmesi ele geçirilirse token zincirde durmaya devam eder — ama karşılığında alınacak bir şey kalmaz. [[bridge-exploit|Köprü istismarları]] bu yüzden yalnızca köprüyü değil, o köprünün bastığı bütün sarmalanmış token'ları vurur.

Bir de aynı varlığın birden çok sarmalanmış sürümü olabilir. Adları ve simgeleri birbirine benzese de farklı taraflarca basılmışlardır ve taşıdıkları risk aynı değildir.
