---
term: "secp256k1"
tr: ""
aliases: []
category: kriptografi
subcategory: "İmzalar ve eğriler"
level: orta
short: "Bitcoin ve Ethereum'un imzalarında kullandığı, açık bir standartta tanımlanmış belirli bir eliptik eğrinin adı."
related: [elliptic-curve-cryptography-ecc, ecdsa, ed25519, public-key, wallet-address]
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

secp256k1 bir algoritma değil, bir **eğrinin adıdır**. [[elliptic-curve-cryptography-ecc|Eliptik eğri kriptografisi]] kullanacaksan önce hangi eğri üzerinde çalışacağına karar vermen gerekir; secp256k1, açık bir standartta tanımlanmış ve bütün sayıları herkes tarafından bilinen böyle bir seçimdir. İsmi de o standarttaki adlandırma düzeninden gelir.

[[bitcoin|Bitcoin]] tasarlanırken bu eğri seçildi, Ethereum da aynısını devraldı. Bu yüzden iki ağda da imzalar [[ecdsa|ECDSA]] ile ve bu eğri üzerinde üretilir; cüzdanların ürettiği bütün anahtarlar bu eğriye aittir.

## Nasıl çalışır?

Eğriyi tanımlayan sayılar gizli değildir; ağdaki herkesin aynı eğriyi kullanması gerekir, yoksa kimse kimsenin imzasını doğrulayamaz. Gizli olan tek şey kullanıcının kendi seçtiği sayıdır.

Zincir şöyle ilerler: özel anahtar bir sayıdır, ondan eğri üzerinde bir nokta hesaplanır ([[public-key|açık anahtar]]), o noktadan da [[wallet-address|adres]] türetilir. Her adım tek yönlüdür; adrese bakıp geri dönmenin yolu yoktur.

Eğri seçimi kodun her katmanına sirayet eder: cüzdan kütüphaneleri, donanım cüzdanlarındaki imza yongaları ve düğüm yazılımları hep aynı eğriyi bilerek yazılmıştır. Bir ağın kullandığı eğriyi sonradan değiştirmek, o katmanların hepsini birden değiştirmek demektir.

## Dikkat

Eğri seçimini "daha iyi / daha kötü" diye okuma. Yaygın kullanılan başka eğriler de var ve her biri farklı tasarım tercihlerinin sonucudur: [[ed25519|Ed25519]]'in dayandığı eğri ayrı bir seçimdir ve Solana, Stellar gibi ağlarda kullanılır.

Sık karıştırılan bir ad var: secp256**r**1 — P-256 diye de geçer — bambaşka bir eğridir. Telefonların güvenli donanımı ve [[passkey|passkey]] altyapısı çoğunlukla onu destekler. Ethereum'un yerleşik imza doğrulaması ise secp256k1 içindir; bir passkey imzasını zincirde doğrulamak bu yüzden ek iş gerektirir. [[account-abstraction|Hesap soyutlama]] tartışmalarında bu ayrıntı sık geçer.
