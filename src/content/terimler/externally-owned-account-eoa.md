---
term: "Externally Owned Account (EOA)"
tr: ""
aliases: ["EOA", "externally owned account", "harici hesap"]
category: cuzdanlar
subcategory: "Hesap soyutlama"
level: orta
short: "Özel anahtarla kontrol edilen, kendi kodu olmayan klasik hesap türü; zincirde bir işlem zincirini başlatabilen tek hesap budur."
related: [contract-account, private-key, account-abstraction, wallet, nonce-islem]
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

EOA, "externally owned account" yani dışarıdan kontrol edilen hesap demektir. Dışarıdan kontrol eden şey bir [[private-key|özel anahtardır]]. Bu hesabın içinde kod yoktur: ne bakiyesine kimin dokunacağını belirleyen bir program taşır, ne de kendi başına yaptığı bir iş vardır. Tek kuralı, kendi imzasını taşıyan [[transaction|işlemleri]] geçerli saymaktır. Bir [[wallet|cüzdan]] kurduğunda elde ettiğin sıradan adres tipik olarak budur.

Türkçede yerleşik bir karşılığı yok; metinlerde çoğunlukla kısaltmasıyla, "EOA" diye geçiyor.

## Benzetme

Zincirdeki iki hesap türünü depo ve fabrika gibi düşün. Depo bir şey saklar, kendi başına hiçbir şey üretmez; kapısı ancak anahtarı olan biri geldiğinde açılır. Fabrikanın içindeyse kurulu bir düzenek vardır: kapıdan malzeme girdiği anda makineler çalışır. EOA depodur, [[contract-account|sözleşme hesabı]] fabrikadır.

## Nasıl çalışır?

EOA'nın adresi zincire önceden kaydedilmez, bir anahtar çiftinden türetilir: özel anahtardan [[public-key|açık anahtar]], ondan da adres hesaplanır. Adres, ilk kez para aldığında ya da ilk işlemini gönderdiğinde görünür hale gelir.

İşlem göndermek için işlemin içeriği özel anahtarla imzalanır. Düğümler [[digital-signature|imzadan]] adresi geri hesaplar ve imzanın gerçekten o adrese ait olduğunu doğrular. Her hesabın bir de [[nonce-islem|nonce]] sayacı vardır; aynı imzalı işlemin ikinci kez işlenmesini bu engeller.

İki hesap türü arasındaki asıl fark yetkidedir. Zincirdeki her işlem zinciri bir EOA imzasıyla başlar; sözleşme hesapları kendiliğinden harekete geçemez, yalnızca çağrıldıklarında çalışır. Hesap soyutlama tartışmasının çıkış noktası tam olarak bu kuraldır.

## Dikkat

EOA'nın doğrulama kuralı sabittir: tek bir özel anahtarın imzası. İkinci bir onay, günlük harcama limiti, şüpheli işlemi reddetme ya da anahtar kaybolunca kurtarma gibi bir şey yoktur; protokol bunları hesaba ekleyemez. Anahtar giderse hesap da gider. [[account-abstraction|Hesap soyutlama]] tam olarak bu katılığı gevşetmeye çalışır.
