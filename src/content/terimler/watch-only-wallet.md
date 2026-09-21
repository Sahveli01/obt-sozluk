---
term: "Watch-only Wallet"
tr: ""
aliases: ["watch only cuzdan", "izleme cuzdani"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: orta
short: "Yalnızca genel bilgilerle kurulan, bakiyeyi ve işlemleri gösteren ama imza atamayan cüzdan."
related: [cold-wallet, hd-wallet-bip-32, wallet-address, public-key, block-explorer]
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

Watch-only cüzdan, bir cüzdanın yalnızca genel tarafını içeri alır: bakiyeyi görürsün, gelen gideni takip edersin, ama [[private-key|özel anahtar]] içinde olmadığı için hiçbir işlemi imzalayamazsın. Türkçede sabitlenmiş bir karşılığı yok; arayüzlerde çoğunlukla "yalnızca izleme" diye geçer.

## Benzetme

Güvenlik kamerası ekranı gibi: her hareketi görürsün, ama ekrandan kapıyı açamazsın.

## Nasıl çalışır?

İki yolu vardır. Tek tek [[wallet-address|adres]] eklemek ya da bir [[hd-wallet-bip-32|HD cüzdanın]] genel anahtarını vermek. İkincisinde cüzdan, aynı ağaçtan türeyen bütün adresleri kendisi hesaplar; gelecekte üretilecek adresleri de otomatik olarak takip eder ([[public-key|genel anahtar]]).

İki yerde işe yarar. Birincisi, [[cold-wallet|soğuk saklanan]] bir cüzdanın bakiyesini cihazı hiç çıkarmadan izlemek. İkincisi, bir ekipte ya da muhasebe akışında kimseye imza yetkisi vermeden hesap takibi yapmak. Bazı kurulumlar bir adım daha ileri gider: işlemi imzasız olarak hazırlayıp dışa aktarır, imza çevrimdışı cihazda atılır, imzalı sonuç geri alınıp yayınlanır.

## Dikkat

Gizlilik tarafına dikkat etmek gerekir: genel anahtarı bir hizmete verdiğinde o hizmet, aynı ağaçtan türeyen bütün adreslerini ve geçmişlerini tek bakışta görür. Tek bir adresi bir [[block-explorer|blok gezgininde]] izlemek bundan daha dar bir paylaşımdır.

Watch-only cüzdan bir yedek değildir. İmza atamadığı için varlığı kurtaramaz; kurtarma yine [[seed-phrase|kurtarma ifadesine]] bağlıdır.
