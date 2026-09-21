---
term: "Node"
tr: "Düğüm"
aliases: ["dugum", "ag dugumu"]
category: temeller
subcategory: "Ağ ve node"
level: baslangic
short: "Blockchain yazılımını çalıştıran, ağa bağlanıp gelen blokları ve işlemleri kendi doğrulayan bilgisayar."
related: [full-node, light-node, archive-node, peer-to-peer-p2p, client-blockchain]
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

Node, bir blockchain'in yazılımını çalıştıran ve ağa bağlanan bilgisayardır. Özel donanım şart değildir; köşede duran eski bir dizüstü bile olabilir. İşi üç başlıkta toplanır: [[peer-to-peer-p2p|eşler arası]] ağdaki komşularından yeni [[block|blok]] ve [[transaction|işlem]] almak, bunların protokol kurallarına uyup uymadığını kendi başına kontrol etmek, geçerli bulduklarını başka komşulara iletmek.

Ağda kaç node varsa zincirin o kadar bağımsız kopyası ve o kadar bağımsız denetçisi var demektir. Bu yüzden node çalıştırmak, birinin söylediğine güvenmek yerine kendin doğrulamanın en doğrudan yoludur.

## Benzetme

Node'lar ağın telsiz istasyonları gibidir. Her istasyon duyduğu anonsu komşularına aktarır ama önce elindeki kural kitabına bakıp anonsun kurallara uyup uymadığına kendisi karar verir; uymuyorsa iletmez. Ortada "doğrusu budur" diyen tek bir merkez istasyon yoktur.

## Dikkat

Her node blok üretmez. Blok üretmek — [[mining|madencilik]] ya da [[validator|validator]] olmak — ayrı bir roldür; node'ların büyük kısmı blok üretmeden yalnızca doğrulama ve dağıtım yapar. Node'lar tuttukları veri miktarına göre de ayrışır: [[full-node|full node]], [[light-node|light node]] ve [[archive-node|archive node]] aynı ağda farklı işler görür.
