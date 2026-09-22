---
term: "Hedging"
tr: "Riskten korunma"
aliases: ["riskten korunma", "hedge"]
category: defi
subcategory: "Türevler"
level: baslangic
short: "Var olan bir riski azaltmak için ters yönde ikinci bir pozisyon almak."
related: [derivatives, short-position, options, futures, delta-neutral-strategy]
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

Hedge, elindeki bir riski azaltmak için ters yönde ikinci bir pozisyon almaktır. Amaç kazanmak değil, belirsizliği küçültmektir: bir tarafta kaybedersen diğer tarafta kazanman beklenir.

Risk yok olmaz, el değiştirir; bu devir çoğu zaman bir [[derivatives|türev]] sözleşmesiyle yapılır. Karşı taraf o riski üstlenmeye razı olur ve bunu bedavaya yapmaz. Bu yüzden hedge bir sigorta gibi düşünülebilir — koruma, kendisi için ödenen bir bedelle gelir. Türkçede "riskten korunma" yerleşik karşılıktır, ama günlük konuşmada "hedge" de kullanılır.

## Benzetme

Hem dondurma hem sıcak çay satan bir büfe gibi. Sıcak günde dondurma, soğuk günde çay satılır. İkisini birden satan esnafın kazancı havaya daha az bağlıdır — ama iki ayrı stok taşımak, iki ayrı dolap çalıştırmak zorundadır. Havanın sürprizinden kurtulmanın bedeli budur.

## Dikkat

Hedge bedavaya gelmez. Maliyet, kurulan pozisyonun cinsine göre ödenen bir prim, biriken bir taşıma gideri ya da işlem masrafı olarak çıkar. Elindeki riski küçültürken bu maliyeti kesin olarak kabul etmiş olursun.

Yanlış kurulmuş bir hedge ise riski azaltmaz, ikiye katlar. Ters pozisyon (çoğu zaman bir [[short-position|kısa pozisyon]]) yanlış varlık üzerine açılmışsa, büyüklüğü tutmuyorsa ya da yön karıştırılmışsa elinde birbirini götüren iki pozisyon değil, aynı yöne bakan iki pozisyon olur.
