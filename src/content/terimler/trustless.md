---
term: "Trustless"
tr: ""
aliases: ["trustless", "guven gerektirmeyen"]
category: temeller
subcategory: "Temel kavramlar"
level: orta
short: "Karşı tarafa ya da bir aracıya güvenmeyi gerektirmeyen; doğruluğu kurallarla ve kriptografiyle garanti edilen sistem."
related: [blockchain, smart-contract, consensus-mechanism, cryptography, decentralization]
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

Trustless, "güvenilmez" değil "güven gerektirmeyen" demektir. Bir işlemi yapmak için karşı tarafın dürüstlüğüne, bir bankanın sağlamlığına ya da bir aracının iyi niyetine bel bağlaman gerekmiyorsa o sistem trustless'tır.

Terim Türkçeye yerleşmiş tek kelimelik bir karşılıkla çevrilmiyor; sektörde İngilizce hâliyle kullanılıyor.

## Nasıl çalışır?

Güvenin yerini üç şey alır.

**Kriptografi.** Bir işlemi yalnızca özel anahtarın sahibi imzalayabilir, imzayı ise herkes doğrulayabilir. Kimsenin kimseye "bu gerçekten benim" demesi gerekmez.

**Ekonomik teşvik.** [[consensus-mechanism|Konsensüs mekanizması]], kuralları çiğnemeyi kâr getiren değil zarar ettiren bir iş hâline getirir. Dürüst davranmak en kazançlı seçenek olduğu sürece güven yerine hesap çalışır.

**Doğrulanabilirlik.** Sonucu kendin kontrol edebilirsin. Bir [[full-node|tam node]] çalıştırıp zincirin bütün kurallarını baştan denetlemek, kimseye sormadan emin olmanın yoludur.

## Örnek

İnternetten tanımadığın birinden bir şey alacaksın. Klasik yol parayı önce göndermek ve karşı tarafın gerçekten yollamasını ummaktır; ya da ikinize birden aracılık eden bir platforma komisyon ödemektir. İki durumda da güven birine yatırılır.

Trustless yol, parayı kuralları önceden yazılmış bir [[smart-contract|akıllı sözleşmeye]] kilitlemektir. Sözleşme, teslimat koşulu sağlandığında parayı satıcıya bırakır; sağlanmazsa belirlenen sürenin sonunda sana geri verir. Satıcıyı tanımana gerek kalmaz, çünkü parayı elinde tutan taraf artık o değildir.

## Dikkat

Hiçbir gerçek sistem tamamen trustless değildir. Akıllı sözleşme kodu doğru yazılmış olabilir ama onu okumadıysan yazarına güveniyorsundur. Fiyat bilgisi bir [[oracle|oracle]] üzerinden geliyorsa o oracle'a güveniyorsundur. Doğru soru "güven var mı" değil, "güveni nereye, ne kadar koydum" sorusudur.
