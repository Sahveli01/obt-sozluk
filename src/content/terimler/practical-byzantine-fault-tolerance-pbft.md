---
term: "Practical Byzantine Fault Tolerance (PBFT)"
tr: ""
aliases: ["pbft"]
category: konsensus
subcategory: "Mekanizmalar"
level: ileri
short: "Bizans hatası toleransını pratikte çalıştıran klasik algoritma: bilinen bir düğüm kümesinde lider öneri yapar, karar iki oylama turunda kesinleşir."
related: [byzantine-fault-tolerance-bft, tendermint-cometbft, permissioned-blockchain, deterministic-finality, leader-election, federated-byzantine-agreement-fba]
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

PBFT, 1999'da yayımlanan ve [[byzantine-fault-tolerance-bft|Bizans hatası toleransını]] teorik bir sonuç olmaktan çıkarıp çalışan bir sisteme dönüştüren algoritmadır. Katılımcı listesi bilinir ve sabittir; n düğümlü bir kümede en fazla f düğüm bozuk davranıyorsa, n ≥ 3f + 1 olduğu sürece küme anlaşabilir. Adı bir algoritmanın özel adıdır, Türkçeye çevrilmez.

## Nasıl çalışır?

Bir tur kabaca şöyle işler. Düğümlerden biri o tur için **lider**dir ve bir öneri yayınlar. Diğerleri öneriyi alınca "bunu gördüm" mesajını herkese yollar; yeterli sayıda aynı mesajı toplayan düğüm ikinci tura geçip "kabule hazırım" der. İkinci turda da yeterli sayı toplandığında karar kesinleşir ve geri alınmaz ([[deterministic-finality|deterministik kesinlik]]).

İkinci tur boşuna değildir. Tek turla, bir düğümün kararı benimseyip diğerlerinin benimsememesi ihtimali kapanmaz; ikinci tur "yeterli sayıda düğümün de aynı şeyi gördüğünü gördüm" bilgisini taşır.

Lider susarsa ya da farklı düğümlere çelişkili öneriler yollarsa, diğerleri bunu zaman aşımıyla fark eder ve **görüş değişimi** (view change) yaparak sırayı bir sonraki lidere devreder ([[leader-election|lider seçimi]]).

Bedeli mesaj sayısıdır: her düğüm her düğüme yazdığı için trafik katılımcı sayısının karesiyle büyür. Bu yüzden PBFT küçük ve bilinen kümelere uygundur; modern türevlerinin çoğu bu yükü [[signature-aggregation|imza birleştirme]] gibi tekniklerle hafifletmeye çalışır.

## Dikkat

PBFT'nin garantisi "hiçbir koşulda durmaz" değildir. Mesajlar gecikse bile çelişen iki karar verilmez; ama ağ bölünür ve yeterli sayı bir araya gelemezse sistem yeni karar üretemez, olduğu yerde bekler. Tercih açıktır: yanlış karar vermektense durmak.

[[nakamoto-consensus|Nakamoto konsensüsü]] aynı takası ters yönde yapar. Bölünme hâlinde ilerlemeye devam eder ve tutarlılığı sonradan, zincirlerden biri diğerini geride bırakınca onarır.
