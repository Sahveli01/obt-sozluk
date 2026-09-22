---
term: "Maximal Extractable Value (MEV)"
tr: ""
aliases: ["mev"]
category: defi
subcategory: "MEV ve işlem akışı"
level: orta
short: "Bir bloğun içeriğini sıralayabilen tarafın, yalnızca sırayı seçerek elde edebildiği değer."
related: [searcher, block-builder, proposer-builder-separation-pbs, private-mempool, front-running, arbitrage]
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

Bir blok yalnızca hangi işlemleri içerdiğiyle değil, onları hangi sırayla içerdiğiyle de anlam kazanır. Aynı işlemler farklı sırayla dizildiğinde kimin hangi fiyattan aldığı, hangi pozisyonun kapandığı, kimin geç kaldığı değişir. **MEV**, o sırayı belirleyebilen tarafın sadece sırayı seçerek elde edebildiği değerdir.

Bu değer havadan gelmez. Kaynağı, bloğa girmeyi bekleyen kullanıcı işlemleridir. Bir takas emri [[mempool|bekleme havuzuna]] düştüğü anda kullanıcının ne yapmak istediği herkese açıktır; bu bilgiyle sıralama yetkisi birleşince para eden bir fırsat doğar. Bedeli de çoğu zaman kullanıcının eline geçen daha kötü fiyat olur.

Kısaltma sektörde İngilizce kullanılır; yerleşik bir Türkçe karşılığı olmadığı için MEV olarak geçer.

## Nasıl çalışır?

Değer tek elde değil, bir zincirin üstünde toplanır: fırsatı bulup işlem paketi hazırlayan [[searcher|searcher]], paketleri ve normal işlemleri bir blok hâline getiren [[block-builder|builder]], bloğu zincire koyan proposer. Sıralamaya fiilen kim karar veriyorsa değerin büyük kısmı da oraya akar; bu rollerin neden ayrıldığı [[proposer-builder-separation-pbs|PBS]] başlığındadır.

Türlerini adlandırmak yeterli: iki piyasa arasındaki fiyat farkını kapatan [[arbitrage|arbitraj]], teminatı yetersiz kalan pozisyonları kapatan [[liquidation|tasfiye]], bir işlemin önüne geçen [[front-running]], onu iki işlemin arasına sıkıştıran [[sandwich-attack|sandviç saldırısı]] ve hemen arkasına giren [[back-running]].

## Dikkat

MEV'in tamamı kötü değildir. Arbitraj farklı piyasalardaki fiyatları birbirine yaklaştırır, tasfiye borç sistemlerinin ödeyemez hâle gelmesini engeller; ikisi de olmasa DeFi çalışmaz. Sorun bunların varlığı değil, iki yan etkisi.

Birincisi, değerin doğrudan kullanıcının cebinden alınan kısmı: kullanıcı kötü bir fiyat aldığında bunu bir ücret kalemi olarak görmez, hiç fark etmez.

İkincisi merkezîleşme baskısı. Sıralamadan kazanılan para büyüdükçe blok üretmek ölçek ve altyapı işine döner, az sayıda oyuncu işlem akışına hâkim olur ve ağın [[censorship-resistance|sansüre direnci]] bu birkaç tarafın kararına bağlanır.
