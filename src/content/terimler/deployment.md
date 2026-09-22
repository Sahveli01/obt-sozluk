---
term: "Deployment"
tr: "Yayına alma"
aliases: ["deploy"]
category: web
subcategory: "Yayınlama"
level: baslangic
short: "Yazdığın kodun kendi makinenden çıkıp kullanıcıların erişebildiği bir ortamda çalışır hâle getirilmesi."
related: [hosting, ci-cd, staging, production, build, contract-deployment]
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

Deployment, yazdığın kodun senin makinenden çıkıp kullanıcıların erişebildiği bir yerde çalışır hâle gelmesidir. Genelde iki adımdır: önce kaynak kod tarayıcının ya da sunucunun anlayacağı dosyalara dönüştürülür (buna [[build|derleme]] denir), sonra bu dosyalar hedef makineye taşınır ve uygulama orada başlatılır.

Küçük bir projede bu tek bir komuttur. Ekip büyüdükçe iş otomatikleşir ve testleri geçen her değişikliği taşıyan bir hat kurulur ([[ci-cd|CI/CD]]). Kod çoğu zaman doğrudan kullanıcının karşısına da çıkmaz: önce prova ortamına ([[staging|staging]]) kurulur, orada sorun görülmezse [[production|üretime]] geçer.

## Benzetme

Taşınmak gibi. Eşyayı kolilersin, kamyona yüklersin, yeni adreste yerleştirirsin. Eşya aynıdır ama yeni evde prizlerin yeri farklıdır, dolap kapıdan geçmez — "bende çalışıyordu" cümlesi tam olarak bu yüzden kurulur.

## Dikkat

Yayına alma geri alınabilir bir iştir: bir şey ters giderse önceki sürüme dönersin, aynı kodu istediğin kadar yeniden kurarsın. [[contract-deployment|Sözleşme dağıtımı]] böyle değildir — kod zincire yazılır, adresi kalıcıdır ve geri alınmaz; hatayı düzeltmek yeni bir adrese yeniden dağıtmak ve herkesi oraya taşımak demektir.
