---
term: "Liquidity Bootstrapping Pool"
tr: ""
aliases: ["lbp"]
category: defi
subcategory: "Takas ve likidite"
level: ileri
short: "Ağırlıkları zaman içinde değişen bir havuzla yeni bir token'ın fiyatını yüksekten başlatıp kademeli düşüren lansman yöntemi."
related: [liquidity-pool, automated-market-maker-amm, initial-dex-offering-ido, token-generation-event-tge, fair-launch, price-impact]
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

Yeni bir token sıradan bir [[liquidity-pool|havuzda]] satışa çıktığında ilk saniyeler belirleyici olur: havuz sığdır, ilk büyük alımlar fiyatı fırlatır ve en hızlı davranan en iyi fiyatı alır.

Liquidity bootstrapping pool bunu havuzun **ağırlıklarını** zamana yayarak değiştirir. Havuz, satışın başında neredeyse tamamen yeni token ağırlıklıdır; süre boyunca ağırlık kademeli olarak karşı varlığa kayar.

Terim İngilizce kullanılır; Türkçede yerleşmiş bir karşılığı yok.

## Nasıl çalışır?

Ağırlıklı bir havuzda fiyat yalnızca miktarlara değil, ağırlıklara da bağlıdır. Sözleşme ağırlıkları takvime göre değiştirdiği için, kimse alım yapmasa bile fiyat kendiliğinden aşağı doğru iner. Alım geldikçe fiyat yukarı itilir, ağırlık değişimi tekrar aşağı çeker.

Amaç talebi zamana yaymaktır: acele etmenin getirisi azalır, alıcılar fiyatın inmesini bekleyebildiği için ilk bloklara sıkışan kapışma yumuşar.

## Dikkat

Fiyatın yüksekten başlayıp düşmesi bir arıza ya da "indirim" değildir; mekanizmanın çalışma biçimidir. İnen eğriyi "ucuzladı" diye okumak, düzeneği yanlış anlamaktır: fiyatın nerede duracağını satış boyunca alıcıların davranışı belirler ve satış bittiğinde ağırlık takvimi de biter.

Ayrıca havuzun kuralları şeffaf olsa bile tarafsız değildir. Başlangıç ağırlıklarını, süreyi ve eğrinin ne kadar sert ineceğini satışı düzenleyen taraf seçer; bu seçimler sonucu doğrudan etkiler.
