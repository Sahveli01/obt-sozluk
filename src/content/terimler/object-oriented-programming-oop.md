---
term: "Object-Oriented Programming (OOP)"
tr: "Nesne yönelimli programlama"
aliases: ["OOP", "nesne yönelimli programlama"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Veriyi ve o veriyi işleyen kodu tek bir birimde toplayan programlama yaklaşımı."
related: [class, object, method, encapsulation, inheritance, functional-programming]
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

Nesne yönelimli programlama, veriyi ve o veriyi işleyen kodu tek bir birimde toplayan yaklaşımdır. Bir banka hesabının bakiyesi bir dosyada, "para yatır" işlemi bambaşka bir dosyada durmaz; ikisi aynı birimin içindedir ve bakiyeye yalnızca o birimin izin verdiği işlemlerle dokunulur.

Bu birimin tarifine [[class|sınıf]], tariften üretilen tek tek örneklere [[object|nesne]], nesnenin üstünde çalışan işlevlere [[method|metot]] denir. Program yazmak, hangi nesnelerin var olacağına ve birbirlerinden ne isteyeceklerine karar vermek hâline gelir.

## Nasıl çalışır?

Yaklaşımın üstünde durduğu dört fikir vardır:

- [[encapsulation|Kapsülleme]]: nesnenin içindeki veriye dışarıdan doğrudan dokunulmaz, yalnızca metotlar üzerinden erişilir.
- [[abstraction|Soyutlama]]: dışarıya yalnızca işe yarayan işlemler gösterilir, ayrıntı içeride kalır.
- [[inheritance|Kalıtım]]: bir sınıf başka bir sınıfın tarifini devralıp üstüne ekleme yapar.
- [[polymorphism|Çok biçimlilik]]: aynı çağrı, karşısındaki nesnenin türüne göre farklı davranır.

Bunlar zorunlu bir paket değildir. Çoğu dil dördünü de sunar, ama her program dördünü birden kullanmaz; küçük bir betikte tek bir sınıf bile fazla gelebilir.

## Dikkat

OOP ile [[functional-programming|fonksiyonel programlama]] sık sık karşı karşıya konur. İkisi farklı şeyleri kolaylaştırır. OOP durumu (state) nesnelerin içine dağıtır: birbirini az ilgilendiren çok sayıda varlık varsa — kullanıcılar, siparişler, cihazlar — bu bölünme kodu düzenli tutar. Fonksiyonel yaklaşım ise durumu mümkün olduğunca ortadan kaldırır; veri akışının baştan sona izlenebilir olmasını öne alır.

Bedelleri de farklıdır. Nesnelere dağılmış durum, "bu değeri en son kim değiştirdi" sorusunu zorlaştırabilir. Durumu tamamen dışlamak ise doğası gereği durum taşıyan işlerde — bir oyun, bir kullanıcı arayüzü — kodu dolambaçlı hâle getirebilir. Bugün yaygın kullanılan dillerin çoğu iki yaklaşımı da destekler ve gerçek projeler genellikle karışık yazılır; seçim ideolojik değil, elindeki probleme göre yapılır.
