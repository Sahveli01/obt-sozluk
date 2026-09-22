---
term: "Data Availability"
tr: "Veri Erişilebilirliği"
aliases: []
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Bir bloğun içindeki verinin gerçekten yayımlandığı ve isteyen herkesin indirip doğrulayabildiği güvencesi."
related: [data-availability-layer, blob-eip-4844, fraud-proof, light-client, rollup, danksharding]
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

Veri erişilebilirliği, bir bloğun ya da toplu işlem paketinin içindeki verinin gerçekten yayımlandığı ve isteyen herkesin onu indirip kendi başına doğrulayabildiği güvencesidir. Soru "veri bir yerde duruyor mu" değil, "isteyen alabiliyor mu" sorusudur.

Önemi şuradan gelir: veri ortada yoksa hiçbir denetim mekanizması çalışmaz. Bir [[rollup|rollup]] işleticisi "şu özet doğru" deyip arkasındaki işlem listesini kimseye vermezse, kimse yanlışı gösteren bir [[fraud-proof|hile ispatı]] üretemez, kimse kendi bakiyesini yeniden hesaplayamaz, kimse kendi çıkış işlemini hazırlayamaz. Sistem yanlış hâle gelmez, denetlenemez hâle gelir — pratikte sonuç aynı kapıya çıkar.

## Benzetme

Bir otobüs firmasının kamera kaydı gibi. Kaza olduğunda "kayıt var ama kimseye veremem" demek, kayıt hiç olmamasıyla aynı sonucu doğurur: olan biteni kimse kontrol edemez, herkes anlatılana inanmak zorunda kalır.

## Nasıl çalışır?

En basit yöntem veriyi doğrudan zincire yazmaktır: herkes indirir, mesele biter. Ama bu, blok alanının en pahalı kullanımıdır. [[blob-eip-4844|Blob]]'lar bu iş için ayrılmış, yürütmeye girmeyen ve kalıcı olması beklenmeyen daha ucuz bir alan açar.

Daha ekonomik yol örneklemedir. Veri, silinti kodlaması denen bir yöntemle genişletilir; öyle ki parçaların yeterince büyük bir kısmı elde varsa tamamı geri kurulabilir. [[light-client|Hafif istemciler]] rastgele seçtikleri küçük parçaları ister; istedikleri her parça geliyorsa verinin tamamının ortada olduğuna yüksek olasılıkla ikna olurlar. Kimse her şeyi indirmeden erişilebilirlik kontrol edilmiş olur; [[danksharding|danksharding]] tam da bu fikrin üstüne kurulur.

## Dikkat

Erişilebilirlik kalıcılık demek değildir. Beklenti verinin sonsuza dek saklanması değil, denetlemek isteyenlerin toplanmasına yetecek bir süre boyunca indirilebilir olmasıdır. Sürenin sonunda ağın veriyi düşürmesi tasarımın parçasıdır; arşiv isteyen ayrıca saklar.

İkinci karışıklık: veri erişilebilirliği verinin doğru olduğunu söylemez. Yayımlanan işlem listesi hatalı bir sonuç üretiyor olabilir; erişilebilirlik yalnızca bunun fark edilmesini mümkün kılar.
