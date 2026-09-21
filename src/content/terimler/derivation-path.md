---
term: "Derivation Path"
tr: "Türetme yolu"
aliases: ["türetme yolu", "hd path"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: orta
short: "Bir HD cüzdanın anahtar ağacında tek bir anahtarın yerini gösteren, bölümlerden oluşan sıralama."
related: [hd-wallet-bip-32, bip-39, seed-phrase, wallet-address, key-derivation]
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

Türetme yolu, bir [[hd-wallet-bip-32|HD cüzdanın]] anahtar ağacında hangi anahtarın kastedildiğini gösteren sıralamadır. Tohum ağacın tamamını belirler; yol ise o ağaçtaki tek bir dalı işaret eder. Aynı tohum ve farklı yol, farklı anahtar ve farklı adres demektir.

## Benzetme

Arşivdeki bir klasörün yeri gibi: kat, koridor, raf, sıra. Numaraları sırasıyla takip edersen tek bir klasöre varırsın. Bir hanesini yanlış yazarsan hata almazsın; bambaşka, çoğu zaman bomboş bir klasör açarsın.

## Nasıl çalışır?

Yol, eğik çizgiyle ayrılmış bölümlerden oluşur ve ağacın kökünü belirten `m` ile başlar. Sonraki bölümler sırayla daraltır: hangi standarda göre türetildiği, hangi zincir için olduğu, cüzdandaki kaçıncı hesap olduğu ve o hesabın kaçıncı adresi. Bazı bölümlerin yanındaki kesme işareti, o basamağın sertleştirilmiş türetildiğini gösterir.

Bölümlerde kullanılan sayılar zincirden zincire ve cüzdandan cüzdana değişir. Cüzdanlar kendi varsayılan yollarını kullanır; çoğu, gelişmiş ayarlarda hangi yolu kullandığını gösterir ve başka bir yol girmene izin verir.

## Örnek

```
m / amaç' / zincir-türü' / hesap' / dal / sıra
```

Bir hesabın ilk adresi genellikle son iki bölüm sıfırken oluşan adrestir. İkinci adres için ağacın başka bir yerine gitmek gerekmez; yalnızca son bölüm bir artar.

## Dikkat

"Kelimelerim doğru ama param görünmüyor" şikâyetinin en yaygın sebebi budur: [[seed-phrase|kelimeler]] doğrudur, bakılan yol yanlıştır. Varlıklar yerindedir, yalnızca onları açan dal seçilmemiştir. Cüzdan değiştirirken eski cüzdanın kullandığı yolu not etmek bu yüzden işe yarar.

Yol gizli bir bilgi değildir. Gizli olan tohumdur; yol yalnızca ağacın neresine bakılacağını söyler ve bilinmesi kimseye anahtar kazandırmaz.
