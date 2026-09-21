---
term: "Censorship Resistance"
tr: "Sansüre direnç"
aliases: ["sansure direnc", "sansur direnci"]
category: temeller
subcategory: "Temel kavramlar"
level: orta
short: "Hiçbir tarafın bir kullanıcının işlemini tek başına engelleyememesi."
related: [permissionless, decentralization, validator, mempool, immutability]
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

Sansüre direnç, geçerli bir işlem gönderdiğinde onun er ya da geç zincire girecek olmasıdır. Kimse — ne bir şirket, ne bir doğrulayıcı, ne bir devlet — tek başına "bu kişinin işlemi geçmesin" diyememelidir.

Bu, [[immutability|değiştirilemezlikten]] farklı bir garantidir. Değiştirilemezlik geçmişi korur; sansüre direnç geleceğe girebilmeyi korur. Bir sistem geçmişi mükemmel koruyup yine de senin işlemini almayı reddedebilir.

## Nasıl çalışır?

Direnç, blok üretenlerin sayısına ve bağımsızlığına dayanır. İşlemin [[mempool|mempool'a]] düştüğünde ağdaki bütün [[validator|doğrulayıcılara]] yayılır. İçlerinden biri seni engellemek isterse yalnızca kendi bloğunu boş bırakabilir; bir sonraki bloğu üreten başkası işlemini alır. Seni tamamen dışarıda tutmak için doğrulayıcıların neredeyse tamamının aynı anda anlaşması gerekir.

Buradan çıkan sonuç şu: sansüre direnç kod yazarak eklenen bir özellik değil, [[decentralization|merkeziyetsizliğin]] bir sonucudur. Blok üretimi az sayıda elde toplandıkça direnç de erir.

## Örnek

Bir bağış kampanyasına para göndermek istiyorsun. Banka havalesinde bu isteği taşıyan zincirde birkaç durak var: kendi bankan, aradaki muhabir banka, alıcının bankası. Herhangi biri işlemi durdurursa para gitmez ve çoğu zaman sebebi de öğrenemezsin.

Sansüre dirençli bir ağda işlemi doğrudan ağa gönderirsin. Belirli bir doğrulayıcı onu almak istemezse yalnızca kendi bloğunu boş bırakmış olur; sıradaki başka biri işlemini alır ve para yerine ulaşır.

## Dikkat

Pratikte sansür çoğu zaman protokol katmanında değil kenarlarda yaşanır: arayüz sitesi adresini engeller, RPC sağlayıcısı isteğini reddeder, borsa çekimini durdurur. Zincirin kendisi açık kalırken ona ulaşan yolların kapanması, çoğu kullanıcı için pratikte aynı kapıya çıkar.
