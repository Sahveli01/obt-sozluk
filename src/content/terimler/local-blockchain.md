---
term: "Local Blockchain"
tr: "Yerel blockchain"
aliases: ["yerel zincir", "yerel blok zinciri"]
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: baslangic
short: "Kendi bilgisayarında çalışan, hazır bakiyeli hesaplarla gelen ve istediğin an sıfırlanabilen geliştirme zinciri."
related: [devnet, anvil, hardhat, testnet, node]
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

Yerel blockchain, kendi bilgisayarında çalışan tek kişilik bir zincirdir. Bir komutla açılır, sana bakiyesi dolu hazır hesaplar verir ve gönderdiğin işlemi beklemeden onaylar. Kapattığında her şey silinir.

Sözleşme geliştirmenin varsayılan yeri burasıdır. [[testnet|Testnet]] bile paylaşılan bir ağdır: musluktan test parası istemek, blokların gelmesini beklemek ve başkalarının işlemleriyle aynı sırada durmak gerekir. Yerel zincirde bunların hiçbiri yoktur; testler saniyeler içinde koşar.

[[hardhat|Hardhat]] ve [[anvil|Anvil]] gibi araçlar bunu tek komutla açar. Kavramın kendisi [[devnet|devnet]] maddesinde anlatılır; burada anlatılan, o kavramın geliştirme akışındaki yeridir.

## Benzetme

Masaya kurulmuş maket demiryolu gibidir. Raylar gerçek, trenler gerçekten hareket ediyor, makas gerçekten çalışıyor — ama kimse yolcu değil. Treni kasten raydan çıkarabilir, hattı söküp baştan kurabilirsin. Gerçek hatta çıkmadan önce denemelerin yapıldığı yer burasıdır.

## Dikkat

Yerel zincirde çalışan kod gerçek ağda çalışmayabilir. Orada başkalarının işlemleri, dolu bloklar, dalgalanan ücretler ve senden önce davranan aktörler vardır; burada hiçbiri yok.

Daha somut bir eksik de var: gerçek ağda konuştuğun diğer sözleşmeler (bir borsa, bir fiyat kaynağı) boş bir yerel zincirde bulunmaz. Onlarla denemek için [[mainnet-fork|mainnet fork]] kullanılır.
