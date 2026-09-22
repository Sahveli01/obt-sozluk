---
term: "Stateless Client"
tr: ""
aliases: []
category: olceklenme
subcategory: "Diğer yaklaşımlar"
level: ileri
short: "Zincirin durumunu diskinde tutmadan, her blokla birlikte gelen kanıtlarla blokları doğrulayabilen istemci."
related: [state-growth, state-expiry, verkle-tree, merkle-proof, light-client, full-node]
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

Bir bloğu doğrulamak için normalde durumun tamamına ihtiyaç vardır: sözleşmenin o anki değerleri, gönderenin bakiyesi, hepsi diskte durur. Stateless client bu şartı kaldırır. Bloğu doğrulayan düğüm durumu hiç saklamaz; bloğun dokunduğu durum parçaları ve bu parçaların gerçekten o duruma ait olduğunu gösteren kanıtlar bloğun yanında gelir.

Türkçede "durumsuz istemci" denildiği olur, ama yerleşik bir karşılık değildir.

## Nasıl çalışır?

Bloğu üreten taraf, bloğun okuduğu ve yazdığı her parçayı bir tanık paketine (witness) koyar. Doğrulayan taraf bu paketi bir önceki bloğun durum köküyle karşılaştırır: kanıtlar köke uyuyorsa parçalar gerçektir, uymuyorsa blok geçersizdir. Ardından işlemleri bu parçalar üzerinde yürütür ve çıkan yeni kökü bloğun iddia ettiği kökle karşılaştırır.

Bu tasarımın maliyeti, [[state-growth|durum büyümesinin]] diskten bant genişliğine taşınmasıdır: tanık paketi her blokla birlikte ağdan geçer. Bu yüzden durumsuz tasarımlar, aynı kanıtı çok daha küçük üretebilen ağaç yapılarına — örneğin [[verkle-tree|Verkle ağacına]] — bağlıdır. Ara bir biçim olan "zayıf durumsuzluk"ta ise durumu yalnızca blok üretenler tutar, doğrulayanlar tutmaz.

## Dikkat

Stateless client ile [[light-client|hafif istemci]] karıştırılır. Hafif istemci bloğu yürütmez; başlıkları takip eder ve tek tek verilerin doğruluğunu kanıtlarla sorar, gerisi için ağa güvenir. Durumsuz istemci ise bloğun tamamını yürütür ve tam doğrulama yapar — sadece durumu saklamaz. Biri doğrulamayı azaltır, diğeri doğrulamanın deposunu kaldırır.
