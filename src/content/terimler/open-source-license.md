---
term: "Open Source License"
tr: "Açık kaynak lisansı"
aliases: ["açık kaynak lisansı", "yazılım lisansı"]
category: programlama
subcategory: "Kod organizasyonu"
level: orta
short: "Bir kodu kimin, hangi koşullarla kullanıp değiştirip dağıtabileceğini yazan hukuki metin."
related: [open-source, spdx-license-identifier, repository, readme]
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

Lisans, bir kodun kimin ne yapabileceğini yazan metindir. Kodun telif hakkı yazarındadır; lisans, yazarın başkalarına verdiği izinleri ve karşılığında beklediği koşulları tanımlar. [[open-source|Açık kaynak]] fikri bu belge olmadan hukuken kurulamaz: lisanssız yayımlanan kod, herkesin görebildiği ama kimsenin kullanma hakkı olmadığı koddur.

## Nasıl çalışır?

Lisans metni [[repository|deponun]] kökünde `LICENSE` adlı bir dosyada durur ve çoğu zaman [[readme|README]] içinde de adıyla anılır. Herkes metnin tamamını okumak zorunda kalmasın diye lisansların standart kısa adları vardır (`MIT`, `Apache-2.0`, `GPL-3.0-only` gibi); bu adlar dosyaların başına makinenin de okuyabileceği tek satır hâlinde yazılabilir ([[spdx-license-identifier]]).

Lisanslar kabaca iki aileye ayrılır. İzin verici olanlar kullanmayı, değiştirmeyi ve kapalı bir ürünün içinde dağıtmayı serbest bırakır; genelde tek bekledikleri telif bildiriminin korunmasıdır. Copyleft olanlar aynı özgürlükleri verir ama bir koşul ekler: türettiğin işi dağıtacaksan onu da aynı lisansla ve kaynağıyla birlikte dağıtmalısın. İkisi de açık kaynaktır; ayrıldıkları yer, koşulun sonraki kullanıcılara geçip geçmediğidir.

## Benzetme

Bir arsayı bağışlarken senede şart yazmak gibi. Şartsız bağışta yeni sahip arsayla ne isterse yapar, tek beklenti bağışçının adının anılmasıdır. Şartlı bağışta ise "burası el değiştirse de aynı şart yürürlükte kalır" yazar. İki senet de gerçek bir bağıştır; fark, şartın sonraki sahiplere geçip geçmemesindedir.

## Dikkat

Bu madde hukuki tavsiye değildir ve lisanslar arasında bir üstünlük sıralaması yoktur; hangisinin uygun olduğu projenin ne olmasını istediğine bağlıdır. Ticari bir ürün, kurumsal bir iş ya da başkasının kodunu içeren bir proje söz konusuysa doğru adres bir hukukçudur.

İki yaygın hata var. Birincisi lisans dosyasını hiç eklememek: kod açıkta durur ama kimse onu güvenle kullanamaz. İkincisi başka bir projeden kopyalanan kodun kendi lisansıyla birlikte geldiğini unutmak; o kodun koşulları seninkiyle birlikte yürümeye devam eder.
