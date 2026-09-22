---
term: "Maker and Taker"
tr: ""
aliases: []
category: piyasa
subcategory: "Borsa ve alım satım"
level: orta
short: "Emir defterine bekleyen emir ekleyen taraf ile defterdeki emri alıp işlemi anında gerçekleştiren taraf ayrımı."
related: [limit-order, market-order, order-book, market-maker, liquidity]
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

Maker, [[order-book|emir defterine]] hemen eşleşmeyen bir emir ekleyen ve böylece defterde bekleyen bir fiyat bırakan taraftır. Taker ise defterde hazır bekleyen bir emri alıp işlemi o anda gerçekleştiren taraftır. Gerçekleşen her işlemde bir maker ve bir taker vardır.

İkisinin Türkçede yerleşik bir karşılığı yok; "yapan" ve "alan" gibi çeviriler tutmadığı için terimler İngilizce kullanılıyor.

## Nasıl çalışır?

Hangi tarafta olduğunu emrin türü değil, defterle karşılaşma biçimi belirler. Bir [[limit-order|limit emri]] beklemeye başlarsa maker, anında eşleşirse taker olur. [[market-order|Piyasa emri]] ise tanımı gereği hep taker'dır: zaten defterde duranı alır.

Borsalar bu iki tarafı genellikle farklı ücretlendirir; maker ücretleri daha düşüktür, bazı yerlerde sıfır ya da iade şeklindedir. Sebep şudur: defterde bekleyen emirler borsanın [[liquidity|likiditesini]] oluşturur, taker ise o likiditeyi tüketir. Defteri dolduran tarafı daha az ücretlendiren borsa, kendi defterini kalın tutmaya çalışıyordur.

## Dikkat

Maker olmak bir avantaj değil, bir takas ilişkisidir: daha düşük ücrete karşılık emrin ne zaman, hatta gerçekleşip gerçekleşmeyeceği belirsizdir.

Ücret yapısı borsadan borsaya, hatta aynı borsada kullanıcının işlem büyüklüğüne göre değişir; sabit bir kural yoktur. Ayrıca "maker" olmak ile [[market-maker|piyasa yapıcı]] olmak aynı şey değildir: ilki tek bir emrin sınıfı, ikincisi sürekli iki taraflı fiyat veren bir roldür.
