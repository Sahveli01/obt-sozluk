---
term: "Genesis Block"
tr: "Genesis bloğu"
aliases: ["genesis bloğu", "yaratılış bloğu"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: baslangic
short: "Bir zincirin sıfırıncı bloğu; öncesinde blok olmadığı için başlangıç durumu ve kurallar doğrudan içine yazılır."
related: [block, blockchain, block-height, chain-id, immutability]
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

Genesis bloğu, bir zincirin ilk bloğudur. Diğer bütün bloklardan tek bir farkı vardır: kendinden önce bir blok olmadığı için anlamlı bir öncekini işaret etmez. Zincirin en dibindeki taş budur.

İçeriği üretilerek bulunmaz, zincir kurulurken elle yazılır. Başlangıç bakiyeleri, protokolün ilk parametreleri ve ağın kimliğine dair alanlar burada tanımlanır. Bir düğüm yazılımı açıldığında önce bu bloğu kabul eder; sonraki her [[block|blok]] onun üstüne kurulur.

## Benzetme

Bir soyağacının en tepesindeki isim gibi. Herkese "senden önce kim var" diye sorabilirsin ve zincir hep yukarı çıkar; en tepedeki isme geldiğinde soru biter, çünkü onun öncesi tanım gereği yoktur.

## Dikkat

İki düğümün aynı ağda sayılması için aynı genesis bloğunda anlaşmış olması gerekir. Farklı bir genesis, farklı bir zincir demektir; [[testnet|test ağlarının]] ana ağdan ayrıldığı nokta da burasıdır. Ayrımı günlük kullanımda pekiştiren şey ise [[chain-id|zincir kimliğidir]].

Genesis bloğunun içeriği kanıtlanmış değil, kabul edilmiş bir başlangıçtır. [[immutability|Değiştirilemezlik]] o bloktan sonrasını korur; başlangıç dağıtımının kendisi bir uzlaşının sonucu değil, kurucuların verdiği bir karardır.
