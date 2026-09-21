---
term: "Tensor"
tr: "Tensör"
aliases: []
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Sayıların birden çok boyutta düzenlenmiş hali; yapay zekâda hem veri hem model ağırlıkları bu biçimde tutulur."
related: [gpu, neural-network, vector, embedding, weights]
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

Tensör, çok boyutlu bir sayı dizisidir. Tek sıra hâlindeki sayılar tek boyutludur; satır ve sütunlardan oluşan bir tablo iki boyutlu; aynı ölçüdeki birçok tabloyu üst üste koyarsan üç boyutlu. Yapay zekâda hem veri hem de model [[weights|ağırlıkları]] bu biçimde tutulur, çünkü kütüphanelerin ve donanımın ortak dili budur.

## Benzetme

Elektronik tablo dosyası gibi düşün. Tek bir sütun basit bir listedir; sayfanın tamamı satır-sütun tablosudur; aynı dosyadaki onlarca sayfa ise üçüncü boyutu verir. Sayılar aynı sayılardır — değişen, nasıl düzenlendikleri ve hangi boyutun neyi temsil ettiğidir.

## Nasıl çalışır?

Bir tensörün "şekli", her boyutta kaç eleman olduğunu söyler. Bir görüntü öbeği örneğin kaç resim, yükseklik, genişlik ve renk kanalı biçiminde tutulur; bir metin öbeği ise kaç örnek, örnek başına kaç [[token-ai|token]] ve her token'ı temsil eden [[vector|vektörün]] uzunluğu biçiminde.

Model bir katmandan diğerine geçerken bu şekil sürekli değişir. İki tensörün şekilleri birbirine uymadığında hesap yapılamaz; pratikte en sık karşılaşılan hata mesajlarının kaynağı budur. Tensörler üzerindeki işlemler aynı anda milyonlarca sayıya uygulanabildiği için [[gpu|GPU]] gibi donanımlarda çok hızlı çalışırlar.

## Dikkat

Matematikte ve fizikte tensörün daha dar, dönüşüm kurallarıyla tanımlı bir anlamı vardır. Yapay zekâ kütüphanelerinde kelime gevşek kullanılır ve pratikte "çok boyutlu dizi" demektir; bu maddede kastedilen de odur. Matematiksel tanımı bilmeden tensörlerle çalışmak gayet mümkündür.
