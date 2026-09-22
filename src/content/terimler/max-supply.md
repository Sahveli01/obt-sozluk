---
term: "Max Supply"
tr: "Maksimum arz"
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: baslangic
short: "Protokol kurallarının izin verdiği üst sınır: bir token'dan en fazla kaç tane var olabileceği. Her token'da böyle bir sınır yoktur."
related: [total-supply, circulating-supply, halving, emission-schedule, token-inflation]
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

Max supply, bir token'dan **en fazla** kaç tane var olabileceğini söyleyen üst sınırdır. Var olan arz zaman içinde bu sınıra doğru büyür; sınıra ulaşıldığında yeni basım durur.

Her token'ın max supply'ı yoktur. Bazı ağlarda basım süresiz devam eder ve bu alan "sınırsız" olarak geçer. Sınır koymak ya da koymamak bir tasarım tercihidir, kendi başına bir kalite işareti değil.

## Benzetme

Bir binanın imar izninde yazan kat sınırı gibi. İzin sekiz kat diyorsa dokuzuncu katı çıkamazsın — bina şu anda beş katlıyken bile. "Kaç kat çıkılabilir" ile "şu anda kaç kat var" ayrı sorulardır; birincisinin cevabı izin belgesinde, ikincisininki inşaatın kendisindedir.

## Dikkat

Sınırın kodda yazılı olması, değişmeyeceği anlamına gelmez. Token sözleşmesi [[upgradeable-contract|yükseltilebilir]] bir yapıdaysa ya da bir adres sınırsız [[mint|basım]] yetkisi taşıyorsa üst sınır kâğıt üstünde kalır. Bakılacak yer duyuru metni değil, sözleşmenin basım fonksiyonu ve o fonksiyonu kimin çağırabildiğidir.

Karıştırma: max supply izin verilen tavan, [[total-supply|total supply]] şu an var olan, [[circulating-supply|circulating supply]] ise bunun serbestçe el değiştirebilen kısmıdır.
