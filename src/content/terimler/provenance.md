---
term: "Provenance"
tr: ""
aliases: []
category: nft
subcategory: ""
level: orta
short: "Bir varlığın kimden kime geçtiğini gösteren sahiplik geçmişi; zincirde bu geçmiş herkese açıktır."
related: [non-fungible-token-nft, on-chain, transaction-hash-txid, block-explorer, one-of-one-1-1, nft-collection]
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

Provenance, bir eserin kimin elinden çıkıp kimlerin elinden geçtiğinin kaydıdır. Kavram sanat dünyasından gelir; orada bu geçmiş satış belgeleri, yazışmalar ve tanıklıklarla kurulur, çoğu zaman eksik halkaları olur ve doğrulanması ayrı bir uzmanlık işidir.

Zincirde ise geçmiş kendiliğinden tutulur. Bir [[non-fungible-token-nft|NFT]] basıldığı andan itibaren her devri bir [[transaction-hash-txid|işlem]] olarak kaydedilir ve [[block-explorer|blok gezgininden]] herkes baştan sona okuyabilir. Kayıt silinmez, sonradan araya yazılmaz, görmek için kimseden izin istenmez. Türkçede tek bir yerleşik karşılığı yok; "eserin geçmişi" ya da "sahiplik zinciri" diye açıklanıyor, yazıda çoğunlukla İngilizcesi geçiyor.

## Nasıl çalışır?

Zincirdeki kayıt üç şeyi kesinleştirir: parçanın hangi sözleşmede ve hangi işlemle yaratıldığını, hangi adresten hangi adrese ne zaman geçtiğini, ve arada kayıp bir halka olmadığını. Zincir kesintisizdir; bir devri atlamak ya da geçmişten silmek mümkün değildir.

Kesinleştirmedikleri de vardır ve listesi kısa değildir. Adreslerin arkasındaki kişilerin kim olduğunu söylemez. Aynı kişinin iki adresi arasındaki bir hareketle gerçek bir satışı ayırt etmez. Ve en önemlisi: parçayı basan adresin, bastığı şeyi basmaya hakkı olup olmadığını bilmez. Zincir geçmişi kaydeder; yetkiyi doğrulamaz. [[on-chain|Zincir üstü]] olmak "doğrulanmış" demek değildir.

## Dikkat

Buradaki kanıt yalnızca **token'ın** geçmişini kapsar. Token ile işaret ettiği şey arasındaki bağ — bir görselin telif hakkı, fiziksel bir nesnenin mülkiyeti — zincirde değil, tarafların anlaşmasında ve ilgili ülkenin hukukunda kurulur.

NFT sahibi olmak, gösterdiği eserin telif hakkı sahibi olmak anlamına gelmez. Hangi hakların devredildiği projeden projeye değişir ve o projenin kendi lisans metninde yazar; somut bir durumda ne devredildiğinden emin olmak gerekiyorsa bir hukukçuya danışmak gerekir.

Kısacası zincir "bu numara sende" der. "Bu eser senin" demez.
