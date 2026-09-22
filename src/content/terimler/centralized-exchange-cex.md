---
term: "Centralized Exchange (CEX)"
tr: "Merkezi Borsa"
aliases: ["cex"]
category: piyasa
subcategory: "Borsa ve alım satım"
level: orta
short: "Kullanıcıların varlıklarını kendi sisteminde saklayan ve emir defterini kendi sunucularında tutan borsa türü."
related: [exchange, decentralized-exchange-dex, custody, self-custody, proof-of-reserves, order-book]
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

Merkezi borsa, bir şirket tarafından işletilen [[exchange|borsadır]]. Hesap açar, çoğu yerde kimlik doğrulamasından ([[kyc|KYC]]) geçer, varlığını borsaya yatırır ve alım satımı borsanın kendi sistemi üzerinden yaparsın. "Merkezi" sıfatı bütün bu işi tek bir kurumun yürütmesinden gelir.

## Nasıl çalışır?

Varlığını yatırdığında zincir üstünde borsanın adresine transfer etmiş olursun. O andan itibaren zincirdeki varlık borsanın cüzdanındadır; senin ekranda gördüğün bakiye ise borsanın kendi veritabanındaki bir kayıttır.

Alım satım da zincirde değil, borsanın sunucusundaki [[order-book|emir defterinde]] olur. Bu yüzden işlemler anında sonuçlanır ve her işlem için [[gas|gas]] ödemezsin; zincire yazılan tek şey para yatırma ve çekme hareketleridir.

Buradan çıkan temel gerçek şudur: anahtar sende değilse varlık da tam olarak senin değildir. Varlığı [[self-custody|kendin saklamak]] ile bir kuruma emanet etmek ([[custody|saklama]]) iki ayrı durumdur; merkezi borsada ikincisi geçerlidir.

## Dikkat

Bu yapı bir güven ilişkisidir. Kurum ödeme güçlüğüne düşerse, hesabı dondurursa ya da sistemi ele geçirilirse kullanıcının elinde kalan şey bir kayıt ve bir alacak talebidir. Bazı borsalar [[proof-of-reserves|rezerv kanıtı]] yayımlar; bu, varlıkların bir bölümünü gösterir ama borçların tamamını tek başına ispatlamaz.

[[decentralized-exchange-dex|Merkeziyetsiz borsadan]] farkı burada netleşir: orada takas, varlık kendi cüzdanından çıkmadan bir akıllı sözleşme üzerinden yapılır; merkezi borsada ise varlık önce kuruma teslim edilir.
