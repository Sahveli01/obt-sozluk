---
term: "Anonymity Set"
tr: "Anonimlik kümesi"
aliases: ["anonimlik kümesi"]
category: guvenlik
subcategory: "Gizlilik"
level: orta
short: "Bir işlemin kaç olası kaynak arasında gizlendiğini anlatan büyüklük; gizliliğin ölçüsü kalabalığın kendisidir."
related: [pseudonymity, mixer, privacy-coin, stealth-address, confidential-transactions, chain-analysis]
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

Anonimlik kümesi, bir işlemin kaç farklı olasılık arasında kaybolduğunu söyleyen sayıdır. Seni izleyen biri "bunu yapan şu beş adresten biri" diyebiliyorsa kümen beştir; "şu elli bin adresten biri" diyebiliyorsa elli bin.

Bu yüzden gizlilik açık ya da kapalı bir özellik değildir. Ölçülebilir bir büyüklüktür ve ölçüsü kalabalığın kendisidir.

## Benzetme

Aynı okul üniformasını giymek gibi. Üç kişilik bir sınıfta üniforma kimseyi gizlemez, herkes birbirini tanır. Üç yüz kişilik bir bahçede aynı üniforma seni gerçekten kalabalığa katar. Ama tek başına yetmez: sırtındaki tek kırmızı çanta üniformanın sağladığı her şeyi bir anda geri alır.

## Nasıl çalışır?

Kümenin sınırını gözlemcinin elindeki bilgi çizer. Zincir üstünde açıkta duran ayrıntı ne kadar çoksa küme o kadar küçülür. Bu alanın bütün araçları — [[mixer|karıştırıcılar]], [[privacy-coin|gizlilik odaklı zincirler]], [[stealth-address|stealth adresler]], [[confidential-transactions|tutarı gizleyen işlemler]] — aslında tek bir şeyi yapmaya çalışır: senin işlemini benzeteceği işlemlerin sayısını artırmak.

Küme kullanıcı sayısıyla ölçülmez, gerçekten ayırt edilemeyen işlem sayısıyla ölçülür. Bir araca on bin kişi kayıt olmuş olabilir; o gün senin tutarında ve senin biçiminde işlem yapan üç kişi varsa senin kümen üçtür.

## Dikkat

Kümenin büyüklüğü tek başına yetmez. Miktar, zamanlama ve tekrar seni kümeden ayırır: alışılmadık bir tutar, hep aynı saatte yapılan hareket, düzenli aralıklarla tekrarlanan bir alışkanlık. [[chain-analysis|Zincir analizi]] tam olarak bu ayırt edici kalıpları arar.

Küme geriye doğru da daralabilir. Bugün büyük görünen bir küme, sonradan öğrenilen tek bir bilgiyle yıllar sonra küçülebilir; zincirdeki kayıt silinmediği için analiz her zaman baştan yapılabilir.
