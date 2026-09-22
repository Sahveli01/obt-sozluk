---
term: "Avalanche Effect"
tr: "Çığ etkisi"
aliases: ["çığ etkisi"]
category: kriptografi
subcategory: "Hash fonksiyonları"
level: orta
short: "Girdideki tek bitlik bir değişikliğin çıktının yaklaşık yarısını değiştirmesi; iyi bir hash fonksiyonundan beklenen davranış."
related: [hash-function, hash, collision-resistance, blockchain, checksum]
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

Çığ etkisi, girdideki en küçük değişikliğin çıktıyı baştan sona değiştirmesidir. Tek bir harfi büyütsen, tek bir boşluk eklesen bile yeni [[hash|hash]] eskisine hiç benzemez: çıktı bitlerinin ortalama yarısı taraf değiştirir ve hangi yarısı olduğu önceden kestirilemez.

Bu bir yan etki değil, tasarım hedefidir. Bir [[hash-function|hash fonksiyonu]] tasarlanırken doğrudan bu davranış ölçülür ve aranır.

## Benzetme

Masada 256 madeni para dizili olduğunu düşün; her biri ya yazı ya tura. Girdide tek bir harfi değiştirdiğinde bu paraların hepsi birden yeniden havaya atılır. Yaklaşık yarısı taraf değiştirir, hangi yarısı olduğunu kimse önceden bilemez.

Önemli olan kısmı şu: eski dizilişe bakıp yenisini tahmin edemezsin. İki diziliş arasında hiçbir akrabalık kalmaz — "az değiştirdim, az değişti" diye bir şey yoktur.

## Nasıl çalışır?

Fonksiyon girdiyi tek seferde değil, tur tur işler. Her turda bitler kaydırılır, birbirleriyle XOR'lanır, toplanır. Bir turda iki bite bulaşan fark sonraki turda dört bite, ondan sonrakinde sekize yayılır. Yeterli tur sonunda başlangıçtaki tek bitin izi çıktının tamamına dağılmış olur. Tasarımcıların tur sayısını gerekenin epey üstünde tutmasının sebebi budur.

Bu mekanizma [[blockchain|blok zincirinde]] geçmişin neden düzeltilemediğini de açıklar. Eski bir bloktaki tek bir baytı değiştirirsen o bloğun özeti azıcık kaymaz; tamamen başka bir değere dönüşür. Sonraki bloğun içinde yazılı olan değerle hiçbir ilgisi kalmaz ve bağ o noktada kopar.

## Dikkat

Çığ etkisinden çıkan pratik kural: **iki hash'in birbirine benzemesi, girdilerinin benzediği anlamına gelmez.** Hash'ler arasında yakınlık, sıralama ya da benzerlik diye bir kavram yoktur. Bu yüzden hash değerleri benzer kayıtları gruplamak ya da "bu dosya şuna ne kadar benziyor" sorusunu cevaplamak için kullanılamaz; orada başka türden fonksiyonlar gerekir.

Tersi de doğru: çığ etkisi olmayan basit bir [[checksum|sağlama]], benzer girdiler için benzer çıktı verir. Bu onu kusurlu yapmaz — sağlamanın işi zaten yazım hatası yakalamaktır, saldırgana direnmek değil. İkisini birbirinin yerine kullanmak ise kusurdur.
