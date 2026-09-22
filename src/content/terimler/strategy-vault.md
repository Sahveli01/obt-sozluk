---
term: "Strategy (Vault)"
tr: "Strateji"
aliases: []
category: defi
subcategory: "Getiri"
level: orta
short: "Bir kasaya yatırılan varlıkla ne yapılacağını tanımlayan, çoğu tasarımda sonradan değiştirilebilen bileşen."
related: [vault, yield-aggregator, access-control, timelock, smart-contract-audit, multisig]
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

Strateji, bir [[vault|kasaya]] yatırılan varlıkla ne yapılacağını tanımlayan bileşendir. Kasa muhasebeyi tutar — kim ne kadar yatırdı, pay token'ı nasıl hesaplanır, çekimde ne verilir. Strateji ise işi yapar: parayı hangi protokole koyacağını, ödülü ne zaman toplayıp nasıl geri yatıracağını, çıkış istendiğinde pozisyonu nasıl çözeceğini bilir.

Ayrımın sebebi şudur: yöntem zamanla değişir, muhasebe değişmemelidir. İkisi ayrı tutulunca kasanın kuralları sabit kalırken içerideki yöntem güncellenebilir.

## Nasıl çalışır?

Kasa ile strateji ayrı sözleşmelerdir. Kasa fonun büyük kısmını stratejiye gönderir, küçük bir kısmını hızlı çekimler için elinde tutabilir. Strateji kazancı ve zararı kasaya bildirir; pay token'ının değeri bu bildirimlerle değişir. Bir kasa birden çok stratejiye pay dağıtabilir, o zaman hangisine ne kadar gideceği ayrı bir karardır.

Stratejiyi değiştirme ya da yenisini ekleme yetkisi [[access-control|erişim denetimiyle]] korunur. Dikkatli tasarımlarda bu değişiklik anında uygulanmaz: önce ilan edilir, bir [[timelock|zaman kilidi]] dolduktan sonra yürürlüğe girer. Böylece yeni yöntemi istemeyen kullanıcı, değişiklik gerçekleşmeden çıkabilir.

## Dikkat

Kasadaki paranın nereye gideceğine strateji yetkisi karar verir. Bu yetki tek bir adreste duruyorsa kullanıcı aslında kasaya değil o adrese güvenmiştir: yetkili adres, parayı bugün bir protokolden çekip yarın bambaşka bir yere koyabilir.

Değiştirilebilir bir stratejide "sözleşmeyi okudum" demek de yetmez, çünkü okuduğun strateji yarın başkası olabilir. Sorulacak sorular şunlar: yetki kimde, [[multisig|çoklu imzada]] mı, değişiklik gecikmeli mi uygulanıyor, strateji hangi protokollere dokunabiliyor. [[smart-contract-audit|Denetim]] raporları da belirli bir strateji sürümünü kapsar; strateji değişince rapor değişen kısım için bir şey söylemez.

Birden çok kaynağı gezen üst katmanda ([[yield-aggregator|getiri toplayıcısı]]) aynı soru bir kat daha yukarıda tekrar sorulur.
