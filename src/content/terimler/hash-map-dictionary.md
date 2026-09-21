---
term: "Hash Map (Dictionary)"
tr: ""
aliases: ["hash map", "dictionary", "dict"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Değerleri sıra numarasına göre değil, kendi seçtiğin anahtarlara göre saklayan ve anahtarla anında bulan yapı."
related: [array, hash-function, struct, data-structure, mapping]
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

Hash map, her değeri bir anahtarla eşleştirip saklayan yapıdır. [[array|Dizide]] bir değeri sıra numarasıyla ararsın; hash map'te ise anahtarı sen seçersin: kullanıcı adı, ürün kodu, cüzdan adresi. Sonra o anahtarı verip değeri doğrudan alırsın.

Asıl kazanç arama süresindedir. On kayıtta da bir milyon kayıtta da bir anahtarı sorgulamanın maliyeti hemen hemen aynıdır. Python bu yapıya `dict` ("sözlük") der ve o adlandırmadan gelen "sözlük" karşılığı Türkçede yaygındır; ama genel terim olan hash map'in yerleşik bir Türkçe karşılığı yoktur.

## Nasıl çalışır?

Anahtar önce bir [[hash-function|hash fonksiyonundan]] geçirilir; fonksiyon anahtarı sabit büyüklükte bir sayıya çevirir. O sayı da verinin hangi gözde duracağını söyler. Böylece program hiçbir kaydı gezmeden, yalnızca hesap yaparak yere gider.

İki farklı anahtarın aynı göze düşmesi mümkündür; buna çarpışma denir. Yapı bunu bekler ve o gözdeki birkaç kaydı tek tek karşılaştırarak doğrusunu bulur. Kayıtlar yoğunlaşınca da kendini büyütüp her şeyi yeni gözlere dağıtır. Bu yüzden "anında bulur" ifadesi ortalama için doğrudur, her tek sorgu için garanti değildir.

## Benzetme

Vestiyer fişi gibi. Montu bırakırsın, elinde 47 numara kalır. Dönüşte görevli bütün askıları gezmez; numara ona bakacağı yeri doğrudan söyler. Numarayı kaybedersen mont hâlâ oradadır ama artık onu bulmak bambaşka bir iştir.

## Örnek

```python
puanlar = {"deniz": 90, "ada": 75}
puanlar["ege"] = 60

print(puanlar["deniz"])        # 90
print(puanlar.get("mert", 0))  # 0   (anahtar yoksa varsayılan)
print("ada" in puanlar)        # True
```

## Dikkat

Anahtarların sırasına güvenme. Bazı diller ekleme sırasını korur, bazıları hiçbir söz vermez; sıralı çıktı istiyorsan bunu kendin açıkça istemelisin.

Anahtar olarak değeri zaman içinde değişebilecek bir şey kullanmak da tuzaktır: anahtarın hash'i değişirse kayıt kendi gözünde kaybolur. Son olarak, Solidity'deki [[mapping]] bir hash map'e benzer ama önemli bir farkı vardır — içindeki anahtarlar gezilemez, yalnızca bildiğin bir anahtarı sorgulayabilirsin.
