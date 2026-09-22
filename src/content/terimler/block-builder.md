---
term: "Block Builder"
tr: ""
aliases: ["builder"]
category: defi
subcategory: "MEV ve işlem akışı"
level: orta
short: "Gelen işlemlerden ve paketlerden en değerli blok içeriğini kurup bunu bloğu önerecek tarafa satan uzmanlaşmış taraf."
related: [proposer-builder-separation-pbs, searcher, maximal-extractable-value-mev, private-mempool, order-flow]
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

Builder, bloğun **içeriğini** kuran taraftır. Zincire koyan o değildir; yalnızca hangi işlemlerin hangi sırayla bir araya geleceğine karar verir ve ortaya çıkan bloğu, onu önerme sırası gelen tarafa bir bedel karşılığında teklif eder. Bu iş bölümünün adı [[proposer-builder-separation-pbs|PBS]]'dir.

Elinde iki kaynak vardır: herkese açık [[mempool|bekleme havuzundaki]] işlemler ve doğrudan kendisine gönderilen paketler ile [[private-mempool|özel kanallardan]] gelen işlemler. İkincisi onu değerli kılan şeydir, çünkü herkesin görmediği işlemleri görür.

Türkçede yerleşik bir karşılığı yok; kodda ve konuşmada builder diye geçer.

## Nasıl çalışır?

Blok alanı sınırlıdır, dolayısıyla soru "hangi işlemler sığar" değil, "sığanların hangi birleşimi en çok değer üretir"dir. Builder bunu sürekli yeniden hesaplar: [[searcher|searcher]] paketleri gelir, ücretler değişir, blok kapanana kadar daha iyi bir birleşim çıkabilir.

Sonuçta builder'lar bir açık artırmada yarışır. Her biri kurduğu bloğu ve bloğu önerecek tarafa ödeyeceği bedeli sunar; en yüksek ödeme kazanır. Bu bedel bloğun içindeki işlem ücretlerinden ve sıralamadan gelen değerden karşılanır.

Bu yüzden builder'ın en kritik girdisi teknik değil ticaridir: [[order-flow|işlem akışına]] erişim. Ne kadar çok ve ne kadar özel işlem görürse o kadar değerli blok kurabilir, o kadar yüksek teklif verebilir, o kadar çok blok kazanır.

## Dikkat

Bloğun içeriğine karar veren taraf, bir işlemi **dışarıda bırakma** gücüne de sahiptir. Blokların büyük kısmını birkaç builder kuruyorsa, belirli bir adresin ya da uygulamanın işlemlerinin zincire girip girmemesi bu birkaç tarafın kararına bağlanır. Zincirin kendisi merkeziyetsiz kalsa bile [[censorship-resistance|sansüre direnç]] burada aşınır.

İkinci nokta: builder kâr için çalışan bir işletmedir, protokolün bir parçası değildir. Bir bloğu kurmayı kârlı bulmazsa kurmaz.
