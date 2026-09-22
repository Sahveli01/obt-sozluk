---
term: "Retroactive Airdrop"
tr: ""
aliases: []
category: tokenlar
subcategory: "Dağıtım ve lansman"
level: orta
short: "Ödülü önceden duyurmadan, protokolü geçmişte kullanmış adresleri sonradan belirleyip token dağıtmak."
related: [airdrop, airdrop-farming, sybil-attack, snapshot-token, points-program]
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

Retroactive airdrop, ödülün önceden vaat edilmediği dağıtımdır. Proje bir tarih belirler, o tarihe kadar protokolü kimin gerçekten kullandığına bakar ve token'ı ona göre verir. Kullanıcı işlemleri yaparken ortada bir söz yoktur; ödül, iş çoktan olup bittikten sonra geriye dönük çıkar.

Fark şurada: [[airdrop|airdrop]] dağıtımın biçimidir, "retroactive" ise ölçütün nereden alındığını söyler — gelecekteki bir görevden değil, geçmişteki kayıttan.

Terimin yerleşik bir Türkçe karşılığı yok; "geriye dönük airdrop" denip geçiliyor.

Arkasındaki fikir basit: ödül önceden ilan edilmezse insanlar ödül için değil ihtiyaç için kullanır, dolayısıyla kayıt gerçeği daha iyi yansıtır.

## Nasıl çalışır?

Ekip zincirdeki geçmişi tarar ve ölçüt listesi çıkarır: kaç işlem yapılmış, ne kadar hacim geçmiş, kaç farklı ayda kullanılmış, ilk kullanım ne zaman. Adreslere puan verilip bir eşik konması yaygındır.

Ama yöntemin kendi sorunu var. Ödül ihtimali bilindiği için insanlar "belki dağıtır" diyerek protokolleri ödül umuduyla kullanmaya başlar; topluluk buna [[airdrop-farming|airdrop avcılığı]] diyor. Avcılık tek cüzdanla kalmaz: aynı kişi yüzlerce adres açıp aynı işlemleri tekrarlar ([[sybil-attack|Sybil saldırısı]]).

Ekipler buna karşı filtre uygular — adresler arasındaki para akışını izler, aynı anda aynı sırayla işlem yapan kümeleri ayıklar, çok küçük kullanımları eler. Filtre hiçbir zaman kusursuz değildir: gerçek kullanıcıyı eleyebilir, hazırlıklı avcıyı kaçırabilir.

## Dikkat

"Geriye dönük" olması dağıtımın tarafsız olduğunu göstermez. Ölçütü, eşiği ve filtreyi ekip sonucu görebildiği bir anda seçer; hangi adresin neden elendiği çoğu zaman açıklanmaz.

Bir de ters etki var: bu dağıtımlar tekrarlandıkça "beklenmeyen ödül" fikri ortadan kalkar. Kullanıcı artık bir sonraki protokolü de ihtimal üzerine kullanır ve yöntem tam olarak ölçmek istediği şeyi ölçemez hale gelir.
