---
term: "NEAR"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "Kullanıcı ve geliştirici deneyimini merkeze alan, yükü parçalara bölerek ölçeklenen blockchain ağı."
related: [sharding, webassembly-wasm, account-abstraction, rust, proof-of-stake-pos]
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

NEAR, blockchain kullanmanın ve blockchain'e yazılım yazmanın gereğinden zor olduğu tespitiyle yola çıktı. Bu yüzden tasarım kararlarının çoğu teknik bir üstünlükten değil, deneyimi düzleştirme kaygısından türer: rastgele karakterlerden oluşan adresler yerine okunabilir hesap adları, uygulamaya sınırlı yetki verebilen anahtarlar, tanıdık dillerle sözleşme yazabilme.

## Nasıl çalışır?

Ölçeklenme [[sharding|sharding]] ile kurulur: durum ve işlem yükü parçalara bölünür, her parçanın bloklarını farklı doğrulayıcı grupları üretir ve talep arttıkça parça eklenir. Blok üretim hakkı [[proof-of-stake-pos|proof of stake]] ile dağıtılır.

Sözleşmeler [[webassembly-wasm|WebAssembly]] hedefine derlenir; yaygın yol [[rust|Rust]] kullanmaktır. Hesap yapısı, bir hesaba birden çok anahtar bağlamaya ve her anahtarın neye yetkili olduğunu sınırlamaya izin verir — bir oyunun yalnızca kendi sözleşmesini çağırabilen bir anahtar alması gibi. Bu, [[account-abstraction|hesap soyutlamasının]] protokole gömülmüş bir biçimidir.

## Dikkat

Sharding bedavaya gelmez. Farklı parçalardaki sözleşmeler birbirini doğrudan çağırıp sonucu aynı anda alamaz; çağrı bir mesaj olarak gider ve cevabı sonraki bloklarda döner. Geliştirici, adımlardan biri başarısız olduğunda öncekileri geri almayı kendisi tasarlamak zorundadır.

Ağ [[ethereum-virtual-machine-evm|EVM]] uyumlu da değildir; mevcut Ethereum sözleşmeleri olduğu gibi taşınmaz. Yazıldığı tarih itibarıyla parçaların sayısı ve bölünme biçimi de değişmeye devam eden bir tasarım alanıdır.
