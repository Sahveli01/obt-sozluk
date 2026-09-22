---
term: "Light Client"
tr: "Hafif istemci"
aliases: ["hafif istemci"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Zincirin tamamını indirmeden, blok başlıklarını ve konsensüs imzalarını doğrulayarak zinciri takip eden istemci."
related: [light-node, block-header, merkle-proof, finality, cross-chain-messaging, inter-blockchain-communication-ibc]
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

Hafif istemci, bir zinciri bütün bloklarını indirip yeniden çalıştırmadan takip eden yazılımdır. Yalnızca [[block-header|blok başlıklarını]] alır; başlık, o bloktaki durumun özetini ve konsensüsün imzalarını taşır. Bir işlemin gerçekten o blokta olduğunu öğrenmek gerektiğinde tüm veriyi değil kısa bir [[merkle-proof|Merkle kanıtı]] ister ve kanıtı başlıktaki özetle karşılaştırır.

Ayırt edici özelliği şudur: bilgiyi veren tarafa güvenmez, verdiğini doğrular.

## Benzetme

Kasiyerin banknotu kabul ederken yaptığı kontrol gibi. Parayı basan kuruma gidip kaydı sormaz; elindeki tek kâğıdın filigranına ve şeridine bakar. Taklit edilmesi zor küçük bir işareti yerinde denetlemek, bütün kaydı görmenin yerini tutar.

## Nasıl çalışır?

İstemci başlıkları sırayla takip eder ve her başlığın yetkili doğrulayıcılar tarafından imzalandığını kontrol eder; hisse ispatlı ağlarda doğrulayıcı kümesinin zaman içinde nasıl değiştiğini de izlemesi gerekir. Bir işlemi doğrulamak için gereken veri böylece kilobaytlar mertebesine iner ve telefon gibi sınırlı cihazlarda da çalışabilir.

Köprülerdeki rolü buradan doğar: kaynak zincirin hafif istemcisi, hedef zincirde bir **sözleşme** olarak çalıştırılabilir. O zaman "karşı zincirde şu oldu" hükmünü dışarıdan bir imzacı kümesi değil, karşı zincirin konsensüsünü doğrulayan kod verir. Bu, [[cross-chain-messaging|zincirler arası mesajlaşma]]nın en az güven gerektiren yoludur.

Bedeli hafife alınmamalı: zincir üstünde imza doğrulamak pahalıdır, iki zincirin [[finality|kesinlik]] modeli uyumlu olmalıdır ve kaynak zincir konsensüsünü değiştirdiğinde istemcinin de güncellenmesi gerekir. [[inter-blockchain-communication-ibc|IBC]] bu yaklaşımın standartlaşmış örneğidir.

## Dikkat

[[light-node|Hafif node]] ile aynı fikirdir; "client" ve "node" adlandırma farkından ibarettir.

Hafif istemci her şeyi doğrulamaz: bloğun arkasındaki verinin gerçekten yayımlandığını kendi başına göremez, bunu varsayar. Veri saklanıyorsa doğru imzalanmış bir başlık bile eksik bir tabloyu gösterir ([[data-availability|veri bulunabilirliği]]).
