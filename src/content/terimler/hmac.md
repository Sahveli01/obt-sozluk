---
term: "HMAC"
tr: ""
aliases: []
category: kriptografi
subcategory: "Hash fonksiyonları"
level: orta
short: "Hash fonksiyonunu paylaşılan gizli bir anahtarla birleştirip mesajın hem bozulmadığını hem de kimden geldiğini doğrulayan yapı."
related: [hash-function, digital-signature, key-derivation, sha-256, webhook, api-key]
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

HMAC, bir mesajın yanına iliştirilen kısa bir etiket üretir. Etiketi hesaplayabilmek için iki şeyi birden bilmek gerekir: mesajın kendisi ve iki tarafın önceden paylaştığı gizli anahtar. Alıcı aynı hesabı kendi yapar; çıkan etiket gelenle aynıysa mesaj yolda değişmemiştir **ve** anahtarı bilen biri tarafından gönderilmiştir.

Düz bir [[hash]] tek başına bunu yapamaz. Mesajı değiştiren biri hash'i de yeniden hesaplayıp yerine koyabilir, çünkü hash hesaplamak için gizli bir şey bilmek gerekmez. Hash yalnızca kazara bozulmayı yakalar; kasıtlı değişikliği yakalayan şey, işin içindeki anahtardır.

Açılımı "Hash-based Message Authentication Code"; Türkçede "mesaj doğrulama kodu" ifadesi kullanılsa da kısaltma çevrilmeden geçer.

## Nasıl çalışır?

HMAC, [[hash-function|hash fonksiyonunu]] iki kez çağırır:

```
HMAC(k, m) = H( (k ⊕ dış) || H( (k ⊕ iç) || m ) )
```

Sözle: anahtardan iki farklı sabitle iki ayrı hâl türetilir. Önce içteki hâl mesajın başına eklenip özet alınır, sonra dıştaki hâl bu ara sonucun başına eklenip ikinci kez özet alınır. `||` birleştirme, `⊕` ise bit bit XOR demek.

Hangi hash fonksiyonuyla kullanıldığı ada yazılır: HMAC-SHA256 gibi. Aynı yapı [[key-derivation|anahtar türetme]] fonksiyonlarının çoğunda da bir yapı taşı olarak kullanılır.

## Örnek

Bir servis sana [[webhook|webhook]] gönderirken isteğin gövdesinin HMAC etiketini bir başlığa koyar. Sen de aynı gizli anahtarla aynı hesabı yapıp başlıktaki değerle karşılaştırırsın. Tutmuyorsa isteği çöpe atarsın. İstediğin adrese istek atmak kolaydır; anahtarsız geçerli bir etiket üretmek değil.

## Dikkat

**`hash(anahtar + mesaj)` yazma.** [[sha-256|SHA-256]] gibi fonksiyonlarda bu yapı, saldırganın anahtarı hiç bilmeden mesajın sonuna ekleme yapıp geçerli bir etiket üretmesine izin verir. HMAC tam olarak bu tür tuzakları kapatmak için tasarlandı. Genel kural: kendi kripto yapını kurma, kütüphanenin HMAC çağrısını kullan. Etiketleri karşılaştırırken de kütüphanenin sabit zamanlı karşılaştırma fonksiyonunu tercih et.

HMAC bir imza değildir. [[digital-signature|Dijital imzada]] üretme yetkisi tek bir tarafta, doğrulama yetkisi ise herkestedir. HMAC'te doğrulayan taraf aynı sırrı bildiği için etiketi kendisi de üretebilir. Bu yüzden HMAC üçüncü bir kişiye "bu mesajı o gönderdi" diye kanıt sunmaz; yalnızca aynı sırrı paylaşan iki taraf arasında anlam taşır. Anahtarı [[api-key|API anahtarı]] gibi düşün: sızdığı anda etiketin bütün değeri biter.
