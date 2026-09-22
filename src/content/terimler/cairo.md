---
term: "Cairo"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: ileri
short: "Yürütülmesinin doğruluğu bir ispatla kanıtlanabilen programlar yazmak için tasarlanmış dil."
related: [zero-knowledge-proof-zkp, zk-stark, starknet, prover, noir, rust]
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

Cairo, yürütülmesinin doğruluğu matematiksel olarak kanıtlanabilen programlar yazmak için tasarlanmış bir dildir. Sıradan bir dilde yazdığın programın doğru çalıştığına ya kendin çalıştırarak ya da çalıştırana güvenerek inanırsın. Cairo ile yazılmış bir program çalıştırıldığında yanında bir [[zero-knowledge-proof-zkp|ispat]] üretilir; bu ispatı kontrol eden taraf programı baştan çalıştırmadan sonucun doğru olduğuna ikna olur.

Sözdizimi [[rust|Rust]]'a benzer: fonksiyonlar, tipler, eşleştirme ifadeleri tanıdıktır. Alışılmadık olan, altta yatan hesap modelidir — sayılar sonlu bir cisimde tutulur ve dilin sunduğu her yapı, sonunda ispat sisteminin denetleyebileceği kısıtlara çevrilebilmek zorundadır.

## Nasıl çalışır?

Derleyici kodu, adım adım izlenebilen bir yürütme izine çevirir. [[prover|İspatlayıcı]] bu izi alıp bir [[zk-stark|STARK]] ispatı üretir; doğrulayan taraf ise hesabın tamamını tekrarlamak yerine yalnızca ispatı kontrol eder ve bu çok daha ucuzdur.

Bu asimetri, ağır hesabı zincir dışında yapıp zincire yalnızca ispatı taşıyan sistemlerin temelidir. [[starknet|Starknet]] sözleşmeleri Cairo ile yazılır.

## Dikkat

Cairo yazmak için kriptografi bilmek gerekmez, ama "her şeyin ispatlanabilir olması" kısıtı alışkanlıkları değiştirir: maliyeti belirleyen şey geçen süre değil, üretilen adım sayısıdır, dolayısıyla sıradan bir dilde ucuz görünen bir yapı burada pahalı olabilir.

Bir de kapsam farkı var: Cairo genel amaçlı bir programın yürütmesini ispatlamaya odaklanır, [[noir|Noir]] ve [[circom|Circom]] ise belirli bir ifadeyi ispatlayan devreler yazmaya. Üçü de aynı dünyadan gelir ama aynı işi yapmaz.
