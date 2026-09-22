---
term: "Bootnode"
tr: ""
aliases: []
category: konsensus
subcategory: "Ağ katmanı"
level: orta
short: "Ağa yeni katılan bir düğümün ilk komşu adreslerini aldığı, adresi istemci yazılımına gömülü giriş noktası."
related: [peer-discovery, node, gossip-protocol, peer-to-peer-p2p, eclipse-attack]
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

Ağa katılmak için başka [[node|node]]'lara bağlanman gerekir; ama kime bağlanacağını öğrenmek için de ağa bağlı olman gerekir. Bootnode bu kısır döngüyü kıran çıkış noktasıdır: adresi istemci yazılımının içine gömülü, sürekli açık tutulan ve tek görevi tanıştırmak olan bir node.

"Önyükleme düğümü" gibi çeviriler tutmadı; hem belgelerde hem konuşmada bootnode deniyor.

## Benzetme

Okulun ilk günü kapıya asılan sınıf listesi gibi. Panoya bakarsın, hangi sınıfta olduğunu ve kimlerle aynı sınıfa düştüğünü öğrenirsin. Pano sana ders anlatmaz, yoklama almaz, sınav yapmaz; yıl boyunca bir daha ona bakmazsın. Tek işi ilk gün seni doğru kapıya yollamaktır.

## Nasıl çalışır?

Yeni kurulan bir node açıldığında gömülü listedeki bootnode'lardan birine bağlanır ve ondan bir komşu adresi kümesi ister ([[peer-discovery|komşu bulma]]). O adreslere bağlandıktan sonra bootnode'a ihtiyacı kalmaz: bundan sonra adresleri komşularından toplar ve kendi defterini kurar. Aynı node ikinci açılışında bootnode'a hiç uğramayabilir, çünkü önce önceki oturumdan kalan adresleri dener.

Bootnode blok sunmaz, işlem yaymaz, zincirin kendisini taşımaz. Ağın veri trafiği onun üzerinden akmaz; yalnızca tanışma mesajlarına cevap verir.

## Dikkat

Bootnode'lar ağın merkezî bir parçası değildir. Hepsi birden kapansa çalışmakta olan node'lar bundan etkilenmez; yalnızca sıfırdan kurulan node'ların ilk teması zorlaşır. İsteyen kendi bootnode'unu çalıştırabilir, listesine istediği adresi ekleyebilir.

Yine de ilk bağlantı anı bir bağımlılık noktasıdır. Bir node'un göreceği ilk komşu kümesini belirleyebilen taraf, o node'un ağ hakkında bildiği her şeyi belirleyebilir; bunun adı [[eclipse-attack|eclipse saldırısıdır]] ve nasıl kurulduğu orada anlatılıyor. Pratik karşılığı şudur: bootnode listesini kaynağını bilmediğin bir yerden kopyalayıp yapıştırma, istemcinin kendi varsayılanlarıyla başla.
