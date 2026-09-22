---
term: "Transparent Proxy"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: ileri
short: "Yükseltme mantığını proxy'nin kendisinde tutan ve yönetici çağrılarını kullanıcı çağrılarından ayıran proxy düzeni."
related: [proxy-contract, uups-proxy, upgradeable-contract, function-selector, delegatecall]
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

Transparent proxy, [[proxy-contract|proxy]] kalıbının en eski ve en yaygın iki düzeninden biridir. Ayırt edici yanı, **yükseltme mantığının proxy'nin içinde durmasıdır**: "mantık sözleşmesinin adresini değiştir" fonksiyonu proxy'nin kendi koduna gömülüdür, arkadaki mantık sözleşmesi yükseltmeden hiç haberdar değildir.

Terim Türkçeye çevrilerek kullanılmaz; "transparent proxy" diye geçer. Adındaki "şeffaf" sıfatı, sıradan kullanıcı açısından proxy'nin görünmez olmasını anlatır.

## Nasıl çalışır?

Proxy'nin kendi fonksiyonları (yükseltme, yönetici değiştirme) ile mantık sözleşmesinin fonksiyonları aynı adreste toplanınca bir sorun doğar: iki taraf aynı [[function-selector|fonksiyon seçicisine]] sahip olabilir. Bu durumda gelen çağrının hangisine gideceği belirsizleşir — **seçici çakışması**.

Çözüm, çağrıyı içeriğine değil **kimden geldiğine** bakarak ayırmaktır. Proxy her çağrıda `msg.sender`'ın yönetici olup olmadığını kontrol eder:

- Çağrı yöneticiden geliyorsa proxy kendi yükseltme fonksiyonlarını çalıştırır.
- Başka herkesten geliyorsa çağrı [[delegatecall]] ile mantık sözleşmesine iletilir.

Bunun bedeli, yöneticinin uygulamayı bu proxy üzerinden normal bir kullanıcı gibi kullanamamasıdır. Bu yüzden yönetici olarak bir insanın cüzdanı değil, yalnızca yükseltme işi yapan ayrı bir yönetim sözleşmesi kullanmak yerleşik uygulamadır.

Yönetici adresi ve mantık sözleşmesi adresi, sıradan değişkenler gibi 0, 1, 2 numaralı slotlara yazılmaz. EIP-1967 bunlar için bir metnin hash'inden türetilmiş sabit [[storage-slot|depolama slotları]] belirler; böylece mantık sözleşmesinin kendi değişkenleriyle çakışma ihtimali pratikte ortadan kalkar. Bu sabit slotlar sayesinde cüzdanlar ve blok gezginleri de bir adresin proxy olduğunu tanıyabilir.

## Dikkat

Her çağrıda yöneticinin kim olduğunu okumak bir depolama okuması demektir; bu düzen, yükseltme mantığını mantık sözleşmesine taşıyan [[uups-proxy|UUPS]] düzenine göre her işlemde biraz daha fazla [[gas]] harcar. Buna karşılık yükseltme yeteneğini yanlışlıkla kaybetme riski yoktur: yükseltme kodu proxy'de olduğu için yeni sürümler onu düşüremez.
