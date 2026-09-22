---
term: "Accessibility (a11y)"
tr: "Erişilebilirlik"
aliases: ["a11y"]
category: web
subcategory: "Frontend"
level: baslangic
short: "Bir arayüzün ekran okuyucuyla, yalnızca klavyeyle ya da düşük görme keskinliğiyle kullanan kişiler dahil herkesçe kullanılabilmesi."
related: [html, responsive-design, seo, dom, frontend]
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

Erişilebilirlik, bir arayüzün farklı koşullardaki insanlarca kullanılabilmesidir: sayfayı göremeyip ekran okuyucuyla dinleyen biri, fare kullanamadığı için yalnızca klavyeyle gezen biri, güneş altında telefonuna bakan biri.

Sonradan eklenen bir özellik değildir; doğru [[html|HTML]] kullanmakla başlar. Düğme için `button`, başlık için başlık etiketi, görsel için `alt` metni yazdığında işin büyük bölümü kendiliğinden gelir — çünkü yardımcı teknolojiler ekrandaki pikselleri değil, [[dom|sayfanın ağacını]] okur.

## Benzetme

Bir binanın girişine sonradan yapıştırılan rampa ile baştan basamaksız tasarlanmış bir giriş arasındaki fark gibi. İkincisi kimseyi yan kapıya yollamaz, kimseye "özel çözüm" muamelesi yapmaz; üstelik bavulu olanın, bebek arabası itenin ve eli dolu olan herkesin işine yarar.

## Örnek

```html
<!-- klavyeyle odaklanılmaz, ekran okuyucu "düğme" demez -->
<div class="btn" onclick="kaydet()">Kaydet</div>

<!-- odaklanılır, Enter ile çalışır, düğme olarak okunur -->
<button onclick="kaydet()">Kaydet</button>
```

## Dikkat

Dört hızlı kontrol: sayfayı yalnızca Tab tuşuyla baştan sona gezebiliyor musun, odaklanılan öğenin çerçevesi görünüyor mu, yazı ile arka plan arasındaki kontrast yeterli mi, her görselin `alt` metni var mı. Otomatik denetleyiciler bunların bir kısmını yakalar; kalanı ancak klavyeyi eline alıp denemekle görülür.
