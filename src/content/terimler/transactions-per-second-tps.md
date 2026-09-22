---
term: "Transactions Per Second (TPS)"
tr: "Saniyedeki İşlem Sayısı"
aliases: ["tps"]
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Bir ağın saniyede kaç işlem taşıyabildiğini söyleyen, tek başına çok az şey anlatan kaba ölçüt."
related: [scalability, block-time, finality, blockspace, gas]
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

TPS, bir ağın saniyede kaç işlem taşıyabildiğini söyleyen ölçüttür. Hesabı basittir: bir bloğa sığan işlem sayısı, [[block-time|blok süresine]] bölünür. Bu sadelik onu pazarlamaya çok uygun hâle getirir; aynı sadelik yüzünden de yanıltıcıdır.

## Benzetme

Bir lokantanın vitrinindeki "günde 500 kişi ağırlıyoruz" tabelası gibi. Sayı doğru olabilir ama merak ettiğin şeyi söylemez: masaya oturmak için ne kadar bekleyeceğini, o tempoda mutfaktan ne çıktığını ve sayının hangi günün sayısı olduğunu.

## Nasıl çalışır?

Bir TPS rakamını okurken sorulacak sorular şunlardır:

- **Hangi işlem sayıldı?** Basit bir [[transaction|transfer]] ile karmaşık bir [[smart-contract|akıllı sözleşme]] çağrısı aynı işi yapmaz. Ağın taşıdığı şey işlem adedi değil, hesaplama ve veri yüküdür — [[gas|gas]] zaten bunu ölçmek için vardır.
- **Hangi koşulda ölçüldü?** Az sayıda güçlü sunucunun birbirine yakın durduğu bir test ortamında çıkan rakam, dünyaya yayılmış binlerce node'un gerçek koşullarını yansıtmaz.
- **Node'un maliyeti ne oldu?** Kapasiteyi artırmanın en kolay yolu node'dan daha çok disk, bant genişliği ve işlemci istemektir. O maliyet rakamda görünmez.
- **Ne zaman kesinleşiyor?** İşlemin bloğa girmesi ile geri alınamaz hâle gelmesi ayrı şeylerdir; kullanıcı için asıl bekleme [[finality|kesinlikte]] biter.

## Dikkat

Teorik tavan ile gerçek kullanım farklıdır. Çoğu ağ çoğu zaman kapasitesinin çok altında çalışır, dolayısıyla "şu kadar TPS yapıyor" cümlesi genellikle "yapabilir" demektir.

İki ağın TPS rakamını yan yana koymak, ikisinin aynı işi aynı koşulda ölçtüğünü varsaymaktır; bu varsayım neredeyse hiç doğru değildir. Rakamları kıyaslamak yerine nasıl ölçüldüğünü sormak daha çok şey anlatır — [[scalability|ölçeklenebilirlik]] tek bir sayıya sığmaz.
