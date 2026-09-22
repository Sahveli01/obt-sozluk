---
term: "Soulbound Token"
tr: ""
aliases: []
category: tokenlar
subcategory: "Token türleri"
level: orta
short: "Basıldığı adresten çıkamayan, devredilemeyen token; satın alınamadığı için kimlik, katılım ve itibar taşımak üzere kullanılır."
related: [erc-721, non-fungible-token-nft, pseudonymity, sybil-resistance, poap, token-gating]
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

Soulbound token, transfer edilemeyen token'dır. Bir adrese basılır ve orada kalır: satılamaz, hediye edilemez, ödünç verilemez. Sözleşme transfer fonksiyonlarını ya hiç uygulamaz ya da çağrıldığında hata döndürür.

Amaç, satın alınamayacak bir şeyi temsil etmektir. El değiştirebilen bir [[non-fungible-token-nft|NFT]] "bunu ben yaptım" ya da "ben oradaydım" demez; yalnızca "bu şu an benim" der. Devredilemezlik bu boşluğu kapatmaya çalışır: diploma, katılım kaydı, üyelik, doğrulanmış bir nitelik.

Adı "ruha bağlı" demektir ama bu çeviri Türkçede kullanılmıyor, terim İngilizce geçiyor.

## Benzetme

Diploma gibi. Üstünde senin adın yazar ve onu anlamlı kılan şey tam olarak devredilemez olmasıdır. Satılabilen bir diploma hiçbir şey anlatmazdı — mezun olduğunu değil, yalnızca satın alabildiğini gösterirdi.

## Nasıl çalışır?

Teknik tarafı şaşırtıcı derecede basittir: uygulamaların çoğu [[erc-721]] arayüzünü alır ve transferi kapatır. Zorluk kodda değil sorulardadır. Kim basabilir? Yanlış basılmışsa kim geri alabilir? Kişi cüzdanının anahtarını kaybederse ne olur?

Basma yetkisi genelde tek bir tarafa aittir: okul, organizatör, protokol. Bu yüzden token'ın anlamı onu basan tarafa duyulan güvenden gelir; zincir yalnızca kaydı taşır ve kaydın silinmediğini garanti eder. [[poap|POAP]] gibi katılım kayıtları aynı ihtiyaçtan doğmuştur, ama hepsi devredilemez değildir. Aynı mantık [[sybil-resistance|Sybil direncinde]] de kullanılır: bir adresin belirli bir doğrulamadan geçtiğini, o kaydı satın alamayacak biçimde göstermek.

## Dikkat

Devredilemezlik bir güvenlik özelliği gibi görünür ama asıl sorunu gizliliktir. Cüzdanına kalıcı olarak yapışan bir etiketi, o cüzdanı gören herkes okur. Adresin zaten [[pseudonymity|takma adlıdır]]: üstünde adın yazmaz ama bütün geçmişi herkese açıktır. Üzerine okul, kurum, katılım ve nitelik kayıtları eklendikçe takma ad gerçek kimliğe yaklaşır — ve bu tek yönlü bir süreçtir, kayıt geri alınamaz.

İkincisi kurtarmadır. Devredilemeyen bir token yeni bir cüzdana taşınamaz; anahtarını kaybeden kişi o kaydı da kaybeder.
