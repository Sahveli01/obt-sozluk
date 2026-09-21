---
term: "Fork (Blockchain)"
tr: "Çatallanma"
aliases: ["catallanma", "blockchain fork"]
category: temeller
subcategory: "Ağ ve node"
level: orta
short: "Zincirin tek bir geçmişi sürdürmek yerine aynı noktadan iki ayrı dala ayrılması."
related: [hard-fork, soft-fork, chain-split, chain-reorganization-reorg, fork-choice-rule]
disambiguation: [fork-git]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Bir blockchain'in tek bir geçmişi olması gerekir. Fork, o geçmişin bir noktadan sonra ikiye ayrılmasıdır: aynı ana kadar herkes hemfikirdir, o andan sonra ağın bir kısmı bir dalı, bir kısmı öbürünü sürdürür. Çatallanmanın iki ayrı sebebi vardır ve karıştırılmaları yaygın bir hatadır: kaza ve karar.

## Nasıl çalışır?

**Kaza kaynaklı fork** gündelik bir olaydır. İki üretici neredeyse aynı anda geçerli birer [[block|blok]] yayınlarsa ağın farklı köşeleri önce farklı bloğu duyar ve kısa süre iki dal birden yaşar. Bir sonraki blok dallardan birinin üzerine gelince iş biter: node'lar [[fork-choice-rule|dal seçim kuralına]] göre kazanan dalı benimser, diğer dal terk edilir. Terk edilen bloklar [[orphan-block|orphan]] sayılır, o dalı benimsemiş node'lar ise küçük bir [[chain-reorganization-reorg|reorg]] yaşar. Bu tür fork birkaç blokta kendiliğinden kapanır.

**Karar kaynaklı fork** ise kuralların değişmesidir. Protokol güncellenince yeni kurallar eskisiyle uyumlu olabilir ([[soft-fork|soft fork]]) ya da olmayabilir ([[hard-fork|hard fork]]). Herkes aynı kuralı benimserse ortada kalıcı bir ayrılık kalmaz; bir grup eski kurallarda ısrar ederse ayrılık kalıcılaşır ve ortaya [[chain-split|zincir bölünmesi]] çıkar.

## Dikkat

Git'teki fork ile aynı kelime, ayrı iş: [[fork-git|Git'te fork]] bir deponun kopyasını kendi hesabına almaktır, kimsenin ortak geçmişi bölünmez. Blockchain'de fork ise canlı bir ağın ortak geçmişinden ayrılmaktır. Bir zincirin kodunu kopyalayıp kendi ağını başlatmaya da "fork" denir; bu da ayrı bir kullanımdır, mevcut ağı çatallamaz.
