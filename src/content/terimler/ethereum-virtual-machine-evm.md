---
term: "Ethereum Virtual Machine (EVM)"
tr: ""
aliases: ["evm"]
category: akilli-sozlesmeler
subcategory: "Temeller"
level: orta
short: "Ethereum'un ve onunla uyumlu ağların sözleşme bayt kodunu çalıştıran, yığın tabanlı ve her komutu gas ile ölçülen sanal makine."
related: [virtual-machine-blockchain, bytecode, opcode, stack-evm, gas, evm-compatibility]
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

EVM, [[ethereum|Ethereum]] ağının hesap yapan bölümüdür. Bir işlem geldiğinde ilgili sözleşmenin [[bytecode|bayt kodunu]] çalıştırır ve zincirin durumunu yeni hâline taşır. Hangi hesabın bakiyesi değişti, hangi sözleşmenin deposuna ne yazıldı, çağrı başarılı mı oldu — hepsinin cevabı buradan çıkar.

## Nasıl çalışır?

EVM bir **yığın makinesidir**. İşleyeceği sayıları önce [[stack-evm|yığına]] koyar; komut bu sayıları yığından alır, sonucu yığına geri bırakır. Üstünde çalıştığı birim 256 bit genişliğindedir; bu alışılmadık ölçü, [[hash-function|hash]] çıktılarıyla ve adreslerle tek parça hâlinde çalışabilmek içindir.

Yürütme sırasında üç ayrı alan kullanılır: işlem bitince de kalan [[storage-evm|storage]], yalnızca o çağrı boyunca yaşayan [[memory-evm|memory]] ve gelen çağrının salt okunur verisini tutan [[calldata]].

Her adım için önceden [[gas]] düşülür. Bütçe biterse ya da kod hata verirse işlem **geri alınır**: o işlemde yapılan bütün değişiklikler hiç olmamış sayılır, ama o ana kadar harcanan gas geri gelmez.

## Dikkat

EVM tek bir program değil, bir şartnamedir. Farklı ekipler onu farklı dillerde baştan yazar ve hepsinin aynı bayt koda aynı cevabı vermesi beklenir; aralarındaki en küçük davranış farkı ağı ikiye bölecek bir hata sayılır.

Bir de şunu aklında tut: EVM aynı anda tek bir iş yapar. Bir bloktaki işlemler belirli bir sırayla, tek tek yürür; sözleşmeler kendi aralarında paralel çalışmaz.
