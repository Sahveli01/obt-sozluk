---
term: "UTXO"
tr: "Harcanmamış işlem çıktısı"
aliases: ["harcanmamış işlem çıktısı", "unspent transaction output"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Harcanmamış işlem çıktısı: bakiyeyi tek bir sayı yerine, ayrı ayrı harcanabilir parçaların toplamı olarak tutan model."
related: [account-model, transaction, double-spending, state-blockchain, dust]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

UTXO, "unspent transaction output" yani harcanmamış işlem çıktısı demektir. Bu modeli kullanan zincirlerde hesap diye bir kutu yoktur; zincirin durumu, henüz harcanmamış çıktıların kümesinden ibarettir. Bir cüzdanın "bakiyesi" de o cüzdanın harcayabildiği çıktıların toplamıdır.

## Nasıl çalışır?

Her [[transaction|işlem]] girdiler alır ve çıktılar üretir. Girdiler, daha önce üretilmiş ve hâlâ harcanmamış çıktıları işaret eder. İşlem geçerliyse bu çıktılar harcanmış sayılıp kümeden silinir, yerlerine yeni çıktılar yazılır. Bir çıktı bölünemez: tamamı harcanır, artan kısım para üstü olarak gönderenin kendi adresine yeni bir çıktı hâlinde döner.

Bu yapı [[double-spending|çifte harcamayı]] tek bir sade kurala indirger: aynı çıktıyı iki işlem birden girdi gösteremez. Doğrulama da kolaydır, çünkü bir işlemin geçerliliği yalnızca işaret ettiği çıktılara bakılarak sınanabilir; birbirine dokunmayan işlemler paralel doğrulanabilir.

## Benzetme

Hediye çeki gibi. Her çek belirli bir tutardadır ve parça parça kullanılamaz. 70 liralık alışverişe 100 liralık çeki verirsin; kasa o çeki iptal eder ve sana 30 liralık yeni bir çek yazar. Cüzdanındaki "para", elindeki geçerli çeklerin toplamıdır.

## Dikkat

Bu modelde bakiye diye saklanan bir alan yoktur; bakiyeyi cüzdan yazılımı hesaplar. Bu yüzden [[account-model|hesap modelindeki]] gibi "hesabın kalıcı durumu" üzerinde çalışan sözleşme mantığı burada doğrudan kurulamaz, farklı yaklaşımlar gerekir.

Çok sayıda küçük çıktı biriktirmek de ücreti artırır: işlem büyüdükçe pahalanır ve çok küçük çıktılar ([[dust|dust]]) harcanmaya değmez hâle gelebilir.
