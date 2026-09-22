---
term: "Points Program"
tr: "Puan programı"
aliases: []
category: tokenlar
subcategory: "Dağıtım ve lansman"
level: orta
short: "Kullanıcı davranışını token yerine puanla ödüllendiren, puanın karşılığını hiçbir yerde taahhüt etmeyen program."
related: [airdrop, retroactive-airdrop, airdrop-farming, token-generation-event-tge, off-chain]
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

Puan programı, bir protokolün kullanıcılarına token yerine puan vermesidir. Puanın ne olduğu genellikle tanımlanmaz: token değildir, transfer edilemez, bir değeri olduğu da söylenmez. Söylenen tek şey "kullanımını ölçüyoruz"dur.

İki işe yarar. Ekip dağıtımı ertelerken kullanımı bugünden toplar, ölçütü daha sonra belirler. Bir de açık bir token sözü vermemiş olur; böylece ileride kendisini bağlayacak bir taahhüdün altına girmez.

## Benzetme

Marketin kasada verdiği puan kartı gibi. Puanlar birikir, ekranda görünür, bir gün bir işe yarayacağı hissini verir. Ama kaç puanın neye denk geldiğini market yazar ve istediğinde değiştirir; elindeki kart bir alacak belgesi değildir.

## Nasıl çalışır?

Puan hesabı çoğu zaman [[off-chain|zincir dışında]] tutulur: ekibin sunucusu, kendi formülüyle, kendi veritabanına yazar. Formül yatırdığın miktarı, ne kadar süre tuttuğunu, davet ettiğin kişi sayısını birleştirir ve sonuç genellikle bir sıralama panosunda gösterilir.

Kurallar yolda değişir: çarpanlar güncellenir, yeni eylemler eklenir, bir eylemin puanı düşürülür. Puanların sonunda ne olacağı — bir [[airdrop|dağıtıma]] mı çevrileceği, yoksa hiç çevrilmeyeceği mi — çoğu programda baştan söylenmez.

## Dikkat

Puanın karşılığı hiçbir sözleşmeyle garanti altında değildir. Puan zincirdeki bir bakiye değil, bir ekibin tablosundaki satırdır: yeniden hesaplanabilir, sıfırlanabilir, kuralları tek taraflı değiştirilebilir. Kimin kaç puanı olduğu bile çoğu zaman dışarıdan doğrulanamaz.

Bu yüzden "puan topluyorum" cümlesi "bir şey kazandım" demek değildir. Ödediğin işlem ücreti ve kilitlediğin para gerçektir; puanın karşılığı ise ekibin ileride vereceği bir karara bağlıdır.

Programın kendisi de [[retroactive-airdrop|geriye dönük dağıtımın]] tersidir: orada ölçüt gizlidir, burada ölçüt açıktır ama karşılığı belirsizdir. İkisinde de belirsiz kalan taraf kullanıcıdır — nitekim puan programları da [[airdrop-farming|avcılığın]] hedefi olur.
