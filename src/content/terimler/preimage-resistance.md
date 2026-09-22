---
term: "Preimage Resistance"
tr: ""
aliases: ["önimge direnci"]
category: kriptografi
subcategory: "Hash fonksiyonları"
level: orta
short: "Elinde yalnızca bir hash değeri varken, o değeri üreten bir girdi bulmanın pratikte mümkün olmaması."
related: [hash-function, collision-resistance, key-derivation, salt, hash]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Bir [[hash-function|hash fonksiyonunun]] çıktısını görüyorsun ama girdisini bilmiyorsun. Preimage direnci, o girdiyi bulamamandır.

İki ayrı biçimi var ve ikisi de ayrı ayrı istenir:

- **Preimage direnci:** elinde yalnızca bir özet var. O özeti veren *herhangi bir* girdi bul.
- **İkinci preimage direnci:** elinde bir girdi ve onun özeti var. Aynı özeti veren *başka bir* girdi bul.

Türkçede yerleşik bir karşılığı yok. Matematikteki "ön görüntü" sözcüğünden gelen "önimge" kullanılıyor ama alanda terim çoğunlukla İngilizce hâliyle geçiyor.

## Nasıl çalışır?

Direncin kaynağı, fonksiyonun geriye doğru çalıştırılabilecek bir yapısının olmamasıdır. Çıktıya bakıp adımları tersinden yürütemezsin; elinde kalan tek yol tahmin edip ileri doğru hesaplamaktır.

256 bitlik bir çıktıda denenecek olasılık sayısı, bütün dünyanın hesap gücünü bu işe versen bile erişilemeyecek büyüklüktedir. Dikkat et: bu "matematiksel olarak imkânsız" demek değil, "maliyeti erişilemez" demektir. Güvenlik bir imkânsızlığa değil, bir maliyet varsayımına dayanır ve o varsayım bugün fazlasıyla rahat duruyor.

## Örnek

Bir site parolanı düz metin olarak saklamaz, hash'ini saklar. Veritabanı çalınsa bile saldırganın elinde parolalar değil, [[hash|hash]] değerleri olur — preimage direnci sayesinde oradan parolaya geri dönemez.

Ama buradaki incelik şu: preimage direnci, girdinin **tahmin edilemez** olduğunu varsayar. Parolalar tahmin edilebilir. Saldırgan fonksiyonu tersine çevirmeye kalkmaz; en çok kullanılan milyonlarca parolayı tek tek ileri doğru hash'leyip elindeki listeyle karşılaştırır. Fonksiyon kırılmamıştır, sadece etrafından dolaşılmıştır.

Bu yüzden parola saklarken düz hash yetmez: her kullanıcıya özel bir [[salt|salt]] eklenir ve hesap kasten yavaşlatılır. O iş [[key-derivation|anahtar türetme]] fonksiyonlarının işidir.

## Dikkat

Preimage direnci ile [[collision-resistance|çarpışma direncini]] karıştırma. Preimage'de hedef **sana verilmiştir**: şu özete uyan bir girdi bul. Çarpışmada hedefi sen seçersin: aynı özeti veren herhangi iki girdi yeter. İkincisi kökten daha kolaydır ve bir fonksiyonda önce o çöker.

Pratik sonucu: çarpışma direnci çökmüş eski bir fonksiyonun preimage direnci hâlâ ayakta olabilir. Bu, o fonksiyonu yeni bir işte kullanmak için gerekçe değildir — ama "kırıldı" haberini okurken hangi özelliğin kırıldığına bakmak gerekir.
