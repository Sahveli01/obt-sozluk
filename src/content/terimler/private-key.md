---
term: "Private Key"
tr: "Özel anahtar"
aliases: ["özel anahtar", "gizli anahtar"]
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Yalnızca sahibinin bildiği, imza üretmeye yarayan ve açık anahtarın kendisinden türetildiği gizli sayı."
related: [public-key, digital-signature, seed-phrase, key-derivation, self-custody, entropy]
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

Özel anahtar, rastgele seçilmiş çok büyük bir sayıdır. Bir yerde kayıtlı değildir, bir sunucuda karşılığı tutulmaz, kimse onu "verir" ya da "iptal eder". Bilen kimse yoksa yoktur; bilen biri varsa o kişi sahiptir.

Bu yüzden nasıl üretildiği en az nasıl saklandığı kadar önemlidir. Sayı yeterince öngörülemez bir kaynaktan gelmiyorsa ([[entropy|entropi]] zayıfsa) uzunluğu hiçbir işe yaramaz.

## Nasıl çalışır?

Özel anahtardan [[public-key|açık anahtar]] hesaplanır ve bu hesap tek yönlüdür: ileri gitmek kolaydır, geri dönmek bilinen yöntemlerle karşılanamayacak kadar pahalıdır.

İki rol birbirinden ayrılır. Özel anahtar **imza üretir**; açık anahtar **imzayı doğrular**. Bir [[digital-signature|dijital imza]] üretirken anahtarın kendisi mesaja girmez, dışarı sızmaz ve imzaya bakarak geri hesaplanamaz. Bir işlemi imzalamak, anahtarı göstermeden anahtara sahip olduğunu kanıtlamaktır.

Pratikte özel anahtarı elle yazmazsın. Cüzdanlar tek bir gizli değerden sayısız anahtar üretir ([[key-derivation|anahtar türetme]]); yedeklediğin şey de tek tek anahtarlar değil, hepsinin kökündeki [[seed-phrase|kelimelerdir]].

## Dikkat

Özel anahtar bir parola değildir. Parolayı unutursan sıfırlarsın, sızarsa değiştirirsin. Özel anahtarda ikisi de yoktur: unutulan geri gelmez, sızan iptal edilemez. Sızdığında yapılabilecek tek şey, varlıkları vakit kaybetmeden yeni bir anahtara taşımaktır ([[self-custody|kendi saklaman]] bu sorumluluğu sana verir).

"Özel anahtarımı kimseye vermedim" cümlesi de çoğu zaman eksiktir. Kurtarma kelimelerini veren kişi anahtarı da vermiş olur; kelimeler anahtarların kökündedir.
