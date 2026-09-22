---
term: "Groth16"
tr: ""
aliases: []
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: ileri
short: "Sabit ve çok kısa kanıt üreten, buna karşılık her devre için ayrı bir güvenilir kurulum isteyen zk-SNARK sistemi."
related: [zk-snark, trusted-setup, plonk, circuit-zk, verifier]
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

Groth16, Jens Groth'un 2016'da yayımladığı bir [[zk-snark|zk-SNARK]] yapısıdır; adı da buradan gelir. Eliptik eğriler üzerindeki eşleştirme (pairing) işlemlerine dayanır.

Ayırt edici özelliği kanıtının **sabit boyutlu** olmasıdır: kanıtlanan hesap ister basit ister devasa olsun, üretilen kanıt aynı küçük büyüklükte kalır ve doğrulama hep aynı sayıda adımda biter. Özel isim olduğu için çevrilmez.

## Nasıl çalışır?

Önce iddia bir [[circuit-zk|devreye]] ve oradan da sabit biçimli bir kısıt sistemine çevrilir. Sonra bu devreye **özel** bir kurulum çalıştırılır ve iki parametre takımı çıkar: [[prover|ispatlayıcının]] kullanacağı kanıtlama anahtarı ve [[verifier|doğrulayıcının]] kullanacağı doğrulama anahtarı.

Doğrulama, kanıtın birkaç eşleştirme denklemini sağlayıp sağlamadığına bakmaktan ibarettir. Bu kontrolün maliyeti devrenin büyüklüğüne bağlı olmadığı için zincir üstünde çalıştırmak makul kalır.

## Dikkat

Groth16'nın bedeli kurulumun **devreye bağlı** olmasıdır. Devrede tek bir satır değişirse — bir kısıt eklendi, bir sabit güncellendi — eski parametreler geçersizleşir ve baştan bir [[trusted-setup|tören]] düzenlenmesi gerekir.

Bu, teknik değil operasyonel bir yüktür ama gerçektir: her sürüm güncellemesi yeni bir tören, yeni katılımcılar ve yeni bir doğrulayıcı sözleşme demektir. Devresi sık değişen projeler bu yüzden evrensel kurulum kullanan [[plonk|PLONK]] gibi sistemlere yönelir. Devresi bir kez sabitlenip uzun süre değişmeyecek işlerde ise Groth16'nın kurulum yükü bir kereye mahsus kalır.
