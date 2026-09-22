---
term: "CVE"
tr: ""
aliases: []
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Bilinen güvenlik açıklarına verilen ortak kimlik numarası sistemi; kayıtlar CVE-yıl-numara biçimindedir."
related: [vulnerability, zero-day, responsible-disclosure, dependency, supply-chain-attack]
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

CVE, bilinen güvenlik açıklarına ortak bir kimlik numarası veren sistemdir. Açılımı Common Vulnerabilities and Exposures'tır ve bir programın adı olduğu için çevrilmez.

Çözdüğü sorun isimlendirmedir. Aynı açığı bir ekip "kütüphanedeki bellek hatası", diğeri "ayrıştırıcı çökmesi" diye anlatırsa iki taraf aynı şeyden bahsettiğini fark edemez. Numara verildiğinde herkes aynı kaydı gösterir: `CVE-2021-44228` gibi.

## Nasıl çalışır?

Bir açık bildirilip doğrulandıktan sonra, numara vermeye yetkilendirilmiş kurumlardan biri ona kayıt açar. Kayıtta genellikle etkilenen ürün ve sürüm aralığı, kısa bir açıklama ve yamanın bulunduğu yer bulunur. Ciddiyet, ayrı bir ölçekle hesaplanan bir puan olarak eklenir; bu puan kaydın kendisi değil, ona eşlik eden bir değerlendirmedir.

Asıl faydası otomasyondadır. Bağımlılık tarayıcıları, projendeki paketlerin sürümlerini bu kayıtlarla karşılaştırıp "kullandığın sürüm şu kaydın etkilediği aralıkta" uyarısı verir. Bir projede onlarca dolaylı [[dependency|bağımlılık]] olduğu düşünülürse, bunu elle takip etmek mümkün değildir — ve bu tarama [[supply-chain-attack|tedarik zinciri saldırılarına]] karşı alınan ilk önlemlerden biridir.

## Dikkat

**Numaranın varlığı ciddiyet göstergesi değildir.** Küçük bir hata da kayıt alır, kritik bir açık da. Tersi de doğrudur: numarası olmayan bir açık "yok" ya da "önemsiz" demek değildir; kayıt sistemi yalnızca kendisine bildirilenleri bilir.

Akıllı sözleşme dünyasında bu sistem, yazıldığı tarih itibarıyla klasik yazılımdaki kadar yerleşik değildir. Açıklar daha çok denetim raporları, güvenlik duyuruları ve olay sonrası yazılar üzerinden dolaşır. Bunun pratik sonucu şudur: bir sözleşmenin bilinen açığı olup olmadığını numara arayarak öğrenemezsin, [[vulnerability|açığın]] duyurulduğu yeri takip etmen gerekir.
