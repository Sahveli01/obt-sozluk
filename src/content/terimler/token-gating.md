---
term: "Token Gating"
tr: ""
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: baslangic
short: "Bir içeriğe, gruba ya da özelliğe erişimi belirli bir token'a sahip olma şartına bağlamak."
related: [non-fungible-token-nft, sign-in-with-ethereum-siwe, soulbound-token, allowlist, wallet]
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

Token gating, bir kapının anahtarını token sahipliğine bağlamaktır: bir sohbet sunucusundaki rol, bir etkinliğin girişi ya da bir sitedeki özel bölüm, yalnızca belirli bir token'ı taşıyanlara açılır.

İşleyişi kısadır. Kullanıcı [[wallet|cüzdanını]] bağlar, bir imzayla adresin kendisine ait olduğunu gösterir — bunun yerleşik yolu [[sign-in-with-ethereum-siwe|SIWE]]'dir — sistem de o adresin bakiyesine bakıp kapıyı açar ya da açmaz. Şartı sağlayan adresler önceden bir [[allowlist|listeye]] de çıkarılabilir.

Türkçede yerleşmiş bir karşılığı yok; olduğu gibi kullanılır.

## Benzetme

Festival bilekliği gibi. Girişte kimse kimliğini sormaz, adını aramaz; bileğine bakılır. Bileklik duruyorsa içeri girersin, sahneler arasında istediğin kadar gezersin. Ama bileklik senin kolundan çıkıp başkasının koluna geçebilir — kapı bilekliği tanır, seni değil.

## Dikkat

Sahiplik kontrolü **anlık** bir kontroldür. Token ödünç alınabilir, kiralanabilir, kontrolden hemen sonra satılabilir. Kontrolün bir kez mi yoksa sürekli mi yapıldığı bu yüzden tasarımın en kritik kararıdır.

İkincisi, bir cüzdanın sahibi olmak o kişinin kim olduğunu göstermez. Aynı kişi yüz cüzdan açıp yüz ayrı "üye" gibi görünebilir. Kişi başına tek erişim gerekiyorsa token sahipliği yetmez; devredilemeyen [[soulbound-token|soulbound token]] fikri tam da bu boşluk için doğdu.
