---
term: "PATH"
tr: ""
aliases: ["yol değişkeni", "path değişkeni"]
category: araclar
subcategory: "Geliştirme ortamı"
level: baslangic
short: "Adını yazdığın programın hangi klasörlerde, hangi sırayla aranacağını söyleyen ortam değişkeni."
related: [shell, environment-variable, terminal, working-directory, npm]
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

`node` yazdığında kabuk o programı nereden buluyor? PATH'ten. PATH, çalıştırılabilir dosyaların aranacağı klasörlerin sıralı listesini tutan bir [[environment-variable|ortam değişkeni]]dir. [[shell|Kabuk]] listeye baştan bakar ve ilk bulduğu eşleşmeyi çalıştırır.

Bir aracı kurduğun hâlde "komut bulunamadı" hatası alıyorsan sebep neredeyse her zaman budur: program diskte vardır ama bulunduğu klasör PATH'te yoktur.

PATH bir değişkenin adıdır, çevrilmez; her sistemde aynen böyle yazılır.

## Benzetme

Anahtarını ararken hep aynı sırayla baktığın yerler gibi: önce ceket cebi, sonra masa, sonra komodin. İlk bulduğunda durur, kalanlara bakmazsın. PATH de böyle çalışır — aynı isimde iki program varsa listede önce gelen kazanır, diğeri hiç denenmez.

## Örnek

Listeyi görmek:

```bash
echo $PATH
```

```powershell
$env:PATH
```

Bir komutun hangi dosyadan geldiğini öğrenmek:

```bash
which node
```

```powershell
Get-Command node
```

bash klasörleri `:` ile ayırır, Windows `;` ile.

## Dikkat

PATH'e yeni bir klasör eklediğinde açık duran terminal bunu görmez; değişikliğin geçerli olması için yeni bir terminal açman gerekir. Kurulum sonrası "çalışmıyor" sanılan şeylerin çoğu budur.

PATH'i elle düzenlerken mevcut değeri silip üzerine yazma; sona ekle. Listeyi boşaltmak sistemdeki komutların büyük kısmını erişilemez hâle getirir.

Günlük konuşmada "path" kelimesi dosya yolu anlamında da kullanılır. Bu sayfadaki PATH ise bir ortam değişkeninin adıdır.
