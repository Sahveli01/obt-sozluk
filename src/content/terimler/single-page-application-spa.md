---
term: "Single Page Application (SPA)"
tr: "Tek sayfa uygulaması"
aliases: ["spa"]
category: web
subcategory: "Frontend"
level: orta
short: "Tarayıcının bir kez sayfa yükleyip sonraki ekranları sunucudan yeni sayfa istemeden JavaScript ile çizdiği uygulama biçimi."
related: [client-web, server-side-rendering-ssr, react, browser, url]
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

Klasik web'de her bağlantı tıklamasında [[browser|tarayıcı]] sunucudan yepyeni bir sayfa ister; ekran bir an beyazlar ve her şey baştan kurulur. Tek sayfa uygulamasında ise tarayıcı bir kez bir sayfa ve bir JavaScript paketi indirir. Sonraki ekran geçişlerini bu paket yapar: sunucudan artık sayfa değil, yalnızca veri istenir.

Sonuç, masaüstü uygulamasına benzeyen bir akıştır — ekranlar arası geçişte sayfa yeniden yüklenmez, yazdığın filtre ya da açtığın panel yerinde kalır.

## Nasıl çalışır?

Adres çubuğu yine değişir, ama bunu sunucu değil uygulama yapar: tarayıcının geçmiş arayüzünü kullanarak [[url|adresi]] günceller ve o adrese karşılık gelen ekranı çizer. Geri tuşunun çalışması da buna bağlıdır; bu bağ doğru kurulmazsa geri tuşu kullanıcıyı uygulamadan çıkarır.

Veri [[client-web|istemci]] tarafında çekilir ve bellekte tutulur; aynı veriyi ikinci kez görmek için ağa çıkmak gerekmez.

## Dikkat

Bedeli ilk açılışta ödenir: paket inip çalışana kadar ekranda çoğu zaman boş bir kutu durur. Paket büyüdükçe bu bekleme uzar ve zayıf bağlantıda en çok hissedilen şey bu olur.

Her site için de doğru seçim değildir. Çoğunlukla okunan, ekranları arasında sık gidip gelinmeyen bir sitede klasik sayfa yüklemeleri daha hızlı ve daha basittir. İkisinin arasını bulmak için sayfanın ilk hâlini sunucuda üretip üstüne etkileşim bağlayan yaklaşımlar vardır — [[server-side-rendering-ssr|SSR]] bunun adıdır; [[react|React]] gibi kütüphaneler her iki biçimde de kullanılabilir.
