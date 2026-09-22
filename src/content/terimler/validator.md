---
term: "Validator"
tr: "Doğrulayıcı"
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: baslangic
short: "Blokları ağ kurallarına göre denetleyen, oy veren ve sırası geldiğinde yeni blok öneren, bunun için varlık kilitlemiş katılımcı."
related: [stake, staking, proposer, attestation, slashing, miner]
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

Validator, bir [[proof-of-stake-pos|pay ispatı]] ağında blok üretme ve doğrulama işini yapan katılımcıdır. Aslında bir insan değil, sürekli çalışan bir yazılım ve ona ait bir imza anahtarıdır; arkasındaki kişi ya da kurum ağ için görünmez. Katılabilmek için ağın belirlediği miktarda varlığın kilitli olması gerekir ([[stake]]).

Günlük işi iki başlıktan oluşur: gördüğü bloklar hakkındaki görüşünü imzalayıp yayımlamak ([[attestation|attestation]]) ve sırası geldiğinde yeni bloğu önermek ([[proposer|proposer]] olmak).

## Benzetme

Yapı denetim firması gibi. Her aşamayı kendi başına kontrol eder, kurala uygunsa imzalar, uygun değilse imzalamaz. İmzası karşılığında ücret alır; yanlış imza attığı ortaya çıkarsa bedelini kendi kasasından öder. İşin sağlamlığı imzayı atanın dürüstlüğüne değil, yanlış imzanın ona pahalıya patlamasına dayanır.

## Dikkat

Validator ile [[miner|madenci]] aynı işin iki farklı yoludur: madenci sırayı hesaplama yaparak bulur, validator ise kilitli varlığı ölçüsünde seçilerek belirlenir.

Bir de validator ile [[node|node]] karışır. Ağdaki node'ların büyük kısmı blok üretmez, yalnızca gelen blokları denetleyip komşularına dağıtır. Validator, bir node'un üstüne imza yetkisi ve kilitli sermaye eklenmiş hâlidir.
