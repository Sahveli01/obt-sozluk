---
term: "CDN"
tr: "İçerik dağıtım ağı"
aliases: ["content delivery network"]
category: web
subcategory: "Yayınlama"
level: orta
short: "Bir sitenin dosyalarının kopyalarını farklı bölgelerdeki sunucularda tutup her ziyaretçiye en yakınından gönderen ağ."
related: [cache, latency, hosting, dns, distributed-denial-of-service-ddos]
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

CDN, bir sitenin görsel, stil dosyası ve betik gibi parçalarının kopyalarını dünyanın farklı bölgelerindeki sunucularda tutan ve her ziyaretçiye en yakınındakinden gönderen ağdır. Amaç mesafeyi kısaltmaktır: veri ışık hızına yakın gitse bile kıtalar arası her gidiş-dönüş hissedilir bir [[latency|gecikme]] ekler.

## Benzetme

Bayilik ağı gibi. Mal tek bir fabrikada üretilir ama her şehirde aynı malı stoklayan bir bayi vardır; müşteri fabrikadan sevkiyat beklemez, kendi şehrindeki bayiden alır. Bayide o mal yoksa bir kereliğine fabrikadan getirtilir ve bundan sonrası için rafa konur.

## Nasıl çalışır?

Ağın dünyaya yayılmış sunucularına kenar sunucu denir. Ziyaretçi bir dosya istediğinde [[dns|DNS]] onu coğrafi olarak yakın bir kenar sunucuya yönlendirir. O sunucuda dosyanın kopyası varsa doğrudan verilir. Yoksa asıl kaynaktan bir kez çekilir, kullanıcıya iletilir ve belirli bir süre boyunca saklanmak üzere [[cache|önbelleğe]] alınır; o süre dolunca kopya tazelenir.

Bunun ikinci bir faydası vardır: isteklerin büyük bölümü asıl sunucuya hiç ulaşmadığı için barındırma tarafındaki yük düşer ve ani trafik patlamalarını, [[distributed-denial-of-service-ddos|DDoS]] denemeleri de dahil, önce kenar karşılar.

## Dikkat

En sık karşılaşılan sorun eskiyen kopyadır: dosyayı güncellersin ama kullanıcılar bir süre daha eski sürümü görür. Çözüm dosya adına sürüm bilgisi koymaktır; adı değişen dosya önbellekte bulunamaz ve yenisi çekilir.

Kopyalamayı zincirdeki kopyalamayla karıştırmamak da gerekir. CDN aynı veriyi hız için çoğaltır; zincirde her [[node|düğümün]] aynı veriyi tutmasının sebebiyse doğrulanabilirliktir — kimsenin tek başına söylediğine güvenilmek zorunda kalınmasın diye. Yüzeyde benzeyen iki dağıtımın amaçları farklıdır.
