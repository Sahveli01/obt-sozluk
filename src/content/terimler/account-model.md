---
term: "Account Model"
tr: "Hesap modeli"
aliases: ["hesap modeli"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Zincirin durumunu adres başına bakiye, sayaç ve veri tutan hesaplar hâlinde saklayan model; UTXO'nun alternatifidir."
related: [utxo, state-blockchain, nonce-islem, externally-owned-account-eoa, contract-account, world-state]
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

Hesap modeli, zincirin durumunu adres başına tutulan hesaplar hâlinde saklayan yaklaşımdır. Her hesabın bir bakiyesi, bir sayacı ve sözleşme hesabıysa kendi kodu ile kalıcı verisi bulunur. İşlemler bu alanları doğrudan günceller.

İki hesap türü vardır: özel anahtarla kontrol edilen [[externally-owned-account-eoa|dışarıdan sahip olunan hesaplar]] ve yalnızca kendi koduyla hareket eden [[contract-account|sözleşme hesapları]].

## Nasıl çalışır?

Bir transfer burada doğrudan bir güncellemedir: gönderenin bakiyesinden düşülür, alıcınınkine eklenir. Harcanacak parçaları seçmek gerekmez. Aynı işlemin ikinci kez geçmesini engelleyen şey ise hesabın artan sayacıdır ([[nonce-islem|işlem nonce'u]]).

Model akıllı sözleşmeler için elverişlidir, çünkü sözleşmenin kalıcı hafızası ([[storage-evm|storage]]) doğrudan hesabın içinde durur; sözleşme kendi geçmiş durumuna bakarak karar verebilir. Bütün hesapların o anki hâli birlikte zincirin [[world-state|dünya durumunu]] oluşturur.

Bedeli de var: aynı hesaba dokunan işlemler birbirine bağımlı olduğu için sıra önemlidir ve bu, işlemleri paralel yürütmeyi zorlaştırır. Ayrıca hesap sayısı arttıkça saklanması gereken durum sürekli büyür.

## Dikkat

Buradaki "hesap" bankadaki gibi bir sözleşme değil, zincirdeki bir kayıttır; kimse onu açmaz, dondurmaz ya da kapatmaz.

[[utxo|UTXO]] modelinde ise böyle bir kayıt hiç yoktur; bakiye ayrı çıktıların toplamı olarak hesaplanır. İki model arasındaki asıl fark hız ya da güvenlik değil, durumun nerede ve nasıl tutulduğudur.
