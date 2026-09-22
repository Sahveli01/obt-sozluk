---
term: "Move"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "Dijital varlıkları dilin tip sistemine gömülü kaynaklar olarak temsil eden, zincir üstü program yazmak için tasarlanmış dil."
related: [resource-oriented-programming, resource-move, abilities-move, movevm, rust, smart-contract]
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

Move, zincir üstünde çalışan programlar yazmak için tasarlanmış bir dildir. Sözdizimi [[rust|Rust]]'tan esinlenir, ama onu ayırt eden şey tip sistemidir: token, NFT ya da bir oyun eşyası gibi varlıklar sıradan bir sayı olarak değil, kopyalanamayan ve sessizce yok edilemeyen "kaynak" tipleri olarak temsil edilir.

Fark şurada görünür. Bakiyeleri bir tabloda sayı olarak tutan bir [[smart-contract|akıllı sözleşmede]], bir yerden düşüp başka bir yere eklemeyi unutmak dilin umursamadığı bir mantık hatasıdır. Move'da varlığı taşımadan bir fonksiyondan çıkmak ya da onu iki kez kullanmak derleme hatasıdır; derleyici izin vermez.

## Nasıl çalışır?

Move kodu bayt koda derlenir ve bir [[movevm|Move sanal makinesi]] tarafından çalıştırılır. Bayt kod çalıştırılmadan önce bir doğrulayıcıdan geçer: kaynakların kopyalanmadığı ve düşürülmediği gibi kurallar, kodun çalıştığı anda değil yüklendiği anda kontrol edilir.

Dili farklı zincirler kendi uyarlamalarıyla kullanır ([[aptos|Aptos]] ve [[sui|Sui]] gibi); varlıkların nasıl saklandığı ve adreslendiği konusunda aralarında farklar vardır, dolayısıyla bir zincir için yazılmış kod diğerine olduğu gibi taşınmaz.

## Dikkat

Buradaki yaklaşımın adı [[resource-oriented-programming|kaynak yönelimli programlama]]dır ve ayrıntısı o maddede anlatılıyor; Move'un [[resource-move|kaynak]] ve [[abilities-move|yetenek]] kavramlarının da kendi maddeleri var. Bu sayfada bilmen gereken, dilin varlık güvenliğini kütüphaneye ya da programcının dikkatine değil, derleyiciye yıktığıdır.
