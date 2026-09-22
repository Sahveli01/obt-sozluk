---
term: "HTTPS"
tr: ""
aliases: []
category: web
subcategory: "İnternet temelleri"
level: orta
short: "HTTP mesajlarının TLS ile kurulmuş şifreli bir kanal içinde taşınması; içeriği gizler, sitenin dürüst olduğunu garanti etmez."
related: [http, ssl-tls, browser, phishing, rpc-node]
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

HTTPS, [[http|HTTP]] mesajlarının [[ssl-tls|TLS]] ile kurulmuş şifreli bir kanal içinde taşınmasıdır. Protokolün dili değişmez — aynı istekler, aynı cevaplar — yalnızca hat üstünde düz metin yerine şifreli veri akar.

## Nasıl çalışır?

Bağlantı kurulurken [[server|sunucu]], yani istenen sayfayı gönderen uzak bilgisayar, bir sertifika sunar. [[browser|Tarayıcı]] üç şeye bakar: sertifika tanıdığı bir makam tarafından imzalanmış mı, süresi geçmiş mi ve adres çubuğundaki alan adıyla eşleşiyor mu. Üçü de tamamsa taraflar yalnızca o bağlantıya özel bir anahtarda anlaşır ve bütün trafik o anahtarla şifrelenir.

Böylece üç şey elde edilir: aradaki kimse içeriği okuyamaz, fark edilmeden değiştiremez ve karşı tarafın o alan adına ait olduğu doğrulanmış olur.

## Dikkat

HTTPS "bu site dürüst" demez; "bu bağlantı şifreli ve karşı taraf bu alan adının sahibi" der. [[phishing|Oltalama]] siteleri de pekâlâ sertifika alabilir. Adres çubuğundaki kilit simgesi sitenin niyeti hakkında hiçbir şey söylemez; bakılacak yer kilit değil, alan adının kendisidir.

Kripto tarafında bu ayrım daha da önemlidir. Cüzdanının ya da bir [[dapp|dApp]]'in zincirle konuşması, bir [[rpc-node|node]]'a gönderilen isteklerle olur ve bu istekler de HTTPS üstünden gider. Sertifika doğrulanmazsa araya giren taraf sana yanlış bir bakiye gösterebilir ya da imzalaman istenen işlemin içeriğini değiştirebilir.
