---
term: "Threshold Signature (TSS)"
tr: "Eşik imza"
aliases: ["eşik imza"]
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: ileri
short: "Belirlenmiş sayıda katılımcının, gizli anahtarı hiçbir yerde birleştirmeden birlikte tek bir geçerli imza üretmesi."
related: [multi-party-computation-mpc, shamirs-secret-sharing, mpc-wallet, multisig, digital-signature]
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

Eşik imza, önceden belirlenmiş sayıda katılımcının birlikte tek bir geçerli [[digital-signature|imza]] üretmesidir. Kural "n katılımcıdan k tanesi" biçimindedir: k kişi bir araya gelirse imza çıkar, k-1 kişi hiçbir şey üretemez.

Ayırt edici nokta şudur: **özel anahtar hiçbir aşamada bir yerde bütün hâlde bulunmaz.** Katılımcıların elinde yalnızca paylar vardır; imza bu payların ortak hesabından doğar ve dışarı çıkan tek şey imzanın kendisidir.

## Nasıl çalışır?

Anahtar en baştan paylı olarak üretilir; ortada "sonradan bölünmüş" bir anahtar yoktur. İmza gerektiğinde katılımcılar bir protokol yürütür: her biri kendi payıyla bir hesap yapar, ara sonuçları paylaşır, kimse kendi payını açığa vurmaz. Sonunda sıradan bir imza ortaya çıkar. Bunun genel çerçevesi [[multi-party-computation-mpc|çok taraflı hesaplamadır]].

Zincir açısından en önemli sonuç şu: zincir tek bir imza görür. İşlem, tek anahtarlı sıradan bir hesabın işleminden ayırt edilemez.

Paylar belirli aralıklarla yenilenebilir. Böylece farklı zamanlarda çalınmış iki eski pay bir araya geldiğinde işe yaramaz.

## Dikkat

[[shamirs-secret-sharing|Shamir gizli paylaşımıyla]] karıştırma; fark tam olarak şuradadır. Shamir'de paylar bir araya gelir ve **sır yeniden kurulur**; o an, anahtarın bütün hâlde bir bilgisayarın belleğinde durduğu andır. Eşik imzada sır hiç kurulmaz, paylar yalnızca imzayı üretmek için birlikte hesap yapar.

[[multisig|Çoklu imzadan]] farkı ise kuralın nerede durduğudur. Çoklu imzada kural zincirdedir, zincir birden çok imza görür, kimin ne zaman onayladığını herkes okur. Eşik imzada kural zincirin dışındadır, zincir tek imza görür: ücret ve gizlilik açısından kazanç, denetlenebilirlik açısından kayıp.

Güvenliği kullanılan protokolün ve onu yazan kodun doğruluğuna bağlıdır; buradaki hatalar kullanıcıya görünmez. Pratikte karşına çıkan hâli [[mpc-wallet|MPC cüzdanlardır]].
