---
term: "Wallet"
tr: "Cüzdan"
aliases: ["cuzdan", "kripto cuzdan"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: baslangic
short: "Kripto varlıkları değil, onları harcama yetkisi veren anahtarları saklayan ve işlemleri imzalayan araç."
related: [private-key, seed-phrase, wallet-address, self-custody, hot-wallet, custodial-wallet]
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

Cüzdanın adı yanıltıcıdır: içinde para durmaz. Varlıkların kaydı zincirin kendisinde, [[on-chain|zincir üstünde]] tutulur. Cüzdanın sakladığı şey, o kaydı değiştirme yetkisi veren [[private-key|özel anahtardır]]. Cüzdan bu anahtarla işlemleri imzalar, bakiyeni okunabilir biçimde gösterir ve karşı tarafa vereceğin [[wallet-address|adresi]] üretir.

Bu yüzden "cüzdanımı sildim" ile "anahtarımı kaybettim" aynı şey değildir. Uygulamayı silersen, [[seed-phrase|kurtarma ifaden]] duruyorsa aynı anahtarları başka bir cüzdanda geri getirebilirsin.

## Benzetme

Televizyon kumandası gibi düşün: kanallar kumandanın içinde durmaz, kumanda yalnızca ekranda ne olacağına karar verme yetkisini taşır. Kumandayı kaybetmek yayını yok etmez; ama kumandayı başkasının eline vermek kanalı ona çevirtir.

## Dikkat

Cüzdan seçerken asıl soru "hangisi güvenli" değil, "anahtar kimde ve hangi ortamda duruyor" sorusudur. Anahtarı bir şirket tutuyorsa [[custodial-wallet|anahtarı sende olmayan bir cüzdan]], sen tutuyorsan [[non-custodial-wallet|anahtarı sende olan bir cüzdan]] kullanıyorsundur. Anahtarın internete bağlı bir cihazda mı yoksa çevrimdışı mı durduğu ise [[hot-wallet|sıcak]] ve [[cold-wallet|soğuk]] ayrımıdır. Bu iki soru, cüzdanın arayüzünden çok daha belirleyicidir.
