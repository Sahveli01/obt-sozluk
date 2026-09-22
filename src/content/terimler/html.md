---
term: "HTML"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: baslangic
short: "Bir web sayfasının içeriğini ve yapısını etiketlerle tanımlayan işaretleme dili."
related: [browser, dom, css, javascript, world-wide-web]
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

HTML, bir web sayfasının içinde ne olduğunu ve bu içeriğin nasıl yapılandığını etiketlerle anlatan bir işaretleme dilidir. Programlama dili değildir: koşul kuramaz, döngü döndüremez, hesap yapamaz. Tek yaptığı "burası başlık, burası paragraf, burası bağlantı" demektir.

[[browser|Tarayıcı]] bu etiketleri okuyup sayfanın ağaç biçimindeki modelini, yani [[dom|DOM]]'u kurar. Görünüm [[css|CSS]] ile, davranış [[javascript|JavaScript]] ile eklenir. Üçü aynı sayfada birlikte çalışır ama işleri ayrıdır; bu ayrımı korumak, sonradan bakımı kolaylaştırır.

## Örnek

```html
<article class="terim">
  <h1>Blok</h1>
  <p>Bir blok, <a href="/terim/islem">işlemleri</a> bir arada tutan kayıttır.</p>
</article>
```

`<h1>` başlığı, `<p>` paragrafı, `<a>` ise bağlantıyı işaretler. Etiketlerin çoğu açılır ve kapanır; arada kalan içerik o etiketin kapsamındadır.

## Dikkat

Hangi etiketi seçtiğin önemlidir. Her şeyi `<div>` ile yazmak ekranda benzer görünebilir, ama ekran okuyucular, arama motorları ve klavyeyle gezen kullanıcılar anlamı etiketlerden çıkarır. Başlık için başlık etiketi, düğme için düğme etiketi kullanmak, sonradan eklenen bir erişilebilirlik yamasından çok daha sağlam çalışır.
