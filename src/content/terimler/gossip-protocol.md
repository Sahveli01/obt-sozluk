---
term: "Gossip Protocol"
tr: ""
aliases: []
category: konsensus
subcategory: "Ağ katmanı"
level: orta
short: "Her düğümün yeni duyduğunu birkaç komşusuna iletmesiyle bilginin merkezî bir dağıtıcı olmadan ağa yayılması."
related: [node, mempool, peer-discovery, peer-to-peer-p2p, block]
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

Gossip protokolü, bir bilginin ağa merkezî bir dağıtıcı olmadan yayılma yöntemidir. Bir [[node|node]] yeni bir [[block|blok]] ya da işlem duyduğunda bunu ağdaki herkese tek tek göndermez; yalnızca doğrudan bağlı olduğu birkaç komşusuna iletir. O komşular da aynısını yapar. Birkaç adım sonra bilgi ağın tamamına ulaşmış olur.

Dağıtımdan sorumlu bir sunucu yoktur. Olsaydı o sunucu hem tek arıza noktası hem de tek sansür noktası olurdu. Türkçede yerleşik bir karşılığı yok; dağıtık sistemler literatüründe "dedikodu algoritması" geçse de topluluk "gossip" demeyi sürdürüyor.

## Benzetme

Kar tatili haberinin yayılması gibi. Kimse bin veliyi tek tek aramaz; birkaç kişiye söylenir, onlar kendi listesindeki birkaç kişiyi arar. Sabaha kadar herkes öğrenir — üstelik çoğu kişi aynı haberi üç ayrı kişiden duyar. Bu tekrar boşa emek gibi görünür ama asıl güvence odur: biri telefonunu açmasa da haber başka bir yoldan ulaşır.

## Nasıl çalışır?

Her node'un bağlı olduğu sınırlı sayıda komşusu vardır; bu komşuların nasıl bulunduğu ayrı bir iştir ([[peer-discovery|komşu bulma]]). Bir mesaj geldiğinde node önce onu kendi kurallarına göre sınar, geçerliyse komşularına iletir. Aynı mesaj ikinci kez geldiğinde iletmez — yoksa mesaj ağda sonsuza kadar dolanırdı.

Sonuç olarak aynı veri ağ üzerinde defalarca taşınır. Bedeli bant genişliğidir; karşılığında alınan şey dayanıklılıktır. Node'ların bir kısmı çevrimdışı olsa, bir kısmı mesajı kasten iletmese bile mesaj başka yollardan hedefe varır. İmzalanan işlemler de bu yolla dağılır ve her node'un kendi [[mempool|mempool'unda]] birikir.

## Dikkat

Gossip neyin doğru olduğuna karar vermez, yalnızca duyulanı taşır. Bir bloğun eline ulaşmış olması onu kabul ettiğin anlamına gelmez; geçerliliğine her node kendi kurallarıyla karar verir.

Yayılım eşzamanlı da değildir. "Şu anda herkes bunu gördü" diyebileceğin bir an yoktur: ağın bir ucu yeni bloğu görmüşken öteki ucu henüz görmemiş olabilir. Zincirde kısa süreli çatallanmaların bir sebebi de budur ([[fork-blockchain|fork]]).
