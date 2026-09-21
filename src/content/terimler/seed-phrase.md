---
term: "Seed Phrase"
tr: ""
aliases: ["kurtarma kelimeleri", "mnemonic", "recovery phrase"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: baslangic
short: "Bir cüzdanın bütün anahtarlarının türetildiği gizli değerin, sırası önemli kelimelerle yazılmış hâli."
related: [bip-39, hd-wallet-bip-32, private-key, self-custody, key-management, phishing]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Seed phrase, bir cüzdanın bütün anahtarlarının kendisinden türetildiği gizli değerin kelimelerle yazılmış hâlidir. Kelimeleri sırasıyla başka bir cüzdana girersen aynı hesaplar aynı adreslerle geri gelir; çünkü geri gelen şey bir yedek değil, gizliliğin kendisidir.

Yerleşik tek bir Türkçe karşılığı yok: arayüzlerde "kurtarma kelimeleri" gibi farklı ifadeler geçiyor, yazılı dilde çoğunlukla İngilizcesi kullanılıyor.

Kelimelerin hangi listeden ve nasıl seçildiğini [[bip-39]] tanımlar; tek bir gizli değerden sayısız [[private-key|özel anahtar]] üretilmesini ise [[hd-wallet-bip-32|HD cüzdan]] yapısı sağlar.

## Benzetme

Tohum gibi. Bahçen yanarsa tohumu ekersin, aynı bahçe yeniden yetişir. Ama tohumu birine verirsen o kişi de aynı bahçeyi kendi arazisinde bire bir yetiştirebilir — seninkini yok etmesine hiç gerek kalmadan.

## Dikkat

Kelimeleri gören herkes o cüzdandaki varlıkları senin kadar kullanabilir. Ekran görüntüsü almak, not uygulamasına yazmak ya da bir sohbete yapıştırmak kelimeleri gizli olmaktan çıkarır. Hiçbir cüzdan ekibi, borsa görevlisi ya da destek hattı bu kelimeleri istemez; isteyen kişi [[phishing|oltalama]] yapıyordur.

Unutulduğunda başvurulacak bir merci de yoktur. [[self-custody|Kendi saklamanda]] "şifremi unuttum" diye bir düğme bulunmaz; kelimelerin kaybı, varlıkların kaybıdır.
