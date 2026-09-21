---
term: "Wallet Address"
tr: "Cüzdan adresi"
aliases: ["cüzdan adresi"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: baslangic
short: "Varlık almak için herkesle paylaşılabilen, açık anahtardan türetilmiş genel tanımlayıcı."
related: [public-key, wallet, balance, name-service-ens, address-poisoning, pseudonymity]
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

Cüzdan adresi, zincirde seni işaret eden ve herkesle paylaşılabilen tanımlayıcıdır. [[public-key|Açık anahtardan]] türetilir; adrese bakarak geriye dönüp özel anahtarı bulmak mümkün değildir. Bu yüzden adresi paylaşmak bir risk değildir, adres zaten paylaşılmak için vardır.

Biçimi zincirden zincire değişir: uzunluk, kullanılan harf ve rakam kümesi, baştaki işaretler farklıdır. Çoğunda, yanlış yazılan adreslerin büyük kısmını yakalayan bir [[checksum|sağlama]] gömülüdür.

## Benzetme

IBAN gibi. Paylaşmakta sakınca yoktur, para almak için zaten gerekir. İki farkı var: yanında bir isim yazmaz ve yanlış kişiye giden parayı geri isteyebileceğin bir banka yoktur.

## Dikkat

Adres kişi değildir. Bir kişinin çok sayıda adresi olabilir, bir adres bir sözleşmeye ait olabilir. Üzerinde adın yazmasa da bütün hareketleri herkese açıktır ([[pseudonymity|takma adlılık]]).

Adres kopyalarken sadece ilk ve son birkaç karaktere bakmak yaygın ve tehlikeli bir alışkanlıktır; saldırganlar tam olarak bu alışkanlığı hedefler ([[address-poisoning|adres zehirleme]]).
