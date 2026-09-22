---
term: "Go"
tr: ""
aliases: ["golang"]
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "Sunucu ve ağ yazılımı için tasarlanmış, eşzamanlılığı dile gömülü, tek dosyaya derlenen sade bir dil."
related: [concurrency, backend, server, garbage-collection, execution-client, compiler]
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

Go, sunucu ve ağ yazılımı yazmak için tasarlanmış, derlenen bir dildir. Tasarımında öne çıkan tercih azlıktır: az sayıda anahtar kelime, az sayıda dil yapısı ve aynı işi yapmanın az sayıda yolu. Bunun pratik sonucu, dili birkaç günde öğrenip başkasının kodunu rahatça okuyabilmendir. Karşılığında, başka dillerde tek satırda yazdığın bazı şeyleri burada elle açmak gerekir; kod daha uzun ama daha az sürprizli olur.

Derleyici bağımlılıkları da içine alan tek bir çalıştırılabilir dosya üretir, bu da dağıtımı basitleştirir. Belleği [[garbage-collection|çöp toplayıcı]] yönetir; yani [[rust|Rust]] ya da [[c-dil|C]] düzeyinde ince bellek denetimi yoktur, buna karşılık bellek yönetimi zihin yükü olmaktan çıkar.

## Nasıl çalışır?

[[concurrency|Eşzamanlılık]] dile gömülüdür. Bir çağrının önüne `go` yazdığında o fonksiyon, goroutine denen hafif bir yürütme birimi içinde ayrı çalışmaya başlar. Goroutine'ler işletim sistemi [[thread|iş parçacıklarından]] çok daha ucuzdur; bu yüzden binlercesini aynı anda çalıştırmak olağandır. Birbirleriyle paylaşılan değişkenler üzerinden değil, kanal (channel) denen yapılar üzerinden veri geçirerek konuşmaları teşvik edilir.

## Dikkat

Go'yu blockchain dünyasında çoğunlukla zincir üstünde değil, zincirin altyapısında görürsün: düğüm yazılımları, [[execution-client|istemciler]], indeksleyiciler ve [[server|sunucu]] tarafı servisler. Zincir üstü sözleşme yazmak için kullanılan bir dil değildir.

Dilin sadeliği bazen eleştiri konusu olur; bu bir kusur değil, bilinçli bir takastır: dil küçük tutuldukça okunması kolaylaşır, ifade gücü daralır. Hangi tarafın ağır bastığı projeye göre değişir.
