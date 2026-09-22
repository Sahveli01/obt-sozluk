---
term: "BLS Signature"
tr: ""
aliases: []
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: ileri
short: "Binlerce imzanın sonradan, imzacılarla hiç koordine olmadan tek bir imzaya indirilmesine izin veren imza şeması."
related: [signature-aggregation, schnorr-signature, digital-signature, attestation, validator, elliptic-curve-cryptography-ecc]
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

BLS imzası, adını onu tanımlayan üç araştırmacının baş harflerinden alan bir [[digital-signature|imza]] şemasıdır. Ayırt edici özelliği toplanabilirliktir — ama [[schnorr-signature|Schnorr]]'dan farklı bir biçimde: imzalar **sonradan**, imzacılar birbirinden habersizken ve kimse kimseyle konuşmadan birleştirilebilir ([[signature-aggregation|imza birleştirme]]).

Bu fark ölçek getirir. Binlerce kişi aynı mesajı ayrı ayrı imzalar, ağdaki herhangi biri bu imzaları toplar, ortaya tek bir imza çıkar ve doğrulayan taraf tek bir kontrol yapar.

## Nasıl çalışır?

Altında "eşleştirme" denen özel bir işlem yatar. Bu işlem her eliptik eğride tanımlı değildir; BLS bu yüzden özel olarak seçilmiş eğriler üzerinde çalışır ve o eğrilerin adları (BLS12-381 gibi) sık karşına çıkar.

Eşleştirme, doğrulayan tarafa şunu sorma imkânı verir: "elimdeki bu tek imza, şu açık anahtar listesinin şu mesajı imzalamasıyla tutarlı mı?" Cevap tek bir hesapla alınır.

Ethereum'un konsensüs katmanı bunun üstüne kuruludur: her turda binlerce [[validator|validator]] aynı blok hakkındaki görüşünü imzalar ([[attestation|attestation]]) ve bu imzalar birleştirilerek taşınır. Her imzanın tek tek taşınması gerekseydi bu ölçek mümkün olmazdı.

## Dikkat

Bedava değildir. Tek bir BLS imzasını doğrulamak, yaygın imza şemalarında tek bir imzayı doğrulamaktan pahalıdır; kazanç binlerce imzayı tek seferde doğrulamaktan gelir. Az sayıda imzacı için bu takas mantıklı olmayabilir.

İkincisi, naif kurulmuş bir toplama düzeninde, başkalarının açık anahtarlarına bakarak kendi anahtarını ona göre seçen biri, hiç katılmadığı bir imzayı kendi üstüne yazabilir. Bu yüzden protokoller imzacılardan, anahtarlarına gerçekten sahip olduklarını gösteren ek bir kanıt ister.

Üçüncüsü, güvenliği eşleştirme içeren varsayımlara dayanır. Bunlar [[ecdsa|ECDSA]]'nın dayandığı varsayımdan farklı ve daha yeni bir zemindir; "aynı güvenlik" demek yerine "başka bir varsayım" demek daha doğrudur.
