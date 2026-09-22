---
term: "Validity Proof"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: ileri
short: "Bir durum geçişinin kurallara uygun yapıldığını baştan gösteren, doğrulanması hesabı tekrarlamaktan çok daha ucuz olan kriptografik kanıt."
related: [zk-rollup, fraud-proof, zero-knowledge-proof-zkp, zk-snark, verifier, proof-aggregation]
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

Geçerlilik kanıtı, "eski durumdan yeni duruma, zincirin kurallarına uyularak geçildi" iddiasını taşıyan kriptografik bir belgedir. Ana zincirdeki doğrulayıcı sözleşme bu kanıta bakar ve işlemleri hiç görmeden, hiçbirini çalıştırmadan iddiayı kabul ya da reddeder.

[[fraud-proof|Hile kanıtıyla]] ilişkisi terslikleri üzerinedir: hile kanıtı yanlış olduğu iddia edilen bir sonucu sonradan çürütmek için kullanılır ve yalnızca itiraz varsa üretilir; geçerlilik kanıtı ise her sonuçla birlikte, itiraz beklenmeden gelir. İlkinde bekleme süresi vardır, ikincisinde hesap maliyeti. Türkçede yerleşik bir karşılığı yoktur; metinlerde İngilizcesi kullanılır.

## Nasıl çalışır?

Yürütmenin tamamı, kanıt sisteminin anlayacağı biçime — aritmetik kısıtlar kümesine — dökülür. [[prover|İspatlayıcı]] bu kısıtları sağlayan bir çözüm bildiğini gösteren kanıtı üretir. Kanıtın boyutu ve doğrulama maliyeti, kanıtlanan hesap ne kadar büyürse büyüsün küçük kalır; ağır iş tamamen ispatlayıcı tarafındadır.

Bu asimetri terimin bütün değerini açıklar: bir kez pahalı üretilir, sonsuz kez ucuza kontrol edilir.

## Dikkat

Kanıt, hesabın **belirtilen kurallara göre** yapıldığını gösterir. Kuralların doğru yazıldığını göstermez. Devrede, derleyicide ya da doğrulayıcı sözleşmede bir hata varsa, hatalı kuralın hatalı sonucu da kusursuz biçimde kanıtlanır.

Güven bu yüzden ortadan kalkmaz, yer değiştirir: bir işletmeciye değil, kanıt sisteminin matematiğine, uygulamasına ve bazı sistemlerde gereken [[trusted-setup|güvenilir kuruluma]] güvenirsin.

Son olarak kanıt yalnızca hesabın doğruluğunu söyler, verinin nerede olduğunu değil. Kanıt zincirde olup veri dışarıda kalabilir; o zaman kimse hırsızlık yapamaz ama kimse de kendi bakiyesini gösteremeyebilir.
