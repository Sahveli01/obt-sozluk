---
term: "Searcher"
tr: ""
aliases: []
category: defi
subcategory: "MEV ve işlem akışı"
level: orta
short: "Sıralamaya bağlı fırsatları arayıp bunları bloğa girmeye hazır işlem paketleri hâline getiren taraf."
related: [maximal-extractable-value-mev, block-builder, private-mempool, arbitrage, liquidation]
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

Searcher, [[maximal-extractable-value-mev|MEV]] fırsatlarını arayan taraftır. Neredeyse hiçbir zaman bir insan değildir; zinciri ve bekleyen işlemleri aralıksız izleyen bir programdır.

İşi üç adımdır: ortada sıralamaya bağlı bir fırsat olup olmadığını görmek, bunu gerçekleştirecek işlemleri hazırlamak, ve bu paketin bloğa istediği sırada girmesi için ödeme teklif etmek. Kazancının bir kısmını bloğu kuran tarafa bırakır; bırakmazsa paketi bloğa girmez.

Türkçede yerleşmiş bir karşılığı olmadığı için İngilizce kullanılır.

## Nasıl çalışır?

Searcher hazırladığı işlemleri tek tek değil, bir **paket** olarak gönderir ve paketin ya tamamen ya hiç çalışmamasını ister. Sebebi basit: yarım kalmış bir sıralama ona kâr değil, zarar yazar.

Paket herkese açık havuza değil, doğrudan blok kuran bir tarafa iletilir ([[private-mempool|özel kanal]]). Aynı fırsatı birden çok searcher gördüğü için aralarında bir açık artırma oluşur; ödemeyi yükselten kazanır ve kârın büyük kısmı [[block-builder|builder]] tarafına akar. Bu yüzden searcher'ın işi "fırsatı bulmak" kadar "ne kadarını bırakacağına karar vermek"tir.

Yaptığı işlerin bir bölümü sistemin ihtiyaç duyduğu işlerdir: teminatı düşen pozisyonların [[liquidation|tasfiyesi]] ve havuzlar arası [[arbitrage|arbitraj]] birileri yapmazsa protokoller bozulur.

## Dikkat

Searcher'ın varlığı tek başına saldırı değildir. Kullanıcı açısından önemli olan şudur: işlemin herkese açık havuzda göründüğü sürece, onu görenlerin arasında ondan sıralama kazancı çıkarmak isteyenler de olacaktır. Korunma yolu searcher'ı yok saymak değil, işlemi ilan etmeden iletmek ya da niyeti doğrudan bir tarafa verip sonucu sınırlamaktır ([[intent|intent]]).
