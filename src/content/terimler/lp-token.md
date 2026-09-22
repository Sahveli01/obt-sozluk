---
term: "LP Token"
tr: ""
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: orta
short: "Bir likidite havuzundaki payını temsil eden ve geri verildiğinde o payı havuzdan çekmeye yarayan token."
related: [liquidity-pool, liquidity-provider-lp, erc-20, yield-farming, vault, concentrated-liquidity]
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

Bir [[liquidity-pool|havuza]] varlık yatırdığında karşılığında bir token alırsın. Bu token bir makbuz değil, payın kendisidir: havuzun kaçta kaçının senin olduğunu o tutar. Kimin ne yatırdığı ayrı bir listede tutulmaz; havuz yalnızca dolaşımdaki pay token'larına bakar.

"LP token" sektörde İngilizce kullanılır; Türkçede yerleşmiş bir karşılığı yok.

## Nasıl çalışır?

Havuza girdiğinde payın kadar LP token basılır, çıktığında bu token yakılır ve karşılığı sana ödenir. Aradaki sürede takaslardan kesilen ücretler havuzda birikir; token sayısı değişmediği için her bir token'ın karşılığı yavaşça büyür. Ücret, ayrıca dağıtılan bir ödeme değil, payının kalınlaşmasıdır.

Çoğu havuzda bu pay sıradan bir [[erc-20|ERC-20]] token'dır; dolayısıyla devredilebilir, başka bir protokole teminat olarak verilebilir ya da bir [[vault|kasaya]] yatırılabilir. [[concentrated-liquidity|Yoğunlaştırılmış likiditede]] ise her pozisyonun kendi fiyat aralığı olduğu için pay çoğu zaman devredilebilir bir NFT olarak temsil edilir.

## Dikkat

LP token'ı kaybetmek havuzdaki payı kaybetmektir; kimse "aslında o benimdi" diyerek geri alamaz. Onu başka bir sözleşmeye yatırdığında da havuzun riskine o sözleşmenin riskini eklemiş olursun: üstteki protokol boşaltılırsa altındaki havuz sapasağlam dursa bile payın gitmiş olur.
