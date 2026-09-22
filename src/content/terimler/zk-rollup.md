---
term: "ZK Rollup"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "Her işlem yığınının yanında, yeni durumun kurallara uygun hesaplandığını gösteren bir kanıt sunan rollup türü."
related: [rollup, validity-proof, optimistic-rollup, zero-knowledge-proof-zkp, zkevm, withdrawal-period]
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

ZK rollup, yeni durumu ana zincire yalnız başına göndermez; yanında bir [[validity-proof|geçerlilik kanıtı]] getirir. Zincirdeki sözleşme bu kanıtı kontrol eder ve geçerse sonucu kabul eder. Kontrol, işlemleri baştan çalıştırmaktan çok daha ucuzdur.

İkisi arasındaki fark tek cümleyle şudur: [[optimistic-rollup|optimistic rollup]] "aksi ispatlanana kadar doğru" der ve bu yüzden bir itiraz süresine ihtiyaç duyar; ZK rollup "işte kanıtı" der ve bu yüzden kanıt üretme maliyetine katlanır. Adı Türkçeye çevrilmeden kullanılır.

## Nasıl çalışır?

İspatlayıcı (prover) yığındaki bütün işlemleri çalıştırır ve yürütmenin her adımını kanıt sistemine uygun bir biçime döker. Ortaya, ne kadar işlem olursa olsun kısa kalan bir kanıt çıkar. Ana zincirdeki doğrulayıcı sözleşme yalnızca bu kanıta ve "eski durum özeti → yeni durum özeti" çiftine bakar.

Kanıt üretmek ağır bir hesaplamadır ve özel donanım ister. Bu yüzden yığınlar belirli aralıklarla kanıtlanır; ana zincirdeki kesinleşme, kanıtın hazırlanıp yayımlanmasını bekler.

## Dikkat

Addaki "zero-knowledge" çoğu zaman yanıltır. Bu tasarımlarda kullanılan asıl özellik gizlilik değil, **kısalık**: büyük bir hesabın doğruluğunun küçük bir kanıtla gösterilebilmesi. İşlemlerin içeriği çoğu rollup'ta herkese açıktır.

Kanıt, yürütmenin kurallara uygun olduğunu söyler; kuralların iyi tasarlandığını değil. Devrelerde ya da doğrulayıcı sözleşmede bir hata varsa kanıt o hatayı da kusursuzca onaylar. Bu yüzden güvenin kaydığı yer değişir: sıralayıcıya değil, kanıt sisteminin ve varsa [[trusted-setup|güvenilir kurulumun]] doğruluğuna güvenirsin.

Kanıt yalnızca hesabın doğruluğunu çözer; verinin nereye yayımlandığı ayrı bir sorudur ve cevabı değiştiğinde tasarımın adı da değişir.
