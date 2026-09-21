---
term: "Passkey"
tr: ""
aliases: ["passkey", "WebAuthn"]
category: cuzdanlar
subcategory: "Hesap soyutlama"
level: orta
short: "Parola yerine cihazda saklanan bir anahtar çiftiyle giriş yapma yöntemi; kullanıcı karşı tarafa hiçbir sır göndermez."
related: [private-key, session-key, smart-contract-wallet, authentication, seed-phrase]
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

Passkey, parolanın yerini alan bir [[authentication|kimlik doğrulama]] yöntemidir. Cihazında bir anahtar çifti üretilir: [[private-key|özel anahtar]] cihazın güvenli donanımından çıkmaz, karşı tarafa yalnızca [[public-key|açık anahtar]] verilir. Giriş yaparken bir şey yazmazsın; cihaz sana yüzünü ya da parmak izini sorar, kilidi açtığında anahtar senin adına bir imza atar.

Türkçeye yerleşmiş tek bir karşılığı yok — ürün arayüzlerinde farklı çeviriler dolaşıyor, teknik metinlerde İngilizce adıyla geçiyor.

## Benzetme

Parola bir sır söylemektir, passkey bir imza atmaktır. Sırrı bir kez söylediğinde artık iki yerde durur: sende ve karşı tarafta. O taraf sızdırırsa sır da sızar. İmzada ise karşı tarafta duran şey imzanı tanımaya yarar, atmaya değil.

## Nasıl çalışır?

Kayıt sırasında cihaz, o site için ayrı bir anahtar çifti üretir ve açık anahtarı siteye bırakır. Girişte site rastgele bir veri gönderir, cihaz bu veriyi imzalar, site açık anahtarla imzayı doğrular. Her site için ayrı çift üretildiğinden siteler seni ortak bir kimlikle eşleştiremez.

Oltalamaya karşı asıl koruma da buradadır: cihaz anahtarı sitenin alan adına bağlar ve yalnızca o alan adı için imza atar. Görünüşü birebir aynı olan sahte bir site geçerli imza alamaz. Bu yüzden passkey, klasik parolanın en büyük zafiyetini — kullanıcının sırrı yanlış yere yazmasını — yapısal olarak kapatır.

Blockchain tarafında passkey, [[account-abstraction|hesap soyutlama]] sayesinde işe yarar hale gelir: hesabın doğrulama kuralını kendi kodu belirlediği için cüzdan, cihazın ürettiği imzayı kabul edecek şekilde yazılabilir. Burada bir ayrıntı var: cihazların kullandığı imza türü zincirlerin klasik imza türünden farklıdır, bu yüzden doğrulama sözleşme tarafında ek iş gerektirir.

## Dikkat

Passkey cihaza bağlıdır. Çoğu sistemde işletim sisteminin bulutu üzerinden senkronlanır — yani güvenliğin bir ucu o hesabın güvenliğine bağlanır. Cihazını kaybedersen ne olacağını bilmeden passkey'i tek giriş yöntemin yapma.

Cüzdanlarda passkey, [[seed-phrase|kurtarma cümlesinin]] yerini otomatik olarak tutmaz. Neyin yedeklendiği ve kurtarmanın nasıl yapılacağı cüzdandan cüzdana değişir; kurulumdan önce bu soruyu sormak gerekir.
