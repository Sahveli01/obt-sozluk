---
term: "Next.js"
tr: ""
aliases: ["nextjs"]
category: web
subcategory: "Frontend"
level: orta
short: "React üstüne kurulu; yönlendirmeyi ve sayfaların nerede üretileceği kararını hazır bir düzenle getiren web çatısı."
related: [react, server-side-rendering-ssr, static-site-generation-ssg, framework, seo]
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

Next.js, [[react|React]] üstüne kurulmuş bir [[framework|çatıdır]]. React tek başına ekranı çizer; bir siteyi ayakta tutan geri kalan işler — hangi adres hangi ekranı gösterecek, sayfa nerede üretilecek, veri ne zaman çekilecek, çıktı nasıl paketlenecek — projeyi yazana kalır. Next.js bu kararları hazır bir düzenle verir.

## Nasıl çalışır?

Yönlendirme dosya düzeninden çıkar: klasör yapısı doğrudan adreslerin karşılığıdır, ayrıca bir yönlendirme tablosu yazılmaz.

Asıl ayırt edici yanı her sayfa için üretim biçiminin ayrı seçilebilmesidir. Bir sayfa [[static-site-generation-ssg|önceden üretilmiş]] statik dosya olabilir, bir diğeri [[server-side-rendering-ssr|istek anında sunucuda]] üretilebilir, üçüncüsü yalnızca tarayıcıda çalışabilir. Üçü aynı projede yan yana durur. Sunucuda üretilen sayfalar ilk ekranın hızlı gelmesini ve içeriğin arama motorlarınca görülmesini ([[seo|SEO]]) kolaylaştırır.

Veri çekme, görsel optimizasyonu ve küçük sunucu uçları gibi işler de çatının içinde gelir; bunları ayrı ayrı kurmak gerekmez.

## Dikkat

Sunucuda çalışan kodla tarayıcıda çalışan kod aynı klasörlerde yan yana durduğu için hangi kodun nerede çalıştığını takip etmek gerekir. Cüzdan, `window` ve tarayıcıya özgü her şey yalnızca tarayıcıda vardır; sunucuda çalışan bir dosyadan bunlara uzanmak çalışma anında hata verir.

Dağıtım tarafında da bir karşılığı vardır: sunucu gerektiren sayfalar, yalnızca statik dosya servis eden basit bir barındırmada çalışmaz. Projenin tamamı statik üretilebiliyorsa bu kısıt ortadan kalkar.
