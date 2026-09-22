---
term: "Crypto-backed Stablecoin"
tr: ""
aliases: []
category: defi
subcategory: "Stablecoin'ler"
level: orta
short: "Karşılığı zincir üstünde kilitlenmiş kripto varlık olan stablecoin; teminat oynak olduğu için borçtan fazlası kilitlenir."
related: [stablecoin, overcollateralization, collateralized-debt-position-cdp, collateral-ratio, liquidation, peg]
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

Kripto teminatlı stablecoin, karşılığı zincirin üstünde duran [[stablecoin]]'dir. Banka hesabı yoktur, parayı elinde tutan bir kurum yoktur; teminat bir sözleşmede kilitlidir ve isteyen herkes ne kadar olduğunu kendisi sayabilir.

Bunun bir bedeli var. Teminat da kripto olduğu için fiyatı oynar. Bir birimlik token'ın arkasına tam bir birimlik teminat bırakırsan, teminat biraz ucuzladığı anda karşılık açığa düşer. Bu yüzden bu tasarımlar [[overcollateralization|fazla teminatlandırma]] ile çalışır: çıkardığın stablecoin'in değerinden belirgin biçimde fazlasını kilitlersin. Aradaki fark, fiyat düştüğünde karşılığın erimemesi için bırakılan paydır. Türkçede yerleşik bir karşılığı yok, "kripto teminatlı" diye anlatılıyor.

## Benzetme

Altın karşılığı borç veren bir dükkân gibi. Bıraktığın bileziğin o günkü değerinin tamamını vermez, altında bir tutar verir. Sebep cimrilik değil: altın ucuzlarsa elindeki bilezik borcu karşılamayabilir. Fiyat belli bir sınırın altına inerse de vadeyi beklemez, bileziği satar.

## Nasıl çalışır?

Teminatı kilitlediğin yapıya [[collateralized-debt-position-cdp|teminatlı borç pozisyonu]] denir. Kilitlersin, karşılığında belirli bir sınıra kadar stablecoin basarsın; teminatını geri almak için bastığın stablecoin'i iade edersin, o da yakılır. Yani elindeki stablecoin, aslında birinin açtığı bir borçtur.

Sınırı [[collateral-ratio|teminat oranı]] belirler. Teminatın piyasa fiyatı bir [[oracle|kâhin]] aracılığıyla sözleşmeye taşınır. Oran [[liquidation-threshold|tasfiye eşiğinin]] altına inerse pozisyon [[liquidation|tasfiye edilir]]: teminatın bir kısmı satılıp borç kapatılır ve pozisyon sahibine ceza kesilir. Sistemin toplam karşılığını ayakta tutan şey, bu otomatik satıştır.

## Dikkat

Tasfiye ancak teminat yeterince hızlı satılabiliyorsa işe yarar. Fiyat sert ve kesintisiz düşerse pozisyonlar eşiğin çok altında yakalanır; satılan teminat borcu kapatmaya yetmez ve protokolde [[bad-debt|karşılıksız borç]] kalır. Bu açığı kapatmanın yolu ya önceden ayrılmış bir tampon fondur ya da yeni token basmaktır; ikisi de bedelsiz değildir.

İkinci nokta: sistem fiyat verisine bağımlıdır. Kâhinden yanlış fiyat gelirse sağlam pozisyonlar tasfiye edilir ya da çürük pozisyonlar ayakta kalır.

Üçüncüsü sessiz olanı. Teminat sepetine fiat destekli bir stablecoin konursa karşılık zincir üstünde sayılabilir kalır, ama o stablecoin'in ihraççı riski de sepetin içine girmiş olur.
