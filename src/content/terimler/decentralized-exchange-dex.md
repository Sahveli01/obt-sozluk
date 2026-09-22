---
term: "Decentralized Exchange (DEX)"
tr: "Merkeziyetsiz borsa"
aliases: ["dex"]
category: defi
subcategory: "Takas ve likidite"
level: baslangic
short: "Takasın bir şirketin kasası yerine zincirde çalışan bir sözleşme üzerinden yapıldığı borsa."
related: [centralized-exchange-cex, automated-market-maker-amm, liquidity-pool, swap, self-custody, dex-aggregator]
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

DEX, alım satımın bir şirketin iç defterinde değil, zincirde çalışan bir [[smart-contract|akıllı sözleşme]] üzerinden yapıldığı borsadır. Hesap açmazsın, kimlik vermezsin, paranı bir yere yatırmazsın: varlıkların takas anına kadar kendi cüzdanında durur.

Takas tek bir [[transaction|işlemin]] içinde olur. Ya iki varlık da el değiştirir ya da hiçbir şey olmaz; arada "para gitti, karşılığı gelmedi" diye bir durum yoktur. [[centralized-exchange-cex|Merkezî borsada]] ise varlıkların borsadadır ve borsa iflas ederse, hesabını dondurursa ya da çekimleri durdurursa yapabileceğin bir şey yoktur.

## Benzetme

Görevlisi olan bir benzin istasyonuyla self-servis pompanın farkı gibi. Self-serviste kimse arabanın anahtarını senden almaz, kime yakıt vereceğine karar vermez, mesai bitti diye kepenk indirmez. Sayaç ortadadır, fiyat tabelada yazar, pompayı sen sıkarsın. Ama bir terslik olursa şikâyet edeceğin bir müdür odası da yoktur.

## Dikkat

Aracının olmaması riskin olmaması demek değil, riskin yer değiştirmesi demektir. Yanlış adrese gönderdiğin token'ı geri getirecek bir destek hattı yoktur.

Üstelik çoğu DEX'te havuz açmak izne bağlı değildir: tanınmış bir token'la aynı adı ve simgeyi taşıyan sahte bir token da listelenebilir. Takas ettiğin şeyin sözleşme adresini doğrulamak sana kalır; bu, [[rug-pull|rug pull]] kurgularının en sık kullandığı kapıdır.
