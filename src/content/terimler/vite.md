---
term: "Vite"
tr: ""
aliases: []
category: web
subcategory: "Frontend"
level: orta
short: "Geliştirirken değişiklikleri anında tarayıcıya yansıtan, yayına çıkarken kodu paketleyip küçülten web geliştirme aracı."
related: [module-bundler, build, javascript, typescript, astro]
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

Vite, bir web projesinde iki ayrı işi üstlenen araçtır. Geliştirme sırasında bir sunucu çalıştırır ve yazdığın değişikliği anında tarayıcıya yansıtır; yayına çıkarken de kodu [[build|derleyip]] paketler. İkisi aynı araçta olsa da altta farklı yollar izler.

## Nasıl çalışır?

Geliştirme sırasında projenin tamamını baştan paketlemez. Tarayıcılar [[javascript|JavaScript]] modüllerini kendileri yükleyebildiği için Vite dosyaları istendikçe, tek tek dönüştürüp gönderir. Bunun pratik sonucu şudur: proje büyüdükçe başlangıç süresi aynı kalır. Bir dosyayı kaydettiğinde de yalnızca o modül değiştirilir; sayfa baştan yüklenmez, ekrandaki durum yerinde kalır.

Yayın çıktısında davranış değişir. Yüzlerce dosyanın tek tek indirilmesi pahalı olduğu için kod bir [[module-bundler|paketleyiciyle]] birleştirilir, küçültülür ve içeriğine bağlı damga taşıyan dosya adlarıyla yazılır.

[[typescript|TypeScript]], JSX ve stil dosyaları gibi tarayıcının doğrudan anlamadığı biçimleri dönüştürmek de bu akışın içindedir. [[astro|Astro]] dahil birçok çatı kendi altyapısı olarak Vite'ı kullanır.

## Dikkat

"Geliştirirken hızlı" ile "yayın çıktısı küçük" ayrı şeylerdir; biri diğerini garanti etmez.

Geliştirme ile yayın çıktısının farklı yollardan üretilmesinin bir bedeli de vardır: yalnızca derlenmiş çıktıda ortaya çıkan hatalar mümkündür. Yayına çıkmadan önce derlenmiş sürümü bir kez yerelde açıp gezmek bu tür sürprizleri erken gösterir.
