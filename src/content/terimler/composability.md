---
term: "Composability"
tr: "Birleştirilebilirlik"
aliases: []
category: akilli-sozlesmeler
subcategory: "Temeller"
level: orta
short: "Zincirdeki sözleşmelerin birbirini izin almadan çağırıp tek bir işlemde yeni bir bütün oluşturabilmesi."
related: [cross-contract-call, permissionless, defi-primitive, flash-loan, smart-contract, upgradeable-contract]
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

Birleştirilebilirlik, zincirdeki sözleşmelerin birbirini serbestçe kullanabilmesidir. Bir borç verme protokolünün üstüne bir takas protokolü, onun üstüne bir getiri stratejisi koyabilirsin; üçü birbirinden habersiz ekipler tarafından yazılmış olsa bile bir arada çalışır. [[defi-primitive|DeFi yapı taşlarının]] bu kadar hızlı çoğalmasının sebebi budur.

## Benzetme

Bahçe hortumu ek parçaları gibi. Musluk başlığı, hortum, Y bağlantı ve fıskiye ayrı ayrı üretilir ama uçlarının ölçüsü aynıdır. Birini diğerine takarsın, üçünü arka arkaya dizersin; sonuncunun çıkışı bir sonrakinin girişi olur. Kimse üreticiye "bunu şuna takabilir miyim" diye sormaz — ölçü tuttuğu için takılır.

## Nasıl çalışır?

İki şey bunu mümkün kılar.

**Açık arayüz.** Sözleşmenin dışarıya açtığı fonksiyonlar ve [[application-binary-interface-abi|ABI]] tanımı herkese görünürdür. Çağırmak için izin, anahtar ya da imzalanmış bir anlaşma gerekmez; [[permissionless|izinsizliğin]] pratikteki karşılığı budur.

**Bölünmezlik.** Arka arkaya yapılan bütün [[cross-contract-call|sözleşmeler arası çağrılar]] tek bir işlemin içindedir. Zincirin ucundaki adım başarısız olursa baştaki adımlar da geri alınır; yarım kalmış bir durum ortaya çıkmaz. [[flash-loan|Flash loan]] gibi ilk bakışta imkânsız görünen kurgular tam da bu güvenceye yaslanır.

## Dikkat

Birleştirilebilirlik riskleri de birleştirir. Bağlandığın sözleşmedeki bir açık, kendi kodunda tek satır hata olmasa bile seni vurur. Fiyatını okuduğun kaynak oynanabilir, üstüne inşa ettiğin sözleşme [[upgradeable-contract|yükseltilebilir]] olabilir ve altından değişebilir.

Bir yapı taşını kullanmadan önce sorulacak soru "işe yarıyor mu" değil, "bu sözleşmeyi kim, hangi koşulda değiştirebiliyor" sorusudur.
