---
term: "Abstraction"
tr: "Soyutlama"
aliases: ["soyutlama"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Bir şeyi, o anki amaç için gereken ayrıntılarla anlatıp gerisini kasten dışarıda bırakma."
related: [encapsulation, interface, function, object-oriented-programming-oop, design-pattern]
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

Soyutlama, bir şeyi o anki amaç için gereken ayrıntılarla anlatıp gerisini kasten dışarıda bırakmaktır. Eksiklik burada kusur değil, işin amacıdır: her ayrıntıyı taşıyan bir tarif, tarif olmaktan çıkar.

Programlamada bu, "ne yapıldığını" söyleyip "nasıl yapıldığını" saklamak demektir. `siparis.onayla()` yazan kişi; stoğun düşülmesini, e-postanın gönderilmesini, ödemenin çekilmesini bilmek zorunda değildir. Bir [[function|fonksiyona]] ad vermek bile bir soyutlamadır: on satırı tek bir kelimeye indirirsin.

## Benzetme

Birine adres tarif ederken çizdiğin kroki gibi. Krokide binaların gerçek boyutları, sokakların kaç metre olduğu, aradaki ağaçlar yoktur. Yalnızca dönülecek iki köşe, bir köprü ve tanıdık bir market vardır. Kroki bu yüzden işe yarar; gerçek ölçekli bir harita çizseydin, adamın yolu bulması daha uzun sürerdi. Ama bir de şu var: aynı kroki, mahallede su borusu döşeyecek biri için tamamen kullanışsızdır. Soyutlama her zaman bir amaca göre yapılır.

## Nasıl çalışır?

Yazılım katman katman kurulur ve her katman alttakinin ayrıntısını yutar. Web sayfasındaki bir "gönder" düğmesinin altında HTTP isteği, onun altında TCP paketleri, onun altında elektrik sinyalleri vardır. Hiç kimse hepsini aynı anda düşünmez; herkes bir katman aşağısını hazır kabul eder.

Kodda bu katmanlar fonksiyonlarla, modüllerle ve [[interface|arayüzlerle]] kurulur. Arayüz, soyutlamanın dile yazılmış hâlidir: dışarıya yalnızca işlem listesi görünür.

## Örnek

```python
veriler = [5, 3, 9, 1]
print(sorted(veriler))     # [1, 3, 5, 9]
```

Bu iki satırda hangi sıralama algoritmasının çalıştığı, kaç karşılaştırma yapıldığı, belleğin nasıl kullanıldığı görünmez. Bilmen gereken tek şey "sıralanmış yeni bir liste döner"dir.

## Dikkat

Soyutlama ile [[encapsulation|kapsülleme]] karıştırılır; ayrımı kapsülleme maddesinde bulursun.

Soyutlamaların sızdıran bir yanı vardır: içeride olan biten, bir gün beklenmedik bir yerden dışarı vurur. Sıralama işlemi çok büyük bir listede yavaşladığında, algoritmayı görmezden gelmek artık mümkün olmaz. Bu yüzden "hiç bilmene gerek yok" cümlesi çoğu zaman "genellikle bilmene gerek yok" anlamına gelir.

Bir de fazlası zarar verir. Her ihtimali karşılamak için kurulan katmanlar, tek bir satırı değiştirmek için beş dosya açmaya dönüşebilir. Soyutlamanın doğru zamanı, tekrar eden ihtiyacı gerçekten gördüğün andır.
