---
term: "Soft Fork"
tr: ""
aliases: ["softfork", "yumusak catallanma"]
category: temeller
subcategory: "Ağ ve node"
level: ileri
short: "Kuralları daraltan, güncellenmemiş node'ların yeni blokları hâlâ geçerli saydığı protokol değişikliği."
related: [hard-fork, fork-blockchain, network-upgrade, miner, validator]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Soft fork, yeni kural kümesinin eskisinin alt kümesi olduğu bir protokol değişikliğidir: daha önce geçerli olan bazı şeyler artık geçersizdir, ama yeni kurala uyan her blok eski kurala da uyar. Bu yüzden yazılımını güncellememiş bir [[node|node]] hiçbir şey fark etmeden zinciri izlemeye devam eder. İsmi de buradan gelir; İngilizce terim Türkçede de olduğu gibi kullanılır.

## Benzetme

Bir otoparkta "bu sıraya yalnızca küçük araçlar park edebilir" kuralının getirilmesi gibidir. Kuralı duymamış bir görevli için orada duran küçük araba hâlâ kurallara uygundur; kimse ona "burası park yeri değil" demez. Kural yasak eklemedi, var olan izni daralttı.

## Nasıl çalışır?

Kuralın gerçekten yürürlüğe girmesi, blok üreten tarafın çoğunluğuna bağlıdır. Yeni kuralı uygulayan [[miner|madenciler]] ya da [[validator|validator'lar]], kurala aykırı bir blok gördüğünde onu reddeder ve üzerine inşa etmez. Çoğunluk yeni kuraldaysa böyle bir blok zincirde tutunamaz ve kural fiilen zorunlu hale gelir.

Çoğunluk sağlanamazsa ağ bir süre iki dal arasında gider gelir: bir taraf bazı blokları geçerli sayar, diğer taraf saymaz. Bu yüzden soft fork'lar genellikle bir sinyalleşme dönemiyle yürütülür — üreticiler ürettikleri bloklarda yeni kurala hazır olduklarını belirtir, eşik aşılınca kural devreye girer.

## Dikkat

Güncellememek bedava değildir. Eski bir node yeni kurala uyan blokları kabul eder ama o kuralın sağladığı güvenceyi kendisi denetleyemez; kabul ettiği şeyi tam anlamadan kabul eder. Karşılaştırma tek cümleyle şöyle kurulur: [[hard-fork|hard fork]]'ta eski node zinciri reddeder, soft fork'ta kabul eder.
