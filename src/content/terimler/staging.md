---
term: "Staging"
tr: ""
aliases: ["staging ortami"]
category: araclar
subcategory: "Derleme ve dağıtım süreci"
level: orta
short: "Üretim ortamının olabildiğince birebir kopyası; bir değişiklik gerçek kullanıcılara açılmadan önce burada son kez denenir."
related: [environment, production, ci-cd, deployment, testnet]
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

Staging, [[production|üretim]] ortamının olabildiğince birebir kopyası olan bir [[environment|ortamdır]]: aynı yapılandırma, aynı veritabanı şeması, aynı sürümler. Fark, buradaki kullanıcıların ekibin kendisi, verilerin ise gerçek kullanıcı verisi yerine üretilmiş ya da kimliği temizlenmiş kopyalar olmasıdır. Amaç, bir değişikliği gerçek insanlara açmadan önce gerçeğe en yakın koşulda görmektir.

Türkçede yerleşmiş bir karşılığı yok; ekipler "staging" der. "Prova ortamı" gibi denemeler yapılmış ama ortak kullanıma girmemiştir, o yüzden burada uydurulmuyor.

## Benzetme

Yeni yapılmış bir köprünün açılıştan önce yüklü kamyonlarla denenmesi gibi. Köprü gerçektir; betonu, taşıyıcısı, eğimi açılıştan sonra da aynı kalacaktır. Sahte olan tek şey üstünden geçen ağırlıktır. Çökme ihtimali varsa, üstünde insan varken değil şimdi öğrenilmesi gerekir.

## Nasıl çalışır?

[[ci-cd|CI/CD]] hattı, testleri geçen [[build-artifact|artifact]]'ı önce staging'e kurar. Ekip burada elle bakar: ekranlar beklendiği gibi mi, veritabanı göçleri sorunsuz uygulandı mı, dış servislerle konuşma çalışıyor mu, biraz yük bindiğinde ne oluyor. Sorun çıkmazsa aynı artifact üretime taşınır; yeniden derlenmez.

Dış servislerin çoğu bu iş için ayrı bir deneme hesabı sunar: ödeme sağlayıcısının test anahtarları, e-posta servisinin kum havuzu ya da bir zincirin [[testnet|testnet]]'i staging'e bağlanır.

## Dikkat

Staging'in değeri üretime ne kadar benzediğiyle ölçülür. Sürümleri geride kalmış, veritabanında beş kayıt duran, dış bağlantılarının yarısı kapalı bir staging yanlış bir güven verir: orada geçen şeyin üretimde de geçeceğini göstermez. Bir de staging'i gerçek kullanıcı verisiyle doldurmak hem gizlilik hem güvenlik açısından risklidir, çünkü bu ortama erişim genelde daha gevşektir.
