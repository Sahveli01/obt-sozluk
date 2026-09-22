---
term: "Data Availability Layer"
tr: "Veri Erişilebilirliği Katmanı"
aliases: []
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Üst katmanların işlem verisini yayımladığı ve bu verinin erişilebilirliğini güvence altına alan katman."
related: [data-availability, modular-blockchain, rollup, blob-eip-4844, validium, settlement-layer]
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

Veri erişilebilirliği katmanı, üst katmanların işlem verisini yayımladığı ve o verinin gerçekten erişilebilir olduğunu güvence altına alan roldür. [[data-availability|Veri erişilebilirliği]] bir gereksinimdir; bu katman, o gereksinimi karşılamayı iş edinen yerdir.

[[modular-blockchain|Modüler]] bir yığında bu rol ayrı ayrı satın alınabilir hâle gelir; tek katmanlı bir zincirde ise aynı iş görünmez biçimde konsensüs katmanıyla birlikte yapılır.

## Nasıl çalışır?

Bir [[rollup|rollup]] için üç seçenek vardır ve aralarındaki fark maliyetten çok güven varsayımıdır.

Birincisi, veriyi mutabakat yaptığı zincire yazmak: en güçlü güvence, en pahalı seçenek. Veriyi saklamak, o zincirin tamamını susturmak kadar zordur ([[blob-eip-4844|blob]]'lar bu yolu ucuzlatmak için vardır).

İkincisi, veriyi bu iş için tasarlanmış ayrı bir zincire yazmak. O ağın kendi doğrulayıcı kümesi ve kendi güvenlik bütçesi vardır; güvence artık iki ayrı ağın sağlığına bağlıdır.

Üçüncüsü, veriyi zincir dışında, belirli bir kurulda ya da sunucu grubunda tutmak ([[validium|validium]]). En ucuzu budur, ama güvence bir grubun sözünde biter.

Kullanıcı için fark tek bir soruda toplanır: veriyi tutan taraf bir gün vermemeye karar verirse ne olur? Üçüncü seçenekte cevap, paranı geri çekmek için gereken bilgiye ulaşamamandır.

## Dikkat

Bu katman verinin doğruluğunu denetlemez, yalnızca ortada olmasını sağlar. Yayımlanan veri hatalı bir yürütme sonucunu anlatıyor olabilir; onu yakalamak ispat mekanizmalarının ve [[settlement-layer|mutabakat katmanının]] işidir.

Veri katmanını bir depolama hizmetiyle de karıştırma. Buradaki amaç uzun süreli arşiv değil, kısa sürede herkesin indirebilmesidir; [[decentralized-storage|merkeziyetsiz depolama]] bambaşka bir ihtiyaca cevap verir.
