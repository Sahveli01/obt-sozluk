---
term: "Salt"
tr: "Tuz"
aliases: ["tuz değeri"]
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Aynı girdinin her seferinde farklı bir özet üretmesi için girdiye eklenen, benzersiz ve rastgele ek değer."
related: [hash-function, key-derivation, keystore-file, commit-reveal-scheme, nonce-kriptografi]
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

Salt, özetlenecek ya da anahtara çevrilecek bir girdiye eklenen ek değerdir. Türkçede "tuz" denir. Amacı gizlemek değil, **aynı girdinin her yerde aynı sonucu vermesini engellemektir**.

Neden sorun olduğunu görmek kolay: [[hash-function|hash fonksiyonu]] aynı girdiye her zaman aynı çıktıyı verir. İki kullanıcı aynı parolayı seçtiyse veritabanında aynı satırı görürsün; üstelik yaygın parolaların özetleri çoktan hesaplanıp listelenmiştir, dolayısıyla listede eşleşme aramak yeter.

## Nasıl çalışır?

Her kullanıcı, her dosya, her kayıt için ayrı bir rastgele değer üretilir ve girdiyle birlikte fonksiyona verilir. Salt, sonucun yanında açıkça saklanır — doğrulama sırasında tekrar gerekeceği için saklanmak zorundadır.

Sonuç şudur: aynı parola iki kullanıcıda iki farklı özet üretir. Hazır listeler işe yaramaz hâle gelir, çünkü saldırganın artık her kullanıcı için listeyi baştan hesaplaması gerekir. Tek bir toplu saldırı, tek tek yapılan binlerce saldırıya dönüşür.

Aynı mantık [[key-derivation|anahtar türetmede]] de kullanılır; bir [[keystore-file|keystore dosyasının]] içinde şifreli anahtarın yanında tam olarak bu değer durur. [[commit-reveal-scheme|Commit-reveal]] düzeneklerinde ise salt başka bir işi görür: seçenek sayısı azsa taahhüdün hepsini deneyerek çözülmesini engeller.

## Dikkat

Salt'ın gizli olması gerekmez; **benzersiz** olması gerekir. Bu ikisi sık karıştırılır. Saklandığı yerde açıkça durması bir açık değildir — sabit bir salt kullanmak, yani herkese aynısını vermek ise korumanın tamamını iptal eder.

Salt zayıf parolayı da güçlendirmez. Toplu saldırıyı pahalılaştırır, tek bir hedefe yönelen denemeyi değil.
