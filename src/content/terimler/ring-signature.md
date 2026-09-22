---
term: "Ring Signature"
tr: "Halka imza"
aliases: ["halka imza"]
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: orta
short: "Bir grup açık anahtar arasından birinin imzaladığını kanıtlayan, hangisinin imzaladığını göstermeyen imza türü."
related: [anonymity-set, privacy-coin, stealth-address, digital-signature, multisig]
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

Halka imza, "bu mesajı şu listedeki anahtarlardan biri imzaladı" diyen bir [[digital-signature|imzadır]]. Doğrulayan taraf listeyi ve imzayı alır, imzanın gerçekten listedekilerden birine ait olduğunu kontrol eder — ama hangisi olduğunu öğrenemez.

Dikkat çekici yanı şu: listeye konan diğer kişilerden izin alınmaz, haberleri bile olmaz. İmzalayan kişi, zaten herkese açık olan anahtarlar arasından kendi anahtarını da içeren bir grup seçer ve imzayı ona göre üretir.

## Benzetme

Bir gazeteye gelen ihbar mektubu gibi. Mektubun altında isim yoktur; yerine "bu kurumun çalışanlarından biri" yazar ve yanında bunu kanıtlayan bir belge gelir. Gazete belgeye bakıp yazanın gerçekten içeriden biri olduğundan emin olur. Ama listedeki yüz kişiden hangisi olduğunu anlamasının hiçbir yolu yoktur.

## Nasıl çalışır?

İmza, seçilen bütün açık anahtarları kapsayan kapalı bir zincir gibi kurulur; adı da buradan gelir. Halkanın kapanabilmesi için tek bir noktada gerçek özel anahtar gerekir, ama tamamlanmış halkaya bakan biri o noktanın nerede olduğunu göremez.

Gizliliğin ölçüsü doğrudan halkanın büyüklüğüdür: üç anahtarlık bir halkada imzacı üç kişiden biridir, yüz anahtarlıkta yüz kişiden biri ([[anonymity-set|anonimlik kümesi]]).

Ödemelerde ek bir sorun daha çözülmek zorundadır: aynı parayı iki kez harcayan birini, kim olduğunu bilmeden yakalamak. Bunun için imzaya, imzacıyı açığa çıkarmadan aynı anahtarın ikinci kez kullanıldığını belli eden bir işaret eklenir. Gizlilik odaklı ağlar bu yöntemi kullanır ([[privacy-coin|gizlilik coin'leri]]).

## Dikkat

Halka imza [[multisig|çoklu imzanın]] tersidir. Çoklu imzada birden çok kişinin gerçekten imzalaması gerekir ve kimin imzaladığı herkese açıktır; halka imzada tek kişi imzalar ve kim olduğu gizlenir.

Gizliliği belirleyen şey imzanın matematiği değil, halkanın nasıl seçildiğidir. Halkaya konan diğer anahtarlar inandırıcı değilse — hepsi çoktan hareketsiz kalmışsa ya da belli bir kalıba uyuyorsa — gözlemci elemeye başlayabilir. Bu yüzden halkayı kullanıcı değil, cüzdan yazılımı kendi kurallarına göre seçer; [[stealth-address|stealth adresler]] gibi diğer araçlarla birlikte kullanılır.
