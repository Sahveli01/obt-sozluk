---
term: "Bitcoin"
tr: ""
aliases: ["BTC"]
category: aglar
subcategory: ""
level: baslangic
short: "Aracı bir kuruma ihtiyaç duymadan dijital para transferi için tasarlanmış ilk blockchain ağı."
related: [satoshi-nakamoto, proof-of-work-pow, utxo, halving, ethereum]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Bitcoin, aracı bir kuruma ihtiyaç duymadan dijital para transferi yapılabilsin diye tasarlanmış ilk blockchain ağıdır. [[satoshi-nakamoto|Satoshi Nakamoto]] takma adıyla yayımlanan tasarımın çözmeye çalıştığı sorun tekti: kimsenin sözüne güvenmek zorunda kalmadan, aynı parayı iki kez harcamayı imkânsız kılmak.

Defter bakiye tutmaz; [[utxo|UTXO]] modelini kullanır. Harcanmamış çıktılar tek tek durur, bir ödeme bunları tüketip yenilerini üretir. Bir sonraki bloğu kimin ekleyeceğine [[proof-of-work-pow|proof of work]] karar verir. Toplam arz protokol kuralıyla 21 milyonla sınırlıdır ve üretim hızı [[halving]] ile düzenli aralıklarla yarıya iner.

## Dikkat

Bitcoin'in betik dili bilinçli olarak sınırlıdır; üzerinde genel amaçlı program çalıştırılmaz. Bu bir eksiklik değil, saldırı yüzeyini ve doğrulama maliyetini küçük tutma tercihidir.

Tercihin bedeli de var. Protokolü değiştirmek zordur ve bu yavaşlık kasıtlıdır; proof of work donanım ve enerji gerektirir; karmaşık uygulamalar zincirin kendisinde değil ayrı katmanlarda ([[lightning-network|Lightning]] gibi) kurulur. Yazıldığı tarih itibarıyla ağın yönü de bu sadeliği korumak üzerine kuruludur.
