---
term: "Vanity Address"
tr: ""
aliases: ["vanity adres"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: orta
short: "Başında ya da sonunda istenen karakterleri taşıyan, çok sayıda anahtar denenerek bulunan adres."
related: [wallet-address, address-poisoning, private-key, entropy, public-key]
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

Vanity adres, belirli karakterlerle başlayan ya da biten [[wallet-address|cüzdan adresidir]]. Projeler tanınırlık için, kişiler ise hoşlarına gittiği için kullanır. Adresin işleyişini değiştirmez; yalnızca görünüşünü değiştirir.

Yerleşik bir Türkçe karşılığı yok; "gösteriş adresi" gibi denemeler tutmadı, sektörde İngilizcesi kullanılıyor.

## Benzetme

Kişiye özel plaka gibi. Plaka aracın ne olduğunu değiştirmez, sadece uzaktan tanınmasını sağlar; istenen kombinasyon ne kadar özelse sıraya girip beklemek o kadar uzun sürer.

## Nasıl çalışır?

Adres, anahtardan tek yönlü bir hesapla çıktığı için "şu adresi üret" diye bir işlem yoktur. Yapılan şey aramaktır: program rastgele anahtar çiftleri üretir, her birinin adresine bakar, aradığı kalıba uymayanı atar ve devam eder. Kalıba eklenen her karakter beklenen deneme sayısını katlayarak büyütür; birkaç karakterden sonrası sıradan bir bilgisayarın harcı olmaktan çıkar.

Bulunan anahtar, sıradan bir anahtardan farksızdır. Onu özel kılan tek şey, adresinin aranan kalıba uymasıdır.

## Dikkat

Asıl risk adresin kendisinde değil, onu üreten araçtadır. Anahtarı üreten program yeterince rastgele davranmazsa ([[entropy|entropi]] zayıfsa) üretilen anahtar tahmin edilebilir hâle gelir; geçmişte yaygın kullanılan bir vanity adres üreticisindeki böyle bir zayıflık yüzünden bu adreslerdeki varlıklar çalınmıştır. Adresi başkasına ürettirmek ise [[private-key|özel anahtarı]] doğrudan ona vermek demektir.

Bir de ters etkisi var. Tanıdık görünen adreslere alışan kullanıcı, adresi baştan sona kontrol etme alışkanlığını bırakır; [[address-poisoning|adres zehirleme]] saldırıları tam olarak bunu kullanır.
