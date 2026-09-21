---
term: "Integration Test"
tr: "Entegrasyon testi"
aliases: ["entegrasyon testi", "integration testing"]
category: araclar
subcategory: "Test ve kalite"
level: orta
short: "Tek tek doğru çalıştığı bilinen parçaların bir araya geldiklerinde de doğru çalıştığını kontrol eden test."
related: [software-testing, unit-test, end-to-end-test, mock, fixture]
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

Entegrasyon testi, tek tek doğru çalıştığı bilinen parçaların bir araya geldiklerinde de doğru çalıştığını kontrol eder. [[unit-test|Birim test]] her parçayı yalnız bırakır; entegrasyon testi tam tersine parçaların arasındaki sınırı hedef alır: bir modülün diğerine verdiği veri, veritabanı sorgusu, servisler arası istek.

Hataların önemli bir kısmı parçaların içinde değil aralarında yaşar. Biri tarihi metin olarak verir, diğeri sayı bekler; biri hata durumunda boş değer döner, diğeri bunu hiç hesaba katmamıştır. Her iki parçanın da birim testleri yeşildir, sistem yine de çalışmaz. [[software-testing|Test piramidinin]] orta basamağı tam olarak bu boşluk için vardır.

## Nasıl çalışır?

Entegrasyon testinde sahtelerin sayısı azaltılır. Veritabanı gerçekten ayağa kaldırılır — çoğunlukla bellek içi bir kopya ya da [[docker|Docker]] ile açılıp test bitince atılan tek kullanımlık bir kap. Test başlamadan önce tabloya bilinen veriler yazılır; bunlara [[fixture|fixture]] denir. Sonra kod çalıştırılır ve iki şeye birden bakılır: dönen cevap ve veritabanının son hâli.

Dış dünyaya çıkan bağımlılıklar burada da sahtelenir. Ödeme sağlayıcısını ya da e-posta servisini her testte gerçekten çağırmak hem yavaştır hem para harcar hem de o servis bir gün yanıt vermediğinde senin testini kırar.

Her testin sonunda ortamın temizlenmesi şarttır. Bir testin bıraktığı kayıt bir sonrakinin sonucunu değiştiriyorsa testler tek tek geçip topluca kalmaya başlar.

## Dikkat

Entegrasyon testleri birim testlerden yavaştır ve daha kırılgandır: veritabanı açılmazsa ya da bir port meşgulse kodda hiçbir sorun olmadığı hâlde kırmızı yanarlar. Kırmızı yandıklarında "hangi parça bozuk" sorusunun cevabı da daha zordur, çünkü şüpheli sayısı birden fazladır. Bu yüzden ölçü, çok sayıda entegrasyon testi yazmak değil, gerçekten riskli olan sınırları seçmektir.
