---
term: "wagmi (Kütüphane)"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "React uygulamalarında cüzdan bağlantısını ve sözleşme çağrılarını hook'larla yöneten kütüphane."
related: [viem, react, wallet, frontend, hook-react, walletconnect]
disambiguation: [wagmi]
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

wagmi, [[react|React]] uygulamalarında zincirle konuşmayı kolaylaştıran bir kütüphanedir. Yaptığı iş, tek tek yazıldığında sıkıcı ve hataya açık olan arayüz işlerini hazır [[hook-react|hook]]'lara çevirmektir: [[wallet|cüzdan]] bağlama, bağlı hesabı ve ağı takip etme, sözleşme okuma, işlem gönderme ve işlemin onaylanmasını bekleme.

Bunların hepsi elle de yazılabilir, ama arayüzde gereken şey sadece veri değildir: yükleniyor mu, hata mı verdi, kullanıcı ağ değiştirdi mi, cüzdan bağlantısı koptu mu — wagmi bu durumları hook'un dönüş değerinde hazır verir.

## Nasıl çalışır?

Uygulamanın en üstüne bir yapılandırma yerleştirirsin: hangi zincirler destekleniyor, her zincire nasıl bağlanılacak ve hangi bağlayıcılar (connector) kullanılabilir. Bağlayıcı, farklı cüzdan türlerini tek arayüz altında toplayan parçadır — tarayıcı eklentisi, [[walletconnect|WalletConnect]] üzerinden bağlanan bir mobil cüzdan ya da gömülü bir cüzdan aynı hook'larla kullanılır.

Alt bileşenler bu yapılandırmayı görerek hook çağırır. Yazıldığı tarih itibarıyla kütüphane ağ işlerini [[viem|viem]] üzerinden yürütür; okuma sonuçlarının önbelleğe alınması ve tekrar sorgulanması da bir veri sorgu kütüphanesine bırakılmıştır.

## Dikkat

Aynı adı taşıyan iki şey vardır: buradaki kütüphane ve topluluk jargonundaki [[wagmi|WAGMI]] ("we're all gonna make it") ifadesi — birincisi bir geliştirici aracı, ikincisi bir moral sözüdür ve aralarında hiçbir ilgi yoktur; kütüphane küçük harfle yazılır.

Büyük sürümler arasında hook adları değişmiştir; bir örnek kopyalamadan önce hangi sürüme baktığını kontrol et.
