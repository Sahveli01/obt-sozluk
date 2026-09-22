---
term: "Signature Replay"
tr: "İmza tekrarı"
aliases: ["imza tekrarı"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: orta
short: "Bir kez kullanılmış imzanın ikinci kez sunulması; imza hâlâ geçerlidir, çünkü onu tüketen bir şey yazılmamıştır."
related: [signature-verification-ecrecover, nonce-kriptografi, eip-712, replay-attack, digital-signature, signature-malleability]
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

Bir [[digital-signature|dijital imza]] tek bir şey söyler: "bu mesajı bu anahtar imzaladı." **Ne zaman** imzalandığını, **kaç kez** kullanılabileceğini, **hangi sözleşme** ya da **hangi zincir** için olduğunu söylemez. Bu bilgiler imzalanan mesajın içine konmamışsa, sözleşmenin onları bilmesinin hiçbir yolu yoktur.

İmza tekrarı bundan doğar. Saldırgan imzayı taklit etmez, kırmaz, anahtarı ele geçirmez; **gerçek** imzayı alır ve bir kez daha sunar. Sözleşme aynı doğrulamayı yapar, aynı sonucu bulur ve işi bir kez daha yapar.

İmzayı ele geçirmek de zor değildir: imza zincire yazılmış bir işlemin içinde, bir olay kaydında ya da onu işleyen bir servisin yanıtında zaten açıktadır.

## Benzetme

Tek kullanımlık bir indirim kuponu gibi. Kuponun üstünde "bir kez geçerlidir" yazması bir şey ifade etmez; asıl iş, kasiyerin kuponu alıp yırtmasıdır. Yırtılmıyorsa kupon tek kullanımlık değildir — aynı kuponun fotoğrafıyla her gün indirim alınır ve kasiyer her seferinde kuralına uygun davrandığını düşünür.

## Nasıl çalışır?

Savunma, imzalanan mesajın **içine** ne yazdığınla başlar. Dört parça gerekir:

Tekrarlanmayan bir [[nonce-kriptografi|nonce]]. Sözleşme harcanan nonce'ları işaretler ve aynısını ikinci kez kabul etmez.

Bir son geçerlilik tarihi. Süresiz bir imza, bugün kullanılmasa bile yıllar sonra kullanılabilecek bir yetkidir.

Sözleşmenin adresi ve zincirin kimliği. [[eip-712]] bunu "alan ayrımı" (domain separator) olarak standartlaştırır: aynı imza başka bir sözleşmede ya da başka bir zincirde doğrulanmaz.

İmzanın tam olarak neye izin verdiği: kim, kime, ne kadar.

Kontrol tarafında sıra da önemlidir: nonce'u, imzayla yapılacak iş başlamadan **önce** harcanmış olarak işaretle.

## Dikkat

İmzanın baytlarını kara listeye almak yeterli değildir. Aynı imzadan matematiksel olarak ikinci bir geçerli biçim türetilebilir ([[signature-malleability|imza esnekliği]]); "bu baytları daha önce gördüm mü" sorusu bu yüzden yanıltır. Kara liste imzaya değil, mesajın içindeki nonce'a kurulur.

[[signature-verification-ecrecover|`ecrecover`]] geçersiz bir imzada hata vermez, sıfır adres döndürür. Nonce düzenin kusursuz olsa bile bu kontrolü atlarsan sıfır adresi yetkili sayabilirsin.

Zincirler arası tekrar bunun daha geniş hâlidir ve kendi başlığı vardır ([[replay-attack|tekrar saldırısı]]).
