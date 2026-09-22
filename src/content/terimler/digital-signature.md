---
term: "Digital Signature"
tr: "Dijital imza"
aliases: ["dijital imza"]
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: orta
short: "Bir mesajın belirli bir özel anahtarın sahibinden geldiğini ve yolda değişmediğini herkesin doğrulayabildiği kriptografik veri."
related: [public-key-cryptography, private-key, ecdsa, signature-verification-ecrecover, eip-712, hash-function]
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

Dijital imza, bir mesajın yanına eklenen ve üç şeyi birden söyleyen kısa bir veri parçasıdır.

Birincisi: bu imzayı yalnızca belirli bir [[private-key|özel anahtarın]] sahibi üretebilir. İkincisi: imzayı, o anahtarın eşi olan [[public-key|açık anahtarla]] herkes doğrulayabilir — doğrulamak için gizli hiçbir bilgiye ihtiyaç yoktur. Üçüncüsü: imza imzalanan mesaja bağlıdır; mesajda tek bir karakter değişirse imza artık tutmaz.

Blockchain'de hesap sahipliği tam olarak buna dayanır. Bir işlemin senden geldiğini kanıtlayan şey bir parola ya da kimlik kontrolü değil, işlemin altındaki imzadır ([[public-key-cryptography|açık anahtarlı kriptografi]]).

## Benzetme

Telefonda annenin sesini tanıman gibi. Sesi duyan herkes kimin konuştuğunu bir anda anlar; ama o sesi üretmek herkesin harcı değildir. Tanımak kolaydır, üretmek bambaşka bir iştir — ve dijital imzanın bütün faydası bu eşitsizlikten çıkar.

## Nasıl çalışır?

Önce mesaj bir [[hash-function|özet fonksiyonundan]] geçirilir; imza koca metnin değil, o sabit boyutlu özetin üstüne atılır. İmzalama, özel anahtar ile özeti birlikte kullanan bir hesaptır; sonuç birkaç sayıdan oluşan kısa bir veridir.

Doğrulama ise ters yönde bir hesap değildir. Doğrulayan taraf imzayı "açıp" içinden bir şey çıkarmaz; elindeki açık anahtar, mesaj ve imzanın birbiriyle tutarlı olup olmadığına bakar. Cevap ya "tutarlı" ya "değil" olur.

Ethereum bunu bir adım ileri götürür: imzadan imzalayanın adresi geri hesaplanabilir, sözleşmeler de bu sayede imzayı zincirde doğrulayabilir ([[signature-verification-ecrecover|ecrecover]]).

## Dikkat

İmza şifreleme değildir. İmzalanan mesaj gizlenmez; herkes okur. İmza yalnızca kimden geldiğini ve değişmediğini söyler.

İkincisi, imza "bunu ben onayladım" der; "bunu şimdi, şu iş için ve yalnızca bir kez onayladım" demez. İmza kopyalanabilir bir veridir; başka bir yerde ya da ikinci kez sunulabilir. Bu yüzden imzalanan metnin içine ne için, hangi zincirde ve hangi sözleşme için imzalandığı yazılır; [[eip-712|EIP-712]] bunu standartlaştırır ve yan fayda olarak kullanıcının cüzdanında ne imzaladığını okunur biçimde görmesini sağlar. Aynı imzanın ikinci kez kabul edilmemesi de imzayı kabul eden tarafın işidir ([[signature-replay|imza tekrarı]]).
