---
term: "Balance"
tr: "Bakiye"
aliases: ["bakiye"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: baslangic
short: "Bir adresin zincirdeki kayıtlara göre o an sahip olduğu miktar; cüzdan uygulamasında değil, zincirde durur."
related: [wallet-address, account-model, utxo, native-token, token-blockchain, transaction-fee]
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

Bakiye, bir [[wallet-address|adresin]] zincirdeki kayıtlara göre o an sahip olduğu miktardır. Cüzdan uygulaması bu sayıyı üretmez, yalnızca okuyup gösterir: uygulamayı silsen de bakiye yerinde durur.

Sayının nerede durduğu zincirin modeline bağlıdır. [[account-model|Hesap modelinde]] adresin kendi kaydındaki bir alandır. [[utxo|UTXO]] modelinde ise böyle bir alan yoktur; bakiye, harcanabilir parçaların toplanmasıyla hesaplanır.

## Benzetme

Telefondaki saat uygulaması gibi. Uygulama zamanı üretmez, dışarıdaki zamanı gösterir. Uygulamayı kaldırsan saat durmaz; başka bir telefona kursan aynı saati gösterir.

## Dikkat

Cüzdanda alt alta görünen satırların hepsi aynı yerde durmaz. [[native-token|Yerli paranın]] bakiyesi zincirin kendi kaydındadır; [[token-blockchain|jetonların]] bakiyesi ise o jetonun sözleşmesindeki listede tutulur, cüzdan onu okuyup yan yana dizer.

Bunun pratik sonucu şudur: jetonun olması işlem yapabildiğin anlamına gelmez. [[transaction-fee|İşlem ücreti]] yerli parayla ödenir; o bakiye sıfırsa jetonlar ekranda görünür ama kıpırdatılamaz.
