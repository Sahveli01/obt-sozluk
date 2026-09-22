---
term: "Stability Fee"
tr: "İstikrar ücreti"
aliases: []
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "CDP borcunun taşıma maliyeti; zamanla işler, borç kapatılırken ödenir ve aynı zamanda bir arz ayarı aracıdır."
related: [collateralized-debt-position-cdp, crypto-backed-stablecoin, peg, borrowing-defi, interest-rate-model, governance]
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

İstikrar ücreti, [[collateralized-debt-position-cdp|CDP]] açıp stablecoin bastığında borcunun üstüne işleyen bedeldir. İşleyişi faize benzer: zamanla birikir, borcu kapatırken anaparanın üstüne eklenir.

Adının "faiz" değil "ücret" olmasının bir sebebi var. Ortada sana borç veren bir mevduat sahibi yoktur; stablecoin borçlandığın anda yaratılmıştır. Dolayısıyla ödediğin bedel kimsenin getirisi değildir — protokolün kendi hesabına gider.

## Nasıl çalışır?

Toplanan ücret protokolün rezervine ya da hazinesine birikir. Bu birikimin ilk işi, [[liquidation|tasfiyelerin]] açık kapatmaya yetmediği durumlarda tamponluk etmektir.

İkinci işi daha ilginçtir: ücret bir arz ayarı aracıdır.

Ücret yükseltilirse borç taşımak pahalılaşır. Yeni pozisyon açmak cazipliğini yitirir, bazı borçlular pozisyonlarını kapatır ve kapattıkları stablecoin yakılır. Dolaşımdaki arz daralır, bu da [[peg|bağın]] yukarı doğru desteklenmesi anlamına gelir. Ücret düşürülürse tersi olur: borçlanmak ucuzlar, arz genişler.

Oranı kim belirler? Bir merkez bankası değil, protokolün [[governance|yönetişimi]]. Teklif edilir, oylanır, geçerse yürürlüğe girer ve o andan sonra açık olan bütün pozisyonlar yeni oranla işler.

## Dikkat

"Ücret" kelimesi tek seferlik bir kesinti izlenimi verir; oysa bu sürekli işleyen bir yüktür. Pozisyonunu açık unutursan sen hiçbir şey yapmadan borcun büyür.

Bunun görünmeyen sonucu şudur: teminatının fiyatı hiç düşmese bile büyüyen borç teminat oranını aşağı çeker. Yani bir pozisyon yalnızca piyasa kötüleştiği için değil, yalnızca zaman geçtiği için de tasfiyeye yaklaşabilir.
