---
term: "Foundation Model"
tr: "Temel model"
aliases: ["temel model"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Geniş ve çeşitli veriyle büyük ölçekte eğitilmiş, üstüne pek çok farklı uygulama kurulabilen genel amaçlı model."
related: [base-model, pretraining, large-language-model-llm, multimodal, fine-tuning]
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

Foundation model, geniş ve çeşitli veriyle büyük ölçekte eğitilmiş, tek bir işe değil pek çok işe temel olacak biçimde tasarlanmış modeldir. Terim yalnızca metin için kullanılmaz: görüntü, ses ve kod üreten büyük modeller ya da birkaç kipi birden işleyen [[multimodal|çok kipli]] modeller de bu başlığa girer. Vurgu modelin ne kadar büyük olduğunda değil, üstüne kaç farklı uygulamanın kurulabildiğindedir.

## Nasıl çalışır?

Mantık şudur: sıfırdan eğitmek çok pahalı olduğu için ağır ve genel iş bir kez yapılır, sonra herkes o genel yeteneğin üstüne kendi dar işini kurar. Kurma biçimi birkaç türlüdür — yalnızca istem yazmak, araç bağlamak, [[fine-tuning|ince ayar]] yapmak ya da modeli daha büyük bir sistemin içinde bir bileşen olarak kullanmak.

Bu yapı bir bağımlılık da doğurur. Aynı temel modelin üstüne kurulmuş yüzlerce uygulama, o modelin sınırlarını, önyargılarını ve kesintilerini birlikte devralır; alttaki model değiştiğinde üsttekilerin davranışı da hep birden değişir.

## Dikkat

"Foundation model" ile "[[base-model|base model]]" kulağa aynı gelir ama aynı şey değildir: ilki modelin ne işe yaradığını, ikincisi eğitim zincirinde nerede durduğunu anlatır. Ayrımın ayrıntısı base model maddesindedir.

Terim bir sınıflandırmadır, kalite işareti değil. Bir modele foundation model denmesi onun her işte iyi olduğunu değil, çok farklı işlere başlangıç noktası yapılabildiğini söyler. Sınırları da nettir: genel amaçlı bir model, uzmanlık isteyen dar bir işte o iş için hazırlanmış küçük bir modelin gerisinde kalabilir.
