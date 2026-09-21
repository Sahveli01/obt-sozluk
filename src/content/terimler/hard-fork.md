---
term: "Hard Fork"
tr: ""
aliases: ["hardfork", "sert catallanma"]
category: temeller
subcategory: "Ağ ve node"
level: orta
short: "Eski kurallarla uyumsuz bir protokol değişikliği; güncellenmeyen node'lar yeni blokları geçersiz sayar."
related: [soft-fork, fork-blockchain, chain-split, network-upgrade, node]
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

Hard fork, bir zincirin kurallarında geriye dönük uyumu bozan değişikliktir. Yeni kurallara göre üretilen bloklar eski kurallara göre geçersizdir; dolayısıyla yazılımını güncellemeyen bir [[node|node]] bu blokları kabul etmez ve ağın geri kalanını takip edemez. Türkçe konuşurken de "hard fork" denir, çevirisi yerleşmemiştir.

## Benzetme

Bir programın dosya biçimini değiştirmesi gibidir. Yeni sürüm dosyaları yeni biçimde kaydetmeye başlar; eski sürüm o dosyaları açmaya çalıştığında "bozuk" der ve reddeder. Eski sürümde kalanlar dosyanın yanlış olduğunu değil, kendilerinin geride kaldığını fark etmez.

## Nasıl çalışır?

Değişiklik genellikle belirli bir blok yüksekliğine ya da zamana bağlanır: o ana kadar herkes eski kuralla çalışır, o andan sonra güncellenmiş yazılımlar yeni kuralı uygulamaya başlar. Bu yüzden hard fork teknik bir olay olduğu kadar koordinasyon işidir; node çalıştıranların, borsaların, cüzdanların ve altyapı servislerinin aynı takvimde buluşması gerekir.

Herkes zamanında güncellerse ortaya tek bir zincir çıkar ve olay sıradan bir [[network-upgrade|ağ yükseltmesi]] olarak geçer. Kayda değer büyüklükte bir grup eski kuralda ısrar ederse iki zincir de yaşamaya devam eder; buna [[chain-split|zincir bölünmesi]] denir. Yani bölünme hard fork'un tanımı değil, olası sonucudur.

## Dikkat

"Hard fork" kulağa kriz gibi gelir ama çoğu hard fork planlı, duyurulmuş ve sorunsuz geçen bir bakım işidir. Kurallarda yapılan her değişiklik de hard fork değildir: kuralları gevşetmek yerine daraltan değişiklikler eski node'ları dışarıda bırakmaz ve [[soft-fork|soft fork]] olarak yürütülebilir. Bir değişikliğin hangisi olduğunu, eski bir node'un yeni blokları kabul edip etmeyeceğine bakarak anlarsın.
