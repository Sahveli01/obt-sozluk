---
term: "Indexer"
tr: "İndeksleyici"
aliases: ["indeksleyici", "indexleyici"]
category: araclar
subcategory: "Altyapı ve veri"
level: orta
short: "Zincirdeki ham veriyi okuyup sorgulanabilir bir veritabanına dönüştüren yazılım."
related: [subgraph, on-chain-analytics, rpc-node, database-index, graphql, block-explorer]
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

Zincir veriyi saklamakta iyidir, aramakta değil. Bir node'a "bu adres son bir ayda hangi NFT'leri aldı?" diye soramazsın; node ancak "şu blokta ne var" ya da "şu anda bu adreste ne yazıyor" gibi dar sorulara cevap verir.

Indexer, blokları baştan sona okuyan, içindeki işlemleri ve [[event-smart-contract|event'leri]] ayıklayan ve bunları kendi veritabanına düzenli satırlar hâlinde yazan yazılımdır. Ondan sonra uygulama sorusunu zincire değil bu veritabanına sorar ve cevabı milisaniyeler içinde alır. Türkçede "indeksleyici" denir.

## Benzetme

Bir dükkânın yazarkasa rulosu her satışı sırayla yazar. Kayıt eksiksizdir ama "bu ay en çok hangi ürün satıldı" sorusunun cevabı ruloda hazır durmaz; bulmak için metrelerce kâğıdı baştan sona okumak gerekir. Birinin rulodaki her satırı okuyup ürün ürün bir tabloya geçirmesi gerekir. Asıl kayıt yine rulodur; tablo, aynı bilginin sorulabilir hâlidir.

## Nasıl çalışır?

İş üç adıma ayrılır. **Okuma:** genelde bir [[rpc-node|RPC node]] üzerinden blok blok ilerler; geçmişi baştan taramak için çoğu zaman [[archive-node|arşiv]] erişimi gerekir. **Dönüştürme:** ham log'ları anlamlı kayıtlara çevirir — bir "Transfer" event'i, gönderen/alan/miktar alanları olan bir satıra döner. **Saklama:** sonucu veritabanına yazar, üzerine [[database-index|indeks]] kurar ve uygulamaya [[graphql|GraphQL]] ya da [[rest-api|REST]] arayüzü açar.

İki yer zordur. Birincisi geri alınan bloklardır: bir [[chain-reorganization-reorg|reorg]] olduğunda indexer yazdığı kayıtları geri sarıp yeniden işlemek zorundadır. İkincisi ilk taramadır; sözleşmenin ilk bloğundan bugüne kadar bütün geçmişi işlemek saatler, bazen günler sürer.

## Dikkat

Indexer'ın verdiği cevap türetilmiş veridir, zincirin kendisi değil. Birkaç blok geriden gelmesi normaldir, dönüştürme kodunda hata olabilir, servis düşebilir. Para hareketi gibi kritik kararlar zincirden doğrulanır; indexer arayüzü hızlandırmak içindir.

Yakın üç terimi karıştırma: indexer genel kavramdır, [[subgraph|subgraph]] bu işin belirli bir tanımlanma biçimidir, [[on-chain-analytics|zincir üstü analiz]] ise indexer'ın ürettiği veriyi yorumlayan katmandır.
