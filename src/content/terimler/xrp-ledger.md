---
term: "XRP Ledger"
tr: ""
aliases: ["XRPL"]
category: aglar
subcategory: ""
level: orta
short: "Kurumlar arası değer transferi için tasarlanmış, madencilik ve stake yerine doğrulayıcı listelerine dayanan uzlaşma kullanan defter."
related: [consensus-mechanism, finality, order-book-dex, stellar, proof-of-work-pow]
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

XRP Ledger, kurumlar ve ödeme sağlayıcıları arasındaki değer transferini hızlandırmak amacıyla tasarlanmış bir defterdir. Sorduğu soru "her şeyi çalıştırabilen bir bilgisayar nasıl kurulur" değil, "bir ödeme birkaç saniyede nasıl kesinleşir"dir.

## Nasıl çalışır?

Blok üretimi ne [[proof-of-work-pow|proof of work]] ile ne de stake ile satın alınır. Her doğrulayıcının, sözüne bakacağı doğrulayıcıları listelediği bir güven listesi vardır; bu listeler birbiriyle yeterince örtüştüğü sürece ağ hangi işlemlerin bir sonraki deftere gireceği üzerinde turlar hâlinde anlaşır ve sonuç kısa sürede [[finality|kesinleşir]].

İkinci tercih, yeteneklerin protokole gömülü olmasıdır. Genel amaçlı sözleşme yazmak yerine defterde önceden tanımlı işlem türleri kullanılır: varlık ihracı, ödeme, emanet, ve defterin içinde çalışan bir [[order-book-dex|emir defteri]]. Böylece davranış öngörülebilir olur ve her uygulamanın kendi hatasını kendi yazma ihtimali ortadan kalkar.

## Dikkat

Bunun bedeli esnekliktir. Protokolün yapmadığı bir şeyi yapmak istersen çözüm bir sözleşme yazmak değil, protokolü değiştirmektir: bir değişiklik önerilir ve doğrulayıcılardan yeterli destek gelirse yürürlüğe girer. Yazıldığı tarih itibarıyla ağa programlanabilirlik ekleme yönünde çalışmalar sürmektedir.

İkinci mesele, güven listelerinin nasıl oluştuğudur: kimin doğrulayıcı olarak kabul gördüğü teknik değil sosyal bir süreçtir ve merkeziyetsizlik tartışmaları da bu noktada yoğunlaşır. [[stellar|Stellar]] benzer bir uzlaşma ailesinden gelir ama güven kümelerini farklı tanımlar.
