---
term: "Chain Reorganization (Reorg)"
tr: "Zincir Yeniden Düzenlemesi"
aliases: ["reorg", "yeniden düzenleme"]
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: orta
short: "Bir düğümün daha ağır bir zinciri görüp benimsediği son bloklardan vazgeçmesi."
related: [fork-choice-rule, longest-chain-rule, orphan-block, confirmation, finality, mempool]
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

Bir düğüm her an, o ana kadar duyduğu en ağır zinciri doğru kabul eder. **Reorg**, düğümün daha ağır bir alternatif duyması ve benimsediği son blokları bırakıp yeni dala geçmesidir.

Kullanıcı açısından anlamı tek cümleyle şudur: onaylanmış görünen bir işlem, bir süre sonra hiç olmamış gibi görünebilir.

## Benzetme

İki kişinin aynı anda düzenlediği ortak bir liste gibi. İnternetin gidip geldiği bir yerde sen birkaç satır eklersin, arkadaşın da kendi tarafında başka satırlar ekler. Bağlantı geri geldiğinde uygulama iki sürümden birini asıl sayar; diğer taraftaki son satırlar listeden düşer. Kimse yalan söylememiştir, kimse silmemiştir — yalnızca iki farklı "şu anki hâl" vardı ve biri kazandı.

## Nasıl çalışır?

Aynı anda iki geçerli blok üretilirse ağın bir kısmı birini, bir kısmı diğerini duyar; ortada kısa süreli iki dal oluşur. Her düğüm [[fork-choice-rule|dal seçim kuralını]] uygular — [[longest-chain-rule|en uzun zincir kuralı]] bu kuralların en bilinenidir — ve bir sonraki bloklar hangi dalın üstüne gelirse o dal ağırlaşır.

Kaybeden daldaki bloklar terk edilir ([[orphan-block|orphan]]). İçlerindeki işlemler yok olmaz: kazanan dalda zaten varsa bir şey değişmez, yoksa çoğu düğümde [[mempool|mempool'a]] geri düşer ve yeniden bloğa alınmayı bekler.

Çoğu reorg bir iki blok derinliğinde ve sıradandır. Derin bir reorg ise ya ciddi bir ağ sorununa ya da [[51-attack|çoğunluk gücünü ele geçirmiş]] bir tarafa işaret eder.

## Dikkat

Borsaların, köprülerin ve ödeme sistemlerinin işlemi görür görmez "tamam" dememesinin sebebi tam olarak budur. Bekledikleri şey formalite değil, o işlemin düşebileceği bir dalda kalma ihtimalinin küçülmesidir ([[confirmation|onay]]).

Kaç blok bekleneceği ağa ve tutara göre değişir; tek bir doğru sayı yoktur. [[finality|Kesinlik]] ilan eden ağlarda ise ölçü sayı değil, kesinleşme anıdır: o noktadan sonra reorg protokol kurallarına aykırıdır.
