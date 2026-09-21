---
term: "BIP-39"
tr: ""
aliases: ["bip39"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: orta
short: "Rastgele bir gizli değeri, sabit bir kelime listesinden seçilmiş ve sırası önemli kelimelere çeviren standart."
related: [seed-phrase, hd-wallet-bip-32, derivation-path, entropy, key-derivation, checksum]
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

BIP-39, rastgele üretilmiş bir gizli değerin insanların yazıp saklayabileceği kelimelere nasıl dönüştürüleceğini tanımlayan bir standarttır. Bugün pek çok cüzdanın kullandığı [[seed-phrase|seed phrase]] biçimi buradan gelir.

Standardın çözdüğü problem gizliliği üretmek değil, onu taşınabilir ve doğru kopyalanabilir kılmaktır. Aynı standardı uygulayan iki cüzdan, aynı kelimelerden aynı gizli değeri elde eder.

## Benzetme

Telefonda harf okurken "Ankara'nın A'sı" demek gibi. Sesler karışabilir; üzerinde önceden anlaşılmış bir kelime listesi karışmayı ortadan kaldırır. BIP-39 de kelimeleri akılda kalsın diye değil, elle yazılırken ve okunurken yanlış anlaşılmasın diye kullanır.

## Nasıl çalışır?

Cüzdan önce rastgele bir değer üretir; bu değerin kalitesi doğrudan [[entropy|entropiye]] bağlıdır. Değere, yanlış yazımları yakalamak için ondan hesaplanan küçük bir doğrulama parçası ([[checksum|sağlama]]) eklenir. Sonuç, standardın sabit listesindeki kelimelere bölünerek yazılır.

Liste özenle seçilmiştir: kelimeler birbirine benzemez ve baştaki birkaç harf hangi kelime olduğunu belli eder. Bu yüzden yanlış yazılmış ya da yeri değişmiş bir kelimeyi cüzdan genellikle fark eder ve uyarır.

Kelimeler geri okunduğunda, kasıtlı olarak yavaş çalışan bir [[key-derivation|anahtar türetme]] fonksiyonundan geçirilerek tohum değerine dönüştürülür; anahtarlar bu tohumdan üretilir. Standart ayrıca isteğe bağlı bir parola tanımlar: parola değişirse aynı kelimelerden bambaşka bir tohum, dolayısıyla bambaşka hesaplar çıkar.

## Dikkat

BIP-39 kelimeleri bir parola değil, gizliliğin okunabilir yazımıdır; kelimeleri gören anahtarları da elde eder.

Aynı kelimeler her cüzdanda aynı adresleri göstermeyebilir. Cüzdanların varsayılan [[derivation-path|türetme yolları]] farklıysa doğru kelimelerle boş bir hesap görürsün; kelimeler kaybolmamıştır, ağacın başka bir dalına bakılıyordur.

İsteğe bağlı parola da unutulduğunda kelimelerin tek başına bir kıymeti kalmaz.
