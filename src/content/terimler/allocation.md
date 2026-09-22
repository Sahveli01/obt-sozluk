---
term: "Allocation"
tr: "Dağılım"
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: orta
short: "Toplam arzın hangi grup için ne kadarının ayrıldığını gösteren bölüşüm: ekip, yatırımcılar, topluluk, hazine ve teşvikler."
related: [tokenomics, vesting, token-unlock, treasury, airdrop, circulating-supply]
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

Allocation, toplam arzın paylara bölünmesidir: hangi dilim kime ayrıldı. Yaygın dilimler kurucu ekip, erken yatırımcılar, topluluk dağıtımları, protokol [[treasury|hazinesi]] ve kullanıcı teşvikleridir. Sunumlarda genellikle bir pasta grafiği olarak görürsün.

## Nasıl çalışır?

Her dilimin üç özelliği vardır ve ancak üçü birlikte anlam taşır: **büyüklüğü** (arzın yüzde kaçı), **takvimi** ([[vesting]] var mı, ne zaman açılıyor) ve **adresi** (token fiilen hangi cüzdanda duruyor).

Dilimlerin bir kısmı baştan dağıtılır — bir [[airdrop]] ya da satış yoluyla. Bir kısmı sözleşmelerde kilitli bekler ve takvimi geldikçe [[token-unlock|açılır]]. Bir kısmı hiç dağıtılmaz, harcanmak üzere hazinede durur; bu son grup [[circulating-supply|dolaşımdaki arza]] girmez.

Dağılım zincirde izlenebilir bir şeydir: duyurulan tabloyla adreslerdeki bakiyelerin uyuşup uyuşmadığı kontrol edilebilir.

## Dikkat

Yüzdeler tek başına bir şey anlatmaz. Aynı yüzde farklı takvimlerle bambaşka sonuç verir; hemen açılan bir dilimle yıllara yayılmış bir dilim aynı tabloda aynı büyüklükte görünür. Bu sözlük hangi dağılımın doğru olduğu konusunda hüküm vermez — böyle bir standart zaten yok.

İkinci nokta: etiket, dilimin kimin elinde olduğunu göstermez. "Topluluk" yazan bir dilim çoğu zaman tek bir cüzdanda durur ve o cüzdanı kimin, hangi kararla harcadığı ayrı bir sorudur. Bağlayıcı olan dilimin adı değil, adresin kontrolüdür.
