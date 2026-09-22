---
term: "Sidechain"
tr: "Yan zincir"
aliases: []
category: olceklenme
subcategory: "Diğer yaklaşımlar"
level: orta
short: "Ana zincire köprüyle bağlı olan, ama kendi doğrulayıcılarıyla çalıştığı için güvenliğini ondan miras almayan ayrı blokzincir."
related: [layer-2, rollup, blockchain-bridge, appchain, validator]
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

Sidechain, kendi blokları, kendi kuralları ve kendi doğrulayıcı kümesi olan bağımsız bir [[blockchain|blokzincirdir]]. Ana zincirle arasındaki tek bağ bir [[blockchain-bridge|köprüdür]]: varlık bir tarafta kilitlenir, diğer tarafta temsilcisi üretilir.

Amaç genellikle ucuz ve hızlı bir yürütme alanı açmaktır. Bedeli de buradan çıkar: hız, ana zincirin güvenliğinden vazgeçilerek kazanılır.

## Benzetme

Yan yana iki apartman gibi. Her birinin kendi kapısı, kendi görevlisi, kendi kilidi vardır. İki bina arasında eşya taşıyabilirsin; ama eşyan karşı binaya geçtiği anda, onu koruyan artık senin binanın görevlisi değil, oradaki görevlidir. Karşı binanın kilidi zayıfsa eşyan da zayıf korunur.

## Nasıl çalışır?

Sidechain kendi [[consensus-mechanism|uzlaşma mekanizmasını]] çalıştırır ve kendi bloklarını üretir. Ana zincir bu bloklardan haberdar değildir; onları doğrulamaz, saklamaz, geçersiz ilan edemez.

Köprü iki yönlüdür. Ana zincire kilitlenen varlık karşılığında sidechain'de bir temsilci basılır; geri dönerken temsilci yakılır ve kilit açılır. Kilidin ne zaman açılacağına karar veren şey, çoğunlukla sidechain'in doğrulayıcılarının ya da köprüyü işleten bir imza kümesinin sözüdür.

## Dikkat

Sidechain ile [[rollup|rollup]] en çok karıştırılan çifttir. Rollup, işlem verisini veya geçerlilik kanıtını ana zincire yazar; bir sorun çıkarsa doğruyu ana zincir söyler. Sidechain bunu yapmaz. Doğrulayıcılarının çoğunluğu anlaşırsa zinciri istediği gibi yazabilir ve ana zincirde bunu engelleyecek bir mekanizma yoktur.

Bu yüzden "sidechain'e para gönderdim" demek, "ana zincirin güvenliği altındayım" demek değildir. Sorulacak soru şudur: bu zinciri kimler doğruluyor ve köprüdeki kilidi kim açabiliyor?
