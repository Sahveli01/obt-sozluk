---
term: "Authorization"
tr: "Yetkilendirme"
aliases: ["authz"]
category: web
subcategory: "Backend"
level: orta
short: "Kimliği belli olan birinin hangi işlemi yapmaya ve hangi veriye erişmeye izinli olduğuna karar verme işi."
related: [authentication, access-control, role-based-access-control-rbac, jwt, api]
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

Yetkilendirme, "neye iznin var" sorusunun cevabıdır. Kimin konuştuğu [[authentication|kimlik doğrulamayla]] çoktan belirlenmiştir; bu aşamada karar verilen şey, o kişinin istediği işlemi yapıp yapamayacağıdır. Aynı kullanıcı bir kaydı okuyabilir ama silemeyebilir; kendi profilini düzenleyebilir ama başkasınınkini düzenleyemez.

## Benzetme

Bir kurumdaki imza yetkisi gibi. Binaya giren herkesin kim olduğu bellidir, kapıda bu iş bitmiştir. Ama ödeme talimatının altına kimin imza atabileceği bambaşka bir listede yazar ve o liste kimlikten bağımsız tutulur. Yetkilendirme, o listedir.

## Nasıl çalışır?

En yaygın yöntem rollerdir: kullanıcıya bir ya da birkaç rol verilir, her rolün neleri yapabildiği ayrıca tanımlanır ([[role-based-access-control-rbac|RBAC]]). Karar her istekte yeniden verilir — arayüzde düğmeyi gizlemek yetmez, çünkü aynı istek elle de gönderilebilir.

En sık görülen açık, kaydın kime ait olduğunun hiç kontrol edilmemesidir: adresteki numarayı değiştiren kullanıcı başkasının kaydını açar. [[api|API]]'nin her uç noktası bu kontrolü kendi başına yapmak zorundadır.

Aynı ayrım zincirde de vardır. İşlemi kimin gönderdiği imzayla bellidir; o adresin o fonksiyonu çağırma izni olup olmadığına ise sözleşmedeki [[access-control|erişim kontrolü]] karar verir.

## Dikkat

İki terim aynı kısaltmayı paylaştığı için sürekli karışır. Ayırt etmenin kolay yolu şudur: biri kişiyi saptar, diğeri o kişinin önünde hangi kapıların açılacağını belirler. Kimliği doğrulanmış olmak hiçbir şeye izinli olmak anlamına gelmez; yetkisi olmayan bir kullanıcı, kim olduğu kesin bilinse bile reddedilir.
