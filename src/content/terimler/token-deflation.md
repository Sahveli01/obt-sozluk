---
term: "Token Deflation"
tr: "Token deflasyonu"
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: orta
short: "Yakma ya da basımın durması yoluyla toplam arzın zaman içinde küçülmesi; token enflasyonunun aynadaki görüntüsü."
related: [token-burn, token-inflation, eip-1559, buyback, max-supply]
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

Token deflation, arzın büyümek yerine küçülmesidir. Arzdan token çıkaran bir mekanizma, basımla arza eklenenden fazlasını götürüyorsa arz net olarak azalır.

## Nasıl çalışır?

Arzı küçülten yollar birkaç tanedir. En yaygını [[token-burn|yakmadır]]: token'lar kimsenin erişemeyeceği bir yere gönderilir ya da bakiyeden silinir. Bazı ağlarda işlem ücretinin bir kısmı protokol tarafından otomatik olarak yakılır; Ethereum'da [[eip-1559]] ile gelen ücret düzeni böyle çalışır. Bir başka yol, protokol gelirinin token satın alıp yakmakta kullanılmasıdır — buna [[buyback|geri alım]] denir.

Burada kritik kelime **net**tir. Çoğu ağda basım ve yakım aynı anda sürer; sonucu belirleyen ikisinin farkıdır. Yakım miktarı genellikle ağdaki işlem hacmine bağlı olduğu için bu fark sabit değildir: aktivite düştüğünde arzı küçülen bir token, arzı büyüyen bir token hâline gelebilir.

## Dikkat

"Deflasyonist" etiketi bir sonuç sözü değil, bir arz kuralının adıdır. Arz bir değişkendir, talep başka bir değişken; birinin yönünü bilmek diğerininkini söylemez.

İkinci nokta: arzın gerçekten azalması için token'ın erişilemez hâle gelmesi gerekir. Bir sözleşmeye kilitlenen, hazineye alınan ya da "dolaşımdan çekildi" denen token hâlâ vardır ve [[total-supply|toplam arz]] içinde durmaya devam eder. [[token-inflation|Enflasyon]] tarafında olduğu gibi burada da bakılacak yer duyuru metni değil, arzın kendisidir.
