---
term: "Margin"
tr: "Marjin"
aliases: []
category: defi
subcategory: "Türevler"
level: orta
short: "Bir pozisyonu açmak ve açık tutmak için kilitlenen teminat; pozisyon aleyhine döndüğünde ilk eriyen bu tutardır."
related: [leverage, liquidation, liquidation-threshold, collateral, perpetual-futures-perps]
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

Margin, bir pozisyonu taşıyabilmek için yatırdığın teminattır. Pozisyonun bedeli değildir; pozisyonun zararını karşılayacağına dair bıraktığın güvencedir. Hesabında durur, kayıtlarda senin adına görünür, ama pozisyon açık kaldığı sürece serbest değildir.

İki eşik vardır. **Başlangıç teminatı**, pozisyonu açmak için gereken en az tutardır. **Sürdürme teminatı**, pozisyonu açık tutmak için gereken alt sınırdır ve daha düşüktür. Zarar arttıkça teminat erir; sürdürme sınırının altına inildiğinde pozisyon kapatılır ([[liquidation]]).

## Benzetme

Dalış tüpündeki hava gibi. Suya girerken tüpün doludur ve ne kadarı kaldığını ekrandan görürsün. Derine indikçe, akıntıya karşı yüzdükçe hava daha hızlı biter; sakin bir daldaysan yavaş. Asıl mesele şu: tüp boşalmadan sen çıkmazsan, çıkma kararı senin elinden alınır. Marjin de böyle bir tampondur — durdukça değil, işler aleyhine gittikçe erir.

## Nasıl çalışır?

Protokol pozisyonun anlık zararını teminattan düşerek izler. Teminatın pozisyon büyüklüğüne oranı [[leverage|kaldıracı]] belirler; bu oran zarar büyüdükçe kendiliğinden bozulur.

Teminatın nasıl bağlandığı da bir tercihtir. Ayrık (isolated) düzende her pozisyonun kendi teminatı vardır ve zarar o teminatla sınırlıdır. Çapraz (cross) düzende hesabındaki teminatın tamamı bütün pozisyonların arkasında durur; bir pozisyon kötü giderse diğerlerinin teminatını da yer.

## Dikkat

"Hesabımda para var" ile "pozisyonum güvende" aynı cümle değildir. Teminat pozisyonun tamponudur; kötü giden bir pozisyonda harcanan ilk şey odur ve bittiğinde pozisyon kapanır. Bakiyeye bakarak değil, [[liquidation-threshold|tasfiye eşiğine]] olan mesafeye bakarak takip edilir.

Teminat eklemek de sorunu ertelemekten başka bir şey yapmaz: pozisyonu tasfiyeden uzaklaştırır ama zarara açık tuttuğun tutarı büyütür.
