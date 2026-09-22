---
term: "Inter-Blockchain Communication (IBC)"
tr: ""
aliases: ["IBC"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: ileri
short: "Zincirlerin birbirinin hafif istemcisini çalıştırarak paket alışverişi yapmasını tanımlayan zincirler arası iletişim standardı."
related: [light-client, relayer, cross-chain-messaging, interoperability, lock-and-mint, tendermint-cometbft]
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

IBC, iki zincirin aralarında güvenilmesi gereken bir aracı olmadan paket gönderip alabilmesi için yazılmış bir protokol tasarımıdır. Bir ürün değil, bir belirtimdir: taşıma, kimlik doğrulama ve sıralama kurallarını uygulamadan ayırarak tanımlar. Cosmos ekosisteminde geliştirilmiş ve oradaki zincirler arasında yaygınlaşmıştır.

Temel fikri tek cümleyle şudur: her zincir, karşı zincirin [[light-client|hafif istemcisini]] kendi durumunda çalıştırır.

## Nasıl çalışır?

Tasarım katman katmandır.

**İstemci.** A zinciri, B'nin başlıklarını takip eden bir istemci nesnesi tutar ve B'nin konsensüs imzalarını doğrular. B de A için aynısını yapar.

**Bağlantı ve kanal.** El sıkışma adımlarıyla iki tarafın birbirinin istemcisini tanıdığı kalıcı bir hat kurulur. Kanal, o hattın üstünde hangi uygulamanın konuştuğunu belirler.

**Paket.** Gönderen zincir paketin taahhüdünü kendi durumuna yazar. Alıcı zincir, bu taahhüdün kaynakta gerçekten var olduğunu bir Merkle kanıtıyla ve kendi tuttuğu istemciyle doğrular, ardından bir alındı döner. Teslim edilemeyen paket zaman aşımına düşer ve kaynak tarafta iade edilir.

**Taşıyıcı.** [[relayer|Relayer]]'lar izinsizdir ve güvenilmez; paketi taşırlar, içeriğine hükmetmezler.

Varlık transferi bu yapının üstünde çalışan bir uygulamadır: varlık kaynakta emanete alınır, hedefte kupon basılır; dönüşte kupon yakılır ve emanet çözülür — [[lock-and-mint]] mantığının standartlaştırılmış hâli.

## Dikkat

IBC her zincir çiftinde aynı kolaylıkla çalışmaz. Hafif istemcinin makul maliyetle çalışabilmesi için kaynak zincirin hızlı ve kesin sonuçlu bir konsensüsü olması gerekir; olasılıksal kesinlikli zincirlerde hem maliyet hem bekleme ciddi biçimde artar ([[tendermint-cometbft|CometBFT]]).

Güven varsayımı kaybolmaz, yer değiştirir: burada karşı zincirin konsensüsüne güvenirsin. O zincirin doğrulayıcıları bozulursa protokol seni korumaz. IBC doğrulamanın doğru yapılmasını sağlar, karşı tarafın dürüstlüğünü değil.
