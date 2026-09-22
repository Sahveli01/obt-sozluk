---
term: "Key Derivation"
tr: "Anahtar türetme"
aliases: ["anahtar türetme"]
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Tek bir gizli değerden ya da paroladan, kullanılabilir kriptografik anahtarlar üretme işlemi."
related: [hd-wallet-bip-32, bip-39, keystore-file, salt, private-key, entropy]
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

Anahtar türetme, elindeki bir sırdan kullanıma hazır anahtarlar üretmektir. İki ayrı ihtiyaca cevap verir ve bu ikisi sık karıştırılır: **tek bir kökten çok sayıda anahtar üretmek** ve **bir parolayı anahtara çevirmek**.

## Nasıl çalışır?

**Bir kökten çok anahtar.** Yüzlerce hesabın yüzlerce ayrı yedeğini tutmak kullanılabilir bir şey değildir. Onun yerine tek bir gizli değer saklanır ve her anahtar bu değerden, bir sıra numarasıyla birlikte hesaplanarak üretilir. Cüzdanlar böyle çalışır: [[bip-39|BIP-39]] kelimelerinden bir kök değer çıkar, [[hd-wallet-bip-32|HD cüzdan]] yapısı da o kökten dallanan [[private-key|özel anahtarları]] üretir. Aynı kelimeler her zaman aynı anahtarları verir; bu yüzden yedek tek bir yerdedir.

**Paroladan anahtar.** Parolalar kısadır, insan seçimidir ve öngörülebilir kalıplar taşır — yani anahtar olarak kullanılacak kadar [[entropy|entropileri]] yoktur. Bu yüzden parola doğrudan kullanılmaz, önce bir türetme fonksiyonundan geçirilir.

Bu fonksiyonlar **kasıtlı olarak yavaştır**. Sebebi şudur: parolayı deneme yanılmayla arayan biri milyonlarca deneme yapar. Her denemeye belirli bir hesaplama süresi ve belirli bir bellek maliyeti bindirirsen, senin tek girişinde fark etmediğin gecikme saldırganın milyonlarca denemesinde katlanarak büyür. Hesabı yavaşlatmak, saldırıyı ekonomik olmaktan çıkarır.

Yanına bir de [[salt|tuz]] eklenir; böylece aynı parola her dosyada farklı bir anahtar verir ve hazır listeler işe yaramaz. Bir [[keystore-file|keystore dosyasının]] içinde tam olarak bu ikili durur.

## Dikkat

Yavaşlatma zayıf parolayı kurtarmaz; yalnızca bulunma süresini uzatır. Kısa bir parola, en iyi ayarlarla bile sonunda bulunur.

Tek kökten türetmenin bedeli de şudur: kök sızarsa ondan türeyen bütün anahtarlar birden sızar. Tek tek anahtarları korumak yerine tek bir değeri korumak işi kolaylaştırır ama hatayı da tek noktada toplar.
