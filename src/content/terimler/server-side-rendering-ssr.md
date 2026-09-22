---
term: "Server-Side Rendering (SSR)"
tr: ""
aliases: ["ssr"]
category: web
subcategory: "Frontend"
level: orta
short: "Sayfanın HTML'inin tarayıcıda değil, istek geldiği anda sunucuda üretilip hazır olarak gönderilmesi."
related: [static-site-generation-ssg, single-page-application-spa, server, next-js, seo]
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

SSR'de kullanıcı bir adrese girdiğinde sayfanın HTML'i o anda [[server|sunucuda]] üretilir ve tarayıcıya dolu olarak gider. Tarayıcı boş bir kabuk indirip içini JavaScript ile doldurmaz; ilk cevapta içerik zaten vardır.

"Render" kelimesinin yerleşmiş bir Türkçe karşılığı olmadığı için terim kısaltmasıyla, SSR olarak kullanılır.

## Nasıl çalışır?

Aynı bileşen kodu iki yerde çalışır. Önce sunucuda çalışır ve metni, listeyi, başlıkları içeren HTML üretir. Sonra aynı kod tarayıcıda bir kez daha çalışır ve hazır gelen işaretlemenin üstüne olay dinleyicilerini bağlar; bu ikinci adıma hydration denir.

Kullanıcı yazıyı hemen görür, ama düğmeler JavaScript inip çalışana kadar tepki vermez. Arada kalan bu boşluk SSR'nin en sık atlanan ayrıntısıdır.

Kazancı iki yerde görünür: ilk ekran hızlı gelir ve sayfayı okuyan arama motoru gezginleri içeriği boş bulmaz ([[seo|SEO]]). Bedeli, her istek için çalışan ve ölçeklenmesi gereken bir sunucudur.

## Dikkat

Sunucuda çalışan kodun kullanıcının cüzdanına erişimi yoktur. Cüzdan yalnızca tarayıcıda, kullanıcının cihazında bulunur; tarayıcı cüzdanının sayfaya eklediği nesne sunucuda tanımsızdır. Zincirle konuşan her parça bu yüzden tarayıcıda çalışacak şekilde yazılır — bu, [[next-js|çatı]] kullanarak dApp arayüzü yazanların en sık tökezlediği yerdir.

[[static-site-generation-ssg|SSG]] ile karıştırılır. Fark HTML'in ne zaman üretildiğidir: SSR'de her istekte yeniden, SSG'de ziyaretçi gelmeden önce bir kez. [[single-page-application-spa|Tek sayfa uygulaması]] ise üçüncü seçenektir: HTML'i tarayıcı üretir.
