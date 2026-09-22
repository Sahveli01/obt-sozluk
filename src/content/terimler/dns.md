---
term: "DNS"
tr: "Alan Adı Sistemi"
aliases: ["domain name system"]
category: web
subcategory: "İnternet temelleri"
level: orta
short: "Alan adlarını, cihazların iletişimde kullandığı IP adreslerine çeviren, dünyaya dağıtılmış arama sistemi."
related: [domain-name, ip-address, browser, front-end-attack-dns-hijack, latency]
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

DNS, [[domain-name|alan adlarını]] sayısal [[ip-address|IP adreslerine]] çeviren, dünyaya dağıtılmış arama sistemidir. Adres çubuğuna bir ad yazdığında [[browser|tarayıcının]] ilk işi o addan bir sayıya ulaşmaktır; bağlantı ancak ondan sonra kurulabilir.

Tek bir yerde duran dev bir liste yoktur. Sorumluluk basamaklara bölünmüştür ve her basamak çoğu zaman cevabın kendisini değil, bir alt basamağı kimin bildiğini söyler.

## Nasıl çalışır?

Tarayıcı soruyu bir çözümleyiciye sorar; bu genellikle operatörünün ya da senin seçtiğin bir sağlayıcının [[server|sunucusudur]]. Çözümleyici cevabı bilmiyorsa kök sunuculara sorar, onlar `tr` alanından sorumlu sunucuyu gösterir, o da `ornek.com.tr` için yetkili sunucuyu. Zincirin sonundaki yetkili sunucu IP adresini verir.

Her cevabın bir yaşam süresi (TTL) vardır. O süre boyunca cevap hem çözümleyicide hem senin cihazında saklanır, böylece aynı adrese ikinci girişinde bütün tur tekrarlanmaz. Bir sitenin sunucusu değiştiğinde değişikliğin her yere yayılmasının zaman almasının sebebi de budur.

## Dikkat

DNS kendiliğinden kimlik doğrulamaz: gelen cevabın gerçekten yetkili kaynaktan geldiğini kanıtlayan bir imza yoktur. Cevabı değiştirebilen biri seni doğru alan adında, yanlış sunucuya götürebilir. Bir [[dapp|dApp]] için bu, kullanıcının ele geçirilmiş bir ön yüze yollanması demektir; [[front-end-attack-dns-hijack|DNS ele geçirme]] saldırısı tam olarak böyle işler. [[https|HTTPS]] riski azaltır ama tek başına kaldırmaz: alan adının kaydını eline geçiren biri o ad için geçerli bir sertifika da alabilir.
