---
term: "Decryption"
tr: "Şifre çözme"
aliases: ["şifre çözme"]
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Şifrelenmiş bir veriyi doğru anahtarla okunabilir hâline geri döndürme işlemi."
related: [encryption, symmetric-encryption, private-key, key-derivation, hash-function]
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

Şifre çözme, [[encryption|şifrelemenin]] tersidir: okunamaz hâldeki veriyi doğru anahtarla ilk hâline döndürür. "Ters" kelimesi burada gerçekten ters demektir — çıkan şey orijinalin benzeri değil, baytına kadar aynısıdır.

## Nasıl çalışır?

Çözmek için anahtar tek başına yetmez. Üç şeyin birden doğru olması gerekir: kullanılan algoritma, anahtarın kendisi ve şifrelerken üretilmiş yardımcı değerler (her mesaj için değişen başlangıç değeri gibi). Bunlardan biri yanlışsa sonuç "biraz bozuk" bir metin olmaz; tamamen anlamsız baytlar olur.

Günümüzde yaygın kullanılan biçimler aynı anda bütünlüğü de kontrol eder. Şifreli verinin yanında ondan hesaplanmış bir doğrulama etiketi taşınır; çözme sırasında etiket tutmazsa kütüphane bozuk çıktıyı vermez, hata döndürür. Yani veri yolda kurcalandıysa bunu sessizce yutmak yerine söyler.

Parola kullanılan yerlerde parolanın kendisi anahtar değildir; önce bir [[key-derivation|anahtar türetme]] fonksiyonundan geçirilir.

## Dikkat

"Hash'i çözmek" diye bir şey yoktur. [[hash-function|Hash fonksiyonu]] şifreleme değildir; geri çevrilecek bir anahtarı yoktur ve çıktısından girdiye dönüş yolu tasarım gereği bulunmaz. Birinin "hash'i çözdüm" demesi, aslında tahmin ettiği girdileri tek tek deneyip tutturduğu anlamına gelir.

Çözebiliyor olmak yetkili olmak da demez. Anahtarı ele geçiren herkes aynı veriyi açar; şifreleme kimin açtığına bakmaz, [[private-key|anahtarın]] kimde olduğuna bakar.
