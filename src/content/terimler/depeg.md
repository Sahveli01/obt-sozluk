---
term: "Depeg"
tr: ""
aliases: []
category: defi
subcategory: "Stablecoin'ler"
level: orta
short: "Sabitlenmiş bir varlığın piyasa fiyatının bağlı olduğu referanstan belirgin biçimde ayrılması; bağın kopması."
related: [peg, stablecoin, arbitrage, fiat-backed-stablecoin, crypto-backed-stablecoin, algorithmic-stablecoin]
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

Depeg, [[peg|bağın]] kopmasıdır: sabitlenmiş bir varlığın piyasa fiyatının referansından belirgin biçimde ayrılması. Hedefi bir dolar olan bir [[stablecoin]] uzunca bir süre bunun altında işlem görüyorsa depeg olmuştur. Türkçede yerleşik bir karşılığı yok; konuşurken "bağı koptu" ya da "peg'ini kaybetti" deniyor.

## Nasıl çalışır?

Bağ genellikle dört yerden kopar.

**Karşılığa erişilememesi.** Karşılık zincirin dışında duruyorsa, onu tutan banka ya da saklayıcı ödeme yapamaz hâle geldiğinde karşılık kâğıt üstünde yerindedir ama ulaşılamaz.

**Teminatın değer kaybı.** Zincir üstü teminata dayanan tasarımlarda teminat sert düşerse karşılık borcun altına iner.

**İtfa kapısının kapanması.** İtfa durdurulur, kuyruğa alınır ya da yalnızca birkaç kuruma açık kalırsa [[arbitrage|arbitraj]] devreye giremez; fiyatı hedefe geri çekecek kuvvet ortadan kalkar.

**Likidite yokluğu.** Karşılık tam olsa bile satış baskısı [[liquidity-pool|havuzlardaki]] derinliği aşarsa fiyat sırf bu yüzden sapar.

Dördü de aynı ikinci aşamaya çıkar. Sapmayı gören bir kısım kullanıcı beklemek yerine satmayı seçer, satış aynı sığ likiditeye biner ve sapma derinleşir.

## Dikkat

Her sapma depeg değildir. Sığ bir havuzda büyük bir emir [[slippage|kaymayla]] işlem görür; ekranda bir an hedefin altında bir fiyat belirir ve saniyeler içinde kapanır. Bu piyasa gürültüsüdür.

Ayırt edici olan kalıcılıktır. Sapma saatlerce ya da günlerce sürüyorsa sorun alım satımda değil mekanizmanın kendisindedir: ya itfa kapısı çalışmıyordur ya da arkasındaki karşılık sanıldığı gibi değildir.

Bir de şu: fiyatın hedefe geri dönmesi kimsenin zarar etmediği anlamına gelmez. Sapma sırasında satan kişi zararı gerçekleştirmiştir, dönüş onun için geriye işlemez.
