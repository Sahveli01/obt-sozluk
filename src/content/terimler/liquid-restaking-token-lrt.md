---
term: "Liquid Restaking Token (LRT)"
tr: ""
aliases: ["LRT"]
category: defi
subcategory: "Getiri"
level: ileri
short: "Restaking pozisyonunun karşılığında verilen, arkasında bir hizmet sepetinin teminatı duran devredilebilir token."
related: [restaking, liquid-staking-token-lst, slashing, depeg, liquidation, vault]
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

LRT, bir [[restaking]] pozisyonunun karşılığında verilen devredilebilir token'dır. Kullanıcı varlığını protokole yatırır, protokol teminatı hangi hizmetlere vereceğini kendi seçer ve kullanıcıya tek bir token verir. Görünürde elinde tek bir bakiye vardır; arkasında ise protokolün seçtiği bir hizmet sepeti ve o sepetteki her hizmetin ceza koşulu durur.

Türkçede yerleşik karşılığı yok; kısaltmasıyla anılır.

## Nasıl çalışır?

Protokol yatırılan varlığı stake eder ya da [[liquid-staking-token-lst|LST]] olarak tutar, sonra restaking katmanına yönlendirir ve hizmetler arasında paylaştırır. Hangi hizmete ne kadar teminat verileceğini kullanıcı seçmez; protokolün yönetişimi ya da yetkili bir adres seçer. LRT'nin karşılık oranı, bu sepetten gelen ödüller eklenip kesintiler düşülerek hesaplanır — yapı olarak bir [[vault|kasanın]] pay muhasebesine benzer.

Çıkış iki yoldan olur. Doğrudan çekimde restaking katmanının bekleme süresi ile ağın kendi bekleme süresi üst üste biner; bu yüzden çıkış, sade stake'e göre daha uzun sürer. İkinci yol token'ı ikincil piyasada satmaktır, ki orada fiyatı o anki alıcı belirler.

## Dikkat

Tek bakiye, çok sayıda kesinti hakkı demektir. Sepetteki herhangi bir hizmette ceza kesilirse bu, doğrudan karşılık oranına yansır ve zararı bütün token sahipleri paylaşır — o hizmete girilmesini sen istemiş olmasan bile. Taşıdığın riskin bileşimi senin elinde değildir: protokolün yönetişimi yeni bir hizmet eklediği anda, sen hiçbir işlem yapmadan maruz kaldığın ceza koşulları artar.

Katmanları saymak faydalıdır: dayanak varlık, stake, LST, restaking, LRT. Her katman bir sözleşme, bir yetki ve bir muhasebe varsayımı ekler. Ödüller bu katmanlar boyunca toplanarak sunulur ama risk toplanmaz, birikir: en alttaki bir sorun yukarıdaki her şeyi aynı anda etkiler.

Likidite tarafında da kırılganlık vardır. LRT'leri teminat gösterip aynı varlıktan borçlanıp tekrar yatırma döngüsü yaygınlaştığında, ikincil piyasadaki küçük bir [[depeg|ayrışma]] zincirleme [[liquidation|tasfiyelere]] dönüşebilir: teminat ucuzladıkça pozisyonlar kapatılır, kapatmak için satış yapılır, satış fiyatı daha da aşağı çeker.
