---
term: "Solver"
tr: ""
aliases: []
category: defi
subcategory: "MEV ve işlem akışı"
level: orta
short: "Kullanıcının beyan ettiği intent'i yerine getirecek yolu bulan ve bunun için başka solver'larla yarışan taraf."
related: [intent, request-for-quote-rfq, order-flow, dex-aggregator, maximal-extractable-value-mev]
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

Solver, bir [[intent|intent]]'i alıp onu gerçek işlemlere çeviren taraftır. Kullanıcı sonucu söyler, solver o sonucu üretecek yolu kurar: hangi havuzlardan geçileceği, emrin kaç parçaya bölüneceği, karşı tarafın bir [[automated-market-maker-amm|AMM havuzu]] mu yoksa doğrudan bir piyasa yapıcı mı olacağı onun kararıdır.

Tek başına çalışmaz ve çalışmaması tasarımın özüdür. Aynı intent birden çok solver'a açılır; kullanıcıya en iyi sonucu getiren kazanır. Kullanıcı yolu denetleyemediği için yolu bulanlar birbirine denetletilir.

Türkçede yerleşik bir karşılığı yok; "çözücü" denmiyor, solver deniyor.

## Nasıl çalışır?

Toplanan intent'ler çoğu tasarımda tek tek değil, bir tur hâlinde ele alınır. Her solver o turun tamamı için bir çözüm önerir, çözümler karşılaştırılır ve kazanan çözüm zincire yazılır.

Turun içinde birbirine denk düşen iki istek varsa — biri A verip B almak, diğeri B verip A almak istiyorsa — solver ikisini doğrudan eşleştirebilir. Bu durumda hiçbir havuza uğranmaz; iki taraf da havuz ücretinden ve [[price-impact|fiyat etkisinden]] kurtulur. Toplayıcılardan ([[dex-aggregator|DEX aggregator]]) farkı buradadır: toplayıcı var olan havuzlar arasında en iyi yolu arar, solver ayrıca kullanıcıları birbirine karşı taraf yapabilir.

İşlemi solver kendi adresinden gönderdiği için [[gas|gas]] ücretini de o öder ve bunu verdiği fiyata yansıtır.

## Dikkat

"En iyi sonucu veriyoruz" iddiasını doğrulamak kullanıcı için pratikte imkânsızdır: karşılaştırma yapabilmen için aynı anda bütün yolları denemiş olman gerekirdi, oysa elinde yalnızca sana verilen tek bir sonuç vardır.

Bu yüzden sistemin güvenliği solver'ın iyi niyetine değil, rekabetin sıkılığına bağlıdır. Solver sayısı azsa, aralarında anlaşma varsa ya da biri [[order-flow|akışa]] ayrıcalıklı erişiyorsa, kullanıcıya verilen sonuçla mümkün olan en iyi sonuç arasındaki fark solver'ın kârı olarak kalır. Bir intent sistemine bakarken sorulacak soru "solver var mı" değil, "kaç tane var ve kazananı hangi kural seçiyor"dur.
