---
term: "Client Diversity"
tr: "İstemci Çeşitliliği"
aliases: ["istemci cesitliligi"]
category: konsensus
subcategory: "Ağ katmanı"
level: orta
short: "Ağdaki düğümlerin birbirinden bağımsız yazılmış farklı istemciler arasında dağılmış olması."
related: [client-blockchain, execution-client, consensus-client, node, defense-in-depth, bug]
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

İstemci çeşitliliği, bir ağdaki [[node|node]]'ların farklı ekiplerce yazılmış farklı [[client-blockchain|istemciler]] arasında dağılmış olmasıdır. Ağın sağlığıyla ilgili bir ölçüdür: kaç node olduğu kadar, o node'ların kaç ayrı yazılımı çalıştırdığı da önemlidir.

Sebebi basit. Bir yazılımdaki hata, o yazılımı çalıştıran herkeste aynı anda ortaya çıkar. Ağın büyük bölümü tek bir istemcide toplanmışsa, o istemcideki tek bir [[bug|hata]] bütün ağı aynı anda etkileyebilir: ağ durabilir ya da hatalı bir bloğu çoğunluk geçerli sayabilir. Aynı hata azınlıkta kalan bir istemcide çıktığında ise geri kalan node'lar onu reddeder; sorun ağı devirmeden, görünür bir uyuşmazlık olarak ortaya çıkar.

## Benzetme

Bir apartmanda herkesin aynı kampanyadan, aynı gün, aynı model kombiyi aldığını düşün. Modelde bir üretim hatası varsa ilk sert soğukta bütün daireler aynı anda susuz kalır — üstelik kimse sorunun kendi dairesinde olmadığını anlayamaz, çünkü karşılaştıracağı bir komşu yoktur. Farklı markalar takılsaydı arıza tek daireyle sınırlı kalır ve sebebi ilk günden belli olurdu.

Kimse kötü niyetli davranmadı burada. Herkes en çok tercih edileni aldı, çünkü servisi kolaydı ve komşusu memnundu.

## Dikkat

Merkeziyetsizliği yalnızca node sayısıyla ölçmek yanıltıcıdır. Binlerce node'un hepsi aynı yazılımı çalıştırıyorsa ortada binlerce bağımsız kopya değil, aynı kopyanın binlerce örneği vardır. [[defense-in-depth|Derinlemesine savunmanın]] mantığı burada da geçerli: katmanların bağımsız olması, çok olmasından önemlidir.

İkincisi, bu yalnızca teknik değil aynı zamanda bir koordinasyon sorunudur. Tek tek her node işleticisi için en yaygın istemciyi seçmek makul bir karardır: belgeleri zengindir, sorununun cevabı internette vardır, bir aksilikte yalnız kalmaz. Herkes aynı makul kararı verdiğinde ağ çeşitliliğini kaybeder. Bu yüzden çeşitlilik kendiliğinden oluşmaz; node işletenlerin bilerek azınlıktaki bir istemciyi seçmesiyle korunur.
