---
term: "Avalanche"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "Rastgele örneklemeye dayanan bir uzlaşma ailesi kullanan ve uygulamalara kendi zincirlerini kurma imkânı veren blockchain ağı."
related: [appchain, finality, evm-compatibility, proof-of-stake-pos, interoperability]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Avalanche, iki hedefle tasarlandı: işlemlerin kısa sürede geri alınamaz hâle gelmesi ve her uygulamanın gerekirse kendi zincirinde yaşayabilmesi. Ana ağ tek bir zincir değildir; farklı işlere ayrılmış zincirlerden oluşur ve bunlardan biri [[evm-compatibility|EVM uyumlu]] sözleşmeleri çalıştırır.

## Nasıl çalışır?

Uzlaşma ailesi alışılmış iki yoldan da farklıdır. Ne herkesin herkese oy yolladığı klasik bir tur vardır, ne de en uzun zinciri bekleme kuralı. Bunun yerine her düğüm, rastgele seçtiği küçük bir doğrulayıcı kümesine "sen hangisini doğru buluyorsun" diye sorar, gelen cevaba göre kendi kanaatini günceller ve bunu birkaç tur tekrarlar. Aynı yönde üst üste gelen cevaplar, ağın tamamının aynı sonuçta buluştuğuna dair güveni hızla büyütür ve işlem kısa sürede [[finality|kesinleşir]]. Blok üretim hakkı [[proof-of-stake-pos|proof of stake]] ile dağıtılır.

İkinci tercih mimaridir: isteyen kendi [[appchain|uygulama zincirini]] kurabilir, kurallarını ve doğrulayıcı kümesini kendisi belirleyebilir.

## Dikkat

Örneklemeye dayanan uzlaşmada kesinlik matematiksel bir kanıtla değil, hata olasılığı tasarımla çok küçük tutularak sağlanır; bu olasılık sıfır değil, ayarlanabilir bir parametredir.

Kendi zincirini kurma imkânının bedeli ise dağınıklıktır: her zincir kendi doğrulayıcılarını bulmak zorundadır, güvenlik ve likidite zincirlere bölünür, zincirler arası kullanım ayrı bir [[interoperability|birlikte çalışabilirlik]] sorunu hâline gelir. Yazıldığı tarih itibarıyla bu zincirleri kurmayı ve birbirine bağlamayı kolaylaştıran araçlar ağın üzerinde çalışılan başlıklarından biridir.
