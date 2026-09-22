---
term: "Cardano"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "Tasarım kararlarını akademik yayın ve biçimsel yöntemlerle gerekçelendirmeyi ilke edinmiş, genişletilmiş UTXO modelli blockchain ağı."
related: [proof-of-stake-pos, utxo, formal-verification, functional-programming, smart-contract]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Cardano, bir blockchain'in bileşenlerinin önce kâğıt üzerinde kanıtlanıp sonra kodlanması gerektiği düşüncesiyle kuruldu. Ağın uzlaşma protokolü, hakem denetiminden geçmiş akademik yayınlara dayandırılır; sözleşme tarafında da [[formal-verification|biçimsel doğrulama]] ve matematiksel kesinlik vurgusu öne çıkar.

## Nasıl çalışır?

Blok üretimi [[proof-of-stake-pos|proof of stake]] ile yapılır: zaman dilimlere ayrılır ve her dilimde blok üretecek kişi, stake miktarıyla orantılı bir kurayla seçilir. Token sahipleri kendi düğümlerini çalıştırmak yerine paylarını bir havuza devredebilir.

Veri modeli [[utxo|UTXO]] yaklaşımının genişletilmiş bir biçimidir. Bakiye güncelleyen bir hesap yerine, harcanmamış çıktılar üzerine veri ve kilit koşulu eklenir. Bunun pratik sonucu şudur: bir işlemin ne yapacağı ve ne kadar ücret tutacağı, zincire gönderilmeden önce büyük ölçüde hesaplanabilir. Sözleşme dili [[functional-programming|fonksiyonel programlama]] geleneğinden gelir.

## Dikkat

Kabul edilen bedel hızdır. Her adımın önce yayımlanıp sonra uygulanması, yeni yeteneklerin ağa gelmesini yavaşlatır; yazıldığı tarih itibarıyla bu, ağa sık yöneltilen eleştirilerden biridir.

İkinci bedel alışkanlıktır. [[smart-contract|Akıllı sözleşme]] yazmak burada hesap bakiyesi güncellemeye değil, doğru çıktıları üretmeye benzer; aynı veriye aynı anda dokunmak isteyen iki kullanıcı birbirinin işlemini geçersiz kılabildiği için uygulamalar bu çakışmayı baştan tasarlamak zorundadır.
