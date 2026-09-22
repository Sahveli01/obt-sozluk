---
term: "Noir"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: ileri
short: "Sıfır bilgi devrelerini kriptografi ayrıntılarına girmeden, sıradan program yazar gibi ifade etmeye yarayan dil."
related: [zero-knowledge-proof-zkp, circuit-zk, zk-snark, prover, circom, rust]
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

Noir, sıfır bilgi ispatlarında kullanılan [[circuit-zk|devreleri]] yazmak için tasarlanmış bir dildir. Amacı tek bir cümleyi ifade edebilmektir: "elimde şu koşulu sağlayan bir değer var, ama değerin kendisini göstermeyeceğim."

Sözdizimi [[rust|Rust]]'a benzer ve sıradan program yazmaya yakın durur. Fonksiyonun girdileri açık (public) ya da gizli (private) olarak işaretlenir; gizli girdiler ispatta görünmez, açık olanlar doğrulayan tarafın da bildiği değerlerdir. Böylece [[zero-knowledge-proof-zkp|sıfır bilgi ispatı]] yazmak, eliptik eğri matematiğini öğrenmeyi değil, doğrulanacak koşulu kodda ifade etmeyi gerektirir.

## Nasıl çalışır?

Derleyici Noir kodunu doğrudan bir ispat sistemine değil, ara bir devre gösterimine çevirir. Bu gösterimi alıp gerçek ispatı üreten arka uçlar ayrıdır; aynı Noir kodunun arkasına farklı [[zk-snark|SNARK]] arka uçları takılabilir. Çalıştırma sırasında önce gizli girdilerle tanık değerleri hesaplanır, sonra [[prover|ispatlayıcı]] ispatı üretir.

## Dikkat

Noir kodu sıradan bir program gibi görünür ama sıradan bir program gibi davranmaz. Devrenin boyutu önceden sabitlenmek zorunda olduğu için döngü sınırlarının derleme anında bilinmesi gerekir ve koşullu dallar devrede yer kaplar. Sonuç olarak "çalışır" ile "makul sürede ispatlanır" aynı şey değildir; yazarken ikincisini de düşünmek gerekir.

[[circom|Circom]] ile arasındaki temel fark şudur: Circom'da kısıtları sen yazarsın, Noir'da kısıtları senin yazdığın koddan derleyici üretir.
