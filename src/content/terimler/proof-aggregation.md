---
term: "Proof Aggregation"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: ileri
short: "Birden çok kanıtı tek bir kanıta indirip zincirde bir kez doğrulatma tekniği; doğrulama maliyetini katılanlar arasında paylaştırır."
related: [validity-proof, recursive-proof, zk-rollup, verifier, signature-aggregation]
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

Bir [[validity-proof|geçerlilik kanıtını]] zincirde doğrulatmanın neredeyse sabit bir maliyeti vardır: kanıt ister bin işlemi kapsasın ister on bin, doğrulayıcı sözleşmeyi çalıştırmak aşağı yukarı aynı ücreti ister. Az işlem yapan bir zincir için bu maliyet ağırdır.

Kanıt toplama, birçok ayrı kanıtı tek bir kanıtta birleştirir. Zincirde yalnızca o tek kanıt doğrulanır; sabit maliyet, içine giren bütün yığınlar arasında bölünür. Terim Türkçeye çevrilmeden kullanılır.

## Nasıl çalışır?

Temelinde [[recursive-proof|özyinelemeli kanıt]] durur: kanıt doğrulama işleminin kendisi de bir hesaplamadır, dolayısıyla o hesaplama da kanıtlanabilir. Toplayıcı taraf eldeki kanıtları alır ve "bu kanıtların hepsini doğruladım, hepsi geçerliydi" diyen üst bir kanıt üretir.

Bu üst kanıt, kendi içindekiler gibi kısa ve ucuz doğrulanır. Ağır iş tamamen kanıt üreten tarafa yüklenmiştir; zincir her zamanki gibi tek bir doğrulama yapar.

Aynı teknik tek bir zincirin ardışık yığınlarını birleştirmek için de, birden çok zincirin kanıtlarını aynı doğrulamada toplamak için de kullanılır.

## Dikkat

Takas gecikmededir. Toplamak için bir süre kanıt biriktirmek gerekir; biriktirilen süre boyunca hiçbir yığın zincirde kesinleşmez. Ucuzluk, beklemekle satın alınır.

Güven tarafında ise değişen bir şey yoktur ve bu önemlidir: toplayıcı geçersiz bir kanıtı geçerli gösteremez, çünkü üst kanıt ancak içindekiler gerçekten geçerliyse üretilebilir. Yapabileceği şey çalışmamaktır — kanıtları toplamayı bırakır ya da bazılarını dışarıda tutarsa, o yığınların kesinleşmesi gecikir. Bu yüzden toplayıcının tek başına olup olmadığı, tasarımda sorulması gereken sorulardan biridir.
