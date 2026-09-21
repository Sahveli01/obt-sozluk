---
term: "Halving"
tr: "Yarılanma"
aliases: ["halvening", "yarilanma"]
category: temeller
subcategory: "Para birimleri ve ücretler"
level: orta
short: "Blok ödülünün protokolde yazılı aralıklarla yarıya indirilmesi; yeni arzın planlı biçimde azalması."
related: [block-reward, bitcoin, emission-schedule, max-supply, mining, token-inflation]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Halving, bir zincirin protokolüne baştan yazılmış bir kuraldır: belirli sayıda blok üretildikten sonra [[block-reward|blok ödülü]] yarıya iner. [[bitcoin|Bitcoin]]'de bu her 210.000 blokta bir olur ve hedeflenen blok süresi göz önüne alındığında aralık kabaca dört yıla denk gelir. Kararı kimse vermez; tarih geldiğinde yazılım ödülü kendiliğinden yarıya böler.

## Nasıl çalışır?

Blok ödülü, yeni birimlerin dolaşıma girmesinin tek yoludur. Ödül yarılandıkça blok başına yaratılan yeni arz da yarılanır. Bu, [[emission-schedule|arz takvimini]] baştan bilinen ve giderek düzleşen bir eğriye çevirir: kimse "bu yıl ne kadar basılacak" diye merak etmez, koda bakar.

Ödül sonsuza kadar bölünemez, çünkü birimin bölünebilirliği sonludur. Bu yüzden toplam arz bir tavana yaklaşır ve orada durur ([[max-supply|azami arz]]).

Madencinin geliri iki kalemden oluşur: blok ödülü ve [[transaction-fee|işlem ücretleri]]. Halving birinci kalemi doğrudan yarıya indirir, ikincisine dokunmaz. Güvenliği finanse eden bütçenin uzun vadede ücretlere kayması, bu tasarımın en çok tartışılan yanıdır.

## Dikkat

Halving her zincirde yoktur. Bitcoin'in tasarımına özgü bir kuraldır; onu örnek alan bazı zincirler benzer bir takvim kullanır, ama [[proof-of-stake-pos|hisse ispatı]] kullanan ağların çoğunda arz bambaşka bir formülle belirlenir. "Halving ne zaman" sorusunun cevabı da zincire göre değişir.

Halving üzerine yazılanların büyük kısmı fiyatla ilgilidir. Bu sözlük fiyat yorumu yapmaz ve yapması da doğru olmaz: halving arz tarafındaki bir kural değişikliğidir, talep hakkında hiçbir şey söylemez. Yazıldığı tarih itibarıyla geçmiş halving'lerden çıkarılan genellemeler, elde birkaç örnek bulunduğu için istatistiksel bir kanıt oluşturmaz.
