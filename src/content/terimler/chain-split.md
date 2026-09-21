---
term: "Chain Split"
tr: "Zincir bölünmesi"
aliases: ["zincir bolunmesi", "chainsplit"]
category: temeller
subcategory: "Ağ ve node"
level: orta
short: "Bir çatallanmanın kalıcılaşması; aynı geçmişi paylaşan iki ayrı zincirin ayrı ayrı devam etmesi."
related: [fork-blockchain, hard-fork, soft-fork, replay-attack, chain-id]
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

Zincir bölünmesi, bir [[fork-blockchain|çatallanmanın]] kapanmaması ve iki dalın da yaşamaya devam etmesidir. Kaza kaynaklı çatallanmalar birkaç blokta kendiliğinden kapanır; bölünme ise insanların kararıyla kalıcılaşır. Tipik olarak bir [[hard-fork|hard fork]] sırasında ağın bir kısmı yeni kuralları benimsemeyi reddettiğinde ortaya çıkar.

## Benzetme

İkiye ayrılan bir dernek gibidir. Bölünme gününe kadarki bütün geçmiş, defterler ve üye listesi iki tarafın da elindedir; ikisi de "asıl dernek biziz" diyebilir. Ama o günden sonra aldıkları kararlar artık birbirini bağlamaz.

## Nasıl çalışır?

Bölünme anına kadarki bütün kayıtlar her iki zincirde de aynıdır. Yani bakiyeler kopyalanır: bölünmeden önce bir adresin sahibiysen, aynı özel anahtarla iki zincirde de işlem yapabilirsin. Bölünmeden sonra zincirler ayrışır; her biri kendi bloklarını üretir, kendi kurallarını uygular ve genellikle kendi [[chain-id|zincir kimliğini]] ve token adını alır.

Ağın güvenliği de bölünür: daha önce tek bir zinciri koruyan madencilik gücü ya da stake, artık iki zincir arasında paylaşılır.

## Dikkat

En sinsi risk [[replay-attack|replay]] saldırısıdır: bir zincirde imzaladığın işlem, kurallar hâlâ birbirine benzediği için diğer zincirde de geçerli olabilir ve orada da uygulanabilir. Ciddi bölünmelerde bunu engellemek için zincirlere replay koruması eklenir. Bölünme sonrası işlem yapmadan önce hangi ağa bağlı olduğunu ve o ağın replay koruması olup olmadığını kontrol et.
