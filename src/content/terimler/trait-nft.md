---
term: "Trait (NFT)"
tr: "Özellik"
aliases: []
category: nft
subcategory: ""
level: baslangic
short: "Bir NFT'nin metadata'sında listelenen tek bir özellik: adı ve o parçadaki değeri."
related: [nft-metadata, rarity, generative-art, nft-collection, non-fungible-token-nft]
disambiguation: [trait-rust]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Trait, bir NFT'nin özellik listesindeki tek bir satırdır: bir ad ve o parçadaki değeri — "Arka plan: Mavi", "Gözlük: Yok". Bu satırlar [[nft-metadata|metadata]] belgesinin `attributes` alanında durur ve parçanın nelerden kurulduğunu tarif eder.

Zincir bu satırlarla ilgilenmez; sözleşme yalnızca kimin hangi numaraya sahip olduğunu bilir. Listeyi okuyup ekranda etiketler hâlinde gösteren şey arayüzlerdir. Koleksiyon içinde filtreleme, sıralama ve [[rarity|nadirlik]] hesapları da aynı listeden çıkar.

## Benzetme

Bir oyunun karakter yaratma ekranı gibi. Karşına satır satır seçenekler gelir: saç, gözlük, ceket rengi. Sen seçtikçe karakter oluşur ve sonunda elinde iki şey kalır — bir görüntü ve o görüntüyü tarif eden seçim listesi. Trait'ler o listedir; görselin kendisi değil, görselin dökümü.

## Dikkat

Programlamada aynı kelime bambaşka bir şeydir: Rust'ta [[trait-rust|trait]] bir tipin hangi davranışları sunacağını tanımlayan sözleşmedir, bir görselin özelliği değil.

İkinci nokta: özellikler metadata'dan geldiği için, metadata değişebiliyorsa özellikler de değişebilir. Arayüzde gördüğün etiketler zincire kazınmış garantiler değil, o an okunan bir dosyanın içeriğidir.
