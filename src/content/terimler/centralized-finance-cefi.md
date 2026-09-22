---
term: "Centralized Finance (CeFi)"
tr: "Merkezî finans"
aliases: ["cefi", "merkezi finans"]
category: defi
subcategory: "Temeller"
level: orta
short: "Kripto varlıkların saklanmasını ve alım satımını merkezî bir şirketin kendi sistemleri üzerinden sunduğu hizmet modeli."
related: [decentralized-finance-defi, traditional-finance-tradfi, centralized-exchange-cex, custodial-wallet, custody, kyc]
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

CeFi, kripto varlıkların alım satımını, saklanmasını ve bazen borç verme gibi hizmetlerini merkezî bir şirketin sunmasıdır. Kullanıcı şirkette hesap açar, [[kyc|kimlik doğrulamasından]] geçer ve varlığını şirkete yatırır. Bundan sonra ekranda gördüğü bakiye zincirdeki bir kayıt değil, şirketin kendi veritabanındaki bir alacak kaydıdır.

En bilinen örneği [[centralized-exchange-cex|merkezî borsalardır]].

## Nasıl çalışır?

Akış üç adımdır.

**Yatırma.** Varlığı şirketin adresine gönderirsin; bu adım zincire yazılır ve kontrol artık şirketin [[custodial-wallet|saklamalı cüzdanındadır]].

**İç defter.** Alım satım, faiz ve transferler şirketin veritabanında işlenir, zincire hiç yazılmaz. İşlemler bu yüzden anında sonuçlanır ve ücreti düşüktür.

**Çekme.** Talebin şirketin onay ve limit kurallarından geçer; ancak onaylanırsa zincire yeni bir işlem yazılır.

Anahtarlar şirkette olduğu için [[custody|saklama]] sorumluluğu da baştan sona şirkettedir.

## Dikkat

CeFi ile [[decentralized-finance-defi|DeFi]] arasındaki soru "hangisi daha güvenli" değil, güvenin nereye konduğudur.

CeFi'de riskin adı saklama riskidir: varlık şirketin bilançosunda durur, şirket onu kendi işlerinde kullanabilir, çekimleri durdurabilir ve ödeme güçlüğüne düşerse sen bir alacaklı sırasına girersin. DeFi'de bu riskin yerini sözleşme kodundaki hata ve kendi anahtarını kaybetme riski alır. İkisi birbirinin daha iyisi değil, farklı varsayımlarıdır.

Bazı şirketler [[proof-of-reserves|rezerv kanıtı]] yayımlar. Bu, varlıkların o an var olduğunu gösterir; borçların tamamını da gösterip göstermediği yayımlama yöntemine bağlıdır.
