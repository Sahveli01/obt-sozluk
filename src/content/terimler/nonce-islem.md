---
term: "Nonce (İşlem)"
tr: ""
aliases: ["işlem nonce'u", "hesap nonce'u"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Bir hesabın gönderdiği işlemleri sıraya dizen ve her birinin yalnızca bir kez işlenmesini sağlayan artan sayaç."
related: [transaction, account-model, replay-attack, mempool, transaction-fee]
disambiguation: [nonce-kriptografi]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

İşlem nonce'u, hesap tabanlı zincirlerde bir hesabın gönderdiği işlemleri numaralandıran sayaçtır. Hesabın ilk işlemi sıfır numaralıdır ve işlenen her işlemden sonra sayaç bir artar. Her [[transaction|işlem]] hangi numaraya ait olduğunu kendi içinde taşır ve bu numara imzanın kapsamındadır. Nonce'un Türkçe karşılığı yerleşmemiştir; sektörde İngilizce hâliyle kullanılır.

## Benzetme

Çek defteri gibi. Yapraklar sırayla numaralıdır; 24 numaralı çek işleme girmeden 25 numaralı çek sıraya alınmaz ve aynı numaralı ikinci bir çek gelirse kabul edilmez. Numara, kimin ne sırayla yazdığını tartışmasız hâle getirir.

## Nasıl çalışır?

Ağ, bir hesabın işlemlerini numara sırasına göre işler. Sırada 7 numara beklenirken 8 numaralı işlem gelirse, 7 gelene kadar [[mempool|havuzda]] bekletilir. Zaten işlenmiş bir numara ikinci kez gelirse doğrudan reddedilir.

Bu iki kural birlikte iki iş görür. Birincisi, işlemlerin ağa ulaşma sırası karışsa bile hesabın niyetlediği sıra korunur. İkincisi, imzalı bir işlemin kopyalanıp tekrar gönderilmesi ([[replay-attack|tekrar saldırısı]]) engellenir; imza geçerli olsa da o numara tükenmiştir.

Aynı numaraya yeni bir işlemi daha yüksek [[transaction-fee|ücretle]] göndermek, bekleyen bir işlemi değiştirmenin veya iptal etmenin standart yoludur.

## Dikkat

Bu kavram [[nonce-kriptografi|kriptografideki nonce]] ile karıştırılır: oradaki nonce bir kere kullanılıp atılan rastgele bir sayıdır, buradaki ise hesaba ait sırayla artan bir sayaçtır; ortak yanları yalnızca "bir kez kullanılır" fikridir.

Ayrıca her zincirde bulunmaz. [[utxo|UTXO]] modelini kullanan zincirlerde aynı işi harcanan çıktıların kendisi görür, ayrı bir sayaca gerek kalmaz.
