---
term: "Optimistic Rollup"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "Yayımladığı sonucu aksi ispatlanana kadar doğru sayan, bu yüzden bir itiraz süresine ihtiyaç duyan rollup türü."
related: [rollup, fraud-proof, challenge-period, zk-rollup, withdrawal-period, sequencer]
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

Adındaki "optimistic" iyimserliği anlatır: [[rollup|rollup]] işletmecisi ana zincire "işlemleri çalıştırdım, yeni durum budur" der ve zincir bunu kontrol etmeden kabul eder. Doğruluk, her sonucun baştan denetlenmesiyle değil, yanlış bir sonucun sonradan çürütülebilmesiyle sağlanır. Terim Türkçeye çevrilmeden kullanılır.

## Benzetme

Yüz kişilik bir sınıfın ödevleri. Hoca hepsini satır satır okumaz; teslim edileni doğru kabul edip notu verir. Ama notlar iki hafta askıda kalır ve bu sürede biri "şu ödevin şu satırına bak, orada kopya var" derse yalnızca o ödev açılıp incelenir. Sistemi ayakta tutan şey hocanın okuması değil, itiraz edebilecek birinin varlığıdır.

## Nasıl çalışır?

Sıralayıcı işlem yığınını ve yeni durumun özetini ana zincire gönderir. Bu özet hemen kesinleşmez; bir [[challenge-period|itiraz süresi]] boyunca askıda kalır.

Süre içinde biri sonucun yanlış olduğunu düşünürse teminat yatırıp bir [[fraud-proof|hile kanıtı]] sunar. Zincir bütün yığını baştan çalıştırmaz; tartışma tek bir yürütme adımına indirgenir ve yalnızca o adım ana zincirde çalıştırılır. Haksız çıkan tarafın teminatı yanar.

İtiraz gelmeden süre dolarsa sonuç kesinleşir ve o sonuca dayanan çıkışlar serbest kalır.

## Dikkat

Buradaki güven varsayımı açıktır: sistemin güvenliği için **en az bir dürüst tarafın** sonuçları izliyor, itirazı hazırlayabiliyor ve süre dolmadan ana zincire ulaştırabiliyor olması gerekir. Bu yüzden ağ tıkanıklığı ve sansür, optimistic tasarımda teorik değil doğrudan güvenlik meselesidir.

İtirazın kimlere açık olduğu da önemlidir: kanıt gönderme yetkisi seçilmiş birkaç adresle sınırlıysa, "herkes denetleyebilir" cümlesi kâğıt üstünde kalır.

Bedeli ise [[withdrawal-period|bekleme süresidir]]: iyimserlik, itiraz penceresi kapanana kadar sonuçların geri alınabilir olması demektir.
