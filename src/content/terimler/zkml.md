---
term: "zkML"
tr: ""
aliases: ["zk-ml", "zero-knowledge machine learning"]
category: yapay-zeka
subcategory: "Yapay zekâ ve blockchain"
level: ileri
short: "Bir modelin belirli bir girdide belirli bir çıktıyı ürettiğini, sıfır bilgi ispatıyla kanıtlama tekniği."
related: [verifiable-inference, zero-knowledge-proof-zkp, inference, decentralized-ai, zkvm]
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

zkML, bir makine öğrenmesi modelinin çalıştırıldığını ve belirli bir girdiye belirli bir çıktı verdiğini, [[zero-knowledge-proof-zkp|sıfır bilgi ispatı]] üreterek kanıtlama fikridir. Adı "zero-knowledge machine learning" ifadesinin kısaltmasıdır ve Türkçede de bu haliyle kullanılır.

Çekici yanı şudur: ispatı kontrol eden taraf modeli kendi çalıştırmak zorunda kalmaz, hatta modelin ağırlıklarını görmesi bile gerekmez. Bu, bir [[smart-contract|akıllı sözleşmenin]] kendi başına asla yapamayacağı bir hesabın sonucunu kabul edebilmesi anlamına gelir.

## Nasıl çalışır?

Buradaki iş, modelin hesabını ispat sisteminin anlayacağı bir biçime çevirmektir. Çarpmalar, toplamalar ve aktivasyonlar tek tek devreye dökülür; sonra [[prover|ispatlayıcı]] bu devreyi girdiyle çalıştırıp bir ispat üretir, [[verifier|doğrulayıcı]] ispatı kısa sürede kontrol eder.

İki pratik zorluk vardır. Birincisi biçim uyuşmazlığıdır: sinir ağları ondalıklı sayılarla çalışır, ispat sistemleri ise tam sayı aritmetiğiyle. Model önce sabit noktalı sayılara çevrilir ve bu çeviri çıktıyı bir miktar kaydırabilir.

İkincisi ve çok daha ağırı maliyettir. Bir [[inference|çıkarımın]] ispatını üretmek, o çıkarımı doğrudan yapmaktan kat kat pahalı ve yavaştır. Bu küçük bir fazlalık değil, büyüklük mertebesi farkıdır ve bu yolla ispatlanabilecek model boyutunu belirleyen asıl sınır budur.

## Dikkat

Yazıldığı tarih itibarıyla zkML araştırma ve erken deney aşamasındadır. Küçük ve sade modellerle çalışan örnekler vardır; bugünün büyük dil modelleri bu yolla ispatlanmaz.

İspatın neyi kanıtladığını bilmek de gerekir. Kanıtlanan cümle şudur: "şu ağırlıklara sahip model, şu girdide, şu çıktıyı verdi." Modelin iyi, adil ya da isabetli olduğu kanıtlanmaz — yanlış bir cevap da kusursuzca ispatlanabilir. zkML, [[verifiable-inference|doğrulanabilir çıkarımın]] birkaç yolundan yalnızca biridir.
