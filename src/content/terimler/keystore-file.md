---
term: "Keystore File"
tr: ""
aliases: ["keystore", "keystore dosyası"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: orta
short: "Özel anahtarı bir parolayla şifreleyip diskte tutan dosya biçimi; dosya da parola da tek başına işe yaramaz."
related: [private-key, key-derivation, encryption, key-management, software-wallet]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Keystore dosyası, bir [[private-key|özel anahtarın]] parolayla şifrelenmiş hâlini tutan dosyadır. Cüzdan yazılımları ve düğüm istemcileri anahtarı diskte çıplak bırakmamak için bu biçimi kullanır: imza atılacağı zaman parola sorulur, anahtar yalnızca o an çözülür.

Yerleşik bir Türkçe karşılığı yok; metinlerde "keystore dosyası" diye geçiyor.

## Nasıl çalışır?

Dosyanın içinde anahtarın şifreli hâli, [[encryption|şifrelemede]] kullanılan ayarlar ve rastgele bir tuz değeri ([[salt|salt]]) bulunur. Parola doğrudan şifreleme anahtarı olarak kullanılmaz; kasıtlı olarak yavaş çalışan bir [[key-derivation|anahtar türetme]] fonksiyonundan geçirilir. Bu yavaşlık, dosyayı ele geçiren birinin parolayı deneme yanılmayla bulmasını pahalı hâle getirir. Tuz da aynı parolanın her dosyada farklı sonuç vermesini sağlar, böylece hazır listelerle toplu saldırı zorlaşır.

Ortaya iki parça çıkar: dosyanın kendisi ve parola. Biri olmadan diğeri hiçbir işe yaramaz. Yedekleme de bu yüzden ikiye bölünür; dosyayı kaybedersen parolan, parolayı unutursan dosyan işe yaramaz hâle gelir.

## Dikkat

Keystore dosyası genellikle tek bir anahtarı korur. [[seed-phrase|Seed phrase]] gibi bütün bir hesap ağacını geri getirmez; iki cüzdandaki anahtarların ikisini birden kurtarmaz. İkisini birbirinin yerine koymak, yedek aldığını sanıp almamakla sonuçlanır.

Dosyanın güvenliği de en fazla parolanın gücü kadardır. Yavaşlatma ne kadar iyi ayarlanmış olursa olsun, zayıf bir parola eninde sonunda bulunur; dosyayı herkese açık bir yere koymak bu süreyi kısaltır.
