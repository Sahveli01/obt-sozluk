---
term: "Funding Rate"
tr: "Fonlama oranı"
aliases: []
category: defi
subcategory: "Türevler"
level: orta
short: "Süresiz sözleşmenin fiyatını spot fiyata yaklaştırmak için uzun ve kısa pozisyonlar arasında düzenli aralıklarla yapılan ödeme."
related: [perpetual-futures-perps, long-position, short-position, arbitrage, spot-trading]
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

Funding, [[perpetual-futures-perps|süresiz sözleşmelerin]] fiyatını dayanak varlığın gerçek fiyatına bağlayan mekanizmadır. Vadeli bir sözleşmede bu işi vade günü yapar: o gün geldiğinde iki fiyat zorunlu olarak buluşur. Süresiz sözleşmede vade olmadığı için bağ sürekli çalışan bir ödeme akışına devredilmiştir.

Ödeme borsanın ya da protokolün kasasına gitmez; doğrudan bir taraftaki pozisyonlardan diğer taraftakilere geçer.

## Nasıl çalışır?

Protokol iki fiyatı karşılaştırır: sözleşmenin piyasada oluşan fiyatı ve dayanak varlığın dış kaynaklardan okunan fiyatı.

Sözleşme spottan pahalıysa oran artı olur ve uzun pozisyondakiler kısa pozisyondakilere öder. Ucuzsa oran eksiye döner ve ödeme ters yönde akar. Ödeme belirli aralıklarla, pozisyonun büyüklüğü üzerinden hesaplanır — teminatın değil. Bu yüzden kaldıraç arttıkça funding'in teminata oranla ağırlığı da artar.

Mantığı basittir: pahalı tarafta durmak masraflı olunca o tarafta durmak isteyen azalır, [[arbitrage|arbitraj]] yapanlar da ters tarafa geçerek farkı kapatır.

## Dikkat

Funding, pozisyonunun kâr–zararından ayrı ve sürekli işleyen ikinci bir akıştır. Ekstrede kâr görünürken funding gideri o kârı yemiş olabilir.

Yüksek bir funding oranı "fiyat düşecek" anlamına gelmez. Yalnızca o anda pozisyonların bir tarafa yığıldığını gösterir; bu yığılmanın ne kadar süreceğini ya da fiyatın ne yapacağını söylemez.
