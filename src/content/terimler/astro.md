---
term: "Astro"
tr: ""
aliases: []
category: web
subcategory: "Frontend"
level: orta
short: "İçerik ağırlıklı siteleri varsayılan olarak statik HTML üreterek kuran, JavaScript'i yalnızca gereken yere koyan web çatısı."
related: [static-site-generation-ssg, component, framework, vite, javascript]
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

Astro, içerik ağırlıklı siteler için tasarlanmış bir web [[framework|çatısıdır]]. Varsayılan davranışı şudur: sayfalar [[static-site-generation-ssg|derleme sırasında]] üretilir ve tarayıcıya gönderilen çıktıda, o sayfa için gerekmiyorsa hiç [[javascript|JavaScript]] bulunmaz.

Cevap verdiği sorun, çoğunlukla okunan bir sitenin — blog, belgeler, katalog — tam bir uygulama gibi paketlenip kullanıcıya gereğinden fazla kod indirtmesidir.

## Nasıl çalışır?

Sayfalar [[component|bileşenlerden]] kurulur, ama bileşenlerin çoğu yalnızca derleme anında çalışır ve geriye düz HTML bırakır. Etkileşim gereken parçalar ayrıca işaretlenir; yalnızca o parçaların kodu tarayıcıya gider ve sayfanın kalanı hareketsiz kalır. Bu yaklaşıma "ada" denir: etkileşim, sayfanın tamamına yayılmak yerine birkaç noktada toplanır.

Bileşenler Astro'nun kendi söz dizimiyle ya da başka arayüz kütüphaneleriyle yazılabilir; aynı projede karışık kullanılabilir. İstenen sayfalar statik yerine istek anında da üretilebilir. Geliştirme sunucusu ve paketleme tarafında [[vite|Vite]] kullanılır.

## Dikkat

Bu yaklaşım her iş için uygun değildir. Ekranın tamamı sürekli veri değiştiren, yoğun etkileşimli bir uygulamada "varsayılan olarak JavaScript yok" kuralı bir kolaylık sağlamaz; oraya baştan uygulama olarak kurulan bir çatı daha uygundur. Astro'nun yerinde durduğu yer, etkileşimin sayfanın tamamına değil birkaç noktasına gerektiği sitelerdir.
