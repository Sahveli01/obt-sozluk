---
term: "Resource (Move)"
tr: "Kaynak"
aliases: ["move resource", "kaynak (move)"]
category: programlama
subcategory: "Move kavramları"
level: orta
short: "Move'da kopyalanamayan ve sessizce atılamayan, yalnızca taşınabilen, saklanabilen ya da açıkça yok edilebilen değer."
related: [resource-oriented-programming, abilities-move, move, ownership, struct]
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

[[move|Move]]'da kaynak, varlıkları temsil etmek için kullanılan değer türüdür. Sözdizimi olarak sıradan bir [[struct|yapıdır]]; onu kaynak yapan şey, kopyalama ve düşürme yeteneklerinin verilmemiş olmasıdır. [[resource-oriented-programming|Kaynak odaklı programlama]] fikrinin dildeki somut karşılığı budur.

Ayrım şu: sıradan bir değeri kullanmayıp bir kenara bırakabilirsin, kaynağı bırakamazsın. Derleyici "bu değerle ne yaptın?" diye sorar ve cevapsız bırakmana izin vermez.

## Benzetme

Delil poşeti gibi. Olay yerinden alınan şey poşetlenip etiketlenir; her el değiştirdiğinde iki taraf da imza atar; bekleyecekse kilitli bir odaya konur; imha edilecekse bunun ayrı bir kararı ve tutanağı olur. Poşetin fotokopisi çekilmez, çöpe atılmaz — kaybolduğu an cevaplanması gereken bir soru doğar.

## Nasıl çalışır?

Bir kaynağın yaşam döngüsü dört duraktan geçer.

**Yaratılır.** Yalnızca tipi tanımlayan modül o tipten yeni bir değer üretebilir. Başka bir modül değeri görebilir, elinde tutabilir, ama sıfırdan bir tane uyduramaz.

**Taşınır.** Değer bir fonksiyona verildiğinde artık çağıranın elinde değildir; sahiplik karşı tarafa geçer. Aynı değeri iki yere veremezsin, çünkü verdikten sonra geride bir şey kalmaz.

**Saklanır.** Değer bir başka yapının içine konabilir ya da zincirin deposuna yazılabilir; hangisinin mümkün olduğunu [[abilities-move|yetenekler]] belirler.

**Yok edilir.** Bu kendiliğinden olmaz; tipi tanımlayan modülde yazılmış, değeri alanlarına ayıran açık bir işlem gerekir.

Kuralların akrabası [[ownership|Rust'ın sahiplik modelidir]]; Move aynı fikri bellek yönetimi için değil, zincirdeki varlıklar için kullanır.

## Örnek

Bir NFT'yi bir hesaptan diğerine taşıdığını düşün. Değeri transfer fonksiyonuna verirsin, fonksiyon onu alıcının deposuna koyar. İkinci kez göndermeyi denersen derleyici o satırda durur: isim artık boştur. Kopyalamayı denemek de aynı kapıya çıkar, çünkü tipte kopyalama yeteneği yoktur.

Bildirim şu kadar sadedir:

```move
public struct Coin has store { value: u64 }
```

## Dikkat

Kaynak, bugünkü dilde ayrı bir anahtar kelime değildir. Move'un erken sürümlerinde ayrı bir bildirimle yazılırdı; yetenek sistemi geldikten sonra ayrım `has` listesine taşındı. "Bu bir kaynak mı" sorusunun cevabı artık bildirimin başında değil, o listede durur.

Yok edilememesi de mutlak değildir: tipi tanımlayan modül isterse yok eden bir fonksiyon yazar. Güvence, yok etmenin imkânsız olması değil, kazara olamamasıdır.
