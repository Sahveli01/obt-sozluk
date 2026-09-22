---
term: "Verifier"
tr: "Doğrulayıcı"
aliases: ["dogrulayici"]
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: orta
short: "Bir sıfır bilgi kanıtını açık girdilerle birlikte alıp, hesabı tekrarlamadan kabul ya da ret kararı veren taraf."
related: [prover, zero-knowledge-proof-zkp, validity-proof, trusted-setup, precompile]
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

Verifier, [[prover|ispatlayıcının]] ürettiği kanıta bakıp "bu iddia geçerli mi" sorusuna cevap veren taraftır. Elinde üç şey olur: kanıtın kendisi, açık girdiler ve o devreye ait doğrulama anahtarı. Gizli girdiyi hiç görmez ve görmesine gerek yoktur.

Verifier'ın işi kasten ucuzdur. Doğruladığı hesap milyonlarca adım sürmüş olabilir; o hesabı baştan yapmaz, yalnızca kanıtın birkaç kriptografik kontrolden geçip geçmediğine bakar.

## Nasıl çalışır?

Kontrol deterministiktir: aynı kanıt, aynı girdiler ve aynı doğrulama anahtarıyla her zaman aynı cevabı verir. Cevap iki değerlidir — kabul ya da ret. "Kısmen doğru" diye bir sonuç yoktur.

Bu ucuzluk sayesinde verifier bir [[smart-contract|akıllı sözleşmenin]] içine sığdırılabilir. Zincir üstünde doğrulama yapmak yine de bedavaya gelmez; eğri aritmetiği gibi ağır işlemler bu yüzden çoğu ağda [[precompile|precompile]] olarak, yani doğrudan istemciye gömülü hâlde sunulur.

## Dikkat

Verifier'ın verdiği garanti dar bir cümledir: "bu devre, bu açık girdilerle, kısıtları sağlayan bir tanık kullanılarak çalıştırıldı." Bundan daha fazlası değil.

Devre yanlış yazılmışsa — kontrol edilmesi gereken bir koşul unutulmuşsa — kanıt yine geçerli çıkar. Sistem, yanlış olduğunu kusursuz biçimde kanıtlamış olur. Bu yüzden ZK sistemlerinde asıl denetim yüzeyi kanıt matematiği değil, devrenin kendisidir.

İkinci ayrıntı doğrulama anahtarıdır. Verifier yanlış ya da kurcalanmış parametrelerle kurulmuşsa yaptığı kontrolün bir anlamı kalmaz; bu parametrelerin nereden geldiği [[trusted-setup|kurulum]] sorusudur.
