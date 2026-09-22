---
term: "Hash Function"
tr: "Özet fonksiyonu"
aliases: ["özet fonksiyonu", "hash fonksiyonu"]
category: kriptografi
subcategory: "Hash fonksiyonları"
level: orta
short: "Her uzunluktaki veriyi sabit uzunlukta bir çıktıya çeviren, tersine çevrilmek üzere tasarlanmamış fonksiyon."
related: [hash, collision-resistance, preimage-resistance, avalanche-effect, sha-256, keccak-256]
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

Hash fonksiyonu, kendisine verilen veriyi sabit uzunlukta bir çıktıya çeviren fonksiyondur. Çıkan değere [[hash|hash]] denir; bu yazı çıktıyı değil, çıktıyı üreten makineyi anlatıyor.

Her hash fonksiyonu kriptografik değildir. Bir [[hash-map-dictionary|hash map]] içinde kullanılan fonksiyonun tek derdi hızlı olmak ve anahtarları kovalara dengeli dağıtmaktır; oradaki bir çakışma sıkıntı değil, çözülmesi gereken sıradan bir durumdur. Kriptografik hash fonksiyonundan ise fazlası beklenir: kimse aynı çıktıyı veren iki girdi bulamasın ([[collision-resistance|çarpışma direnci]]), kimse eldeki çıktıdan bir girdiye geri dönemesin ([[preimage-resistance|preimage direnci]]) ve girdideki en küçük değişiklik çıktıyı tanınmaz hâle getirsin ([[avalanche-effect|çığ etkisi]]).

## Nasıl çalışır?

Fonksiyon, sabit büyüklükte bir **iç durum** tutar — bir avuç sayıdan ibaret bir hafıza. Girdi eşit boydaki parçalara bölünür; her parça sırayla bu duruma karıştırılır. Karıştırma işi kaydırma, XOR ve toplama gibi ucuz işlemlerin defalarca tekrarlanmasından oluşur. Girdi bittiğinde iç durumun tamamı ya da bir bölümü çıktı olarak verilir.

Girdinin boyu çıktının boyunu etkilemez, çünkü çıktı girdiden değil iç durumdan okunur. Girdi uzadıkça değişen tek şey, karıştırma turlarının sayısıdır.

Son parça çoğu zaman tam dolmaz; boşluk **dolgu (padding)** denen sabit bir kuralla doldurulur. Bu kuralın ayrıntısı önemsiz görünür ama değildir: aynı çekirdek, farklı dolgu kuralıyla farklı bir fonksiyon olur. [[keccak-256|Keccak-256]] ile SHA3-256 arasındaki fark tam olarak budur.

## Dikkat

Kendi hash fonksiyonunu yazma. Bu fonksiyonların güvenilirliği, akıllıca görünmelerinden değil, yıllarca çok sayıda araştırmacı tarafından kırılmaya çalışılıp kırılamamış olmalarından gelir. Denetlenmiş bir kütüphaneyi ya da dilin yerleşik fonksiyonunu çağır.

Güvenlik gizlilikten de gelmez: [[sha-256|SHA-256]]'nın her adımı yayımlanmıştır, herkes okuyabilir. Gizli olması gereken tek şey varsa o girdidir, fonksiyon değil.

Parola saklamak için düz bir hash fonksiyonu yetmez. Orada istenen şey hızlı olmak değil, kasten yavaş olmaktır; o iş [[key-derivation|anahtar türetme]] fonksiyonlarına aittir.
