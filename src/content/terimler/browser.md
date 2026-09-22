---
term: "Browser"
tr: "Tarayıcı"
aliases: ["web browser"]
category: web
subcategory: "İnternet temelleri"
level: baslangic
short: "Uzaktaki bir sunucudan gelen dosyaları alıp ekranda gezilebilir bir sayfaya çeviren ve sayfanın kodunu çalıştıran program."
related: [html, css, javascript, dom, url]
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

Tarayıcı, uzaktaki bir bilgisayardan gelen dosyaları alıp ekranda gezilebilir bir sayfaya çeviren programdır. Bir adres yazdığında sana gelen şey hazır bir görüntü değildir: içerik [[html|HTML]] ile, görünüm kuralları [[css|CSS]] ile, davranış [[javascript|JavaScript]] ile ayrı ayrı gelir. Tarayıcı bunları okur, sayfanın bellekteki ağaç yapısını ([[dom|DOM]]) kurar, ekrana çizer ve sen tıkladıkça günceller.

Bu yüzden tarayıcı yalnızca bir gösterici değil, aynı zamanda bir çalışma ortamıdır: sayfanın kodu dosyaları gönderen [[server|sunucuda]] değil, senin cihazında çalışır.

## Benzetme

Telefonun ahizesi gibi. Hatta düşen şey ses değil, elektrik sinyalidir; onu kulağının duyabileceği sese çeviren ahizedir. Ağdan gelen de sayfa değil, düz metin hâlinde bir tariftir; o tarifi ekrandaki sayfaya çeviren tarayıcıdır.

## Dikkat

Tarayıcı aynı zamanda bir güvenlik sınırıdır: bir sekmedeki sayfa, başka bir alan adına ait sayfanın verisini kendiliğinden okuyamaz. Kripto tarafında [[browser-extension-wallet|cüzdan eklentileri]] tam da bu sınırın üstüne kurulur; site cüzdanın anahtarına erişemez, yalnızca ona istek gönderebilir.
