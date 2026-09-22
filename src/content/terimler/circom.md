---
term: "Circom"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: ileri
short: "Sıfır bilgi ispatlarının dayandığı aritmetik devreleri kısıt kısıt tanımlamak için kullanılan dil."
related: [circuit-zk, zero-knowledge-proof-zkp, zk-snark, prover, noir]
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

Circom, sıfır bilgi ispatlarının altında yatan aritmetik [[circuit-zk|devreleri]] tanımlamak için kullanılan bir dildir. Burada "program yazmak" yerine "kısıt yazmak" söz konusudur: değişkenler yerine sinyaller vardır ve yazdığın her satır, sinyaller arasında sağlanması gereken bir denklem kurar.

Devreler şablonlardan (`template`) oluşur ve şablonlar iç içe kullanılabilir. Bir karma fonksiyonunu, bir imza doğrulamasını ya da bir Merkle yolu kontrolünü ifade eden hazır şablon kütüphaneleri vardır; yazdığın devre çoğu zaman bunları birleştirerek kurulur.

## Nasıl çalışır?

Derleyici devreden iki çıktı üretir: kısıt sistemi ve girdilerden tanık (witness) değerlerini hesaplayan bir program. [[prover|İspatlayıcı]] tanığı ve kısıt sistemini alıp bir [[zk-snark|SNARK]] ispatı üretir; doğrulayıcı yalnızca ispata ve açık girdilere bakar.

Dilde iki işaret ayrımı kritiktir: `<--` bir sinyale değer atar, `<==` hem atar hem de bunu bir kısıt olarak devreye ekler. İkisi kolayca karıştırılır çünkü ikisi de "çalışıyor" gibi görünür.

## Dikkat

Bu ayrımın karıştırılması, sıfır bilgi devrelerinin en bilinen hata sınıfını doğurur: eksik kısıtlanmış devre. Değer atanmış ama kısıt konmamışsa, ispatlayıcı o sinyale istediği değeri koyabilir ve yine geçerli görünen bir ispat üretir. Devre testten geçer, örnek girdilerle doğru sonuç verir, buna rağmen güvenlik iddiası boştur.

[[noir|Noir]] gibi üst düzey diller kısıtları derleyiciye ürettirerek bu hata sınıfını azaltmayı hedefler; Circom ise denetimi yazarda bırakır.
