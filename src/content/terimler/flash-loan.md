---
term: "Flash Loan"
tr: ""
aliases: []
category: defi
subcategory: "Borç verme ve alma"
level: ileri
short: "Aynı işlem içinde alınıp geri ödenen teminatsız borç; geri ödenmezse işlemin tamamı geri sarılır."
related: [flash-loan-attack, oracle-manipulation, arbitrage, lending-protocol, liquidation, composability]
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

Flash loan, tek bir [[transaction|işlemin]] içinde alınan ve aynı işlem bitmeden geri ödenmesi zorunlu olan teminatsız borçtur. Ödeme yapılmazsa işlem başarısız olur ve içindeki her şey geri sarılır — borç verilmemiş, para hiç çıkmamış sayılır.

Teminat istenmemesinin sebebi cömertlik değil, muhasebedir. Bir işlem ya bütünüyle gerçekleşir ya da hiç gerçekleşmez; bu yüzden "ödemedi" diye bir ihtimal yoktur. Karşılığı olmayan tek risk, protokolün taşıdığı sözleşme riskidir.

Terimin yerleşmiş bir Türkçe karşılığı yok; toplulukta İngilizce hâliyle kullanılıyor.

## Nasıl çalışır?

Akış dört adımdır ve hepsi aynı işlemin içindedir.

Protokol istediğin tutarı havuzdan sana gönderir. Sonra senin sözleşmendeki geri çağrı fonksiyonunu çalıştırır. O fonksiyonun içinde ne yapacaksan yaparsın. Fonksiyon dönünce protokol kendi bakiyesine bakar: anapara artı ücret yerinde değilse çağrıyı [[revert|revert]] eder ve işlemin tamamı iptal olur.

Meşru kullanımların ortak yanı, hepsinin kısa süreliğine büyük sermaye istemesi ve o sermayeyi elde tutmaya gerek olmamasıdır:

- **[[arbitrage|Arbitraj]]:** iki piyasa arasındaki fiyat farkını kapatmak.
- **Teminat takası:** borcu kapatıp teminatı başka bir varlıkla değiştirip pozisyonu yeniden açmak — hepsi tek işlemde, arada tasfiyeye açık kalmadan.
- **Pozisyon kapatma:** elinde nakit olmadan borcu kapatıp teminatı çözmek.
- **[[liquidation|Tasfiye]]:** tasfiye edenin borcu kapatmak için kendi sermayesini bağlamasına gerek kalmaması.

## Dikkat

Flash loan yeni bir açık yaratmaz; var olan açıkların **sermaye şartını** kaldırır.

Bir protokolün güvenliği çoğu zaman sessizce şuna dayanır: "bunu bozmak için çok para gerekir, o parası olan da bunu yapmaz." Flash loan bu cümlenin ilk yarısını siler. Geriye kalan maliyet yalnızca işlem ücretidir ve saldırganın kim olduğu, ne kadar parası olduğu artık önemsizdir.

Bu yüzden **tek blok içinde bozulabilen her büyüklük** savunmasız hâle gelir: bir havuzun o anki fiyatı, oy gücünün anlık sayımı, bir bakiyenin o bloktaki değeri. Sonuçları [[flash-loan-attack|flash loan saldırısı]], [[oracle-manipulation|oracle manipülasyonu]] ve [[governance-attack|yönetişim saldırısı]] başlıklarında.

Savunma flash loan'ı yasaklamak değildir — zaten yasaklanamaz. Savunma, tek blokta değiştirilebilen bir sayıya güvenmemektir.
