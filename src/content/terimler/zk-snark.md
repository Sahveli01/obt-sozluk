---
term: "zk-SNARK"
tr: ""
aliases: ["snark"]
category: kriptografi
subcategory: "Sıfır bilgi (ZK) ve ileri kriptografi"
level: ileri
short: "Kısa ve tek seferde gönderilen, doğrulanması ucuz olan sıfır bilgi ispatı ailesi; çoğu üye bir kurulum töreni gerektirir."
related: [zero-knowledge-proof-zkp, zk-stark, trusted-setup, groth16, plonk, zk-rollup]
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

zk-SNARK tek bir algoritmanın değil, bir ispat ailesinin adıdır. Adı da tam olarak neyi vaat ettiğini söyler:

- **Succinct (özlü):** kanıt, doğrulanan hesabın yanında çok küçüktür ve kontrolü hızlıdır.
- **Non-interactive (etkileşimsiz):** kanıtlayanla doğrulayan arasında gidiş geliş yoktur; tek bir mesaj gönderilir ve yıllar sonra bile kontrol edilebilir.
- **Argument of Knowledge (bilgi savı):** kanıtlayan yalnızca iddianın doğru olduğunu değil, onu doğru kılan gizli girdiyi **bildiğini** gösterir. "Argument" kelimesi, güvenliğin sınırsız güçte değil makul hesap gücüne sahip bir saldırgana karşı tanımlandığını belirtir.
- **zk (sıfır bilgi):** kanıt, gizli girdi hakkında bir şey sızdırmaz.

Terim çevrilmeden kullanılır.

## Nasıl çalışır?

Önce iddia bir [[circuit-zk|devreye]] çevrilir: programın her adımı aritmetik kısıtlara dönüşür. Sonra bir kurulum aşaması iki parametre takımı üretir — biri [[prover|ispatlayıcının]], diğeri doğrulayanın kullanacağı. İspatlayıcı, devreyi gizli girdisiyle çalıştırıp kanıtı üretir.

Yaygın kullanılan SNARK yapılarının çoğu bu kurulumun bir [[trusted-setup|güvenilir kurulumla]] yapılmasını ister ve eliptik eğriler üzerindeki eşleştirme (pairing) matematiğine dayanır. Kurulum gerektirmeyen SNARK yapıları da vardır; aile tek tip değildir.

## Dikkat

Adındaki "zk" her zaman kelimenin tam anlamıyla geçerli değildir. [[zk-rollup|ZK rollup'ların]] çoğunda bu ispatlar gizlilik için değil, **özlülük** için kullanılır: gizlenen bir veri yoktur, kazanılan şey doğrulamanın ucuzluğudur.

İkincisi, güvenliğin dayandığı varsayımı bilmek gerekir. Eşleştirme tabanlı SNARK'ların güvenliği eliptik eğri problemlerine dayanır; bu problemler büyük ölçekli kuantum bilgisayarlar karşısında dayanıklı kabul edilmez ([[post-quantum-cryptography|kuantum sonrası kriptografi]]).
