---
term: "Flash Loan Attack"
tr: ""
aliases: []
category: guvenlik
subcategory: "Ekonomik ve protokol saldırıları"
level: ileri
short: "Tek işlemde ödünç alınan büyük sermayeyle, bir protokolün kendi kurallarını kendine karşı çalıştırma."
related: [flash-loan, oracle-manipulation, governance-attack, invariant-testing, smart-contract-audit, exploit]
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

[[flash-loan|Flash loan]], aynı işlem içinde geri ödenmek şartıyla teminatsız ve çok büyük tutarlarda borç almayı mümkün kılar. Bu tek başına bir açık değildir. Ama bir protokolün güvenliği sessizce "kimsenin bu kadar parası yok" varsayımına dayanıyorsa, flash loan o varsayımı ortadan kaldırır.

**Flash loan saldırısı** bu yüzden yeni bir açık sınıfı değil, var olan açıkları büyüten bir çarpandır. Saldırgan kodu kırmaz; kodun zaten izin verdiği şeyi, kimsenin yapabileceği düşünülmemiş bir büyüklükte yapar.

Terim İngilizce kullanılır; "flash loan" için yerleşik bir Türkçe karşılık yok.

## Nasıl çalışır?

Belirleyici olan büyüklük değil, **atomikliktir**: işlem baştan sona ya tamamen gerçekleşir ya da hiç gerçekleşmez. Borç aynı işlemde kapanacağı için saldırganın açıkta kaldığı bir an yoktur. Hesap tutmazsa işlem geri alınır ve geriye yalnızca ödenen [[gas|gas]] kalır — yani başarısız denemenin bedeli yok denecek kadar azdır.

Sermaye engeli kalkınca, güvenliği miktara bağlayan her tasarım açıkta kalır. Tek bir havuzun anlık fiyatına bakan bir besleme ([[oracle-manipulation|oracle manipülasyonu]]), anlık bakiyeyi oy gücü sayan bir yönetişim ([[governance-attack|yönetişim saldırısı]]) ya da "bu kadar büyük bir işlem gelmez" varsayımıyla yazılmış bir muhasebe, aynı kapıya çıkar.

## Dikkat

Savunma hep aynı yere bakar: bir kararın doğruluğu, o kararın verildiği anda kimin ne kadar parası olduğuna bağlanmamalıdır.

- Fiyat, oy gücü ve pay gibi kritik değerleri tek bir bloğun anlık durumundan değil, zamana yayılmış ya da geçmişe sabitlenmiş bir kaynaktan oku.
- Protokolün her koşulda doğru kalması gereken kurallarını yazıya dök ve bunları [[invariant-testing|değişmez testleriyle]] sına. Bu saldırılar genellikle tek bir fonksiyonun değil, fonksiyonlar arasındaki ilişkinin hatasından çıkar.
- Aynı işlem içinde hem yatırıp hem çekmeye izin veren yolları ayrıca gözden geçir.
- [[smart-contract-audit|Denetim]] tek başına yeterli değildir ama bu sınıf hataları yakalamak tam olarak denetimin işidir.

Yaygın bir yanlış anlama var: "flash loan engellenirse sorun biter." Sermayenin ödünç alınabilir olması sorunun sebebi değil, sorunu görünür kılan şeydir. Aynı adımları yeterince büyük bir bakiyeyle yapan biri aynı sonucu alır. Kapatılması gereken şey borç değil, miktara güvenen varsayımdır.
