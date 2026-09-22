---
term: "Attack Vector"
tr: "Saldırı Vektörü"
aliases: ["saldırı vektörü"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Saldırganın sisteme ulaşmak için kullandığı yol: hangi arayüzden, hangi bileşen ya da hangi kişi üzerinden girdiği."
related: [vulnerability, exploit, threat-model, defense-in-depth, supply-chain-attack]
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

Saldırı vektörü, saldırganın sisteme ulaşmak için kullandığı yoldur. Açık "neyin bozuk olduğunu", vektör "oraya nereden gelindiğini" anlatır. Aynı açığa birden çok yoldan varılabilir; aynı yoldan birden çok açığa ulaşılabilir.

## Benzetme

Bir okula dışarıdan birinin girebileceği yolları saymak gibi. Ana kapı var, bahçe duvarı var, servis girişi var — bir de en sık kullanılan yol: kartını okutan birinin arkasından kapıyı tutup geçmek. Güvenlik planını yalnızca ana kapıya bakarak yaparsan diğerleri açık kalır.

## Nasıl çalışır?

Bir kripto uygulamasında vektörler tek bir yerde toplanmaz:

- **Sözleşmenin kendisi.** Dışarıya açık her fonksiyon bir giriş noktasıdır ve onu kimin çağıracağını sen seçemezsin.
- **Ön yüz.** Kod kusursuz olsa da kullanıcıya gösterilen site ele geçirilebilir ([[front-end-attack-dns-hijack|ön yüz saldırısı]]).
- **Bağımlılıklar.** Kullandığın paket, derleyici ya da dağıtım hattı ([[supply-chain-attack|tedarik zinciri saldırısı]]).
- **İnsan.** Yetkili birini kandırmak, kodda hata aramaktan çoğu zaman daha ucuzdur ([[social-engineering|sosyal mühendislik]], [[phishing|oltalama]]).
- **Operasyon.** Sızan bir anahtar, açık unutulmuş bir yönetim arayüzü.

Bu yolların toplamına **saldırı yüzeyi** denir. Yüzeyi küçültmek, açık aramaktan daha kalıcı bir savunmadır: kaldırılan bir arayüz bir daha hata üretmez.

## Dikkat

Vektör ile açığı karıştırma: vektör yoldur, [[vulnerability|açık]] o yolun sonundaki zayıflık, [[exploit]] ise zayıflığı işleten yöntemdir. Bir vektörü kapatmak açığı kapatmaz, yalnızca o kapıyı kilitler.

En pahalı hata, savunmayı tek bir vektöre göre kurmaktır. Denetimden geçmiş bir sözleşme, sızmış bir dağıtım anahtarı ya da kopyalanmış bir arayüz üzerinden hâlâ boşaltılabilir. Hangi yolların hesaba katıldığını yazıya dökmek [[threat-model|tehdit modelinin]] işidir.
