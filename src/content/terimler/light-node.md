---
term: "Light Node"
tr: ""
aliases: ["hafif dugum", "hafif node"]
category: temeller
subcategory: "Ağ ve node"
level: orta
short: "Blokların tamamını indirmek yerine yalnızca blok başlıklarını tutan, gerisini kanıt isteyerek doğrulayan node."
related: [node, full-node, block-header, merkle-proof, light-client]
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

Light node, zincirin tamamını taşımaya gücü yetmeyen ya da buna ihtiyaç duymayan cihazlar için tasarlanmış hafif bir [[node|node]] türüdür: telefonlar, tarayıcı eklentileri, küçük cihazlar. Bütün blokları indirip her işlemi baştan hesaplamak yerine çok daha az veri tutar ve eksik kalan kısmı başkalarından ister. Türkçesi yerleşmediği için topluluk "light node" ya da [[light-client|light client]] demeyi sürdürür.

## Benzetme

Bir maçı doksan dakika boyunca stadyumda izlemekle, skoru birkaç kişiye sorup "kanıtla" demek arasındaki fark gibidir. İkincisi çok daha ucuzdur ama sorduğun kişilerin sana bir şey söylememe ihtimali hep vardır.

## Nasıl çalışır?

Light node yalnızca [[block-header|blok başlıklarını]] indirir. Başlık, o bloğun içindeki bütün işlemleri özetleyen kısa bir kayıttır; zinciri oluşturan bağ da başlıklardadır. Belirli bir işlemin gerçekten o blokta olduğunu öğrenmek gerektiğinde light node bir [[full-node|full node'dan]] [[merkle-proof|Merkle kanıtı]] ister. Bu kanıt, işlemin başlıktaki özete matematiksel olarak bağlandığını gösterir; birkaç satır veriyle doğrulanır ve sahtesi üretilemez.

## Dikkat

Light node bir şeyin *var olduğunu* kanıtla doğrular ama *olmadığını* aynı kesinlikle doğrulayamaz: bağlandığı node ondan bir işlemi gizleyebilir. Ayrıca hangi adresleri sorduğunu karşı tarafa söylemiş olur; bu da mahremiyet açısından bedava değildir. Güvenlik ve gizlilik konusunda en güçlü seçenek kendi full node'unu çalıştırmaktır.
