---
term: "Consensus Layer"
tr: "Konsensüs Katmanı"
aliases: []
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Blokların sırasına ve hangi dalın geçerli sayılacağına karar verme işini üstlenen katman."
related: [execution-layer, settlement-layer, consensus-client, consensus-mechanism, modular-blockchain, finality]
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

Konsensüs katmanı, hangi bloğun hangi sırayla geçerli sayılacağına karar verme rolüdür. İşlemlerin ne yaptığıyla ilgilenmez; ağdaki bütün katılımcıların aynı sıra üzerinde buluşmasını, bu sıranın durmadan ilerlemesini ve bir kez yerleştikten sonra geri alınmamasını ([[finality|kesinlik]]) sağlar.

Modüler tasarımların çoğunda bu rol yürütmeden ayrı düşünülür: bir zincir, işlemleri kendisi çalıştırmadan yalnızca "sıraya karar veren ve veriyi taşıyan" katman olarak da kullanılabilir.

## Nasıl çalışır?

Sıra kurulurken içeriğin geçerliliği ayrı bir sorudur. Konsensüs katmanı bir bloğun geçerli olup olmadığını kendisi hesaplamaz; bunu [[execution-layer|yürütme katmanına]] sorar ve yalnızca cevabı kullanır. Böylece iki iş birbirinden bağımsız geliştirilebilir.

Rolün somut kuralları [[consensus-mechanism|konsensüs mekanizmasıyla]] belirlenir: kim blok önerir, kim oy verir, kötü davranan ne kaybeder. Katman "hangi iş" sorusunun, mekanizma "hangi kural" sorusunun cevabıdır; aynı katman farklı mekanizmalarla doldurulabilir. [[validator|Doğrulayıcıların]] yaptığı iş de bu katmanda geçer.

Bu rolü dışarıdan almak mümkündür. Birden çok üst zincirin işlemlerini tek bir yerde sıraya dizen [[shared-sequencer|paylaşılan sıralayıcı]] tasarımları, konsensüsü ayrı bir hizmet hâline getirme fikrinin örneğidir.

## Dikkat

Aynı sözcük iki ayrı düzlemde kullanılır ve sık karışır. Mimaride konsensüs katmanı bir sorumluluk alanıdır — kimse onu indirip kuramaz. Node kurarken karşına çıkan [[consensus-client|konsensüs istemcisi]] ise sürümü olan, diskte yer kaplayan, güncellenen bir programdır. Bu yüzden "konsensüs katmanını güncelledim" cümlesi yanlıştır: güncellenen şey istemcidir, katmanın tanımı aynı kalır.
