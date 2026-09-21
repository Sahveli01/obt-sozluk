---
term: "Software Testing"
tr: "Yazılım testi"
aliases: ["yazılım testi", "testing"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Bir programın beklendiği gibi çalıştığını elle değil, yine kodla kontrol etme işi."
related: [unit-test, integration-test, end-to-end-test, test-coverage, test-driven-development-tdd, bug]
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

Yazılım testi, bir programın beklendiği gibi çalıştığını elle denemek yerine yine kodla kontrol etmektir. Test de bir programdır: kodun bir parçasını çalıştırır, sonucun ne olması gerektiğini söyler, eşleşmiyorsa haber verir.

Asıl değeri ilk yazıldığı anda değil sonradan ortaya çıkar. Projeye her dokunuşta hiçbir şeyin bozulmadığını anlamak için uygulamayı baştan sona elle gezmek zorunda kalmazsın; testleri çalıştırır, cevabı saniyeler içinde alırsın.

## Benzetme

Bir müzik grubunun konser hazırlığı gibi. Önce herkes kendi parçasını tek başına çalışır; sonra gitar, bas ve davul aynı odada birlikte denenir; en sonunda ışıklar ve ses düzeniyle baştan sona prova yapılır. Üç aşama da gerekir, çünkü herkesin tek başına doğru çalması birlikte uyumlu olacakları anlamına gelmez.

## Nasıl çalışır?

Testler kapsamlarına göre üç basamakta düşünülür ve bu basamaklar bir piramit oluşturur.

En altta [[unit-test|birim testler]] durur: tek bir parçayı çevresinden ayırıp dener, milisaniyelerde biter, sayıları binleri bulabilir. Ortada [[integration-test|entegrasyon testleri]] vardır: birkaç parçayı gerçekten bir araya getirir, aralarındaki sınırı kontrol eder, daha yavaştır. Tepede [[end-to-end-test|uçtan uca testler]] bulunur: sistemi gerçek bir kullanıcı gibi baştan sona çalıştırır, en gerçekçi ama en yavaş ve en kırılgan olanıdır.

Piramidin mantığı şudur: aşağı indikçe hız ve kesinlik artar, yukarı çıktıkça gerçeğe benzerlik artar. Bu yüzden çoğu proje tabanı geniş, tepesi dar tutar — her şeyi uçtan uca test etmek hem uzun sürer hem de bir test kırmızı yandığında sorunun nerede olduğunu söylemez.

## Dikkat

Test, hatasızlık belgesi değildir. Testler yalnızca senin düşündüğün durumları kontrol eder; aklına gelmeyen durum testte de yoktur. Geçen testler "bildiğim hiçbir şey bozulmadı" demektir, "hata yok" demek değil.

Bir [[bug|hata]] ortaya çıktığında iyi alışkanlık, önce o hatayı yakalayan bir test yazıp sonra düzeltmektir. Böylece aynı hata ileride geri dönerse sessizce değil, kırmızı yanarak döner.
