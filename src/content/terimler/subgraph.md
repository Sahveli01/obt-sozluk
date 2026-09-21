---
term: "Subgraph"
tr: ""
aliases: ["sub graph"]
category: araclar
subcategory: "Altyapı ve veri"
level: orta
short: "Bir indeksleyiciye hangi sözleşme olaylarını izleyeceğini ve veriyi nasıl düzenleyeceğini anlatan tanım paketi."
related: [indexer, graphql, event-smart-contract, dapp, on-chain-analytics]
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

Subgraph, bir [[indexer|indeksleyiciye]] ne yapacağını anlatan tanımdır: hangi sözleşmeyi hangi bloktan itibaren izleyeceğini, hangi [[event-smart-contract|event'leri]] dinleyeceğini ve bunları hangi alanlara sahip kayıtlara çevireceğini yazarsın. Terim The Graph ağıyla yerleşmiştir ve orada tanımlanan biçimi anlatır.

Önemli ayrım: subgraph'in kendisi veri değildir, veriyi üretme talimatıdır. Veri, o talimatı çalıştıran indeksleyicide oluşur. Türkçede yerleşik bir karşılığı yok; "alt grafik" denmez, terim İngilizce kullanılır.

## Benzetme

Bir tarif kartı gibidir. Kartta yemek yoktur; hangi malzemenin alınacağı, hangi sırayla ne yapılacağı ve sonucun neye benzemesi gerektiği yazar. Aynı kartı farklı mutfaklara verirsin, hepsi aynı yemeği çıkarır. Kartı değiştirirsen yemeği baştan pişirmek gerekir.

## Nasıl çalışır?

Bir subgraph üç parçadan oluşur. **Manifest:** hangi ağ, hangi sözleşme adresi, hangi arayüz tanımı (ABI), hangi olaylar ve hangi başlangıç bloğu. **Şema:** üretilecek kayıtların alanları; [[graphql|GraphQL]] şeması olarak yazılır. **Eşleme kodu (mapping):** her olay için çalışan, olayı alıp şemadaki kaydı yazan fonksiyonlar; genelde [[typescript|TypeScript]] ile yazılır.

Yayına alındığında indeksleyici başlangıç bloğundan itibaren zinciri tarar, eşleşen her olayda senin fonksiyonunu çağırır ve ortaya şemadaki biçimde bir veri seti çıkar. Uygulama ([[dapp|dApp]]) bu veriyi tek bir GraphQL sorgusuyla okur — aksi hâlde aynı bilgi için yüzlerce ayrı zincir isteği atması gerekirdi.

Şemayı ya da eşleme kodunu değiştirdiğinde yeni sürümün geçmişi baştan taraması gerekir. Bu yüzden ilk şemayı dikkatli kurmak, sonradan düzeltmekten çok daha ucuzdur.

## Dikkat

Subgraph yalnızca kendisine gösterilen şeyi görebilir. Sözleşme bir olay yaymıyorsa o bilgi subgraph'e hiç giremez; yani sözleşme yazılırken hangi olayların yayılacağına karar vermek, yıllar sonra o veriyi çekip çekemeyeceğini de belirler.

Bir subgraph sorgusu zincirden doğrulama değildir. Aldığın cevap, indeksleyicinin o anki hâlidir; senkron gecikmesi olabilir ve eşleme kodundaki bir hata veriyi sessizce yanlış üretebilir.
