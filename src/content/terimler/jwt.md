---
term: "JWT"
tr: ""
aliases: ["json web token"]
category: web
subcategory: "Backend"
level: orta
short: "İçinde kullanıcıya dair bilgi taşıyan, imzalı ve herkesçe okunabilir token biçimi."
related: [authentication, authorization, session, oauth, json]
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

JWT (JSON Web Token), bir kullanıcıya dair bilgiyi taşıyan, imzalı bir metin parçasıdır. Giriş başarılı olduğunda sunucu bunu üretip istemciye verir; istemci sonraki her istekte geri gönderir. Sunucu imzayı doğrulayıp içindeki bilgilere güvenir — bunun için veritabanına bakması gerekmez.

## Nasıl çalışır?

Token üç parçadan oluşur ve parçalar noktayla ayrılır: başlık (hangi imza yöntemi kullanıldı), veri (kim olduğun, hangi yetkilerin var, geçerliliğin ne zaman bitiyor) ve imza.

İlk iki parça yalnızca [[encoding|kodlanmıştır]], şifrelenmemiştir: eline geçen herkes içeriğini okuyabilir. Üçüncü parça, ilk ikisinin sunucunun gizli anahtarıyla üretilmiş imzasıdır. İçerikteki tek bir harf değişirse imza tutmaz, token reddedilir.

[[session|Oturum]] kaydından farkı burada: oturumda bilgi sunucuda durur ve token yalnızca ona işaret eder; JWT'de bilgi token'ın içinde taşınır.

## Örnek

```
<başlık>.<veri>.<imza>

başlık: { "alg": "HS256", "typ": "JWT" }
veri:   { "sub": "42", "rol": "uye", "exp": <geçerlilik bitişi> }
imza:   başlık ve verinin, gizli anahtarla üretilmiş imzası
```

Başlık ve veri birer [[json|JSON]] nesnesidir; kodlanıp noktalarla birleştirildikleri için token uzun ve okunaksız görünür. Görünüş aldatmasın, içerik gizli değildir.

## Dikkat

İçine gizli bilgi konmaz: parola, kimlik numarası ya da özel anahtar gibi şeyler token'a yazılmaz.

İkincisi, geri alınması zordur. Sunucu her isteği kendi başına doğruladığı için verilmiş bir token süresi dolana kadar geçerli kalır; "çıkış yap" demek onu kendiliğinden geçersizleştirmez. Bu yüzden ömrü kısa tutulur ve uzatma işi ayrı bir kayıt üzerinden yürütülür.
