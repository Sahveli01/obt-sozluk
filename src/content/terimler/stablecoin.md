---
term: "Stablecoin"
tr: ""
aliases: []
category: defi
subcategory: "Stablecoin'ler"
level: orta
short: "Değeri sabit bir referanstan, genellikle bir ülke parasından sapmasın diye tasarlanmış token."
related: [peg, depeg, fiat-backed-stablecoin, crypto-backed-stablecoin, algorithmic-stablecoin, fiat]
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

Stablecoin, değeri sabit bir referanstan sapmasın diye tasarlanmış [[token-blockchain|token]]'dır. Referans çoğunlukla bir ülke parasıdır; en yaygın hedef "1 birim = 1 dolar"dır. Amacı kazandırmak değil, kıpırdamamaktır.

Kripto içinde bu kadar merkezî olmasının sebebi basit. Diğer varlıkların fiyatı sürekli oynar; fiyatı oynayan bir birimle ne fiyat yazabilirsin, ne borç hesabı tutabilirsin, ne de bir işlemin ortasında birkaç saat bekleyebilirsin. Borsalardaki işlem çiftlerinin bir tarafı, [[lending-protocol|borç verme protokollerindeki]] hesapların çoğu ve zincirler arası ödemeler bu yüzden stablecoin üzerinden yürür. Türkçede yerleşik bir karşılığı yok, sektör İngilizce adını kullanıyor.

## Benzetme

Terzinin mezurası gibi. Mezura kumaşı daha değerli yapmaz; tek işi her ölçümde aynı uzunluğu göstermektir. Her açılışında biraz uzayıp kısalan bir mezurayla kesilen kumaştan dikiş tutmaz. Ama mezuranın doğruluğu kendiliğinden gelmez, onu üreten atölyeye bağlıdır.

## Nasıl çalışır?

Sabitliğin nasıl korunduğu tasarıma göre değişir ve asıl fark buradadır. [[fiat-backed-stablecoin|Fiat destekli]] tasarımda karşılık zincir dışında, bir hesapta durur. [[crypto-backed-stablecoin|Kripto teminatlı]] tasarımda karşılık zincirin üstünde kilitlidir. [[algorithmic-stablecoin|Algoritmik]] tasarımda ortada bir karşılık yoktur, arzı ayarlayan bir mekanizma vardır. Bağın kendisine [[peg]], koptuğu ana [[depeg]] denir.

## Dikkat

"Stable" adı bir garanti değil, bir hedeftir. Sabitliği ayakta tutan şey kelime değil, arkasındaki karşılık ve mekanizmadır; ikisi de bozulabilir.

Bir de yetki meselesi var. Fiat destekli tasarımların çoğunda ihraççı istediği adresi dondurabilir: bakiye yerinde durur ama kıpırdatılamaz. Çalıntı fonu durdurmak için kullanılan bu yetki aynı kolaylıkla sansür için de kullanılabilir. Stablecoin, [[censorship-resistance|sansüre direnç]] beklenecek bir varlık değildir.
