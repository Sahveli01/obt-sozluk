---
term: "Generative Art"
tr: "Üretken sanat"
aliases: []
category: nft
subcategory: ""
level: orta
short: "Eserin tek tek elle değil, sanatçının yazdığı kuralların rastgelelikle çalıştırılmasıyla üretilmesi."
related: [nft-collection, trait-nft, rarity, randomness, reveal, on-chain-metadata]
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

Üretken sanatta sanatçı tek tek eserleri değil, eseri üreten kuralları yazar. Program bir başlangıç sayısı — tohum — alır, kurallara göre çizer, ve her farklı tohum farklı bir çıktı verir. Kararlar sanatçınındır: hangi katmanlar var, hangi seçenek ne sıklıkta çıkacak, hangi birleşim hiç çıkmayacak. Tek tek sonuçlar ise programındır.

NFT tarafında bu yöntem binlerce parçalık [[nft-collection|koleksiyonlar]] üretmenin yollarından biri oldu, çünkü parçaların hem birbirine benzemesini hem de her birinin ayrı olmasını aynı anda sağlıyor.

## Nasıl çalışır?

İki kurulum vardır ve farkları, tohumdan görüntüye giden yolun nerede koştuğudur.

Birincisinde çizim önceden yapılır. Sanatçı katmanları hazırlar — arka plan, gövde, aksesuar — ve program bunları belirlenen oranlarla birleştirir. Çıkan görseller ve [[nft-metadata|metadata]] dosyaları bir yere yüklenir; zincire yalnızca adresler yazılır.

İkincisinde çizim kodun içindedir. Tohum zincirde saklanır ve görsel her görüntülenişinde o tohumdan yeniden üretilir; [[on-chain-metadata|zincir üstü metadata]] genellikle böyle çalışır. Burada tohumun nasıl seçildiği kritik hâle gelir, çünkü zincir üstündeki her değer herkese açıktır ve önceden hesaplanabilir. [[randomness|Rastgelelik]] üretmek bu yüzden NFT tarafında da ayrı bir problemdir.

## Dikkat

Katmanların sıklık oranları baştan yazıldığı için, "nadir" bir özellik tesadüfen ortaya çıkan bir şey değil, bir tasarım kararıdır. [[rarity|Nadirlik]] tablosu o kararların sonucunu gösterir; eserin niteliği hakkında bir şey söylemez.

İkinci nokta: yöntemin adı "rastgele" olsa da çıktı deterministiktir. Aynı tohum aynı kodda her zaman aynı görseli verir. Kodu ve tohumu bilen biri sonucu baştan üretebilir — [[reveal|reveal]] mekanizmalarının uğraştığı sorun da tam olarak budur.
