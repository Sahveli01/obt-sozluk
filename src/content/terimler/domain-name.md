---
term: "Domain Name"
tr: "Alan adı"
aliases: ["domain"]
category: web
subcategory: "İnternet temelleri"
level: baslangic
short: "Bir sunucuya ulaşmak için sayısal adresinin yerine kullanılan, kayıt sistemiyle süreli olarak tahsis edilen ad."
related: [dns, url, ip-address, front-end-attack-dns-hijack, name-service-ens]
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

Alan adı, bir [[server|sunucuya]] ulaşmak için sayısal adresinin yerine kullanılan, insanın akılda tutabileceği addır. `ornek.com.tr` sağdan sola doğru okunur: `tr` üst düzey alan, `com.tr` onun altındaki bölüm, `ornek` ise kaydettirdiğin kısımdır. Soluna eklenen `blog.ornek.com.tr` gibi adlara alt alan adı denir ve onları ekleme yetkisi sendedir.

Alan adları kayıt kuruluşları üzerinden tahsis edilir. Satın alınmaz; belirli bir süre için kaydedilir.

## Benzetme

Dükkânın tabelasındaki ad gibi. Adı sen seçersin ama kayda geçirtirsin ve o ad, kayıt sürdüğü müddetçe senindir. Süre dolar da yenilemezsen aynı adı başkası alabilir: tabela değişir, kapı olduğu yerde kalır.

## Dikkat

Alan adı, bir siteyi gerçekte kimin yönettiğinin kanıtı değildir. Kayda ya da [[dns|DNS]] ayarlarına erişen biri adı aynı bırakıp ziyaretçileri kendi sunucusuna yollayabilir; kripto dünyasında bunun adı [[front-end-attack-dns-hijack|ön yüz saldırısıdır]].

Zincir üstünde çalışan [[name-service-ens|ad servisleri]] bambaşka bir sistemdir: kaydı bir kuruluş değil bir [[smart-contract|akıllı sözleşme]] tutar ve ad çoğunlukla bir web sunucusunu değil bir cüzdan adresini gösterir.
