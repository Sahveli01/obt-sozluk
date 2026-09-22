---
term: "Monolithic Blockchain"
tr: "Monolitik blok zinciri"
aliases: []
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Yürütme, konsensüs, mutabakat ve veri erişilebilirliğinin tamamını tek bir zincirin üstlendiği klasik tasarım."
related: [modular-blockchain, layer-1, full-node, parallel-execution, scalability]
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

Monolitik blok zinciri, işlemleri çalıştırma, sıraya karar verme, sonucu kesinleştirme ve veriyi yayımlama işlerinin hepsini tek başına üstlenen zincirdir. Klasik tasarım budur; "monolitik" adı sonradan, [[modular-blockchain|modüler]] yaklaşım ayrı bir seçenek hâline gelince kondu.

Tek katman olmanın iki belirgin getirisi vardır. Bütün uygulamalar aynı yerde durduğu için birbirini tek işlemde çağırabilir ([[composability|birleştirilebilirlik]]) ve güvenlik parçalara bölünmez: sistemin tamamı aynı doğrulayıcı kümesine dayanır.

## Benzetme

Dökümünü, boyasını ve montajını tek çatı altında yapan bir fabrika gibi. Hiçbir parça için dışarıyı beklemezsin, ara yüzeylerde uyum sorunu çıkmaz. Ama üretimi artırmak istediğinde bütün hatları aynı anda büyütmen gerekir ve bina bir yerden sonra büyümez.

## Nasıl çalışır?

Kapasitenin sınırını [[full-node|tam node]]'un taşıyabileceği yük belirler. Her node her işlemi baştan çalıştırır, her bloğu indirir ve durumun tamamını saklar. Dolayısıyla kapasiteyi artırmanın doğrudan bedeli, node çalıştırmak için gereken disk, bant genişliği ve işlemci gücünün artmasıdır — [[scalability|ölçeklenmenin]] bilinen sıkışma noktası burasıdır.

Monolitik zincirler bu sınırı katmanları ayırmadan esnetmeye çalışır: işlemleri aynı anda çalıştırmak ([[parallel-execution|paralel yürütme]]), durumu daha verimli saklamak, istemci yazılımını sıkı optimize etmek.

## Dikkat

Monolitik "eski", modüler "yeni" değildir; ikisi farklı ödünleşmelerdir. Tek katman, geliştirici için en basit ortamdır: köprü yok, mesajlaşma yok, bekleme yok. Bedeli, bütün kullanıcıların aynı kapasiteyi paylaşması ve yoğunluğun herkese aynı anda yansımasıdır.

Ayrıca bu saflık pratikte bozulur: üstünde [[layer-2|üst katmanlar]] çalışmaya başladığı anda zincir, kendi rolünü bırakmasa bile başkalarının mutabakat ve veri katmanı hâline gelir.
