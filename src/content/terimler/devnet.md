---
term: "Devnet"
tr: ""
aliases: ["gelistirme agi", "dev net"]
category: temeller
subcategory: "Ağ ve node"
level: orta
short: "Geliştiricinin kendi denetiminde kurduğu, istendiğinde sıfırlanabilen küçük geliştirme ağı."
related: [testnet, mainnet, node, anvil, hardhat]
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

Devnet, geliştirme sırasında kullanılan ve kontrolü tamamen geliştiricide olan bir ağdır. İki anlamda kullanılır: çoğu zaman kendi bilgisayarında saniyeler içinde açıp kapattığın yerel bir ağ, bazen de bir ekibin herkese açık tuttuğu ama kararlılık sözü vermediği, sık sık sıfırlanan bir deneme ağı. Türkçede karşılığı yerleşmedi; "devnet" ya da "local ağ" denir.

Ayrım şudur: [[testnet|testnet]] paylaşılan ve herkese açık bir provadır, devnet ise senin masandır.

## Nasıl çalışır?

Yerel devnet genellikle tek bir [[node|node]] çalıştırır ve konsensüsü taklit eder: blok üretmek için beklemez, sen işlem gönderdiğin anda blok üretir ya da istediğin zaman ürettirir. Başlangıçta hazır ve fonlanmış hesaplar verir, böylece [[faucet|faucet]] beklemene bile gerek kalmaz. [[anvil|Anvil]] ve [[hardhat|Hardhat]] gibi araçlar bunu tek komutla yapar.

Kontrol sende olduğu için normalde imkânsız şeyleri deneyebilirsin: zamanı ileri almak, zinciri bir önceki duruma geri sarmak, bir hesabın bakiyesini elle ayarlamak ya da ağı silip sıfırdan başlatmak. Testler tam olarak bu yüzden devnet üzerinde koşar; her test temiz bir zincirle başlar.

## Dikkat

Devnet'te çalışan kod, gerçek ağda çalışacağının garantisi değildir: orada tek bir node ve sıfır rekabet vardır, [[mainnet|mainnet'te]] ise ücret piyasası, sıralama ve başka kullanıcılarla yarış. "Devnet" kelimesinin sınırı da projeden projeye kayar — bir ekip devnet dediğinde herkese açık bir ağı kastediyor olabilir, bağlanmadan önce hangisini kastettiğine bak.
