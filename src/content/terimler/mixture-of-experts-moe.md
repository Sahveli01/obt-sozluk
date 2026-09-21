---
term: "Mixture of Experts (MoE)"
tr: ""
aliases: ["MoE", "uzman karışımı"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Modeli birçok uzman parçaya bölüp her girdide bunlardan yalnızca birkaçını çalıştıran model mimarisi."
related: [transformer, parameters, inference, large-language-model-llm, foundation-model]
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

Mixture of Experts, bir modelin tamamını her girdi için çalıştırmak yerine modeli "uzman" adı verilen çok sayıda alt parçaya bölen ve her seferinde bunlardan yalnızca birkaçını devreye sokan bir tasarımdır. Modelin toplam [[parameters|parametre]] sayısı büyür, ama tek bir cevap üretirken harcanan işlem yükü bütün parametreleri kullanan bir modele göre küçük kalır. Türkçede yerleşmiş bir karşılığı yok; kısaltmasıyla MoE olarak geçer.

## Benzetme

Mahkemenin bilirkişi listesi gibi. Listede onlarca uzman durur ama her dosya için hepsi çağrılmaz; konuya göre bir ikisi görevlendirilir ve ücret yalnızca çalışana ödenir. Listenin uzunluğu kurumun kapsamını, çağrılan kişi sayısı ise o dosyanın maliyetini belirler.

## Nasıl çalışır?

Modelin bazı katmanları tek bir blok yerine yan yana duran birçok bloktan oluşur. Bunların önünde yönlendirici (router) denen küçük bir parça vardır: gelen her [[token-ai|token]] için hangi uzmanların bu parçayı işleyeceğine karar verir, çoğunlukla birkaçını seçer. Seçilmeyen uzmanlar o adımda hiç çalışmaz.

Eğitim sırasında yönlendiricinin dengeli davranması gerekir. Aksi hâlde birkaç uzman bütün işi üstlenir, geri kalanı boş kalır ve kapasite israf olur. Bu dengeyi kurmak MoE eğitiminin en zor tarafıdır.

## Dikkat

"Uzman" kelimesi yanıltıcıdır. Bu parçalar hukuk, tıp, Rust gibi insanın tanıdığı konulara göre ayrılmaz; bölünme eğitim sırasında kendiliğinden oluşur ve çoğu zaman insana anlamlı gelmeyen örüntülere karşılık gelir.

Bir de bellek yanılgısı var. Uzmanların hepsi aynı anda çalışmasa da hepsinin yüklü olması gerekir: MoE [[inference|çıkarım]] maliyetini ucuzlatır, modelin kapladığı yeri değil.
