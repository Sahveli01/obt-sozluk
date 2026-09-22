---
term: "SSL/TLS"
tr: ""
aliases: ["ssl", "tls"]
category: web
subcategory: "İnternet temelleri"
level: orta
short: "İki taraf arasında şifreli ve kimliği doğrulanmış bir kanal kuran protokol; SSL adı bırakılmış eski sürümlerden kalmadır."
related: [https, public-key-cryptography, digital-signature, symmetric-encryption, browser]
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

TLS, iki taraf arasında şifreli ve karşı tarafın kimliği doğrulanmış bir kanal kuran protokoldür. [[https|HTTPS]]'in sonundaki "S" budur; e-posta ve veritabanı bağlantıları gibi başka protokoller de aynı kanalı kullanır.

SSL ise aynı işi yapan, TLS'ten önce gelen eski protokolün adıdır. Sürümlerinin tamamı güvensiz bulunup bırakıldı, ama ad alışkanlıktan kaldı: bugün "SSL sertifikası" denen şey aslında bir TLS sertifikasıdır.

## Benzetme

Sertifika bir kimlik kartı gibidir. Kartı sen basmazsın; tanınan bir makam basar ve üstüne kendi mührünü koyar. Kartı kontrol eden görevli seni tanımaz, mührü tanır. [[browser|Tarayıcının]] içinde de "mührünü tanıdığım makamlar" listesi hazır gelir ve sertifika bu listeye karşı doğrulanır.

## Nasıl çalışır?

El sıkışma denen kısa bir başlangıç konuşmasıyla başlar. Sunucu sertifikasını gönderir; sertifika bir alan adı ile bir açık anahtarı birbirine bağlayan ve bir sertifika otoritesi tarafından imzalanmış belgedir ([[digital-signature|dijital imza]]). İstemci imzayı doğrular, ardından [[public-key-cryptography|açık anahtarlı şifreleme]] kullanılarak yalnızca o oturuma özel bir anahtarda anlaşılır. Kalan trafik, çok daha hızlı çalışan [[symmetric-encryption|simetrik şifrelemeyle]] bu anahtar üstünden korunur.

## Dikkat

Sertifika, sunucunun o alan adına ait olduğunu söyler; sitenin ne yaptığı hakkında hiçbir şey söylemez.

Sertifika otoriteleri de birer güven noktasıdır: yanlışlıkla ya da baskı altında sahte sertifika basan bir otorite, bütün zincirin zayıf halkası hâline gelir. Bu yüzden tarayıcılar kök otorite listesini sıkı tutar ve hatalı basılmış sertifikaları geçersiz kılacak mekanizmalar işletir.
