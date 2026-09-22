---
term: "Static Site Generation (SSG)"
tr: ""
aliases: ["ssg"]
category: web
subcategory: "Frontend"
level: orta
short: "Sayfaların HTML'inin ziyaretçi gelmeden önce, derleme sırasında bir kez üretilip dosya olarak servis edilmesi."
related: [server-side-rendering-ssr, astro, build, hosting, ipfs]
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

SSG'de sayfalar ziyaretçi gelmeden önce üretilir. [[build|Derleme]] sırasında — yani kodun yayına hazır dosyalara dönüştürüldüğü aşamada — her sayfanın HTML'i bir kez hesaplanır. Sonuç, sıradan dosyalardan oluşan bir klasördür.

Yayındaki sunucunun tek işi o dosyayı olduğu gibi göndermektir; istek anında hesaplanacak hiçbir şey yoktur. Kısaltmasıyla SSG denir, yerleşmiş bir Türkçe karşılığı yoktur.

## Nasıl çalışır?

İçerik nereden geliyorsa — dosyalardan, bir veritabanından, bir API'den — derleme anında okunur ve sayfalara gömülür. Bir yazı değiştiğinde site yeniden derlenir ve yeni dosyalar yayımlanır.

Bunun iki sonucu vardır. Sayfa hızlıdır ve yük altında davranışı değişmez, çünkü herkese aynı hazır dosya gider. Buna karşılık dakikada değişen veriler için uygun değildir; kişiye özel bölümler sayfa açıldıktan sonra tarayıcıda ayrıca çekilir. [[hosting|Barındırma]] tarafı da ucuzlar: çalışan bir sunucu değil, dosya servis eden bir yer yeter.

## Dikkat

Bu, dApp arayüzlerinde sık tercih edilen bir yoldur. Çıktı yalnızca dosyalardan oluştuğu için arayüz [[ipfs|IPFS]] gibi merkeziyetsiz bir depolamadan da servis edilebilir; ortada kapatılabilecek ya da içeriği değiştirilebilecek bir sunucu kalmaz. Zincirdeki veri de zaten tarayıcıdan doğrudan okunabilir.

"Statik" sayfanın hareketsiz olduğu anlamına gelmez: JavaScript yine çalışır, veri yine çekilir. Statik olan, sunucunun her ziyaretçi için ayrı bir sayfa üretmemesidir. Sayfa sayısı çok büyüdüğünde derleme süresi uzar; bu noktada bazı sayfalar [[server-side-rendering-ssr|istek anında]] üretilmeye bırakılır. [[astro|Astro]] gibi çatılar iki biçimi aynı projede karıştırmaya izin verir.
