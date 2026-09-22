---
term: "Borrowing (DeFi)"
tr: "Borçlanma"
aliases: []
category: defi
subcategory: "Borç verme ve alma"
level: baslangic
short: "Elindeki varlığı satmadan, teminat kilitleyerek havuzdan başka bir varlık çekmek; borç açık kaldığı sürece faiz işler."
related: [lending-protocol, collateral, overcollateralization, loan-to-value-ltv, liquidation, interest-rate-model]
disambiguation: [borrowing-rust]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

DeFi'de borçlanmak, elindeki varlıktan vazgeçmeden onun değerini kullanıma almaktır. [[collateral|Teminatını]] kilitlersin, havuzdan başka bir varlık çekersin, işin bitince geri ödeyip teminatını çözersin.

Kimse senden söz almaz, kimse seni aramaz. Tek güvence kilitlediğin teminattır — bu yüzden çekebileceğin tutar her zaman teminatının değerinden küçüktür ([[overcollateralization|aşırı teminatlandırma]]).

Vade yoktur; borcunu istediğin gün kapatabilirsin. Ama kapatmadığın her gün faiz işler ve borcun kendiliğinden büyür.

## Benzetme

Yokuş aşağı bırakılmış bir kar topu gibi. Bıraktıktan sonra sen hiçbir şey yapmasan da büyür; üstelik büyüdükçe daha hızlı büyür, çünkü işleyen faiz de borcun üstüne eklenir ve o da faiz getirir. Onu durduran tek şey aşağı inip önüne geçmendir — yani borcu kapatman.

## Dikkat

Aynı kelime Rust'ta bambaşka bir şeydir: orada [[borrowing-rust|ödünç alma]] bir değere geçici erişim izni almaktır, ortada ne teminat ne borç vardır.

Borçlandığın anda tek değil iki fiyata birden bağlanırsın: teminatının fiyatına ve borçlandığın varlığın fiyatına. Teminat düşerse [[liquidation|tasfiyeye]] yaklaşırsın; borçlandığın varlık yükselirse de aynı yere yaklaşırsın, çünkü borcun değeri büyümüştür. İkisi aynı anda ters yöne giderse mesafe iki kat hızlı kapanır.
