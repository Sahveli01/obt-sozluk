---
term: "State Expiry"
tr: ""
aliases: []
category: olceklenme
subcategory: "Diğer yaklaşımlar"
level: ileri
short: "Uzun süre dokunulmayan durum parçalarının etkin kümeden çıkarılması ve gerektiğinde bir kanıtla geri getirilmesi önerisi."
related: [state-growth, stateless-client, storage-rent, merkle-proof, pruning, state-blockchain]
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

State expiry, [[state-growth|durum büyümesine]] protokol düzeyinde verilen bir cevaptır. Fikir şudur: uzun süre dokunulmayan durum parçaları node'ların aktif olarak taşıdığı kümeden çıkarılsın, ama sahibinden alınmasın. Sahibi geri dönerse, o parçanın hâlâ kendisine ait olduğunu bir kanıtla gösterip yeniden etkin hâle getirebilsin.

Yerleşik bir Türkçe karşılığı yok; kaynaklarda İngilizce adıyla geçer.

## Benzetme

Bir spor salonunun dolapları gibi. Aylardır açılmayan dolaplar boşaltılıp arka depoya kaldırılır; eşyalar çöpe atılmaz, sahibi makbuzuyla gelip geri alabilir. Salon bu sayede yeni gelenlere yer açar ve görevlinin her gün ilgilenmesi gereken dolap sayısı sabit kalır.

## Nasıl çalışır?

Durum zaman dilimlerine ayrılır. Bir dilim boyunca hiç okunmayan ve yazılmayan parçalar "süresi dolmuş" sayılır: node'lar onların içeriğini tutmayı bırakır, yalnızca özetlerini saklar.

O parçaya yeniden ihtiyaç duyulduğunda, kullanıcı eski içeriğin saklanan özetle tutarlı olduğunu gösteren bir [[merkle-proof|Merkle kanıtı]] sunar ve parça yeniden canlandırılır. Node'un tuttuğu yük böylece geçmişin tamamıyla değil, son dönemde gerçekten kullanılan durumla orantılı hâle gelir.

## Dikkat

Zorluk kanıtın nereden bulunacağındadır. Sıradan bir kullanıcı yıllar önceki bir hesabın kanıtını kendisi üretemez; bu kanıtları saklayıp dağıtan hizmetlerin var olması gerekir. Böyle bir hizmet yoksa, "param kayboldu" hissi teknik olarak yanlış ama pratikte gerçek bir sorun hâline gelir.

Yazıldığı tarih itibarıyla state expiry, üzerinde uzlaşılmış tek bir mekanizma değil, ayrıntıları tartışılan bir öneri ailesidir. Aynı sorunu durumu saklama yükünü tamamen kaldırarak çözmeye çalışan [[stateless-client|durumsuz istemci]] yaklaşımıyla sık sık birlikte konuşulur.
