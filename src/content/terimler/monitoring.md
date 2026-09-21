---
term: "Monitoring"
tr: "İzleme"
aliases: ["sistem izleme", "izleme"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Çalışan bir sistemin sağlığını sürekli ölçmek ve bir şey bozulduğunda insanı haberdar etmek."
related: [logging, production, latency, ci-cd, deployment]
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

Monitoring, çalışan bir sistemin sağlığını sürekli ölçmek ve bir şey bozulduğunda insanı haberdar etmektir. [[logging|Log kaydı]] ham malzemeyi üretir; monitoring o malzemenin ve ölçümlerin üstünde durup iki soruya cevap verir: "şu an durum ne" ve "birinin buna bakması gerekiyor mu".

Ölçülen şeyler genelde birkaç başlıkta toplanır: istek sayısı, hata oranı, cevap süresi ([[latency|gecikme]]) ve kaynak kullanımı (işlemci, bellek, disk). Bunlar zaman içinde saklanır, grafiğe dökülür ve eşiklerle karşılaştırılır.

## Benzetme

Barajın su seviyesi ölçeri gibi. Kimse suyun yüksekliğini merak ettiği için ölçmez; ölçüm sürekli yapılır çünkü kritik kota yaklaşıldığında sirenin çalması ve kapakların zamanında açılması gerekir. Değerli olan sayı değil, sayının eşiği aştığı andır.

## Nasıl çalışır?

Üç parça vardır.

**Toplama.** Uygulama ve sunucular düzenli aralıklarla ölçüm yayınlar ya da bir toplayıcı onlardan bu ölçümleri çeker.

**Saklama ve gösterme.** Ölçümler zaman serisi olarak tutulur ve panolarda grafiğe dönüşür. Buradaki asıl fayda anlık değer değil, karşılaştırmadır: bugünkü eğri geçen haftakine benziyor mu, yeni [[deployment|dağıtımdan]] sonra bir şey değişti mi?

**Alarm.** Bir kural eşiği aştığında bildirim gider — "son beş dakikadaki hata oranı belirlenen sınırın üstünde" gibi. İyi alarm nadir ve eyleme çağırandır. Sık çalan, çalınca yapılacak bir şey olmayan alarm bir süre sonra susturulur ya da görmezden gelinir; asıl tehlike budur.

## Dikkat

Monitoring yalnızca önceden sorduğun soruları cevaplar. "Şunu ölç, şu eşiği aşarsa haber ver" dediklerini görürsün; hiç aklına gelmemiş bir arıza ölçmediğin için görünmez kalır. Bu yüzden her olaydan sonra "bunu neden fark edemedik" sorusuna cevap veren yeni bir ölçüm eklenir.

Bir de ölçmenin kendisi bedava değildir: her ölçüm saklama alanı tutar, çok ayrıntılı ölçüm uygulamayı yavaşlatabilir. Ölçü, her şeyi toplamak değil, bozulduğunda seni ilk uyaracak birkaç göstergeyi doğru seçmektir.
