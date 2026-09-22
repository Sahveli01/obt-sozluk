---
term: "Rebase Token"
tr: ""
aliases: []
category: tokenlar
subcategory: "Token türleri"
level: ileri
short: "Arzı sözleşme tarafından toplu olarak ayarlanan ve bu yüzden cüzdandaki bakiyesi kendiliğinden değişen token."
related: [erc-20, total-supply, liquid-staking-token-lst, wrapped-token, token-inflation]
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

Rebase token, sahiplerinin bakiyesini kendiliğinden değiştiren token'dır. Kimse transfer yapmaz, sen bir şey imzalamazsın; sözleşme önceden belirlenmiş bir kurala göre bütün bakiyeleri aynı oranda büyütür ya da küçültür. Cüzdandaki sayı değişir ama toplam arz içindeki payın aynı kalabilir.

Kullanım amacı modele göre değişir. Bazı tasarımlar fiyatı bir hedefe yaklaştırmak için arzı esnetir; bazıları da dışarıda biriken bir getiriyi bakiyeye yansıtmak için kullanır — bazı [[liquid-staking-token-lst|likit staking token'ları]] bu yolu seçer.

"Rebase" için yerleşik bir Türkçe karşılık yok; metinlerde "arz ayarlaması" diye tarif ediliyor.

## Benzetme

Pastanın yeniden dilimlenmesi gibi. Sekiz dilimlik pastadan iki dilimin var. Pastayı tekrar keserek on altı dilim yaparsan elinde dört dilim olur. Sayı ikiden dörde çıkar ama önündeki pasta miktarı değişmez; değişen tek şey, aynı pastayı kaç parçaya böldüğümüzdür.

## Nasıl çalışır?

Sıradan bir [[erc-20]] sözleşmesinde her adresin bakiyesi doğrudan bir tabloda yazılıdır. Rebase token'da tabloda tutulan şey bakiye değil paydır — çoğunlukla "hisse" gibi bir iç birim. `balanceOf` çağrıldığında sözleşme bu payı o anki [[total-supply|toplam arz]] ile çarpıp bölerek hesaplar ve sonucu döndürür.

Rebase anında tek bir katsayı güncellenir. Milyonlarca adresin kaydına tek tek dokunmak gerekmez; kayıtlar yerinde kalır, yalnızca onları bakiyeye çeviren çarpan değişir. Bunun bir yan etkisi vardır: rebase zincirde bir transfer [[event-smart-contract|olayı]] üretmez. Bakiyeyi yalnızca transferleri izleyerek takip eden bir uygulama değişimi göremez.

## Dikkat

Rebase token'lar birçok DeFi sözleşmesiyle beklenmedik biçimde etkileşir. Sebebi tek bir varsayımdır: sözleşmelerin çoğu, kendisine yatırılan bir token'ın bakiyesinin kendiliğinden değişmeyeceğini kabul eder. Bir havuz "kullanıcı 100 birim yatırdı, çıkarken 100 birim alacak" diye kaydeder; token rebase edince sözleşmedeki gerçek bakiye bu kayıtla uyuşmaz. Artan kısım sözleşmede sahipsiz kalabilir, azalan kısım muhasebeyi bozabilir.

Bu yüzden birçok protokol rebase token'ları ya hiç kabul etmez ya da bakiyesi sabit kalan sarmalanmış bir sürümünü kullanır.
