---
term: "Shamir's Secret Sharing"
tr: ""
aliases: []
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: orta
short: "Bir sırrı n parçaya bölüp herhangi k parçanın sırrı geri kurmasına izin veren; k'dan az parçanın hiçbir şey söylemediği yöntem."
related: [threshold-signature-tss, multi-party-computation-mpc, seed-phrase, social-recovery, key-management]
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

Shamir gizli paylaşımı, bir sırrı — bir anahtarı, bir parolayı — n parçaya bölmenin bir yoludur. Kural şudur: herhangi k parça bir araya gelirse sır geri kurulur, k'dan az parça ise **sır hakkında hiçbir şey söylemez**.

İkinci kısım yöntemin asıl fikridir. Bir anahtarı ortadan ikiye kesip yarısını birine, yarısını diğerine vermek de bir bölmedir; ama orada elindeki yarım parça sırrın yarısını zaten ele verir. Shamir'de eşiğin altındaki paylar, rastgele sayılardan ayırt edilemez.

## Nasıl çalışır?

Fikir lise geometrisinden tanıdık: **iki noktadan yalnızca bir doğru geçer.** Sırrı bu doğrunun belirli bir yerine yerleştirirsin, sonra doğrunun üstünden istediğin kadar nokta seçip bunları pay olarak dağıtırsın. İki nokta bilen doğruyu çizer ve sırrı okur. Tek nokta bilen hiçbir şey bilmez: o noktadan sonsuz sayıda doğru geçer ve hepsi eşit derecede mümkündür.

Eşiği üçe çıkarmak istersen doğru yerine kıvrımı daha fazla bir eğri kullanırsın — matematikte buna polinom denir. Eşiği belirleyen şey, eğrinin kaç noktayla belirlendiğidir.

Pay sayısını (n) istediğin kadar artırabilirsin; eşik (k) sabit kaldığı sürece güvenlik değişmez, yalnızca dağıtacağın kopya çoğalır.

## Dikkat

Bu yöntem sırrı kurtarır, imza üretmez. Paylar bir araya geldiğinde sır tek bir yerde yeniden oluşur ve o an sistemin en kırılgan anıdır: anahtar o bilgisayarın belleğine düşer. Anahtarı hiç birleştirmeden imza üretmek isteyen kurulumlar [[threshold-signature-tss|eşik imzaya]] bakar; [[social-recovery|sosyal kurtarma]] ise bambaşka bir yerde durur, orada anahtar bölünmez, değiştirilir.

İkincisi, yöntem payların doğruluğunu kontrol etmez. Yanlış bir pay getiren kişi sırrın geri kurulmasını engeller ve kimse hangi payın bozuk olduğunu anlayamaz. Bunu çözen sürümler ayrıca tasarlanmıştır.

Üçüncüsü — pratikte en sık yapılan hata — [[seed-phrase|seed phrase]] yedeklemesini elle taklit etmeye çalışmak. Kelimeleri üçe bölüp üç ayrı yere koymak Shamir değildir ve güvenliği azaltır: eline bir parça geçen kişi, kalan kelimelerin aranacağı alanı daraltmış olur. Bu işi doğru yapan denetlenmiş araçlar hazır hâlde var ([[key-management|anahtar yönetimi]]).
