---
term: "SOLID"
tr: ""
aliases: ["solid prensipleri"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Nesne yönelimli tasarım için derlenmiş beş ilkenin baş harflerinden oluşan kısaltma."
related: [design-pattern, dry, clean-code, refactoring, interface]
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

SOLID, nesne yönelimli tasarım için derlenmiş beş ilkenin baş harflerinden oluşan bir kısaltmadır. Hepsinin ortak derdi aynıdır: kod değiştiğinde değişikliğin dalga dalga başka yerlere yayılmasını engellemek.

İlkeler bir dilin kuralı değildir; derleyici bunları kontrol etmez, ihlal edince hata almazsın. Bir tasarımı tartışırken "burada neyi kaybediyoruz" sorusunu somutlaştıran kontrol maddeleridir.

## Nasıl çalışır?

- **S — Tek sorumluluk.** Bir [[class|sınıfın]] değişmesi için tek bir sebep olsun. Hem veritabanına yazan hem rapor biçimlendiren bir sınıf, iki ayrı ihtiyaçtan dolayı açılır.
- **O — Açık/kapalı.** Yeni davranış eklemek, var olan kodu değiştirmeyi gerektirmesin. Yeni bir ödeme yolu için mevcut sınıfa yeni bir `if` eklemek yerine yeni bir tip eklenmesi gibi.
- **L — Liskov yerine geçme.** Alt sınıf, üst sınıfın beklendiği her yerde onun yerine konabilmeli ve program bozulmamalı. Üst sınıfın sözünü tutmayan bir alt sınıf, [[inheritance|kalıtımı]] tuzağa çevirir.
- **I — Arayüz ayrımı.** Kimse kullanmadığı metotları uygulamak zorunda kalmasın; büyük bir [[interface|arayüz]] yerine küçük ve amaca özel arayüzler.
- **D — Bağımlılığın tersine çevrilmesi.** Üst seviye kod somut bir sınıfa değil, soyut bir tanıma dayansın. Böylece alttaki parça test sırasında sahtesiyle değiştirilebilir.

## Dikkat

Beş ilkenin her biri bir bedel taşır ve bedel genelde aynı türdendir: fazladan tip, fazladan dosya, fazladan sıçrama. Üç sınıflık bir işi ilkelere birebir uydurmak için on beş dosyaya bölmek, aranan sadeliği değil tersini üretir. İlkeler kodun büyüklüğü arttıkça karşılığını verir; küçük ve kısa ömürlü kodda maliyeti kazancını geçebilir. Aynı ölçülülük tartışması [[dry|DRY]] maddesinde açıldı.

İkinci nokta: SOLID nesne yönelimli tasarım düşünülerek derlendi. [[functional-programming|Fonksiyonel]] yazılmış bir kodda bazı ilkelerin karşılığı doğrudan mevcuttur, bazılarının ise birebir karşılığı yoktur. Kısaltmayı bir sınav cetveli değil, tasarım tartışmasında hatırlatıcı bir liste olarak kullanmak daha işe yarar.
