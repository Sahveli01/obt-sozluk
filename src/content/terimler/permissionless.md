---
term: "Permissionless"
tr: ""
aliases: ["permissionless", "izin gerektirmeyen"]
category: temeller
subcategory: "Temel kavramlar"
level: orta
short: "Kimseden onay almadan katılabildiğin, işlem gönderebildiğin ve uygulama yazabildiğin sistem."
related: [public-blockchain, permissioned-blockchain, censorship-resistance, decentralization, open-source]
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

Permissionless bir ağda katılmak için başvuru yoktur. Hesap açtırmaz, kimlik göstermez, kimsenin onayını beklemezsin. Yazılımı indirir, bir [[node]] çalıştırır, işlem gönderir ya da kendi uygulamanı yayımlarsın.

Türkçede "izinsiz" demek yanıltıcı olur; kelime kural tanımamayı değil, kapıda izin veren birinin bulunmamasını anlatır.

## Nasıl çalışır?

Kapıda kimlik sorulmadığında sistemin bir kişiyi binlerce sahte kimlikten ayırt etmesi gerekir; buna [[sybil-resistance|Sybil direnci]] denir. Çözüm kimliği doğrulamak değil, katılımı pahalı kılmaktır: [[proof-of-work-pow|Proof of Work]] elektrik harcatır, [[proof-of-stake-pos|Proof of Stake]] sermaye kilitletir. İkisi de "kim olduğun" sorusunu "ne kadar maliyete katlandın" sorusuyla değiştirir.

Aynı açıklık uygulama katmanında da geçerlidir. Bir [[smart-contract|akıllı sözleşme]] yayımlamak için kimseden onay gerekmez ve yayımlanan sözleşmeyi başkaları izin almadan kendi işlerinde kullanabilir.

## Örnek

Bir token'ın klasik bir borsada işlem görmesi için başvuru yaparsın: ekip incelemeye alır, şartları konuşursunuz, kabul ya da ret gelir. Süreç haftalar sürebilir ve sonucu birileri verir.

Permissionless bir [[decentralized-exchange-dex|DEX]]'te böyle bir kapı yoktur. Token'ın için bir likidite havuzu açarsın ve o andan itibaren isteyen herkes işlem yapabilir; kimseden onay istemedin, kimse de seni listeden çıkaramaz.

Aynı açıklığın ters yüzü de var: başvuruyu kimse incelemediği için dolandırıcı bir token da aynı kolaylıkla listelenir. Ayıklama işi kapıda değil, kullanıcıda kalır.

## Dikkat

Permissionless ile ücretsiz aynı şey değildir. İzin gerekmez ama [[gas|gas]] gerekir; ağın kapısı açıktır, kullanımı bedava değildir.

Ayrıca protokol izin gerektirmezken ona eriştiğin arayüz gerektirebilir. Bir web sitesi seni engellese bile zincirle doğrudan konuşma yolun açık kalır — pratikte bu, teknik bilgisi olanlar için açık, olmayanlar için kapalı demektir.
