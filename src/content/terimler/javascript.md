---
term: "JavaScript"
tr: ""
aliases: ["js"]
category: programlama
subcategory: "Diller ve formatlar"
level: baslangic
short: "Web sayfalarına davranış kazandıran, tarayıcının doğrudan çalıştırdığı dinamik tipli dil."
related: [browser, dom, dynamic-typing, node-js, typescript, event-loop]
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

JavaScript, web sayfalarına davranış kazandırmak için ortaya çıkmış bir dildir. [[browser|Tarayıcı]] bir sayfayı açtığında içindeki JavaScript'i de çalıştırır; kod, sayfanın yapısını temsil eden [[dom|DOM]] üstünde değişiklik yaparak düğmeleri çalışır hale getirir, sunucudan veri çeker, ekranı günceller.

[[node-js|Node.js]] ile birlikte aynı dil tarayıcı dışında da çalışabilir oldu. Bugün sunucu programları, komut satırı araçları ve derleme betikleri de JavaScript ile yazılıyor; aynı dili iki tarafta birden kullanabilmek yaygın bir tercih sebebi.

Tipler [[dynamic-typing|çalışma anında]] belirlenir: bir değişkene önce sayı, sonra metin koyabilirsin. Bu başlarken hızlandırır, ama proje büyüdükçe bazı hataların ancak program o satıra geldiğinde ortaya çıkmasına yol açar. [[typescript|TypeScript]] tam olarak bu boşluğu kapatmak için vardır.

## Örnek

```javascript
let deger = 5;
deger = "beş";
console.log(typeof deger);
```

Bu program `string` yazar: değişkenin tipi, içine en son ne koyduğuna göre değişti.

## Dikkat

Tarayıcıda çalışan JavaScript kullanıcının bilgisayarında çalışır. Kodu herkes görebilir, değiştirebilir ve istediği sonucu döndürmeye zorlayabilir. Bu yüzden gizli kalması gereken anahtarlar tarayıcı koduna konmaz ve önemli her doğrulama sunucu ya da sözleşme tarafında tekrarlanır.
