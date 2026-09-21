---
term: "Faucet"
tr: ""
aliases: ["test musluğu", "faucet servisi"]
category: temeller
subcategory: "Ağ ve node"
level: baslangic
short: "Test ağlarında küçük miktarda değersiz token'ı ücretsiz dağıtan servis."
related: [testnet, devnet, gas, transaction, deployment]
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

Faucet, bir [[testnet|testnet]] üzerinde adresine küçük miktarda test token'ı gönderen ücretsiz servistir. Kelime anlamı "musluk"tur ama kripto dünyasında bu haliyle kullanılır, Türkçeye çevrilmez.

Neden gerekir? Test ağında bile işlem göndermek için [[gas|gas]] ücreti ödemen gerekir. Ücret gerçek para değildir ama sıfır bakiyeyle hiçbir [[transaction|işlem]] gönderemezsin. Faucet tam olarak bu ilk adımı çözer: adresini yapıştırırsın, birkaç saniye içinde başlamana yetecek kadar token gelir.

## Benzetme

Parkın girişindeki sebil gibidir. Su bedavadır ve herkese açıktır ama maşrapayladır; kovayla gelip depo doldurmak isteyenler için değildir.

## Dikkat

Faucet'ler kötüye kullanılmaya açık olduğu için hemen hepsi bir sınır koyar: adres başına belirli bir miktar, iki talep arasında bekleme süresi, bazen bir hesapla giriş ya da küçük bir doğrulama. Bunları aşmaya çalışmak yerine ihtiyacın kadarını al.

En önemlisi güvenlik: bir faucet senden asla [[seed-phrase|seed phrase]] ya da özel anahtar istemez, cüzdanına "onay" imzalatarak token dağıtmaz. İsteyen varsa o bir faucet değil, [[phishing|oltalama]] girişimidir. Faucet'e yalnızca herkese açık adresini verirsin.
