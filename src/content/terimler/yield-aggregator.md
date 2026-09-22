---
term: "Yield Aggregator"
tr: ""
aliases: []
category: defi
subcategory: "Getiri"
level: orta
short: "Getiri üreten birden çok kaynağı tek arayüzde toplayan ve fonu bunlar arasında yönlendiren protokol."
related: [vault, strategy-vault, yield-farming, composability, apy, erc-4626]
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

Getiri toplayıcı, getiri üreten birden çok kaynağı tek bir arayüzde toplayan ve yatırılan fonu bunlar arasında yönlendiren protokoldür. Kullanıcının yaptığı iş tek bir yatırma işlemine iner; hangi protokolde durulacağı, ödüllerin ne zaman toplanıp geri yatırılacağı gibi kararlar kod tarafında alınır.

Türkçede yerleşik karşılığı yok; "getiri toplayıcı" diye açıklanır ama terim olarak İngilizcesi kullanılır.

## Nasıl çalışır?

Kullanıcı bir [[vault|kasaya]] yatırır ve pay token'ını alır. Kasanın bağlı olduğu [[strategy-vault|strateji]], fonu bir ya da birkaç kaynağa dağıtır, biriken ödül token'larını belirli aralıklarla toplar, ana varlığa çevirir ve geri yatırır. Bu geri yatırma döngüsüne otomatik bileşikleme denir.

İki pratik kazanç vardır. Birincisi maliyet: toplama ve geri yatırma işlemlerinin ücreti bütün yatırımcılara bölünür, oysa aynı döngüyü tek başına çevirmek her adımda ayrı ücret demektir. İkincisi emek: kaynaklar arası geçiş kullanıcının elle yaptığı bir iş olmaktan çıkar. Bu yapı, protokollerin birbirini bir parça gibi kullanabilmesi sayesinde mümkündür — [[composability|birleştirilebilirlik]].

## Dikkat

Toplayıcı yeni bir getiri kaynağı değildir; var olan kaynakların üstünde duran bir katmandır. Dolayısıyla riskleri de toplar: altındaki protokolün riski, toplayıcının kendi sözleşmesi ve fonu yönlendiren yetki. Alttaki tek bir protokolde çıkan sorun, kasadaki herkesin payına yansır.

Fonun nerede durduğu da kullanıcıdan uzaklaşır. "Hangi protokoldeyim" sorusunun cevabı, sen hiçbir işlem yapmadan değişebilir; bugün kabul edilebilir bulduğun bir kaynak yarın listede olmayabilir.

Geçmiş getiri de bir beklenti değildir: ilan edilen [[apy]] gerçekleşmiş bir döneme ya da o anki koşullara bakar, üstelik toplayıcıların çoğu performans ve yönetim ücreti keser. Ücretin nereden kesildiği (getiriden mi, anaparadan mı) sözleşmede yazar ve kasadan kasaya değişir.
