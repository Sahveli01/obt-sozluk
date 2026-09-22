---
term: "NFT Marketplace"
tr: "NFT Pazar Yeri"
aliases: []
category: nft
subcategory: ""
level: orta
short: "NFT'lerin listelendiği, teklif verildiği ve el değiştirdiği platform; satış anındaki devri zincirdeki bir takas sözleşmesi yürütür."
related: [floor-price, royalties, non-fungible-token-nft, approve, nft-collection]
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

NFT pazar yeri, [[non-fungible-token-nft|NFT]]'lerin satışa çıkarıldığı, teklif verildiği ve el değiştirdiği platformdur. Görünen yüzü sıradan bir alışveriş sitesine benzer: arama, filtre, [[nft-collection|koleksiyon]] sayfaları, [[floor-price|taban fiyat]]. Altta dönen iş ise farklıdır, çünkü satılan şey hiçbir zaman platformun deposunda durmaz.

## Benzetme

Konsinye mağaza gibi, ama tek bir farkla. Konsinye satışta malı mağazaya bırakırsın; vitrinde durur, satılırsa paran gelir. NFT pazar yerinde mal sende kalır. Mağazaya verdiğin şey malın kendisi değil, "alıcı çıkarsa bunu onun adına devret" yetkisidir. Bu yüzden asıl soru mağazanın dürüstlüğü kadar, o yetkiyi ne kadar geniş verdiğindir.

## Nasıl çalışır?

Üç adım vardır:

1. **Listeleme.** Çoğu zaman zincire işlem göndermezsin; fiyatı ve koşulları içeren bir mesaj imzalarsın, platform bunu kendi tarafında saklar. Listelemenin ücretsiz olmasının sebebi budur.
2. **Yetki.** Token'ın bulunduğu sözleşmeye [[approve|onay]] verirsin: platformun takas sözleşmesi senin adına bu token'ı devredebilir hâle gelir.
3. **Eşleşme.** Alıcı kabul ettiğinde takas sözleşmesi tek bir işlemde iki şeyi birden yapar — parayı satıcıya, token'ı alıcıya geçirir. Aynı işlemde platform ücretini ve varsa [[royalties|telif payını]] ayırır.

İmza platformda saklandığı için listeleme, iptal edilmediği sürece geçerli kalmaya devam eder; iptal genelde zincire ayrı bir işlem göndermeyi gerektirir.

## Dikkat

Verilen onay çoğu zaman tek bir token için değil, koleksiyonun tamamı için ve süresizdir — bu, [[infinite-approval-risk|sınırsız onay riskidir]]. Platformun kendisi düzgün çalışsa bile, okumadan imzalanan bir mesaj aynı yetkiyi bambaşka birine verebilir. Kullanılmayan pazar yerlerine verilmiş onayları düzenli olarak geri çekmek iyi bir alışkanlıktır.
