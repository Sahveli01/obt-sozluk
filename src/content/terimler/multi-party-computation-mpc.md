---
term: "Multi-Party Computation (MPC)"
tr: "Çok taraflı hesaplama"
aliases: ["çok taraflı hesaplama"]
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: orta
short: "Birden çok tarafın, kendi gizli girdilerini birbirine göstermeden ortak bir hesabın sonucunu birlikte üretmesi."
related: [threshold-signature-tss, mpc-wallet, shamirs-secret-sharing, cryptography, zero-knowledge-proof-zkp]
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

Çok taraflı hesaplama, birkaç tarafın ellerindeki gizli verileri birbirine hiç göstermeden ortak bir hesabın sonucunu üretmesini sağlayan yöntemler bütünüdür. Herkes yalnızca sonucu öğrenir; girdiler kimsenin eline geçmez.

Soru ilk kez 1980'lerde şöyle sorulmuştu: iki kişi, servetlerini birbirine söylemeden hangisinin daha zengin olduğunu öğrenebilir mi? Cevap "evet" çıktı ve bugünkü alan bu sorudan büyüdü.

## Benzetme

İki arkadaşın hangisinin maaşının yüksek olduğunu, ikisi de rakamını söylemeden öğrenmesi gibi. Sonunda cevabı ikisi de bilir: "seninki yüksek." Rakamlar ise hiçbir zaman ağızdan çıkmamıştır.

## Nasıl çalışır?

Ortak fikir, veriyi tek başına anlamsız parçalara bölmektir. Her taraf kendi payını tutar, hesap doğrudan bu paylar üzerinde yürütülür ve yalnızca en sonda sonuç birleştirilir. Bir payın tek başına görünümü, asıl veri hakkında hiçbir şey söylemez; [[shamirs-secret-sharing|Shamir gizli paylaşımı]] bu parçalamanın klasik yollarından biridir.

Kriptoda en görünür uygulaması imzadır. [[threshold-signature-tss|Eşik imza]], MPC'nin özel bir hâlidir: anahtar hiç birleşmeden imza üretilir. [[mpc-wallet|MPC cüzdanlar]] da bunun ürünüdür.

Kripto dışında da kullanılır: kurumların ham verilerini paylaşmadan ortak istatistik çıkarması, tekliflerin gizli kaldığı açık artırmalar gibi.

## Dikkat

"Kimse hiçbir şey öğrenmez" ifadesi yanlıştır. Herkes **sonucu** öğrenir ve sonucun kendisi bilgi sızdırabilir: yukarıdaki örnekte cevabı duyan taraf, karşısındakinin maaşı hakkında bir alt ya da üst sınır öğrenmiş olur. Hangi fonksiyonun hesaplanacağını seçmek, gizliliğin bir parçasıdır.

Güvenlik varsayımı protokolden protokole değişir. Bazıları katılımcıların kuralları uyguladığını varsayar; bazıları kasten yanlış davranan katılımcılara karşı da ayakta kalacak şekilde tasarlanır. Bir MPC kurulumuna bakarken sorulacak soru "güvenli mi" değil, "hangi varsayım altında ve kaç dürüst katılımcıyla güvenli" sorusudur.

Ucuz da değildir: taraflar arasında çok sayıda mesaj gider gelir. Bu, MPC'yi her işe uygun bir araç olmaktan çıkarır; gizliliğin gerçekten şart olduğu yerlerde kullanılır.
