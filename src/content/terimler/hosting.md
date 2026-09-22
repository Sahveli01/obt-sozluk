---
term: "Hosting"
tr: "Barındırma"
aliases: ["web hosting"]
category: web
subcategory: "Yayınlama"
level: baslangic
short: "Bir sitenin dosyalarının internete bağlı, sürekli açık bir makinede durması ve isteyen herkese oradan gönderilmesi."
related: [server, deployment, cloud-computing, domain-name, cdn]
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

Hosting, bir sitenin ya da uygulamanın dosyalarının sürekli açık bir makinede durması ve isteyen herkese oradan gönderilmesidir. O makineye [[server|sunucu]] denir: internete bağlı, gece gündüz kapanmayan ve kendisine gelen istekleri cevaplayan bir bilgisayar.

Kendi bilgisayarında açtığın site yalnızca sana görünür, sen kapatınca kaybolur. Barındırma aynı dosyaları sen uyurken de ayakta duran bir makineye koyar. Ziyaretçi [[domain-name|alan adını]] yazdığında tarayıcısı o makineyi bulur ve dosyaları ondan ister.

## Benzetme

Cadde üstünde kiralanmış bir dükkân gibi. Ürettiğin şeyi evinde tutarsan yalnızca eve geleni görür; dükkânın kepengi ise kirayı ödediğin sürece kalkık durur ve kapısı herkese açıktır. Ödemeyi kesersen kepenk iner: mal yerindedir ama kimse ulaşamaz.

## Dikkat

Bir [[dapp|dApp]]'in zincirle konuşan kısmı merkeziyetsiz olsa bile arayüzü çoğu zaman sıradan bir sunucuda durur. O sunucuyu kontrol eden taraf kullanıcıya gösterilen sayfayı değiştirebilir; cüzdana imzalatılan işlemin sessizce başka bir adrese çevrilmesi buradan mümkün olur ([[front-end-attack-dns-hijack|arayüz saldırısı]]). Bu yüzden bazı projeler arayüzünü [[ipfs|IPFS]] gibi merkeziyetsiz bir depolamadan servis eder.
