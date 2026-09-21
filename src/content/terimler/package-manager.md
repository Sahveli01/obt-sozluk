---
term: "Package Manager"
tr: "Paket Yöneticisi"
aliases: ["paket yöneticisi"]
category: araclar
subcategory: "Geliştirme ortamı"
level: baslangic
short: "Projenin kullandığı hazır kod paketlerini indiren, kuran ve sürümleriyle bağımlılıklarını takip eden araç."
related: [npm, pnpm, dependency, package, semantic-versioning]
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

Hiçbir proje sıfırdan yazılmaz. Tarih biçimlendirmek, sunucu açmak ya da bir sözleşmeyle konuşmak için başkalarının yazdığı hazır [[package|paketleri]] kullanırsın. Paket yöneticisi bu paketleri indirir, projenin klasörüne yerleştirir ve hangi sürümü kullandığını bir dosyaya yazar.

Asıl değerli işi [[dependency|bağımlılık]] çözümüdür: kurduğun paketin kendi bağımlılıkları vardır, onların da başka bağımlılıkları. Elle takip edilemeyecek bu ağacı paket yöneticisi çözer ve çakışanları uzlaştırır.

Her dilin kendi paket yöneticisi vardır: JavaScript'te [[npm]] ve [[pnpm]], Rust'ta cargo, Python'da pip.

## Benzetme

Telefonundaki uygulama mağazası gibi. Uygulamayı bir yerlerden indirip kurcalamazsın; adını arar, kurarsın, mağaza sürümünü ve güncellemesini takip eder. Paket yöneticisi aynısını kod parçaları için yapar — üstelik o paketin çalışması için gereken başka parçaları da kendiliğinden getirir.

## Dikkat

Kurduğun her paket projene başkasının kodunu ekler ve o kod senin yetkilerinle çalışır. Popüler bir paketin adına çok benzeyen sahte paketler ya da ele geçirilmiş bir sürüm, gerçekten görülmüş saldırı yöntemleridir.

Kurmadan önce paketin ne kadar kullanıldığına, en son ne zaman güncellendiğine ve kaç bağımlılık getirdiğine bakmak iyi bir alışkanlıktır. Üç satırlık bir iş için otuz paket indiren bir bağımlılık, kazandırdığından fazlasını götürebilir.
