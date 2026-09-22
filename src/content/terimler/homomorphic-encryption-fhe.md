---
term: "Homomorphic Encryption (FHE)"
tr: "Homomorfik Şifreleme"
aliases: ["fhe"]
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: ileri
short: "Şifreli veriyi hiç çözmeden üzerinde hesap yapmayı sağlayan şifreleme türü; sonuç çözüldüğünde doğru cevap çıkar."
related: [encryption, zero-knowledge-proof-zkp, multi-party-computation-mpc, post-quantum-cryptography, cryptography]
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

Normalde şifreli bir veriyle hiçbir şey yapamazsın. İşlem yapmak için önce çözmen gerekir, çözdüğün anda da veri o makinede açık hâle gelir. Bulutta hesap yaptıran herkesin yaşadığı sorun budur.

Homomorfik şifreleme bu zorunluluğu kaldırır. Şifreli metinler üzerinde yapılan işlemler, açık veriler üzerinde yapılmış gibi sonuç verir: sonucu kendi anahtarınla çözdüğünde, hesabı açık veriyle yapmış olsaydın çıkacak cevabın aynısını alırsın. Hesabı yapan taraf ise ne girdiyi ne çıktıyı görmüştür.

## Benzetme

Laboratuvarlardaki mühürlü kabinler gibi. Malzeme kabinin içindedir; elini doğrudan içeri sokamazsın, duvara takılı kollarla içeride iş yaparsın. Karıştırırsın, tartarsın, ayırırsın — ama içindekini dışarı alamazsın. Kabini yalnızca anahtarı olan açar.

## Nasıl çalışır?

Şemalar yapabildikleri işleme göre ayrılır. Bazıları yalnızca toplama ya da yalnızca çarpma destekler; **tam** (fully) homomorfik olanlar ikisini birden ve sınırsız sayıda destekler, dolayısıyla teoride her hesap yapılabilir.

Buradaki zorluk gürültüdür. Şifreli metinlerin içine güvenlik için eklenen rastgelelik, her işlemde biraz daha büyür; belli bir eşiği aşınca veri geri çözülemez hâle gelir. Çözüm **bootstrapping** denen adımdır: gürültüyü tazeleyen bir işlem, hesabın arasına serpiştirilir. FHE'yi mümkün kılan kırılma noktası 2009'da bu fikrin ortaya konmasıdır.

Kullanılan yapılar kafes (lattice) tabanlıdır; bu aile [[post-quantum-cryptography|kuantum sonrası]] adaylar arasında sayılır.

## Dikkat

FHE ile [[zero-knowledge-proof-zkp|sıfır bilgi ispatı]] sık karıştırılır ama farklı işler yaparlar. Sıfır bilgi, bir şeyin **doğru olduğunu** kanıtlar. FHE ise bir şeyi **gizli tutarak hesaplar** ve hesabın doğru yapıldığına dair kendiliğinden bir garanti vermez; bunu istiyorsan üstüne ayrıca bir ispat koyman gerekir.

İkincisi maliyet. Yazıldığı tarih itibarıyla şifreli veri üzerinde hesap yapmak, aynı hesabı açık veriyle yapmaktan kat kat pahalıdır. Bu yüzden kullanım alanı dardır ve hesabın küçük, verinin hassas olduğu senaryolarda anlam kazanır.
