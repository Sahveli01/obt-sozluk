---
term: "Proof of Work (PoW)"
tr: "İş ispatı"
aliases: ["iş ispatı", "iş kanıtı"]
category: konsensus
subcategory: "Mekanizmalar"
level: orta
short: "Blok önerme hakkını, ancak deneyerek bulunabilen bir özet değeri aramaya ve böylece harcanan işleme gücüne bağlayan konsensüs mekanizması."
related: [mining, hashrate, difficulty, nakamoto-consensus, sybil-resistance, proof-of-stake-pos]
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

**İş ispatı**, bir sonraki bloğu önerme hakkını kimliğe değil, harcanmış hesaplama işine bağlar. Blok üretmek isteyen [[miner|madenci]], bloğun içeriğiyle birlikte bir sayıyı ([[nonce-kriptografi|nonce]]) durmadan değiştirir ve [[hash-function|özet fonksiyonundan]] belirli bir eşiğin altında bir çıktı almaya çalışır. Kestirme yol yoktur; tek yöntem denemektir. Bulunan sonucu doğrulamak ise tek bir hesapla biter: üretmesi pahalı, kontrolü bedava bir kanıt.

## Nasıl çalışır?

**Güvenlik varsayımı.** Toplam işleme gücünün çoğunluğunun kurallara uyan üreticilerin elinde olması. Bu varsayım bozulursa yakın geçmişi yeniden dizmek mümkün hâle gelir ([[51-attack|%51 saldırısı]]).

**Saldırıyı pahalı kılan şey.** Fiziksel kaynak: donanım ve elektrik. Bir zinciri geride bırakmak için, ağın o süre boyunca yaptığı işin aynısını daha hızlı yapmak gerekir. Ağın toplam gücü değiştikçe [[difficulty-adjustment|zorluk ayarı]] eşiği güncelleyerek blok aralığını hedefte tutar; güç arttığında kanıt üretmek ucuzlamaz.

**Karşılığında ödenen bedel.** Güvenlik dışarıdan satın alınabilen bir kaynağa dayandığı için, o kaynağın tüketimi tasarımın kendisidir, yan etkisi değil. Üretim bir verimlilik yarışıdır: ucuz elektrik ve göreve özel donanım ([[asic]]) avantaj sağlar, bu da üretimin belirli bölgelerde ve [[mining-pool|havuzlarda]] toplanmasına yol açar. Bir de şu: kaynak ağa ait değildir. Yeterince hesap gücü kiralayan bir saldırgan saldırıdan sonra donanımını hâlâ kullanabilir; protokolün ona geriye dönük uygulayabileceği bir ceza yoktur, ödediği tek şey o süre boyunca harcadığıdır.

## Dikkat

Bulmacanın çözümü kendi başına bir bilgi taşımaz; kıymeti, ucuza üretilememesinden gelir. "Madencilik" sözcüğü de yanıltıcıdır: yerin altından çıkarılan bir şey yoktur, [[block-reward|blok ödülü]] protokolün kuralına göre bloğu üretene yazılır.

İş ispatı tek başına bir konsensüs mekanizması da değildir. Kimin blok önerebileceğini pahalı hâle getirir ([[sybil-resistance|Sybil direnci]]); iki geçerli zincirden hangisinin seçileceğine ayrı bir kural karar verir. İkisinin birlikte kurduğu bütüne [[nakamoto-consensus|Nakamoto konsensüsü]] denir.
