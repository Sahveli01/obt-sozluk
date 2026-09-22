---
term: "React"
tr: ""
aliases: []
category: web
subcategory: "Frontend"
level: orta
short: "Kullanıcı arayüzlerini bileşenlerden kurmak için kullanılan JavaScript kütüphanesi."
related: [component, props, state-frontend, hook-react, virtual-dom, javascript]
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

React, arayüzleri [[component|bileşenlerden]] kurmak için kullanılan bir [[javascript|JavaScript]] [[library-yazilim|kütüphanesidir]]. Cevap verdiği soru şudur: ekranda gösterilen veri değiştiğinde ekranı kim, ne zaman güncelleyecek?

React'in cevabı "sen güncellemeyeceksin"dir. Arayüzü "bu veriyle ekran şöyle görünür" diye tanımlarsın; veri değiştiğinde ekranın yeni hâlini React hesaplar ve sayfaya yansıtır.

## Nasıl çalışır?

Bileşen, aldığı [[props|props]] ve tuttuğu [[state-frontend|state]] ile ekranda ne görüneceğini döndüren bir fonksiyondur. Arayüz, JSX denen ve HTML'e benzeyen bir söz dizimiyle yazılır; bu söz dizimi tarayıcıya gitmeden önce sıradan fonksiyon çağrılarına dönüştürülür.

State değiştiğinde ilgili bileşenler yeniden çalışır. React çıkan sonucu bir öncekiyle karşılaştırır ve [[virtual-dom|sanal DOM]] üzerinden yalnızca değişen kısmı gerçek sayfaya yazar.

Bileşene state tutma ve yan etki çalıştırma gibi yetenekler [[hook-react|hook]] denen fonksiyonlarla bağlanır.

## Dikkat

React bir çatı değil kütüphanedir: hangi adresin hangi ekranı göstereceği, verinin nereden çekileceği, kodun nasıl derleneceği gibi işleri kendisi çözmez. Bunlar ayrı araçlarla ya da React üstüne kurulmuş çatılarla gelir; bir projede "React kullanıyoruz" demek çoğu zaman yanında beş altı aracın daha olduğu anlamına gelir.

Bir de şu: React'in sunduğu kolaylık bedavaya gelmez. Kullanıcıya indirilen JavaScript paketi büyüktür ve çoğunlukla okunan basit bir sayfa için bu ağırlık gereksiz kalır.
