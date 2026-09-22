---
term: "Compressed NFT"
tr: "Sıkıştırılmış NFT"
aliases: ["cnft"]
category: nft
subcategory: ""
level: ileri
short: "NFT'leri zincirde tek tek tutmak yerine bir Merkle ağacının kökünü tutan, asıl veriyi zincir dışında bırakan yöntem."
related: [merkle-tree, merkle-proof, non-fungible-token-nft, indexer, data-availability]
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

Compressed NFT, her [[non-fungible-token-nft|NFT]] için zincirde ayrı bir kayıt tutmak yerine binlercesinin özetini tek bir ağaç yapısında toplayan yöntemdir. Zincirde duran şey o ağacın kökü, yani tek bir özet değerdir; parçaların asıl verisi zincirin dışında saklanır.

Amaç maliyettir. Milyonlarca parça dağıtmak isteyen bir uygulama için her parçaya zincirde ayrı yer ayırmak mümkün değildir.

## Nasıl çalışır?

Parçalar bir [[merkle-tree|Merkle ağacının]] yapraklarına yazılır; sözleşme yalnızca kökü tutar. Bir parçayı devretmek isteyen kişi işleme iki şey ekler: parçanın kendi verisi ve o verinin bu ağaçta gerçekten bulunduğunu gösteren [[merkle-proof|Merkle kanıtı]]. Sözleşme kanıtı doğrular, devri uygular ve yeni kökü yazar.

Yani zincir hangi parçanın kimde olduğunu bilmez. Yalnızca "bana gösterilen şey elimdeki kökle tutarlı mı" sorusunu cevaplar.

## Dikkat

Ucuzluğun bir karşılığı vardır ve o karşılık güvendir. Kanıt üretebilmek için ağacın tamamının bir yerde saklanıyor olması gerekir. Bu işi [[indexer|indeksleyiciler]] yapar: zincirin geçmişini okur, ağacı yeniden kurar, kullanıcı adına kanıt üretir.

Bu veri kaybolursa kök zincirde durmaya devam eder ama kimse hiçbir devri kanıtlayamaz. Varlıklar teknik olarak yerindedir, pratikte kıpırdatılamaz. Sorunun adı [[data-availability|veri erişilebilirliğidir]]; sıkıştırma bu sorunu ortadan kaldırmaz, başka bir yere taşır.

Günlük hayattaki karşılığı şudur: cüzdanlar bu parçaları yalnızca zinciri okuyarak gösteremez, bir servise sormak zorundadır. Servis çalışmadığında parçalar kullanıcıya "yokmuş gibi" görünür.
