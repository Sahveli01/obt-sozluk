---
term: "Stop-loss"
tr: "Zarar Durdur"
aliases: []
category: piyasa
subcategory: "Borsa ve alım satım"
level: orta
short: "Fiyat belirlenen seviyeye ulaştığında otomatik olarak bir satış emri tetikleyen koşullu emir."
related: [market-order, limit-order, slippage, volatility, liquidation]
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

Stop-loss, fiyat önceden belirlenmiş bir seviyeye geldiğinde devreye giren koşullu bir emirdir. Türkçede "zarar durdur" karşılığı yerleşiktir; adı, bir pozisyondaki zararın belirli bir noktadan sonra büyümesini engelleme amacından gelir.

Tetiklenene kadar defterde görünen bir emir değildir; borsanın sisteminde bekleyen bir şarttan ibarettir.

## Nasıl çalışır?

Belirlenen seviye görüldüğü anda sistem kullanıcı adına bir emir gönderir. Gönderilen emir çoğunlukla bir [[market-order|piyasa emridir]]: hızlı gerçekleşir, ama fiyatı garanti etmez. Bazı borsalar tetiklendiğinde bir [[limit-order|limit emri]] gönderen biçimini de sunar; bu kez fiyat sınırlıdır ama emrin hiç gerçekleşmemesi mümkündür.

## Dikkat

Burada iki ayrı şeyi karıştırmamak gerekir: emrin tetiklenmesi ile gerçekleştiği fiyat aynı şey değildir. Hızlı hareket eden bir piyasada fiyat, tetiklenme ile gerçekleşme arasında ilerlemiş olabilir; emir belirlenen seviyeden belirgin biçimde uzakta gerçekleşebilir. Bu farka [[slippage|kayma]] denir ve stop-loss onu ortadan kaldırmaz. Yani stop-loss bir garanti değildir.

İkincisi, şartın sağlanması için seviyenin bir kez görülmesi yeterlidir. [[volatility|Volatilitenin]] yüksek olduğu anlarda fiyat kısa süreliğine sapar, emri tetikler ve sonra eski yerine döner; bu durumda pozisyon, fiyat geri gelmeden kapanmış olur. Koruma aracı olmasının yanında bu da bir sonuçtur.

Üçüncüsü, stop-loss ile [[liquidation|likidasyon]] aynı şey değildir: ilki kullanıcının koyduğu bir şart, ikincisi teminat yetmediğinde borsanın kendiliğinden uyguladığı kapatmadır. Ayrıca emrin çalışması borsanın sisteminin o anda ayakta olmasına bağlıdır.
