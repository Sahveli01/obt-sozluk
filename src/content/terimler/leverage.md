---
term: "Leverage"
tr: "Kaldıraç"
aliases: ["kaldıraç"]
category: defi
subcategory: "Türevler"
level: orta
short: "Yatırdığın teminattan daha büyük bir pozisyon taşımak; kazancı büyüttüğü oranda kaybı da büyütür."
related: [margin, liquidation, perpetual-futures-perps, bad-debt, health-factor, short-position]
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

Kaldıraç, yatırdığın teminattan daha büyük bir pozisyon taşımaktır. Aradaki farkı ödünç alırsın; kâr ve zarar ise pozisyonun tamamı üzerinden hesaplanır. Yani fiyat hareketi teminatına oranla büyütülmüş olarak yansır — her iki yönde de.

Kaldıraç oranı, pozisyonun büyüklüğünün teminata bölünmesidir. Oran büyüdükçe pozisyonu ayakta tutan teminat payı küçülür.

## Benzetme

Peşinatla ev almak gibi. Evin bedelinin bir kısmını kendin koyarsın, kalanını banka verir. Ev değer kazanırsa artışın tamamı senindir, çünkü bankaya olan borcun sabittir. Değer kaybederse de kaybın tamamı senin koyduğun peşinatın üstünden gider — banka alacağından vazgeçmez.

Bir farkla: konut kredisinde evin değeri düşünce banka evi elinden almaz, taksitleri ödemeye devam edersin. Kaldıraçlı bir pozisyonda böyle bir süre tanınmaz.

## Nasıl çalışır?

Teminatını yatırırsın ([[margin]]), protokol pozisyonu açar ve sürekli izler. Zarar teminattan düşülür. Teminat, pozisyonu taşımak için gereken alt sınırın altına inerse pozisyon kapatılır ([[liquidation]]).

Bunun doğrudan bir sonucu var: kaldıraç oranı arttıkça, teminatı bu sınırın altına indirmeye yetecek fiyat hareketi oransal olarak küçülür. Yüksek kaldıraçta, normal bir gün içinde sıradan sayılabilecek bir dalgalanma pozisyonu kapatmaya yetebilir.

## Dikkat

Kaldıraç bir kazanç aracı değil, bir büyütme çarpanıdır ve simetriktir: kaybı da aynı oranda büyütür. Büyüyen kayıp ödünç aldığın paradan değil, senin teminatından karşılanır.

Tasfiye senin onayını beklemez. Eşik aşıldığında pozisyon kapatılır; fiyat bir saat sonra geri gelse bile pozisyon artık yoktur, zarar kesinleşmiştir. Çoğu protokol ayrıca tasfiye sırasında bir kesinti uygular.

Zincir üstünde ek bir sorun var: tasfiye de bir işlemdir ve sıraya girer. Ağ tıkanıksa ya da fiyat çok hızlı hareket ederse tasfiye geç kalabilir. O durumda zarar teminatını aşar; açıkta kalan kısım protokolün sırtında kalır ([[bad-debt]]).
