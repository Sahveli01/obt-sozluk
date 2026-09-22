---
term: "EdDSA"
tr: ""
aliases: []
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: ileri
short: "İmzada kullanılan tek seferlik gizli değeri rastgele seçmek yerine mesajdan türeten, Edwards eğrileri üzerinde çalışan imza şeması."
related: [ed25519, ecdsa, digital-signature, schnorr-signature, elliptic-curve-cryptography-ecc]
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

EdDSA, "Edwards eğrisi" denen bir eğri biçimi üzerinde çalışan bir [[digital-signature|imza]] şemasıdır. Adı standarttan gelir, Türkçeye çevrilmez.

Çıkış noktası ilginçtir: [[ecdsa|ECDSA]]'nın matematiği sağlamdı, asıl kaza uygulamalarda oluyordu. EdDSA bu yüzden yalnızca güvenli olacak biçimde değil, **onu uygulayan programcının hata yapmasını zorlaştıracak biçimde** tasarlandı.

## Nasıl çalışır?

Üç tasarım kararı öne çıkar.

**Deterministik imza.** İmza için gereken tek seferlik gizli değer rastgele seçilmez; özel anahtar ile mesajın özetinden hesaplanır. Böylece sistemin rastgelelik kaynağı bozuk olsa bile imza anahtarı ele vermez. ECDSA'da aynı davranışı ayrı bir standarda uyarak elde edersin; EdDSA'da bu şemanın kendisinde yazılıdır.

**Hesabın girdiye göre değişmemesi.** Eğri ve algoritma, imza hesabının hangi anahtarla çalıştığına göre farklı süreler almayacak şekilde seçilmiştir. Bu, dışarıdan süre ölçerek anahtar hakkında bilgi toplamaya çalışan saldırıları zorlaştırır.

**Dar kodlama.** Standart, imzanın ve anahtarların nasıl kodlanacağını sıkı biçimde tanımlar; "aynı imzanın ikinci bir yazılışı" türünden sorunların alanı böylece daralır.

Yapısı [[schnorr-signature|Schnorr imzasına]] yakındır; imzaların birleştirilebilmesi gibi özelliklere kapı aralayan da bu yakınlıktır.

## Dikkat

EdDSA tek bir şey değil, bir şema ailesidir: eğri ve özet fonksiyonu seçilerek somutlanır. Pratikte karşına çıkan ad genellikle [[ed25519|Ed25519]]'dir.

Deterministik olmak her sorunu çözmez. Aynı anahtarla aynı mesaj her zaman aynı imzayı üretir; bu da imzanın kendisini "tek kullanımlık bilet" sanmayı daha da yanlış hâle getirir. Bir mesajın ikinci kez işlenmesini engellemek yine imzalanan metnin içine konan bir [[nonce-kriptografi|nonce]] ile yapılır.

Bir ayrıntı da uzlaşma gerektiren sistemlerde ortaya çıkar: sınır durumlardaki bazı imzaları bir kütüphane kabul ederken bir diğeri reddedebilir. Bütün düğümlerin aynı cevabı vermek zorunda olduğu bir ağda bu fark tehlikelidir; bu yüzden bazı ağlar kabul kurallarını kendi standartlarıyla daraltır.
