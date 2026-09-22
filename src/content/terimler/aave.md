---
term: "Aave"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "Varlıkların ortak havuzlara yatırıldığı ve teminat gösterilerek borç alındığı, aşırı teminatlı çalışan bir borç verme protokolü."
related: [lending-protocol, liquidation, collateral-ratio, health-factor, flash-loan, interest-rate-model]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Aave, zincir üstünde çalışan bir [[lending-protocol|borç verme protokolü]]dür. İki taraf birbirini bulmaz: varlıklar ortak havuzlara yatırılır, borç almak isteyen bu havuzlardan çeker. Her borç, önceden yatırılmış bir [[collateral|teminatla]] açılır ve kilitlenen teminatın değeri alınan borçtan yüksek tutulur.

## Nasıl çalışır?

Mekanizma üç parça üzerine kuruludur. Birincisi teminat: her varlık için ne kadar borç alınabileceğini belirleyen bir [[collateral-ratio|teminat oranı]] tanımlıdır ve bu oranlar yönetişim kararıyla değişir. İkincisi faiz mantığı: havuzun ne kadarının ödünç verildiğine bakan bir [[interest-rate-model|faiz oranı modeli]] arzla talebi dengeler. Üçüncüsü fiyat: teminatın değeri bir [[oracle|oracle]] üzerinden okunur.

Teminatın değeri borcu güvenle karşılayamayacak seviyeye indiğinde pozisyon [[liquidation|tasfiyeye]] açılır; üçüncü taraflar borcun bir kısmını kapatıp karşılığında teminattan indirimli pay alır. Protokolde ayrıca aynı işlem içinde alınıp aynı işlemde geri ödenmek zorunda olan [[flash-loan|flash loan]] mekanizması vardır.

## Dikkat

Borç alan teminatını kaybedebilir. Fiyat aleyhine hareket ettiğinde tasfiye otomatik olarak, kimseye sormadan ve "biraz beklesek toparlar" denmeden çalışır; üstüne tasfiye cezası da teminattan kesilir. Pozisyonun ne kadar yakın olduğunu [[health-factor|sağlık faktörü]] gösterir.

Sert fiyat hareketlerinde tasfiye zamanında gerçekleşmezse teminat borcu karşılamayabilir; ortaya çıkan açık ([[bad-debt|kötü borç]]) havuzdaki mevduat sahiplerine yansır. Risk parametrelerini ve hangi varlıkların teminat sayılacağını ise yönetişim belirler: yazıldığı tarih itibarıyla bu kararlar jeton sahiplerinin oylarıyla alınır, yani protokolün risk iştahı zamanla değişebilir.
