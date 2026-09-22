---
term: "Merkle Patricia Trie"
tr: ""
aliases: ["mpt"]
category: kriptografi
subcategory: "Veri yapıları"
level: ileri
short: "Anahtar–değer aramasını Merkle doğrulamasıyla birleştiren, Ethereum'un durum verisini tuttuğu ağaç yapısı."
related: [merkle-tree, merkle-root, world-state, state-blockchain, block-header, verkle-tree]
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

Merkle Patricia trie, iki ayrı işi tek yapıda toplar: bir sözlük gibi anahtardan değere gitmeyi ve bir [[merkle-tree|Merkle ağacı]] gibi doğrulanabilir olmayı. [[ethereum|Ethereum]] hesap bakiyelerini, sözleşme kodlarını ve sözleşme depolarını bu yapıda tutar.

"Trie" bir yazım hatası değil, ayrı bir kelimedir ve yerleşik bir Türkçe karşılığı olmadığı için adın tamamı olduğu gibi kullanılır.

Neden düz bir Merkle ağacı yetmiyor? Çünkü düz ağaç sabit bir listeyi özetler. [[state-blockchain|Durum]] ise her blokta değişir ve üstelik adresle sorgulanır: "şu hesabın bakiyesi nedir?" sorusunun cevabı, ağaçta o hesabın nerede durduğunu bilmeyi gerektirir.

## Nasıl çalışır?

Anahtarın kendisi yolu belirler. Hesabın adresi hash'lenir ve çıkan değer hane hane okunur; her hane, kökten aşağı inerken hangi dala girileceğini söyler. Yolun sonundaki düğüm o anahtarın değerini taşır. Arama ile konum aynı şeydir, ayrı bir indeks tutulmaz.

"Patricia" kısmı budamadır. Uzun bir yol boyunca tek bir dal varsa o basamaklar tek düğümde sıkıştırılır; ağaç boşuna derinleşmez.

"Merkle" kısmı ise her düğümün kendi hash'iyle anılmasıdır. Bir bakiye değiştiğinde bütün yapı yeniden kurulmaz, yalnızca o yol üstündeki düğümler yeniden hesaplanır. Ortaya çıkan yeni kök, [[block-header|blok başlığına]] yazılan durum köküdür ve [[world-state|dünya durumunun]] o andaki hâlini temsil eder.

## Dikkat

Bu yapının düz Merkle ağacına göre bir üstünlüğü var: yol anahtarla belirlendiği için "bu anahtarın karşılığı yok" iddiası da kanıtlanabilir. Doğru yere gidilir, orada bir şey olmadığı gösterilir.

Bedeli kanıt boyutudur. Her düğüm çok sayıda dala ayrıldığı için bir yaprağı köke bağlamak her seviyede epeyce kardeş özet taşımayı gerektirir; tek bir hesabın durum kanıtı bile şişer. [[verkle-tree|Verkle ağacı]] fikri, doğrudan bu maliyete verilmiş bir cevaptır.
