---
term: "Peg"
tr: ""
aliases: []
category: defi
subcategory: "Stablecoin'ler"
level: orta
short: "Bir varlığın değerinin başka bir referansa bağlanması; kriptoda çoğunlukla bir stablecoin'in bir ülke parasına sabitlenmesi."
related: [depeg, stablecoin, arbitrage, collateral, fiat-backed-stablecoin, crypto-backed-stablecoin]
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

Peg, bir varlığın değerinin başka bir referansa bağlanmasıdır. Kriptoda en sık karşılaştığın hâli, bir [[stablecoin]]'in bir ülke parasına sabitlenmesidir. Sabitlenen şey bir doğa kanunu değil bir hedeftir: piyasa fiyatı her an tam olarak hedefte durmaz, etrafındaki dar bir bantta gezinir.

Yalnızca stablecoin'lere özgü de değildir; bir [[wrapped-token|sarmalanmış token]]'in aslına birebir bağlı olması da bir peg'dir. İktisat metinlerinde benzer bağ için "çapa" denir, ama kripto bağlamında yerleşik bir Türkçe karşılığı yok.

## Benzetme

Demirlemiş bir tekne gibi. Tekne dalgayla birlikte sağa sola gider, bir metre şuraya bir metre buraya; zincir gerildiği anda geri çekilir. Onu yerinde tutan şey denizin sakin olması değil, zincirin varlığıdır. Zincir koparsa tekne hemen sürüklenmez — bir süre aynı yerde durur, çünkü rüzgâr henüz üstüne binmemiştir.

## Nasıl çalışır?

Bir peg'i ayakta tutan üç şey var.

**İtfa hakkı.** Elindeki token'ı ihraççıya ya da sözleşmeye verip karşılığında bir birim referans alabiliyorsan, onu bu fiyatın belirgin biçimde altına satmak için sebebin kalmaz. Bağın omurgası budur.

**[[arbitrage|Arbitraj]].** Piyasa fiyatı hedeften saptığı anda aradaki farkı kâra çevirmek isteyen biri çıkar: ucuzken alıp itfa eden ya da yeni bastırıp pahalıya satan. Bu alım satım fiyatı hedefe geri iter. Mekanizma, kimsenin iyi niyetine değil, arbitrajcının çıkarını bağın yönüne ayarlamasına dayanır.

**[[collateral|Teminat]].** İtfa vaadinin arkasında gerçekten bir şey olması gerekir. Yoksa ya da yetmiyorsa vaat sözde kalır ve ilk ciddi satış dalgasında bant genişler.

## Dikkat

Peg bir fiyat garantisi değildir. Token'ı hedef değerinde tutan şey üstünde yazan rakam değil, mekanizmanın çalışmaya devam etmesidir.

Bir de şunu karıştırma: "dolara sabit" demek "değeri sabit" demek değildir. Dolara bağlı bir token doların kendi satın alma gücüyle birlikte hareket eder; Türk lirası karşısında her gün başka bir yerdedir ve bağlandığı şeyin bütün risklerini üstlenir. [[depeg|Bağın kopması]] ayrı bir konudur — burada anlatılan, bağ çalışırken bile geçerli olan durumdur.
