---
term: "zkVM"
tr: ""
aliases: []
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: ileri
short: "Sıradan kodu çalıştıran ve çalıştırmanın kurallara uygun olduğunu kanıtlayan sanal makine; devre yazma zorunluluğunu kaldırır."
related: [circuit-zk, zkevm, prover, zero-knowledge-proof-zkp, recursive-proof, cairo]
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

Klasik yolda bir iddiayı kanıtlamak için onu elle bir [[circuit-zk|devreye]] çevirmen gerekir. Bu iş zordur, hataya açıktır ve her yeni program için baştan yapılır.

zkVM bu yükü tersine çevirir. Devre olarak yazılan şey artık senin programın değil, bir **sanal makinenin kendisidir**. Program, o makinenin çalıştırdığı sıradan bir girdiye dönüşür. Sen Rust ya da benzeri bir dilde normal kod yazarsın; sistem kodu çalıştırır ve yanında "bu program bu girdiyle çalıştırıldığında bu çıktıyı verdi" diyen bir kanıt üretir.

## Nasıl çalışır?

Program, sanal makinenin komut setine derlenir. Çalıştırma sırasında her adımın kaydı tutulur; bu kayda **iz** (trace) denir: hangi komut işlendi, kayıtlarda hangi değerler vardı, bellek nasıl değişti.

[[prover|İspatlayıcı]] bu izi alır ve izin makinenin kurallarına uygun olduğunu kanıtlar. Devre sabittir, çünkü makinenin komutları sabittir; değişen tek şey izdir. Uzun programlar genelde parçalara bölünüp [[recursive-proof|özyinelemeli kanıtla]] birleştirilir. [[cairo|Cairo]] ve [[zkevm|zkEVM]] projeleri bu yaklaşımın farklı komut setleri üzerindeki örnekleridir.

## Dikkat

Kolaylığın bedeli kanıt üretme maliyetidir. Genel amaçlı bir makinenin her adımını kanıtlamak, aynı işi yapan elle yazılmış bir devreyi kanıtlamaktan çok daha pahalıdır; makine, o programda hiç kullanılmayan komutları da desteklemek zorunda olduğu için fazladan yük taşır.

İkincisi, kanıt **programın çalıştırıldığını** söyler, programın doğru yazıldığını değil. Hatalı bir kodun hatalı çıktısı da kusursuz biçimde kanıtlanır. zkVM denetim ihtiyacını ortadan kaldırmaz, yalnızca yerini değiştirir: devreyi denetlemek yerine kodu denetlersin.
