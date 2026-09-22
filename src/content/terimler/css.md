---
term: "CSS"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: baslangic
short: "HTML ile işaretlenmiş içeriğin nasıl görüneceğini kurallarla belirleyen biçimleme dili."
related: [html, browser, dom, frontend, javascript]
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

CSS, [[html|HTML]] ile işaretlenmiş içeriğin nasıl görüneceğini belirleyen dildir. Kurallardan oluşur: önce hangi öğelerden söz ettiğini söyleyen bir seçici, ardından süslü parantez içinde o öğelere uygulanacak özellikler.

İçeriği görünümden ayırmak iki şeyi mümkün kılar. Aynı HTML, ekran genişliğine göre farklı yerleşimle gösterilebilir; ve tek bir dosyayı değiştirerek sitenin tamamının görünümü değiştirilebilir. [[frontend|Arayüz]] işinin büyük bölümü bu iki imkânın üstüne kurulur.

## Örnek

```css
.terim {
  max-width: 40rem;
  line-height: 1.6;
}

.terim a:hover {
  text-decoration: underline;
}
```

Birinci kural `terim` sınıfındaki öğelerin genişliğini ve satır aralığını ayarlar. İkincisi yalnızca fare üstüne geldiğinde bağlantının altını çizer.

## Dikkat

Adındaki "cascading" yani basamaklılık, aynı öğeye birden fazla kuralın uyabilmesidir. Çakışma olduğunda hangisinin kazanacağını seçicinin özgüllüğü ve dosyadaki sıra belirler. Bir kuralın "çalışmadığı" izleniminin en yaygın sebebi budur: kural aslında uygulanmıştır, üstüne başka bir kural binmiştir. Tarayıcının geliştirici araçları hangi kuralın kazandığını gösterir; tahmin etmeye çalışmak yerine oraya bakmak zaman kazandırır.
