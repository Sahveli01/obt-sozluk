---
term: "Protocol-Owned Liquidity"
tr: ""
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: orta
short: "Bir protokolün takas likiditesini dışarıdan kiralamak yerine kendi hazinesinde tutması."
related: [liquidity-mining, liquidity-pool, treasury, lp-token, protocol-revenue, impermanent-loss]
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

Çoğu protokol havuzunu doldurmak için dışarıdan gelen sermayeye kendi token'ından teşvik dağıtır; bunun adı [[liquidity-mining|likidite madenciliğidir]]. Bu sermaye kiralıktır: teşvik azaldığında ya da başka bir yerde daha iyi teşvik çıktığında gider ve havuz bir gecede sığlaşabilir.

Protokolün kendi likiditesi bu ilişkiyi tersine çevirir. Protokol likiditeyi kiralamaz, satın alır ve [[treasury|hazinesinde]] tutar.

Terim Türkçede genellikle İngilizcesiyle anılır; yerleşmiş bir karşılığı yok.

## Nasıl çalışır?

Hazine, elindeki varlıklarla kendi havuzuna likidite koyar ve karşılığında aldığı [[lp-token|LP token'ları]] hazinede tutar. Yaygın bir yöntem de kullanıcıların LP token'larını protokole verip karşılığında indirimli ve bir süre kilitli protokol token'ı almasıdır; böylece havuzun payı kalıcı olarak protokole geçer.

Sonuçta havuzun ücret geliri de artık protokole akar ([[protocol-revenue|protokol geliri]]) ve likiditenin kalıcılığı bir teşvik bütçesine bağlı olmaktan çıkar.

## Dikkat

Likiditenin sahibi olmak onu risksiz yapmaz. Hazine de havuzdaki herkes gibi [[impermanent-loss|geçici kayba]] maruz kalır ve hazinenin bir bölümü kendi token'ına bağlıdır: token'ın fiyatı düşerse hazinenin desteklediği likidite de küçülür.

Bedeli de bedava değildir. Likiditeyi satın almanın karşılığı çoğu zaman yeni token basmaktır; kira gideri ortadan kalkmaz, yerini mevcut sahiplerin payının seyrelmesine bırakır.
