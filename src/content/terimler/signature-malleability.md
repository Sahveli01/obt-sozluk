---
term: "Signature Malleability"
tr: "İmza esnekliği"
aliases: ["imza esnekliği"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: ileri
short: "Aynı imzadan, aynı mesaj ve aynı anahtar için geçerli kalan ikinci bir biçim türetilebilmesi."
related: [ecdsa, signature-verification-ecrecover, signature-replay, digital-signature, openzeppelin]
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

[[ecdsa|ECDSA]] imzası üç parçadan oluşur: `r`, `s` ve `v`. Kullanılan eğrinin matematiği gereği her imzanın `s` değeri için iki geçerli karşılık vardır. Biri diğerinden hesaplanabilir, `v` de buna göre değişir ve ortaya çıkan yeni imza **aynı mesaj ve aynı anahtar için doğrulanır**.

Sonuç şu: imzanın baytları değişmiştir ama imza hâlâ geçerlidir. Bir anahtar ele geçirilmemiş, bir mesaj değiştirilmemiştir. Yalnızca "her imzanın tek bir yazılışı vardır" varsayımı yanlıştır.

## Benzetme

Aynı telefon numarasını `0532 ...` ve `+90 532 ...` diye yazmak gibi. İki yazım da aynı kişiye çıkar. Ama numaraları metin olarak karşılaştıran bir sistem — mesela bir engelli aramalar listesi — ikisini iki ayrı numara sanır. Kural doğrudur, uygulanışı yanlıştır: karşılaştırılan şey numaranın kendisi değil, yazılışıdır.

## Nasıl çalışır?

Zarar imzanın kendisinden değil, imzanın **kimlik** yerine kullanılmasından doğar. Bir sözleşme "bu imzayı daha önce işledim" kaydını imzanın baytları üzerinden tutuyorsa, ikinci biçim o kaydı atlatır ve aynı iş iki kez yapılır ([[signature-replay|imza tekrarı]]).

Savunma iki katmanlıdır.

**İmzayı kimlik olarak kullanma.** Tekrarı engellemek için imzanın baytlarını değil, imzalanan mesajın içindeki nonce'u işaretle. Bu, esneklik sorununu tamamen konu dışı bırakır.

**Kabul edilen biçimi daralt.** İki geçerli `s` değerinden yalnızca birini (alt yarıdakini) kabul et, diğerini reddet; `v` için de yalnızca beklenen iki değeri kabul et. Denetlenmiş imza kütüphaneleri ([[openzeppelin|OpenZeppelin]]'in `ECDSA` kütüphanesi gibi) bu kontrolleri zaten içerir; imza doğrulamasını elle yazmak yerine bunları kullanmak yerleşik tercihtir.

## Dikkat

İşlem imzalarında bu sorun protokol düzeyinde kapatılmıştır: ağ, dar biçimin dışındaki imzaları taşıyan işlemleri kabul etmez. Ama sözleşmelerin kullandığı [[signature-verification-ecrecover|`ecrecover`]] aynı daraltmayı yapmaz; her iki biçimi de kabul eder ve doğru adresi döndürür. Yani protokolün seni koruduğu yer ile sözleşmenin içi aynı yer değildir.

Bu açık tek başına para çalmaz. Bir imzanın "tek kullanımlık bilet" sayıldığı her tasarımda ise sessiz bir kapı açar; imza esnekliği bu yüzden [[digital-signature|imza]] doğrulayan her sözleşmenin denetim listesinde bulunur.
