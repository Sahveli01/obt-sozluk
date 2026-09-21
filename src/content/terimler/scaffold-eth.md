---
term: "Scaffold-ETH"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Sözleşme ve arayüz tarafı önceden bağlanmış hâlde gelen, açık kaynak dApp başlangıç şablonu."
related: [hardhat, next-js, wagmi-kutuphane, boilerplate, dapp, hackathon]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Scaffold-ETH, bir [[dapp|dApp]] yazmaya sıfırdan başlamak yerine kullanılan açık kaynak bir başlangıç şablonudur. Tek bir depo içinde iki taraf birden gelir: sözleşmelerin durduğu ve derlendiği taraf ile kullanıcıya görünen arayüz. Aradaki bağlantı — hangi adresin hangi ağda olduğu, [[application-binary-interface-abi|ABI]]'nin arayüze nasıl ulaştığı, cüzdanın nasıl bağlandığı — kutudan çıktığı hâliyle kuruludur.

Yazıldığı tarih itibarıyla şablon; yerel zincir ve sözleşme araçları için [[hardhat|Hardhat]] ya da [[foundry|Foundry]] seçenekleriyle, arayüz tarafında ise [[next-js|Next.js]] ve [[wagmi-kutuphane|wagmi]] ile gelir.

## Nasıl çalışır?

Çalışma düzeni üç terminale yayılır: biri yerel zinciri çalıştırır, biri sözleşmeleri derleyip o zincire gönderir, üçüncüsü arayüzü ayağa kaldırır. Sözleşmeni değiştirip yeniden gönderdiğinde yeni adres ve ABI arayüz tarafına otomatik taşınır; elle kopyalanan adres sabitleriyle uğraşmazsın.

Şablonun en çok işe yarayan parçası, gönderdiğin her sözleşmeyi işlevleriyle birlikte listeleyen hazır bir hata ayıklama sayfasıdır: henüz arayüz yazmadan sözleşmenin işlevlerini form alanlarından çağırıp sonucu görebilirsin.

## Dikkat

Bu bir çerçeve değil şablondur: kopyaladığın andan sonra dosyalar senindir ve üst projeden gelen güncellemeleri otomatik almazsın.

Şablon hızlı başlamak için tasarlanmıştır; içinde geliştirme kolaylığı için konulmuş, üretime uygun olmayan ayarlar bulunabilir. [[hackathon|Hackathon]] sonrası projeyi sürdürecekseniz yapılandırmayı, ağ listesini ve örnek sözleşmeleri baştan gözden geçirin.
