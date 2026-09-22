---
term: "Token Standard"
tr: "Token Standardı"
aliases: []
category: tokenlar
subcategory: "Standartlar"
level: baslangic
short: "Bir token sözleşmesinin hangi fonksiyonları hangi adlarla sunacağını belirleyen, cüzdanların ve borsaların ortak dili."
related: [erc-20, erc-721, erc-ethereum-request-for-comments, interface, fungible-token, spl-token]
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

Token standardı, bir token [[smart-contract|sözleşmesinin]] dışarıya hangi fonksiyonları hangi adlarla ve hangi parametrelerle açacağını yazan kural setidir. Sözleşmenin içini nasıl yazdığın sana kalmıştır; standart yalnızca dışarıdan görünen yüzü sabitler.

Buna neden gerek var? Cüzdanlar, borsalar ve blok gezginleri her gün yeni token'larla karşılaşır. Her biri için ayrı kod yazmak gerekseydi yeni çıkan bir token hiçbir arayüzde görünmezdi. Standart sayesinde bir aracın sözleşme adresini öğrenmesi yeter; bakiyeyi hangi fonksiyonla soracağını zaten bilir.

Ethereum tarafında en bilineni [[erc-20|ERC-20]]'dir, ama her zincirin kendi standartları vardır.

## Benzetme

Arabaların pedal düzeni gibi. Marka, motor sesi, direksiyon hissi arabadan arabaya değişir; ama gaz en sağdadır, fren onun solunda. Bu yüzden ilk kez bindiğin kiralık arabayı kılavuz okumadan sürersin. Standart da cüzdana aynı rahatlığı verir: sözleşmeyi ilk kez görüyordur, düğmelerin yerini biliyordur.

## Dikkat

Standarda uymak bir [[interface|arayüz]] sözüdür, davranış garantisi değil. Sözleşme `transfer` adında bir fonksiyon sunar ama içine transfer ücreti, kara liste ya da bütün transferleri durduran bir düğme koyabilir. Cüzdanın gördüğü yüz yine aynıdır.

Zincir de standardı zorlamaz. Uymayan bir sözleşme pekâlâ dağıtılabilir; kimse onu engellemez, sadece araçların çoğunda görünmez kalır.
